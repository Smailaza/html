const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.parentElement;
        parent.classList.toggle('active');
    });
});
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

// Function to update slides
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
}

// Event Listeners for Next and Prev Buttons
nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
});

// Initialize slider
updateSlides();

const testimonials = [
    {
      text: "InfyCal helps me to stay connected with my team.",
      name: "James Brown",
      role: "Developer",
      img: "https://via.placeholder.com/50",
    },
    {
      text: "Scheduling with InfyCal is effortless and efficient.",
      name: "Jane Doe",
      role: "Designer",
      img: "https://via.placeholder.com/50",
    },
    {
      text: "The best tool for managing client meetings!",
      name: "Rashed Kabir",
      role: "Manager",
      img: "https://via.placeholder.com/50",
    },
  ];
  
  let currentIndex = 0;
  
  const testimonialCard = document.querySelector('.testimonial-card');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  
  function updateTestimonial() {
    const testimonial = testimonials[currentIndex];
    testimonialCard.innerHTML = `
      <p>"${testimonial.text}"</p>
      <div class="client-info">
        <img src="${testimonial.img}" alt="${testimonial.name}">
        <div>
          <h4>${testimonial.name}</h4>
          <span>${testimonial.role}</span>
        </div>
      </div>
    `;
  }
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
  });
  
  // Initialize the first testimonial
  updateTestimonial();
  
