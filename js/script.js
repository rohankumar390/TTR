document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector(".nav-list");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function submitForm() {
  // You can add additional logic here for form submission,
  // such as sending data to a server using AJAX.
  alert('Form submitted successfully!');
}


function initMap() {
  // Replace latitude and longitude with the coordinates of your location
  const myLatLng = { lat: 37.7749, lng: -122.4194 };

  const map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 15,
  });

  const marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Your Location",
  });
}