export default function(THREE, canvas){
    const width = canvas.width;
    const height= canvas.height;

    const renderer = new THREE.WebGLRenderer({canvas});
    console.log(renderer, width, height)
}
