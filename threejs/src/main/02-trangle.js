import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

camera.position.set(0,0,10)

scene.add(camera);


for(let i = 0; i < 50; i++) {
    const geometry = new THREE.BufferGeometry();
    const positionArr = new Float32Array(9);
    for(let j = 0; j < 9; j++) {
        positionArr[j] = Math.random() * 5;
    }
    console.log({positionArr});
    geometry.setAttribute("position", new THREE.BufferAttribute(positionArr, 3));
    const color = new THREE.Color(Math.random(),Math.random(),Math.random())
    const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5 })
    const mesh = new THREE.Mesh(geometry, material);
    console.log(mesh);
    scene.add(mesh);
}

const params = {
    color: '#ffff00'
}

// cube.position.set(0,0,0);

// cube.position.x = 5;
// cube.rotation.x = Math.PI / 4;
// cube.rotation.y = Math.PI / 4;
// cube.rotation.z = Math.PI / 4;
// cube.scale.set(3,2,1)

// console.log('cube',cube);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

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

