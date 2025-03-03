// ////////////////////////// ///////////////////////// ////////////////////////////////////////////////////////////     Navbar /////////////////////////
// function RoyalCrownNavbar() {
//   const navbarHTML = `
//       <header class="w-full relative bg-white shadow-md">
//         <div class="absolute left-4 sm:left-1/4 transform sm:-translate-x-40 md:-translate-x-3/4 top-0 z-10">
//           <a href="/">
//             <img src="public/images/header/logo.png" alt="Royal Crown Realty" class="h-28 w-29 sm:h-20 md:h-24 lg:h-32 transition-all duration-300">
//           </a>
//         </div>
//         <div class="bg-cyan-700 py-2">
//           <div class="container mx-auto px-6 sm:px-14 flex flex-col sm:flex-row justify-end items-end gap-2 sm:gap-12">
//             <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
//               <span class="text-white text-xs sm:text-sm flex items-center">📞 (+91) 8689992777</span>
//               <span class="text-white text-xs sm:text-sm flex items-center">✉️ info@royalcrowninfra.com</span>
//             </div>
//             <div class="flex items-center space-x-3">
//               <a href="#" class="text-white text-lg">🐦</a>
//               <a href="https://www.facebook.com/royalcrowninfra/" class="text-white text-lg">📘</a>
//               <a href="https://www.instagram.com/royalcrown.19/" class="text-white text-lg">📷</a>
//               <a href="#" class="text-white text-lg">▶️</a>
//             </div>
//           </div>
//         </div>
//         <div class="sm:hidden absolute top-3 right-4 z-50">
//           <button id="mobile-menu-toggle" class="text-black hover:text-gray-600">
//             <span id="menu-icon">☰</span>
//             <span id="close-icon" class="hidden">✖</span>
//           </button>
//         </div>
//         <nav class="flex items-start justify-center py-4 sm:py-8 bg-white border-b border-black">
//           <ul class="hidden sm:flex items-center space-x-6">
//             <li><a href="/" class="text-gray-700 hover:text-teal-500 font-bold">Home</a></li>
//             <li class="relative group">
//               <button class="text-gray-700 hover:text-teal-500 font-bold dropdown-toggle">About ⬇️</button>
//               <ul class="dropdown-menu absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden">
//                 <li><a href="/pages/ourTeam.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</a></li>
//                 <li><a href="/pages/page1" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">About The Group</a></li>
//               </ul>
//             </li>
//             <li><a href="/gallery" class="text-gray-700 hover:text-teal-500 font-bold">Gallery</a></li>
//             <li><a href="/contact" class="text-gray-700 hover:text-teal-500 font-bold">Contact Us</a></li>
//           </ul>
//         </nav>
//         <div id="mobile-menu" class="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out z-40 sm:hidden">
//           <ul class="p-4 pt-16 space-y-4">
//             <li><a href="/" class="text-gray-700 font-bold">Home</a></li>
//             <li class="dropdown">
//               <button class="text-gray-700 font-bold dropdown-toggle">About ⬇️</button>
//               <ul class="dropdown-menu hidden ml-4">
//                 <li><a href="/pages/page1" class="block px-4 py-2 text-gray-700">Our Team</a></li>
//                 <li><a href="/pages/page1" class="block px-4 py-2 text-gray-700">About The Group</a></li>
//               </ul>
//             </li>
//             <li><a href="/gallery" class="text-gray-700 font-bold">Gallery</a></li>
//           </ul>
//         </div>
//       </header>
//     `;

//   document.body.insertAdjacentHTML("afterbegin", navbarHTML);

//   document.getElementById("mobile-menu-toggle").addEventListener("click", function () {
//     const menu = document.getElementById("mobile-menu");
//     const menuIcon = document.getElementById("menu-icon");
//     const closeIcon = document.getElementById("close-icon");
//     menu.classList.toggle("-translate-x-full");
//     menuIcon.classList.toggle("hidden");
//     closeIcon.classList.toggle("hidden");
//   });

//   document.querySelectorAll(".dropdown-toggle").forEach(button => {
//     button.addEventListener("click", function () {
//       const dropdownMenu = this.nextElementSibling;
//       dropdownMenu.classList.toggle("hidden");
//     });
//   });
// }

// RoyalCrownNavbar();
// document.addEventListener('DOMContentLoaded', function () {
//   const slides = document.querySelectorAll('.slide');
//   const indicators = document.querySelectorAll('.indicator');
//   const prevButton = document.getElementById('prevButton');
//   const nextButton = document.getElementById('nextButton');
//   let currentSlide = 0;
//   let slideInterval;

//   // Function to show a specific slide
//   function showSlide(index) {
//     // Hide all slides
//     slides.forEach(slide => {
//       slide.style.opacity = '0';
//       slide.style.zIndex = '0';
//     });

