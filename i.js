const header = document.querySelector('header');
const sections = document.querySelectorAll('section');

window.onscroll = () => {
    let current = "";
    sections.forEach(sec => {
        let top = window.pageYOffset;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            current = id;
        }
    });

    header.classList.toggle('scrolled', window.pageYOffset > 0);
    sections.forEach(links => {
        links.classList.remove('active');
        if(links.getAttribute('id') == current) {
            links.classList.add('active');
        }
    });
};