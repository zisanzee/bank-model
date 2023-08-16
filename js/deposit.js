const depositInput = document.getElementById('deposit');
const withdrawInput = document.getElementById('withdraw');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const balance = document.getElementById('balance-amount');
const depositAmount = document.getElementById('deposit-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
 ;
 document.getElementById('name').innerText = loginInfo.find(p => p.email == localStorage.getItem('email')).name;

depositBtn.addEventListener('click', () => {
  if (depositInput.value === ''){
    my_modal_2.showModal()
    
  } else if (depositInput.value >= 0){
    depositAmount.innerText =  parseFloat(depositAmount.innerText) + parseFloat(depositInput.value);
  balance.innerText =  parseFloat(balance.innerText) + parseFloat(depositInput.value);
  depositInput.value = '';
  }

  
});
withdrawBtn.addEventListener('click', () => {

  if (withdrawInput.value === '' || parseFloat(withdrawInput.value) > parseFloat(balance.innerText)){
    my_modal_2.showModal()
    
  } else if (withdrawInput.value >= 0){
    withdrawAmount.innerText =  parseFloat(withdrawAmount.innerText) + parseFloat(withdrawInput.value);
    balance.innerText =  parseFloat(balance.innerText) - parseFloat(withdrawInput.value); 
    withdrawInput.value = '';
    
  }
});


