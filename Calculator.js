let string ="";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach( (button) => {
    button.addEventListener( 'click' , (ele)=>{
        console.log(ele.target.innerText);
        try{
            if(ele.target.innerHTML == '='){
                string = eval(string);// It will evaluate the string
                document.querySelector('input').value = string;
            }
            else if(ele.target.innerHTML == 'AC'){
                string = "";
                document.querySelector('input').value = string;
            }
            else if(ele.target.innerHTML == 'DEL'){
                if(string.length>0){
                    string = string.slice(0,-1);
                }
                document.querySelector('input').value = string;
            }
            else{
                string += ele.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }
        catch(err){
            alert("Invalid Input");
        }
    })
})
