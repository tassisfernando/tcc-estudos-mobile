// import React, { Component, useRef } from 'react';
// import { View } from 'react-native';
// import ExpoTHREE, { THREE } from 'expo-three';

// class ThreeScene extends Component {
//   cameraRef = useRef();
//   sceneRef = useRef();
//   rendererRef = useRef();

//   componentDidMount() {
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;
//     cameraRef.current = camera;

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xffffff);
//     sceneRef.current = scene;

//     const geometry = new THREE.OBJLoader().load(
//       './assets/cranio.obj', 
//       function(object) {
//         freedomMesh = object;
//         freedomMesh.position.setY(3); //or  this
//         freedomMesh.scale.set(0.02, 0.02, 0.02);
//         scene.add(freedomMesh);
//       },
//       function(xhr) {
//         console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//       },
//       // called when loading has errors
//       function(error) {
//         console.log("An error happened" + error);
//       }
//     );
//     const material = new THREE.MeshBasicMaterial({
//       color: 0x00ff00,
//       wireframe: true,
//     });

//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     rendererRef.current = renderer;

//     requestAnimationFrame(function loop() {
//       requestAnimationFrame(loop);
//       renderScene(scene, camera);
//     });
//   }

//   onContextCreate = async (gl) => {
//     const { drawingBufferWidth: width, drawingBufferHeight: height } =
//       gl;
//     const scale = window.devicePixelRatio;

//     const renderer = rendererRef.current;
//     renderer.setSize(width / scale, height / scale);

//     const camera = cameraRef.current;
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();

//     renderer.setClearColor(0xffffff, 1);
//     renderer.setPixelRatio(scale);

//     const scene = sceneRef.current;
//     scene.background = new THREE.Color(0xffffff);
//   };

//   renderScene = (scene, camera) => {
//     console.log(scene);
//     console.log(camera);
//     renderer.render(scene, camera);
//   }

//   render () {
//     return (
//       <View style={{ flex: 1 }}>
//         <GLView onContextCreate={onContextCreate} />
//       </View>
//     );
//   }
  
// }

// export default ThreeScene;
