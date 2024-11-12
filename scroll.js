const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".intro", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".intro h1", {
    ...scrollRevealOption,
    origin: "top",
    delay: 300,
});

ScrollReveal().reveal(".hero", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1000,
});

ScrollReveal().reveal(".section", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".section-card", {
    ...scrollRevealOption,
    origin: "left",
    interval: 100,
    delay: 1000,
});

ScrollReveal().reveal(".section-details", {
    ...scrollRevealOption,
    origin: "left",
    interval: 300,
    delay: 500,
});

ScrollReveal().reveal(".act-col", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
});

ScrollReveal().reveal(".sect-card", {
    ...scrollRevealOption,
    origin: "right",
    delay: 500,
});

ScrollReveal().reveal(".slide", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
});

ScrollReveal().reveal(".socials a", {
    ...scrollRevealOption,
    duration: 1000,
    interval: 500,
    delay: 2200,
}); 