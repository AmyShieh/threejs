import * as THREE from 'three';
import {OrbitControls} from  'three/addon/controls/OrbitControls.js'


const scene = new THREE.Scene();

// 给场景添加geometry： 几何体。

const geometry = new THREE.BoxGeometry(100, 100, 100);

// 给几何体添加外观效果material: 材质。

const material =  new THREE.MeshBasicMaterial({ color: 0xff3e97, transparent: true, opacity: 0.5 })

// 给场景添加物体Mesh: 几何体Geometry & 材质Material的结合——网格模型

const mesh  = new THREE.Mesh(geometry, material)

// 定义物体的位置
mesh.position.set(0, 0, 0)

// 把物体添加至场景中
scene.add(mesh);

const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

console.log('xiyu', {scene, mesh});


// 创建一个相机
const width = 800;
const height = 500;

const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000);

// 设置相机位置

camera.position.set(200, 200, 200);
// camera.position.set(-1000, 0, 0);

// 设置相机的视线方向： 两个点构成一条线

camera.lookAt(0,0,0) // 坐标原点
// camera.lookAt(mesh.position) // mesh的位置


// 创建一个渲染器对象（相机ka）

const renderer = new THREE.WebGLRenderer();

renderer.setSize(width, height); // canvas画布的宽高

renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

// orbit：改变相机，监控范围

const controls = new OrbitControls(camera, renderer.domElement);

// controls.addEventListener('change', function(){
//     renderer.render(scene, camera);
//     console.log(camera)
// })

const render = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(render)
}

render();