
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Create iPhone body with improved materials
    const phoneGeometry = new THREE.BoxGeometry(2, 4, 0.2);
    const phoneMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0x1a1a1a,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const phone = new THREE.Mesh(phoneGeometry, phoneMaterial);
    phone.castShadow = true;
    phone.receiveShadow = true;

    // Create glass screen with realistic materials
    const screenGeometry = new THREE.PlaneGeometry(1.8, 3.8);
    const screenMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0x121212,
      metalness: 0.5,
      roughness: 0.2,
      transmission: 0.1,
      thickness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: 0x121212,
      emissiveIntensity: 0.2,
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = 0.11;
    phone.add(screen);

    // Add rounded corners with improved geometry
    const cornerRadius = 0.2;
    const cornerGeometry = new THREE.CylinderGeometry(cornerRadius, cornerRadius, 0.2, 32);
    const cornerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1a1a1a,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    
    const cornerPositions = [
      { x: 1, y: 2, rotation: 0 },
      { x: -1, y: 2, rotation: 0 },
      { x: 1, y: -2, rotation: 0 },
      { x: -1, y: -2, rotation: 0 }
    ];

    cornerPositions.forEach(pos => {
      const corner = new THREE.Mesh(cornerGeometry, cornerMaterial);
      corner.position.set(pos.x, pos.y, 0);
      corner.rotation.x = Math.PI / 2;
      corner.castShadow = true;
      corner.receiveShadow = true;
      phone.add(corner);
    });

    // Add camera bump with enhanced materials
    const cameraBumpGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.05, 32);
    const cameraBumpMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1a1a1a,
      metalness: 0.95,
      roughness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const cameraBump = new THREE.Mesh(cameraBumpGeometry, cameraBumpMaterial);
    cameraBump.position.set(0.5, 1.5, -0.1);
    cameraBump.rotation.x = Math.PI / 2;
    cameraBump.castShadow = true;
    cameraBump.receiveShadow = true;
    phone.add(cameraBump);

    // Add lens detail
    const lensGeometry = new THREE.CircleGeometry(0.1, 32);
    const lensMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x000000,
      metalness: 1,
      roughness: 0,
      transmission: 0.5,
      thickness: 0.1,
    });
    const lens = new THREE.Mesh(lensGeometry, lensMaterial);
    lens.position.set(0.5, 1.5, -0.07);
    lens.rotation.x = -Math.PI / 2;
    phone.add(lens);

    // Add floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const positions = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x6366f1,
      transparent: true,
      opacity: 0.8,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    scene.add(phone);

    // Enhanced Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.SpotLight(0xffffff, 2);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x6366f1, 1);
    fillLight.position.set(-5, -5, -5);
    scene.add(fillLight);

    const rimLight = new THREE.SpotLight(0x4f46e5, 2);
    rimLight.position.set(0, 0, -5);
    scene.add(rimLight);

    // Camera positioning
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    // Enhanced OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 1.5;
    controls.minPolarAngle = Math.PI / 3;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Initial rotation
    phone.rotation.y = Math.PI / 6;

    // Animation loop with particle movement
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      
      // Particle animation
      const positions = particles.geometry.attributes.position.array;
      for(let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += 0.01;
        if(positions[i + 1] > 5) positions[i + 1] = -5;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      // Phone floating animation
      if (!controls.enabled) {
        phone.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      }
      
      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 -z-10"
      style={{ pointerEvents: 'auto' }}
    />
  );
};
