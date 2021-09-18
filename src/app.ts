import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const API = "XXX";

type geoRes = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

// declare var google: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enterAddress = addressInput.value;

  const url: string = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
    enterAddress
  )}&key=${API}`;
  axios
    .get<geoRes>(url)
    .then((res) => {
      if (res.data.status !== "OK") {
        throw new Error("取得失敗");
      }
      const coordinate = res.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map")!, {
        center: coordinate,
        zoom: 16,
      });
      new google.maps.Marker({ position: coordinate, map: map });
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
}

form.addEventListener("submit", searchAddressHandler);
