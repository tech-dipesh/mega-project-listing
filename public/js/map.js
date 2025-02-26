
// let mapToken = mapImport;
// maptilersdk.config.apiKey = mapToken;
// console.log(mapToken);

// const { coordinates } = require("@maptiler/sdk");
// 
// const { coordinates } = require("@maptiler/sdk");

// const map = new maptilersdk.Map({
//   container: "map", // container's id or the HTML element to render the map
//   style: maptilersdk.MapStyle.STREETS,
//   center: [83.4653, 27.6983],
//   zoom: 9,
// });

// // const marker = new maplibregl.Marker() // Create a new marker
// //   .setLngLat([77.1025, 28.7041]) // Set marker position: [longitude, latitude]
// //   .addTo(map);








//api imported from the script tag
let mapToken = mapImport;
maptilersdk.config.apiKey = mapToken;
console.log("Map Token:", mapToken);


const map = new maptilersdk.Map({
  container: "map", //html id
  style: maptilersdk.MapStyle.STREETS,
  center: coordinate,
  zoom: 9,
});

// Create and add a marker to the map using MapLibre GL.
const marker = new maplibregl.Marker({color: 'black' })
  .setLngLat(coordinate) // where i want to marked
  .addTo(map); //marker add

// console.log("Marker added at:", coordinate);




