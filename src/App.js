import React from 'react';

class App extends React.Component {
    
    componentDidMount(){
     console.log("It works!");
    };
    //this function has the logic
    updateCanvas = () => {
        const ctx = this.refs.canvas.getContext('2d');
        let imgData = ctx.createImageData(256, 128);
        console.log(imgData.data.length); //131072 which is 32728 times 4

        //the array of colors, non-repeating and in intervals of 8 for r, g, b
        const colors = new Array(32);
                for (let r=0; r < 256; r+=8) {
                    colors[r] = new Array(32);
                    for (let g=0; g < 256; g+=8) {
                        colors[r][g] = new Array(32);
                        for (let b=0; b < 256; b+=8) {
                            colors[r][g][b] = [r,g,b];
                            //count++;
                            console.log(colors[r][g][b]);
                        }
                    }
                }
        //declare three variables to hold current r,g,b values and multiply their random value by 32  
        //because we need 32 components of each colour out of their 256 values (0...255)        
        let rcurrentVal, gcurrentVal, bcurrentVal;
        rcurrentVal = Math.floor(Math.random() * 32);
        gcurrentVal = Math.floor(Math.random() * 32);
        bcurrentVal = Math.floor(Math.random() * 32);
                
        var currentColor = [];
        
        function checkForRepeats(color) {
            if ( color !== currentColor(rcurrentVal,gcurrentVal,bcurrentVal) )
                return currentColor(rcurrentVal,gcurrentVal,bcurrentVal);
        }
        
        // eslint-disable-next-line no-array-constructor
        //const colorVal = new Array();
        
        for (let i = 0; i < imgData.data.length; i += 4) {
            colors.every(checkForRepeats);
                imgData.data[i+0] = rcurrentVal; //r value
                imgData.data[i+1] = gcurrentVal;  //g value
                imgData.data[i+2] = bcurrentVal;  //b value
          
            
          };
          //draw image data to the canvas
          ctx.putImageData(imgData, 10,10);
    };  
        
    render() {
        return (
            <div style={{border: "1px solid black"}} onMouseEnter={this.updateCanvas}>
               <canvas ref="canvas"></canvas>
            </div>
            );
    };
}
    
export default App;