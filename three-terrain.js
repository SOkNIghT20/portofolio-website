// Three.js Perlin Noise Terrain Mesh Background
// Inspired by user's reference images

// Use orthographic camera for top-down view
const aspect = window.innerWidth / window.innerHeight;
const orthoSize = 120; // Half-size, so mesh is 240x240 units
const camera = new THREE.OrthographicCamera(
    -orthoSize * aspect, orthoSize * aspect, orthoSize, -orthoSize, 0.1, 1000
);
camera.position.set(0, 200, 0);
camera.up.set(0, 0, -1); // So +z is up on screen
camera.lookAt(0, 0, 0);

// Scene setup
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setClearColor(0xffffff, 1);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.domElement.classList.add('three-bg-canvas');

// Terrain parameters
const width = 400; // Make mesh much larger than viewport
const height = 400;
const segments = 200;
const loopDuration = 6; // seconds for a full loop
const amplitude = 10;

// Geometry and material
const geometry = new THREE.PlaneGeometry(width, height, segments, segments);
const material = new THREE.MeshBasicMaterial({ color: 0x111111, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x = -Math.PI / 2.5;
mesh.rotation.z = Math.PI / 16;
scene.add(mesh);

// Lighting (not needed for wireframe, but can add for shading)
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(0, 50, 50);
// scene.add(light);

// Perlin noise implementation (Simplex for better quality)
// Source: https://github.com/josephg/noisejs
class SimplexNoise {
    constructor(r) {
        if (r == undefined) r = Math;
        this.p = new Uint8Array(256);
        for (let i = 0; i < 256; i++) this.p[i] = i;
        let n, q;
        for (let i = 255; i > 0; i--) {
            n = Math.floor((i + 1) * r.random());
            q = this.p[i];
            this.p[i] = this.p[n];
            this.p[n] = q;
        }
        this.perm = new Uint8Array(512);
        for (let i = 0; i < 512; i++) this.perm[i] = this.p[i & 255];
    }
    dot(g, x, y) { return g[0] * x + g[1] * y; }
    noise(xin, yin) {
        const grad3 = [
            [1, 1], [-1, 1], [1, -1], [-1, -1],
            [1, 0], [-1, 0], [1, 0], [-1, 0],
            [0, 1], [0, -1], [0, 1], [0, -1]
        ];
        let n0, n1, n2;
        const F2 = 0.5 * (Math.sqrt(3) - 1);
        const s = (xin + yin) * F2;
        const i = Math.floor(xin + s);
        const j = Math.floor(yin + s);
        const G2 = (3 - Math.sqrt(3)) / 6;
        const t = (i + j) * G2;
        const X0 = i - t;
        const Y0 = j - t;
        const x0 = xin - X0;
        const y0 = yin - Y0;
        let i1, j1;
        if (x0 > y0) { i1 = 1; j1 = 0; } else { i1 = 0; j1 = 1; }
        const x1 = x0 - i1 + G2;
        const y1 = y0 - j1 + G2;
        const x2 = x0 - 1 + 2 * G2;
        const y2 = y0 - 1 + 2 * G2;
        const ii = i & 255;
        const jj = j & 255;
        const gi0 = this.perm[ii + this.perm[jj]] % 12;
        const gi1 = this.perm[ii + i1 + this.perm[jj + j1]] % 12;
        const gi2 = this.perm[ii + 1 + this.perm[jj + 1]] % 12;
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 < 0) n0 = 0.0;
        else {
            t0 *= t0;
            n0 = t0 * t0 * this.dot(grad3[gi0], x0, y0);
        }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 < 0) n1 = 0.0;
        else {
            t1 *= t1;
            n1 = t1 * t1 * this.dot(grad3[gi1], x1, y1);
        }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 < 0) n2 = 0.0;
        else {
            t2 *= t2;
            n2 = t2 * t2 * this.dot(grad3[gi2], x2, y2);
        }
        return 70.0 * (n0 + n1 + n2);
    }
}
const simplex = new SimplexNoise();

// Animate terrain
function animateTerrain(loopTime) {
    const verts = geometry.attributes.position;
    for (let i = 0; i <= segments; i++) {
        for (let j = 0; j <= segments; j++) {
            const idx = i * (segments + 1) + j;
            // Looping noise in time
            const theta = (2 * Math.PI * loopTime) / loopDuration;
            const loopX = Math.cos(theta);
            const loopY = Math.sin(theta);
            const x = (i / segments) * 4;
            const y = (j / segments) * 4;
            // Looping in time using a circle in noise space
            const n = simplex.noise(x + loopX, y + loopY);
            verts.setZ(idx, n * amplitude);
        }
    }
    verts.needsUpdate = true;
    geometry.computeVertexNormals();
}

// Animation loop
function animate() {
    const now = performance.now() / 1000;
    const loopTime = now % loopDuration;
    animateTerrain(loopTime);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

// Responsive resize
window.addEventListener('resize', () => {
    const aspect = window.innerWidth / window.innerHeight;
    camera.left = -orthoSize * aspect;
    camera.right = orthoSize * aspect;
    camera.top = orthoSize;
    camera.bottom = -orthoSize;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate(); 