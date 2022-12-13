import * as THREE from '../node_modules/three/build/three.module.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const triangleVetrice = new THREE.vector3(1, 1, 1)
const material = new THREE.MeshPhongMaterial({ color: '0xad0c00' })
const triangle = new THREE.Mesh(triangleVetrice, material)

camera.position.z = 2

export default function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.05
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
}