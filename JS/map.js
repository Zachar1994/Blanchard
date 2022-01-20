ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 18
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка*/
      coordinates: [55.758468, 37.601088] // координаты точки
    }
  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-point.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

 

  // Размещение геообъекта на карте.
  /* myMap.geoObjects.add(myGeoObject); */
  myMap.geoObjects.add(myPlacemark);

} 