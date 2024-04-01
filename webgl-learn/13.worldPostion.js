import * as THREE from 'three';
import {OrbitControls} from  'three/addon/controls/OrbitControls.js'

const scene = new THREE.Scene();

// 把物体添加至场景中


const geometry = new THREE.BoxGeometry(20, 20, 20);


const material = new THREE.MeshBasicMaterial({
    color: 0X00ffff,
    // wireframe: true
})


const mesh = new THREE.Mesh(geometry, material);
console.log(13, {mesh});

mesh.position.x = 50;
mesh.position.y = 50;

const group = new THREE.Group();

group.position.x = 50;
group.add(mesh);

scene.add(group);

const v3 = new THREE.Vector3();
mesh.getWorldPosition(v3);
console.log(13, {v3});

const selfAxesHelper = new THREE.AxesHelper(50);
mesh.add(selfAxesHelper);


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
pTag.innerHTML = '13. 获取世界坐标(自身坐标+所有父级坐标) & 局部坐标可视化(mesh添加坐标系)';
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
    window.requestAnimationFrame(render);
}

render();