$(document).ready(function() {
  // Check if user has already answered
  var ageVerified = $.cookie('age-verified');
  if (!ageVerified) {
    // Show modal
    $('#age-verification-modal').show();
  }
});

// Handle button clicks
$('#yes-button').click(function() {
  // Set cookie to remember user has been verified
  $.cookie('age-verified', 'true', { expires: 365 });
  // Hide modal
  $('#age-verification-modal').hide();
});

$('#no-button').click(function() {
  // Redirect user to non-alcoholic website
  window.location.replace("https://www.example.com/non-alcoholic");
});

// Smooth scrolling for navbar links
$(document).ready(function() {
    $('a.nav-link').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
  
        const hash = this.hash;
  
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  // Collapse navbar on click
  $(document).on('click', '.navbar-collapse.show', function(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
    }
  });
  
  // Filter products
  $(document).ready(function() {
    $('.filter-button').on('click', function() {
      const value = $(this).attr('data-filter');
  
      if (value === 'all') {
        $('.filter').show('1000');
      } else {
        $('.filter')
          .not('.' + value)
          .hide('3000');
        $('.filter')
          .filter('.' + value)
          .show('3000');
      }
  
      // Add active class to filter button
      $('.filter-button').removeClass('active');
      $(this).addClass('active');
    });
  });
  
  // Show/hide back-to-top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  
  // Smooth scrolling for back-to-top button
  $(document).on('click', '.back-to-top', function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
  