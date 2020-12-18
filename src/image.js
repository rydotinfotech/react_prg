
import React, { useEffect } from 'react'
import './App.css';



function Image() {
    useEffect(() => {
        if (document && document.getElementById("myCanvas")) {
            var c = document.getElementById("myCanvas");
            var ctx;
            ctx = c.getContext("2d");
            const imageData = ctx.createImageData(256, 128);  //image Pixels
            const data = imageData.data;
            let combinations = random_rgba(); // combination Array
            for (var i = 0; i < data.length; i += 4) {
                    data[i] = combinations[i] //red
                    data[i + 1] = combinations[i + 1] // green
                    data[i + 2] = combinations[i + 2] // blue
                    data[i + 3] = combinations[i + 3]
            }
            ctx.putImageData(imageData, 0, 0); //Updating Image
        }
    })


    //combination Of Red ,Green ,Blue Array
    function random_rgba() {
        var combArray = [];
        for (var r = 8; r <= 256; r += 8) {
            for (var g = 8; g <= 256; g += 8) {
                for (var b = 8; b <= 256; b += 8) {
                    combArray.push(r === 256 ? r - 1 : r);
                    combArray.push(g === 256 ? g - 1 : g);
                    combArray.push(b === 256 ? b - 1 : b);
                    combArray.push(255);
                }
            }
        }
        return combArray;
    }




    return (
        <div className="App" style={{ marginTop: 20 }}>
            <canvas id="myCanvas" />
        </div>
    );
}

export default Image;
