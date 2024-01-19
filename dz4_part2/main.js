
const request = new XMLHttpRequest()
request.open('GET', 'data.json')
request.setRequestHeader('Content-type', 'application/json')
request.send('')
request.addEventListener('load', ()=>{
	console.log(request)
	console.log(request.response)
})