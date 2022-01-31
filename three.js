//import * as THREE from './js/three.module.js';

let camera, scene, renderer;
let geometry, material, cube;
init();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight );
	camera.position.z = 5;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 2,2,2 );
	material = new THREE.MeshNormalMaterial();

	cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	//renderer.setAnimationLoop( animation );
	document.body.appendChild( renderer.domElement );

}

var animate = function () {

	cube.rotation.x += 0.01;
	//cube.rotation.y = time / 1000;
	renderer.render( scene, camera );
    requestAnimationFrame(animate);

};
animate();
