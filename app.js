let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let winner = document.querySelector(".msg-box")

let trun0 = true;

let btnClicked = 0;

let winprob =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        console.log(e);
        console.log("Box is clicked");
        if(trun0){
            box.innerText ="X";
            trun0 = false;
        }
        else{
            box.innerText="O";
            trun0=true;
        }
        box.disabled = true;
        checkWinner();
        btnClicked++;
        if(btnClicked === 9){
            winner.innerHTML = "<h1> Draw !!!</h1>"
            winner.classList.remove('hide')
            disableBtn();
            console.log(btnClicked)
        }
    });
    
    console.log(btnClicked)
});

function checkWinner(){
    for (let pattern of winprob){
            let pos1 = boxes[pattern[0]].innerText
            let pos2 = boxes[pattern[1]].innerText
            let pos3 = boxes[pattern[2]].innerText
        if(pos1 !== '' && pos2 !== ''&& pos3 !==''){//position should not equal to empty
            if(pos1 === pos2 && pos2 ===pos3){
                console.log("Winner")
                let winner = pos1;
                showWinner(winner);
            }
        }
    }
}

function showWinner(player){
    winner.innerText = 'Winner is '+ player;
    winner.classList.remove('hide')
    disableBtn();
}
//Reset 
reset.addEventListener('click',()=>{
    trun0 = true;
    clear();
    btnClicked =0;
    winner.classList.add('hide')
})

function disableBtn(){
    for(box of boxes){
        box.disabled = true;
    }
}

function clear(){
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled= false;
    })
}
//Draw Function

function Draw(){

}