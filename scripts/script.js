const btnGetJoke = document.getElementById("btnGetJoke");
const displayJoke = document.getElementById("displayJoke");

async function getJoke() {
  try {
    const response = await fetch(
      "https://carambar-back-nq59.onrender.com/blague/random"
    );
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
