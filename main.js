window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
// console.log(loader);