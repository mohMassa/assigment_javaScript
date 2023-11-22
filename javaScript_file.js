



// function to prompt the user' input 
function get_amount() {
    let amount = prompt("Enter an amount ");
    test(amount)    
}


// function for testing the positivity of an amount 
function test (params) {
    if (params >0  ) {
        comparaison(params);
        
    }
    else if (params !=null) {
        if (confirm("The amount must be number and positive value !") == true) {
            get_amount();
        } 
    
    }
    
}



// funtion to calculate the amount of tip 
function comparaison (amount) {

    if (amount > 100) {
        amount_of_tip = (amount * 10)/100;
        console.log("the amount of the tip is :" + amount_of_tip + "$");    
    }
    else if (amount > 300) {
        amount_of_tip = (amount * 5)/100;
        console.log("the amount of the tip is :" + amount_of_tip + "$"); 

    }

    else if (amount > 500) {
        amount_of_tip = (amount * 3)/100;
        console.log("the amount of the tip is :" + amount_of_tip + "$"); 
        
    }
    else {
        console.log("The amount of the tip is " + 0 + "$");
    }
    
}