import { useEffect } from 'react';

// This approach uses script injection to avoid React-specific issues
const ParticleCursor = () => {
  useEffect(() => {
    // Create script element to load Three.js toys
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';
    script.type = 'module';

    // Initialize particle cursor after script loads
    script.onload = () => {
      // Create and append canvas inside the app div
      const canvas = document.createElement('canvas');
      canvas.id = 'particles-canvas';
      canvas.className = 'particles-canvas';
      document.body.appendChild(canvas);

      // Access the global module from the CDN
      const { particlesCursor } = window;

      if (particlesCursor) {
        const pc = particlesCursor({
          el: document.body,
          gpgpuSize: 512,
          colors: [0x00ff00, 0x0000ff],
          color: 0xff0000,
          coordScale: 0.5,
          noiseIntensity: 0.001,
          noiseTimeCoef: 0.0001,
          pointSize: 5,
          pointDecay: 0.0025,
          sleepRadiusX: 250,
          sleepRadiusY: 250,
          sleepTimeCoefX: 0.001,
          sleepTimeCoefY: 0.002
        });

        // Configure renderer for transparency
        if (pc && pc.renderer) {
          pc.renderer.setClearColor(0x000000, 0); // Set transparent background
        }

        // Add click event listener
        const handleClick = () => {
          pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
          pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
          pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
          pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
        };

        document.body.addEventListener('click', handleClick);

        return () => {
          document.body.removeEventListener('click', handleClick);
        };
      }
    };

    // Add script to document
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const canvas = document.getElementById('particles-canvas');
      if (canvas) {
        canvas.remove();
      }
      const scripts = document.querySelectorAll('script[src="https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default ParticleCursor;