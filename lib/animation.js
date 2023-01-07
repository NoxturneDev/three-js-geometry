import * as THREE from '../node_modules/three/build/three.module.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const triangleVertices = {
    coordinates: [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(12, 12, 0),
        new THREE.Vector3(-12, -12, 0)
    ],
    indexes: new Uint16Array([
        0, 1, 2
    ])
}

const geo = new THREE.BufferGeometry()

geo.setIndex(new THREE.BufferAttribute(triangleVertices.indexes, 1))
const coordinates = triangleVertices.coordinates.map(v => v.toArray())

geo.setAttribute('position', new THREE.Float32BufferAttribute(coordinates, 3))
// for (let i in coordinates) {
//     geo.setAttribute('position', new THREE.Float32BufferAttribute(coordinates[i], 3))
// }

geo.computeVertexNormals()

const material = new THREE.MeshBasicMaterial({ color: 'red' })
const triangle = new THREE.Mesh(geo, material)

scene.add(triangle)

export default function animate() {
    requestAnimationFrame(animate)

    triangle.rotation.x = + 0.05
    triangle.rotation.y = + 0.05

    renderer.render(scene, camera)
}