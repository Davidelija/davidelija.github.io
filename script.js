/* ============ Data ============ */
const EXPERIENCE = [
  {
    title: "Graduate Researcher",
    org: "Heavy Vehicle Cybersecurity Lab (Dr. Jeremy Daily), Colorado State University",
    date: "Aug 2026 – Present",
    bullets: [
      "Conducting graduate research on the cybersecurity of DC fast-charging systems for electric vehicles.",
      "Practiced CAN message injection and introductory fuzzing on a vehicle network testbed to study how control units respond to unexpected or malicious traffic.",
      "Participated in the CyberAuto Challenge and CyberTractor, hands-on vehicle cybersecurity training events."
    ]
  },
  {
    title: "Graduate Teaching Assistant, ECE 205 Analog Circuit Design",
    org: "Department of Electrical & Computer Engineering, Colorado State University",
    date: "Aug 2026 – Present",
    bullets: [
      "Lead weekly labs for about 60 students, teaching hands-on use of oscilloscopes, function generators and multimeters.",
      "Troubleshoot student circuits at the bench, coaching students to isolate wiring and component faults step by step.",
      "Grade lab reports and give written feedback on measurement accuracy and comparison to theoretical predictions."
    ]
  },
  {
    title: "HPC Developer Intern",
    org: "Data Science Research Institute, Colorado State University",
    date: "June 2025 – Aug 2026",
    bullets: [
      "Diagnosed and resolved Linux system and job-scheduling issues for researchers on the university's high-performance computing cluster.",
      "Verified server configurations and ran operational tests while commissioning new hardware during an HPC cluster rebuild.",
      "Wrote user guides and troubleshooting docs (GitHub, Read the Docs), improving support efficiency by about 50%.",
      "Trained faculty and students on Linux command-line workflows and job scheduling."
    ]
  },
  {
    title: "IT Student Support & A/V Media Specialist",
    org: "College of Business, Colorado State University",
    date: "June 2023 – Present",
    bullets: [
      "Resolved IT incidents for 275+ faculty and staff and deployed/imaged 150+ Windows systems for configuration consistency.",
      "Led classroom podium renovations integrating Crestron control/AV systems, training 50+ end users on the new setup."
    ]
  },
  {
    title: "Automation Intern",
    org: "Dept. of Microbiology, Immunology, and Pathology, CSU",
    date: "August 2022 – December 2022",
    bullets: [
      "Developed Python automation scripts using the Opentrons API, increasing laboratory throughput ~50%.",
      "Automated dilution, titration, and fluorescence workflows with an emphasis on repeatability and error reduction."
    ]
  }
];

