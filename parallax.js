const layers = document.querySelectorAll("[data-depth]");

window.addEventListener("scroll", parallax);

function parallax() {
    const scrollTop = window.pageYOffset;
    layers.forEach(layer => {
        const depth = parseFloat(layer.getAttribute("data-depth"));
        const translateValue = scrollTop * depth * -1;
        layer.style.transform = `translateY(${translateValue}px)`;
    });
}
