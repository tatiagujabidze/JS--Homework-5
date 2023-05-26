// Exercise 1
const button = document.getElementById("myButton");
const div = document.getElementById("myDiv");

button.addEventListener("click", function() {
    div.classList.add("hidden");
  });



// Exercise 2
const div = document.createElement('div');
div.setAttribute('id', 'card');

const heading = document.createElement('h2');
heading.textContent = 'Gandalf';

const link = document.createElement('a');
link.setAttribute('href', '#');
link.textContent = 'Go to profile';

div.appendChild(heading);
div.appendChild(link);

const container = document.getElementById('container'); 
container.appendChild(div);
