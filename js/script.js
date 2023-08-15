const global = {
  currentPage: window.location.pathname
};

// highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}


// init app
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('home');
      break;
    case '/shows.html':
      console.log('shows');
      break;
    case '/movie-details':
      console.log('movie details');
      break;
    case '/tv-details':
      console.log('tv details');
      break;
    case '/search.html':
      console.log('search');
      break;
  }

  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);