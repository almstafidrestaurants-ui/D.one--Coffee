const buttons = document.querySelectorAll(".category-item");

const cards = document.querySelectorAll(".card");

/* فلترة الأقسام */

buttons.forEach(button => {

  button.addEventListener("click", () => {

    // active button
    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach(card => {

      if(card.dataset.category === filter){

        card.style.display = "block";

        setTimeout(() => {

          card.classList.add("show");

        }, 50);

      }

      else{

        card.style.display = "none";

        card.classList.remove("show");
      }

    });

  });

});

/* عرض قسم hot بالبداية */

cards.forEach(card => {

  if(card.dataset.category === "hot"){

    card.style.display = "block";

    setTimeout(() => {

      card.classList.add("show");

    }, 50);

  }

  else{

    card.style.display = "none";
  }

});





/* =======================================COFFEE MODAL ===========================================*/
function openModal(id){
  document.getElementById(id).style.display = "flex";
}

function closeModal(id){
  document.getElementById(id).style.display = "none";
}

