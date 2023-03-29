function display_text(text) {
    var num = document.getElementById("calculator-number");
    num.innerHTML = text;
}

function add_number(id) {
    var num = document.getElementById("calculator-number");
    content =  num.innerHTML;

    console.log(id)

    if (content.length === 0) {
        if (id === "+" || id === "-" || id === "x" || id === "÷" || id === ".") {
            console.log("Invalid1")
            return;
        }
    }

    var last = content.charAt(content.length - 1)

    if (last === "+" || last === "-" || last === "x" || last === "÷" || last === ".") {
        if (last !== id) {
            if (id === "+" || id === "-" || id === "x" || id === "÷" || id === ".") {
                console.log("Invalid")
                return;
            } else {
                var new_content = content + id;
                display_text(new_content);
            }
        }
    } else {
        var new_content = content + id;
        display_text(new_content);
    }
}

function remove_number() {
    var num = document.getElementById("calculator-number");
    content =  num.innerHTML;
    var new_content = content.slice(0, -1);
    display_text(new_content);
}

function clear_all() {
    var num = document.getElementById("calculator-number");
    var new_content = "";
    display_text(new_content);
}

function calculate() {

    expression = document.getElementById("calculator-number").innerHTML;


    // Replace 'x' with '*' for multiplication
    expression = expression.replace(/x/g, '*');
    
    // Replace '÷' with '/' for division
    expression = expression.replace(/÷/g, '/');
    
    // Use eval() function to evaluate the expression
    try {
      const result = eval(expression);
      document.getElementById("calculator-number").innerHTML = result;
    } catch (error) {
      console.error('Invalid expression:', error);
      return null;
    }
}

function switch_to_plus_or_minus() {

    var str = document.getElementById("calculator-number").innerHTML;
    if (str.charAt(0) !== '-') {
      // If the first character is not a hyphen, add a question mark to the beginning
      var str = '-' + str;
    } else {
      // If the first character is a hyphen, remove it
      var str = str.slice(1);
    }

    display_text(str)

}

function copyToClipboard() {

    text = document.getElementById("calculator-number").innerHTML;

    navigator.clipboard.writeText(text)
      .then(() => {
        console.log(`Copied "${text}" to clipboard`);
      })
      .catch((error) => {
        console.error('Failed to copy text:', error);
      });
}

window.onload = function() {
    document.getElementById("calculator-number").innerHTML = "";
  }