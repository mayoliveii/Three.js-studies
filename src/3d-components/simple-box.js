// Importe as bibliotecas necessárias
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function simpleBox() {

  // Crie uma cena
  const scene = new THREE.Scene();

  // Crie uma câmera
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  // Crie um renderizador
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Adicionando OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // Crie uma esfera amarela
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 'red' });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Carregue uma textura de imagem
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/texture-01.png');
  material.map = texture;

  // Renderize a cena
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
}