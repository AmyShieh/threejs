import * as THREE from 'three';
import {OrbitControls} from  'three/addon/controls/OrbitControls.js'
import Stats from  'three/addon/libs/stats.module.js'

const stats = new Stats();
console.log(stats);
// document.body.appendChild(stats.domElement);

const scene = new THREE.Scene();

// 给场景添加geometry： 几何体。

const geometry = new THREE.BoxGeometry(100, 100, 100);


// 给几何体添加外观效果material: 材质。

const material =  new THREE.MeshLambertMaterial({ color: 0xff3e97, transparent: true, opacity: 0.5 })

// 给场景添加物体Mesh: 几何体Geometry & 材质Material的结合——网格模型

const mesh  = new THREE.Mesh(geometry, material)

// 定义物体的位置
mesh.position.set(0, 0, 0)

// 把物体添加至场景中
scene.add(mesh);



const spotLight = new THREE.SpotLight( 0xffffff, 12.0 );
spotLight.decay = 0;
spotLight.position.set(100, 200, 200)
scene.add(spotLight)


// 添加点光源helper

const lightHelper = new THREE.SpotLightHelper(spotLight, 10);
scene.add(lightHelper);

// 添加环境光

const ambientLight =  new THREE.AmbientLight(0xffffff, 1.0);
scene.add(ambientLight)

import { GUI } from  'three/addon/libs/lil-gui.module.min.js'

const gui = new GUI();
 
const materailFolder =  gui.addFolder('材质')
const lightFolder =  gui.addFolder('light')

const obj = {
    color: 0xffffff,
    arr: 0,
    bool: true,
    objValue: 'left'
}



lightFolder.add(ambientLight, 'intensity', 0, 2).name("环境光强度")

materailFolder.addColor(obj, 'color').onChange((value) => {
    console.log(value);
    mesh.material.color.set(value);
})

gui.domElement.style.top = 500;
gui.domElement.style.bottom = 0;

console.log(ambientLight);


// 添加平行光

const directionLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionLight.position.set(200, 100, 60);
scene.add(directionLight);
gui.add(directionLight, 'intensity', 0, 2).name("平行光强度").step(1)



gui.add(obj, 'arr', [-100, 0, 100]).onChange((value) => {
    mesh.position.x = value;
});

gui.add(obj, 'objValue', {
    left: 0,
    right: 100,
    center: 50
}).onChange((value) => {
    mesh.position.y = value;
});

gui.add(obj, 'bool');


// 添加平行光helper
const directionLightHelper = new THREE.DirectionalLightHelper(directionLight, 10, 0xffeeff);
directionLightHelper.target = mesh;
scene.add(directionLightHelper)

const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);


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


// 创建一个渲染器对象

const renderer = new THREE.WebGLRenderer();

renderer.setSize(width, height); // canvas画布的宽高

renderer.render(scene, camera);

// document.body.appendChild('这里是Light');

const pTag = document.createElement("p");
pTag.innerHTML = '02.这里是light, gui相关的就在这里';
document.body.appendChild(pTag);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

// controls.addEventListener('change', function(){
//     renderer.render(scene, camera);
//     console.log(camera)
// })

const render = () => {
    // stats.update();
    if(obj.bool) {
        mesh.rotateY(0.01);
        mesh.rotateX(0.01);
        mesh.rotateZ(0.01);
    }
    renderer.render(scene, camera);
    window.requestAnimationFrame(render)
}

render();

window.onresize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}