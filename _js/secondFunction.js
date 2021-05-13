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

    const msg4 = "Pythagoras believes that there is a contradiction with the inserted angle";

    let sumOfAngles = (parseFloat(gettingAlpha) + parseFloat(gettingBetha));
    let resultSumAngles = Math.round(sumOfAngles);

    var hypotenuse = Math.pow(gettingC, 2);
    let hypotenuseRound = Math.round(hypotenuse);
    var sumAb = ((Math.pow(gettingA, 2)) + (Math.pow(gettingB, 2)))
    let sumAbRound = Math.round(sumAb);

    if (gettingA != "" && gettingB != "" && gettingC == "" && gettingAlpha == "" && gettingBetha == "") {
        const msg = "";
        const msg1 = "";
        const msg2 = "";
        const msg3 = "";
        const msg4 = "";
        const msg5 = "";
        const msg6 = "";
        let powNumbersA = Math.pow(gettingA,  2);
        let powNumbersB = Math.pow(gettingB,  2);
        let resultC = Math.sqrt((powNumbersA+powNumbersB))
        
        let sinNumberAlpha = (57.2958 * (Math.asin((gettingA / resultC))));
        let numberBetha = 90 - sinNumberAlpha;

        var periTriangle = parseFloat(gettingA ) + parseFloat(gettingB) + parseFloat(resultC);
        var areaTriangle = (gettingA * gettingB) / 2 ;

        let finalResultC = resultC.toFixed(2);
        let perimeterNumber = periTriangle.toFixed(2);
        let areaNumber = areaTriangle.toFixed(2);
        let Alpha = sinNumberAlpha.toFixed(0);
        let Betha = numberBetha.toFixed(0);
        
        document.getElementById('errorMessage').innerHTML = msg;
        document.getElementById('errorMessage').innerHTML = msg1;
        document.getElementById('errorMessage').innerHTML = msg2;
        document.getElementById('errorMessage').innerHTML = msg3;
        document.getElementById('errorMessage').innerHTML = msg4;
        document.getElementById('errorMessage').innerHTML = msg5;
        document.getElementById('errorMessage').innerHTML = msg6;
        document.getElementById('oppositeSideC').value = finalResultC;
        document.getElementById('perimerer').value = perimeterNumber;
        document.getElementById('area').value = areaNumber;
        document.getElementById('alpha').value = Alpha;
        document.getElementById('betha').value = Betha;

    } else if (gettingA != "" && gettingB != "" && gettingC == "" && gettingAlpha != "" && gettingBetha == "") {

        let powNumbersA = Math.pow(gettingA,  2);
        let powNumbersB = Math.pow(gettingB,  2);
        let finalC = Math.sqrt((powNumbersA+powNumbersB))
        let angleAlpha= (57.2958 * (Math.asin((gettingA / finalC))));
        let alphaFinal = Math.round(angleAlpha)

      if (alphaFinal != gettingAlpha) {

            document.getElementById('errorMessage').innerHTML = msg4;

        } else {
            const msg = "";
            const msg1 = "";
            const msg2 = "";
            const msg3 = "";
            const msg4 = "";
            const msg5 = "";
            const msg6 = "";
            let powNumbersA = Math.pow(gettingA,  2);
            let powNumbersB = Math.pow(gettingB,  2);
            let resultC = Math.sqrt((powNumbersA+powNumbersB))
            
            let sinNumberAlpha = (57.2958 * (Math.asin((gettingA / resultC))));
            let numberBetha = 90 - sinNumberAlpha;
    
            var periTriangle = parseFloat(gettingA ) + parseFloat(gettingB) + parseFloat(resultC);
            var areaTriangle = (gettingA * gettingB) / 2 ;
    
            let finalResultC = resultC.toFixed(2);
            let perimeterNumber = periTriangle.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);
            let Alpha = sinNumberAlpha.toFixed(0);
            let Betha = numberBetha.toFixed(0);
            
            document.getElementById('errorMessage').innerHTML = msg;
            document.getElementById('errorMessage').innerHTML = msg1;
            document.getElementById('errorMessage').innerHTML = msg2;
            document.getElementById('errorMessage').innerHTML = msg3;
            document.getElementById('errorMessage').innerHTML = msg4;
            document.getElementById('errorMessage').innerHTML = msg5;
            document.getElementById('errorMessage').innerHTML = msg6;
            document.getElementById('oppositeSideC').value = finalResultC;
            document.getElementById('perimerer').value = perimeterNumber;
            document.getElementById('area').value = areaNumber;
            document.getElementById('alpha').value = Alpha;
            document.getElementById('betha').value = Betha;
        }


    } else if (gettingA != "" && gettingB != "" && gettingC == "" && gettingAlpha == "" && gettingBetha != "") {

        let powNumbersA = Math.pow(gettingA,  2);
        let powNumbersB = Math.pow(gettingB,  2);
        let finalC = Math.sqrt((powNumbersA+powNumbersB))
        let angleAlpha= (57.2958 * (Math.asin((gettingA / finalC))));
        let numberBetha = 90 - angleAlpha;
        let bethaFinal = Math.round(numberBetha)

      if (bethaFinal != gettingBetha) {

            document.getElementById('errorMessage').innerHTML = msg4;

        }  else {

            const msg = "";
            const msg1 = "";
            const msg2 = "";
            const msg3 = "";
            const msg4 = "";
            const msg5 = "";
            const msg6 = "";
            let powNumbersA = Math.pow(gettingA,  2);
            let powNumbersB = Math.pow(gettingB,  2);
            let resultC = Math.sqrt((powNumbersA+powNumbersB))
            
            let sinNumberAlpha = (57.2958 * (Math.asin((gettingA / resultC))));
            let numberBetha = 90 - sinNumberAlpha;
    
            var periTriangle = parseFloat(gettingA ) + parseFloat(gettingB) + parseFloat(resultC);
            var areaTriangle = (gettingA * gettingB) / 2 ;
    
            let finalResultC = resultC.toFixed(2);
            let perimeterNumber = periTriangle.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);
            let Alpha = sinNumberAlpha.toFixed(0);
            let Betha = numberBetha.toFixed(0);
            
            document.getElementById('errorMessage').innerHTML = msg;
            document.getElementById('errorMessage').innerHTML = msg1;
            document.getElementById('errorMessage').innerHTML = msg2;
            document.getElementById('errorMessage').innerHTML = msg3;
            document.getElementById('errorMessage').innerHTML = msg4;
            document.getElementById('errorMessage').innerHTML = msg5;
            document.getElementById('errorMessage').innerHTML = msg6;
            document.getElementById('oppositeSideC').value = finalResultC;
            document.getElementById('perimerer').value = perimeterNumber;
            document.getElementById('area').value = areaNumber;
            document.getElementById('alpha').value = Alpha;
            document.getElementById('betha').value = Betha;
        }


    } else if (gettingA != "" && gettingB == "" && gettingC != "" && gettingAlpha == "" && gettingBetha == "") {
        const msg = "";
        const msg1 = "";
        const msg2 = "";
        const msg3 = "";
        const msg4 = "";
        const msg5 = "";
        const msg6 = "";
        let powNumbersA = Math.pow(gettingA,  2);
        let powNumbersC = Math.pow(gettingC,  2);
        let resultB = Math.sqrt((powNumbersC - powNumbersA))

        let sinNumberAlpha = (57.2958 * (Math.asin((gettingA / gettingC))));
        let numberBetha = 90 - sinNumberAlpha;

        var periTriangle = parseFloat(gettingA) + parseFloat(resultB) + parseFloat(gettingC);
        var areaTriangle = (gettingA * resultB) / 2 ;
    
        let finalResultB = resultB.toFixed(2);
        let perimeterNumber = periTriangle.toFixed(2);
        let areaNumber = areaTriangle.toFixed(2);
        let Alpha = sinNumberAlpha.toFixed(0);
        let Betha = numberBetha.toFixed(0);

        document.getElementById('errorMessage').innerHTML = msg;
        document.getElementById('errorMessage').innerHTML = msg1;
        document.getElementById('errorMessage').innerHTML = msg2;
        document.getElementById('errorMessage').innerHTML = msg3;
        document.getElementById('errorMessage').innerHTML = msg4;
        document.getElementById('errorMessage').innerHTML = msg5;
        document.getElementById('errorMessage').innerHTML = msg6;
        document.getElementById('oppositeSideB').value = finalResultB;
        document.getElementById('perimerer').value = perimeterNumber;
        document.getElementById('area').value = areaNumber;
        document.getElementById('alpha').value = Alpha;
        document.getElementById('betha').value = Betha; 

    } else if (gettingA != "" && gettingB == "" && gettingC != "" && gettingAlpha != "" && gettingBetha == "") {

        let angleAlpha= (57.2958 * (Math.asin((gettingA / gettingC))));
        let alphaFinal = Math.round(angleAlpha)

      if (alphaFinal != gettingAlpha) {

            document.getElementById('errorMessage').innerHTML = msg4;

        } else {
            const msg = "";
            const msg1 = "";
            const msg2 = "";
            const msg3 = "";
            const msg4 = "";
            const msg5 = "";
            const msg6 = "";
            let powNumbersA = Math.pow(gettingA,  2);
            let powNumbersC = Math.pow(gettingC,  2);
            let resultB = Math.sqrt((powNumbersC - powNumbersA))

            let sinNumberAlpha = (57.2958 * (Math.asin((gettingA / gettingC))));
            let numberBetha = 90 - sinNumberAlpha;

            var periTriangle = parseFloat(gettingA) + parseFloat(resultB) + parseFloat(gettingC);
            var areaTriangle = (gettingA * resultB) / 2 ;
        
            let finalResultB = resultB.toFixed(2);
            let perimeterNumber = periTriangle.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);
            let Alpha = sinNumberAlpha.toFixed(0);
            let Betha = numberBetha.toFixed(0);

            document.getElementById('errorMessage').innerHTML = msg;
            document.getElementById('errorMessage').innerHTML = msg1;
            document.getElementById('errorMessage').innerHTML = msg2;
            document.getElementById('errorMessage').innerHTML = msg3;
            document.getElementById('errorMessage').innerHTML = msg4;
            document.getElementById('errorMessage').innerHTML = msg5;
            document.getElementById('errorMessage').innerHTML = msg6;
            document.getElementById('oppositeSideB').value = finalResultB;
            document.getElementById('perimerer').value = perimeterNumber;
            document.getElementById('area').value = areaNumber;
            document.getElementById('alpha').value = Alpha;
            document.getElementById('betha').value = Betha; 
        }


    } else if (gettingA != "" && gettingB == "" && gettingC != "" && gettingAlpha == "" && gettingBetha != "") {

        let angleAlpha= (57.2958 * (Math.asin((gettingA / gettingC))));
        let numberBetha = 90 - angleAlpha;
        let bethaFinal = Math.round(numberBetha)

      if (bethaFinal != gettingBetha) {

            document.getElementById('errorMessage').innerHTML = msg4;

        }  else {

            const msg = "";
            const msg1 = "";
            const msg2 = "";
            const msg3 = "";
            const msg4 = "";
            const msg5 = "";
            const msg6 = "";
            let powNumbersA = Math.pow(gettingA,  2);
            let powNumbersC = Math.pow(gettingC,  2);
            let resultB = Math.sqrt((powNumbersC - powNumbersA))

            let sinNumberAlpha = (57.2958 * (Math.asin((gettingA / gettingC))));
            let numberBetha = 90 - sinNumberAlpha;

            var periTriangle = parseFloat(gettingA) + parseFloat(resultB) + parseFloat(gettingC);
            var areaTriangle = (gettingA * resultB) / 2 ;
        
            let finalResultB = resultB.toFixed(2);
            let perimeterNumber = periTriangle.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);
            let Alpha = sinNumberAlpha.toFixed(0);
            let Betha = numberBetha.toFixed(0);

            document.getElementById('errorMessage').innerHTML = msg;
            document.getElementById('errorMessage').innerHTML = msg1;
            document.getElementById('errorMessage').innerHTML = msg2;
            document.getElementById('errorMessage').innerHTML = msg3;
            document.getElementById('errorMessage').innerHTML = msg4;
            document.getElementById('errorMessage').innerHTML = msg5;
            document.getElementById('errorMessage').innerHTML = msg6;
            document.getElementById('oppositeSideB').value = finalResultB;
            document.getElementById('perimerer').value = perimeterNumber;
            document.getElementById('area').value = areaNumber;
            document.getElementById('alpha').value = Alpha;
            document.getElementById('betha').value = Betha; 
        }


    } else if (gettingA == "" && gettingB != "" && gettingC != "" && gettingAlpha == "" && gettingBetha == "") {
        const msg = "";
        const msg1 = "";
        const msg2 = "";
        const msg3 = "";
        const msg4 = "";
        const msg5 = "";
        const msg6 = "";
        let powNumbersB = Math.pow(gettingB,  2);
        let powNumbersC = Math.pow(gettingC,  2);
        let resultA = Math.sqrt(powNumbersC-powNumbersB);

        let sinNumberAlpha = (57.2958 * (Math.asin((resultA / gettingC))));
        let numberBetha = 90 - sinNumberAlpha;

        var periTriangle = parseFloat(resultA) + parseFloat(gettingB) + parseFloat(gettingC);
        var areaTriangle = (resultA * gettingB) / 2 ;
        
        let finalResultA = resultA.toFixed(2);
        let perimeterNumber = periTriangle.toFixed(2);
        let areaNumber = areaTriangle.toFixed(2);
        let Alpha = sinNumberAlpha.toFixed(0);
        let Betha = numberBetha.toFixed(0);
        
        document.getElementById('errorMessage').innerHTML = msg;
        document.getElementById('errorMessage').innerHTML = msg1;
        document.getElementById('errorMessage').innerHTML = msg2;
        document.getElementById('errorMessage').innerHTML = msg3;
        document.getElementById('errorMessage').innerHTML = msg4;
        document.getElementById('errorMessage').innerHTML = msg5;
        document.getElementById('errorMessage').innerHTML = msg6;
        document.getElementById('oppositeSideA').value = finalResultA;
        document.getElementById('perimerer').value = perimeterNumber;
        document.getElementById('area').value = areaNumber;
        document.getElementById('alpha').value = Alpha;
        document.getElementById('betha').value = Betha;

    } else if (gettingA == "" && gettingB != "" && gettingC != "" && gettingAlpha != "" && gettingBetha == "") {
        
        let powNumbersB = Math.pow(gettingB,  2);
        let powNumbersC = Math.pow(gettingC,  2);
        let resultA = Math.sqrt(powNumbersC-powNumbersB);
        let angleAlpha= (57.2958 * (Math.asin((resultA / gettingC))));
        let alphaFinal = Math.round(angleAlpha)

      if (alphaFinal != gettingAlpha) {

            document.getElementById('errorMessage').innerHTML = msg4;

        } else {
            const msg = "";
            const msg1 = "";
            const msg2 = "";
            const msg3 = "";
            const msg4 = "";
            const msg5 = "";
            const msg6 = "";
            let powNumbersB = Math.pow(gettingB,  2);
            let powNumbersC = Math.pow(gettingC,  2);
            let resultA = Math.sqrt(powNumbersC-powNumbersB);

            let sinNumberAlpha = (57.2958 * (Math.asin((resultA / gettingC))));
            let numberBetha = 90 - sinNumberAlpha;

            var periTriangle = parseFloat(resultA) + parseFloat(gettingB) + parseFloat(gettingC);
            var areaTriangle = (resultA * gettingB) / 2 ;
            
            let finalResultA = resultA.toFixed(2);
            let perimeterNumber = periTriangle.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);
            let Alpha = sinNumberAlpha.toFixed(0);
            let Betha = numberBetha.toFixed(0);
            
            document.getElementById('errorMessage').innerHTML = msg;
            document.getElementById('errorMessage').innerHTML = msg1;
            document.getElementById('errorMessage').innerHTML = msg2;
            document.getElementById('errorMessage').innerHTML = msg3;
            document.getElementById('errorMessage').innerHTML = msg4;
            document.getElementById('errorMessage').innerHTML = msg5;
            document.getElementById('errorMessage').innerHTML = msg6;
            document.getElementById('oppositeSideA').value = finalResultA;
            document.getElementById('perimerer').value = perimeterNumber;
            document.getElementById('area').value = areaNumber;
            document.getElementById('alpha').value = Alpha;
            document.getElementById('betha').value = Betha;
        }


    } else if (gettingA == "" && gettingB != "" && gettingC != "" && gettingAlpha == "" && gettingBetha != "") {

        let powNumbersB = Math.pow(gettingB,  2);
        let powNumbersC = Math.pow(gettingC,  2);
        let resultA = Math.sqrt(powNumbersC-powNumbersB);
        let angleAlpha= (57.2958 * (Math.asin((resultA / gettingC))));
        let numberBetha = 90 - angleAlpha;
        let bethaFinal = Math.round(numberBetha)

      if (bethaFinal != gettingBetha) {

            document.getElementById('errorMessage').innerHTML = msg4;

        }  else {

            const msg = "";
            const msg1 = "";
            const msg2 = "";
            const msg3 = "";
            const msg4 = "";
            const msg5 = "";
            const msg6 = "";
            let powNumbersB = Math.pow(gettingB,  2);
            let powNumbersC = Math.pow(gettingC,  2);
            let resultA = Math.sqrt(powNumbersC-powNumbersB);

            let sinNumberAlpha = (57.2958 * (Math.asin((resultA / gettingC))));
            let numberBetha = 90 - sinNumberAlpha;

            var periTriangle = parseFloat(resultA) + parseFloat(gettingB) + parseFloat(gettingC);
            var areaTriangle = (resultA * gettingB) / 2 ;
            
            let finalResultA = resultA.toFixed(2);
            let perimeterNumber = periTriangle.toFixed(2);
            let areaNumber = areaTriangle.toFixed(2);
            let Alpha = sinNumberAlpha.toFixed(0);
            let Betha = numberBetha.toFixed(0);
            
            document.getElementById('errorMessage').innerHTML = msg;
            document.getElementById('errorMessage').innerHTML = msg1;
            document.getElementById('errorMessage').innerHTML = msg2;
            document.getElementById('errorMessage').innerHTML = msg3;
            document.getElementById('errorMessage').innerHTML = msg4;
            document.getElementById('errorMessage').innerHTML = msg5;
            document.getElementById('errorMessage').innerHTML = msg6;
            document.getElementById('oppositeSideA').value = finalResultA;
            document.getElementById('perimerer').value = perimeterNumber;
            document.getElementById('area').value = areaNumber;
            document.getElementById('alpha').value = Alpha;
            document.getElementById('betha').value = Betha; 
        }


    }
})
    

