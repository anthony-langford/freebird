import React, {Component} from 'react';
import THREE from './threejs/threeF';
//import THREE.RenderPass from './threejs/postprocessing/RenderPass';

// require("script!./threejs/threeF.js");
// require("script!./threejs/postprocessing/RenderPass.js");
// require("script!./threejs/postprocessing/MaskPass.js");
// require("script!./threejs/postprocessing/ShaderPass.js");
//require("script!./threejs/postprocessing/EffectComposer.js");
// require("script!./threejs/shaders/CopyShader.js");
// require("script!./threejs/shaders/VignetteShader.js");
// require("script!./threejs/shaders/FilmShader.js");


export default class Three extends Component {

  componentDidMount(){

    console.log(THREE);
    setTimeout(() => {
      this.test();
    }, 1000);
  };

  test() {
    var camera, scene, renderer;
    var light1 = new THREE.PointLight(0xffffff, 2, 1000);
    var mesh;
    var animateNoise = 0;
    var mouse = new THREE.Vector2();
    var bufferLimit = 300;
    var numAsteroids = 200;

    var frameCounter = 0;

    var nodeContainer = new THREE.Object3D();
    var directLinkContainer = new THREE.Object3D();
    var muscleLinkContainer = new THREE.Object3D();
    var asteroidContainer = new THREE.Object3D();
    var asteroidLinkContainer = new THREE.Object3D();
    var asteroidHighlightContainer = new THREE.Object3D();

    init();
    animate();


    var composer;

    function init() {

      renderer = new THREE.WebGLRenderer({alpha: true});
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xFFFFF9, 1);
      document.body.appendChild(renderer.domElement);
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 500;
      camera.lookAt(new THREE.Vector3(0, 0, -1000000000000000));

      scene = new THREE.Scene();

      scene.fog = new THREE.Fog(0xFFFFF9, 30, 800);

      light1.position.set(0, 0, 500);

      scene.add(light1);

      var geometry = new THREE.BoxGeometry(200, 200, 200);
      var material = new THREE.MeshLambertMaterial({color: 'red'});
      mesh = new THREE.Mesh(geometry, material);
      //scene.add( mesh );


      scene.add(nodeContainer);
      scene.add(directLinkContainer);
      scene.add(muscleLinkContainer);

      var material = new THREE.MeshLambertMaterial({
        color: 0x222222,
        transparent: true,
        opacity: 1.0,
        shading: THREE.FlatShading
      });
      //var material2 = new THREE.MeshLambertMaterial( { color: 0x547DA6, transparent: true, opacity: 0.8, shading: THREE.FlatShading } );
      var material2 = new THREE.MeshLambertMaterial({
        color: 0xF36F5E,
        transparent: true,
        opacity: 0.8,
        shading: THREE.FlatShading
      });
      for (var i = 0; i < numAsteroids; i++) {

        var radius = 1 + (Math.random() * 5);

        var circleGeometry = new THREE.IcosahedronGeometry(radius, 0);
        var circle = new THREE.Mesh(circleGeometry, material);
        asteroidContainer.add(circle);
        circle.position.x = -480 + ( Math.random() * 960 );
        circle.position.y = -480 + ( Math.random() * 960 );
        circle.position.z = camera.position.z - (Math.random() * 1000);

        var radius = 3 * Math.random();
        var segments = 32;

        var circleGeometry2 = new THREE.CircleGeometry(radius, segments, Math.random(), ( 2 * Math.PI ) * Math.random());
        var circle2 = new THREE.Mesh(circleGeometry2, material2);
        asteroidHighlightContainer.add(circle2);
        circle2.position.x = circle.position.x;
        circle2.position.y = circle.position.y;
        circle2.position.z = circle.position.z;
      }

      scene.add(asteroidContainer);
      scene.add(asteroidLinkContainer);
      scene.add(asteroidHighlightContainer);

      //POST PROCESSING
      //Create Shader Passes
      //var renderPass = new THREE.RenderPass(scene, camera);
     // var copyPass = new THREE.ShaderPass(THREE.CopyShader);

      //var vignettePass = new THREE.ShaderPass(THREE.VignetteShader);
      //vignettePass.uniforms["darkness"].value = 1.0;

      //var filmPass = new THREE.ShaderPass(THREE.FilmShader);
      //filmPass.uniforms["tDiffuse"].value = 1;
      //filmPass.uniforms["time"].value = 1;
      //filmPass.uniforms["sCount"].value = 1024;
      //filmPass.uniforms["nIntensity"].value = 0.05;
      //filmPass.uniforms["grayscale"].value = 0.0;


      composer = new THREE.EffectComposer(renderer);
      //composer.addPass(renderPass);
      //composer.addPass(vignettePass);
      //composer.addPass(filmPass);
      //composer.addPass(copyPass);
      //set last pass in composer chain to renderToScreen
      //copyPass.renderToScreen = true;

      //

      //

      window.addEventListener('resize', onWindowResize, false);


      // window.addEventListener( 'mousemove', onMouseMove, false );
      window.addEventListener('touchmove', onTouchMove, false);
      window.addEventListener('click', onClick, false);

    }