const PROJECTS = [
  {
    title: "Formula SAE Ram Racing (RR26EV) — Electrical Team Member, former Low Voltage Electrical Lead",
    tags: ["automotive", "embedded"],
    period: "Sept 2024 – Present",
    stack: "KiCad · CAN bus / DBC · MATLAB/Simulink · Deutsch & Amphenol connectors",
    summary: "Low-voltage electrical system, CAN network, and wiring harnesses for CSU's first competition Formula SAE electric vehicle.",
    background: "Ram Racing's first-year EV platform required a complete low-voltage electrical architecture from scratch — no existing infrastructure for 400V tractive-system integration, safety monitoring, or vehicle control.",
    approach: [
      "Designed a 12V low-voltage system with 6 independently fused channels and a 500 kbps CAN network with a custom message database, connecting the vehicle control unit, motor controller and battery management system.",
      "Designed the power distribution PCB and the fault-latch PCB and its latching logic in KiCad, then integrated and tested the fault latch with the insulation monitoring device and brake system plausibility device in the shutdown circuit.",
      "Engineered and fabricated 5 wiring harness assemblies (85m of wire, 120+ crimped connections) to FSAE T.9.2.2 specs.",
      "Developed vehicle control logic in MATLAB/Simulink for the New Eagle RCM120 control unit and the motor controller."
    ],
    results: "Delivered the low-voltage electrical system for the program's first competition EV build and secured a New Eagle hardware sponsorship. Currently mentoring two new electrical team members."
  },
  {
    title: "Rubicon — Electrical Lead, FSAE EV Prototype",
    tags: ["automotive"],
    period: "2024 – 2025",
    stack: "CAN telemetry · motor controller calibration · benchtop validation",
    summary: "Ram Racing's first EV prototype — low-voltage harness, CAN-based driver dashboard, and a benchtop powertrain test stand.",
    background: "Ram Racing was expanding from IC-only to dual IC/EV competition. The team needed a functional prototype to validate electrical architecture and train members on HV safety before the competition build.",
    approach: [
      "Designed and fabricated the complete low-voltage wiring harness and a CAN-based driver dashboard (battery voltage, motor temp, torque, faults).",
      "Built a benchtop powertrain test stand (E-stop, precharge circuit, basic CAN fault injection) to validate motor-controller startup sequencing and thermal derating.",
      "Calibrated motor-controller current limits and acceleration curves."
    ],
    results: "Delivered a functional EV prototype; established LV harness routing standards, CAN protocols, and motor calibration baselines adopted for the 2025-26 competition build."
  },
  {
    title: "Intrepid — Wireless Telemetry System, FSAE IC Car",
    tags: ["automotive", "embedded", "software"],
    period: "2024",
    stack: "Teensy 4.1 · dual CAN bus · 915MHz RF · Raspberry Pi / Node-RED",
    summary: "Wireless telemetry pipeline streaming live ECU data from the car to the pit at FSAE Michigan 2024.",
    background: "Ram Racing's IC car had no telemetry infrastructure to stream CAN data from its Haltech ECU to the pit. Commercial telemetry systems exceeded the team's budget.",
    approach: [
      "Built an end-to-end pipeline: Teensy 4.1 reads dual CAN buses, parses via DBC, logs to SD backup, and transmits over a 915MHz RF link to a Raspberry Pi running a Node-RED dashboard.",
      "Solved bandwidth saturation by converting ASCII strings to packed binary integers (60% size reduction) with priority-based scheduling.",
      "Built a Python decoder and a real-time dashboard with gauges, trend graphs, GPS overlay, and threshold alerts."
    ],
    results: "Deployed at FSAE Michigan 2024 with <200ms latency for critical parameters, zero data loss, and a reliable ~100m pit-to-track link — caught early overheating and validated driver feedback in real time."
  },
  {
    title: "RamBots — Real-Time Motor Control Firmware",
    tags: ["embedded", "software"],
    period: "Aug 2025 – Present",
    stack: "C++ · Python · Teensy 4.1 · ODrive · CAN bus",
    summary: "Rewrote the control firmware for a 12-motor quadrupedal robot, raising the control loop from 20Hz to 1kHz.",
    background: "The existing codebase had unreliable ODrive motor communication causing intermittent leg failures during demos, no fault handling, and serial polling creating 50-100ms control-loop delays unsuitable for dynamic balance.",
    approach: [
      "Built a C++ inverse-kinematics solver converting foot positions into joint angles, with a modular Leg/Axis/ODrive class architecture enabling graceful degradation on single-motor faults.",
      "Replaced blocking serial I/O with interrupt-driven UART, raising the control loop from 20Hz to 1kHz.",
      "Parsed CAN telemetry from six ODrive controllers and built Python configuration/telemetry tooling for calibration and diagnostics."
    ],
    results: "Achieved <2° joint angle error and <50ms command latency across 5+ live demonstrations with zero mid-presentation failures. Diagnosed an intermittent SPI fault via custom tooling, raising system uptime from 60% to 98%."
  },
  {
    title: "RamBots — Documentation Platform & Knowledge Base",
    tags: ["software"],
    period: "2025",
    stack: "Read the Docs · Sphinx · reStructuredText · GitHub CI",
    summary: "Version-controlled documentation platform cutting new-contributor onboarding from 4–6 weeks to 2.",
    background: "Three-plus years of tribal knowledge across 15+ contributors was scattered across notes, Discord, and code comments, creating a 4-6 week onboarding curve for every new member.",
    approach: [
      "Built a Read the Docs + GitHub-integrated platform with auto-builds on every commit, organized into Hardware, Software, Procedures, and Troubleshooting sections.",
      "Authored full class/function API references for the control firmware and a 4-module onboarding curriculum.",
      "Established a PR review process requiring documentation updates alongside code changes."
    ],
    results: "Cut onboarding from 4-6 weeks to 2, reached 200+ views in one semester, and preserved team knowledge across 40% annual turnover."
  },
  {
    title: "RamBots — Wiring Redesign & Communication PCB",
    tags: ["embedded"],
    period: "2025",
    stack: "Custom PCB · JT connectors · twisted-pair UART",
    summary: "Redesigned an 80+ wire point-to-point harness into a structured, serviceable system with custom breakout PCBs.",
    background: "The original wiring caused frequent disconnections and voltage sags, requiring a 30+ minute pre-demo checkout with 3-5 connection failures per event.",
    approach: [
      "Designed a structured 24V power bus and twisted-pair UART harnesses with color-coding and heat-shrink labeling.",
      "Co-designed custom communication breakout PCBs consolidating six loose UART wires per ODrive into one connector, with per-channel status LEDs.",
      "Documented a CAN bus upgrade path for the Mark II platform."
    ],
    results: "Eliminated 95% of connection failures, cut checkout time from 30 to 5 minutes, and cut leg-swap repair time from 45 to 10 minutes."
  },
  {
    title: "5-DOF Robotic Arm — Embedded Controller & HMI",
    tags: ["embedded", "software"],
    period: "Aug 2025 – Present",
    stack: "ESP32-S3 · 4-layer PCB · Android · JavaScript / HTML",
    summary: "Embedded controller and control software for a 5-DOF robotic arm, built with a 6-member multidisciplinary senior design team.",
    background: "A senior-design team of computer, electrical, and mechanical engineers needed an embedded controller and control interface for a custom 5-DOF robotic arm.",
    approach: [
      "Designed a 4-layer PCB and ESP32-S3-based embedded controller for signal and power integration.",
      "Wrote firmware for physical arm control and a JavaScript/HTML web interface for Wi-Fi/serial control.",
      "Developed an Android HMI application for real-time control, contributing to BOM and harness design."
    ],
    results: "Delivered a working embedded control stack integrating mechanical, electrical, and software subsystems across the team."
  },
  {
    title: "Energy Management System for Room Heaters",
    tags: ["software", "embedded"],
    period: "Sept 2024 – Dec 2024",
    stack: "Python · Flask · MQTT · TensorFlow Lite · Raspberry Pi",
    summary: "Edge-deployed energy optimization system processing 20,000+ time-series data points with a real-time dashboard.",
    background: "Room heaters lacked any energy-optimization system; the goal was a low-cost, edge-deployed solution with no cloud dependency.",
    approach: [
      "Built an MQTT-based real-time data-streaming pipeline and a Flask dashboard running at <100ms latency.",
      "Trained a machine-learning model on 20,000+ time-series data points to optimize consumption.",
      "Deployed TensorFlow Lite on a Raspberry Pi for low-cost, on-device inference."
    ],
    results: "Delivered a fully edge-deployed system with real-time visualization and no cloud dependency, scalable at low hardware cost."
  },
  {
    title: "Opentron Lab Automation",
    tags: ["software"],
    period: "Aug 2022 – Dec 2022",
    stack: "Python · Opentrons API",
    summary: "Automated a bead-protein purification workflow, increasing lab throughput ~50%.",
    background: "Manual saw-tooth titration and fluorescence-polarization workflows were slow and error-prone for the research team.",
    approach: [
      "Developed Python scripts against the Opentrons API to automate dilution, titration, and fluorescence workflows.",
      "Integrated magnetic bead protein purification on the Opentrons Flex platform in collaboration with researchers."
    ],
    results: "Increased laboratory throughput ~50% while reducing manual error in repeatable workflows."
  },
  {
    title: "SkyHighFly Quadcopter — Sophomore Design Project",
    tags: ["embedded"],
    period: "Sophomore year",
    stack: "Betaflight · Bardwell F4 AIO V2 · FlySky FS-i6",
    summary: "Diagnosed and fixed severe flight instability through a flight-controller upgrade and systematic PID tuning.",
    background: "Basic Arduino control proved inadequate for stable flight, exhibiting severe oscillations that prevented reliable operation beyond brief hovering.",
    approach: [
      "Assembled the electrical system: four 30A ESCs, 11.1V LiPo power routing, and a color-coded wiring harness for post-crash maintainability.",
      "Upgraded flight control from Arduino Uno to a Bardwell F4 AIO V2 running Betaflight.",
      "Systematically tuned PID gains (P → I → D) combined with center-of-gravity hardware fixes."
    ],
    results: "Achieved a 20-minute flight time with stable hover at 60% throttle and <200ms control-response latency, demonstrated at the project showcase."
  }
];

