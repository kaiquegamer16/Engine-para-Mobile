import * as THREE from 'https://cdn.jsdelivr.net/npm/three@110.0.4/build/three.module.js';

// Seu código Three.js aqui

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adicione objetos, luzes, etc., à sua cena aqui

function animate() {
    requestAnimationFrame(animate);
    // Atualize a animação ou interação aqui
    renderer.render(scene, camera);
}

animate();
