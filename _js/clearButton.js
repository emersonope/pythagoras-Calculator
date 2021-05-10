
document.getElementById('clearButton').addEventListener("click", 
function clearData() { 
    document.getElementById('oppositeSideA').value = "";
    document.getElementById('oppositeSideB').value = "";
    document.getElementById('oppositeSideC').value = "";
    document.getElementById('alpha').value = "";
    document.getElementById('betha').value = "";
    document.getElementById('perimerer').value = "";
    document.getElementById('area').value = "";
    document.getElementById('errorMessage').innerHTML = "";
})