var gettingA = "";
var gettingB = "";
var gettingC = "";
var gettingBetha = "";
var gettingAlpha = "";
              
document.getElementById('myBtn').addEventListener("click", 
    function catchData() {
        
        gettingA = document.getElementById('oppositeSideA').value;
        gettingB = document.getElementById('oppositeSideB').value;
        gettingC = document.getElementById('oppositeSideC').value;
        gettingAlpha = document.getElementById('alpha').value;
        gettingBetha = document.getElementById('betha').value;
        
        const msg5 = "We need at least two values to do the math!";
        const msg6 = "It's not possible to calculate the opposite sides, perimeter or the area with this data!";

        if (gettingA != "" && gettingB == "" && gettingC == "" && gettingAlpha == "" && gettingBetha == "") {
            
            document.getElementById('errorMessage').innerHTML = msg5;

        } else if (gettingA == "" && gettingB != "" && gettingC == "" && gettingAlpha == "" && gettingBetha == "") {
            
            document.getElementById('errorMessage').innerHTML = msg5;

        } else if (gettingA == "" && gettingB == "" && gettingC != "" && gettingAlpha == "" && gettingBetha == "") {
            
            document.getElementById('errorMessage').innerHTML = msg5;

        } else if (gettingA == "" && gettingB == "" && gettingC == "" && gettingAlpha != "" && gettingBetha == "") {
            
            document.getElementById('errorMessage').innerHTML = msg5;

        } else if (gettingA == "" && gettingB == "" && gettingC == "" && gettingAlpha == "" && gettingBetha != "") {
            
            document.getElementById('errorMessage').innerHTML = msg5;

        } else if (gettingA == "" && gettingB == "" && gettingC == "" && gettingAlpha == "" && gettingBetha == "") {
            
            document.getElementById('errorMessage').innerHTML = msg5;

        } else if (gettingA == "" && gettingB == "" && gettingC == "" && gettingAlpha != "" && gettingBetha != "") {
            
            document.getElementById('errorMessage').innerHTML = msg6;
        } 
    }
)
