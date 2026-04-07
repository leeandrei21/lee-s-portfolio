function showMessage() {
    alert("Thanks for visiting my portfolio!");
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}