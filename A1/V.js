function changeSlide(n) {
  let videos = [
    "./assests/StudentTemplate.mp4",
    "./assests/yellowPreview.mp4",
    "./assests/grayPreview.mp4",
  ];

  var myslide = document.querySelector(".mySlide");
  myslide.setAttribute("src", videos[n]);
}

var ProgrammesByUniversityTab = document.getElementById(
  "ProgrammesByUniversity"
);
var ProgrammesByUniversityTab2 = document.getElementById(
  "ProgrammesByUniversity2"
);
const ProgrammesByUniversityData = {
  0: [
    {
      0: "Agriculture Engineering",
      1: "./assests/agriculture eng(ug).jpg",
    },
    {
      0: "Biotechnology",
      1: "./assests/bio technology.webp",
    },
    {
      0: "Bioinformatics",
      1: "./assests/bio technology.webp",
    },
    {
      0: "Biomedical Engineering",
      1: "./assests/BIOMEDICAL(UG).jpg",
    },
    {
      0: "Civil Engineering",
      1: "./assests/civilEng.jpg",
    },
    {
      0: "Chemical Engineering",
      1: "./assests/chemical-engineer-(ug).jpg",
    },
    {
      0: "CSE",
      1: "./assests/cse(ug).jpg",
    },
    {
      0: "CSE-AIML",
      1: "./assests/CSE-AIML(UG).jpg",
    },
    {
      0: "CSE-CS",
      1: "./assests/CSE-CS(UG).jpg",
    },
    {
      0: "CSE-CSBS",
      1: "./assests/CSE-CSBS.jpg",
    },
    {
      0: "IT",
      1: "./assests/infromation technology(ug).jpg",
    },
    {
      0: "CSE-DS",
      1: "./assests/CSE-DS(UG).jpg",
    },
    {
      0: "ECE",
      1: "./assests/ece(ug).jpg",
    },
    {
      0: "EEE",
      1: "./assests/EEE(UG).jpg",
    },
    {
      0: "Food Tech",
      1: "./assests/Food technology(UG).jpg",
    },
    {
      0: "Mech Engineering",
      1: "./assests/mechanical eng(ug).jpg",
    },
    {
      0: "Robotics & Automation Engineering",
      1: "./assests/Robotics-Engineering-(UG).jpg",
    },
    {
      0: "Textile Technology",
      1: "./assests/TEXTILE 2(UG).jpg",
    },
  ],
  1: {
    0: [
      {
        0: "Embedded Systems",
        1: "./assests/embedded systems(pg).jpg",
      },
      {
        0: "VLSI Design",
        1: "./assests/VLSI Design(PG).jpg",
      },
      {
        0: "CSE",
        1: "./assests/cse(ug).jpg",
      },
      {
        0: "Power Electronics & drives",
        1: "./assests/Power Electronics & drives(PG).jpg",
      },
      {
        0: "Food Processing Technology",
        1: "./assests/food processing tech(pg).jpg",
      },
      {
        0: "Machine Design",
        1: "./assests/machine design(pg).jpg",
      },
      "Power Electronics & drives",
      "Food Processing Technology",
      "Machine Design",
      "Biotechnology",
      "Farm Machinery",
      "Structural Engineering",
    ],
    1: [
      "Master of Business Administration",
      "Master of Computer Applications",
      "Master of Arts (English)",
      "Master of Science",
    ],
  },
  2: [
    "B.Pharmacy",
    "BBA",
    "BCA",
    "B.Sc",
    "B.Sc(Hons)Agriculture",
    "BA.LL.B",
    "BBA.LL.B",
  ],
};

function ShowProgrammesByUniversity(n) {
  if (n === 0) {
    ProgrammesByUniversityTab.style.display = "block";
    let ProgrammeListContainer = document.getElementById(
      "ProgrammesListContainer"
    );
    ProgrammeListContainer.innerHTML = "";
    ProgrammesByUniversityData[0].forEach((p) => {
      ProgrammeListContainer.innerHTML += `<a href="/" class="card-container" id="UGprogramme">
        <div class="hero-image-container">
          <img class="hero-image" src="${p[1]}"
            alt="Spinning glass cube" />
        </div>
        <main class="main-content">
          <div class="main-content-header" >
            <div>${p[0]}</div>
          </div>
        </main>
      </a>`;
    });
  }
  if (n === 1) {
    ProgrammesByUniversityTab2.style.display = "block";
    let ProgrammeListContainer21 = document.getElementById(
      "ProgrammesListContainer21"
    );
    ProgrammeListContainer21.innerHTML = "";
    ProgrammesByUniversityData[1][0].forEach((p) => {
      ProgrammeListContainer21.innerHTML += `<a href="/" class="card-container" id="UGprogramme">
              <div class="hero-image-container">
                <img class="hero-image" src="https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg"
                  alt="Spinning glass cube" />
              </div>
              <main class="main-content">
                <div class="main-content-header">
                  <div>${p}</div>
                </div>
              </main>
            </a>`;
    });
    let ProgrammesListContainer22 = document.getElementById(
      "ProgrammesListContainer22"
    );
    ProgrammesListContainer22.innerHTML = "";
    ProgrammesByUniversityData[1][1].forEach((p) => {
      ProgrammesListContainer22.innerHTML += `<a href="/" class="card-container" id="UGprogramme">
              <div class="hero-image-container">
                <img class="hero-image" src="https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg"
                  alt="Spinning glass cube" />
              </div>
              <main class="main-content">
                <div class="main-content-header">
                  <div>${p}</div>
                </div>
              </main>
            </a>`;
    });
  }
  if (n === 2) {
    ProgrammesByUniversityTab.style.display = "block";
    let ProgrammeListContainer = document.getElementById(
      "ProgrammesListContainer"
    );
    ProgrammeListContainer.innerHTML = "";
    ProgrammesByUniversityData[2].forEach((p) => {
      ProgrammeListContainer.innerHTML += `<a href="/" class="card-container" id="UGprogramme">
        <div class="hero-image-container">
          <img class="hero-image" src="https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg"
            alt="Spinning glass cube" />
        </div>
        <main class="main-content">
          <div class="main-content-header" >
            <div>${p}</div>
          </div>
        </main>
      </a>`;
    });
  }
}

document.getElementById("closeProgrammes").addEventListener("click", () => {
  ProgrammesByUniversityTab.style.display = "none";
});

document.getElementById("closeProgrammes2").addEventListener("click", () => {
  ProgrammesByUniversityTab2.style.display = "none";
});

document.getElementById("UGprogramme").addEventListener("click", () => {
  ShowProgrammesByUniversity(0);
});
document.getElementById("PGprogramme").addEventListener("click", () => {
  ShowProgrammesByUniversity(1);
});
document.getElementById("Otherprogramme").addEventListener("click", () => {
  ShowProgrammesByUniversity(2);
});
