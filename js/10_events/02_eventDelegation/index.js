// say we have a huge list of more 10 items
// if we want to add event listeners to all of list items it would be hard
// we use behaviour of event propogation here
// we write event handler to parent element, then we trigger from child. Here we can access child element's properties

document.querySelector(".listItems").addEventListener("click", (e) => {
  console.log(e.target, e.currentTarget);
});

// e.target -> element which triggered event
// e.currentTarget -> element to which event handler is attached
