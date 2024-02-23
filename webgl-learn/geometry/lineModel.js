import * as THREE from 'three';

const geomotry = new THREE.BufferGeometry();

const vertics = new Float32Array([
    0,0,0, // 顶点1坐标
    50,0,0, // 顶点2坐标
    0,100,0, // 顶点3坐标
    0,0,10, // 顶点4坐标
    0,0,100, // 顶点5坐标
    50,0,10 // 顶点6坐标
]);

const attribute = new THREE.BufferAttribute(vertics, 3);

geomotry.attributes.position = attribute;

const material = new THREE.LineBasicMaterial({
    color: 0xfefefe
})

// const lineModel = new THREE.Line(geomotry, material);
const lineModel = new THREE.LineLoop(geomotry, material);
// const lineModel = new THREE.LineSegments(geomotry, material);

export default lineModel;