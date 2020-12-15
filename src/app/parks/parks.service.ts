import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Parks } from './park.model';

@Injectable({
  providedIn: 'root'
})
export class ParksService {

  /* Metro Parks Data */
  private _metroParks: Parks[] = [
    new Parks(
      "metro1",
      "Afton State Park",
      // "With a short drive from the Twin Cities, this park encompasses over 1600 acres of land along the St. Croix River. This park's trails cover prairies and forested ravines.",
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
      "Daily: 8am to 10pm",
      ["Camping", "Fishing", "Swimming", "Hiking", "Cross-Country Skiing", ""]
    ),
    new Parks(
      "metro2",
      "Fort Snelling State Park",
      // "Located in the middle of the Twin Cities, this park is filled with wild life across 2931 acres. The park is located south of Fort Snelling and occupies the land once inhabitated by traders and Native Americans.",
      "Pike Island Trail, Picnic Island",
      "101 Snelling Lake Road St. Paul, MN 55111",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00154&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00154_001.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00154_007.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00154_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00154_003.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00154_008.jpg"],
      "55111",
      "Daily: 8am to 10pm",
      ["Fishing", "Hiking", "Dakota Memorial", "Interpretive Exhibits", "Bike Trails/Connnections", "Cross-Country Skiing", ""]
    ),
    new Parks(
      "metro3",
      "Min. Valley State Rec. Area",
      // "Located along the Minnesota River, this area is a popular spot for canoeing, kayaking and fishing. This park contains a diverse trail system that includes wetlands, floodplain forests and blufftop oak savanna.",
      "Minnesota Valley State Trail, Minnesota River",
      "19825 Park Blvd, Jordan, MN 55352",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=sra00304&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/sra00304.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00304_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00304_003.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00304_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00304_005.jpg"],
      "55352",
      "Daily: 8am to 10pm",
      ["Camping", "Picnicking", "Hiking", "Horse Trails", "Wildlife Observation", ""]
    ),
    new Parks(
      "metro4",
      "William O'Brien State Park",
      // "This park is located along the St. Croix River and provides a great place for boating, canoeing, kayaking and fishing. With groomed trails and naturalist programs, it is great place to spend the day away from the Twin Cities.",
      "Riverside Trail, St. Croix River",
      "16821 O'Brien Trail N, Marine on St Croix, MN 55047",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00283&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00283.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00283_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00283_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00283_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00283_006.jpg"],
      "55047",
      "Daily: 8am to 10pm",
      ["Camping", "Fishing", "Canoeing", "Cross-Country Skiing", "Naturalist Programs", "Bird Watching", "Oak Savanna Restoration", ""]
    ),

  ];

