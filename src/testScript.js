const ctx = document.querySelector('canvas').getContext('2d');
const imageData = ctx.createImageData(256, 128);
const data = imageData.data;

const availableColors = initColors();

for (let i = 0; i < data.length; i += 4) {

  let redIndex, blueIndex, greenIndex;

  do {

    redIndex = Math.floor( Math.random() * 32 );
    blueIndex = Math.floor( Math.random() * 32 );
    greenIndex = Math.floor( Math.random() * 32 );

  } while ( availableColors[redIndex][blueIndex][greenIndex] === false )

  // availableColors[redIndex][blueIndex][greenIndex] = false;

  data[i + 0] = redIndex * 8;
  data[i + 1] = blueIndex * 8
  data[i + 2] = greenIndex * 8;
  

}

ctx.putImageData(imageData, 0, 0);



  redIndex = Math.floor(i/8) % 32;
  blueIndex = Math.floor(i/16) % 32;
  greenIndex = Math.floor(i/24) % 32;

// A program which will produce an image in which each colour occurs exactly once -- with no repetition and no used colours. 
// 1st step: Let's just produce an image in which each colour occurs exactly once, with no repetition.
ctx.fillRect();
ctx.fillStyle();
// Colours are formed by combining a red, green, and blue component in the range 0..256;
// Your program will need to break each component into 32 steps -- 8, 16,24, .. 256 -- which means you will have 32,768 discrete colours. 
// 2nd step: each component meaning red broken into 32 steps, blue into 32, and green into 32
// or red (0..255) -> 7, 15, 23...
// or r32*g32*b32

let gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'green');
gradient.addColorStop(.7, 'white');
gradient.addColorStop(1, 'pink');
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);

//r can go from 0 to 255 in steps of 8 
// r can have 32! values
// g can have 32! values
// b can have 32! values



for (let i = 0; i < 256; i+=8) {
  redIndex = i;
  count++; 
  for (let j=0; j< 256; j+=8) {
    greenIndex = j
  }
  console.log(redIndex, count);
}

function initColors() {
  let count=0;
  const colors = new Array(32);
  for (let r=0; r < 256; r+=8) {
    colors[r] = new Array(32);
    for (let g=0; g < 256; g+=8) {
      colors[r][g] = new Array(32);
      for (let b=0; b < 256; b+=8) {
        colors[r][g][b] = [r,g,b];
        count++;
        console.log(colors[r][g][b], count);
      }
    }
  }
  return colors;
}

const availableColors = initColors();
console.log(availableColors);

const ctx = this.refs.canvas.getContext('2d');
let imgData = ctx.createImageData(256, 128);
console.log(imgData.data.length);
for (let i = 0; i < imgData.data.length; i += 4) {


  imgData.data[i+0] = r; //r value
  imgData.data[i+1] = g;  //g value
  imgData.data[i+2] = b;  //b value
  imgData.data[i+3] = 255;  //opacity
}
//draw image data to the canvas
ctx.putImageData(imgData, 10, 10);

ctx.fillStyle = 'rgba(' + data[pos*4+0]
                        + ',' + data[pos*4+1]
                        + ',' + data[pos*4+2]
                        + ',' + (data[pos*4+3]/255) + ')';
      ctx.fillRect(x + dx, y + dy, 1, 1);