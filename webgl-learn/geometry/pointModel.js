import * as THREE from 'three';


const geometry = new THREE.BufferGeometry();

const vertics = new Float32Array([
    0,
    0,
    0, // 顶点1坐标
    50,
    0,
    0, // 顶点2坐标
    0,
    100,
    0, // 顶点3坐标
    0,
    0,
    10, // 顶点4坐标
    0,
    0,
    100, // 顶点5坐标
    50,
    0,
    10 // 顶点6坐标
])

const attribute = new THREE.BufferAttribute(vertics, 3);

geometry.attributes.position = attribute;

const pointMaterial = new THREE.PointsMaterial({
    color: 0xffff00,
    size: 50
})

const pointsModel = new THREE.Points(geometry, pointMaterial)

export default pointsModel;