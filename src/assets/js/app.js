$(document).ready(function() {
  var $mobileNav = $('.navigation');
  var $mobileNavToggle = $('.mobile-nav-toggle');

  function toggleMobileNav() {
    $mobileNav.toggleClass('open');
    $('body').toggleClass('mobile-nav-open');
  }

  $mobileNavToggle.on('click', toggleMobileNav);


 // Hide all tab content except the first one
 $(".tab-content .tab-pane:not(:first)").hide();

 // Add 'active' class to the first tab and show its content
 $(".tab-nav li:first").addClass("active");

 // Tab switching logic
 $(".tab-nav a").click(function() {
   // Remove 'active' class from all tabs
   $(".tab-nav li").removeClass("active");

   // Add 'active' class to the clicked tab
   $(this).parent().addClass("active");

   // Hide all tab content
   $(".tab-content .tab-pane").hide();

   // Show the corresponding tab content based on the clicked tab's href
   var activeTab = $(this).attr("href");
   $(activeTab).fadeIn();

   // Prevent the default link behavior
   return false;
 });

   // Hide all accordion content initially
   $(".accordion-content").hide();

   // Add click event to accordion toggle
   $(".accordion-toggle").click(function() {
     // Toggle the active class on the clicked accordion toggle
     $(this).toggleClass("active");
 
     // Toggle the visibility of the accordion content within the same tab section
     $(this).next(".accordion-content").slideToggle();
   });

  
});

$('#currencyitem').click(function(){
  console.log("running");
  $('#currencybox').removeClass("hide");
});

$('#faqitem').click(function() {

  console.log("runnings");
});



  

  var toggleState = false;

  function toggleSwitch() {
    var toggle = document.querySelector(".toggle");
    
    if (toggleState) {
      toggle.classList.remove("on");
    } else {
      toggle.classList.add("on");
    }
    
    toggleState = !toggleState;
  }
  function toggleSwitchtwo() {
    var toggle = document.querySelector(".toggletwo");
    
    if (toggleState) {
      toggle.classList.remove("on");
    } else {
      toggle.classList.add("on");
    }
    
    toggleState = !toggleState;
  }

 
 