'use strict';

function initMap() {
    var mymap = L.map('mapid').setView([51.859563,4.419426],18);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoicm9uYWxkZGV6YW5nZXIiLCJhIjoiY2ptNnA3dmtwMTkwbjNwcXJwOHF6b2N0MiJ9.3EDY9-5S9O92B-PF0IFnvg', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);
    var marker = L.marker([51.859563,4.419426]).addTo(mymap);
    marker.bindPopup("<b>Chiropractie van Leeuwen</b>").openPopup();
}

document.addEventListener('DOMContentLoaded', function () {

  // carousels and accordians
  var carousels = bulmaCarousel.attach();
  var accordions = bulmaAccordion.attach();

  // Dropdowns in navbar
  var $dropdowns = getAll('.navbar-item.has-dropdown:not(.is-hoverable)');

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.stopPropagation();
        $el.classList.toggle('is-active');
      });
    });

    document.addEventListener('click', function (event) {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $dropdowns.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Close dropdowns if ESC pressed
  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeDropdowns();
    }
  });

  // Toggles
  var $burgers = getAll('.burger');

  if ($burgers.length > 0) {
    $burgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Functions
  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
});