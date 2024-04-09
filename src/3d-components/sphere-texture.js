// Importe as bibliotecas necessárias
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function sphereYellow3D() {

  // Crie uma cena
  const scene = new THREE.Scene();

  // Crie uma câmera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Crie um renderizador
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Adicionando OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // Crie uma esfera amarela
  const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);

  // Carregue uma textura de imagem
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/texture-01.png.');
  sphereMaterial.map = texture;

  // Renderize a cena
  const animate = () => {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
}