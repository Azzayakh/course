let btn = document.getElementById('btn');
window.onscroll = function() {
    if (window.scrollY > 1700) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};
btn.onclick = function  () {
    window.scrollTo({
        top: 0,
        behavior:'smooth',
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const recommendationList = document.getElementById('recommendation-list');
    const thankYouMessage = document.getElementById('thank-you-message');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        // Get input values
        const nameInput = form.querySelector('input').value.trim();
        const textInput = form.querySelector('textarea').value.trim();
        const thankYouMessage = document.getElementById('thank-you-message');
        // Check if text input is not empty
        if (textInput) {
            // Create new list item
            const listItem = document.createElement('li');
            listItem.textContent = textInput;
            // Add name if provided
            if (nameInput) {
                listItem.textContent = `${nameInput}: ${textInput}`;
            }
            // Append to list
            recommendationList.appendChild(listItem);
            // Show thank-you message
            thankYouMessage.style.display = 'block';
            // Clear form fields
            form.reset();
            // Hide the message after a few seconds
            setTimeout(() => {
                thankYouMessage.style.display = 'none';
            }, 8000); // Hide after 3 seconds
        } else {
            alert('Please enter a recommendation.');
        }
    });
});


