var gettingA = "";
var gettingB = "";
var gettingC = "";
var gettingBetha = "";
var gettingAlpha = "";

document.getElementById('myBtn').addEventListener("click", 
function firstFunction() {
    gettingA = document.getElementById('oppositeSideA').value;
    gettingB = document.getElementById('oppositeSideB').value;
    gettingC = document.getElementById('oppositeSideC').value;
    gettingAlpha = document.getElementById('alpha').value;
    gettingBetha = document.getElementById('betha').value;

    const msg2 = "The sum of the angles cannot be more than 90°";
    const msg3 = "The sum of the angles cannot be less than 90°";

    let sumOfAngles = (parseFloat(gettingAlpha) + parseFloat(gettingBetha));
    let resultSumAngles = Math.round(sumOfAngles);

    if (gettingA == "" && gettingB == "" && gettingC != "" && gettingBetha != "" && gettingAlpha == "") {
        const msg = "";
        const msg1 = "";
        const msg2 = "";
        const msg3 = "";
        const msg4 = "";
        let sinNumberAlpha = 90 - gettingBetha;
        let alphaRad = sinNumberAlpha * 0.01745;
        let resultA = Math.sin(alphaRad) * gettingC;
        let resultB = Math.sqrt(((-Math.pow(resultA, 2)) + (Math.pow(gettingC, 2))))

        var periTriangle = parseFloat(resultA) + parseFloat(resultB) + parseFloat(gettingC);
        var areaTriangle = (resultA * resultB) / 2 ;

        let finalResultA = resultA.toFixed(2);
        let finalResultB = resultB.toFixed(2);
        let perimeterNumber = periTriangle.toFixed(2);
        let areaNumber = areaTriangle.toFixed(2);
        let Alpha = sinNumberAlpha.toFixed(0);

        document.getElementById('errorMessage').innerHTML = msg;
        document.getElementById('errorMessage').innerHTML = msg1;
        document.getElementById('errorMessage').innerHTML = msg2;
        document.getElementById('errorMessage').innerHTML = msg3;
        document.getElementById('errorMessage').innerHTML = msg4;
        document.getElementById('errorMessage').innerHTML = msg5;
        document.getElementById('errorMessage').innerHTML = msg6;
        document.getElementById('oppositeSideA').value = finalResultA;
        document.getElementById('oppositeSideB').value = finalResultB;
        document.getElementById('perimerer').value = perimeterNumber;
        document.getElementById('area').value = areaNumber;
        document.getElementById('alpha').value = Alpha;

    }  else if (gettingA == "" && gettingB == "" && gettingC != "" && gettingAlpha != "" && gettingBetha == "") {
        const msg = "";
        const msg1 = "";
        const msg2 = "";
        const msg3 = "";
        const msg4 = "";
        let sinNumberBetha= 90 - gettingAlpha;
        let bethaRad = gettingAlpha * 0.01745;
        let resultA = Math.sin(bethaRad) * gettingC;
        let resultB = Math.sqrt(((-Math.pow(resultA, 2)) + (Math.pow(gettingC, 2))))

        var periTriangle = parseFloat(resultA) + parseFloat(resultB) + parseFloat(gettingC);
        var areaTriangle = (resultA * resultB) / 2 ;

        let finalResultA = resultA.toFixed(2);
        let finalResultB = resultB.toFixed(2);
        let perimeterNumber = periTriangle.toFixed(2);
        let areaNumber = areaTriangle.toFixed(2);
        let Betha = sinNumberBetha.toFixed(0);

        document.getElementById('errorMessage').innerHTML = msg;
        document.getElementById('errorMessage').innerHTML = msg1;
        document.getElementById('errorMessage').innerHTML = msg2;
        document.getElementById('errorMessage').innerHTML = msg3;
        document.getElementById('errorMessage').innerHTML = msg4;      
        document.getElementById('errorMessage').innerHTML = msg5;
        document.getElementById('errorMessage').innerHTML = msg6; 
        document.getElementById('oppositeSideA').value = finalResultA;
        document.getElementById('oppositeSideB').value = finalResultB;
        document.getElementById('perimerer').value = perimeterNumber;
        document.getElementById('area').value = areaNumber;
        document.getElementById('betha').value = Betha;  

    } else if (gettingA == "" && gettingB == "" && gettingC != "" && gettingAlpha != "" && gettingBetha != "") {
            
        if (resultSumAngles < 90 || resultSumAngles > 90) {

            if (resultSumAngles > 90) {

                document.getElementById('errorMessage').innerHTML = msg2;   

            } else if (resultSumAngles < 90) {

                document.getElementById('errorMessage').innerHTML = msg3;   
            }            

        } else if (resultSumAngles == 90) { 
            const msg = "";
            const msg1 = "";
            const msg2 = "";
            const msg3 = "";
            const msg4 = "";
            let alphaRad = gettingAlpha * 0.01745;
            console.log(alphaRad)
            let resultA = gettingC * Math.sin(alphaRad) ;
            console.log(resultA)
            let resultB = Math.sqrt(((-Math.pow(resultA, 2)) + (Math.pow(gettingC, 2))))
            console.log(resultB)

            var periTriangle = parseFloat(resultA) + parseFloat(resultB) + parseFloat(gettingC);
            var areaTriangle = (resultA * resultB) / 2 ;
    
            let finalResultA = resultA.toFixed(2);
            let finalResultB = resultB.toFixed(2);
            let perimeterNumber = periTriangle.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);
            
            document.getElementById('errorMessage').innerHTML = msg;
            document.getElementById('errorMessage').innerHTML = msg1;
            document.getElementById('errorMessage').innerHTML = msg2;
            document.getElementById('errorMessage').innerHTML = msg3;
            document.getElementById('errorMessage').innerHTML = msg4;
            document.getElementById('errorMessage').innerHTML = msg5;
            document.getElementById('errorMessage').innerHTML = msg6;
            document.getElementById('perimerer').value = perimeterNumber;
            document.getElementById('area').value = areaNumber;
            document.getElementById('oppositeSideA').value = finalResultA;
            document.getElementById('oppositeSideB').value = finalResultB;
            
        }         
    } else if (gettingA != "" && gettingB == "" && gettingC == "" && gettingBetha != "" && gettingAlpha == "") {
        const msg = "";
        const msg1 = "";
        const msg2 = "";
        const msg3 = "";
        const msg4 = "";
        const msg5 = "";
        const msg6 = "";
        let sinNumberAlpha = 90 - gettingBetha;
        let alphaRad = sinNumberAlpha * 0.01745;
        let resultC =  gettingA / Math.sin(alphaRad);
        let resultB = Math.sqrt(((-Math.pow(gettingA, 2)) + (Math.pow(resultC, 2))))

        var periTriangle = parseFloat(gettingA) + parseFloat(resultB) + parseFloat(resultC);
        var areaTriangle = (gettingA * resultB) / 2 ;
        
        let finalResultB = resultB.toFixed(2);
        let finalResultC = resultC.toFixed(2);
        let perimeterNumber = periTriangle.toFixed(2);
        let areaNumber = areaTriangle.toFixed(2);
        let Alpha = sinNumberAlpha.toFixed(0);
        
        document.getElementById('errorMessage').innerHTML = msg;
        document.getElementById('errorMessage').innerHTML = msg1;
        document.getElementById('errorMessage').innerHTML = msg2;
        document.getElementById('errorMessage').innerHTML = msg3;
        document.getElementById('errorMessage').innerHTML = msg4;
        document.getElementById('errorMessage').innerHTML = msg5;
        document.getElementById('errorMessage').innerHTML = msg6;
        document.getElementById('oppositeSideB').value = finalResultB;
        document.getElementById('oppositeSideC').value = finalResultC;
        document.getElementById('perimerer').value = perimeterNumber;
        document.getElementById('area').value = areaNumber;
        document.getElementById('alpha').value = Alpha;

    } else if (gettingA != "" && gettingB == "" && gettingC == "" && gettingAlpha != "" && gettingBetha == "") {
        const msg = "";
        const msg1 = "";
        const msg2 = "";
        const msg3 = "";
        const msg4 = "";
        const msg5 = "";
        const msg6 = "";
        let sinNumberBetha= 90 - gettingAlpha;
        let bethaRad = gettingAlpha * 0.01745;
        let resultC =  gettingA / Math.sin(bethaRad);
        let resultB = Math.sqrt(((-Math.pow(gettingA, 2)) + (Math.pow(resultC, 2))))

        var periTriangle = parseFloat(gettingA) + parseFloat(resultB) + parseFloat(resultC);
        var areaTriangle = (gettingA * resultB) / 2 ;
        
        let finalResultB = resultB.toFixed(2);
        let finalResultC = resultC.toFixed(2);
        let perimeterNumber = periTriangle.toFixed(2);
        let areaNumber = areaTriangle.toFixed(2);
        let Betha = sinNumberBetha.toFixed(0);
        
        document.getElementById('errorMessage').innerHTML = msg;
        document.getElementById('errorMessage').innerHTML = msg1;
        document.getElementById('errorMessage').innerHTML = msg2;
        document.getElementById('errorMessage').innerHTML = msg3;
        document.getElementById('errorMessage').innerHTML = msg4;
        document.getElementById('errorMessage').innerHTML = msg5;
        document.getElementById('errorMessage').innerHTML = msg6;
        document.getElementById('oppositeSideB').value = finalResultB;
        document.getElementById('oppositeSideC').value = finalResultC;
        document.getElementById('perimerer').value = perimeterNumber;
        document.getElementById('area').value = areaNumber;
        document.getElementById('betha').value = Betha;
        
    } if (gettingA != "" && gettingB == "" && gettingC == "" && gettingAlpha != "" && gettingBetha != "") {
            
        if (resultSumAngles < 90 || resultSumAngles > 90) {

            if (resultSumAngles > 90) {

                document.getElementById('errorMessage').innerHTML = msg2;   

            } else if (resultSumAngles < 90) {

                document.getElementById('errorMessage').innerHTML = msg3;   
            }            

        } else if (resultSumAngles == 90) { 
            const msg = "";
            const msg1 = "";
            const msg2 = "";
            const msg3 = "";
            const msg4 = "";
            const msg5 = "";
            const msg6 = "";
            let alphaRad = gettingAlpha * 0.01745;
            let resultC = gettingA / Math.sin(alphaRad) ;
            let resultB = Math.sqrt(((-Math.pow(gettingA, 2)) + (Math.pow(resultC, 2))))

            var periTriangle = parseFloat(gettingA) + parseFloat(resultB) + parseFloat(resultC);
            var areaTriangle = (gettingA * resultB) / 2 ;
    
            let finalResultB = resultB.toFixed(2);
            let finalResultC = resultC.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);

            document.getElementById('errorMessage').innerHTML = msg;
            document.getElementById('errorMessage').innerHTML = msg1;
            document.getElementById('errorMessage').innerHTML = msg2;
            document.getElementById('errorMessage').innerHTML = msg3;
            document.getElementById('errorMessage').innerHTML = msg4;
            document.getElementById('errorMessage').innerHTML = msg5;
            document.getElementById('errorMessage').innerHTML = msg6;
            document.getElementById('perimerer').value = perimeterNumber;
            document.getElementById('area').value = areaNumber;
            document.getElementById('oppositeSideB').value = finalResultB;
            document.getElementById('oppositeSideC').value = finalResultC;
        }         
    } else if (gettingA == "" && gettingB != "" && gettingC == "" && gettingAlpha != "" && gettingBetha == "") {
        const msg = "";
        const msg1 = "";
        const msg2 = "";
        const msg3 = "";
        const msg4 = "";
        const msg5 = "";
        const msg6 = "";
        let sinNumberBetha = 90 - gettingAlpha;
        let bethaRad = sinNumberBetha * 0.01745;
        let resultC =  gettingB / Math.sin(bethaRad);
        let resultA = Math.sqrt(((-Math.pow(gettingB, 2)) + (Math.pow(resultC, 2))))

        var periTriangle = parseFloat(resultA) + parseFloat(gettingB) + parseFloat(resultC);
        var areaTriangle = (resultA * gettingB) / 2 ;
        
        let finalResultA = resultA.toFixed(2);
        let finalResultC = resultC.toFixed(2);
        let perimeterNumber = periTriangle.toFixed(2);
        let areaNumber = areaTriangle.toFixed(2);
        let Betha = sinNumberBetha.toFixed(0);
        
        document.getElementById('errorMessage').innerHTML = msg;
        document.getElementById('errorMessage').innerHTML = msg1;
        document.getElementById('errorMessage').innerHTML = msg2;
        document.getElementById('errorMessage').innerHTML = msg3;
        document.getElementById('errorMessage').innerHTML = msg4;
        document.getElementById('errorMessage').innerHTML = msg5;
        document.getElementById('errorMessage').innerHTML = msg6;
        document.getElementById('oppositeSideA').value = finalResultA;
        document.getElementById('oppositeSideC').value = finalResultC;
        document.getElementById('perimerer').value = perimeterNumber;
        document.getElementById('area').value = areaNumber;
        document.getElementById('betha').value = Betha;   

    } else if (gettingA == "" && gettingB != "" && gettingC == "" && gettingAlpha == "" && gettingBetha != "") {
        const msg = "";
        const msg1 = "";
        const msg2 = "";
        const msg3 = "";
        const msg4 = "";
        const msg5 = "";
        const msg6 = "";
        let sinNumberAlpha = 90 - gettingBetha;
        let bethaRad = gettingBetha * 0.01745;
        let resultC =  gettingB / Math.sin(bethaRad);
        let resultA = Math.sqrt(((-Math.pow(gettingB, 2)) + (Math.pow(resultC, 2))))

        var periTriangle = parseFloat(resultA) + parseFloat(gettingB) + parseFloat(resultC);
        var areaTriangle = (resultA * gettingB) / 2 ;
        
        let finalResultA = resultA.toFixed(2);
        let finalResultC = resultC.toFixed(2);
        let perimeterNumber = periTriangle.toFixed(2);
        let areaNumber = areaTriangle.toFixed(2);
        let Alpha = sinNumberAlpha.toFixed(0);
        
        document.getElementById('errorMessage').innerHTML = msg;
        document.getElementById('errorMessage').innerHTML = msg1;
        document.getElementById('errorMessage').innerHTML = msg2;
        document.getElementById('errorMessage').innerHTML = msg3;
        document.getElementById('errorMessage').innerHTML = msg4;
        document.getElementById('errorMessage').innerHTML = msg5;
        document.getElementById('errorMessage').innerHTML = msg6;
        document.getElementById('oppositeSideA').value = finalResultA;
        document.getElementById('oppositeSideC').value = finalResultC;
        document.getElementById('perimerer').value = perimeterNumber;
        document.getElementById('area').value = areaNumber;
        document.getElementById('alpha').value = Alpha;
        
    } else if (gettingA == "" && gettingB != "" && gettingC == "" && gettingAlpha != "" && gettingBetha != "") {
            
        if (resultSumAngles < 90 || resultSumAngles > 90) {

            if (resultSumAngles > 90) {

                document.getElementById('errorMessage').innerHTML = msg2;   

            } else if (resultSumAngles < 90) {

                document.getElementById('errorMessage').innerHTML = msg3;   
                
            }            

        } else if (resultSumAngles == 90) { 
            const msg = "";
            const msg1 = "";
            const msg2 = "";
            const msg3 = "";
            const msg4 = "";
            const msg5 = "";
            const msg6 = "";
            let alphaRad = gettingBetha * 0.01745;
            let resultC = gettingB / Math.sin(alphaRad) ;
            let resultA = Math.sqrt(((-Math.pow(gettingB, 2)) + (Math.pow(resultC, 2))))

            var periTriangle = parseFloat(resultA) + parseFloat(gettingB) + parseFloat(resultC);
            var areaTriangle = (resultA * gettingB) / 2 ;
    
            let finalResultA = resultA.toFixed(2);
            let finalResultC = resultC.toFixed(2);
            let perimeterNumber = periTriangle.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);
            
            document.getElementById('errorMessage').innerHTML = msg;
            document.getElementById('errorMessage').innerHTML = msg1;
            document.getElementById('errorMessage').innerHTML = msg2;
            document.getElementById('errorMessage').innerHTML = msg3;
            document.getElementById('errorMessage').innerHTML = msg4;
            document.getElementById('errorMessage').innerHTML = msg5;
            document.getElementById('errorMessage').innerHTML = msg6;
            document.getElementById('perimerer').value = perimeterNumber;
            document.getElementById('area').value = areaNumber;
            document.getElementById('oppositeSideA').value = finalResultA;
            document.getElementById('oppositeSideC').value = finalResultC;
        }         
    } 
})
    