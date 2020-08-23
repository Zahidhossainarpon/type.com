
var ww = window.innerWidth,
  wh = window.innerHeight;


var renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas")
});
renderer.setSize(ww, wh);

var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 1000);
camera.position.z = 100;


var points = [
  [18.1, 58.2],
  [93.6, 8.6],
  [145.3, 89.5],
  [75.9, 148],
  [81.7, 90.2],
  [18.1, 58.2]
];


for (var i = 0; i < points.length; i++) {
  var x = points[i][0];
  var y = 0;
  var z = points[i][1];
  points[i] = new THREE.Vector3(x, y, z);
}


var path = new THREE.CatmullRomCurve3(points);



var geometry = new THREE.TubeGeometry(path, 1, 2, 20, true);


var colors = [0x8664d4, 0x4dc2cc, 0x4d86cc];

for (var i = 0; i < colors.length; i++) {
 
  var geometry = new THREE.TubeBufferGeometry(path, 100, (i * 2) + 4, 10, true);
   var material = new THREE.MeshBasicMaterial({
    color: colors[i],
    transparent: true,
    wireframe: true, 
    opacity: ((1 - i / 5) * 0.5 + 0.1)
  });
  
  var tube = new THREE.Mesh(geometry, material);
  
  scene.add(tube);
}


var tube = new THREE.Mesh(geometry, material);

scene.add(tube);


var percentage = 0;
requestAnimationFrame(render);