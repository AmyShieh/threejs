const canvas  = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

if(!gl) {
    throw new Error('Webgl is not support')
}

alert('Everything is peachy here')