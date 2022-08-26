import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()

scene.background = new THREE.Color(0xffffff)

const camera = new THREE.PerspectiveCamera(
    75,
    1,
    0.1,
    1000
)
camera.position.z = 2

const canvas1 = document.getElementById('c1') as HTMLCanvasElement
const canvas2 = document.getElementById('c2') as HTMLCanvasElement


const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 })
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 })


new OrbitControls(camera, renderer1.domElement);

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    render()
}

function render() {
    renderer1.render(scene, camera)
    renderer2.render(scene, camera)
}

animate()