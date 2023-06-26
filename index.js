//function to fetch character items
function getAnimalNames() {
    return fetch('http://localhost:3000/characters')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const animals = data
            // const animals = data.characters;
            // now render the list of animals
            renderAnimals(animals)
        })

};

// function to render the list of animals
function renderAnimals(animals) {
    const animalObjects = document.getElementById("animal_object");
    animalObjects.innerHTML = ""

    // loop through each animal name
    animals.forEach(animal => {
        const animalItem = document.createElement("li");
        animalItem.textContent = animal.name;

        // add a click event whenever a name is clicked to display the details
        animalItem.addEventListener('click', () => {
            displayAnimalDetails(animal);
            changeActiveAnimalNameAppearance(animal);
        });
        animalObjects.appendChild(animalItem)
    });
}

// handle displaying animal details with displayAnimalDetails function

function displayAnimalDetails(animal) {
    // GET THE ANIMAL DETAILS SECTION
  
    const imageDiv = document.getElementById('animal_image')     
    const nameDiv = document.getElementById('animal_name')   
    const voteDiv = document.getElementById('animal_votes')  
    const buttonDiv = document.getElementById('animal_button')     
       
      
    
    imageDiv.innerHTML = ''; 
    nameDiv.innerHTML ='';
    voteDiv.innerHTML = '';
    buttonDiv.innerHTML = '';
    

    // NOW RENDER THE IMAGE TO THE DOM BY CREATING AN ELEMENT
    const animalImage = document.createElement('img');
    animalImage.src = animal.image;
    imageDiv.append(animalImage)

    //add animal Name
    const animalName =document.createElement('h1');
    animalName.textContent = `${animal.name}`;
    nameDiv.appendChild(animalName)
    
    // we add animal vote
    const animalVote = document.createElement('p');
    animalVote.textContent = `Votes ${animal.votes}`
    voteDiv.appendChild(animalVote);

    // we add a voting button

    const voteButton = document.createElement('button');
    voteButton.textContent = "Vote";
    voteButton.addEventListener('click', () => {
        voteForAnimal(animal);

    });
    buttonDiv.appendChild(voteButton);
  
}
// function to change animal name  color once active
let animalState = false;
function changeActiveAnimalNameAppearance(animal){
    const animalItem = document.createElement("li");
    animalItem.textContent = animal.name;
    let currentAnimalState = animalItem.style.color = 'black'
    let updatedColor = animalItem.style.color = 'red';
    if(animalState){
        currentAnimalState = currentAnimalState
        animalState = false;
    }else{
        currentAnimalState=updatedColor 
        animalState = true;
    }
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
