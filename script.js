const x = document.getElementById("geodemo");

function getLocation() {  
  
  if (navigator.geolocation) { 
  
  navigator.geolocation.getCurrentPosition(showPosition);  }
else {  
  x.innerHTML = "Geolocation is not supported by this browser.";  }}

function showPosition(position) {
x.innerHTML = "Latitude: " + position.coords.latitude +  "<br>Longitude: " + position.coords.longitude;}


function showError(error) {
switch(error.code) {
case error.PERMISSION_DENIED:
x.innerHTML = "User denied the request for Geolocation."
break;
case error.POSITION_UNAVAILABLE:
x.innerHTML = "Location information is unavailable."
break;
case error.TIMEOUT:
x.innerHTML = "The request to get user location timed out."
break;
case error.UNKNOWN_ERROR:
x.innerHTML = "An unknown error occurred."
break;}
}


const y = document.getElementById("geodemo2");function getLocation2() {
if (navigator.geolocation) {   navigator.geolocation.watchPosition(showPosition);  } 
else {    y.innerHTML = "Geolocation is not supported by this browser.";  }}
function showPosition(position) {  y.innerHTML = "Latitude: " + position.coords.latitude +  "<br>Longitude: " + position.coords.longitude;}



// let newRequest = fetch(url, [options])


fetch('https://hello.free.beeceptor.com')
  
.then(response => response.json())
  
.then(data => console.log(data));


const url = "https://api.nasa.gov/";

fetch(url)
.then(data => data.json())
.then((json) => {
// alert(JSON.stringify(json));
document.getElementById("geo2").innerHTML = JSON.stringify(json);

})


const url2 = 'https://jsonplaceholder.typicode.com/todos/10';

const data = { title: "The Matrix", year: "1994" };

fetch(
url2,
{
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data),
method: "POST"
}
)

.then(data => data.json())
.then((json) => {
// alert(JSON.stringify(data));
document.getElementById("geo3").innerHTML = JSON.stringify(data);
});


// fetch('https://pixabay.com/photos/lioness-lion-feline-grass-wildlife-8503063/')
// .then(response => response.blob())
// .then(myBlob => {
//   const objectURL = URL.createObjectURL(myBlob);
//   const myImage = document.querySelector('img');
//   myImage.src = objectURL;
// })
// .catch(error => {
//   console.error('There has been a problem with your fetch operation:', error);
// });

const request = new XMLHttpRequest();

const url3 = 'https://api.nasa.gov/';
request.open("GET", url);
request.send();

request.onload = (e) => {
// alert(request.response);
document.getElementById("canvas").innerHTML = request.response;
}


fetch('https://whale.free.beeceptor.com/todos')

.then(response => response.json())

.then(data => console.log(data));


const url4 = "https://whale.free.beeceptor.com/todos";

