let metroAreaCenterCoordinates = [44.96, -93.2]  // Array of latitude and longitude 
let zoomLevel = 3   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let bridgeData = [
    {name: 'Verrazano-Narrows', location: 'New York, NY', span: 1298.4, location: [40.6066, -74.0447]},
    {name: 'Golden Gate Bridge', location: 'San Francisco and Marin, CA', span: 1280.2, location: [37.8199, -122.4783]},
    // add other bridges
]

bridgeData.forEach( function(bridge) {
    let marker = L.marker(bridge.location).bindPopup('This is a bridge').addTo(map)
})


// // Add some markers for Minneapolis College and Saint Paul College
// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup("Minnepolis College<br><a href='https://minneapolis.edu'>Website</a>")
//     .addTo(map)

// let stPaulCoordinates = [44.94839, -93.1099]
// let stpMarker = L.marker(stPaulCoordinates)
//     .bindPopup("Saint Paul College<br><a href='https://saintpaul.edu'>Website</a>")
//     .addTo(map)


// // Add a circle approximately around the Twin Cities metro 
// let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
//         color: 'green',  
//         radius: 30000,
//         fillOpacity: 0.2
//     })
//     .bindPopup("Twin Cities Metro Area")
//     .addTo(map)