    function onMouseMove(event) {

      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1;

      camera.position.x = mouse.x * 100;
      camera.position.y = mouse.y * 100;
      camera.lookAt(new THREE.Vector3(0, 0, -1000000000000000));
      //console.log( camera.position.x + ", " + camera.position.y );

    }//onMouseMove

    function onTouchMove(event) {

      mouse.x = ( event.changedTouches[0].pageX / window.innerWidth ) * 2 - 1;
      mouse.y = -( event.changedTouches[0].pageY / window.innerHeight ) * 2 + 1;

      camera.position.x = mouse.x * 100;
      camera.position.y = mouse.y * 100;
      camera.lookAt(new THREE.Vector3(0, 0, -1000000000000000));
    }

    function onClick(event) {
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1;

      camera.position.x = mouse.x * 100;
      camera.position.y = mouse.y * 100;
      camera.lookAt(new THREE.Vector3(0, 0, -1000000000000000));
      console.log(camera.position.x + ", " + camera.position.y);
      var geometry = new THREE.BoxGeometry(100, 100, 100);
      var material = new THREE.MeshLambertMaterial({color: 'red'});
      mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = camera.position.x;
      mesh.position.y = camera.position.y;
      mesh.position.z = camera.position.z - 300;
      scene.add(mesh);
      console.log(mesh.position.z, camera.position.z);


    }


    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    }


    function animate() {

      requestAnimationFrame(animate);

      frameCounter++;

      if (frameCounter % 3 == 0) {
        drawLines();
      }


      camera.position.z -= 0;
      light1.position.z = camera.position.z;
      //console.log( camera.position.z + ", " + light1.position.z );
      //console.log( muscleLinkContainer.children[ 0 ].geometry.vertices[ 1 ].position );

      //generate the rand asteroid and red spinners
      for (var i = 0; i < asteroidContainer.children.length; i++) {
        asteroidHighlightContainer.children[i].rotation.z += 0.05;
        if (asteroidContainer.children[i].position.z > camera.position.z) {
          asteroidContainer.children[i].position.z = camera.position.z - 1000 - (Math.random() * 1000);
          // asteroidHighlightContainer.children[ i ].position.z = asteroidContainer.children[ i ].position.z;
          // asteroidHighlightContainer.children[ i ].scale.set(0.25, 0.25, 0.25);
        }
      }

      mesh.position.z -= 1;
      //filmPass.uniforms["time"].value += 0.01;

      composer.render(0.1);

    }

    function drawLines() {

      var material = new THREE.MeshLambertMaterial({
        color: 0x222222,
        transparent: true,
        opacity: 1.0,
        shading: THREE.FlatShading
      });

      var radius = 1;
      var segments = 32;

      var circleGeometry = new THREE.IcosahedronGeometry(radius, 0);
      var circle = new THREE.Mesh(circleGeometry, material);
      nodeContainer.add(circle);
      circle.position.x = mouse.x * 500;
      circle.position.y = mouse.y * 500;
      circle.position.z = camera.position.z - 500;

      var material = new THREE.LineBasicMaterial({color: 0x000000});

      if (nodeContainer.children.length > 1) {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(
          new THREE.Vector3(
            nodeContainer.children[nodeContainer.children.length - 2].position.x,
            nodeContainer.children[nodeContainer.children.length - 2].position.y,
            nodeContainer.children[nodeContainer.children.length - 2].position.z),
          new THREE.Vector3(
            nodeContainer.children[nodeContainer.children.length - 1].position.x,
            nodeContainer.children[nodeContainer.children.length - 1].position.y,
            nodeContainer.children[nodeContainer.children.length - 1].position.z)
        );

        var line = new THREE.Line(geometry, material);
        directLinkContainer.add(line);
      }

      for (var i = 0; i < nodeContainer.children.length; i++) {
        if (distanceB2P(nodeContainer.children[nodeContainer.children.length - 1].position, nodeContainer.children[i].position) < 70 && distanceB2P(nodeContainer.children[nodeContainer.children.length - 1].position, nodeContainer.children[i].position) > 0.0) {
          var material = new THREE.LineBasicMaterial({color: 0x333333, linewidth: 1, transparent: true, opacity: 0.6});
          var geometry = new THREE.Geometry();
          geometry.vertices.push(
            new THREE.Vector3(
              nodeContainer.children[nodeContainer.children.length - 1].position.x,
              nodeContainer.children[nodeContainer.children.length - 1].position.y,
              nodeContainer.children[nodeContainer.children.length - 1].position.z),
            new THREE.Vector3(
              //nodeContainer.children[ i ].position.x,
              //nodeContainer.children[ i ].position.y,
              //nodeContainer.children[ i ].position.z )
              nodeContainer.children[nodeContainer.children.length - 1].position.x,
              nodeContainer.children[nodeContainer.children.length - 1].position.y,
              nodeContainer.children[nodeContainer.children.length - 1].position.z)
          );

          var line = new THREE.Line(geometry, material);
          line.geometry.verticesNeedUpdate = true;

          muscleLinkContainer.add(line);

          //if( muscleLinkContainer.children.length == 100 ){
          animateLineFromOrigin(line, nodeContainer.children[nodeContainer.children.length - 1].position, nodeContainer.children[i].position);
          //}

        }

        if (muscleLinkContainer.children.length >= (bufferLimit * 5)) {
          muscleLinkContainer.remove(muscleLinkContainer.children[0]);
        }
      }

      for (var i = 0; i < asteroidContainer.children.length; i++) {
        if (distanceB2P(nodeContainer.children[nodeContainer.children.length - 1].position, asteroidContainer.children[i].position) < 80) {

          var material = new THREE.LineBasicMaterial({color: 0x547DA6, linewidth: 1});
          var geometry = new THREE.Geometry();
          geometry.vertices.push(
            new THREE.Vector3(
              nodeContainer.children[nodeContainer.children.length - 1].position.x,
              nodeContainer.children[nodeContainer.children.length - 1].position.y,
              nodeContainer.children[nodeContainer.children.length - 1].position.z),
            new THREE.Vector3(
              //nodeContainer.children[ i ].position.x,
              //nodeContainer.children[ i ].position.y,
              //nodeContainer.children[ i ].position.z )
              nodeContainer.children[nodeContainer.children.length - 1].position.x,
              nodeContainer.children[nodeContainer.children.length - 1].position.y,
              nodeContainer.children[nodeContainer.children.length - 1].position.z)
          );

          var line = new THREE.Line(geometry, material);
          line.geometry.verticesNeedUpdate = true;

          asteroidLinkContainer.add(line);


          animateLineFromOrigin(line, nodeContainer.children[nodeContainer.children.length - 1].position, asteroidContainer.children[i].position);

          //console.log( asteroidHighlightContainer.children[ i ].geometry.parameters.radius );
          asteroidHighlightContainer.children[i].scale.set(8, 8, 8);
          //console.log( asteroidHighlightContainer.children[ i ].geometry.parameters.radius );
          asteroidHighlightContainer.children[i].geometry.verticesNeedUpdate = true;
        }
      }

      if (nodeContainer.children.length >= bufferLimit) {
        nodeContainer.remove(nodeContainer.children[0]);
        directLinkContainer.remove(directLinkContainer.children[0]);
      }

      if (asteroidLinkContainer.children.length >= ( bufferLimit / 2 )) {
        asteroidLinkContainer.remove(asteroidLinkContainer.children[0]);
      }

    }//drawLines

    function distanceB2P(v1, v2) {
      var dx = v1.x - v2.x;
      var dy = v1.y - v2.y;
      var dz = v1.z - v2.z;
      var distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
      //console.log( distance );
      return distance;
    }

    function getPointInBetweenByPerc(pointA, pointB, percentage) {

      var dir = pointB.clone().sub(pointA);
      var len = dir.length();
      dir = dir.normalize().multiplyScalar(len * percentage);
      return pointA.clone().add(dir);

    }

    function animateLineFromOrigin(object, origin, destination) {
      var percentage = 0.0;
      var transPosition;

      function animateAnimateLineFromOrigin() {

        transPosition = getPointInBetweenByPerc(origin, destination, percentage);

        object.geometry.vertices[1].x = transPosition.x;
        object.geometry.vertices[1].y = transPosition.y;
        object.geometry.vertices[1].z = transPosition.z;
        object.geometry.verticesNeedUpdate = true;
        percentage += 0.02;

        if (percentage < 1.0) {
          requestAnimationFrame(animateAnimateLineFromOrigin);
        }

      }

      animateAnimateLineFromOrigin();

    }


  };

  render() {
    return (
      <div>
      </div>
    )
  };
};
