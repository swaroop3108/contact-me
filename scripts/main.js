(function () {
  window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("*").forEach(
      el => {
        el.setAttribute("tabindex", 1)
      }
    )
    document.querySelector("#popups").innerHTML = `<div class="popup success_popup" id="success_popup"><div class="pop_container"><div class="icon_container"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M18.581 2.14L12.316.051a1 1 0 00-.632 0L5.419 2.14A4.993 4.993 0 002 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 00.812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 00-3.419-4.743zm-1.863 7.577l-4.272 4.272a1.873 1.873 0 01-1.335.553h-.033a1.872 1.872 0 01-1.345-.6l-2.306-2.4a1 1 0 111.441-1.382l2.244 2.34L15.3 8.3a1 1 0 011.414 1.414z" /> </svg></div><div class="info">Message sent successfully.</div></div></div><div class="popup error_popup" id="error_popup"><div class="pop_container"><div class="icon_container"> <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"> <path d="M18.581 2.14L12.316.051a1 1 0 00-.632 0L5.418 2.14A4.993 4.993 0 002 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 00.812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 00-3.419-4.743zM12 19a1 1 0 111-1 1 1 0 01-1 1zm1-5a1 1 0 01-2 0V6a1 1 0 012 0z" /> </svg></div><div class="info">Uh ohh, errors caught you</div></div></div>`;
  })
})();