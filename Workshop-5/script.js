const form = document.getElementById("customer-form");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const phone = document.getElementById("phone").value;

  const customer = {
    name,
    lastname,
    phone,
  };

  let customers = [];

  if (localStorage.getItem("customers")) {
    customers = JSON.parse(localStorage.getItem("customers"));
  }

  customers.push(customer);

  localStorage.setItem("customers", JSON.stringify(customers));

  form.reset();

  message.textContent = "Guardado con éxito";
  message.style.color = "green";
  message.style.display = "block";

  console.log(JSON.parse(localStorage.getItem("customers")));
});