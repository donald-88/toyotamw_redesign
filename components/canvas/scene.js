import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

class Car extends Component {
    componentDidMount() {
        const scene = new THREE.Scene();

        //renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        document.getElementById('canvas').appendChild(renderer.domElement);


        //camera
        const camera = new THREE.PerspectiveCamera(
          70,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 30
        camera.rotation.y = Math.Pi /4


        //lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight)

        const spotLight = new THREE.SpotLight(0xffa95c, 2)
        spotLight.position.set(50, 50, 50)
        scene.add(spotLight)

        spotLight.castShadow = true


        //GLFTLoader Fortuner
        const loader = new GLTFLoader();
        loader.load("/fort.gltf", (gltf) => {
          let model = gltf.scene


          model.scale.set(0.5, 0.5, 0.5)
          model.rotation.y = -Math.PI /6

          model.castShadow = true
          model.receiveShadow = true
        })


        //material
        const mat = {
          color: 0x323232,
          emissive: 0x0,
          roughness: 0.1,
          reflectivity: 0.9,
          clearcoat: 1,
          clearcoatRoughness: 0,
          metalness:0.1
        }


        //sphere
        // const spheregeo = new THREE.SphereGeometry(5, 32, 32)
        // const spheremat = new THREE.MeshPhysicalMaterial(mat)
        //
        // const sphere = new THREE.Mesh(spheregeo, spheremat)
        // sphere.position.y = 10
        // sphere.castShadow = true
        // scene.add(sphere)


        //gound plane
        const geometry = new THREE.PlaneGeometry(1000, 1000, 2)
        const material = new THREE.MeshPhysicalMaterial(mat)

        const plane = new THREE.Mesh(geometry, material)
        plane.rotation.x = -Math.PI /2
        plane.receiveShadow = true
        scene.add(plane)



        //mouse controls
        window.addEventListener("wheel", onMouseWheel)
        let y = 0
        let position = 0

        function onMouseWheel(event) {
          y = event.deltaY * 0.0007
        }

        //resize window
        window.addEventListener( 'resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(window.innerWidth, window.innerHeight)
        } )

        //Orbit controls
        const controls = new OrbitControls( camera, renderer.domElement)


        //render function
        const clock = new THREE.Clock()

        const tick =() =>{

          const elapsedTime = clock.getElapsedTime()

          //update
          controls.update()

          /*position += y
          y *= .9

          camera.position.y = position
          */

          // spotLight.position.set(
          //   camera.position.x + 10,
          //   camera.position.y + 10,
          //   camera.position.z + 10
          // )

          renderer.render(scene, camera)
          window.requestAnimationFrame( tick )
        }

        tick()
      }
  render() {
    return <div id="canvas"></div>;
  }
}

export default Car;