const LEADERSHIP = [
  { title: "Electrical Low Voltage Lead (former)", org: "CSU Formula SAE Electric", date: "2025 – 2026", desc: "Led a 7+ engineer electrical team through the program's first competition EV build; secured a New Eagle sponsorship." },
  { title: "Electrical Systems Lead", org: "CSU FSAE EV Electric", date: "2024 – 2025", desc: "Led harness design and motor calibration; cut a 6-week timeline to 2 weeks before Vehicle Reveal." },
  { title: "Safety Officer", org: "RamBots, CSU Senior Design", date: "2025 – 2026", desc: "Wrote safety procedures and documentation for a 13-person multidisciplinary team." },
  { title: "Ram Welcome Leader", org: "Colorado State University", date: "Summer 2024", desc: "Mentored a group of 20 incoming students through campus transition." },
  { title: "Member", org: "National Society of Black Engineers & ColorStack", date: "2023 – 2026", desc: "" }
];

const AWARDS = [
  { title: "Tesla Battery Sponsorship Recipient", date: "Tesla, 2025" },
  { title: "New Eagle Sponsorship (secured)", date: "2025" },
  { title: "ECE 202 Sophomore Competition Awardee", date: "CSU ECE Dept., 2024" },
  { title: "Fry Family Electrical Engineering Scholarship", date: "CSU, 2025" },
  { title: "Carl Wilsen Scholarship in ECE", date: "CSU, 2024" },
  { title: "Engineering College Scholars", date: "CSU, 2023" },
  { title: "Margery Monfort Wilson Scholarship", date: "CSU, 2023" },
  { title: "International Scholarship Award", date: "CSU, 2022" },
  { title: "Dean's List", date: "Fall 22, Sp 23, Fa 23, Sp 24, Fa 24, Fa 25" }
];

