const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth/2;
canvas.height = innerHeight/2;

c.fillRect(0,0, canvas.width,canvas.height);

class Sprite {
    constructor(position) {
        this.position = position;
    }

    draw() {
        c.fillStyle = "red";
        c.fillRect(0,0, canvas.width, canvas.height);

        c.fillStyle = "blue"
        c.fillRect(this.position.x,this.position.y, this.position.x + 500, this.position.y + 110);

        c.fillStyle = "green"
        c.fillRect(canvas.width/2,canvas.widith/2, 20, 30);
    }
}

const card = new Sprite({ x:0, y:0 });

card.draw();

console.log(card);
