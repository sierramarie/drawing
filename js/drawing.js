enableDrawing();

function enableDrawing() {
    document.addEventListener('', function(e) {
        var red = Math.round(Math.random()* 255);
        var green = Math.round(Math.random()* 255);
        var blue = Math.round(Math.random()* 255);
        var box = document.createElement('div');
        var colors = `rgb(${red},${green},${blue})`
        box.style.position = 'absolute';
        box.style.top = e.clientY + 'px';
        box.style.left = e.clientX + 'px';
        box.style.width = '20px';
        box.style.height = '20px';
        box.style.backgroundColor = colors;

        document.body.appendChild(box);

    console.log(colors);
    console.log(box.style.top);
    console.log(box.style.left);
    });
    
}
