import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function tube() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.z = 35;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  class CustomSinCurve extends THREE.Curve {

    constructor(scale = 1) {
      super();
      this.scale = scale;
    }

    getPoint(t, optionalTarget = new THREE.Vector3()) {

      const tx = t * 3 - 1.5;
      const ty = Math.sin(2 * Math.PI * t);
      const tz = 0;

      return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
    }
  }

  const path = new CustomSinCurve(10);
  const geometry = new THREE.TubeGeometry(path, 20, 2, 9, false);
  const material = new THREE.MeshBasicMaterial({ color: 'white' });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/texture-04.png');
  material.map = texture;

  const animate = () => {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
}
