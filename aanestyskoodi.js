// Kiitos Juho!!!

var admin = false

var userName = "user"
var userPassword = "user"

var adminName = "admin"
var adminPassword = "admin"

// Log in
function login(){
    var name = document.getElementById("name").value
    var password = document.getElementById("password").value
    var errorText = document.getElementById("error")
    
    if (name == userName && password == userPassword){
        errorText.style.display = "none"
        console.log("You are user")
        admin = false

        document.getElementById("login").style.display = "none"
        document.getElementById("main-program").style.display = "block"
        loadVotes()
    } else if (name == adminName && password == adminPassword){
        errorText.style.display = "none"
        console.log("You are admin")
        admin = true

        document.getElementById("login").style.display = "none"
        document.getElementById("main-program").style.display = "block"
        loadVotes()
    } else {
        errorText.style.display = "block"
    }

    if (admin == false){
        document.getElementById("new-vote").style.display = "none"
    } else {
        document.getElementById("new-vote").style.display = "block"
    }
}

function init() {
    if (window.localStorage.getItem('LocalVotesList') == null) {
        let LocalVotesList = []
        window.localStorage.setItem('LocalVotesList', JSON.stringify(LocalVotesList))
    }
}

function logout(){
    location.reload()
}

//Create vote
function makeNewVote(){
    init() 

    var question = document.getElementById("vote-name").value
    var option1 = document.getElementById("option1").value
    var option2 = document.getElementById("option2").value
    
    var vote = {voteName: question, voteOptions: [{ "optionName": option1, "numberOfVotes": 0 }, { "optionName": option2, "numberOfVotes": 0 }]};

    let LocalVotesList = JSON.parse(window.localStorage.getItem('LocalVotesList'))
    LocalVotesList.push(vote)
    window.localStorage.setItem('LocalVotesList', JSON.stringify(LocalVotesList))
    loadVotes()
}

//Load votes after logging in or after anything

function loadVotes(){
    init() 
    var voteAmount = 0
    document.getElementById("votes").innerHTML = ""
    let LocalVotesList = JSON.parse(window.localStorage.getItem('LocalVotesList'))

    LocalVotesList.forEach(vote => {
        // New vote Div
        var voteContainer = document.getElementById("votes")
        var newVoteDiv = document.createElement("div")
        newVoteDiv.className = "new-vote-div"
        voteContainer.appendChild(newVoteDiv)

        // Vote name
        var newVoteName = document.createElement("h1")
        newVoteName.className = "new-vote-name"
        newVoteName.innerHTML = vote.voteName
        newVoteDiv.appendChild(newVoteName)
        
        
        // Creating options
        var optionNumber = 0
        vote.voteOptions.forEach(option => {
            // Container for options
            var newOptionContainer = document.createElement("div")
            newOptionContainer.className = "new-vote-container"
            newVoteDiv.appendChild(newOptionContainer)

            // Option Name
            var newOptionName = document.createElement("p")
            newOptionName.innerHTML = option.optionName + " | äänet:"
            newOptionName.className = "new-vote-option"
            newOptionContainer.appendChild(newOptionName)

            // Option score
            var newOptionScore = document.createElement("span")
            newOptionScore.innerHTML = option.numberOfVotes
            newOptionContainer.appendChild(newOptionScore)

            // Voting button
            var newOptionButton = document.createElement("button")
            var newOptionButtonText = document.createTextNode("Äänestä")
            newOptionButton.className = "new-vote-button"
            newOptionButton.appendChild(newOptionButtonText)
            newOptionContainer.appendChild(newOptionButton)

            newOptionButton.addEventListener("click", voteClick)
            newOptionButton.dataset.vote = voteAmount
            newOptionButton.dataset.option = optionNumber

            optionNumber++
        })
        
        // Delete button
        var newDeleteButton = document.createElement("button")
        var newDeleteButtonText = document.createTextNode("Poista")
        newDeleteButton.className = "new-delete-button"
        newDeleteButton.appendChild(newDeleteButtonText)
        newDeleteButton.dataset.vote = voteAmount
        newDeleteButton.addEventListener("click", delClick)

        
        if (admin == true){
            newVoteDiv.appendChild(newDeleteButton)
        } else {

        }
        

        voteAmount++
    }); 
}

function voteClick(event){
    if (event.target.dataset.vote) {
        let LocalVotesList = JSON.parse(window.localStorage.getItem('LocalVotesList'));
        LocalVotesList[event.target.dataset.vote].voteOptions[event.target.dataset.option].numberOfVotes++;
        window.localStorage.setItem('LocalVotesList', JSON.stringify(LocalVotesList));
        let voteSpan = event.target.previousElementSibling
        voteSpan.innerHTML = LocalVotesList[event.target.dataset.vote].voteOptions[event.target.dataset.option].numberOfVotes
    }
}

function delClick(event){
    let LocalVotesList = JSON.parse(window.localStorage.getItem('LocalVotesList'));
    LocalVotesList.splice(event.target.dataset.vote, 1);
    window.localStorage.setItem('LocalVotesList', JSON.stringify(LocalVotesList));
    loadVotes();
}