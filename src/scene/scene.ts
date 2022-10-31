import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  CylinderGeometry,
  BoxGeometry,
} from "three"
import { updateRenderer } from "/src/core/renderer"

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

// Cylinder 1

const cylinder_1 = new Mesh(
  new CylinderGeometry(1, 1, 5, 10),
  new MeshToonMaterial({
    color: new Color("#FFFFDA"),
    wireframe: false,
  })
)

const cylinderCtrls1 = gui.addFolder({
  title: "Front tire",
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

cylinderCtrls1.addInput(PARAMS, "color").on("change", (e: any) => {
  cylinder_1.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls1.addInput(PARAMS, "rotate_x").on("change", (e: any) => {
  cylinder_1.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls1.addInput(PARAMS, "rotate_z").on("change", (e: any) => {
  cylinder_1.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls1.addInput(cylinder_1.material, "wireframe");

cylinder_1.position.set(2, 1, 0)
cylinder_1.rotation.set(1.57, 0, 0)

scene.add(cylinder_1);

// Cylinder 2

const cylinder_2 = new Mesh(
  new CylinderGeometry(1, 1, 5, 10),
  new MeshToonMaterial({
    color: new Color("#FFFFDA"),
    wireframe: false,
  })
)

const cylinderCtrls2 = gui.addFolder({
  title: "Rear tire",
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

cylinderCtrls2.addInput(PARAMS, "color").on("change", (e: any) => {
  cylinder_2.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls2.addInput(PARAMS, "rotate_x").on("change", (e: any) => {
  cylinder_2.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls2.addInput(PARAMS, "rotate_z").on("change", (e: any) => {
  cylinder_2.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls2.addInput(cylinder_2.material, "wireframe");

scene.add(cylinder_2);
cylinder_2.position.set(-4, 1, 0)
cylinder_2.rotation.set(1.57, 0, 0)

// Cube 1

const cube_1 = new Mesh(
  new BoxGeometry(0.6, 2.4, 4, 10),
  new MeshToonMaterial({
    color: new Color("#FFFFDA"),
    wireframe: false,
  })
)

const cubeCtrls1 = gui.addFolder({
  title: "Backrest",
})

cubeCtrls1.addInput(cube_1.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls1.addInput(cube_1.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls1.addInput(cube_1.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cube_1.position.set(-2.66, 2.2, 0)
scene.add(cube_1);

// Cube 2

const cube_2 = new Mesh(
  new BoxGeometry(0.6, 1.8, 4, 10),
  new MeshToonMaterial({
    color: new Color("#FFFFDA"),
    wireframe: false,
  })
)

const cubeCtrls2 = gui.addFolder({
  title: "Panel",
})

cubeCtrls2.addInput(cube_2.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls2.addInput(cube_2.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls2.addInput(cube_2.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cube_2.rotation.set(0, 0, -0.5)
cube_2.position.set(1, 2, 0)
scene.add(cube_2);

// Cube 3

const cube_3 = new Mesh(
  new BoxGeometry(0.6, 1.3, 4, 10),
  new MeshToonMaterial({
    color: new Color("#FFFFDA"),
    wireframe: false,
  })
)

const cubeCtrls3 = gui.addFolder({
  title: "Seat",
})

cubeCtrls3.addInput(cube_3.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls3.addInput(cube_3.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cubeCtrls3.addInput(cube_3.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cube_3.position.set(-1.8, 1.32, 0)
cube_3.rotation.set(0, 0, 1.6)
scene.add(cube_3);

// Cylinder 3

const cylinder_3 = new Mesh(
  new CylinderGeometry(0.1, 0.1, 7, 10),
  new MeshToonMaterial({
    color: new Color("#BC4D18"),
    wireframe: false,
  })
)

const cylinderCtrls3 = gui.addFolder({
  title: "Back axis",
})

cylinderCtrls3.addInput(cylinder_3.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls3.addInput(cylinder_3.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls3.addInput(cylinder_3.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls3.addInput(PARAMS, "color").on("change", (e: any) => {
  cylinder_3.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls3.addInput(PARAMS, "rotate_x").on("change", (e: any) => {
  cylinder_3.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls3.addInput(PARAMS, "rotate_z").on("change", (e: any) => {
  cylinder_3.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls3.addInput(cylinder_3.material, "wireframe");

scene.add(cylinder_3);
cylinder_3.position.set(-4, 1, 0)
cylinder_3.rotation.set(1.57, 0, 0)

// Cylinder 4

const cylinder_4 = new Mesh(
  new CylinderGeometry(0.1, 0.1, 7, 10),
  new MeshToonMaterial({
    color: new Color("#BC4D18"),
    wireframe: false,
  })
)

const cylinderCtrls4 = gui.addFolder({
  title: "Front axis",
})

cylinderCtrls4.addInput(cylinder_4.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls4.addInput(cylinder_4.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls4.addInput(cylinder_4.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls4.addInput(PARAMS, "color").on("change", (e: any) => {
  cylinder_4.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls4.addInput(PARAMS, "rotate_x").on("change", (e: any) => {
  cylinder_4.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls4.addInput(PARAMS, "rotate_z").on("change", (e: any) => {
  cylinder_4.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls4.addInput(cylinder_4.material, "wireframe");

scene.add(cylinder_4);
cylinder_4.position.set(2, 1, 0)
cylinder_4.rotation.set(1.57, 0, 0)

// Cylinder 5

const cylinder_5 = new Mesh(
  new CylinderGeometry(.35, .35, 7.5, 16),
  new MeshToonMaterial({
    color: new Color("#BC0D14"),
    wireframe: false,
  })
)

const cylinderCtrls5 = gui.addFolder({
  title: "Right axis",
})

cylinderCtrls5.addInput(cylinder_5.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls5.addInput(cylinder_5.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls5.addInput(cylinder_5.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls5.addInput(PARAMS, "color").on("change", (e: any) => {
  cylinder_5.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls5.addInput(PARAMS, "rotate_x").on("change", (e: any) => {
  cylinder_5.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls5.addInput(PARAMS, "rotate_z").on("change", (e: any) => {
  cylinder_5.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls5.addInput(cylinder_5.material, "wireframe");

scene.add(cylinder_5);
cylinder_5.position.set(-1, 1, 3)
cylinder_5.rotation.set(0, 0, 1.56)

// Cylinder 6

const cylinder_6 = new Mesh(
  new CylinderGeometry(.35, .35, 7.5, 16),
  new MeshToonMaterial({
    color: new Color("#BC0D14"),
    wireframe: false,
  })
)

const cylinderCtrls6 = gui.addFolder({
  title: "Right axis",
})

cylinderCtrls6.addInput(cylinder_6.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls6.addInput(cylinder_6.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls6.addInput(cylinder_6.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls6.addInput(PARAMS, "color").on("change", (e: any) => {
  cylinder_6.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls6.addInput(PARAMS, "rotate_x").on("change", (e: any) => {
  cylinder_6.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls6.addInput(PARAMS, "rotate_z").on("change", (e: any) => {
  cylinder_6.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls6.addInput(cylinder_6.material, "wireframe");

scene.add(cylinder_6);
cylinder_6.position.set(-1, 1, -3)
cylinder_6.rotation.set(0, 0, 1.56)

// Cylinder 7

const cylinder_7 = new Mesh(
  new CylinderGeometry(.15, .15, 5, 16),
  new MeshToonMaterial({
    color: new Color("#BC0D14"),
    wireframe: false,
  })
)

const cylinderCtrls7 = gui.addFolder({
  title: "Left support",
})

cylinderCtrls7.addInput(cylinder_7.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls7.addInput(cylinder_7.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls7.addInput(cylinder_7.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls7.addInput(PARAMS, "color").on("change", (e: any) => {
  cylinder_7.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls7.addInput(PARAMS, "rotate_x").on("change", (e: any) => {
  cylinder_7.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls7.addInput(PARAMS, "rotate_z").on("change", (e: any) => {
  cylinder_7.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls7.addInput(cylinder_7.material, "wireframe");

scene.add(cylinder_7);
cylinder_7.position.set(-3, 3, -3)
cylinder_7.rotation.set(0, 0, 0)

// Cylinder 8

const cylinder_8 = new Mesh(
  new CylinderGeometry(.15, .15, 5, 16),
  new MeshToonMaterial({
    color: new Color("#BC0D14"),
    wireframe: false,
  })
)

const cylinderCtrls8 = gui.addFolder({
  title: "Right support",
})

cylinderCtrls8.addInput(cylinder_8.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls8.addInput(cylinder_8.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls8.addInput(cylinder_8.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls8.addInput(PARAMS, "color").on("change", (e: any) => {
  cylinder_8.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls8.addInput(PARAMS, "rotate_x").on("change", (e: any) => {
  cylinder_8.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls8.addInput(PARAMS, "rotate_z").on("change", (e: any) => {
  cylinder_8.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls8.addInput(cylinder_8.material, "wireframe");

scene.add(cylinder_8);
cylinder_8.position.set(-3, 3, 3)
cylinder_8.rotation.set(0, 0, 0)

// Cylinder 9

const cylinder_9 = new Mesh(
  new CylinderGeometry(.15, .15, 3.5, 16),
  new MeshToonMaterial({
    color: new Color("#BC0D14"),
    wireframe: false,
  })
)

const cylinderCtrls9 = gui.addFolder({
  title: "Upper-right support",
})

cylinderCtrls9.addInput(cylinder_9.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls9.addInput(cylinder_9.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls9.addInput(cylinder_9.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls9.addInput(PARAMS, "color").on("change", (e: any) => {
  cylinder_9.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls9.addInput(PARAMS, "rotate_x").on("change", (e: any) => {
  cylinder_9.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls9.addInput(PARAMS, "rotate_z").on("change", (e: any) => {
  cylinder_9.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls9.addInput(cylinder_9.material, "wireframe");

scene.add(cylinder_9);
cylinder_9.position.set(-1.7, 5, 3)
cylinder_9.rotation.set(0, 0, 1.6)

// Cylinder 10

const cylinder_10 = new Mesh(
  new CylinderGeometry(.15, .15, 3.5, 16),
  new MeshToonMaterial({
    color: new Color("#BC0D14"),
    wireframe: false,
  })
)

const cylinderCtrls10 = gui.addFolder({
  title: "Upper-left support",
})

cylinderCtrls10.addInput(cylinder_10.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls10.addInput(cylinder_10.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls10.addInput(cylinder_10.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls10.addInput(PARAMS, "color").on("change", (e: any) => {
  cylinder_10.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls10.addInput(PARAMS, "rotate_x").on("change", (e: any) => {
  cylinder_10.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls10.addInput(PARAMS, "rotate_z").on("change", (e: any) => {
  cylinder_10.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls10.addInput(cylinder_10.material, "wireframe");

scene.add(cylinder_10);
cylinder_10.position.set(-1.7, 5, -3)
cylinder_10.rotation.set(0, 0, 1.6)

// Plane - roof

const plane1 = new Mesh(
  new PlaneGeometry(3.5, 6, 8, 10),
  new MeshToonMaterial({
    color: new Color("#FFF"),
  })
)

plane1.receiveShadow = true
plane1.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane1)

plane1.position.set(-1.6, 5, 0)

// Plane - back

const plane2 = new Mesh(
  new PlaneGeometry(5.8, 4, 8, 10),
  new MeshToonMaterial({
    color: new Color("#FFF"),
  })
)

plane2.receiveShadow = true
plane2.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane2)

plane2.position.set(-3, 3, 0)
plane2.rotation.set(0, 1.6, 0)


// Cylinder 10

const cylinder_11 = new Mesh(
  new CylinderGeometry(.2, .6, .3, 16),
  new MeshToonMaterial({
    color: new Color("#BC0D14"),
    wireframe: false,
  })
)

const cylinderCtrls11 = gui.addFolder({
  title: "Steering wheel",
})

cylinderCtrls11.addInput(cylinder_11.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls11.addInput(cylinder_11.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls11.addInput(cylinder_11.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

cylinderCtrls11.addInput(PARAMS, "color").on("change", (e: any) => {
  cylinder_11.material.color = new Color(e.value)
})

// Rotations

cylinderCtrls11.addInput(PARAMS, "rotate_x").on("change", (e: any) => {
  cylinder_11.rotation.set(-Math.PI / e.value, 0, 0)
})

// Y axis rotates on its own axis.

cylinderCtrls11.addInput(PARAMS, "rotate_z").on("change", (e: any) => {
  cylinder_11.rotation.set(0, 0, -Math.PI / e.value)
})

cylinderCtrls11.addInput(cylinder_11.material, "wireframe");

scene.add(cylinder_11);
cylinder_11.position.set(0.6, 2.3, -0.8)
cylinder_11.rotation.set(0, 0, -1.9)

// Plane - soil

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