import React from 'react';

class App extends React.Component {
    
    componentDidMount(){
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        let rindex = 255;
        let gindex = 255;
        let bindex = 255;
        for (let i=0; i < 3; i ++ ){
            ctx.fillStyle = 'rgb(0,0,255)';
            ctx.fillRect(10,10,256,128);
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