//     // Update indicators
//     indicators.forEach((indicator, i) => {
//       indicator.classList.toggle('bg-opacity-100', i === index);
//       indicator.classList.toggle('bg-opacity-50', i !== index);
//     });

//     // Show current slide
//     slides[index].style.opacity = '1';
//     slides[index].style.zIndex = '1';
//     currentSlide = index;
//   }

//   // Function to show next slide
//   function nextSlide() {
//     const next = (currentSlide + 1) % slides.length;
//     showSlide(next);
//   }

//   // Function to show previous slide
//   function prevSlide() {
//     const prev = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(prev);
//   }

//   // Set up click handlers for buttons
//   prevButton.addEventListener('click', () => {
//     prevSlide();
//     resetInterval();
//   });

//   nextButton.addEventListener('click', () => {
//     nextSlide();
//     resetInterval();
//   });

//   // Set up click handlers for indicators
//   indicators.forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//       showSlide(index);
//       resetInterval();
//     });
//   });

//   // Function to reset interval
//   function resetInterval() {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, 2000);
//   }

//   // Initialize carousel
//   showSlide(0);
//   resetInterval();

//   // Pause on hover
//   const carousel = document.getElementById('carousel');
//   carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
//   carousel.addEventListener('mouseleave', resetInterval);
// });






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  hero section /////////////////////
const images = [
  { src: 'public/images/homepage/bann-one.png', text: 'Unlocking Doors, Finding Homes' },
  { src: 'public/images/homepage/bann-two.png', text: 'Your Dream Home Awaits' },
  { src: 'public/images/homepage/bann-three.png', text: 'Building Futures, One Home at a Time' }
];

const statistics = [
  { startValue: 0, endValue: 5, label: "Under Construction Projects", elementId: 'underConstruction' },
  { startValue: 0, endValue: 15, label: "Years Of Expertise", elementId: 'yearsExpertise' },
  { startValue: 0, endValue: 605, label: "Happy Families", elementId: 'happyFamilies' },
  { startValue: 0, endValue: 504, label: "Available Units", elementId: 'availableUnits' }
];

let currentIndex = 0;
let counts = statistics.map(stat => stat.startValue);

// Update statistics counts with animation
const updateStatistics = () => {
  const duration = 5000;
  const frameRate = 1000 / 60;
  const totalFrames = duration / frameRate;

  statistics.forEach((stat, index) => {
    const increment = (stat.endValue - stat.startValue) / totalFrames;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      if (frame <= totalFrames) {
        counts[index] = Math.round(stat.startValue + increment * frame);
        document.getElementById(stat.elementId).textContent = counts[index] + "+";
      } else {
        clearInterval(interval);
      }
    }, frameRate);
  });
};

// Change hero image and text every 5 seconds
const changeImage = () => {
  const heroImage = document.getElementById('heroImage');
  const heroText = document.getElementById('heroText');
  const currentImage = images[currentIndex];

  heroImage.classList.add('fade-out');
  heroText.classList.remove('opacity-100');
  heroText.classList.add('opacity-0');

  setTimeout(() => {
    heroImage.src = currentImage.src;
    heroText.querySelector('h2').textContent = currentImage.text;
    heroImage.classList.remove('fade-out');
    heroImage.classList.add('fade-in');
    heroText.classList.remove('opacity-0');
    heroText.classList.add('opacity-100');
  }, 500);

  currentIndex = (currentIndex + 1) % images.length;
};

// Initialize the carousel and start the interval
const initCarousel = () => {
  setInterval(changeImage, 5000);
  changeImage(); // Change the image immediately when the page loads
};

// Previous and Next buttons
document.getElementById('prevButton').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeImage();
});

document.getElementById('nextButton').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  changeImage();
});

// Start statistics count animation
updateStatistics();
initCarousel();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// about us ////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05) rotate(2deg)";
      card.style.backgroundColor = "#4299e1";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
      card.style.backgroundColor = "#06b6d4";
    });

    card.addEventListener("mousedown", () => {
      card.style.transform = "scale(0.95)";
    });

    card.addEventListener("mouseup", () => {
      card.style.transform = "scale(1)";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const services = [
    { name: "Search & Shortlisting", icon: "public/search-icon.png" },
    { name: "Site Visit", icon: "public/site-visit-icon.png" },
    { name: "Home Loan Assistance", icon: "public/home-loan-icon.png" },
    { name: "Legal Advice", icon: "public/legal-advice-icon.png" },
    { name: "Unit Booking", icon: "public/unit-booking-icon.png" }
  ];

  const container = document.querySelector(".grid");

  services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card flex flex-col items-center justify-center p-6 rounded-lg shadow-md";

    card.innerHTML = `
          <img src="${service.icon}" alt="${service.name}">
          <p class="mt-2 text-white font-semibold">${service.name}</p>
      `;

    container.appendChild(card);
  });
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  ongoing project   ///////////////////////////////

