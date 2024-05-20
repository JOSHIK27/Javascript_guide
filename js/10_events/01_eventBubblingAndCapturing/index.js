document.querySelector(".child").addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("Clicked");
  },
  true
);

document.querySelector(".parent").addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  true
);

// dom events have 2 phases, event capturing (into) and event bubbling (outwards)
// event starts from body to element and then bubbles away from element to body
// this mechanism is called event bubbling
// if we manipulate third parameter to true, click event is handled during capturing phase else during bubbling phase
