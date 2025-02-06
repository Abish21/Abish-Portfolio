// Nav bar Section
$(".ab-pfo-nav-item").click(function () {
  $(".ab-pfo-nav-item").removeClass("active");
  $(this).addClass("active");

  var target = $($(this).attr("href")); // Get target section

  if (target.length) {
    $("html, body").animate(
      {
        scrollTop: target.offset().top - 100, // Adjust offset as needed (e.g., for fixed headers)
      },
      800
    );
  }
});

// Skills Slider
$(".ab-pfo-tech-skills-slick-slider").slick({
  slidesToShow: 6,
  infinite: true,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  dots: false,
  arrows: true,
  prevArrow: `<button type="button" class="slick-prev"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="27.5" cy="27.5" r="27.5" fill="#F3E04F"/>
  <path d="M12.9393 27.9393C12.3536 28.5251 12.3536 29.4749 12.9393 30.0607L22.4853 39.6066C23.0711 40.1924 24.0208 40.1924 24.6066 39.6066C25.1924 39.0208 25.1924 38.0711 24.6066 37.4853L16.1213 29L24.6066 20.5147C25.1924 19.9289 25.1924 18.9792 24.6066 18.3934C24.0208 17.8076 23.0711 17.8076 22.4853 18.3934L12.9393 27.9393ZM40 27.5L14 27.5V30.5L40 30.5V27.5Z" fill="black"/>
  </svg>
  </button>`,
  nextArrow: `<button type="button" class="slick-next"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="27.5" cy="27.5" r="27.5" fill="#F3E04F"/>
  <path d="M42.0607 30.0607C42.6464 29.4749 42.6464 28.5251 42.0607 27.9393L32.5147 18.3934C31.9289 17.8076 30.9792 17.8076 30.3934 18.3934C29.8076 18.9792 29.8076 19.9289 30.3934 20.5147L38.8787 29L30.3934 37.4853C29.8076 38.0711 29.8076 39.0208 30.3934 39.6066C30.9792 40.1924 31.9289 40.1924 32.5147 39.6066L42.0607 30.0607ZM15 30.5H41V27.5H15V30.5Z" fill="black"/>
  </svg>
  </button>`,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

// Academic Background section
$(".ab-pfo-academic-tab").each(function () {
  $(this).click(function () {
    $(".ab-pfo-academic-tab").removeClass("active");
    $(".ab-pfo-academic-tab-content").removeClass("active");
    $(this).addClass("active");

    var attribute = $(this).attr("data-attribute");
    $("#" + attribute).addClass("active");
  });
});


// Form Validation
document.getElementById("Contact-Form").addEventListener("submit", validateForm);

function validateForm(event) {
  let phonevalid = false;
  let emailvalid = false;

  // Phone Number Validation
  let phoneInput = document.getElementById("phone-number").value;
  let phoneError = document.getElementById("phone-error");
  if (!/^\d{10}$/.test(phoneInput)) {
    phoneError.textContent = "Phone number must be exactly 10 digits.";
    phoneError.style.display = "block";
    phonevalid = false;
  } else {
    phoneError.textContent = "";
    phonevalid = true;
  }

  // Email Validation
  let emailInput = document.getElementById("email").value;
  let emailError = document.getElementById("emial-error");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
    emailvalid = false;
  } else {
    emailError.textContent = "";
    emailvalid = true;
  }

  if (!phonevalid || !emailvalid) {
    event.preventDefault(); 
    return false;
  }

  return true;

};



// Verify button show 
$("#email").on("input", function(){
  if($(this).val().trim() != ""){
    $(".email-verify-btn").show();
  }else{
    $(".email-verify-btn").hide();
  }
});


// Very button function 
function verify(){
  let emailInput = document.getElementById("email").value;
  let emailError = document.getElementById("emial-error");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput)) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.display = "block";
  } else {
    emailError.textContent = "";
    sendOTP()
  }
}


function sendOTP() {
  var email = document.getElementById("email").value;
  if (email == "") {
      alert("Please enter your email first.");
      return;
  }

  // Open the OTP popup
  document.getElementById("otpModal").style.display = "block";

  // Send OTP to email
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "send_otp.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          alert(xhr.responseText);
      }
  };
  xhr.send("email=" + email);
}

