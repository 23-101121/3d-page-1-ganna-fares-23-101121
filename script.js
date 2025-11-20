// -------------------------------
// HELPER FUNCTION: animate children
// -------------------------------
function animateSection(sectionSelector, animations) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    section.addEventListener("mouseenter", () => {
        animations(section);
    }, { once: true }); // trigger only once per page load
}

// -------------------------------
// HOME SECTION (#home)
// -------------------------------
animateSection("#home", section => {
    const navbar = document.querySelector("#navbar");
    const lantern = section.querySelector(".entrance-lantern");
    const title = section.querySelector(".handwriting");
    const subtitle = section.querySelector(".entrance-sub");
    const ramen = section.querySelector(".entrance-ramen");

    // Navbar fade
    gsap.fromTo(navbar, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" });

    // Lantern drop + bounce
    gsap.fromTo(lantern, { y: "-40vh" }, { y: 0, duration: 1.4, ease: "bounce.out" });

    // Title handwriting reveal
    gsap.fromTo(title, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 2, ease: "power2.out" });

    // Subtitle fade + rise
    gsap.fromTo(subtitle, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 1.3, delay: 0.3, ease: "power2.out" });

    // Ramen bowl fly in
    gsap.fromTo(ramen, { y: "40vh", rotate: 30, opacity: 0 }, { y: 0, rotate: 0, opacity: 1, duration: 1.8, delay: 0.5, ease: "back.out(1.5)" });
});

// -------------------------------
// WHY SECTION (#why-section)
// -------------------------------
animateSection("#why-section", section => {
    const title = section.querySelector(".why-title");
    const desc = section.querySelector(".why-description");
    const items = section.querySelectorAll(".feature-item");

    // Animate title and description
    gsap.fromTo(title,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(desc,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
    );

    // Animate feature items and models
    items.forEach((item, i) => {
        const model = item.querySelector(".feature-model");
        const label = item.querySelector(".feature-label");

        // Item fade + rise
        gsap.fromTo(item,
            { opacity: 0, y: 40, scale: 0.85 },
            { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: i * 0.2 }
        );

        // Label fade in slightly after model
        gsap.fromTo(label,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 1, delay: 0.5 + i * 0.2, ease: "power2.out" }
        );

        // Floating + rotation loop for model
        gsap.to(model, {
            y: -5,
            rotateY: 15,
            duration: 3 + i * 0.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
    });
});


// -------------------------------
// BUILD BOX (#build-box)
// -------------------------------
animateSection("#build-box", section => {
    const boxTitle = section.querySelector(".box-title");
    const ingredients = section.querySelectorAll(".ingredient");
    const noodleBox = section.querySelector(".noodle-3d-box model-viewer");

    gsap.fromTo(boxTitle, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" });

    gsap.fromTo(ingredients, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out" });

    gsap.to(noodleBox, { y: -10, repeat: -1, yoyo: true, duration: 2.5, ease: "sine.inOut" });
});

// -------------------------------
// GRAB BOX (#grab-box)
// -------------------------------
animateSection("#grab-box", section => {
    const grabModel = section.querySelector(".grab-model");
    const title = section.querySelector(".grab-title");
    const subtitle = section.querySelector(".grab-sub");
    const texture = section.querySelector(".texture-layer");

    // Text & texture animation
    gsap.fromTo(title, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" });
    gsap.fromTo(subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power2.out" });
    gsap.fromTo(texture, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.2, delay: 0.6, ease: "power2.out" });

    // Grab model entrance + floating
    gsap.fromTo(grabModel, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" });
    gsap.to(grabModel, { y: -15, duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true });
});

// -------------------------------
// KITCHEN 3D (#kitchen-3d)
// -------------------------------
animateSection("#kitchen-3d", section => {
    const title = section.querySelector(".kitchen-title");
    const subtitle = section.querySelector(".kitchen-sub");
    const button = section.querySelector(".btnview");
    const stall = section.querySelector("#stallModel");

    // Animate title, subtitle, button
    gsap.fromTo(title,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(subtitle,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(button,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }
    );

    // Stall model entrance + floating
    gsap.fromTo(stall,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, delay: 0.3, ease: "power2.out" }
    );

    gsap.to(stall, {
        y: "-=10", // float 10px up/down
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1 // start floating after entrance
    });
});

// -------------------------------
// DRAGON SECTION (#dragon-section)
// -------------------------------
animateSection("#dragon-section", section => {
    const title = section.querySelector(".dragon-title");
    const subtitle = section.querySelector(".dragon-subtitle");
    const dragon = section.querySelector("#dragonModel");

    // Animate title
    gsap.fromTo(title,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate subtitle
    gsap.fromTo(subtitle,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
    );

    // Animate dragon model
    gsap.fromTo(dragon,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.5, delay: 0.4, ease: "power3.out" }
    );

    // Optional: subtle floating
    gsap.to(dragon, {
        y: -10,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1
    });
});


// -------------------------------
// FOOTER (#site-footer)
// -------------------------------
animateSection("#site-footer", section => {
    gsap.fromTo(".footer-logo-text", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    gsap.fromTo(".footer-logo-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" });
    gsap.fromTo(".footer-nav li", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.4, ease: "power3.out" });
    gsap.fromTo(".footer-links .footer-icon", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.8, ease: "power3.out" });
    gsap.fromTo(".footer-copy", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power3.out" });
});
