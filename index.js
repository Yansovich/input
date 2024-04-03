const screenInp = document.querySelector('#screen');
console.log(screenInp);

const yourTitle = document.querySelector('.yourTitle');
console.log(yourTitle);
console.log(yourTitle.textContent);

screenInp.addEventListener('change', function() {
    yourTitle.textContent = screenInp.value;
})


// 1 вариант 

const btnColor = document.querySelector('.btn');
console.log(btnColor);

const listColors = ['rgb(101, 11, 111)', 'rgb(201, 22, 122)', 'rgb(103, 33, 133)', 'rgb(401, 44, 144)', 'rgb(105, 55, 155)']
let count = 0;

function changeColor() {
    if(count === listColors.length - 1){
        count = 0;
    }else{
        count += 1; 
    }
    yourTitle.style.color = listColors[count];
}

btnColor.addEventListener('click', changeColor)


// 2 вариант 

btnColor.addEventListener('click', function() {
    console.log(yourTitle);
    yourTitle.style.color = 'rgb(179, 110, 198)'; 
})