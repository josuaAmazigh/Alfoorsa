angular
  .module('Alfoorsa')
  .directive( 'tjsModelViewer',
  [function () {
    return {
      restrict: 'E',
      link: (scope, elem) => {
        var camera = '';
        var scene = '';
        var renderer = '';
        var controls = '';
        var loader1 = new THREE.STLLoader();
        let mesh = '';

        init();

        function init() {
          scene = new THREE.Scene();
          scene.fog = new THREE.FogExp2(0x000000, 0.035);
          scene.position.set(0,-7,0);

          // camera
          camera = new THREE.PerspectiveCamera(50, 1, 1, 2000);
          camera.position.set(20, 2, 5);

          // Lights
          scene.add(new THREE.AmbientLight(0xffffff));

          createScene();

          // Renderer
          renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
          renderer.setClearColor(scene.fog.color);
          renderer.setPixelRatio(window.devicePixelRatio);
          renderer.setSize(400, 400);
          elem[0].appendChild(renderer.domElement);

          renderer.autoClear = false;

          renderer.shadowMap.enabled = true;
          renderer.shadowMap.type = THREE.PCFShadowMap;

          //Controls
          controls = new THREE.OrbitControls( camera );
          controls.enableZoom = false;
          controls.enablePan  = false;
          controls.autoRotate = true;

          // Events
          //window.addEventListener('resize', onWindowResize, false);

          animate();
        }

        function createScene(){
          turnLightsOn();
          loadModel();
        }

        function turnLightsOn(){
          createLights(50, 10, 0);
          createLights(-50, 10, 0);
          createLights(0, 10, 50);
          createLights(0, 10, -50);
          createLights(0, 150, 0);
          createLights(0, -150, 0);
        }

        function createLights(x, y, z){
          const light = new THREE.DirectionalLight(0x909090);
          light.position.set(x, y, z); //50, 10, 0
          light.castShadow = true;
          light.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera(77, 1, 80, 80));
          light.shadow.bias = 0.0001;
          light.shadow.mapSize.width = window.innerWidth;
          light.shadow.mapSize.height = window.innerHeight;
          scene.add(light);
        }

        function loadModel() {
          const modelUrl = '/images/alfoorsa3D.stl';
          loader1.load(modelUrl, function (geometry) {
            var material = new THREE.MeshPhongMaterial( {
              color: 0x4B0A3E,
              wireframe: false,
              specular: 0x111111,
              shininess: 150
            });
            mesh = new THREE.Mesh( geometry, material );
            mesh.position.set( 0, 0, 0 );
            mesh.rotation.set( Math.PI, -Math.PI /  2, 0, 0 );
            mesh.scale.set( 0.1, 0.1, 0.1 );
            scene.add( mesh );
          });
        }

        function onWindowResize(event) {
          renderer.setSize(window.innerWidth, window.innerHeight);
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        }

        function animate() {
          requestAnimationFrame(animate);
          render();
        }

        function render() {
          camera.lookAt(scene.position);
          controls.update();
          renderer.render(scene, camera);
        }
      }
    };
  }
  ]);
