document.addEventListener('DOMContentLoaded', function () {
    //Assigning JS variables based on the IDs of input fields
    let name_input = document.getElementById('name');
    let email_input = document.getElementById('mail');
    let phone_input = document.getElementById('contactno');
    let address_input = document.getElementById('homeaddress');
    let comment_input = document.getElementById('write');

    //Updates the preview section with the given inputs
    function updatePreview() {
        document.getElementById('preview-name').textContent = name_input.value;
        document.getElementById('preview-email').textContent = email_input.value;
        document.getElementById('preview-contact').textContent = phone_input.value;
        document.getElementById('preview-homeaddress').textContent = address_input.value;
        document.getElementById('preview-feedback').textContent = comment_input.value;
    }
    //Here, event listeners are used, so that the preview updates as the user continues to type
    name_input.addEventListener('input', updatePreview);
    email_input.addEventListener('input', updatePreview);
    phone_input.addEventListener('input', updatePreview);
    address_input.addEventListener('input', updatePreview);
    comment_input.addEventListener('input', updatePreview);
});