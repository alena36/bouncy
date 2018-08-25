function initMap() {
    var myLatLng = {lat: 49.0914438, lng: 33.4126071};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });


    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: "https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png"
    });
}