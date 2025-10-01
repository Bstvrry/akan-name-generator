const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("akan-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const birthdateInput = document.getElementById("birthdate").value;
  const genderInputs = document.getElementsByName("gender");
  let gender = null;

  // Validate gender
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      gender = genderInputs[i].value;
      break;
    }
  }

  if (!birthdateInput) {
    alert("Please enter your birthdate.");
    return;
  }

  if (!gender) {
    alert("Please select your gender.");
    return;
  }

  const birthdate = new Date(birthdateInput);
  const dayOfWeek = birthdate.getDay(); // 0 = Sunday, 6 = Saturday

  let akanName = "";
  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else {
    akanName = femaleNames[dayOfWeek];
  }

  document.getElementById("result").textContent = 
    `You were born on a ${daysOfWeek[dayOfWeek]}. Your Akan name is ${akanName}.`;
});
