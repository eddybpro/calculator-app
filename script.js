const firstThemeBtn = document.querySelector('.first-input'),
secondThemeBtn = document.querySelector('.second-input'),
thirdThemeBtn = document.querySelector('.third-input'),
inputNum = document.getElementById('num-input'),
nums = document.querySelectorAll('.num'),
equalBtn = document.querySelector('.equal'),
resetBtn = document.querySelector('.reset'),
deleteBtn = document.querySelector('.del');


const theme = localStorage.getItem('theme') || '1';

window.addEventListener('load',()=>{
    if(theme == 1){
        themeFn(firstThemeBtn);
        firstThemeBtn.checked = true;
    }else if(theme == 2){
        themeFn(secondThemeBtn);
        secondThemeBtn.checked =true;
    }else if(theme == 3){
        themeFn(thirdThemeBtn);
        thirdThemeBtn.checked = true;
    }
})

firstThemeBtn.addEventListener('change', ()=>{
    themeFn(firstThemeBtn);
    localStorage.setItem('theme', '1');
});

secondThemeBtn.addEventListener('change', ()=>{
    themeFn(secondThemeBtn);
    localStorage.setItem('theme', '2');
});

thirdThemeBtn.addEventListener('click', ()=>{
    themeFn(thirdThemeBtn);
    localStorage.setItem('theme', '3');
})

function themeFn(btn){
    document.querySelector('body').classList.remove('first-theme');
    document.querySelector('body').classList.remove('second-theme');
    document.querySelector('body').classList.remove('third-theme');
    equalBtn.style.color='hsl(0, 0%, 100%)';

    if(btn === firstThemeBtn){
        document.querySelector('body').classList.add('first-theme');
        equalBtn.style.color='hsl(0, 0%, 100%)';
    }
    else if(btn === secondThemeBtn){
        document.querySelector('body').classList.add('second-theme');
        equalBtn.style.color='hsl(0, 0%, 100%)';
    }
    else if(btn === thirdThemeBtn){
        document.querySelector('body').classList.add('third-theme');
        equalBtn.style.color='hsl(198, 20%, 13%)';
    }
}

nums.forEach(num=>{
    num.addEventListener('click', ()=>{
        inputNum.value += num.value;
    })
})

equalBtn.addEventListener('click', ()=>{
    if(!inputNum.value)return;
    const evalStr = `${inputNum.value}`;
    inputNum.value =splitStr(`${eval(evalStr)}`);
})

resetBtn.addEventListener('click', ()=>{
    inputNum.value='';
})

deleteBtn.addEventListener('click', ()=>{
    const str = inputNum.value;
    inputNum.value = str.slice(0,str.length-1 )
})

function splitStr(str){
    if(str.length< 3)return str;
    str = str.split('').reverse().join('');
    const maxSize = 3;
    const regex = /.{3}/g;
    const peaces = str.match(regex);
    const acc = peaces.length * maxSize;
    const modulo = str.length % acc;
    if(modulo)peaces.push(str.slice(acc));
    return peaces.map(e=>e.split('').reverse().join('')).reverse().join(',');
}