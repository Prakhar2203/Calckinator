let string = "";
let ctr=0;
let temp="";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == 'X'){
      string=string+'*'
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == '='){
      string=eval(string)
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == '%'){
      string=string+'/'+100;
      string=eval(string);
      string=string+'*';
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == 'C'){
      string=""
      document.querySelector('input').value=string;
    }
    else{
      document.querySelector('input').value=temp;
      temp="";
      ctr=0;
      console.log(e.target)
      string=string+e.target.innerHTML;
      document.querySelector('input').value=string;
    }
  })
})
