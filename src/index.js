import * as THREE from 'three';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls.js';
import  {OBJLoader}  from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
//スクリプトのロードが終わってからinitを実行させる
window.addEventListener('load', init);

let controls, scene, camera;

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

function init(){
    scene = new THREE.Scene();
   scene.background = new THREE.Color( 0xffffff );//0x000000にするか、この行をコメントアウトすると背景が黒になる。

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set(0.811, 7.184, 15);
    camera.fov=90;
    scene.add( camera );

    controls = new TrackballControls(camera,renderer.domElement);
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    
    const light = new THREE.AmbientLight(0xFFFFFF, 1.0);
    scene.add(light);

    let mtlLoader = new MTLLoader();
    let objLoader = new OBJLoader();
    
    mtlLoader.load('./assets/importobjtest/chair_combined.mtl', (materials) => {
        materials.preload();
        objLoader.setMaterials(materials)
        objLoader.load('./assets/importobjtest/chair_combined.obj', (object) => {
            scene.add(object);
        })
    })
    animate();

}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}