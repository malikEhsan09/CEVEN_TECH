import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import spline from "./Spline";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.3);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.03;

    // Post-processing
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(w, h),
      1.5,
      0.4,
      100
    );
    bloomPass.threshold = 0.002;
    bloomPass.strength = 3.5;
    bloomPass.radius = 0;
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Create tube geometry from the spline
    const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.65, 16, true);

    // Create edges geometry from the spline
    const edges = new THREE.EdgesGeometry(tubeGeo, 0.2);
    const lineMat = new THREE.LineBasicMaterial({ color: "#900E0E" });
    const tubeLines = new THREE.LineSegments(edges, lineMat);
    scene.add(tubeLines);

    // Create boxes
    const numBoxes = 55;
    const size = 0.075;
    const boxGeo = new THREE.BoxGeometry(size, size, size);
    for (let i = 0; i < numBoxes; i++) {
      const boxMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
      });
      const box = new THREE.Mesh(boxGeo, boxMat);
      const p = (i / numBoxes + Math.random() * 0.1) % 1;
      const pos = tubeGeo.parameters.path.getPointAt(p);
      pos.x += Math.random() - 0.4;
      pos.z += Math.random() - 0.4;
      box.position.copy(pos);
      const rote = new THREE.Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      box.rotation.set(rote.x, rote.y, rote.z);
      const edges = new THREE.EdgesGeometry(boxGeo, 0.2);
      const color = new THREE.Color().setHSL(0.7 - p, 1, 0.5);
      const lineMat = new THREE.LineBasicMaterial({ color });
      const boxLines = new THREE.LineSegments(edges, lineMat);
      boxLines.position.copy(pos);
      boxLines.rotation.set(rote.x, rote.y, rote.z);
      scene.add(boxLines);
    }

    // Update camera position
    function updateCamera(t) {
      const time = t * 0.1;
      const looptime = 10 * 1000;
      const p = (time % looptime) / looptime;
      const pos = tubeGeo.parameters.path.getPointAt(p);
      const lookAt = tubeGeo.parameters.path.getPointAt((p + 0.03) % 1);
      camera.position.copy(pos);
      camera.lookAt(lookAt);
    }

    // Animation loop
    function animate(t = 0) {
      requestAnimationFrame(animate);
      updateCamera(t);
      composer.render(scene, camera);
      controls.update();
    }
    animate();

    // Handle window resize
    function handleWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleWindowResize, false);

    // Clean up
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        opacity: 2.5, // Adjust this value for desired opacity
      }}
    />
  );
};

export default ThreeScene;
