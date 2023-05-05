function insertAfter(newEl, existingEl) {
  const parent = existingEl.parentNode;
  const nextSibling = existingEl.nextSibling;
  if (nextSibling) {
    parent.insertBefore(newEl, nextSibling);
  } else {
    parent.appendChild(newEl);
  }
} // explanation - this function will insert a new element after an existing element in the DOM. If the existing element has a next sibling, the new element will be inserted before that sibling. If not, the new element will be appended to the end of the parent element.

// New element to insert
const li = document.createElement("li");
li.textContent = "Insert Me After!";

// Existing element to insert after
const firstItem = document.querySelector("li:first-child");

// Our custom function
insertAfter(li, firstItem);
