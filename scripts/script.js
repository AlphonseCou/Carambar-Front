// Appel API vers localhost:7000
// ensuite les routes pour avoir une blague

// listener sur le bouton
// une div pour afficher le resultat

const btnGetJoke = document.getElementById("btnGetJoke");
const displayJoke = document.getElementById("displayJoke");

async function getJoke() {
  try {
    const response = await fetch("http://localhost:7000/blague/random");
    const joke = await response.json();

    displayJoke.innerHTML = `
        <div class="joke">
          <p><strong>Question:</strong> ${joke.question}</p>
          <p><strong>Réponse:</strong> ${joke.answer}</p>
        </div>
      `;
  } catch (error) {
    console.error("An error occurred");
    displayJoke.innerHTML = "Une error lors du chargement de la blague !";
  }
}

btnGetJoke.addEventListener("click", getJoke);
