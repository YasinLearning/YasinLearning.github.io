import  Gallery from "next-gallery"


function Car(img) {
  return (
    <img
      src= {img}
      alt="A car"
      width="360" height="360" hspace="300"
    />
  );
}


export default function main() {
  var images = [
    {src: "car 1.jpg"},
    {src:"car 2.jpg"},
    {src:"Car 3.jpg"},
    {src:"car 4.jpg"},
    {src:"car 5.jpg"},
    {src:"car6.jpg"},
  ]
  return (
    <Gallery {...{images}} />
    )}