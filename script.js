// This code will add a button to the header that will open a modal with more information about the page.

var button = document.createElement("button");
button.innerHTML = "More Information";
button.onclick = function() {
  var modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = "<h2>More Information</h2><p>This is more information about the page.</p>";

  var div = document.createElement("div");
  div.className = "modal-content";
  div.appendChild(modal);

  var overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
  };

  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  modal.style.display = "block";
  overlay.style.display = "block";
};

document.querySelector(".header").appendChild(button);

