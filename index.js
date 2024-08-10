const themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

themeButton.addEventListener("click", toggleDarkMode);

document.addEventListener('DOMContentLoaded', () => {
  const subscribeButton = document.getElementById('subscribe-button');
  const form = document.getElementById('subscription-form');
  const lastSubscriberInfo = document.getElementById('last-subscriber-info');

  subscribeButton.addEventListener('click', () => {
    validateForm();
  });

  const validateForm = () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
      // Show alert and turn button red
      alert('Name and Email are required.');
      subscribeButton.classList.add('red');
    } else {
      // Remove red color and proceed
      subscribeButton.classList.remove('red');
      handleSubscription(nameInput.value, emailInput.value);
      clearForm();
    }
  };

  const handleSubscription = (name, email) => {
    // For simplicity, just display the last subscriber's information
    const modalSubscriberName = document.getElementById('modalSubscriberName');
    modalSubscriberName.textContent = `Thank you, ${name}, for subscribing!`;
  };


  const clearForm = () => {
    form.reset();
  };
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.container, #stories, #discuss, #about, .subscription-container');

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  };

  // Initial check on page load
  handleScroll();

  // Add scroll event listener
  document.addEventListener('scroll', handleScroll);
});

// Subscribe button click event
const subscribeButton = document.getElementById('subscribe-button');
subscribeButton.addEventListener('click', () => {
  // Assume you have validated the form and subscribed successfully
  // Show the modal
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';

  // Set the src attribute of the funny GIF
  const funnyGif = document.getElementById('funnyGif');
  funnyGif.src = 'path/to/funny.gif';

  // Hide the modal after 3 seconds (adjust the duration as needed)
  setTimeout(() => {
    modal.style.display = 'none';
  }, 3000);
});

// Close button click event
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  // Close the modal
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
});
