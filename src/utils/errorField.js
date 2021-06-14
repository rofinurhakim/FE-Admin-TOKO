export const fieldError = (errors) => {
    errors.map((item) => {
      console.log(item);
      let elField = document.getElementById(item.field);
  
      elField.classList.add("is-invalid");
      elField.nextElementSibling.innerHTML = item.message;
    });
  };
  
  export const clearError = (elId) => {
    let elField = document.getElementById(elId);
  
    elField.classList.remove("is-invalid");
    elField.nextElementSibling.innerHTML = "";
  };