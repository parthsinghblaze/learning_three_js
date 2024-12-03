import './style.css'
import * as THREE from 'three'

/**
 * We need three thing in three js
 * Scene
 * Camera
 * Renderer
 */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg")
})
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( { color: "pink" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
renderer.setSize( window.innerWidth, window.innerHeight );

function animate() {
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );


