// let calculationRes = {
//     displayValue: '0',
//     firstOperand: null,
//     secondOperandStandby:false,
//     operator: null,
// };

// function updateScreen() {
//     let display = document.querySelector('.screen');
//     display.value = calculationRes.displayValue;
// }

// updateScreen();


// function hitung(params) {
    
// }

// let keys = document.querySelector('.calculator-keys');
// need heavy research

// keys.addEventListener('click', (event) => {
//     // console.log(event)
//     let getar = event.target;
//   if (!target.matches('button')) {
//     return;
//   }

//   if (target.classList.contains('operator')) {
//     console.log('operator', target.value);
//     return;
//   }

//   if (target.classList.contains('decimal')) {
//     console.log('decimal', target.value);
//     return;
//   }

//   if (target.classList.contains('all-clear')) {
//     console.log('clear', target.value);
//     return;
//   }

//     // inputDigit(target.value);
//     // updateScreen();
//     console.log('digit', target.value);
// });

// function inputDigit(digit) {
//   const { displayValue } = calculationRes;
//   // Overwrite `displayValue` if the current value is '0' otherwise append to it
//   calculationRes.displayValue = displayValue === '0' ? digit : displayValue + digit;
// }

let obj = {
    operator:'',
    number:'',
    temp:[],
    display:'',
    result:0
}

function hitung(operate) {
    if(obj.operator.length<1 && obj.number.length<1 && obj.temp.length<1 && typeof operate === 'string'){
        alert('Input pertama harus angka')
    }
    else if(typeof operate === 'number'){
        obj.display+=operate
        obj.number+=operate
    }else if(typeof operate === 'string'){
        if(operate === '='){
            obj.temp.push(obj.number)
            obj.number = ''
            obj.operator=operate
            obj.temp.push(obj.operator)
            obj.operator=''
        }else{
            obj.display+=operate
            obj.temp.push(obj.number)
            obj.number = ''
            obj.operator=operate
            obj.temp.push(obj.operator)
            obj.operator=''
        }
    }
        for (let i = 0; i < temp.length; i++) {
            
            if (temp.length-1 === "=") {
                
            }
            else{
                if (temp[1] === "+") {
                    obj.result+= temp[0] + temp[2]
                }
                if (temp[1] === "-") {
                    obj.result+= temp[0] - temp[2]
                }
                if (temp[1] === "*") {
                    obj.result+= temp[0] * temp[2]
                }
                if (temp[1] === "/") {
                    obj.result+= temp[0] / temp[2]
                }

            }
            
        }
    console.log(typeof operate)
    console.log(obj)
}