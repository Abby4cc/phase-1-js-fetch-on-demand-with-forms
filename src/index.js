const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("input#searchByID");
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
          const movieDetails = document.querySelector("#movieDetails");
          movieDetails.innerHTML = `
            <h4>${data.title}</h4>
            <p>${data.summary}</p>
          `;
        })
        .catch((error) => {
          console.error("Error fetching movie:", error);
        });
    });
  };
  
  document.addEventListener('DOMContentLoaded', init);
  