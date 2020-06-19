import React from 'react';

class App extends React.Component {
    
    componentDidMount(){
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        //ctx.fillStyle = 'rgb(0,0,255)';
        ctx.fillRect(10,10,256,128);
        initColors();
    
        function initColors() {
            let rShade, gShade, bShade;
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
                        ctx.fillStyle = 'rgb("+rShade+","+gShade+","+bShade+")';
                        count++;
                        console.log(colors[r][g][b], count);
                    }
                }
            }
        //console.log(colors);
        return colors;
        }
        
        
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