// document.addEventListener("DOMContentLoaded", () => {
//   const projects = [
//     {
//       id: 1,
//       name: 'SAI PRASAD GARDEN, Nevali, Panvel',
//       image: 'public/images/projects/saiPrasad.jpeg',
//       details: [
//         '1 & 2 BHK Apartments',
//         '13 Buildings, G+4 Storey',
//         'Ready to Move In',
//         'Luxurious Amenities',
//       ],
//       href: '#'
//     },
//     {
//       id: 2,
//       name: 'JAYRAM RESIDENCY, Shedung, Panvel',
//       image: 'public/images/projects/jayramResidency.jpg',
//       details: [
//         '1 & 2 BHK Apartments',
//         '4 Buildings, 10 Wings, G+7 Storey',
//         'Possession: March 2026',
//         'Luxurious Amenities',
//       ],
//       href: '#'
//     },
//     {
//       id: 3,
//       name: 'NEW CITY PALACE, Pushpak Nagar, Panvel',
//       image: 'public/images/projects/newCity.jpeg',
//       details: [
//         '1RK, 1BHK Apartments',
//         'G+7 Storey',
//         'Possession: Dec 2025',
//         'Rooftop Amenities',
//       ],
//       href: '#'
//     }
//   ];

//   const renderProjects = () => {
//     const projectsContainer = document.getElementById('projectsContainer');

//     projects.forEach(project => {
//       const projectCard = document.createElement('div');
//       projectCard.className = 'project-card';

//       projectCard.innerHTML = `
//               <div class="bg-white border-2 border-red-600 rounded-lg overflow-hidden shadow-lg">
//                   <div class="relative h-64">
//                       <img src="${project.image}" 
//                            alt="${project.name}" 
//                            class="w-full h-full object-cover"
//                            onerror="this.src='public/images/placeholder.jpg'">
//                   </div>
//                   <div class="p-6">
//                       <h3 class="text-xl font-bold mb-4 text-gray-800">${project.name}</h3>
//                       <ul class="project-info space-y-2">
//                           ${project.details.map(detail => `
//                               <li class="text-gray-600">${detail}</li>
//                           `).join('')}
//                       </ul>
//                       <a href="${project.href}" 
//                          class="read-more-btn block w-full mt-6"
//                          onclick="handleReadMore(${project.id})">
//                           Read More
//                       </a>
//                   </div>
//               </div>
//           `;

//       projectsContainer.appendChild(projectCard);
//     });
//   };

//   // Function to handle Read More clicks
//   window.handleReadMore = (projectId) => {
//     console.log(`Read more clicked for project ${projectId}`);
//     // Add your read more functionality here
//   };

//   // Initialize the project cards
//   renderProjects();
// });


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  reviews /////////
// Review Data
   // Review data
   const reviews = [
    {
      id: 1,
      title: "Royal Crown Team – A Seamless Real Estate Experience",
      rating: 5,
      content: "They worked diligently to offer us the best possible deal and explained every detail with politeness and thoroughness. Their dedication to ensuring we had...",
      author: "Ajinkya Salaykar",
      role: "Customer"
    },
    {
      id: 2,
      title: "Excellent Support!",
      rating: 5,
      content: "Royal Crown Property Developers exceeded my expectations with their exceptional service and attention to detail. From the moment I expressed...",
      author: "Sudhir Patil",
      role: "Customer"
    },
    {
      id: 3,
      title: "Great Experience!",
      rating: 5,
      content: "Overall, a fantastic experience. The team was professional and delivered exactly what was promised.",
      author: "Emily Davis",
      role: "Customer"
    }
  ];

  // Function to generate star rating HTML
  function generateStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

  // Function to render reviews
  function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    
    reviews.forEach(review => {
      const card = document.createElement('div');
      card.className = 'bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300';
      
      card.innerHTML = `
        <div class="text-yellow-400 text-xl mb-4">
          ${generateStars(review.rating)}
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">
          ${review.title}
        </h3>
        <p class="text-gray-600 mb-6">
          ${review.content}
        </p>
        <div class="flex items-center">
          <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
            <i data-lucide="user" class="w-6 h-6 text-gray-500"></i>
          </div>
          <div>
            <div class="font-semibold text-gray-900">${review.author}</div>
            <div class="text-gray-600 text-sm">${review.role}</div>
          </div>
        </div>
      `;
      
      container.appendChild(card);
    });
  }

  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    renderReviews();
    // Initialize Lucide icons
    lucide.createIcons();
  });


//////////////////////////////////////////////////////////////////////////////////////////////////       banking ////////////////////////////////
// Function to clone and append bank cards for infinite scroll
function setupInfiniteScroll() {
  const slider = document.querySelector('.bank-slider');
  const cards = document.querySelectorAll('.bank-card');

  // Clone cards and append to create seamless loop
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    slider.appendChild(clone);
  });
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
  setupInfiniteScroll();
});



/////////////////////////////////////////////////////////////////////////////////////////////////        our team /////////////////////
