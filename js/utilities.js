
// input value
function inputValueById(id) {
  
  const inputV = document.getElementById(id).value 
  return parseFloat(inputV)
}

// text value 
function textValueById(id) {
  const textV = document.getElementById(id).innerText
  return parseFloat(textV)

}


// swith

function swith(id) {
  
document.getElementById('donate_sections_container').classList.add('hidden')
document.getElementById('transection_container').classList.add('hidden')

  
document.getElementById(id).classList.remove('hidden')
}