// Vertex shader for particle system
export const particleVertexShader = /* glsl */`
  uniform float uTime;
  uniform float uScrollProgress;
  uniform float uPhase;
  
  attribute float aSize;
  attribute float aPhaseOffset;
  attribute vec3 aVelocity;
  attribute float aLifetime;
  
  varying float vAlpha;
  varying vec3 vColor;
  varying float vPhase;
  
  // Palette function
  vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    return a + b * cos(6.28318 * (c * t + d));
  }
  
  void main() {
    float phase = uPhase;
    float time = uTime;
    float scroll = uScrollProgress;
    
    vec3 pos = position;
    
    // CHAOS phase: erratic, fragmented motion
    if (phase < 1.0) {
      float chaos = 1.0 - phase;
      pos += aVelocity * sin(time * (0.5 + aPhaseOffset * 2.0)) * chaos * 3.0;
      pos.x += sin(time * 0.3 + aPhaseOffset * 6.28) * chaos * 5.0;
      pos.y += cos(time * 0.4 + aPhaseOffset * 3.14) * chaos * 4.0;
      pos.z += sin(time * 0.2 + aPhaseOffset * 9.42) * chaos * 3.0;
    }
    
    // DISCOVERY phase: converging inward
    if (phase >= 1.0 && phase < 2.0) {
      float t = phase - 1.0;
      float pullStrength = t * 0.3;
      pos = mix(pos, pos * (1.0 - pullStrength), t);
      pos += aVelocity * sin(time * 0.5 + aPhaseOffset) * (1.0 - t) * 1.5;
    }
    
    // EXPERTISE phase: orbital, energetic
    if (phase >= 2.0 && phase < 3.0) {
      float t = phase - 2.0;
      float angle = time * (0.2 + aPhaseOffset * 0.3) + aPhaseOffset * 6.28;
      float radius = length(pos.xy);
      pos.x = cos(angle) * radius * (1.0 + t * 0.5);
      pos.y = sin(angle) * radius * (1.0 + t * 0.5);
      pos.z += sin(time * 0.6 + aPhaseOffset) * t * 2.0;
    }
    
    // CREATION phase: assembling, grid-like
    if (phase >= 3.0 && phase < 4.0) {
      float t = phase - 3.0;
      vec3 gridPos = floor(pos * 0.5) * 2.0;
      pos = mix(pos, gridPos, t * 0.7);
      pos += aVelocity * (1.0 - t) * 0.5;
    }
    
    // TRANSFORMATION phase: morphing
    if (phase >= 4.0 && phase < 5.0) {
      float t = phase - 4.0;
      pos *= 1.0 + sin(time * 0.5 + aPhaseOffset * 6.28) * t * 0.3;
    }
    
    // EVOLUTION phase: expanding universe
    if (phase >= 5.0 && phase < 6.0) {
      float t = phase - 5.0;
      pos *= 1.0 + t * 2.0;
      float spiral = atan(pos.y, pos.x) + time * 0.1 * t;
      float r = length(pos.xy);
      pos.x = cos(spiral) * r;
      pos.y = sin(spiral) * r;
    }
    
    // CONVERGENCE phase: all converging to center
    if (phase >= 6.0) {
      float t = phase - 6.0;
      pos = mix(pos, vec3(0.0, 0.0, pos.z * 0.1), t * 0.8);
    }
    
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectedPosition;
    
    // Size based on distance and phase
    float dist = -viewPosition.z;
    gl_PointSize = aSize * (80.0 / dist) * (0.5 + 0.5 * sin(time + aPhaseOffset));
    
    // Color palette shifts with phase
    float colorT = aPhaseOffset + scroll * 0.5;
    if (phase < 1.0) {
      // CHAOS: cold, fractured blues and reds
      vColor = palette(colorT, 
        vec3(0.5, 0.1, 0.2), vec3(0.5, 0.3, 0.4),
        vec3(1.0, 0.5, 0.7), vec3(0.0, 0.2, 0.5));
    } else if (phase < 2.0) {
      // DISCOVERY: scanning greens
      vColor = palette(colorT,
        vec3(0.0, 0.5, 0.3), vec3(0.2, 0.5, 0.2),
        vec3(1.0, 1.0, 0.5), vec3(0.0, 0.3, 0.7));
    } else if (phase < 3.0) {
      // EXPERTISE: electric purples and cyans
      vColor = palette(colorT,
        vec3(0.3, 0.0, 0.5), vec3(0.5, 0.3, 0.5),
        vec3(1.0, 0.5, 1.0), vec3(0.2, 0.0, 0.8));
    } else if (phase < 4.0) {
      // CREATION: warm ambers
      vColor = palette(colorT,
        vec3(0.5, 0.3, 0.0), vec3(0.5, 0.4, 0.1),
        vec3(1.0, 0.8, 0.5), vec3(0.0, 0.1, 0.3));
    } else if (phase < 5.0) {
      // TRANSFORMATION: shifting spectrum
      vColor = palette(colorT + time * 0.1,
        vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5),
        vec3(1.0, 1.0, 1.0), vec3(0.0, 0.33, 0.67));
    } else if (phase < 6.0) {
      // EVOLUTION: golden
      vColor = palette(colorT,
        vec3(0.5, 0.4, 0.1), vec3(0.5, 0.4, 0.2),
        vec3(1.0, 0.9, 0.5), vec3(0.0, 0.2, 0.4));
    } else {
      // CONVERGENCE: pure white light
      vColor = vec3(0.8 + 0.2 * sin(time + aPhaseOffset),
                    0.9 + 0.1 * cos(time * 1.3),
                    1.0);
    }
    
    vAlpha = aLifetime * (0.4 + 0.6 * abs(sin(time * 0.5 + aPhaseOffset)));
    vPhase = phase;
  }
`

