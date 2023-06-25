//function to fetch character items
function getAnimalNames() {
    return fetch('./db.json')
        .then((response) => response.json())
        .then((data) => {
            const animals = data.characters;
            // now render the list of animals
            renderAnimals(animals)
        })

};

// function to render the list of animals
function renderAnimals(animals) {
    const animalObjects = document.getElementById("animal_objects");
    animalObjects.innerHTML = ""

    // loop through each animal name
    animals.forEach(animal => {
        const animalItem = document.createElement("li");
        animalItem.textContent = animal.name;

        // add a click event whenever a name is clicked to display the details
        animalItem.addEventListener('click', () => {
            displayAnimalDetails(animal);
        });
        animalObjects.appendChild(animalItem)
    });
}

// handle displaying animal details with displayAnimalDetails function
function displayAnimalDetails(animal) {
    // GET THE ANIMAL DETAILS SECTION
    const animalDetails = document.getElementById('animal_details');
    animalDetails.innerHTML = '';

    // NOW RENDER THE IMAGE TO THE DOM BY CREATING AN ELEMENT
    const animalImage = document.createElement('img');
    animalImage.src = animal.image;
    animalDetails.append(animalImage)
    // we add animal vote
    const animalVote = document.createElement('p');
    animalVote.textContent = `Votes ${animal.votes}`
    animalDetails.appendChild(animalVote);

    // we add a voting button

    const voteButton = document.createElement('button');
    voteButton.textContent = "Vote";
    voteButton.addEventListener('click', () => {
        voteForAnimal(animal);

    });
    animalDetails.appendChild(voteButton);

}

// now we deal with  function to add the votes
//initializea global click state to check if the vote button is clicked

let clickState = false;
function voteForAnimal(animal) {
    // increment vote on only first one click
    
    
    const currentVotes = animal.votes;
    let updatedVotes;
    
    if (clickState) {
        updatedVotes = currentVotes ;
        clickState = false;
      } else {
        updatedVotes = currentVotes + 1;
        clickState = true;
      }
    
    const animalVotes = document.querySelector('p');
    animalVotes.textContent = `Votes: ${updatedVotes}`;
     // we make a post request to our server
 


}
getAnimalNames();
