document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".testimonial-wrapper");
  const testimonials = Array.from(wrapper.children);
  
  testimonials.forEach((testimonial) => {
    const clone = testimonial.cloneNode(true);
    wrapper.appendChild(clone);
  });

  wrapper.addEventListener("mouseenter", () => {
    wrapper.classList.add("paused");
  });

  wrapper.addEventListener("mouseleave", () => {
    wrapper.classList.remove("paused");
  });
});
