//Running server
//py -m http.server 8000


function addition(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value; 


    /*///When not using Backend Server
    let result;
    result = Number(num1) + Number(num2);
    document.getElementById('operator').innerText = "+";
    document.getElementById('result').innerText = "Result: " + result;
    console.log("Addition of " + num1 + " and " + num2 + " is " + result);*/


    //Using the Backedend Server
    fetch(`http://localhost:8080/add?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('operator').innerText = "+";
            document.getElementById('result').innerText = "Result: " + data.result;
            console.log("Addition of " + num1 + " and " + num2 + " is " + data.result);
        })
        .catch(error => console.error('Error:', error));
}

function substraction(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    document.getElementById('operator').innerText = "-";
    
    /*///When not using Backend Server
    let result;
    result = Number(num1) - Number(num2);

    document.getElementById('result').innerText = "Result: " + result;
    console.log("Substraction of " + num1 + " and " + num2 + " is " + result);*/


    //Using the Backend Server
    fetch(`http://localhost:8080/sub?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('operator').innerText = "-";
            document.getElementById('result').innerText = "Result: " + data.result;
            console.log("Substraction of " + num1 + " - " + num2 + " is " + data.result);
        })
        .catch(error => console.error('Error:', error));
}

function resetFields(){

    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operator').innerText = "+";
    document.getElementById('result').innerText = "Result: ";
    console.log("Fields resetted");
}
