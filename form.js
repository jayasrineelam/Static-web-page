document.getElementById("submitbutton").addEventListener("click", function (event) {
  event.preventDefault();
  // Gets the id=fname, gets the value that user enters and removes the extra spaces 
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
   // finds the id = fname-container and stores it in the javascript 
  const fnameContainer = document.getElementById("fname-container");
  const lnameContainer = document.getElementById("lname-container");
  const emailContainer = document.getElementById("email-container");
  //this clears out any previous errors and gives new error messages
  ["fnameError", "lnameError", "emailError"].forEach(id => {
    const span = document.getElementById(id);
    if (span) 
      span.remove();
  });

  let valid = true;
  
  //creates a span under the first name input box
  if (!fname) {
    const span = document.createElement("span");
    span.id = "fnameError";
    span.className = "error";
    span.textContent = "First name is required";
    fnameContainer.appendChild(span);
    valid = false;
  }
   //creates a span under the last name input box
  if (!lname) {
    const span = document.createElement("span");
    span.id = "lnameError";
    span.className = "error";
    span.textContent = "Last name is required";
    lnameContainer.appendChild(span);
    valid = false;
  }
   //creates a span under the email input box
  if (!email) {
    const span = document.createElement("span");
    span.id = "emailError";
    span.className = "error";
    span.textContent = "Email is required";
    emailContainer.appendChild(span);
    valid = false;
  }
  if (valid) {
    // Collect form data
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    const hobbies = Array.from(document.querySelectorAll('input[name="hobby"]:checked')).map(cb => cb.value).join(", ");
    const comment = document.getElementById("comment").value.trim();
    const dropdown = document.getElementById("dropdown").value;
    const data = {
      "First Name": fname,
      "Last Name": lname,
      "Email": email,
      "Gender": gender,
      "Hobbies": hobbies,
      "Comment": comment,
      "Selected Option": dropdown
    };// creating a table with row,columns
    const table = document.createElement("table");
    table.className="result-table"
    const tbody = document.createElement("tbody");

    for (let key in data) {
      const row = document.createElement("tr");
      const th = document.createElement("th");
       th.textContent = key;
      const td = document.createElement("td");
      td.textContent = data[key];
      row.appendChild(th);
      row.appendChild(td);
      tbody.appendChild(row);
    }

    table.appendChild(tbody);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear old table
    resultDiv.appendChild(table);
  }
});
//when we click cancel button
document.getElementById("cancelbutton").addEventListener("click", function (event) {
  event.preventDefault();
  // Reset form
  document.getElementById("userForm").reset();

  // Remove span errors
  ["fnameError", "lnameError", "emailError"].forEach(id => {
    const span = document.getElementById(id);
    if (span) span.remove();
  });

  // Remove result table
  document.getElementById("result").innerHTML = "";
 
});




