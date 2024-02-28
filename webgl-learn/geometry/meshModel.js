import * as THREE from 'three';

const vertics = new Float32Array([
    0,0,0, // 顶点1坐标
    50,0,0, // 顶点2坐标
    0,100,0, // 顶点3坐标
    0,0,10, // 顶点4坐标
    0,0,100, // 顶点5坐标
    50,0,10 // 顶点6坐标
]);


const geometry = new THREE.BufferGeometry();

const attribute  = new THREE.BufferAttribute(vertics, 3);

geometry.attributes.position = attribute;

const material = new THREE.MeshBasicMaterial({
    color: 0X00ffff,
    side: THREE.DoubleSide
})

const model = new THREE.Mesh(geometry, material);

export default model;