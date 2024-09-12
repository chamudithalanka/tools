function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function searchBlog() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const blogItems = document.getElementsByClassName('blog-item');

    for (let i = 0; i < blogItems.length; i++) {
        let headline = blogItems[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        if (headline.indexOf(searchTerm) > -1) {
            blogItems[i].style.display = "";
        } else {
            blogItems[i].style.display = "none";
        }
    }
}
