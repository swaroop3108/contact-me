(function () {
  let target__form = document.querySelector("#contact_form");

  function submit_form(e) {
    e.preventDefault();

    let name = document.querySelector("#name").value,
      email = document.querySelector("#email").value,
      msg = document.querySelector("#msg").value;

    pushEmail(name, email, msg);
  }

  const pushEmail = (name, email, msg) => {
    let s_pop = document.querySelector("#success_popup");

    Email.send({
      Host: "smtp.gmail.com",
      Username: "swaroopshri2019@gmail.com",
      Password: "jkotmalzoacdulej",
      To: "swaroopshri2019@gmail.com",
      From: email,
      Subject: `${name} has contacted you from the GitHub Contact`,
      Body: `${name} has contacted you, Email: ${email} <br> ${msg}`
    }).then(
      () => {
        s_pop.setAttribute("active", "")

        Email.send({
          Host: "smtp.gmail.com",
          Username: "swaroopshri2019@gmail.com",
          Password: "jkotmalzoacdulej",
          To: email,
          From: "swaroopshri2019@gmail.com",
          Subject: `Swaroop from The Codr Cafe`,
          Body: `Thanks for contacting me...`
        })

        setTimeout(() => {
          s_pop.removeAttribute("active")
        }, 10000);
      }
    );
  }

  target__form.addEventListener("submit", submit_form);
})();