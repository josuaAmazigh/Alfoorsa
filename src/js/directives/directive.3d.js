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

        init();

        var loader1 = new THREE.STLLoader();

        function loadModel() {
          const modelUrl = '/images/alfoorsa3D.stl';
          loader1.load(modelUrl, function (geometry) {
            var material = new THREE.MeshPhongMaterial( {
              ambient: 0x000000,
              color: 0x4B0A3E,
              specular: 0x111111,
              shininess: 200
            });
            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.set( 0, -6, 0 );
            mesh.rotation.set( Math.PI, -Math.PI /  2, 0 );
            mesh.scale.set( 0.1, 0.1, 0.1 );
            scene.add( mesh );
          });
        }

        loadModel();
        animate();

        function init() {
          camera = new THREE.PerspectiveCamera(50, 1, 1, 2000);
          camera.position.set(20, 4, 5);
          scene = new THREE.Scene();
          scene.fog = new THREE.FogExp2(0x000000, 0.035);

          // Lights
          scene.add(new THREE.AmbientLight(0xcccccc));
          var directionalLight = new THREE.DirectionalLight(/*Math.random() * 0xffffff*/0xeeeeee);
          directionalLight.position.x = 1;
          directionalLight.position.y = 1;
          directionalLight.position.z = 1;
          directionalLight.position.normalize();
          scene.add(directionalLight);

          // Renderer
          renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
          renderer.setSize(400, 400);
          elem[0].appendChild(renderer.domElement);

          //Controls
          controls = new THREE.OrbitControls( camera );
          controls.enableZoom = false;
          controls.enablePan  = false;

          // Events
          //window.addEventListener('resize', onWindowResize, false);
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
