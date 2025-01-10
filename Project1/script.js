// Sticky Header Functionality
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 60);
});

// Dynamic Content for About Us Section
const aboutSection = document.getElementById('about-section');
const aboutContent = `
    <h2>About Us</h2>
    <p>We are a team of 4 passionate members from <strong>University of Moratuwa</strong>, dedicated to making differences through technology and collaboration.</p>
    <p>Our current project focuses on supporting the '<strong>Scope</strong>' community, aiming to create impactful solutions for real-world challenges.</p>
    <p>With a shared vision and diverse skills, we strive to empower communities through innovation, teamwork, and creativity.</p> 
`;
aboutSection.innerHTML = aboutContent;

// Scroll-Triggered Pop Effect




