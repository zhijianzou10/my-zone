function inputAnimation() {
  const input = document.querySelector(".simple_form textarea");
  input.addEventListener("focus", (event) => {
    const eventInput = event.currentTarget;
    console.log(event);
    eventInput.closest(".container_comment").classList.add("open");

  } )
}

function closeAnimation() {
  const input = document.querySelector(".simple_form textarea");
  input.addEventListener("blur", (event) => {
  const eventInput = event.currentTarget;
  console.log(event);
  eventInput.closest(".container_comment").classList.remove("open");
})
}

// export {inputAnimation};

// export {closeAnimation};
