function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function initMap() {
  const myLatLng = { lat: 42.320649, lng: -71.046677 };

  const locations = [{lat: 42.312348008638146 ,lng: -71.03574159397986},
  {lat: 42.319279905928546  ,lng: -71.03820447690869},
  {lat: 42.323443475568276 ,lng: -71.04627999197247},
  {lat: 42.32735116526991,lng: -71.06175158794933},
  {lat: 42.32799827376325,lng: -71.06156958675922},
  {lat: 42.31240513297236 ,lng: -71.03990365599536},
  {lat: 42.31627657273479 ,lng: -71.03834669798383},
  {lat: 42.452145689325526 ,lng: -71.13590675510888},
  {lat: 44.198418972143465 ,lng: -71.67618642604792}];
  const z = 17;
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: z,
    center: locations[0],
    mapTypeId: 'satellite',
    mapId: '822f65b993a2b5fc',
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false
  });

  const map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: z,
    center: locations[1],
    mapTypeId: 'satellite',
    mapId: '822f65b993a2b5fc',
    disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false
  });

  const map3 = new google.maps.Map(document.getElementById("map3"), {
    zoom: z,
    center: locations[2],
    mapTypeId: 'satellite',
    mapId: '822f65b993a2b5fc',
    disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false
  });

  const map4 = new google.maps.Map(document.getElementById("map4"), {
    zoom: z,
    center: locations[3],
    mapTypeId: 'satellite',
    mapId: '822f65b993a2b5fc',
    disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false
  });

  const map5 = new google.maps.Map(document.getElementById("map5"), {
    zoom: z,
    center: locations[4],
    mapTypeId: 'satellite',
    mapId: '822f65b993a2b5fc',
    disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false
  });

  const map6 = new google.maps.Map(document.getElementById("map6"), {
    zoom: z,
    center: locations[5],
    mapTypeId: 'satellite',
    mapId: '822f65b993a2b5fc',
    disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false
  });

   const map7 = new google.maps.Map(document.getElementById("map7"), {
    zoom: z,
    center: locations[6],
    mapTypeId: 'satellite',
    mapId: '822f65b993a2b5fc',
    disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false
  });

   const map8 = new google.maps.Map(document.getElementById("map8"), {
    zoom: z,
    center: locations[7],
    mapTypeId: 'satellite',
    mapId: '822f65b993a2b5fc',
    disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false
  });

   const map9 = new google.maps.Map(document.getElementById("map9"), {
    zoom: z,
    center: locations[8],
    mapTypeId: 'satellite',
    mapId: '822f65b993a2b5fc',
    disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false
  });


  const loc = new google.maps.Marker({
    position: locations[0],
    map,
  });

  const loc2 = new google.maps.Marker({
    position: locations[1],
    map: map2,
  });

  new google.maps.Marker({
    position: locations[2],
    map: map3,
  });

  new google.maps.Marker({
    position: locations[3],
    map: map4,
  });

   new google.maps.Marker({
    position: locations[4],
    map: map5,
  });

  new google.maps.Marker({
    position: locations[5],
    map: map6,
  });

  new google.maps.Marker({
    position: locations[6],
    map: map7,
  });

  new google.maps.Marker({
    position: locations[7],
    map: map8,
  });

  new google.maps.Marker({
    position: locations[8],
    map: map9,
  });
/*
  const locationList = [{ lat: 42.320649, lng: -71.046677 }, { lat: 42.315255, lng: -71.049767 }];
  for (i = 0; i < locationList.length; i++){
  new google.maps.Marker({
    position: locationList[i],
    map,
  });
  }
*/


}

window.initMap = initMap;

