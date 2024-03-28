import * as THREE from 'three';
import {OrbitControls} from  'three/addon/controls/OrbitControls.js'

const scene = new THREE.Scene();

// 把物体添加至场景中


const geometry = new THREE.SphereGeometry(20);


const material = new THREE.MeshBasicMaterial({
    color: 0X00ffff,
    // wireframe: true
})

const group1 = new THREE.Group();
group1.name = '高层楼';
for(let i = 0; i< 5; i++) {
    const geometry = new THREE.BoxGeometry(40, 200, 40);
    const material = new THREE.MeshBasicMaterial({
        color: 0Xfffff00
    })
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = i * 60;
    mesh.name = `${i+1}号楼`
    group1.add(mesh);
}
group1.position.y = 100;

const group2 = new THREE.Group();
group2.name = '洋房';
for(let i = 0; i< 5; i++) {
    const geometry = new THREE.BoxGeometry(40, 60, 40);
    const material = new THREE.MeshBasicMaterial({
        color: 0X00ffff
    })
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = i * 60;
    mesh.name = `${i+1}号楼`
    group2.add(mesh);
}

group2.position.z += 100;
group2.position.y = 30;

const model = new THREE.Group();
model.add(group1, group2)

model.traverse((obj) => {
    console.log(obj.name)
})

const obj = model.getObjectByName('2号楼');
if(obj) {
    obj.material.color.set(0Xf7acbc);
}
console.log({obj})

scene.add(model);


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
pTag.innerHTML = '12. group traverse & getObjectByName';
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