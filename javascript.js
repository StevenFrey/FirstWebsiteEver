
//Function to allow datepicker to be used on our website. It shows 3 months to be shown at a time. In addition to shwoing the button panel for today specifically.
$( function() {
  $( "#datepicker" ).datepicker({
    numberOfMonths: 3,
    showButtonPanel: true  
  });
} );


//Function that allows the accordion effect to be utilized in the Supprters section, allowing it be selected specifically.
$( function() {
  $( "#accordion" ).accordion();
} );

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'ttps://learnwebcode.github.io/json-example/animals-3.json');
openRequest.onload= function() {
  console.log(ourRequest.responseText);
};
ourRequest.send();






