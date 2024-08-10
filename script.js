<script>
    function validateForm(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        // Validate inputs
        if (fullName === '' || email === '' || phoneNumber === '' || subject === '' || message === '') 
            {
            alert('Please fill in all fields.');
            return false; // Prevent form submission
        }

        // Validate email format
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false; // Prevent form submission
        }

        // Validate phone number format
        var phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneNumber)) 
            {
            alert('Please enter a valid 10-digit phone number.');
            return false; // Prevent form submission
        }

        // If all validations pass, submit the form
        document.getElementById('myForm').submit();
    }
</script>