import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  CylinderGeometry,
  BoxGeometry,
} from "three"
import { renderer, updateRenderer } from "/src/core/renderer"

import { gui } from "/src/core/gui"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color: "#5EDCAE",
  // Rotations.
  rotate_x: 0,
  rotate_y: 0,
  rotate_z: 0,
}
// Sphere 1
const sphere_1 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

sphere_1.castShadow = true

const sphereCtrls1 = gui.addFolder({
  title: "Sphere",
})

sphereCtrls1.addInput(sphere_1.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

sphereCtrls1.addInput(sphere_1.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

sphereCtrls1.addInput(sphere_1.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

sphereCtrls1.addInput(PARAMS, "color").on("change", (e) => {
  sphere_1.material.color = new Color(e.value)
})

sphereCtrls1.addInput(sphere_1.material, "wireframe")

sphere_1.position.set(8, 3, 0)
scene.add(sphere_1)

// Sphere 2

const sphere_2 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

sphere_2.position.set(8, 2, 0)
sphere_2.castShadow = true

const sphereCtrls2 = gui.addFolder({
  title: "Sphere",
})

sphereCtrls2.addInput(sphere_2.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

sphereCtrls2.addInput(sphere_2.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

sphereCtrls2.addInput(sphere_2.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

sphereCtrls2.addInput(PARAMS, "color").on("change", (e) => {
  sphere_2.material.color = new Color(e.value)
})

sphereCtrls2.addInput(sphere_2.material, "wireframe")

sphere_2.position.set(8, 3, 2)
scene.add(sphere_2)

// Sphere 3

const sphere_3 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

sphere_3.position.set(8, 2, 0)
sphere_3.castShadow = true

const sphereCtrls3 = gui.addFolder({
  title: "Sphere",
})

sphereCtrls3.addInput(sphere_3.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

sphereCtrls3.addInput(sphere_3.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

sphereCtrls3.addInput(sphere_3.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

sphereCtrls3.addInput(PARAMS, "color").on("change", (e) => {
  sphere_3.material.color = new Color(e.value)
})

sphereCtrls3.addInput(sphere_3.material, "wireframe")

sphere_3.position.set(8, 3, -2)
scene.add(sphere_3)

// Cylinder 1

const cylinder_1 = new Mesh(
  new CylinderGeometry(1, 1, 4, 10),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

const cylinderCtrls1 = gui.addFolder({
  title: "Cylinder 1",
})

cylinderCtrls1.addInput(cylinder_1.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls1.addInput(cylinder_1.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls1.addInput(cylinder_1.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls1.addInput(PARAMS, "color").on("change", (e) => {
  cylinder_1.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls1.addInput(PARAMS, "rotate_x").on("change", (e) => {
  cylinder_1.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls1.addInput(PARAMS, "rotate_z").on("change", (e) => {
  cylinder_1.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls1.addInput(cylinder_1.material, "wireframe");

cylinder_1.position.set(4, 1, 0)
cylinder_1.rotation.set(1.57, 0, 0)

scene.add(cylinder_1);

// Cylinder 2

const cylinder_2 = new Mesh(
  new CylinderGeometry(1, 1, 4, 10),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

const cylinderCtrls2 = gui.addFolder({
  title: "cylinder_2",
})

cylinderCtrls2.addInput(cylinder_2.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls2.addInput(cylinder_2.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls2.addInput(cylinder_2.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls2.addInput(PARAMS, "color").on("change", (e) => {
  cylinder_2.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls2.addInput(PARAMS, "rotate_x").on("change", (e) => {
  cylinder_2.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls2.addInput(PARAMS, "rotate_z").on("change", (e) => {
  cylinder_2.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls2.addInput(cylinder_2.material, "wireframe");

scene.add(cylinder_2);
cylinder_2.position.set(-4, 1, 0)
cylinder_2.rotation.set(1.57, 0, 0)

// Cube 1

const cube_1 = new Mesh(
  new BoxGeometry(2, 2, 2, 10),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

const cubeCtrls1 = gui.addFolder({
  title: "Cube 1",
})

cubeCtrls1.addInput(cylinder_2.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls1.addInput(cylinder_2.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls1.addInput(cylinder_2.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cube_1.position.set(-1, 4, 0)
scene.add(cube_1);

// Cube 2

const cube_2 = new Mesh(
  new BoxGeometry(2, 2, 2, 10),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

const cubeCtrls2 = gui.addFolder({
  title: "Cube 1",
})

cubeCtrls2.addInput(cylinder_2.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls2.addInput(cylinder_2.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls2.addInput(cylinder_2.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cube_2.position.set(2, 4, 0)
scene.add(cube_2);

// Cube 3

const cube_3 = new Mesh(
  new BoxGeometry(2, 2, 2, 10),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

const cubeCtrls3 = gui.addFolder({
  title: "Cube 1",
})

cubeCtrls3.addInput(cylinder_2.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls3.addInput(cylinder_2.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls3.addInput(cylinder_2.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cube_3.position.set(5, 4, 0)
scene.add(cube_3);

// Cube 4

const cube_4 = new Mesh(
  new BoxGeometry(2, 2, 2, 10),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

const cubeCtrls4 = gui.addFolder({
  title: "Cube 1",
})

cubeCtrls4.addInput(cylinder_2.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls4.addInput(cylinder_2.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls4.addInput(cylinder_2.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cube_4.position.set(-4, 4, 0)
scene.add(cube_4);

// Plane

const plane = new Mesh(
  new PlaneGeometry(40, 40, 40, 40),
  new MeshToonMaterial({
    color: new Color("#444"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}