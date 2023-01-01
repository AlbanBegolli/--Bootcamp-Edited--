/* The JavaScript code below fixes the 3 key points that were mentioned during the bootcamp:
            
            1. Preventing white spaces
            2. A popup after clicking Submit
            3. Storing the values in local storage like this {name, email, age, etc.}
*/

function preventWhitespaces(input) {
  input.value = input.value.replace(/[\s]{2,}/g, ' ').trim();
  
}

function validateForm() {
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    // only validate the input if the attribute 'required' is set
      if(inputs[i].hasAttribute('required')) {
      if(inputs[i].value == null || inputs[i].value == '') {
        alert("All fields are required");
      return false;
      }
    }
  }
  storeValues();
  alert('Submission successful');
  return true;
} 
function storeValues() {
  var values = {};

  // get the name, email, and age values
  values.name = document.querySelector('input[name=name]').value;
  values.email = document.querySelector('input[name=email]').value;
  values.age = document.querySelector('input[name=age]').value;

  // get the selected value of the dropdown lists
  var selects = document.querySelectorAll('select');
  for (var i = 0; i < selects.length; i++) {
    var select = selects[i];
    values[select.name] = select.value;
  }

  // get all checked checkboxes and radio buttons
  var inputs = document.querySelectorAll('input[type=checkbox]:checked, input[type=radio]:checked');
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (values[input.name]) {
      // if the property already exists, push the value to the array
      values[input.name].push(input.value);
    } else {
      // if the property doesn't exist, create an array with the value
      values[input.name] = [input.value];
    }
  }

  // get the textarea value
  var textarea = document.querySelector('textarea');
  if (textarea) {
    values[textarea.name] = textarea.value;
  }

  localStorage.setItem('formValues', JSON.stringify(values));
}

