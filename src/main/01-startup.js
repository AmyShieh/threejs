import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import * as dat from "dat.gui";
console.log(THREE)


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

camera.position.set(0,0,10)

scene.add(camera);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cube = new THREE.Mesh(geometry, material);

const gui = new dat.GUI();

const params = {
    color: '#ffff00'
}

gui.add(cube, 'visible').name("royroy展示");
gui.addColor(params, 'color').onChange((v) => {
    console.log(v);
    cube.material.color.set(v)
})

const folder = gui.addFolder("文件夹");
folder.add(cube.material, "wireframe")

gui.add(cube.material, "wireframe")

scene.add(cube);

cube.position.set(0,0,0);

// cube.position.x = 5;
// cube.rotation.x = Math.PI / 4;
// cube.rotation.y = Math.PI / 4;
// cube.rotation.z = Math.PI / 4;
// cube.scale.set(3,2,1)

console.log('cube',cube);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const animation = gsap.to(cube.rotation, {position: 10,rotation: 280, duration: 5, x: 2 * Math.PI})
gsap.to(cube.position, { duration: 5, x: 10, repeat: -1})

window.addEventListener('dblclick', () => {
    if( animation.isActive()) {
        animation.pause()
    } else {
        animation.resume();
    }

    console.log(document.fullscreenElement);

    if(!document.fullscreenElement) {
        renderer.domElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }

})

const render = (e) => {
    // console.log(e)
    // cube.position.x += 0.01;
    // if(cube.position.x > 8) {
    //     cube.position.x = 0;
    // }
    // cube.rotation.x += 0.01;
    // cube.scale.set(3,2,1)
    // cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;
    renderer.render(scene, camera);
    window.requestAnimationFrame(render)
}

render();

const axesHelper = new THREE.AxesHelper(7);
scene.add(axesHelper);

window.addEventListener('resize', () => {
    console.log('resize');
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
})

