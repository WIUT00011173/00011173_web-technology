// Responsive navbar:

var togle = document.getElementById('toggle');
var navbar = document.getElementById('nav');
var header = document.getElementById('header');

document.onclick = function(e){
  if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'nav'){
    togle.classList.remove('active');
    navbar.classList.remove('active');
  }
}

togle.onclick = function() {
  togle.classList.toggle('active');
  navbar.classList.toggle('active');
};


// header effect when scrolling:

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})

// Getting form input values:

var form = document.getElementById('form')

form.addEventListener('submit', function(event){
  event.preventDefault() // prevents the form from auto submitting

  var name = document.getElementById('Name').value

  console.log(name)

  var email = document.getElementById('Email').value

  console.log(email)

  var subject = document.getElementById('Subject').value

  console.log(subject)

  var message = document.getElementById('Message').value
  
  console.log(message)
})