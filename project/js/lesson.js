// lesson 1
// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
	if (regExp.test(phoneInput.value)) {
		phoneResult.innerHTML = 'OK'
		phoneResult.style.color = 'green'
	} else {
		phoneResult.innerHTML = 'NOT OK'
		phoneResult.style.color = 'red'
	}
}

// Recursion

let count = 0

const increment = () => {
	count++
	console.log(count)
	if (count < 5) {
		increment()
	}

}
increment()

//  TAB SLIDER

const tabContents = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
let intervalId

const autoTab = (i = 0) => {
	intervalId = setInterval(() => {
		i++
		if (i > tabItems.length - 1) {
			i = 0
		}
		hideTabContent()
		showTabContent(i)
	}, 3000)
}

autoTab()

const hideTabContent = () => {
	tabContents.forEach((tabBlock) => {
		tabBlock.style.display = 'none'
	})
	tabItems.forEach((tab) => {
		tab.classList.remove('tab_content_item_active')
	})
}

const showTabContent = (index = 0) => {
	tabContents[index].style.display = 'flex'
	tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabParent.onclick = (e) => {
	if (e.target.classList.contains('tab_content_item')) {
		tabItems.forEach((tabItem, tabIndex) => {
			if (e.target === tabItem) {
				clearInterval(intervalId)
				hideTabContent()
				showTabContent(tabIndex)

				// После остановки интервала, она запускается заново через 10 секунд
				// Если этого не нужно было делать то можно просто убрать этот кусок кода ↓
				setTimeout(() => {
					autoTab(tabIndex)
				}, 10000)
			}
		})
	}
}



