class ClassVifor{
    constructor(canvaswidth,canvasheight){
        this.x = 1,
        this.y = 1,
        this.vx = 4,
        this.vy = 3,
        this.img = new Image();   
        this.img.src = 'https://i.pinimg.com/originals/a2/45/7c/a2457c242c6b6e8b76f7af51f3eacaa6.png'
        this.win_img = new Image();
        this.win_img.src = 'src/img/win.png'
        this.diamB = 35,
        this.win = false
    }

    deplacement() {
        this.x += this.vx;
        this.y += this.vy;
    }
    colision(canvaswidth, canvasheight) {
        if(this.x + this.diamB  >= canvaswidth || this.x <= 0  ) {
            this.vx *= -1;
        }
        if(this.y + this.diamB  >= canvasheight || this.y <= 0  ) {
            this.vy *= -1;
        }
    }

    onclick(mouse_x,mouse_y) {
        if(this.x + this.diamB  >= mouse_x && this.x <= mouse_x && this.y + this.diamB  >= mouse_y && this.y <= mouse_y  ) {
            this.win=true;
            this.vx=0;
            this.vy=0;
        }
    }

    draw(context){
        context.beginPath();
        context.drawImage(this.img, this.x, this.y,this.diamB,this.diamB);
        if(this.win){
                context.drawImage(document.getElementById("winimg"), 0,0,1600,900);
                // Clement, voila le résultat du lien, remplace
                // pathdufichierhtml/www.google.fr     
                //donc met le nom de ton fichier html tu sera le boss 
                setTimeout(window.location.replace("harry.html"),5000)
        }
        context.fill();
    }
}