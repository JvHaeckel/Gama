// https://www.w3schools.com/js/js_callback.asp

displayer = () => document.getElementById('demo').innerHTML = some;

calculator = (n1,n2,displayer) => {
        let sum = n1 + n2;
        displayer(sum);
}

calculator(5,5,displayer)