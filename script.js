document.getElementById("jokeBtn").addEventListener("click",jokes);

//fetch using promises
// function jokes()
// {
//     let p = fetch('https://geek-jokes.sameerkumar.website/api?format=json');
//     p.then((response) => response.json())
//     .then((data) => document.getElementById("joke").innerHTML = data.joke;
//console.log(data););

// }

//fetch using asyn/await
async function jokes()
{
    let response = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
   let j = await response.json();
   document.getElementById("joke").innerHTML = j.joke;
}