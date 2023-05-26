import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const rgbeLoader = new RGBELoader();

renderer.setSize(window.innerWidth, window.innerHeight);

// scene.add(camera);
//
// const cubeTextureLoader = new THREE.CubeTextureLoader();
// const envMapTexture = cubeTextureLoader.load([
//     '1111.jpg',
//     '2222.jpg',
//     '3333.jpg',
//     '4444.jpg',
//     '5555.jpg',
//     '6666.jpg',
// ], (texture) => {
//     console.log({texture}, 'onload');
// }, () => {}, (err) => {
//     console.log({err});
// });
//
const geometry = new THREE.SphereGeometry(1,20,20);
const material = new THREE.MeshStandardMaterial({
    roughness: 0.7,
    metalness: 0.1,
    // envMap: envMapTexture
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
scene.add(ambientLight)
scene.add(directionalLight)

rgbeLoader.loadAsync('01.hdr').then((texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
})

// scene.background = envMapTexture;

const axesHelper = new THREE.AxesHelper(7);
scene.add(axesHelper);
//
//
camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}

animate();


document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
})
