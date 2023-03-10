const btn = document.getElementById('joke')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'

btn.addEventListener('click', newFunc);

function newFunc() {
    async function getData() {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
      const data = await response.json();
      const result = data.joke;
      displayData(result)
    }
    getData()
  
    function displayData(result) {
      //create a new element and display result and append it to the div with class of container
        const newElement = document.createElement('p');
        newElement.textContent = result;
        document.querySelector('.container').appendChild(newElement);
    // make the new elements background color black and make it disappear after 5 seconds
        newElement.style.backgroundColor = 'black';
        newElement.style.color = 'white';
        newElement.style.padding = '10px';
        newElement.style.margin = '10px';
        newElement.style.borderRadius = '10px';
        newElement.style.textAlign = 'center';
        setTimeout(() => {
            newElement.remove();
        }, 5000);

    // replace the text of newElement with a new joke after the get random joke button is clicked
    const getNewJoke = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const result = data.joke;
        newElement.textContent = result;
        newElement.style.backgroundColor = 'black';
        newElement.style.color = 'white';
        newElement.style.padding = '10px';
        newElement.style.margin = '10px';
        newElement.style.borderRadius = '10px';
        newElement.style.textAlign = 'center';
        setTimeout(() => {
          newElement.remove();
        }, 5000);
      }
      
      btn.addEventListener('click', getNewJoke);
    }
}
    

