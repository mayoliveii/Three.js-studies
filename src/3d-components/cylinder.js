import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function cylinder() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // change
  const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
  const material = new THREE.MeshBasicMaterial({ color: 'white' });
  const cylinder = new THREE.Mesh(geometry, material);
  scene.add(cylinder);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/texture-03.png');
  material.map = texture;

  const animate = () => {
    requestAnimationFrame(animate);
    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
}
