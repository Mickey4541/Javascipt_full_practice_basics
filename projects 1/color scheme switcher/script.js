const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

//console.log(buttons) garda nodelist mileko xa. so, foreach loop lagauna paiyo.
buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(event){
        // console.log(event.target);//target = event kaha bata aai rako xa
        if(event.target.id ==='grey'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id ==='white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id ==='blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id ==='yellow'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id ==='purple'){
            body.style.backgroundColor = event.target.id;
        }
    })
    
})

