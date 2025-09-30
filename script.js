//Form validation
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const number = document.getElementById("num");
const email = document.getElementById("mail");
const dob = document.getElementById("dob");
const male = document.getElementById("male");
const female = document.getElementById("female");
const other = document.getElementById("other");
const cricket = document.getElementById("cricket");
const Watching = document.getElementById("Watching");
const Reading = document.getElementById("Reading");
const Riding = document.getElementById("Riding");
const hobbyother = document.getElementById("other");
const message = document.getElementById("message");
const Subscribe = document.getElementById("Subscribe");
const Conditions = document.getElementById("Conditions");
const Offers = document.getElementById("Offers");
const submit = document.getElementById("submit");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const para3 = document.getElementById("para3");
const para4 = document.getElementById("para4");
const para5 = document.getElementById("para5");
const para6 = document.getElementById("para6");
const para7 = document.getElementById("para7");
const para8 = document.getElementById("para8");
const para9 = document.getElementById("para9");
const para10 = document.getElementById("para10");
const para11 = document.getElementById("para11");
const para12 = document.getElementById("para12");

let arr2 = [];
let arr = [];
let obj = {};
submit.addEventListener("click", (event) => {
  event.preventDefault();
  namevalidation();
  emailcheck();
  dobcheck();
  numbervalidation();
  messagecheck();
  checkbox();
  termscondition();
  console.log(obj);
});

function namevalidation() {
  if (fname.value == "") {
    para1.innerText = `First Name is Empty`;
  } else {
    para1.innerText = ``;
  }

  if (lname.value == "") {
    para2.innerText = `Last Name is Empty`;
  } else {
    para2.innerText = ``;
  }
  if (fname.value.length > 0) {
    obj.Firstname = fname.value;
  }
  if (lname.value.length > 0) {
    obj.Lastname = lname.value;
  }
}

function emailcheck() {
  if (email.value == "") {
    para3.innerText = `Please Enter Your Email`;
  } else {
    para3.innerText = ``;
  }
  if (email.value > 0) {
    obj.email = email.value;
  }
}

function dobcheck() {
  if (dob.value == "") {
    para12.innerText = `Please Enter Birth Date`;
  } else {
    para12.innerText = ``;
  }
  if (dob.value > 0) {
    obj.dob = dob.value;
  }
}

function numbervalidation() {
  if (isNaN(number.value)) {
    para4.innerText = `Please Enter valid Number`;
  } else if (number.value == "") {
    para4.innerText = `Please Enter your Number`;
  } else if (number.value.length > 10) {
    para4.innerText = `Please Enter 10 digit mo. number`;
  } else {
    para4.innerText = ``;
  }
  if (number.value > 0) {
    obj.number = number.value;
  }
}

function checkbox() {
  if (cricket.checked) {
    arr.push(cricket.value);
  }
  if (Watching.checked) {
    arr.push(Watching.value);
  }
  if (Reading.checked) {
    arr.push(cricket.value);
  }
  if (Riding.checked) {
    arr.push(Riding.value);
  }
  if (hobbyother.checked) {
    arr.push(hobbyother.value);
  }
  if (arr.length > 0) {
    obj.hobby = arr;
    para6.innerText = ``;
  } else {
    para6.innerText = `Required`;
  }
}

function messagecheck() {
  if (message.value == "") {
    para7.innerText = `Required`;
  } else {
    para7.innerText = ``;
  }
  if (message.value.length) {
    obj.message = message.value;
  }
}

function termscondition() {
  if (Subscribe.checked) {
    arr2.push(Subscribe.name);
    para8.innerText = ``
  } else {
    para8.innerText = `Required`;
  }
  if (Conditions.checked) {
    arr2.push(Conditions.name);
    para9.innerText = ``
  } else {
    para9.innerText = `Required`;
  }
  if (Offers.checked) {
    arr2.push(Offers.name);
    para10.innerText = ``
  } else {
    para10.innerText = `Required`;
  }
  if (arr2.length == "3") {
    obj.termsandconditions = arr2;
  }
}
