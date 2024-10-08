
// blog page click handaler
document.getElementById('blog').addEventListener('click', function () {
  
  window.location.href='./blog.html'
})


// donate noakhali

document.getElementById('doante_noakhaki').addEventListener('click', function (event) {
  event.preventDefault()

  const donateValueNoakhali = inputValueById('input_donate_noakhali')
  if (isNaN(donateValueNoakhali)) {
    return alert('Please Enter a Number')
  }

  if (donateValueNoakhali < 1) {
    
  return alert('please enter valid value')
  }


  const myCurrentBalance = textValueById('my_current_balance')
  if (donateValueNoakhali > myCurrentBalance) {
    return alert('inufficient balance')
  }
  
  const donatedPublicBalance = textValueById('public_donate_bdt')
  const donatedPublicBalanceTotal = donateValueNoakhali + donatedPublicBalance

  document.getElementById('public_donate_bdt').innerText = donatedPublicBalanceTotal

     if (donateValueNoakhali > 0) {
    alert('Successfully Donated')
  }
  

  let time = new Date()

  const div = document.createElement('div')
  div.classList.add('p-8')
  div.classList.add('border-2')
  div.classList.add('rounded-lg')
  div.innerHTML = `<h3 class="text-xl font-extrabold">${donateValueNoakhali} Taka is Donated for Flood at Noakhali, Bangladesh</h3>
  <p class="font-light text-[rgba(17,17,17,0.7)]">Date : ${time}</p>
  `
  
  document.getElementById('transection_container').appendChild(div)
  

  const updatedBalance = myCurrentBalance - donateValueNoakhali

  document.getElementById('my_current_balance').innerText = updatedBalance



})


// donate fani


document.getElementById('feni_donate').addEventListener('click', function (event) {
  event.preventDefault()

  const donateValueFeni = inputValueById('input_donate_feni')
   if (isNaN(donateValueFeni)) {
    return alert('Please Enter a Number')
  }

  if (donateValueFeni < 1) {
    
  return alert('please enter valid value')
  }


  const myCurrentBalance = textValueById('my_current_balance')
   if (donateValueFeni > myCurrentBalance) {
    return alert('inufficient balance')
  }
  
  const donatedPublicBalance = textValueById('public_donate_bdt_feni')
  const donatedPublicBalanceTotal = donateValueFeni + donatedPublicBalance

  document.getElementById('public_donate_bdt_feni').innerText = donatedPublicBalanceTotal

      if (donateValueFeni > 0) {
    alert('Successfully Donated')
  }
  

   let time = new Date()

  const div = document.createElement('div')
  div.classList.add('p-8')
  div.classList.add('border-2')
  div.classList.add('rounded-lg')
  div.innerHTML = `<h3 class="text-xl font-extrabold">${donateValueFeni} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
  <p class="font-light text-[rgba(17,17,17,0.7)]">Date : ${time}</p>
  `
  
  document.getElementById('transection_container').appendChild(div)

  const updatedBalance = myCurrentBalance - donateValueFeni

  document.getElementById('my_current_balance').innerText = updatedBalance

})



// donate injured students

document.getElementById('donate_injured_students').addEventListener('click', function (event) {
  event.preventDefault()

  const donateValueQM = inputValueById('input_injured_students')
   if (isNaN(donateValueQM)) {
    return alert('Please Enter a Number')
  }

  if (donateValueQM < 1) {
    
  return alert('please enter valid value')
  }

  const myCurrentBalance = textValueById('my_current_balance')
   if (donateValueQM > myCurrentBalance) {
    return alert('inufficient balance')
  }
  
  const donatedPublicBalance = textValueById('public_donate_injured_students')
  const donatedPublicBalanceTotal = donateValueQM + donatedPublicBalance

  document.getElementById('public_donate_injured_students').innerText = donatedPublicBalanceTotal

    if (donateValueQM > 0) {
    alert('Successfully Donated')
  }
  

   let time = new Date()

  const div = document.createElement('div')
  div.classList.add('p-8')
  div.classList.add('border-2')
  div.classList.add('rounded-lg')
  div.innerHTML = `<h3 class="text-xl font-extrabold">${donateValueQM}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
  <p class="font-light text-[rgba(17,17,17,0.7)]">Date : ${time}</p>
  `
  
  document.getElementById('transection_container').appendChild(div)

  const updatedBalance = myCurrentBalance - donateValueQM

  document.getElementById('my_current_balance').innerText = updatedBalance

})


// btns click effects

document.getElementById('history').addEventListener('click', function () {
  
  document.getElementById('donate').classList.remove('bg-[#B4F461]')
  document.getElementById('history').classList.add('bg-[#B4F461]')

})

document.getElementById('donate').addEventListener('click', function () {
  
  document.getElementById('history').classList.remove('bg-[#B4F461]')
  document.getElementById('donate').classList.add('bg-[#B4F461]')

})

