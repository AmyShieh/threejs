import * as THREE from 'three';

const vertics = new Float32Array([
    0,0,0, // 顶点1坐标
    80,0,0, // 顶点2坐标
    80,80,0, // 顶点3坐标
    0,0,0, // 顶点4坐标
    80,80,0, // 顶点5坐标
    0,80,0// 顶点6坐标
]);

// 顶点4、5、6 只要和顶点1、2、3保持一个方向就可以了，同为顺时针或同为逆时针。顺序对结果没有产生影响


const geometry = new THREE.BufferGeometry();

const attribute  = new THREE.BufferAttribute(vertics, 3);

geometry.attributes.position = attribute;

const material = new THREE.MeshBasicMaterial({
    color: 0X00ffff,
    side: THREE.DoubleSide
})

const model = new THREE.Mesh(geometry, material);

export default model;