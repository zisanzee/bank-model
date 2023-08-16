let loginInfo = [{
  name: 'Towhid Hossain',
  email: 'zisankhanchowdhury@gmail.com',
  password: 92702689
},
{
  name: 'Akash vai',
  email: 'akash@gmail.com',
  password: 1234
},
{
  name: 'Dinner vai',
  email: 'dinner@gmail.com',
  password: 1234
},
]
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const loginBtn = document.getElementById('login');


function validate() {
  for (item of loginInfo){
    if (item.password == passInput.value && item.email == emailInput.value){
      return true;
    } ;
  }
}


loginBtn.addEventListener('click', ()=>{
  localStorage.setItem('email', emailInput.value);
  if (validate()){
    window.location.href = './bank.html'
    EventTarget = '_blank'
    
  }else{
    my_modal_1.showModal()
  }
})


