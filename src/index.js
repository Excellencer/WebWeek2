/* From course video JavaScript 1 */
if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  const form = document.getElementById("user");
  //The form logic partially taken from https://www.javascripttutorial.net/javascript-dom/javascript-form/
  form.addEventListener("submit", function (event) {
    // stop form submission
    event.preventDefault();

    delExisting(form);
    const dbBody = document.getElementById("database-body");
    let tr = document.createElement("tr");

    for (let x = 1; x < 3; x++) {
      let td = document.createElement("td");
      td.appendChild(document.createTextNode(form.elements[x].value));
      tr.appendChild(td);
    }
    let td = document.createElement("td");
    let admin = "-";
    if (form.elements["Admin"].checked) {
      admin = "X";
    } else {
      admin = "-";
    }
    td.appendChild(document.createTextNode(admin));
    tr.appendChild(td);
    dbBody.appendChild(tr);
  });

  document.getElementById("empty-table").addEventListener("click", emptyTable);
}

function emptyTable() {
  document.getElementById("database-body").innerHTML = "";
}
function delExisting(form) {
  let rows = document.getElementById("database-body").rows;
  let username = form.elements[1].value;

  for (let i = 0; i < rows.length; i++) {
    if (username === rows[i].cells[0].innerHTML) {
      document.getElementById("database-body").deleteRow(i);
    }
  }
}
