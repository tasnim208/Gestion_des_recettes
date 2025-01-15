function verif1(){
    let  email = document.getElementById('email').value.trim();
    let  message= document.getElementById('emailMessage'); 

    if (email.length <= 0 || !email.endsWith('@gmail.com')) {
        message.textContent = "L'email doit se terminer par @gmail.com";
        message.style.color = 'red';
        return false;
    } else {
        message.textContent = ' ';

    }
    return true;
    
}