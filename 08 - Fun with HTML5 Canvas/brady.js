const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 100;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

    function draw(e) {
        if (!isDrawing) return; // Stop the function from running if they don't have the button clicked down
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        // lastX = e.offsetX;
        // lastY = e.offsetY;
        // You can do this by destructuring the array in ES6
        [lastX, lastY] = [e.offsetX, e.offsetY];

        hue++;
        if (hue >= 360) {
            hue = 0;
        }

        // This changes the lineWidth.  Increments until 100 and then decrements until 1.
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            direction = !direction;
        }
        if (direction) {
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }
    }

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];

    });

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
