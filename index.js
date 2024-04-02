const screenInp = document.querySelector('#screen');
console.log(screenInp);

const yourTitle = document.querySelector('.yourTitle');
console.log(yourTitle);
console.log(yourTitle.textContent);

screenInp.addEventListener('change', function() {
    yourTitle.textContent = screenInp.value;
  })


const btnColor = document.querySelector('.btn');
console.log(btnColor);

const listColors = ['rgb(179, 110, 198)', 'rgb(179, 110, 197)', 'rgb(179, 110, 196)']
let count = 0;

function changeColor() {
    if(count === listColors.length - 1){
        count = 0;
    }else{
        count += 1; 
    }
    yourTitle.textContent.style.color = listColors[count];
}

btnColor.addEventListener('click', changeColor 

    // yourTitle.textContent = changeColor(); 
)