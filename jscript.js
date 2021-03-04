//first example works ok wthout CSS!!
// var form= document.querySelector("form");
// var log= document.querySelector("#log");

// form.addEventListener("submit", function(event){
//     var data= new FormData(form);
//     var output= "";
//     for(const entry of data) {
//         output= output + entry[0] + "=" + entry[1] + "\r";
//     };
//     log.innerText= output;
//     event.preventDefault();
// }, false);

// second example
// Get the form
const form = document.forms[0];

// Get the form's radio buttons
const radios = form.elements['color'];

// Choose the "red" option
radios.value = 'red';
