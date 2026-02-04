const form = document.getElementById('form');
const email = document.getElementById('email');
const iconError = document.getElementById('icon-error');
const textError = document.getElementById('text-error');

form.addEventListener('submit', (e) => {
    // 1. Prevent the form from submitting immediately
    e.preventDefault();

    // 2. Get the value from the input
    const emailValue = email.value;

    // 3. Check if it is a valid email
    if (!validateEmail(emailValue)) {
        // INVALID STATE: Show errors
        form.classList.add('error');
        iconError.classList.remove('hidden');
        textError.classList.remove('hidden');
        
        // Change border color to red (using Tailwind class logic or direct style)
        email.style.borderColor = 'hsl(0, 93%, 68%)'; 
        email.style.borderWidth = '2px';
    } else {
        // VALID STATE: Remove errors
        form.classList.remove('error');
        iconError.classList.add('hidden');
        textError.classList.add('hidden');
        
        // Reset border logic
        email.style.borderColor = ''; 
        email.style.borderWidth = '';
        
        // Allow form submission (or show success message)
        // form.submit(); 
        alert("Success!");
    }
});

// Helper function to check email pattern using Regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}