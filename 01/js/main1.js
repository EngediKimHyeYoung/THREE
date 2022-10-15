// import * as THREE from './three.module.js';
// import * as THREE from 'https://unpkg.com/three@0.145.0/build/three.module.js'
import * as THREE from '../node_modules/three/build/three.module.js';


console.log(THREE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({antialias: true, alpha: false});

console.log(window.devicePixelRatio);
renderer.setPixelRatio(window.devicePixelRatio);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 'blue'});
const obj1 = new THREE.Mesh(geometry, material);

scene.add(obj1);
// obj1.position.z = 0;
camera.position.z = 2;
// camera.position.x = -1;

renderer.setSize(600, 600);
document.getElementById("box1").appendChild(renderer.domElement);

function animation(){
    requestAnimationFrame(animation);
    obj1.rotation.x += 0.05;
    obj1.rotation.y += 0.05;
    obj1.rotation.z += 0.05;
    renderer.render(scene, camera);
}
animation();
