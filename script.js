var mymap = L.map('mapid').setView([8.667918, -0.977783], 07);
	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3RhbGRpZ2l0YWwiLCJhIjoiY2lzbWIwMjg5MDBsdzJwbXgwNmlzb2hheSJ9.FKZvqxN3MiQK0OCJ9YLpGQ', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	
}).addTo(mymap);
L.marker([5.83, -0.24]).addTo(mymap)
	.bindPopup("<b>House available!</b><br />1 bed 1 bath"); //Use .openPopup(); to have the popup visible on start
L.marker([9.275622, -0.812988]).addTo(mymap)
	.bindPopup("<b>Hostel available!</b><br />4 room 2 bathroom");
	
/*{L.circle([51.508, -0.11], 500, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle."); */
var popup = L.popup();
function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(mymap);
}
mymap.on('click', onMapClick);
		
	document.getElementById("Submit").onclick=function(){
				document.getElementById("text").innerHTML="Thank you for your submission";
				
				var Lat=document.getElementById("Lat").value;
				var Lng=document.getElementById("Lng").value;
				var Name=document.getElementById("Name").value;
                var Type=document.getElementById("Type").value;
                var room=document.getElementById("room").value;
                var Other=document.getElementById("Other").value;
                var date=document.getElementById("date").value;
                var contact=document.getElementById("contact").value;

                alert("Please see you submission in map");
				
				/*if (Lat == 5) {
						
						alert("Well done! You got it!");
						
					} else {
						
						alert("Nope! The number was " + Name + Lat + Lng );
						
                    } 
                    */

					L.marker([Lat,Lng]).addTo(mymap)
                    .bindPopup(
                        "This is a "+ Type+ "<br />"+
                         "Address Provided: " + Name + "<br />" +
                        "There are " + room + " rooms availabe <br />"+ 
                        "Date ready to move in "+ date + "<br />" +
                        "Contact " + contact + "<br />" +
                        "Comments " + Other
                        

                );
                    
			
			};
			