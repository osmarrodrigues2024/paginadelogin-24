const login = document.querySelector('.login');

login.addEventListener('mouseover', () =>{
    login.style.transform = 'scale(1.1)'; 
    login.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)'; 
});

login.addEventListener('mouseout', () =>{
    login.style.transform = 'scale(1)';
    login.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';  
});