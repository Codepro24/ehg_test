import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
        useRandom: true
    }
    componentDidMount(){
        this.updateCanvas();
    };

    //this creates the Canvas context
    updateCanvas = () => {
        const ctx = this.refs.canvas.getContext('2d');
        let imgData = ctx.createImageData(256, 128);
        const data = imgData.data;
        if (this.state.useRandom) {
            this.randomPixelData(data);
        } else {
            this.gradientPixelData(data);
        }
        ctx.putImageData(imgData, 0, 0);
    };
    
    initColors() {
        const colors = new Array(32);
        for (let r=0; r < 32; r++) {
            colors[r] = new Array(32);
            for (let g=0; g < 32; g++) {
                colors[r][g] = new Array(32);
                for (let b=0; b < 32; b++) {
                    colors[r][g][b] = true;
                }
            }   
        }
        return colors;
    }
    
    randomPixelData(data){
        const availableColors = this.initColors();
        for (let i = 0; i < data.length; i += 4) {
            let redIndex, blueIndex, greenIndex;
            do {
                redIndex = Math.floor( Math.random() * 32 );
                blueIndex = Math.floor( Math.random() * 32 );
                greenIndex = Math.floor( Math.random() * 32 );
            } while ( availableColors[redIndex][blueIndex][greenIndex] === false )
            availableColors[redIndex][blueIndex][greenIndex] = false;
            data[i + 0] = redIndex * 8;
            data[i + 1] = blueIndex * 8
            data[i + 2] = greenIndex * 8;
            data[i + 3] = 255;
        }
    }
    gradientPixelData(data){
        let index = 0;
        for (let red = 0; red < 256; red+=8) {
            for (let green = 0; green < 256; green+=8) {
                for (let blue = 0; blue < 256; blue+=8) {
                    data[index + 0] = red;
                    data[index + 1] = green;
                    data[index + 2] = blue;
                    data[index + 3] = 255;
                    index+=4;
                }
            }
        }
    }

    toggleRender = async () => {
        await this.setState({
            useRandom: !this.state.useRandom
        });
        this.updateCanvas();
    }
    
    render() {
        return (
            <div id="mainDiv" className="ui raised container center aligned segment">
                <h1 className="ui header">Fun with Colours!</h1>
                <canvas ref="canvas" onClick={this.toggleRender}></canvas>
                <p>Click the above image to change patterns</p>
            </div>
        );
    };
}
export default App;