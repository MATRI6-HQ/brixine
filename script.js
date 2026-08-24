const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

const projects = [
  {
    name: "The Varanda",
    description:
      "Rising above Kolkata's skyline, this residence is composed for those who prefer to be found rather than seen, and rendered with a realism that leaves little to imagine.",
    location: "Kolkata, India",
    client: "NDA",
    deliverables: "Realistic Walkthrough & Cinematic Sequences",
    video: "/images/varanda.mp4", // TODO: add a video URL here if available
    images: [
      "/images/varanda1.png",
      "/images/varanda2.png",
      "/images/varanda3.png"
    ],
    sections: [
      {
        heading: "The Brief",
        copy:
          "The brief called for altitude without arrogance, a residence that carries the city's dusk light and the quiet privilege of height, without losing warmth in the process."
      },
      {
        heading: "The Direction",
        copy: "Each render was composed to honour scale, dusk exteriors, considered lobbies, terraces that meet the skyline without competing with it. The realism was treated as a courtesy to the buyer, imagery precise enough to trust, restrained enough to still invite imagination."
      },
      {
        heading: "The Outcome",
        copy: "What was asked for was not a view, but a vantage, the difference being who gets to decide what is seen, and by whom."
      }
    ]
  },
  {
    name: "Skye Estates",
    description:
      "A high-rise residence above Amsterdam, composed to be explored as freely as it will one day be lived in, walked through in virtual reality or from any screen, with a realism that asks to be trusted rather than imagined.",
    location: "Amsterdam, Netherlands",
    client: "NDA",
    deliverables: "Immersive Spatial Walkthrough",
    video: "/images/skye.mp4",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1500&q=84",
      "/images/skye2.png",
      "/images/skye3.png"
    ],
    sections: [
      {
        heading: "The Brief",
        copy:
          "The brief asked for more than a view of the apartment, it asked for presence within it, an experience a buyer could step into on their own terms, whether by headset or by hand."
      },
      {
        heading: "The Direction",
        copy: "Every space was built to be navigable, not merely rendered, with light, material, and scale considered from every angle a visitor might choose to take. The realism was treated as trust extended to the buyer, precise enough to explore freely, restrained enough to remain elegant."
      },
      {
        heading: "The Outcome",
        copy: "Some residences are described. This one is entered, and remembered as though it had always been visited."
      }
    ]
  },
  {
    name: "Leen Al-khair",
    description:
      "A manufacturing facility conceived for investors before it was conceived for production, its workflow made legible at a glance, its scale made credible before a single machine was installed.",
    location: "Riyadh, Saudi Arabia",
    client: "NDA",
    deliverables: "Facility Stills & Investor-Grade Walkthrough",
    video: "/images/saudi.mp4",
    images: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=84",
      "/images/saudi2.png",
      "/images/saudi3.jpg"
    ],
    sections: [
      {
        heading: "The Brief",
        copy:
          "Called for clarity over spectacle, a facility whose operations, from intake to output, could be understood by an investor in minutes, without technical translation."
      },
      {
        heading: "The Direction",
        copy: "Every sequence was composed to follow the logic of the workflow itself, offices, floor, and process shown in the order they would actually unfold, so precision read as confidence rather than complexity. Detail was used to earn trust, not to impress."
      },
      {
        heading: "The Outcome",
        copy: "Capital rarely commits to a plan. It commits to a conviction, and conviction, here, was rendered."
      }
    ]
  },
  {
    name: "Villa Hamra",
    description:
      "A private lake villa visualized through warm interiors, sculptural furniture, and slow golden-hour textures for a premium experience.",
    location: "Muscat, Oman",
    client: "NDA",
    deliverables: "Cinematic Stills & Photorealistic Imagery",
    video: null, // TODO: add a video URL here if you have one for this project, e.g. "/videos/oman.mp4"
    images: [
      "/images/oman1.jpg",
      "/images/oman2.png",
      "/images/oman3.jpg"
    ],
    sections: [
      {
        heading: "The Brief", // TODO: replace with real heading if you want something else
        copy:
          "Called for restraint. The client sought not a rendering of rooms, but an impression of a residence already at ease with its lake, its light, and its privacy."
      },
      {
        heading: "The Direction", // TODO
        copy: "We composed each frame with quiet intent, warm interiors, considered stillness, and light that lingers rather than announces itself. The lake was treated not as a view, but as company."
      },
      {
        heading: "The Outcome", // TODO
        copy: "A residence conceived to be felt before it is seen, an impression, held quietly, of what is still to come."
      }
    ]
  }
  // {
  //   name: "City Mall",
  //   description:
  //     "Hospitality visuals for an adaptive reuse destination, balancing original structure, new material language, and a tactile arrival experience.",
  //   location: "Jaipur, India",
  //   client: "Pink City Consortium",
  //   deliverables: "Photorealistic Imagery & CGI",
  //   video: null,
  //   images: [
  //     "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=84",
  //     "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=84",
  //     "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1500&q=84"
  //   ],
  //   sections: [
  //     {
  //       heading: "The Brief",
  //       copy:
  //         "Hospitality visuals for an adaptive reuse destination, balancing original structure, new material language, and a tactile arrival experience."
  //     },
  //     {
  //       heading: "The Direction",
  //       copy: "TODO: add direction/approach copy for City Mall here."
  //     },
  //     {
  //       heading: "The Outcome",
  //       copy: "TODO: add outcome/result copy for City Mall here."
  //     }
  //   ]
  // },
  // {
  //   name: "Pemako",
  //   description:
  //     "Hospitality visuals for an adaptive reuse destination, balancing original structure, new material language, and a tactile arrival experience.",
  //   location: "Sikkim, India",
  //   client: "NDA",
  //   deliverables: "Photorealistic Imagery & CGI",
  //   video: null,
  //   images: [
  //     "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=84",
  //     "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=84",
  //     "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1500&q=84"
  //   ],
  //   sections: [
  //     {
  //       heading: "The Brief",
  //       copy:
  //         "Hospitality visuals for an adaptive reuse destination, balancing original structure, new material language, and a tactile arrival experience."
  //     },
  //     {
  //       heading: "The Direction",
  //       copy: "TODO: add direction/approach copy for City Mall here."
  //     },
  //     {
  //       heading: "The Outcome",
  //       copy: "TODO: add outcome/result copy for City Mall here."
  //     }
  //   ]
  // },
  // {
  //   name: "TBD",
  //   description:
  //     "Hospitality visuals for an adaptive reuse destination, balancing original structure, new material language, and a tactile arrival experience.",
  //   location: "TBD",
  //   client: "TBD",
  //   deliverables: "TBD",
  //   video: null,
  //   images: [
  //     "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=84",
  //     "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=84",
  //     "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1500&q=84"
  //   ],
  //   sections: [
  //     {
  //       heading: "The Brief",
  //       copy:
  //         "Hospitality visuals for an adaptive reuse destination, balancing original structure, new material language, and a tactile arrival experience."
  //     },
  //     {
  //       heading: "The Direction",
  //       copy: "TODO: add direction/approach copy for City Mall here."
  //     },
  //     {
  //       heading: "The Outcome",
  //       copy: "TODO: add outcome/result copy for City Mall here."
  //     }
  //   ]
  // },
  // {
  //   name: "TBD",
  //   description:
  //     "Hospitality visuals for an adaptive reuse destination, balancing original structure, new material language, and a tactile arrival experience.",
  //   location: "TBD",
  //   client: "TBD",
  //   deliverables: "TBD",
  //   video: null,
  //   images: [
  //     "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1500&q=84",
  //     "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=84",
  //     "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1500&q=84"
  //   ],
  //   sections: [
  //     {
  //       heading: "The Brief",
  //       copy:
  //         "Hospitality visuals for an adaptive reuse destination, balancing original structure, new material language, and a tactile arrival experience."
  //     },
  //     {
  //       heading: "The Direction",
  //       copy: "TODO: add direction/approach copy for City Mall here."
  //     },
  //     {
  //       heading: "The Outcome",
  //       copy: "TODO: add outcome/result copy for City Mall here."
  //     }
  //   ]
  // }
];

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");
const contactForm = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");

function setHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 40);
}

function closeMobileMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  mobileNav.classList.remove("open");
}

function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".modal-panel").scrollTop = 0;
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderProjectModal(index) {
  const project = projects[index];
  const [hero, midImage, endImage, ...remaining] = project.images;

  const heroMedia = project.video
    ? `<video src="${project.video}" autoplay muted loop playsinline aria-label="${project.name} atmospheric architectural video"></video>`
    : `<img src="${hero}" alt="${project.name} hero architectural visualization" />`;

  const extraImages = remaining
    .map((img, i) => `<img src="${img}" alt="${project.name} additional visualization ${i + 1}" />`)
    .join("");

  modalBody.innerHTML = `
    <article class="case-story">
      <p class="section-kicker">Signatures</p>
      <h2 class="modal-title" id="modal-title">${project.name}</h2>
      <p>${project.description}</p>
      <div class="modal-meta">
        <p><span>Location</span>${project.location}</p>
        <p><span>Client</span>${project.client}</p>
        <p><span>Deliverables</span>${project.deliverables}</p>
      </div>
      <h3>${project.sections[2].heading}</h3>
      <p>${project.sections[2].copy}</p>
      ${heroMedia}
      <h3>${project.sections[0].heading}</h3>
      <p>${project.sections[0].copy}</p>
      ${midImage ? `<img src="${midImage}" alt="${project.name} interior campaign visualization" />` : ""}
      <h3>${project.sections[1].heading}</h3>
      <p>${project.sections[1].copy}</p>
      ${endImage ? `<img src="${endImage}" alt="${project.name} final campaign visual" />` : ""}
      ${extraImages}
    </article>
  `;
  openModal();
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => renderProjectModal(Number(card.dataset.project)));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      renderProjectModal(Number(card.dataset.project));
    }
  });
});

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = contactForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  formNote.textContent = "Sending your enquiry...";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      formNote.textContent = "Thank you. Your enquiry is sent to Brickstone AI team.";
      contactForm.reset();
    } else {
      formNote.textContent = "Something went wrong. Please email us directly at hq@matri6.com.";
    }
  } catch (error) {
    formNote.textContent = "Something went wrong. Please email us directly at hq@matri6.com.";
  } finally {
    submitButton.disabled = false;
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

document.addEventListener("contextmenu", (e) => e.preventDefault());

const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

if (!isTouchDevice) {
  const cursor = document.getElementById("cursor");
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateCursor() {
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    requestAnimationFrame(updateCursor);
  }
  requestAnimationFrame(updateCursor);

  document.addEventListener("mouseleave", () => (cursor.style.opacity = "0"));
  document.addEventListener("mouseenter", () => (cursor.style.opacity = "1"));

  const clickables = document.querySelectorAll('button, a, [role="button"], input, textarea');
  clickables.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover-active"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover-active"));
  });
}
