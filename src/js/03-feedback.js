import throttle from 'lodash.throttle';
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const submitButton = document.querySelector('button[type="submit"]');
function saveFormStateToLocalStorage() {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
function restoreFormStateFromLocalStorage() {
    const formDataString = localStorage.getItem("feedback-form-state");
    if (formDataString) {
        const formData = JSON.parse(formDataString);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}
function clearLocalStorage() {
    localStorage.removeItem("feedback-form-state");
}
function handleInputEvent() {
    saveFormStateToLocalStorageThrottled();
}
const saveFormStateToLocalStorageThrottled = throttle(saveFormStateToLocalStorage, 500);
function handleSubmitEvent(evt) {
    evt.preventDefault();
    clearLocalStorage();
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log(formData);
    emailInput.value = '';
    messageInput.value = '';
}
document.addEventListener('DOMContentLoaded', () => {
    restoreFormStateFromLocalStorage();
    emailInput.addEventListener('input', handleInputEvent);
    messageInput.addEventListener('input', handleInputEvent);
    submitButton.addEventListener('click', handleSubmitEvent);
});