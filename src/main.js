
function addition(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value; //Probable error for ' instead of ""

    let result;
    result = Number(num1) + Number(num2);
    document.getElementById('operator').innerText = "+";
    document.getElementById('result').innerText = "Result: " + result;
    console.log("Addition of " + num1 + " and " + num2 + " is " + result);
}

function substraction(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    document.getElementById('operator').innerText = "-";
    
    let result;
    result = Number(num1) - Number(num2);

    document.getElementById('result').innerText = "Result: " + result;
    console.log("Substraction of " + num1 + " and " + num2 + " is " + result);
}

function resetFields(){

    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operator').innerText = "+";
    document.getElementById('result').innerText = "Result: ";
    console.log("Fields resetted");
}
