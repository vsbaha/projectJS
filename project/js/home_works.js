// send mail

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w+@gmail\.com$/

gmailButton.onclick = () => {
	if (regExp.test(gmailInput.value)) {
		gmailResult.innerHTML = 'Удачного путешествия, пират!'
		gmailResult.style.color = 'green'
	} else {
		gmailResult.innerHTML = 'Вы допустили ошибку при вводе почты'
		gmailResult.style.color = 'red'
	}
}

// move block

const childBlock = document.querySelector('.child_block')

const increment = () => {
	const currentLeftValue = parseInt(childBlock.style.left) || 0

	if (currentLeftValue < 450) {
		childBlock.style.left = currentLeftValue + 1 + 'px'
		setTimeout(increment, 10)
	} //else if (currentLeftValue)
}
increment()