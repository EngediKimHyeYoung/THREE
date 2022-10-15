import { GLTFLoader } from 'GLTFLoader';
import * as THREE from 'three';

// import {GLTFLoader} from "../node_modules/three/examples/jsm/loaders/GLTFLoader.js";
// import * as THREE from '../node_modules/three/build/three.module.js';

// console.log(THREE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({canvas: document.querySelector("#box"), antialias: true, alpha: true});
// console.log(renderer.domElement);
scene.background = new THREE.Color("yellow");
camera.position.set(0, 0, 3.6); 
renderer.setSize(700, 700);
renderer.outputEncoding = THREE.sRGBEncoding;


const loader = new GLTFLoader();
loader.load("../shiba/scene.gltf", function(gltf){
    // console.log(gltf.scene);
    scene.add(gltf.scene)

    function animate(){
        requestAnimationFrame(animate);
        gltf.scene.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});




