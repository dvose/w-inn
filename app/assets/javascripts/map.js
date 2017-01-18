function initialize() {
    if($('#map').length){
        var latlng, map, marker, infobox;

        var icon_url = 'img/map-marker.png';

        // Add default address or leave blank
        var address = $('#map').data('default-address');

        var map_type = 'ROADMAP';

        if($('body').find('#google-map-contact').length !== 0){
            var place = ['Default Contact Address', -34.028249, 151.157507];
        } else if ($('body').find('#google-map-attraction').length !== 0){
            var place = ['Default Attraction Address', 52.8666212, -1.2124111];
        }

        var geocoder = new google.maps.Geocoder();

        geocoder.geocode({'address' : address}, function(results, status) {
            if(status == google.maps.GeocoderStatus.OK){
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
            } else {
                var lat = place[1];
                var lng = place[2];
            }
            latlng = new google.maps.LatLng(lat, lng);

            // Map Option
            var mapOptions = {
                zoom: 17,
                center: latlng,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId[map_type]
            };

            /* Create Map*/
            map = new google.maps.Map(document.getElementById('map'), mapOptions);

            /* Create Marker */
            marker =  new google.maps.Marker({
                position: latlng,
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                icon: {
                    url: icon_url,
                    size: new google.maps.Size(23, 37),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(15,40)
                }
            });
            /**********/

            /* Create Infobox */
            if($('.google-map').find('#map-infobox').length !== 0){
                var defaultInfo = document.getElementById("map-infobox");

                infobox = new InfoBox({
                    content: defaultInfo,
                    disableAutoPan: false,
                    pixelOffset: new google.maps.Size(-113, -165),
                    boxStyle: {
                        width: "220px"
                    },
                    closeBoxMargin: "0px -15px 0 0",
                    closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
                    infoBoxClearance: new google.maps.Size(1, 1)
                });
                infobox.open(map, marker);
            }// end if
            /*********/
        });// END geocode



        // Get Location from Contact Page
        $('.widget_location .location').each(function(){
            $(this).children('a').on('click', function(){
                var getAddress = $(this).parent('.location').data('contact-address');
                var getName = $(this).parent('.location').data('contact-name');

                clickToMoveMap(getAddress, getName);
            });
        });

        // Get Location from Attraction Page
        $('.site-content .infomation').each(function(){
            $(this).find('a.getLatlgn').on('click', function(){
                var getAddress = $(this).data('attraction-address');
                var getName = $(this).data('attraction-name');

                clickToMoveMap(getAddress, getName);
            });
        });

        function clickToMoveMap(getAddress, getName){
            if (getAddress !== undefined && getName !== undefined){
                geocoder.geocode({'address' : getAddress}, function(results, status){
                    if(status == google.maps.GeocoderStatus.OK){
                        var customlat = results[0].geometry.location.lat();
                        var customlng = results[0].geometry.location.lng();
                    } else {
                        var customlat = place[1];
                        var customlng = place[2];
                        // console.log('false');

                        getName = place[0];
                    }

                    // Move map
                    latlng = new google.maps.LatLng(customlat,customlng);
                    map.panTo(latlng);

                    // Add Marker
                    marker.setMap(null);
                    marker = new google.maps.Marker({
                        position: {lat: customlat, lng: customlng},
                        map: map,
                        title: getName,
                        // animation: google.maps.Animation.DROP,
                        draggable: false,
                        icon: {
                            url: icon_url,
                            size: new google.maps.Size(23, 37),
                            origin: new google.maps.Point(0,0),
                            anchor: new google.maps.Point(15,40)
                        }
                    });

                    // Add Infobox
                    if($('.google-map').find('#map-infobox').length !== 0){
                        if(getName.length !== 0){
                            $('#map-infobox').find('h2').empty().html(getName);
                        } else {
                            $('#map-infobox').find('h2').empty();
                        }
                        $('#map-infobox').find('p').empty().html(getAddress);

                        infobox.open(map, marker);
                    } else {
                        // Create new address from recent click
                        var htmlAddress = '<div id="map-infobox"><div class="bodyContent"><h2 class="h4">' + getName + '</h2><p>' + getAddress + '</p></div></div>';
                        var parser = new DOMParser(),
                            newDOM = parser.parseFromString(htmlAddress, "text/html"),
                            nowAddress = newDOM.firstChild;

                        infobox = new InfoBox({
                            content: nowAddress,
                            disableAutoPan: false,
                            pixelOffset: new google.maps.Size(-113, -165),
                            boxStyle: {
                                width: "220px"
                            },
                            closeBoxMargin: "0px -15px 0 0",
                            closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
                            infoBoxClearance: new google.maps.Size(1, 1)
                        });
                        infobox.open(map, marker);
                    }
                });
            }
        }
    }
}
google.maps.event.addDomListener(window, 'load', initialize);