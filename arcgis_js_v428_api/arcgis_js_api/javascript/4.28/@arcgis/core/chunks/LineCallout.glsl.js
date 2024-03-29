/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{f as e}from"./vec2.js";import{c as i}from"./vec2f64.js";import{Z as r}from"./vec4f64.js";import{S as o}from"./Slice.glsl.js";import{A as t,a,b as n}from"./HUDVisibility.glsl.js";import{m as l}from"./MultipassGeometryTest.glsl.js";import{b as d}from"./VerticalOffset.glsl.js";import{F as s}from"./Float2PassUniform.js";import{F as c}from"./Float4PassUniform.js";import{F as p}from"./FloatPassUniform.js";import{g as f}from"./interfaces3.js";import{S as g}from"./ShaderBuilder.js";import{V as S}from"./VertexAttribute.js";function v(e){return null!=e?e:r}const m=i(),u=Object.freeze(Object.defineProperty({__proto__:null,build:function(i){const r=new g,{vertex:u,fragment:h}=r;return u.include(t),r.include(a,i),r.include(o,i),r.attributes.add(S.UV0,"vec2"),u.uniforms.add(new c("viewport",((e,i)=>i.camera.fullViewport)),new p("lineSize",((e,i)=>e.size>0?Math.max(1,e.size)*i.camera.pixelRatio:0)),new s("pixelToNDC",((i,r)=>e(m,2/r.camera.fullViewport[2],2/r.camera.fullViewport[3]))),new p("borderSize",((e,i)=>null!=e.borderColor?i.camera.pixelRatio:0)),new s("screenOffset",((i,r)=>e(m,i.horizontalScreenOffset*r.camera.pixelRatio,0)))),r.varyings.add("coverageSampling","vec4"),r.varyings.add("lineSizes","vec2"),i.multipassEnabled&&r.varyings.add("depth","float"),i.occlusionTestEnabled&&r.include(n),i.hasScreenSizePerspective&&d(u),u.code.add(f`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 endPoint = projectPositionHUD(projectAux);

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
    ${i.occlusionTestEnabled?f`
      if (!testHUDVisibility(endPoint)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }`:""}

    ${i.hasScreenSizePerspective?f`
      vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
      vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);
        `:f`vec2 screenOffsetScaled = screenOffset;`}
      // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
      // correct depth value
      vec3 posView = (view * vec4(position, 1.0)).xyz;
      ${i.multipassEnabled?"depth = posView.z;":""}

      applyHUDViewDependentPolygonOffset(auxpos1.w, projectAux.absCosAngle, posView);
      vec4 startPoint = proj * vec4(posView, 1.0);
      // Apply screen offset to both start and end point
      vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
      startPoint.xy += screenOffsetNorm * startPoint.w;
      endPoint.xy += screenOffsetNorm * endPoint.w;
      // Align start and end to pixel origin
      vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
      vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${i.depthHudEnabled?i.depthHudAlignStartEnabled?f`endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);`:f`startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);`:""}
      vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);
      // The direction of the line in screen space
      vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${i.hasScreenSizePerspective?f`
      float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
      float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);
        `:f`
      float lineSizeScaled = lineSize;
      float borderSizeScaled = borderSize;
        `}
      float halfPixelSize = lineSizeScaled * 0.5;

      // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
      float padding = 1.0 + borderSizeScaled;
      vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

      // Offset x/y from the center of the line in screen space
      projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

      // Compute a coverage varying which we can use in the fragment shader to determine
      // how much a pixel is actually covered by the line (i.e. to anti alias the line).
      // This works by computing two coordinates that can be linearly interpolated and then
      // subtracted to find out how far away from the line edge we are.
      float edgeDirection = (uv0.x * 2.0 - 1.0);

      float halfBorderSize = 0.5 * borderSizeScaled;
      float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
      float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

      float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

      coverageSampling = vec4(
        // Edge coordinate
        outerEdgeCoverageSampler,

        // Border edge coordinate
        outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

        // Line offset
        halfPixelSize - 0.5,

        // Border offset
        halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
      );

      lineSizes = vec2(lineSizeScaled, borderSizeScaled);

      gl_Position = projectedPosition;
    }
  `),h.uniforms.add(new c("uColor",(e=>v(e.color))),new c("borderColor",(e=>v(e.borderColor)))),i.multipassEnabled&&(h.include(l,i),h.uniforms.add(new s("inverseViewport",((e,i)=>i.inverseViewport)))),h.code.add(f`
    void main() {
      ${i.multipassEnabled?"if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }":""}

      // Mix between line and border coverage offsets depending on whether we need
      // a border (based on the sidedness).
      vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

      // Mix between border and line color based on the line coverage (conceptually the line blends on top of the
      // border background).
      //
      // Anti-alias by blending final result using the full (including optional border) coverage and the color alpha
      float borderAlpha = uColor.a * borderColor.a * coverage.y;
      float colorAlpha = uColor.a * coverage.x;

      float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);

    ${i.depthHudEnabled?f`
      if (finalAlpha < 0.01) {
        discard;
      }
      `:f`
      vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
      fragColor = vec4(finalRgb, finalAlpha);
      `}
  }
  `),r}},Symbol.toStringTag,{value:"Module"}));export{u as L};
