const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>60)
});

// Handle form submission
document.getElementById("subscribeForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the page from reloading

    const email = document.getElementById("subscriberEmail").value;

    // Display a confirmation message to the user
    const message = document.getElementById("subscribeMessage");
    message.style.display = "block";
    message.textContent = `Thank you for subscribing with ${email}!`;

    // Notify you (email or console log)
    console.log(`New subscription: ${email}`);

    // Optional: Use EmailJS or backend for email notifications
    sendEmailToAdmin(email);

    // Clear the form input
    document.getElementById("subscriberEmail").value = "";
});

// Optional: Function to send email notifications using EmailJS (requires setup)
function sendEmailToAdmin(email) {
    Email.send({
        SecureToken: "YOUR_SECURE_TOKEN",
        To: "nethinduchamikara344@gmail.com",
        From: "notification@example.com",
        Subject: "New Subscriber",
        Body: `A new user has subscribed with the email: ${email}`,
    }).then((message) => alert("Subscription notification sent to admin."));
}
