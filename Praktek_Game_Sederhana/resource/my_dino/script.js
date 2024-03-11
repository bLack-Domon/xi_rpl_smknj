var isMoving = true;

function setBackgroundMoving(){
    if (isMoving == true) {        
        setTimeout(function(){
            var bg = document.getElementById('board');
            bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px', ''))-1) + 'px';
    
            document.getElementById('score').innerHTML =  parseInt(document.getElementById('score').innerHTML) + 1;
    
            setBackgroundMoving();
        }, 5);
    }
}
setBackgroundMoving();


function setBoxMoving(){
    var box = document.getElementById('box'),
        dino = document.getElementById('dino');

    setTimeout(function(){
        box.style.marginLeft = (parseInt(box.style.marginLeft.replace('px', ''))-1) + "px"; 

        if(parseInt(box.style.marginLeft.replace('px', '')) < -100){
            box.style.marginLeft = "600px";
        }

        if(
            dino.offsetTop + 50 >= box.offsetTop 
            && 
            dino.offsetLeft + 50 >= box.offsetLeft
            &&
            dino.offsetTop + 50 <= box.offsetTop + 50
            &&
            dino.offsetLeft <= box.offsetLeft + 50
            )
            {
                alert('Game Over, Score anda : ' + document.getElementById('score').innerHTML);
                dino.setAttribute('class', 'freeze');
                isMoving = false;
            }else{
                setBoxMoving();
            }
    }, 5);
}
setBoxMoving();


window.addEventListener('keyup', function(e){
    // Check if the pressed key is the spacebar
    if(e.key === " "){
        // Set the marginTop property of the element with id 'dino' to "80px"
        document.getElementById('dino').style.marginTop = "80px";
        
        // Set the class attribute of the element with id 'dino' to 'freeze'
        document.getElementById('dino').setAttribute('class', 'freeze');
        
        // After a delay of 1000 milliseconds (1 second), revert the marginTop and class attributes
        setTimeout(function(){
            document.getElementById('dino').style.marginTop = "170px";
            document.getElementById('dino').setAttribute('class', '');
        }, 1000);
    }
});
