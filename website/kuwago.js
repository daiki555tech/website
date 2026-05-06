document.querySelectorAll(".nav-link").forEach(link => {
    link.onclick = function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    };
});