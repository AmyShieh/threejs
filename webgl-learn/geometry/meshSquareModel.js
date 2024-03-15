import * as THREE from 'three';

// const vertics = new Float32Array([
//     0,0,0, // 顶点1坐标
//     80,0,0, // 顶点2坐标
//     80,80,0, // 顶点3坐标
//     0,0,0, // 顶点4坐标
//     80,80,0, // 顶点5坐标
//     0,80,0// 顶点6坐标
// ]);

const verticsCommonIndex = new Float32Array([
    0,0,0, // 顶点1坐标
    80,0,0, // 顶点2坐标
    80,80,0, // 顶点3坐标
    0,80,0// 顶点4坐标
])

// 顶点4、5、6 只要和顶点1、2、3保持一个方向就可以了，同为顺时针或同为逆时针。顺序对结果没有产生影响


const normals = new Float32Array([
    0,0,1, // 顶点1坐标
    0,0,1, // 顶点2坐标
    0,0,1, // 顶点3坐标
    0,0,1 // 顶点4坐标
])

const geometry = new THREE.BufferGeometry();

// const attribute  = new THREE.BufferAttribute(vertics, 3);
const attribute  = new THREE.BufferAttribute(verticsCommonIndex, 3);

geometry.attributes.position = attribute;
geometry.attributes.normals = new THREE.BufferAttribute(normals, 3)

const indexes = new Uint16Array([0,1,2,2,3,0]);

const indexAttrbute = new THREE.BufferAttribute(indexes, 1);

geometry.index = indexAttrbute;

const material = new THREE.MeshLambertMaterial({
    color: 0X00ffff,
    side: THREE.DoubleSide,
    wireframe: true
})

const model = new THREE.Mesh(geometry, material);

export default model;