# Three.js, uma biblioteca JavaScript para renderização 3D no navegador

1. **Configuração Inicial**

Primeiro, importa-se o Three.js e o OrbitControls (para controle de câmera) no nosso arquivo:

```js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
```

- Isso importa os controles de órbita, que permitem que o usuário mova a câmera ao redor da cena.

2. **Criação da Cena**

- Aqui criamos uma instância da classe Scene do Three.js.
A cena é o ambiente onde todos os objetos 3D serão renderizados. Vamos criar uma cena:

```js
const scene = new THREE.Scene();
```

3. **Criação da Câmera**

A câmera define o ponto de vista do usuário. Vamos usar uma câmera perspectiva:

```js
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 10;
```

- `camera`: Criamos uma câmera perspectiva. A câmera define o ponto de vista do usuário. Os parâmetros são:
  - 45: Ângulo de visão (em graus).
  - `window.innerWidth / window.innerHeight`: Proporção da janela de visualização.
  - 1 e 1000: Planos de corte próximo e distante.

4. **Criação do Renderizador**

O renderizador exibe a cena na tela. Vamos criar um renderizador WebGL:

```js
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

- `renderer`: Cria um renderizador WebGL para exibir a cena na tela.
- `setSize()`: Define o tamanho da área de renderização com base nas dimensões da janela.
- `document.body.appendChild(renderer.domElement)`: Adiciona o elemento do renderizador ao corpo do documento HTML.

5. **Criação de uma Esfera**

Vamos criar uma esfera verde:

```js
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: '#00ff83' });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
```

- `geometry`: Cria uma esfera com raio 3, usando 64 segmentos longitudinais e 64 segmentos latitudinais.
- `material`: Define o material da esfera (aqui, uma cor verde).
- `sphere`: Cria uma malha (mesh) usando a geometria e o material especificados e a adiciona à cena.

6. **Adicionando Luz**

Vamos adicionar uma luz pontual para iluminar a esfera:

```js
const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(1, 1, 4);
scene.add(light);
```

- `light`: Cria uma luz pontual branca.
- `position.set(1, 1, 4) : Define a posição da luz na cena.

7. **Adicionando Controles de Órbita**

Os controles de órbita permitem que o usuário mova a câmera:

```js
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
```

- `controls`: Cria controles de órbita para interagir com a câmera.
- `update()`: Atualiza os controles.

8. **Movendo a Luz com o Mouse**

Vamos atualizar a posição da luz com base no movimento do mouse:

```js
document.addEventListener('mousemove', (event) => {
  light.position.x = (event.clientX / window.innerWidth) * 20 - 10;
  light.position.y = -(event.clientY / window.innerHeight) * 20 + 10;
});
```

9. **Função de Animação**

Criamos uma função `animate()` para atualizar a cena continuamente:

```js
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
```

- `requestAnimationFrame()`: Chama a função animate() continuamente para atualizar a cena.
- `controls.update()`: Atualiza os controles.
- `renderer.render(scene, camera)`: Renderiza a cena.
