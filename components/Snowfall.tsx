'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type LayerConfig = {
  countRatio: number;
  size: number;
  opacity: number;
  speed: [number, number];
  drift: [number, number];
  depth: [number, number];
  sway: number;
};

type LayerState = {
  geometry: THREE.BufferGeometry;
  material: THREE.PointsMaterial;
  points: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;
  positions: Float32Array;
  velocities: Float32Array;
  swayOffsets: Float32Array;
  count: number;
  config: LayerConfig;
};

export const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const windRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let halfWidth = width / 2;
    let halfHeight = height / 2;
    const margin = 40;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 220;

    const layerConfigs: LayerConfig[] = [
      {
        countRatio: 0.25,
        size: 3.6,
        opacity: 0.95,
        speed: [0.9, 1.6],
        drift: [0.1, 0.35],
        depth: [40, 160],
        sway: 0.22,
      },
      {
        countRatio: 0.35,
        size: 2.4,
        opacity: 0.8,
        speed: [0.6, 1.1],
        drift: [0.08, 0.25],
        depth: [-60, 110],
        sway: 0.16,
      },
      {
        countRatio: 0.4,
        size: 1.4,
        opacity: 0.6,
        speed: [0.3, 0.8],
        drift: [0.05, 0.18],
        depth: [-220, 40],
        sway: 0.1,
      },
    ];

    const totalCount = Math.max(layerConfigs.length, Math.min(Math.floor((width * height) / 3200), 2000));
    const counts = layerConfigs.map((config) => Math.max(1, Math.floor(totalCount * config.countRatio)));
    const countDelta = totalCount - counts.reduce((sum, value) => sum + value, 0);
    counts[counts.length - 1] = Math.max(1, counts[counts.length - 1] + countDelta);

    const resetParticle = (layer: LayerState, index: number, yPos?: number) => {
      const { positions, velocities, swayOffsets, config } = layer;
      const i = index * 3;
      positions[i] = (Math.random() - 0.5) * width;
      positions[i + 1] = yPos ?? (Math.random() - 0.5) * height;
      positions[i + 2] = THREE.MathUtils.lerp(config.depth[0], config.depth[1], Math.random());
      const drift = THREE.MathUtils.lerp(config.drift[0], config.drift[1], Math.random());
      velocities[i] = (Math.random() > 0.5 ? 1 : -1) * drift;
      velocities[i + 1] = -THREE.MathUtils.lerp(config.speed[0], config.speed[1], Math.random());
      velocities[i + 2] = (Math.random() - 0.5) * 0.06;
      swayOffsets[index] = Math.random() * Math.PI * 2;
    };

    const layers: LayerState[] = layerConfigs.map((config, index) => {
      const count = counts[index] ?? 1;
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);
      const swayOffsets = new Float32Array(count);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: config.size,
        opacity: config.opacity,
        transparent: true,
        depthWrite: false,
        sizeAttenuation: true,
      });
      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const layer: LayerState = {
        geometry,
        material,
        points,
        positions,
        velocities,
        swayOffsets,
        count,
        config,
      };

      for (let i = 0; i < count; i += 1) {
        resetParticle(layer, i);
      }

      return layer;
    });

    let animationFrameId = 0;
    const animate = () => {
      const time = performance.now();
      windRef.current.x *= 0.94;
      windRef.current.y *= 0.94;
      for (const layer of layers) {
        const { positions, velocities, swayOffsets, count, config } = layer;
        const windFactor = 0.4 + config.size * 0.18;
        const windX = windRef.current.x * windFactor;
        const windY = windRef.current.y * windFactor * 0.3;
        for (let i = 0; i < count; i += 1) {
          const idx = i * 3;
          const sway = Math.sin(time * 0.0012 + swayOffsets[i]) * config.sway;
          positions[idx] += velocities[idx] + sway + windX;
          positions[idx + 1] += velocities[idx + 1] + windY;
          positions[idx + 2] += velocities[idx + 2];

          if (positions[idx + 1] < -halfHeight - margin) {
            resetParticle(layer, i, halfHeight + margin);
            continue;
          }

          if (positions[idx] < -halfWidth - margin) positions[idx] = halfWidth + margin;
          if (positions[idx] > halfWidth + margin) positions[idx] = -halfWidth - margin;
          if (positions[idx + 2] < config.depth[0]) positions[idx + 2] = config.depth[1];
          if (positions[idx + 2] > config.depth[1]) positions[idx + 2] = config.depth[0];
        }

        layer.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      halfWidth = width / 2;
      halfHeight = height / 2;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      for (const layer of layers) {
        for (let i = 0; i < layer.count; i += 1) {
          resetParticle(layer, i);
        }
        layer.geometry.attributes.position.needsUpdate = true;
      }
    };

    window.addEventListener('resize', handleResize);
    const handleMouseMove = (event: MouseEvent) => {
      const dx = event.clientX - mouseRef.current.x;
      const dy = event.clientY - mouseRef.current.y;
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
      mouseRef.current.active = true;
      windRef.current.x = THREE.MathUtils.clamp(windRef.current.x + dx * 0.002, -1.6, 1.6);
      windRef.current.y = THREE.MathUtils.clamp(windRef.current.y + dy * 0.0014, -1.2, 1.2);
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      for (const layer of layers) {
        scene.remove(layer.points);
        layer.geometry.dispose();
        layer.material.dispose();
      }
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[2] pointer-events-none" aria-hidden="true" />;
};
