const Email = document.getElementById('email')
const EmailText = document.getElementById('email-text')
const Password = document. getElementById('password')
const PasswordText = document.getElementById('password-text')

// function btn(){
//     if(Email.value.length > 3 && Email.value.includes('@','.') && Password.value.length > 8){
          
//           PasswordText.innerText='All good to go!'
//           PasswordText.style.color='green'
//           setTimeout(() => {
//             window.location.href='./confirm.html'
//           }, 3000);
//     }else{
//         EmailText.innerText='Make sure email is more than 3 character and has "@" and a "."'
//         PasswordText.innerText='Make sure password is more than 8 characters'
//         PasswordText.style.color='red'
//         EmailText.style.color='red'
//     }
// }

function confirm(){
    alert('Successfully signup')
}
function refresh(){
    window.location.href='./index.html'
}

let i =0;
let j=0;

function handleEmailInput(e) {
    console.log('cc', Email.value)
    if( Email.value.includes('.','@') && Email.value.length > 3){
        EmailText.innerText=''
        
        i=1
  }else{
    EmailText.innerText='Make sure email is more than 3 character and has "@" and a "."';
   // PasswordText.innerText='Make sure password is more than 8 characters'
    EmailText.style.color='red'
    PasswordText.innerText=''
    i=0
  }
//}

// let h=i
// console.log(h)

// function handlePasswordInput(e){
  console.log('cc', Password.value)
  if(Password.value.length > 8){
   // PasswordText.innerText=''
    j=1
    if(EmailText.innerText==='' && j===1 ){
      PasswordText.innerText='Good to go'
      PasswordText.style.color='green'
      
    }
  }else{
    PasswordText.innerText='Make sure password is more than 8 characters'
    PasswordText.style.color='red'
    j=0
  }
}

function btnClick(){
  if(i===1 && j===1){
  window.location.href='./confirm.html'
  }
}
