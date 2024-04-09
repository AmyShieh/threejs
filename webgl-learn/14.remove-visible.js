import * as THREE from 'three';
import {OrbitControls} from  'three/addon/controls/OrbitControls.js'

const scene = new THREE.Scene();

// 把物体添加至场景中


const geometry = new THREE.BoxGeometry(20, 20, 20);


const material =  new THREE.MeshPhongMaterial({ color: 0xff3e97, shininess: 100, specular: 0x444444 })

const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = 50;
mesh.position.y = 50;

const group = new THREE.Group();

group.position.x = 50;
group.add(mesh);

scene.add(group);

const v3 = new THREE.Vector3();
mesh.getWorldPosition(v3);

const selfAxesHelper = new THREE.AxesHelper(50);
mesh.add(selfAxesHelper);
mesh.position.set(0, 0, 0)
// mesh.remove(selfAxesHelper);



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


// 添加平行光

const directionLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionLight.position.set(200, 100, 60);
scene.add(directionLight);

// 添加平行光helper
const directionLightHelper = new THREE.DirectionalLightHelper(directionLight, 10, 0xffeeff);
directionLightHelper.target = mesh;
scene.add(directionLightHelper)

const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

// axesHelper.visible = false;

// scene.remove(ambientLight, axesHelper);

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

const pTag = document.createElement("p");
pTag.innerHTML = '14. 移除object remove';
document.body.appendChild(pTag);
document.body.appendChild(renderer.domElement);

// orbit：改变相机，监控范围

const controls = new OrbitControls(camera, renderer.domElement);

// controls.addEventListener('change', function(){
//     renderer.render(scene, camera);
//     console.log(camera)
// })

console.log(scene);

const render = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
}

render();