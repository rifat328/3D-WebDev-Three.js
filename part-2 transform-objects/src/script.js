import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.7;
// mesh.position.z = 0.5;
// scene.add(mesh);

// console.log(mesh.position.length());

// // mesh.position.normalize(); // reduce the vector until its normaloze 1

// // set all position at once:
// mesh.position.set(0.7, -0.6, 1);

// // Scale
// /*
// it has 3 property to change:
// x:
// y:
// z:
// */
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 2;
// mesh.scale.set(2, 0.5, 0.5); // set all at once

// // Rotation
// /*
// it x,y ,z doesn't come from vector3 but Eular:
//     when we change x,y,z properties , you can imagine putting a stick through
//     your object's center in the axis's direction and then rotating that ogject on the stick
// */
// mesh.rotation.y = 3.14159; // y = | stick through bottom to top , so rotate side wise
// mesh.rotation.y = Math.PI; // for half rotation we use pi 3.14159 or Math.PI
// // for full rotation double the value of PI
// mesh.rotation.y = Math.PI / 2; // quarter of roatation

// /*
// rotating through differetn axis can result unintended consiquences :
//     since we selected y at the bigenning , then changed x , the position of y chaged .
//     now when we rotate y again we will see different result. its called gimble lock
//     to avoid this we use some sort of order of axis to the rotation
// */
// mesh.rotation.reorder("YXZ");
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;
// // object rotation == quartanian

const group = new THREE.Group(); // adding things to group so we can move all the things together
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
);
cube3.position.x = 2;
group.add(cube3);

group.position.y = 0.5;
group.position.x = -0.5;
group.scale.y = 2;
group.rotation.y = 1;

// axis Helper
// positioning in air is hard to we have axishelper to identify each axis
const axisHelper = new THREE.AxesHelper(2); // peram: length of each axis
scene.add(axisHelper);
/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);
// camera.lookAt(new THREE.Vector3(3,0,0));
// camera.lookAt(mesh.position);

// console.log(
//   "distance from obj to camera: ",
//   mesh.position.distanceTo(camera.position),
// );
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
