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
      "Banning State Park",
      "A late 1800s sandstone quarry, this state park offers beautiful sandstone formations and stunning rapids. This park is popular for it's gorgeous hiking trails and challenging white water rafting.",
      "The Quarry Loop Trail, The Historic Banning Quarry",
      "P.O. Box 643, Sandstone, MN 55072",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00103&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00103.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00103_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00103_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00103_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00103_006.jpg"],
      "55072",
      "8am to 10pm",
      ["Kettle River", "Canoeing", "Historic Sandstone Quarry", "Wolf Creek Falls", "Hiking", "Kayaking", ""]
    ),

    new Parks(
      "central2",
      "Charles A. Lindbergh State Park",
      "This park contains 570 acres of land that is home to many historic structures, picnic areas and spring wildflowers.",
      "Pike Creek, Spring wildflowers",
      "1615 Lindbergh Drive South, Little Falls, MN 56345",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00136&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00136_006.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00136_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00136_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00136_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00136.jpg"],
      "56345",
      "8am to 10pm",
      ["Camping", "Historic Site", "Picnicking", "Spring Wildflowers", "Mississippi River", "Family Reunion Park", ""]
    ),

    new Parks(
      "central3",
      "Crow Wing State Park",
      "Home to former fur trading posts, this historic park has a unique position where the Crow Wing River meets the Mississipi River.",
      "Chippewa Lookout, Old Crow Wing Town Site",
      "3124 State Park Road, Brainerd, MN 56401",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00139&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00139.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00139_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00139_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00136_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00139_003.jpg"],
      "56401",
      "8am to 10pm",
      ["Camping", "Fishing", "Scenic Hiking Trail", "Historic Sites", "Canoeing", "Wildlife Observation Opportunities", ""]
    ),

    new Parks(
      "central4",
      "Cuyuna Country SRA",
      "This area contained multiple iron mines that have filled with water and fish. With amazing overlooks, deep lakes and biking trails, it's an area full of things to do.",
      "Cuyuna Lakes State Trail, Sagamore Snowshoeing",
      "307 3rd Street, Ironton, MN 56455",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=sra00302&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/sra00302.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00302_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00302_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00302_003.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00302_005.jpg"],
      "56455",
      "8am to 10pm",
      ["Camping", "Trout Fishing", "Canoeing", "Mountain Biking", "Scuba Diving", "Fat Biking", ""]
    ),

    new Parks(
      "central5",
      "Father Hennepin State Park",
      "This park contains the second largest in-state lake in Minnesota that is home to walley and perch.",
      "Pope Point, Lake Mille Lacs",
      "Box 397, Isle, MN 56342",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00142&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00142.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00142_012.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00142_010.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00142_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00142_006.jpg"],
      "56342",
      "8am to 10pm",
      ["Camping", "Fishing", "Wheelchair Accessible Fishing Piers", "Sandy Beach", "Albino Deer", ""]
    ),

    new Parks(
      "central6",
      "Interstate State Park",
      "This park is world famous for it's Glacial Potholes. These bedrock holes were formed by the St. Croix river after glaciers melted in the area.",
      "Glacial Potholes, Sandstone Bluff Trail",
      "PO Box 254, Taylor Falls, MN 55084",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00178&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00178.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00178_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00178_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00178_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00178_005.jpg"],
      "55084",
      "8am to 10pm",
      ["Scenic River Views", "Canoeing", "Camping", "Fishing", "Rock Climbing", "Pothole Viewing", ""]
    ),

    new Parks(
      "central7",
      "Lake Maria State Park",
      "This park is a great area for backpacking and wildlife observation. In the winter months, there are many places to cross-country ski and snowshoe.",
      "Hiking Club Trail, Blanding's Turtle",
      "11411 Clementa Avenue NW, Monticello, MN 55362",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00217&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00217.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00217_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00217_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00217_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00217_005.jpg"],
      "55362",
      "8am to 10pm",
      ["Backpacking Campsites", "Blandings Turtle", "Hiking", "Spring Wildflowers", "Fall Colors", "Nesting Osprey and Eagles", "Remote Camper Cabins", "Cross-Country Skiing", ""]
    ),

    new Parks(
      "central8",
      "Mille Lacs Kathio State Park",
      "With 35 miles of hiking trails, this park is a great spot to explore nature. It also holds the title of the fourth-largest park in the state.",
      "Touch the Earth Trail, Landmark Trail, Observation Tower",
      "15066 Kathio State Park Road, Onamia, MN 56359",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00232&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00232_002.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00232_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00232_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00232_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00232_006.jpg"],
      "56359",
      "8am to 10pm",
      ["Nature Programs", "Camping", "Swimming", "Playground", "100 Ft. Observation Tower", "Historic Sites", "Cross-Country Skiing", "Canoeing", ""]
    ),

    new Parks(
      "central9",
      "Savanna Portage State Park",
      "There are four lakes in the park that provide spots to fish. Visitors can also enjoy the 22 miles of hiking trails that this park has to offer.",
      "The Bog Trail, Lake Shumway Trail",
      "55626 Lake Place, McGregor, MN 55760",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00259&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00259.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00259_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00259_003.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00259_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00259_005.jpg"],
      "55760",
      "8am to 10pm",
      ["Hiking", "Swimming", "Fishing", "Continental Divide", "Snowmobiling", "Historic Sites", ""]
    ),

    new Parks(
      "central10",
      "St. Croix State Park",
      "With more than 34,000 acres, this park is the largest state park in Minnesota. There are a wide variety of activities to do within this massive park.",
      "Fire Tower, Yellowbanks Civilian Conservation Corps Camp",
      "30065 St. Croix Road, Hinckley, MN 55037",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00253&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00253.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00253_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00253_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00253_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00253_003.jpg"],
      "55037",
      "8am to 10pm",
      ["Camping", "Hiking", "Canoeing", "Birding", "Wildlife", "Firetower", ""]
    ),

    new Parks(
      "central11",
      "Wild River State Park",
      "This park offers year round naturalist programs and many recreational activities.",
      "Never's Dam, Sunrise Landing",
      "39797 Park Trail, Center City, MN 55012",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00254&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00254.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00254_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00254_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00254_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00254_005.jpg"],
      "55012",
      "8am to 10pm",
      ["Camping", "Canoeing", "Cross-Country Skiing", "McElroy Visitor Center", "Nevers Dam Overlook", "Wildlife", "Wildflowers", ""]
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
