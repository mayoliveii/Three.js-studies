import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function cone() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // change
  const geometry = new THREE.ConeGeometry(5, 20, 32);
  const material = new THREE.MeshBasicMaterial({ color: '#B8732A' });
  const cone = new THREE.Mesh(geometry, material);
  scene.add(cone);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/texture-02.png');
  material.map = texture;

  const animate = () => {
    requestAnimationFrame(animate);
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
}
