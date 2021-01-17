let items = [];

function addItems(){
    for(let i=0; i<3; i++){
        items[i] = window.prompt("Please Enter a Word:");
    };   
    
    window.location.href = "page2.html";
    makeList();
}

function makeList() {
let ul = document.createElement('ul');
document.getElementById('myItems').appendChild(ul);
for(let i = 0; i < items.length; i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = items[i];
};


}



let secondArray = items.map(oneWord);

function oneWord (newWord){ 
    return newWord.charAt(newWord.length - 1) + newWord.substring(1, newWord.length - 1) + newWord.charAt(0); 
}