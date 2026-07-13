import { useEffect, useMemo, useRef, useState } from 'react';
import type { MutableRefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();

    // Safari uses addListener/removeListener in older versions
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }

    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  return reduced;
}

function StaticHeroBackground({ dark }: { dark: boolean }) {
  return (
    <div className="absolute inset-0">
      <div
        className={
          dark
            ? 'absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-800 opacity-95'
            : 'absolute inset-0 bg-gradient-to-b from-white via-white to-dark-50 opacity-95'
        }
      />
      <div
        className={
          dark
            ? 'absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl'
            : 'absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-dark-900/10 blur-3xl'
        }
      />
      <div
        className={
          dark
            ? 'absolute -bottom-28 -right-28 w-[520px] h-[520px] rounded-full bg-white/5 blur-3xl'
            : 'absolute -bottom-28 -right-28 w-[520px] h-[520px] rounded-full bg-dark-900/5 blur-3xl'
        }
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.12),transparent_35%),radial-gradient(circle_at_90%_60%,rgba(255,255,255,0.12),transparent_40%)] opacity-80 dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_90%_60%,rgba(255,255,255,0.06),transparent_40%)]" />
    </div>
  );
}

type SceneProps = {
  dark: boolean;
  pointer: MutableRefObject<{ x: number; y: number }>;
};

function HeroScene({ dark, pointer }: SceneProps) {
  const groupRef = useRef<THREE.Group | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);

  const palette = useMemo(() => {
    if (dark) {
      return {
        fog: new THREE.Color('#0a0a0a'),
        sphere: new THREE.Color('#d4d4d4'),
        points: new THREE.Color('#a3a3a3'),
        accent: new THREE.Color('#f5f5f5'),
      };
    }
    return {
      fog: new THREE.Color('#fafafa'),
      sphere: new THREE.Color('#171717'),
      points: new THREE.Color('#525252'),
      accent: new THREE.Color('#171717'),
    };
  }, [dark]);

  const points = useMemo(() => {
    const count = 140;
    const positions = new Float32Array(count * 3);

    // Distribute points within a sphere-ish volume.
    const radius = 3.2;
    for (let i = 0; i < count; i++) {
      // Random point in sphere
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      const r = radius * Math.cbrt(Math.random());
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.sin(theta);

      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    return { positions };
  }, []);

  useFrame((state) => {
    const { x, y } = pointer.current;
    const t = state.clock.getElapsedTime();

    // Pointer is in [-1, 1] range.
    const targetRotY = x * 0.55;
    const targetRotX = -y * 0.35;

    if (groupRef.current) {
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.z = Math.sin(t * 0.25) * 0.06;
      groupRef.current.position.y = Math.sin(t * 0.2) * 0.12;
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.25 + x * 0.12;
      sphereRef.current.rotation.x = t * 0.18 + y * 0.08;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.12 + x * 0.1;
    }
  });

  return (
    <>
      <color attach="background" args={[palette.fog]} />
      <fog attach="fog" args={[palette.fog, 5.5, 12]} />

      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 3, 5]} intensity={0.45} />

      <group ref={groupRef}>
        <mesh ref={sphereRef}>
          <sphereGeometry args={[2.2, 32, 32]} />
          <meshStandardMaterial
            color={palette.sphere}
            transparent
            opacity={dark ? 0.12 : 0.08}
            roughness={0.6}
            metalness={0.2}
          />
        </mesh>

        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.positions.length / 3}
              array={points.positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={dark ? 0.04 : 0.035}
            sizeAttenuation
            color={palette.points}
            transparent
            opacity={dark ? 0.75 : 0.6}
            depthWrite={false}
          />
        </points>

        {/* A subtle accent ring for “3D” read */}
        <mesh rotation-x={Math.PI / 2} position={[0, -1.3, 0]}>
          <ringGeometry args={[1.2, 1.95, 64]} />
          <meshBasicMaterial
            color={palette.accent}
            transparent
            opacity={dark ? 0.22 : 0.14}
          />
        </mesh>
      </group>
    </>
  );
}

export default function Hero3DBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [dark, setDark] = useState(false);
  const [inView, setInView] = useState(false);

  const pointer = useRef({ x: 0, y: 0 });
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));

    const onThemeClassChange = () => {
      setDark(document.documentElement.classList.contains('dark'));
    };

    const obs = new MutationObserver(onThemeClassChange);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      pointer.current = { x: nx, y: ny };
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [prefersReducedMotion]);

  // WebGL on all devices; still respect reduced-motion and viewport visibility.
  const showWebGL = inView && !prefersReducedMotion;

  return (
    <div ref={hostRef} className="absolute inset-0" aria-hidden="true">
      {showWebGL ? (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 7], fov: 55 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <HeroScene dark={dark} pointer={pointer} />
        </Canvas>
      ) : (
        <StaticHeroBackground dark={dark} />
      )}
    </div>
  );
}
