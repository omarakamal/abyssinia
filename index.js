


document.addEventListener("DOMContentLoaded",()=>{

  
  const wrapper = document.getElementById("reviews-wrapper");
  const reviews = wrapper.children;
  const totalReviews = reviews.length;
  let index = 0;

  function updateReviewPosition() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % totalReviews;
    updateReviewPosition();
  });

  document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + totalReviews) % totalReviews;
    updateReviewPosition();
  });

  // Auto-scroll every 5 seconds
  setInterval(() => {
    index = (index + 1) % totalReviews;
    updateReviewPosition();
  }, 5000);

})


