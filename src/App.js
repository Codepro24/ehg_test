import React from 'react';

class App extends React.Component {
    
    componentDidMount(){
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        let imgData = ctx.createImageData(256, 128);
        
        //ctx.fillStyle = 'rgb(0,0,255)';
        // ctx.fillRect(10,10,256,128);
        //this.initColors();
        console.log(imgData.data.length);
        var rShade, gShade, bShade;
        //this.initColors();
        for (let i = 0; i < imgData.data.length; i += 4) {
            const initColors = ({rShade, gShade, bShade}) => {
                let count=0;
                const colors = new Array(32);
                for (let r=0; r < 256; r+=8) {
                    colors[r] = new Array(32);
                    for (let g=0; g < 256; g+=8) {
                        colors[r][g] = new Array(32);
                        for (let b=0; b < 256; b+=8) {
                            colors[r][g][b] = [r,g,b];
                            rShade = r;
                            gShade = g;
                            bShade = b;
                            count++;
                            console.log(colors[r][g][b], count);
                        }
                    }
                }
                return colors;
            }

            imgData.data[i+0] = rShade; //r value
            imgData.data[i+1] = gShade;  //g value
            imgData.data[i+2] = bShade;  //b value
            imgData.data[i+3] = 255;  //opacity
          }
          //draw image data to the canvas
          ctx.putImageData(imgData, 10, 10);
    }  
        
    render() {
        return (
            <div>
               <canvas ref="canvas"></canvas>
            </div>
            );
    };
    
    
};

export default App;