const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
  modal.style.display = 'block'
	document.body.style.overflow = 'hidden'
}

const closeModal = () => {
	modal.style.display = 'none'
	document.body.style.overflow = ''
}

modalTriggerButton.onclick =  () =>{
	openModal()
}
closeModalButton.onclick = () => {
	closeModal()
}

modal.onclick = (e) => {
	if (e.target === modal){
		closeModal()
	}
}


document.addEventListener("DOMContentLoaded", function() {
	let modalShown = false
	window.addEventListener("scroll", function() {
		const scrollPosition = window.scrollY || document.documentElement.scrollTop

		if (scrollPosition >= document.documentElement.scrollHeight - window.innerHeight && modalShown === false) {
			modal.style.display = "block"
			modalShown = true
		}
	})
})
