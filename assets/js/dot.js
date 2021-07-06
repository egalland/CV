/* params */
const SIZEMIN = 3;
const SIZEMAX = 5;
const RADIUS = 150;
const NUMBEROFPARTICLES = 2500;
const DOTCOLOR = 'red';
const DOTSPEED = 5;
/* */

const canvas = document.getElementById('dot');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArr = [];

const mouse = {
    x: null,
    y: null,
    radius: RADIUS
}

window.addEventListener('mousemove', e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

ctx.fillStyle = 'white';
ctx.font = '90px Verdana';
ctx.fillText('A', 20, 80);

ctx.strokeStyle = 'white';
ctx.strokeRect(0, 0, 100, 100);

const data = ctx.getImageData(0, 0, 100, 100);

class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = SIZEMAX;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
    };

    draw(){
        ctx.fillStyle = DOTCOLOR;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath()
        ctx.fill();
    }
    update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx ** 2 + dy ** 2);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let distanceMax = mouse.radius;
        let force = (distanceMax - distance) / distanceMax;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if(distance < mouse.radius){
            if(this.size > SIZEMIN){
                this.size--;
            }
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if(this.size < SIZEMAX){
                this.size++;
            }
            if(this.x !== this.baseX){
                let dx = this.x - this.baseX;
                this.x -= dx / DOTSPEED;
            }  
            if(this.y !== this.baseY){
                let dy = this.y - this.baseY;
                this.y -= dy / DOTSPEED;
            }
        }
    }
}

function init(){
    particleArr = [];
    for(let i = 0; i < NUMBEROFPARTICLES; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particleArr.push(new Particle(x, y));
    }
    console.log(particleArr.length);
}

init();

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArr.length; i++) {
        particleArr[i].draw();
        particleArr[i].update();
    }
    requestAnimationFrame(animate);
}

animate();