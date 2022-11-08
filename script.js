const name = document.querySelector('#name')
const cardNumber = document.querySelector('#card-number')
const expMm = document.querySelector('#exp-mm')
const expYy = document.querySelector('#exp-yy')
const cvc = document.querySelector('#cvc')
const btn = document.querySelector('.form-submit_btn')
const inputs = document.querySelectorAll('.input')
const labels = document.querySelectorAll('labels')

const frontCardNumber = document.querySelector('.front-card_nubmers')
const frontCardName = document.querySelector('.front-card_name')
const frontCardData = document.querySelector('.front-card_dataInput')
const frontMm = document.querySelector('.front-mm')
const frontYy = document.querySelector('.front-yy')
const spans = document.querySelectorAll('.hidden')

const backCardCvc = document.querySelector('.back-card_numbers')

const p = document.createElement("p");


name.addEventListener('change', event => {
	frontCardName.textContent = event.target.value
})

cardNumber.addEventListener('change', event => {
	frontCardNumber.textContent = event.target.value.replace(/.{4}/g, '$& ')
})

cvc.addEventListener('change', event => {
	backCardCvc.textContent = event.target.value
})

expMm.addEventListener('change', event => {
	frontMm.textContent = event.target.value
})

expYy.addEventListener('change', event => {
	frontYy.textContent = event.target.value
})

inputs.forEach(button => {
	button.addEventListener('click', (e) => {
		if (e.target.value == ''){
			 e.target.nextSibling.innerHTML = '<div class="visible">Can not be blank</div>'
		} else {
			e.target.nextSibling.innerHTML = ''
		}
       
	})
})

