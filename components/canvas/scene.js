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
        camera.position.set(25 ,25 ,50);

        //axis helper
        //const axis = new THREE.AxesHelper(2)
        //scene.add(axis)


        //lights
        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
        directionalLight.position.set(0, 1, 0)
        directionalLight.castShadow = true
        scene.add(directionalLight)


        //GLFTLoader Fortuner
        const loader = new GLTFLoader();
        loader.load("/fortuner.gltf", (gltf) => {
          let model = gltf.scene
          model.position.set(0, 0, -2)
          model.scale.set(0.5, 0.5, 0.5)
          model.rotation.y = -Math.PI /5
          model.castShadow =true
          scene.add()
        })

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