/* ============ Render: Experience ============ */
function renderExperience() {
  const el = document.getElementById("timeline");
  el.innerHTML = EXPERIENCE.map(job => `
    <div class="tl-item">
      <div class="tl-head">
        <div class="tl-title">${job.title}</div>
        <div class="tl-date">${job.date}</div>
      </div>
      <div class="tl-org">${job.org}</div>
      <ul>${job.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
    </div>
  `).join("");
}

/* ============ Render: Projects ============ */
function tagLabel(t) {
  return { software: "Software", automotive: "Automotive", embedded: "Embedded" }[t] || t;
}

function renderProjects(filter) {
  const el = document.getElementById("projectGrid");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));
  el.innerHTML = list.map((p, i) => `
    <div class="card">
      <div class="card-tags">${p.tags.map(t => `<span class="tag ${t}">${tagLabel(t)}</span>`).join("")}</div>
      <div class="card-title">${p.title}</div>
      <div class="card-period">${p.period}</div>
      <div class="card-stack">${p.stack}</div>
      <div class="card-summary">${p.summary}</div>
      <button class="card-toggle" data-idx="${i}">
        <span class="toggle-label">Details</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="card-details" data-idx="${i}">
        <div class="card-details-inner">
          <h4>Background</h4>
          <p>${p.background}</p>
          <h4>Approach</h4>
          <ul>${p.approach.map(a => `<li>${a}</li>`).join("")}</ul>
          <h4>Results</h4>
          <div class="results-box">${p.results}</div>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".card-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-idx");
      const details = document.querySelector(`.card-details[data-idx="${idx}"]`);
      const isOpen = details.classList.toggle("open");
      btn.classList.toggle("open", isOpen);
      btn.querySelector(".toggle-label").textContent = isOpen ? "Hide" : "Details";
    });
  });
}

/* ============ Render: Leadership / Awards ============ */
function renderLeadership() {
  document.getElementById("leadershipList").innerHTML = LEADERSHIP.map(l => `
    <div class="lead-item">
      <div class="lt">${l.title}</div>
      <div class="ld">${l.org} &middot; ${l.date}</div>
      ${l.desc ? `<p>${l.desc}</p>` : ""}
    </div>
  `).join("");

  document.getElementById("awardsList").innerHTML = AWARDS.map(a => `
    <div class="award-item">
      <span class="dot">&#9679;</span>
      <div><span class="at">${a.title}</span><br><span class="ad">${a.date}</span></div>
    </div>
  `).join("");
}

/* ============ Filter bar ============ */
function initFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });
}

/* ============ Theme toggle ============ */
function initThemeToggle() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  const syncPressed = () => {
    toggle.setAttribute("aria-pressed", root.getAttribute("data-theme") === "light" ? "true" : "false");
  };
  syncPressed();

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    syncPressed();
  });
}

/* ============ Mobile nav ============ */
function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const panel = document.getElementById("mobilePanel");
  toggle.addEventListener("click", () => panel.classList.toggle("open"));
  panel.querySelectorAll("a").forEach(a => a.addEventListener("click", () => panel.classList.remove("open")));
}

/* ============ Scroll reveal ============ */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: 0.12 });
  items.forEach(i => obs.observe(i));
}

/* ============ Active nav link on scroll ============ */
function initActiveNav() {
  const sections = ["about", "experience", "projects", "skills", "leadership", "resumes", "contact"];
  const links = document.querySelectorAll(".nav-links a");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${e.target.id}`));
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });
  sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
}

/* ============ Init ============ */
document.addEventListener("DOMContentLoaded", () => {
  renderExperience();
  renderProjects("all");
  renderLeadership();
  initFilters();
  initThemeToggle();
  initMobileNav();
  initReveal();
  initActiveNav();
});

/* ============ Hero car: pause for reduced-motion users ============ */
(function () {
  var svg = document.querySelector(".hero-visual");
  if (svg && window.matchMedia("(prefers-reduced-motion: reduce)").matches && svg.pauseAnimations) {
    svg.pauseAnimations();
  }
})();