  /* Central Parks Data */
  private _centralParks: Parks[] = [
    new Parks(
      "central1",
      "Banning State Park",
      // "A late 1800s sandstone quarry, this state park offers beautiful sandstone formations and stunning rapids. This park is popular for it's gorgeous hiking trails and challenging white water rafting.",
      "The Quarry Loop Trail, The Historic Banning Quarry",
      "P.O. Box 643, Sandstone, MN 55072",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00103&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00103.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00103_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00103_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00103_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00103_006.jpg"],
      "55072",
      "Daily: 8am to 10pm",
      ["Kettle River", "Canoeing", "Historic Sandstone Quarry", "Wolf Creek Falls", "Hiking", "Kayaking", ""]
    ),

    new Parks(
      "central2",
      "Charles A. Lindbergh State Park",
      // "This park contains 570 acres of land that is home to many historic structures, picnic areas and spring wildflowers.",
      "Pike Creek, Spring wildflowers",
      "1615 Lindbergh Drive South, Little Falls, MN 56345",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00136&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00136_006.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00136_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00136_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00136_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00136.jpg"],
      "56345",
      "Daily: 8am to 10pm",
      ["Camping", "Historic Site", "Picnicking", "Spring Wildflowers", "Mississippi River", "Family Reunion Park", ""]
    ),

    new Parks(
      "central3",
      "Crow Wing State Park",
      // "Home to former fur trading posts, this historic park has a unique position where the Crow Wing River meets the Mississipi River.",
      "Chippewa Lookout, Old Crow Wing Town Site",
      "3124 State Park Road, Brainerd, MN 56401",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00139&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00139.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00139_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00139_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00136_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00139_003.jpg"],
      "56401",
      "Daily: 8am to 10pm",
      ["Camping", "Fishing", "Scenic Hiking Trail", "Historic Sites", "Canoeing", "Wildlife Observation Opportunities", ""]
    ),

    new Parks(
      "central4",
      "Cuyuna Country SRA",
      // "This area contained multiple iron mines that have filled with water and fish. With amazing overlooks, deep lakes and biking trails, it's an area full of things to do.",
      "Cuyuna Lakes State Trail, Sagamore Snowshoeing",
      "307 3rd Street, Ironton, MN 56455",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=sra00302&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/sra00302.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00302_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00302_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00302_003.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SRA00302_005.jpg"],
      "56455",
      "Daily: 8am to 10pm",
      ["Camping", "Trout Fishing", "Canoeing", "Mountain Biking", "Scuba Diving", "Fat Biking", ""]
    ),

    new Parks(
      "central5",
      "Father Hennepin State Park",
      // "This park contains the second largest in-state lake in Minnesota that is home to walley and perch.",
      "Pope Point, Lake Mille Lacs",
      "Box 397, Isle, MN 56342",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00142&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00142.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00142_012.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00142_010.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00142_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00142_006.jpg"],
      "56342",
      "Daily: 8am to 10pm",
      ["Camping", "Fishing", "Wheelchair Accessible Fishing Piers", "Sandy Beach", "Albino Deer", ""]
    ),

    new Parks(
      "central6",
      "Interstate State Park",
      // "This park is world famous for it's Glacial Potholes. These bedrock holes were formed by the St. Croix river after glaciers melted in the area.",
      "Glacial Potholes, Sandstone Bluff Trail",
      "PO Box 254, Taylor Falls, MN 55084",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00178&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00178.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00178_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00178_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00178_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00178_005.jpg"],
      "55084",
      "Daily: 8am to 10pm",
      ["Scenic River Views", "Canoeing", "Camping", "Fishing", "Rock Climbing", "Pothole Viewing", ""]
    ),

    new Parks(
      "central7",
      "Lake Maria State Park",
      // "This park is a great area for backpacking and wildlife observation. In the winter months, there are many places to cross-country ski and snowshoe.",
      "Hiking Club Trail, Blanding's Turtle",
      "11411 Clementa Avenue NW, Monticello, MN 55362",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00217&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00217.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00217_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00217_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00217_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00217_005.jpg"],
      "55362",
      "Daily: 8am to 10pm",
      ["Backpacking Campsites", "Blandings Turtle", "Hiking", "Spring Wildflowers", "Fall Colors", "Nesting Osprey and Eagles", "Remote Camper Cabins", "Cross-Country Skiing", ""]
    ),

    new Parks(
      "central8",
      "Mille Lacs Kathio State Park",
      // "With 35 miles of hiking trails, this park is a great spot to explore nature. It also holds the title of the fourth-largest park in the state.",
      "Touch the Earth Trail, Landmark Trail, Observation Tower",
      "15066 Kathio State Park Road, Onamia, MN 56359",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00232&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00232_002.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00232_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00232_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00232_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00232_006.jpg"],
      "56359",
      "Daily: 8am to 10pm",
      ["Nature Programs", "Camping", "Swimming", "Playground", "100 Ft. Observation Tower", "Historic Sites", "Cross-Country Skiing", "Canoeing", ""]
    ),

    new Parks(
      "central9",
      "Savanna Portage State Park",
      // "There are four lakes in the park that provide spots to fish. Visitors can also enjoy the 22 miles of hiking trails that this park has to offer.",
      "The Bog Trail, Lake Shumway Trail",
      "55626 Lake Place, McGregor, MN 55760",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00259&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00259.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00259_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00259_003.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00259_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00259_005.jpg"],
      "55760",
      "Daily: 8am to 10pm",
      ["Hiking", "Swimming", "Fishing", "Continental Divide", "Snowmobiling", "Historic Sites", ""]
    ),

    new Parks(
      "central10",
      "St. Croix State Park",
      // "With more than 34,000 acres, this park is the largest state park in Minnesota. There are a wide variety of activities to do within this massive park.",
      "Fire Tower, Yellowbanks Civilian Conservation Corps Camp",
      "30065 St. Croix Road, Hinckley, MN 55037",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00253&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00253.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00253_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00253_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00253_005.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00253_003.jpg"],
      "55037",
      "Daily: 8am to 10pm",
      ["Camping", "Hiking", "Canoeing", "Birding", "Wildlife", "Firetower", ""]
    ),

    new Parks(
      "central11",
      "Wild River State Park",
      // "This park offers year round naturalist programs and many recreational activities.",
      "Never's Dam, Sunrise Landing",
      "39797 Park Trail, Center City, MN 55012",
      "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00254&type=stprk&style=default_large",
      "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00254.jpg",
      ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00254_001.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00254_002.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00254_004.jpg",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00254_005.jpg"],
      "55012",
      "Daily: 8am to 10pm",
      ["Camping", "Canoeing", "Cross-Country Skiing", "McElroy Visitor Center", "Nevers Dam Overlook", "Wildlife", "Wildflowers", ""]
    ),

  ];

  /* Northeast Parks Data */
  private _northeastParks: Parks[] =
    [
      new Parks(
        "northeast1",
        "Bear Head Lake State Park",
        // "Located near the Boundary Waters Canoe area, this park offers breathtaking views and a chance to see wildlife.",
        "Norberg Lake Trail, Holter Lake",
        "9301 Bear Head State Park Road, Ely, MN 55731",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00109&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00109.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/bear_head_lake_2.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/bear_head_lake_5.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/bear_head_lake_6.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/bear_head_lake_4.jpg"],
        "55012",
        "Daily: 8am to 10pm",
        ["Camping", "Fishing", "Hiking", "Wilderness Atmosphere", "Wildlife", "Lakeshore", ""]
      ),
      new Parks(
        "northeast2",
        "Cascade River State Park",
        // "Right off of Highway 61, this park offers trails, waterfalls and a great view of Lake Superior.",
        "Lookout Mountain, Cascade River Loop Trail",
        "3481 West Highway 61, Lutsen, MN 55612",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00133&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00133.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00133_001.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00133_002.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00133_006.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00133_005.jpg"],
        "55612",
        "Daily: 8am to 10pm",
        ["Hiking", "Camping", "Fishing", "Skiing", "Waterfalls", "Scenic Views", ""]
      ),
      new Parks(
        "northeast3",
        "Franz Jevne State Park",
        // "This park offers a wide variety of fish. Make sure to bring your fishing pole. In the winter, snowshoeing is allowed anywhere.",
        "Rainy River, The Sault Rapids",
        "State Highway 11, Birchdale, MN 56629",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00157&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00157.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/franz_jevne_4.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/franz_jevne_2.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/franz_jevne_5.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/franz_jevne_6.jpg"],
        "56629",
        "Daily: 8am to 10pm",
        ["Fishing", "Quiet Park", "Scenic Views", "Hiking", "Snowshoeing", ""]
      ),
      new Parks(
        "northeast4",
        "George H. Crosby Manitou State Park",
        // "This park is packed with beautiful landscapes and family friendly picnic areas.",
        "Yellow Birch Trail, Benson Lake",
        "5702 Highway 61, Silver Bay, MN 55614",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00163&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00163.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00163_001.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00163_002.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00163_004.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00163_006.jpg"],
        "55614",
        "Daily: 8am to 10pm",
        ["Camping", "Hiking", "Scenic Views", "Waterfalls", "Wildlife", "Snowshoeing", "Skiing", ""]
      ),
      new Parks(
        "northeast5",
        "Gooseberry Falls State Park",
        "Gateway Plaza, Fifth Falls Trails",
        "3206 Highway 61 East, Two Harbors, MN 55616",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00172&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00172.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00172_001.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00172_003.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00172_005.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00172_006.jpg"],
        "55616",
        "Daily: 8am to 10pm",
        ["Camping", "Stone Structures", "Wheelchair Accessible Trails", "Waterfalls", "Lake Superior", ""]
      ),
      new Parks(
        "northeast6",
        "Grand Portage State Park",
        "High Falls, Visitor Center",
        "9393 East Highway 61, Grand Portage, MN 55605",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00173&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00173.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00173_001.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00173_002.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00173_003.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00173_006.jpg"],
        "55605",
        "Daily: 8am to 10pm",
        ["Hiking", "Scenic Views", "Waterfalls", "Picnicking", "Wildflowers", ""]
      ),
      new Parks(
        "northeast7",
        "Hill Annex Mine State Park",
        "Mine and Fossil Tours, Visitor Center",
        "880 Gary St, Calumet, MN 55716",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00176&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00176.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00176_001.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00176_002.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00176_004.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00176_006.jpg"],
        "55716",
        "May 25th - Sept 1: Friday - Saturday, 9am to 5pm",
        ["Mine Tours", "Historic Site", "Scenic Views", "Picnicking", "Fossil Hunt", ""]
      ),
      new Parks(
        "northeast8",
        "Iron Range Off-Highway Vehicle SRA",
        "Off-highway trails, Mountain Biking",
        "7196 Pettit Road, Gilbert, MN 55741",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=SFT00006&type=stfor&style=lake_darkglow&bgcolor=116,127,175",
        "https://images.dnr.state.mn.us/destinations/state_parks/virtual_tours/iron_range/accessible/300x200/02.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/virtual_tours/iron_range/accessible/300x200/12.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/virtual_tours/iron_range/accessible/300x200/03.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/virtual_tours/iron_range/accessible/300x200/04.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/virtual_tours/iron_range/accessible/300x200/06.jpg"],
        "55741",
        "May - Labor Day: 8am to 7:30pm, Labor Day - November: 8am to 5:30pm, November - April: 8am to 3:30pm",
        ["Geocaching", "Mountain Biking", "Wash Station", "ATVing", "Dirt Biking", ""]
      ),
      new Parks(
        "northeast9",
        "Jay Cooke State Park",
        "High Trail, Oldenburg Point",
        "780 Highway 210, Carlton, MN 55718",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00187&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00187.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00187_001.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00187_002.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00187_006.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00187_004.jpg"],
        "55718",
        "Daily: 8am to 10pm",
        ["Camping", "Hiking", "Swinging Bridge", "Thomson Dam", "Pioneer Cemetery", "Biking", "Snowshoeing", ""]
      ),
      new Parks(
        "northeast10",
        "Judge C.R. Magney State Park",
        "Devil's Kettle, Grove Conzet WPA Camp",
        "4051 East Highway 61, Grand Marais, MN 55604",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00193&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00193.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00193_002.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00193_004.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00193_005.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00193_006.jpg"],
        "55604",
        "Daily: 8am to 10pm",
        ["Camping", "Hiking", "Waterfalls", "Fishing", "Picnicking", "Wildlife", "Snowshoeing", ""]
      ),
      new Parks(
        "northeast11",
        "Lake Vermillion-Soudan Underground Mine State Park",
        "Mine Tour, Alaska Shaft Loop",
        "Township Rd 4596, Soudan, MN 55782",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00285&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00285_002.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00285_001.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00285_003.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00285_005.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00285_004.jpg"],
        "55782",
        "Daily: 8am to 10pm",
        ["Mine Tours", "Hiking", "Campground", "Historic Sites", "Water Access", "Wildlife", "Snowshoeing", "Fishing", ""]
      ),
      new Parks(
        "northeast12",
        "McCarthy Beach State Park",
        "Pickerel Lake, Sturgeon Lake",
        "7622 McCarthy Beach Road, Side Lake, MN 55781",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00226&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00226.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/virtual_tours/mccarthy_beach/accessible/300x200/mb_01.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/virtual_tours/mccarthy_beach/accessible/300x200/mb_04.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/virtual_tours/mccarthy_beach/accessible/300x200/mb_06.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00226_003.jpg"],
        "55781",
        "Daily: 8am to 10pm",
        ["Mine Tours", "Hiking", "Campground", "Historic Sites", "Water Access", "Wildlife", "Snowshoeing", "Fishing", ""]
      ),
      new Parks(
        "northeast13",
        "Moose Lake State Park",
        "Agate Days, Geological Center",
        "4252 County Road 137, Moose Lake, MN 55767",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00239&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00239.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00239_003.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00239_002.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00239_004.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00239_001.jpg"],
        "55767",
        "Daily: 8am to 10pm",
        ["Fishing", "Wildflowers", "Family Friendly Activities", "Canoeing", "Wildlife", "Snowshoeing", "Swimming", "Camping", ""]
      ),
      new Parks(
        "northeast14",
        "Scenic State Park",
        "Fire Tower Trail, CCC Guest Cabin",
        "56956 Scenic Highway 7, Bigfork, MN 56628",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00262&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00262_001.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00262.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00262_005.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00262_001.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00262_003.jpg"],
        "56628",
        "Daily: 8am to 10pm",
        ["Camping", "Fishing", "Swimming", "Hiking", "Canoeing", "Historic Buildings", "Snowshoeing", "Cross-Country Skiing", ""]
      ),
      new Parks(
        "northeast15",
        "Schoolcraft State Park",
        "Old Grand Rapids Road, Mississippi and Vermilion Rivers",
        "9042 Schoolcraft Lane NE, Deer River, MN 56636",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00263&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00263.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00263_001.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00263_003.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00263_006.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00263_005.jpg"],
        "56636",
        "Daily: 8am to 10pm",
        ["Camping", "Hiking", "Canoeing", "Picnicking", "Fishing", "Snowshoeing", ""]
      ),
      new Parks(
        "northeast16",
        "Split Rock Lighthouse State Park",
        "Split Rock River Loop Trail, Pebble Beach",
        "3755 Split Rock Lighthouse Road, Two Harbors, MN 55616",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00266&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00266.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00266_002.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00266_003.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00266_004.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00266_005.jpg"],
        "55616",
        "Daily: 8am to 10pm",
        ["Camping", "Hiking", "Historic Lighthouse", "Picnicking", "Scenic Views", "Snowshoeing", "Waterfalls", "Cross-Country Skiing", ""]
      ),
      new Parks(
        "northeast17",
        "Temperance River State Park",
        "Hidden Falls, Cross River Trail",
        "5702 Highway 61, Silver Bay, MN 55614",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00268&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00268.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00268_001.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00268_003.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00268_005.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/SPK00268_002.jpg"],
        "55614",
        "Daily: 8am to 10pm",
        ["Camping", "Hiking", "Fishing", "Rock Climbing", "Scenic Views", "Snowshoeing", "Waterfalls", "Cross-Country Skiing", ""]
      ),
      new Parks(
        "northeast18",
        "Tettegouche State Park",
        "Tettegouche Lake Trail, High Falls",
        "5702 Highway 61 East, Silver Bay, MN 55614",
        "https://maps1.dnr.state.mn.us/cgi-bin/locator.cgi?id=spk00269&type=stprk&style=default_large",
        "https://images.dnr.state.mn.us/destinations/state_parks/banners/spk00269.jpg",
        ["https://images.dnr.state.mn.us/destinations/state_parks/1_large/tettegouche_8.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/tettegouche_1.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/tettegouche_2.jpg",
          "https://images.dnr.state.mn.us/destinations/state_parks/1_large/tettegouche_5.jpg"],
        "55614",
        "Daily: 8am to 10pm",
        ["Camping", "Hiking", "Waterfalls", "Rock Climbing", "Scenic Views", "Snowshoeing", "Waterfalls", "Cross-Country Skiing", "Wildlife", ""]
      ),
    ];

  /* Northwest Parks Data */
  private _northwestParks: Parks[] =
    [
      new Parks(
        "northwest1",
        "Big Bog SRA",
        "",
        "",
        "",
        "",
        [""],
        "",
        "",
        [""]
      ),
    ];

  /* Southeast Parks Data */
  private _southeastParks: Parks[] =
    [
      new Parks(
        "southeast1",
        "Beaver Creek Valley",
        "",
        "",
        "",
        "",
        [""],
        "",
        "",
        [""]
      ),
    ];

  /* Southwest Parks Data */
  private _southwestParks: Parks[] =
    [
      new Parks(
        "southwest1",
        "Big Stone Lake",
        "",
        "",
        "",
        "",
        [""],
        "",
        "",
        [""]
      ),
    ];

  /* Metro Parks Getters */
  get metroParks() {
    return [...this._metroParks]
  }

  getMetroParks(id: string) {
    return { ...this._metroParks.find((p) => p.id === id) };
  }

  /* Central Parks Getters */
  get centralParks() {
    return [...this._centralParks]
  }

  getCentralParks(id: string) {
    return { ...this._centralParks.find((p) => p.id === id) };
  }

  /* Northeast Parks Getters */
  get northeastParks() {
    return [...this._northeastParks]
  }

  getNortheastParks(id: string) {
    return { ...this._northeastParks.find((p) => p.id === id) };
  }

  /* Northwest Parks Getters */
  get northwestParks() {
    return [...this._northwestParks]
  }

  getNorthwestParks(id: string) {
    return { ...this._northwestParks.find((p) => p.id === id) };
  }

  /* Southeast Parks Getters */
  get southeastParks() {
    return [...this._southeastParks]
  }

  getSoutheastParks(id: string) {
    return { ...this._southeastParks.find((p) => p.id === id) };
  }

  /* Southwest Parks Getters */
  get southwestParks() {
    return [...this._southwestParks]
  }

  getSouthwestParks(id: string) {
    return { ...this._southwestParks.find((p) => p.id === id) };
  }

  /* Weather Api Getter */
  getWeather(zipcode: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${environment.weatherAPIKey}&units=imperial`)
  }

  constructor(private http: HttpClient) { }
}
