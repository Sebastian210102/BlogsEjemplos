const jokeE1 = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

//Usando funciones asincronas

async function generateJoke(){
    const config = {
        headers :{
            Accept: 'application/json',
    
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()

    jokeE1.innerHTML = data.joke
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }