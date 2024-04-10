import * as THREE from 'three';
import {OrbitControls} from  'three/addon/controls/OrbitControls.js'

const scene = new THREE.Scene();

// 把物体添加至场景中


// const geometry = new THREE.BoxGeometry(60, 60, 60);
const geometry = new THREE.SphereGeometry(60);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://gd-hbimg.huaban.com/55a9bf701ec3c9bf7a780e01bf79ef5721cc29f9c9bff-kcQlZy_fw1200webp')

const material =  new THREE.MeshPhongMaterial({ 
    // color: 0x0000ff, 
    // shininess: 100, 
    // specular: 0x444444, 
    map: texture 
})

const mesh = new THREE.Mesh(geometry, material);

mesh.rotateX(Math.PI);
const group = new THREE.Group();
group.add(mesh);


const axesHelper = new THREE.AxesHelper(200);



const spotLight = new THREE.SpotLight( 0xffffff, 12.0 );
spotLight.decay = 0;
spotLight.position.set(100, 200, 200)

const directionLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionLight.position.set(200, 100, 60);

// 添加环境光
const ambientLight =  new THREE.AmbientLight(0xffffff, 1.0);

scene.add(group,axesHelper, ambientLight, directionLight);



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
pTag.innerHTML = '15. 创建纹理贴图';
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