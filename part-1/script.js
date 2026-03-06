import * as THREE from "three";
//canvas
const canvas = document.querySelector("canvas.webgl");
console.log(canvas);
//scene
const scene = new THREE.Scene();

//Mesh or object = Geomatry +  Material

//Geomatry
const geomatry = new THREE.BoxGeometry(1, 1, 1); // width, height, depth
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});

const mesh = new THREE.Mesh(geomatry, material);
// mesh.position.x = 0.5;
// add it to the scene
scene.add(mesh);

//Camera - to see our object and in what point of view
//field of view , of this camera is vertical [zoom in : small field of fiew , zoom out : high field of view]
// asppect ratio: width x height
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); //75 out 360deg
camera.position.z = 2; //x y, z   z=2 moving backward from the center
// camera.position.x = 0.5;
scene.add(camera);

// renderer
//webgl renderer:
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
