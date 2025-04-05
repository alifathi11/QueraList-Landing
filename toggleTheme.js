document.addEventListener("DOMContentLoaded", function () {
    const buttonLight = document.getElementById("lightDarkButton-light");
    const buttonDark = document.getElementById("lightDarkButton-dark");
    const menu = document.getElementById("lightDarkMenu");
    menu.classList.add("hidden");

    buttonLight.addEventListener("mouseenter", () => {
        menu.classList.remove("hidden");
    });

    buttonDark.addEventListener("mouseenter", () => {
        menu.classList.remove("hidden");
    });

    menu.addEventListener("mouseenter", () => {
        menu.classList.remove("hidden");
    });
    
    menu.addEventListener("mouseleave", () => {
        menu.classList.add("hidden");
    });

    document.addEventListener("click", (event) => {
        if (!buttonDark.contains(event.target) && !buttonLight.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.add("hidden");
        }
    });

    const lightOn = document.getElementById("light-on");
    const darkOn = document.getElementById("dark-on");
    const autoOn = document.getElementById("auto-on");
    lightOn.classList.add("hidden");
    darkOn.classList.add("hidden");

    const darkModeButton = document.getElementById("darkModeButton");
    const lightModeButton = document.getElementById("lightModeButton");
    darkModeButton.addEventListener("click", () => {
        document.documentElement.classList.add("dark");
        darkOn.classList.remove("hidden");
        lightOn.classList.add("hidden");
        autoOn.classList.add("hidden");
    });
    lightModeButton.addEventListener("click", () => {
        document.documentElement.classList.remove("dark");
        lightOn.classList.remove("hidden");
        darkOn.classList.add("hidden");
        autoOn.classList.add("hidden");
    });
    autoModeButton.addEventListener("click", () => {
        document.documentElement.classList.remove("dark");
        autoOn.classList.remove("hidden");
        darkOn.classList.add("hidden");
        lightOn.classList.add("hidden");
    });
});