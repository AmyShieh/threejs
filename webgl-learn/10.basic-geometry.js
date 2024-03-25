import * as THREE from 'three';
import {OrbitControls} from  'three/addon/controls/OrbitControls.js'

const scene = new THREE.Scene();

// 把物体添加至场景中


const geometry = new THREE.SphereGeometry(50, 42, 42);


const material = new THREE.MeshBasicMaterial({
    color: 0X00ffff,
    wireframe: true
})

const mesh = new THREE.Mesh(geometry, material);

const mesh2 = mesh.clone();

mesh2.position.y += 100;


mesh2.material = mesh.material.clone();
mesh2.material.color.set(0xffffff);

scene.add(mesh, mesh2);


const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

const ambientLight =  new THREE.AmbientLight(0xffffff, 1.0);
scene.add(ambientLight)


// 创建一个相机
const width = 800;
const height = 500;

const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000);

// 设置相机位置

camera.position.set(0, 400, 200);
// camera.position.set(-1000, 0, 0);

// 设置相机的视线方向： 两个点构成一条线

camera.lookAt(0,0,0) // 坐标原点
// camera.lookAt(mesh.position) // mesh的位置


// 创建一个渲染器对象（相机ka）

const renderer = new THREE.WebGLRenderer();

renderer.setSize(width, height); // canvas画布的宽高

renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

const pTag = document.createElement("p");
pTag.innerHTML = '10. basic geometry - segment';
document.body.appendChild(pTag);
document.body.appendChild(renderer.domElement);

// orbit：改变相机，监控范围

const controls = new OrbitControls(camera, renderer.domElement);

// controls.addEventListener('change', function(){
//     renderer.render(scene, camera);
//     console.log(camera)
// })

const render = () => {
    renderer.render(scene, camera);
    mesh2.rotation.copy(mesh.rotation);
    window.requestAnimationFrame(render);
    mesh.rotateY(0.01);
}

render();