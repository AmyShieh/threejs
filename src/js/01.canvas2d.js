const main = () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,255, 1.0)';
    ctx.fillRect(100, 100, 200, 200);
}
