document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (evt) {
      const inputs = form.querySelectorAll("input[type='text']");
      let allValid = true;
      let messages = [];
  
      inputs.forEach(input => {
        const value = input.value.trim();
  
        if (value.length < 3) {
          allValid = false;
          messages.push(`${input.name} must be at least 3 characters`);
        }
  
        if (value !== value.toLowerCase()) {
          allValid = false;
          messages.push(`${input.name} must be all lowercase`);
        }
      });
  
      if (!allValid) {
        evt.preventDefault();
        alert("Fix these issues:\n" + messages.join("\n"));
      }
    });
  });
  