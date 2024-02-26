let center = [56.837051, 60.607428];
const map = document.querySelector(".contacts__map")
if (map) {
  setTimeout(function () {
    ymaps.ready(init);
  }, 500);
}


function init() {
  let map = new ymaps.Map('map-test', {
    center: center,
    zoom: 16,
    controls: []

  },
  {
    suppressMapOpenBlock: true
  });
  map.controls.remove('routeEditor');





  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']);


  var myPlacemark = new ymaps.Placemark([56.837051, 60.607428], {

  }, {
    iconLayout: 'default#image',
    iconImageHref: "/img/map.png",
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -30],
    suppressMapOpenBlock: true
  });


  map.geoObjects.add(myPlacemark);

}
