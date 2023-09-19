document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll('.select_esportivos');
    links[0].classList.add('selected');


    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('selected'));
            link.classList.add('selected');
        });
    });
    let index = 0;
    img_banner = document.querySelector(".img-banner");

    const images = [
        "Assets/banners/banner1.jpg",
        "Assets/banners/banner2.jpg",
        "Assets/banners/banner3.jpg",
        "Assets/banners/banner4.jpg"

    ];

    function changeImage() {
        setTimeout(() => {
            img_banner.src = images[index];
            index = (index + 1) % images.length;
        }, 1000);
    }
    setInterval(changeImage, 2000);
});
