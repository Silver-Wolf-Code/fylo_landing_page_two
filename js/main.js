// function for valid email
function validation() {
  let email = document.getElementById("email").value;
  let text = document.getElementById("text");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    text.innerHTML = "Email valid";
    text.style.color = "#4ddd95";
  } else {
    text.innerHTML = "Check your email please";
    text.style.color = "#f7386b";
  }
}

function validation_two() {
  let email_two = document.getElementById("email_two").value;
  let text_two = document.getElementById("text_two");
  let pattern_two = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email_two.match(pattern_two)) {
    text_two.innerHTML = "Email valid";
    text_two.style.color = "#4ddd95";
  } else {
    text_two.innerHTML = "Check your email please";
    text_two.style.color = "#f7386b";
  }
}