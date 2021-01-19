function getItems(){
    localStorage.setItem('temp', 0);
    
    let items = [];
    for(let i=0; i<3; i++){
        items[i] = window.prompt("Please Enter a Word:");       
    }   
    
    localStorage.setItem('itemList', JSON.stringify(items));
    

    let secondArray = items.map(oneWord);
    localStorage.setItem('switchedLetters', JSON.stringify(secondArray));
    location.reload();

    let newTemp = localStorage.getItem('temp');    
    newTemp++;
    localStorage.setItem('temp', newTemp);

    document.getElementById('myP1').classList.toggle('myP1');
}

function makeList() {
    
    let newTemp = localStorage.temp;
    if(newTemp != 0 && newTemp != null){
        document.getElementById("myP1").style.visibility = "hidden";
    }


    let retrieved = localStorage.getItem('itemList');
    let itemsLi = JSON.parse(retrieved);
    let ul = document.createElement('ul');
    document.getElementById('myItems').appendChild(ul);
    for(let i = 0; i < itemsLi.length; i++){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = itemsLi[i];
    }

    localStorage.setItem('temp', 0);
    localStorage.removeItem('itemList');
    document.getElementById("myP2").style.visibility = "visible";
}

function makeOtherList() {
    let retrieved = localStorage.getItem('switchedLetters');
    
    let itemsLi = JSON.parse(retrieved);
    let ul = document.createElement('ul');
    document.getElementById('myOtherItems').appendChild(ul);
    for(let i = 0; i < itemsLi.length; i++){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = itemsLi[i];
    }
    
    localStorage.removeItem('switchedLetters');
    }



function oneWord (newWord){ 
    return newWord.charAt(newWord.length - 1) + newWord.substring(1, newWord.length - 1) + newWord.charAt(0); 
}