    let first_num = parseInt(prompt("Enter first number:"));
    let operator = prompt("PLease specify Operator (type +, -, / or *):")
    let second_num = parseInt(prompt("Enter Second Operator:"));
    
    let result ;
    if ((isNaN(first_num) || isNaN(second_num))){
        alert("Refresh the Page and try again");
    } else if( operator === "+"){;
        result = first_num + second_num;
    } else if( operator === "-"){
        result = first_num - second_num;
    } else if( operator === "/"){
        result = first_num / second_num;
    } else if( operator === "*"){
        result = first_num * second_num;
    } else {
        alert("Invalid Number or Operator, Refresh to try again!")
    }
    let message = `The result of the Computation is: ${first_num} ${operator} ${second_num} = ${result}`;
    alert(message);
    