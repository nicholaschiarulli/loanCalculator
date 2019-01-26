//listen for submit
document.getElementById('loan-form').addEventListener('submit',function(e){
//hide results
document.getElementById('results').style.display = 'none'
//show loader
document.getElementById('loading').style.display = 'block'

setTimeout(calculateResults,2000)


e.preventDefault()

})

function calculateResults(){
console.log('calc')

//UI Vars
const amountUI = document.getElementById('amount')
const interestUI = document.getElementById('interest')
const yearsUI = document.getElementById('years')
const monthlyPayUI = document.getElementById('monthly-payment')
const totalPayUI = document.getElementById('total-payment')
const totalInterestUI = document.getElementById('total-interest')

const principal = parseFloat(amountUI.value)
const calculatedInterest = parseFloat(interestUI.value)/100/12
const calculatedPayments = parseFloat(years.value)*12


//compute monthly payments
const x = Math.pow(1+calculatedInterest, calculatedPayments)
const monthly = (principal*x*calculatedInterest)/(x-1)

if(isFinite(monthly)){
monthlyPayUI.value = monthly.toFixed(2)
totalPayUI.value = (monthly*calculatedPayments).toFixed(2)
totalInterestUI.value = ((monthly*calculatedPayments)-principal).toFixed(2)
//show results
document.getElementById('results').style.display = 'block'

//hide loader
document.getElementById('loading').style.display = 'none'


}else{
showError('Please check your numbers')

}

 // e.preventDefault()
}



//show Error
function showError(error){
  //show results
document.getElementById('results').style.display = 'none'

//hide loader
document.getElementById('loading').style.display = 'none'

//create div
const errorDiv = document.createElement('div')

//get elements
const card = document.querySelector('.card')
const heading = document.querySelector('.heading')

//add class
errorDiv.className = 'alert alert-danger'

//create text node and append to div
errorDiv.appendChild(document.createTextNode(error))

//insert error above heading
card.insertBefore(errorDiv,heading)

//clear error after 3 seconds

setTimeout(clearError,3000)
}


//clear error
function clearError(){
  document.querySelector('.alert').remove()

}