export const particleFragmentShader = /* glsl */`
  varying float vAlpha;
  varying vec3 vColor;
  varying float vPhase;
  
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    
    // Soft circular particle with glow
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    float glow = exp(-dist * 6.0) * 0.8;
    
    // Star-like cross for EXPERTISE phase
    if (vPhase >= 2.0 && vPhase < 3.0) {
      float cross = max(
        1.0 - abs(uv.x) * 8.0,
        1.0 - abs(uv.y) * 8.0
      );
      glow += max(0.0, cross) * 0.5;
    }
    
    float finalAlpha = (alpha + glow) * vAlpha;
    
    gl_FragColor = vec4(vColor, finalAlpha);
    
    if (finalAlpha < 0.01) discard;
  }
`

// Background gradient shader
export const bgVertexShader = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

export const bgFragmentShader = /* glsl */`
  uniform float uTime;
  uniform float uPhase;
  uniform vec2 uResolution;
  varying vec2 vUv;
  
  // FBM noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1,0)), f.x),
      mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x),
      f.y
    );
  }
  
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.1 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }
  
  vec3 phaseColor(float phase, vec2 uv, float time) {
    vec2 p = uv * 3.0;
    float n = fbm(p + time * 0.05);
    float n2 = fbm(p * 2.0 - time * 0.03 + n);
    
    vec3 color;
    
    if (phase < 1.0) {
      // CHAOS: dark void with red-blue turbulence
      color = mix(
        vec3(0.0, 0.01, 0.04),
        vec3(0.08, 0.0, 0.12),
        n2
      );
      color += vec3(0.05, 0.0, 0.08) * fbm(p * 4.0 - time * 0.08);
    } else if (phase < 2.0) {
      float t = phase - 1.0;
      // DISCOVERY: deep teal scanning
      color = mix(
        vec3(0.0, 0.03, 0.05),
        vec3(0.0, 0.08, 0.06),
        n2
      );
      color += vec3(0.0, 0.15, 0.12) * n * t;
    } else if (phase < 3.0) {
      float t = phase - 2.0;
      // EXPERTISE: deep purple nebula
      color = mix(
        vec3(0.02, 0.0, 0.06),
        vec3(0.05, 0.0, 0.1),
        n2
      );
      color += vec3(0.08, 0.0, 0.15) * n * t;
    } else if (phase < 4.0) {
      float t = phase - 3.0;
      // CREATION: warm dark amber
      color = mix(
        vec3(0.04, 0.02, 0.0),
        vec3(0.08, 0.04, 0.0),
        n2
      );
      color += vec3(0.12, 0.06, 0.0) * n * t;
    } else if (phase < 5.0) {
      float t = phase - 4.0;
      // TRANSFORMATION: multicolor deep
      color = mix(
        vec3(0.02, 0.03, 0.05),
        vec3(0.04, 0.02, 0.06),
        n2 + sin(time * 0.3) * 0.5
      );
    } else if (phase < 6.0) {
      float t = phase - 5.0;
      // EVOLUTION: cosmic gold
      color = mix(
        vec3(0.03, 0.02, 0.0),
        vec3(0.06, 0.04, 0.01),
        n2
      );
    } else {
      float t = phase - 6.0;
      // CONVERGENCE: pure deep space
      color = mix(
        vec3(0.0, 0.01, 0.03),
        vec3(0.02, 0.03, 0.06),
        n2 * (1.0 - t * 0.5)
      );
      color += vec3(0.05, 0.08, 0.12) * t * n;
    }
    
    return color;
  }
  
  void main() {
    vec3 color = phaseColor(uPhase, vUv, uTime);
    
    // Vignette
    vec2 center = vUv - 0.5;
    float vignette = 1.0 - dot(center, center) * 2.5;
    color *= max(0.0, vignette);
    
    gl_FragColor = vec4(color, 1.0);
  }
`

// Connection line shader
export const lineVertexShader = /* glsl */`
  uniform float uTime;
  uniform float uPhase;
  attribute float aProgress;
  varying float vProgress;
  varying float vAlpha;
  
  void main() {
    vProgress = aProgress;
    vAlpha = 0.3 + 0.2 * sin(uTime * 2.0 + aProgress * 6.28);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

export const lineFragmentShader = /* glsl */`
  uniform vec3 uColor;
  varying float vProgress;
  varying float vAlpha;
  
  void main() {
    float alpha = vAlpha * (1.0 - abs(vProgress - 0.5) * 2.0);
    gl_FragColor = vec4(uColor, alpha);
  }
`
