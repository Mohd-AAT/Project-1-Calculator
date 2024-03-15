
const buttons = document.querySelectorAll('.button');
const input = document.querySelector('.input');
let str = "";
let ans = "";

Array.from(buttons).forEach( (button)=>{
    button.addEventListener('click',(ele)=>{
        console.log(ele.target.innerText);
        try{
            if(ele.target.innerText == 'AC'){
                str = "";
                input.value = str;
            }
            else if(ele.target.innerText == 'DEL'){
                if(str.length>0){
                    str = str.slice(0,-1);
                    input.value = str;
                }
            }
            else if(ele.target.innerText == '='){
                ans = eval(str);
                str = 'Ans';
                input.value = str;
            }
            else if(ele.target.innerText == 'Ans'){
                str += ans.toString();
                input.value = str;
            }
            else{
                str += ele.target.innerText;
                input.value = str;
            }
        }
        catch(err){
            console.log(err);
        }
    })
})
