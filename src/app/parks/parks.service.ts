import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Parks } from './park.model';

@Injectable({
  providedIn: 'root'
})
export class ParksService {

  private _metroParks: Parks[] = [
    new Parks(
      "metro1",
      "Afton State Park",
      "With a short drive from the Twin Cities, this park encompasses over 1600 acres of land along the St. Croix River. This park's trails cover prairies and forested ravines.",
      "North River Trail, Restored Prairies",
      "6959 Peller Avenue South Hastings, MN 55033",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00100&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00100_003.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00100.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00100_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00100_003.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00100_006.jpg"
      ],
      "55033",
      "8am to 10pm",
      ["Camping", "Fishing", "Swimming", "Hiking", "Cross-Country Skiing", ""]
    ),
    new Parks(
      "metro2",
      "Fort Snelling State Park",
      "Located in the middle of the Twin Cities, this park is filled with wild life across 2931 acres. The park is located south of Fort Snelling and occupies the land once inhabitated by traders and Native Americans.",
      "Pike Island Trail, Picnic Island",
      "101 Snelling Lake Road St. Paul, MN 55111",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00154&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00154_001.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00154_007.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00154_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00154_003.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00154_008.jpg"],
      "55111",
      "8am to 10pm",
      ["Fishing", "Hiking", "Dakota Memorial", "Interpretive Exhibits", "Bike Trails/Connnections", "Cross-Country Skiing", ""]
    ),
    new Parks(
      "metro3",
      "Min. Valley State Rec. Area",
      "Located along the Minnesota River, this area is a popular spot for canoeing, kayaking and fishing. This park contains a diverse trail system that includes wetlands, floodplain forests and blufftop oak savanna.",
      "Minnesota Valley State Trail, Minnesota River",
      "19825 Park Blvd, Jordan, MN 55352",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=sra00304&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/sra00304.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00304_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00304_003.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00304_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00304_005.jpg"],
      "55352",
      "8am to 10pm",
      ["Camping", "Picnicking", "Hiking", "Horse Trails", "Wildlife Observation", ""]
    ),
    new Parks(
      "metro4",
      "William O'Brien State Park",
      "This park is located along the St. Croix River and provides a great place for boating, canoeing, kayaking and fishing. With groomed trails and naturalist programs, it is great place to spend the day away from the Twin Cities.",
      "Riverside Trail, St. Croix River",
      "16821 O'Brien Trail N, Marine on St Croix, MN 55047",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00283&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00283.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00283_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00283_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00283_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00283_006.jpg"],
      "55047",
      "8am to 10pm",
      ["Camping", "Fishing", "Canoeing", "Cross-Country Skiing", "Naturalist Programs", "Bird Watching", "Oak Savanna Restoration", ""]
    ),

  ];

  private _centralParks: Parks[] = [
    new Parks(
      "central1",
      "Central Park",
      "A very nice park to swim",
      "",
      "123 Yellow Drive Minnesota 55555",
      "",
      "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00100_003.jpg",
      [],
      "55408",
      "8am to 10pm",
      ["stuff", "stuff"]
    ),

  ];

  get metroParks() {
    return [...this._metroParks]
  }

  getMetroParks(id: string) {
    return { ...this._metroParks.find((p) => p.id === id) };
  }

  get centralParks() {
    return [...this._centralParks]
  }

  getCentralParks(id: string) {
    return { ...this._centralParks.find((p) => p.id === id) };
  }

  getWeather(zipcode: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${environment.weatherAPIKey}&units=imperial`)
  }

  constructor(private http: HttpClient) { }
}
