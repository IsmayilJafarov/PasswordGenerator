const mainNode = document.querySelector('.main');

const passwordNode = document.createElement('input');
passwordNode.setAttribute('placeholder', 'Generated password');
passwordNode.classList.add('password');
passwordNode.addEventListener('click', (e) => {
    e.preventDefault
});

passwordNode.addEventListener('focus' , (e) => {
});


const copyBtn = document.createElement('button');
copyBtn.innerText = 'Copy';
copyBtn.classList.add('password-button');
copyBtn.addEventListener('click', (e) => {
    passwordNode.select();
    passwordNode.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordNode.value)
});


const  generateBtn = document.createElement('button');
generateBtn.innerText = 'Generate';
generateBtn.classList.add('password-button');
generateBtn.addEventListener('click', (e) => {
    let password = generatePassword(12);
    passwordNode.value = password;
});

function generatePassword (passwordLength) {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-';
    const allChars = upperChars + lowerChars + numberChars + symbolChars;

    let randomString = '';

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomNumber];
    }
    return randomString;
    
} 

mainNode.appendChild(passwordNode);
mainNode.appendChild(generateBtn);
mainNode.appendChild(copyBtn);
