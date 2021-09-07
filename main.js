const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.contentDiv');

button.addEventListener('click', add);

input.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        add();
    }
})

function add() {
    
    if(input.value) {
        
        var li = document.createElement('li');

        var finishButton = document.createElement('div');
        finishButton.classList.add('finishButton');
        finishButton.innerText = "V"

        var resetButton = document.createElement('div');
        resetButton.classList.add('resetButton');
        resetButton.innerText = "X";

        li.innerText = input.value;

        contentDiv.appendChild(li);
        li.appendChild(finishButton);
        li.appendChild(resetButton);

        input.value = "";

        finishButton.addEventListener('click', function(){
            li.classList.toggle('line')
        })

        resetButton.addEventListener('click', function(){
            contentDiv.removeChild(li);
        })
    }
}