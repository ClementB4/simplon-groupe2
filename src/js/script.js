window.onload = function() {
    var canvas = document.getElementById('quidditch_terrain');
    if(!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }

    var context = canvas.getContext('2d');
    if(!context) {
        alert("Impossible de récupérer le context du canvas");
        return;
    }
    
	function getMousePosition(canvas, event) { 
        let rect = canvas.getBoundingClientRect(); 
        let x = event.clientX - rect.left; 
        let y = event.clientY - rect.top; 
        console.log("Coordinate x: " + x,  
                    "Coordinate y: " + y); 
        zz = [x,y]
        return zz
    } 

    let Vifor = new ClassVifor(canvas.width, canvas.height);
    canvas.addEventListener("mousedown", function(e) 
        { 
            array = getMousePosition(canvas, e); 
            Vifor.onclick(array[0],array[1])
        }); 
    

	var myInterval = setInterval(animate, 1000/90);
    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "url('https://image.freepik.com/photos-gratuite/plein-cadre-photo-fond-cuir-marron_23-2147951253.jpg')";
		Vifor.draw(context);
		Vifor.colision(canvas.width, canvas.height)
		Vifor.deplacement()
    }
}		