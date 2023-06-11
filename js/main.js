//smooth scroll support for safari, internet explorer, microsoft edge, and opera next
//import smoothscroll from 'smoothscroll-polyfill';
//smoothscroll.polyfill();

// Use an IIFE to avoid adding or affecting variables in the global scope.
(function() {
  
  // If on desktop, the user clicks outside the main content body (and isn't clicking a
  // link in the left column), collapse all collapsible elements.
  document.addEventListener('click', function (event) {
      // For performance, re-queue this at the end of the JS event loop's
      // current execution queue so it doesn't slow down rendering any immediate
      // responses to the click.
      setTimeout(function () {
          var $target = $(event.target);

          // if the click was anywhere on the topnav
          if ($target.closest('#topnav_mobile_above_divider').length !== 0 ||
              $target.closest('#topnav_desktop').length !== 0) {
              $('.collapse').collapse('hide');

              $([document.documentElement, document.body]).animate({
                  scrollTop: 0,
                  behavior: 'smooth'
              }, 0);
          }
          else {
              return;
          }
      });
  });
  
  // collapsible section fxs
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {

      var content = this.nextElementSibling;

      // if this item is active, close the content
      if (this.classList.contains("active"))
      {
        content.style.maxHeight = null;
      }
      // otherwise, close all other collapsibles and open the content
      else
      {
        for(item of coll){ 
          if (item.classList)
          item.classList.remove("active");
          item.nextElementSibling.style.maxHeight = null;
        }
        content.style.maxHeight = content.scrollHeight + "px";
      }
      this.classList.toggle("active"); // toggle the active state of this collapsible
    });
  }
  
    var isMobile = function () {
      return window.innerWidth <= 900;
      };
  
    var rangeStart = function (elem) {
      return $(elem).offset().top - 125; //125 is height of navbar, fudge factor for rangestart
      };

    
      
  
  })();
  
  
  
  
  
  
  
  