import { GLTFLoader } from 'GLTFLoader';
import * as THREE from 'three';

// import {GLTFLoader} from "../node_modules/three/examples/jsm/loaders/GLTFLoader.js";
// import * as THREE from '../node_modules/three/build/three.module.js';

// console.log(GLTFLoader);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, 1);
const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector("canvas"),
    antialias: true
});
camera.position.set(0,0,5);
renderer.outputEncoding = THREE.sRGBEncoding;
scene.background = new THREE.Color("yellow");
// renderer.render(scene, camera);

const loader = new GLTFLoader();

loader.load("../shiba/scene.gltf", function(gltf){
    // console.log(gltf);
    scene.add(gltf.scene);
    // renderer.render(scene, camera);
    function animate(){
        requestAnimationFrame(animate);
        gltf.scene.rotation.y += 0.01;
        // gltf.scene.rotation.x += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});



