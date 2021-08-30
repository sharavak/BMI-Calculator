const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const result = document.querySelector('.result')
const button = document.querySelector('button')
const inputs = document.querySelectorAll('input')
const h3 = document.createElement('h3')
const section = document.createElement('section');
for (let input of inputs) {
    input.addEventListener('input', function () {
        h3.innerText = ''
        section.innerText = ''
    })
}

button.addEventListener('click', function (e) {
    if (weight.value === '' || height.value === '') {
        alert('Hey Fill!!!')
        weight.value = '';
        height.value = '';
    }
    else {
        value = values()
        if (isNaN(value)===true) {
            alert('Please enter a valid number')
            weight.value = '';
            height.value = '';
        }
        else {
            
            h3.innerText = `Your BMI is ${values()}`
            h3.style.color = 'white'
            h3.style.fontFamily = "serif"
            h3.style.fontWeight = '300'
            h3.style.fontSize = '1.8rem'
            h3.style.textAlign = 'center'
            h3.style.marginBottom='0px'
            result.appendChild(h3)
            section.style.fontFamily = "sans-serif"
            section.style.fontSize='1.5rem'
            section.style.fontWeight = '500'
            section.style.animationName = 'blink'
            section.style.animationDuration = '1.5s';
            section.style.animationTimingFunction = 'ease-in-out';
            section.style.animationIterationCount = 'infinite';
            section.style.textAlign ='center'
            if (value < 18.5) {
                section.innerText = 'Your underweight!'
                section.style.color = 'red';
                result.appendChild(section)
            }
            else if (value >= 18.5 && value <= 24.9) {
                section.innerText = 'Your Normalweight!'
                section.style.color='#67ff0c'
                result.appendChild(section)
            }
            else if (value >= 25 && value <= 29.9) {
                section.innerText = 'Your Overweight!'
                section.style.color='rgb(255 217 102)'
                result.appendChild(section)
            }
            else {
                section.innerText = 'Your Obese!'
                section.style.color = 'rgb(255 217 102)';
                result.appendChild(section)
            }
        }
    
    }
    weight.value = '';
    height.value = '';
})

const values=function() {
    let newWeight = parseFloat(weight.value)
    let newheight = parseFloat(height.value)
    let newheights=newheight*newheight/100
    let values = (newWeight / newheights)*100
    return values.toFixed(1)
}