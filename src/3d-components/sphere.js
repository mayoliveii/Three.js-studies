import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function sphere3D() {
  // Criação da cena
  const scene = new THREE.Scene();

  // Criação da câmera
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 10;

  // Criação do renderizador
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Criação da esfera
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshStandardMaterial({ color: '#00ff83' });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Adicionando luz
  const light = new THREE.PointLight(0xffffff, 2, 100);
  light.position.set(1, 1, 4);
  scene.add(light);

  // Adicionando OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // Mover a luz com o mouse
  document.addEventListener('mousemove', (event) => {
    light.position.x = (event.clientX / window.innerWidth) * 20 - 10;
    light.position.y = -(event.clientY / window.innerHeight) * 20 + 10;
  });

  // Função de animação
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Adicionando CSS para remover a margem do corpo
  const style = document.createElement('style');
  style.innerHTML = `
  body {
    margin: 0;
  }
`;
  document.head.appendChild(style);
}