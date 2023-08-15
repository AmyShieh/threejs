const main = () => {
    const canvas = document.querySelector('#canvas');
    const gl = canvas.getContext('webgl');
    gl.clearColor(1, 0, 0, 1) // 红色
    gl.clear(gl.COLOR_BUFFER_BIT)
}
