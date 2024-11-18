window.initMap = function () {
    var southWest = L.latLng(-30,80),
        northEast = L.latLng(30,160),
        bounds = L.latLngBounds(southWest, northEast);
    map = L.map('map',{zoomControl: false,attributionControl: false,maxBounds: bounds,minZoom: 4}).setView([-7.093930, 107.50965], 10);

    var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=581a69ec-f6c0-4c6b-8403-d8a8d2082a28', {
        maxZoom: 12
    }).addTo(map);  
    
    kecamatan = L.geoJson(null, {style: style,onEachFeature: getKecamatan});
    omnivore.geojson('data/ina_prov.json', null, kecamatan).on('ready', function() {
            getMap(2022);
    }).setZIndex(-999).bringToBack().addTo(map);

    kabkota = L.geoJson(null, {style: style,onEachFeature: getKabkota});
    omnivore.geojson('data/kabkota.json', null, kabkota).on('ready', function() {
            getMap2(2022);
    }).setZIndex(-999).bringToBack().addTo(map)

    
    function getKecamatan(feature, layer) {
        layer.on('click', function(e) {
            var feature = layer.toGeoJSON();
            indices = ["A","B","C","D","E"];
            document.getElementById("info-location").innerHTML = feature.properties.KECAMATAN;
            summaryValue = feature.properties.index_all;
            index1Value = feature.properties.index_1;
            index2Value = feature.properties.index_2;
            index3Value = feature.properties.index_3;
            index4Value = feature.properties.index_4;
            index5Value = feature.properties.index_5;
            index6Value = feature.properties.index_6;
            index7Value = feature.properties.index_7;
            index8Value = feature.properties.index_8;
            document.getElementById("info-index-summary").innerHTML = summaryValue;
            document.getElementById("info-index-summary").parentNode.style.backgroundColor = (summaryValue < 36 ? '#e67c73' : (summaryValue < 52 ? '#f1a96c' : (summaryValue < 68 ? '#ffd567' : (summaryValue < 84 ? '#abc978' : '#56bb8a'))));
            document.getElementById("info-index-1").innerHTML = index1Value;
            document.getElementById("info-index-1").style.backgroundColor = (index1Value == "A" ? '#56bb8a' : (index1Value == "B" ? '#abc978' : (index1Value == "C" ? '#ffd567' : (index1Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-2").innerHTML = index2Value;
            document.getElementById("info-index-2").style.backgroundColor = (index2Value == "A" ? '#56bb8a' : (index2Value == "B" ? '#abc978' : (index2Value == "C" ? '#ffd567' : (index2Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-3").innerHTML = index3Value;
            document.getElementById("info-index-3").style.backgroundColor = (index3Value == "A" ? '#56bb8a' : (index3Value == "B" ? '#abc978' : (index3Value == "C" ? '#ffd567' : (index3Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-4").innerHTML = index4Value;
            document.getElementById("info-index-4").style.backgroundColor = (index4Value == "A" ? '#56bb8a' : (index4Value == "B" ? '#abc978' : (index4Value == "C" ? '#ffd567' : (index4Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-5").innerHTML = index5Value;
            document.getElementById("info-index-5").style.backgroundColor = (index5Value == "A" ? '#56bb8a' : (index5Value == "B" ? '#abc978' : (index5Value == "C" ? '#ffd567' : (index5Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-6").innerHTML = index6Value;
            document.getElementById("info-index-6").style.backgroundColor = (index6Value == "A" ? '#56bb8a' : (index6Value == "B" ? '#abc978' : (index6Value == "C" ? '#ffd567' : (index6Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-7").innerHTML = index7Value;
            document.getElementById("info-index-7").style.backgroundColor = (index7Value == "A" ? '#56bb8a' : (index7Value == "B" ? '#abc978' : (index7Value == "C" ? '#ffd567' : (index7Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-8").innerHTML = index8Value;        
            document.getElementById("info-index-8").style.backgroundColor = (index8Value == "A" ? '#56bb8a' : (index8Value == "B" ? '#abc978' : (index8Value == "C" ? '#ffd567' : (index8Value == "C" ? '#f1a96c' : '#e67c73'))));
            L.DomEvent.stopPropagation(e);
        });
    };

    function getProvinsi(feature, layer) {
        layer.on('click', function(e) {
            var feature = layer.toGeoJSON();
            indices = ["A","B","C","D","E"];
            document.getElementById("info-location").innerHTML = feature.properties.FIRST_WADM;
            summaryValue = feature.properties.index_all;
            index1Value = feature.properties.index_1;
            index2Value = feature.properties.index_2;
            index3Value = feature.properties.index_3;
            index4Value = feature.properties.index_4;
            index5Value = feature.properties.index_5;
            index6Value = feature.properties.index_6;
            index7Value = feature.properties.index_7;
            index8Value = feature.properties.index_8;
            document.getElementById("info-index-summary").innerHTML = summaryValue;
            document.getElementById("info-index-summary").parentNode.style.backgroundColor = (summaryValue < 36 ? '#e67c73' : (summaryValue < 52 ? '#f1a96c' : (summaryValue < 68 ? '#ffd567' : (summaryValue < 84 ? '#abc978' : '#56bb8a'))));
            document.getElementById("info-index-1").innerHTML = index1Value;
            document.getElementById("info-index-1").style.backgroundColor = (index1Value == "A" ? '#56bb8a' : (index1Value == "B" ? '#abc978' : (index1Value == "C" ? '#ffd567' : (index1Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-2").innerHTML = index2Value;
            document.getElementById("info-index-2").style.backgroundColor = (index2Value == "A" ? '#56bb8a' : (index2Value == "B" ? '#abc978' : (index2Value == "C" ? '#ffd567' : (index2Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-3").innerHTML = index3Value;
            document.getElementById("info-index-3").style.backgroundColor = (index3Value == "A" ? '#56bb8a' : (index3Value == "B" ? '#abc978' : (index3Value == "C" ? '#ffd567' : (index3Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-4").innerHTML = index4Value;
            document.getElementById("info-index-4").style.backgroundColor = (index4Value == "A" ? '#56bb8a' : (index4Value == "B" ? '#abc978' : (index4Value == "C" ? '#ffd567' : (index4Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-5").innerHTML = index5Value;
            document.getElementById("info-index-5").style.backgroundColor = (index5Value == "A" ? '#56bb8a' : (index5Value == "B" ? '#abc978' : (index5Value == "C" ? '#ffd567' : (index5Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-6").innerHTML = index6Value;
            document.getElementById("info-index-6").style.backgroundColor = (index6Value == "A" ? '#56bb8a' : (index6Value == "B" ? '#abc978' : (index6Value == "C" ? '#ffd567' : (index6Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-7").innerHTML = index7Value;
            document.getElementById("info-index-7").style.backgroundColor = (index7Value == "A" ? '#56bb8a' : (index7Value == "B" ? '#abc978' : (index7Value == "C" ? '#ffd567' : (index7Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-8").innerHTML = index8Value;        
            document.getElementById("info-index-8").style.backgroundColor = (index8Value == "A" ? '#56bb8a' : (index8Value == "B" ? '#abc978' : (index8Value == "C" ? '#ffd567' : (index8Value == "C" ? '#f1a96c' : '#e67c73'))));
            L.DomEvent.stopPropagation(e);
        });
    };
    
    function getKabkota(feature, layer) {
        layer.on('click', function(e) {
            var feature = layer.toGeoJSON();
            indices = ["A","B","C","D","E"];
            document.getElementById("info-location").innerHTML = feature.properties.WADMKK;
            summaryValue = feature.properties.index_all;
            index1Value = feature.properties.index_1;
            index2Value = feature.properties.index_2;
            index3Value = feature.properties.index_3;
            index4Value = feature.properties.index_4;
            index5Value = feature.properties.index_5;
            index6Value = feature.properties.index_6;
            index7Value = feature.properties.index_7;
            index8Value = feature.properties.index_8;
            document.getElementById("info-index-summary").innerHTML = summaryValue;
            document.getElementById("info-index-summary").parentNode.style.backgroundColor = (summaryValue < 36 ? '#e67c73' : (summaryValue < 52 ? '#f1a96c' : (summaryValue < 68 ? '#ffd567' : (summaryValue < 84 ? '#abc978' : '#56bb8a'))));
            document.getElementById("info-index-1").innerHTML = index1Value;
            document.getElementById("info-index-1").style.backgroundColor = (index1Value == "A" ? '#56bb8a' : (index1Value == "B" ? '#abc978' : (index1Value == "C" ? '#ffd567' : (index1Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-2").innerHTML = index2Value;
            document.getElementById("info-index-2").style.backgroundColor = (index2Value == "A" ? '#56bb8a' : (index2Value == "B" ? '#abc978' : (index2Value == "C" ? '#ffd567' : (index2Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-3").innerHTML = index3Value;
            document.getElementById("info-index-3").style.backgroundColor = (index3Value == "A" ? '#56bb8a' : (index3Value == "B" ? '#abc978' : (index3Value == "C" ? '#ffd567' : (index3Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-4").innerHTML = index4Value;
            document.getElementById("info-index-4").style.backgroundColor = (index4Value == "A" ? '#56bb8a' : (index4Value == "B" ? '#abc978' : (index4Value == "C" ? '#ffd567' : (index4Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-5").innerHTML = index5Value;
            document.getElementById("info-index-5").style.backgroundColor = (index5Value == "A" ? '#56bb8a' : (index5Value == "B" ? '#abc978' : (index5Value == "C" ? '#ffd567' : (index5Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-6").innerHTML = index6Value;
            document.getElementById("info-index-6").style.backgroundColor = (index6Value == "A" ? '#56bb8a' : (index6Value == "B" ? '#abc978' : (index6Value == "C" ? '#ffd567' : (index6Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-7").innerHTML = index7Value;
            document.getElementById("info-index-7").style.backgroundColor = (index7Value == "A" ? '#56bb8a' : (index7Value == "B" ? '#abc978' : (index7Value == "C" ? '#ffd567' : (index7Value == "C" ? '#f1a96c' : '#e67c73'))));
            document.getElementById("info-index-8").innerHTML = index8Value;        
            document.getElementById("info-index-8").style.backgroundColor = (index8Value == "A" ? '#56bb8a' : (index8Value == "B" ? '#abc978' : (index8Value == "C" ? '#ffd567' : (index8Value == "C" ? '#f1a96c' : '#e67c73'))));
            L.DomEvent.stopPropagation(e);
        });
    }

    function style(feature) {
        return {
            weight: 0.5,
            // opacity: 0.75,
            fillColor: '#545454',
            color: '#000',
            fillOpacity: 0.2,
            opacity: 0.9
        };
    }
    map.on('click', function(){
        document.getElementById("info-location").innerHTML = "Kabupaten Cianjur";
        summaryValue = summary.index_all;
        index1Value = summary.index_1;
        index2Value = summary.index_2;
        index3Value = summary.index_3;
        index4Value = summary.index_4;
        index5Value = summary.index_5;
        index6Value = summary.index_6;
        index7Value = summary.index_7;
        index8Value = summary.index_8;
        document.getElementById("info-index-summary").innerHTML = summaryValue;
            document.getElementById("info-index-summary").parentNode.style.backgroundColor = (summaryValue < 36 ? '#e67c73' : (summaryValue < 52 ? '#f1a96c' : (summaryValue < 68 ? '#ffd567' : (summaryValue < 84 ? '#abc978' : '#56bb8a'))));
        document.getElementById("info-index-1").innerHTML = index1Value;
        document.getElementById("info-index-1").style.backgroundColor = (index1Value == "A" ? '#56bb8a' : (index1Value == "B" ? '#abc978' : (index1Value == "C" ? '#ffd567' : (index1Value == "C" ? '#f1a96c' : '#e67c73'))));
        document.getElementById("info-index-2").innerHTML = index2Value;
        document.getElementById("info-index-2").style.backgroundColor = (index2Value == "A" ? '#56bb8a' : (index2Value == "B" ? '#abc978' : (index2Value == "C" ? '#ffd567' : (index2Value == "C" ? '#f1a96c' : '#e67c73'))));
        document.getElementById("info-index-3").innerHTML = index3Value;
        document.getElementById("info-index-3").style.backgroundColor = (index3Value == "A" ? '#56bb8a' : (index3Value == "B" ? '#abc978' : (index3Value == "C" ? '#ffd567' : (index3Value == "C" ? '#f1a96c' : '#e67c73'))));
        document.getElementById("info-index-4").innerHTML = index4Value;
        document.getElementById("info-index-4").style.backgroundColor = (index4Value == "A" ? '#56bb8a' : (index4Value == "B" ? '#abc978' : (index4Value == "C" ? '#ffd567' : (index4Value == "C" ? '#f1a96c' : '#e67c73'))));
        document.getElementById("info-index-5").innerHTML = index5Value;
        document.getElementById("info-index-5").style.backgroundColor = (index5Value == "A" ? '#56bb8a' : (index5Value == "B" ? '#abc978' : (index5Value == "C" ? '#ffd567' : (index5Value == "C" ? '#f1a96c' : '#e67c73'))));
        document.getElementById("info-index-6").innerHTML = index6Value;
        document.getElementById("info-index-6").style.backgroundColor = (index6Value == "A" ? '#56bb8a' : (index6Value == "B" ? '#abc978' : (index6Value == "C" ? '#ffd567' : (index6Value == "C" ? '#f1a96c' : '#e67c73'))));
        document.getElementById("info-index-7").innerHTML = index7Value;
        document.getElementById("info-index-7").style.backgroundColor = (index7Value == "A" ? '#56bb8a' : (index7Value == "B" ? '#abc978' : (index7Value == "C" ? '#ffd567' : (index7Value == "C" ? '#f1a96c' : '#e67c73'))));
        document.getElementById("info-index-8").innerHTML = index8Value;        
        document.getElementById("info-index-8").style.backgroundColor = (index8Value == "A" ? '#56bb8a' : (index8Value == "B" ? '#abc978' : (index8Value == "C" ? '#ffd567' : (index8Value == "C" ? '#f1a96c' : '#e67c73'))));        
    });

};

window.addMapLayer = function (container,position) {
    let layer = L.control({position:position});
    layer.onAdd = function(map){
        this._div = L.DomUtil.get(container)
        return this._div
    }
    layer.addTo(map);
    if (container == 'map-zoom') {
        document.getElementById("in").addEventListener("click", function() {
            if (map.getZoom() < 16) {
                map.setZoom(map.getZoom() + 1)
            }
        });
        document.getElementById("out").addEventListener("click", function() {
            if (map.getZoom() > 7) {
                map.setZoom(map.getZoom() - 1)
            }
        });
    }

};

function getMap(value){
    
    fetch('data/sample.json?', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        kecamatan.eachLayer(function(layer) {
            var feature = layer.toGeoJSON();
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i].ID_PROV == feature.properties.ID_PROV) {
                    console.log(data.data[i].value)
                    if(data.data[i].value < 36){
                        // dataa = data.data[i].ID_PROV
                        namaprovinsi = feature.properties.FIRST_WADM
                        color = '#7E2600';
                            layer.bindPopup("<p style='background-color:#7E2600;margin-top:0;margin-bottom:0;text-transform: uppercase;font-weight: bold'>" + feature.properties.FIRST_WADM + 
                            "</p>Value : " + data.data[i].value + "<br>Indeks : " + feature.properties.Indeks + "<br>Ketahanan : " + data.data[i].Ketahanan + 
                            "<p class='stats-btn' onclick='getMap3(namaprovinsi)' style='margin:2px 0 2px 0;background-color:#00009f'>Informasi Detail</p>" +
                            "<p style='background-color:#7E2600;margin-top:0;margin-bottom:0'>Sangat Rentan</p>");
                    }else if(data.data[i].value < 52){
                        namaprovinsi = feature.properties.FIRST_WADM
                        color = '#C83C00';
                            layer.bindPopup("<p style='background-color:#C83C00;margin-top:0;margin-bottom:0;text-transform: uppercase;font-weight: bold'>" + feature.properties.FIRST_WADM + 
                            "</p>Value : " + data.data[i].value + "<br>Indeks : " + feature.properties.Indeks + "<br>Ketahanan : " + data.data[i].Ketahanan + 
                            "<p class='stats-btn' onclick='getMap3(namaprovinsi)' style='margin:2px 0 2px 0;background-color:#00009f'>Informasi Detail</p>" +
                            "<p style='background-color:#C83C00;margin-top:0;margin-bottom:0'>Rentan</p>");
                    }else if(data.data[i].value < 68){
                        namaprovinsi = feature.properties.FIRST_WADM
                        color = '#00800D';
                            layer.bindPopup("<p style='background-color:#00800D;margin-top:0;margin-bottom:0;text-transform: uppercase;font-weight: bold'>" + feature.properties.FIRST_WADM + 
                            "</p>Value : " + data.data[i].value + "<br>Indeks : " + feature.properties.Indeks + "<br>Ketahanan : " + data.data[i].Ketahanan + 
                            "<p class='stats-btn' onclick='getMap3(namaprovinsi)' style='margin:2px 0 2px 0;background-color:#00009f'>Informasi Detail</p>" + 
                            "<p style='background-color:#00800D;margin-top:0;margin-bottom:0'>Aman</p>");
                    }else if(data.data[i].value < 84){
                        namaprovinsi = feature.properties.FIRST_WADM
                        color = '#004F08';
                            layer.bindPopup("<p style='background-color:#004F08;margin-top:0;margin-bottom:0;text-transform: uppercase;font-weight: bold'>" + feature.properties.FIRST_WADM + 
                            "</p>Value : " + data.data[i].value + "<br>Indeks : " + feature.properties.Indeks + "<br>Ketahanan : " + data.data[i].Ketahanan + 
                            "<p class='stats-btn' onclick='getMap3(namaprovinsi)' style='margin:2px 0 2px 0;background-color:#00009f'>Informasi Detail</p>" +
                            "<p style='background-color:#004F08;margin-top:0;margin-bottom:0'>Sangat Aman</p>");
                    }else{
                        color = '#ffffff';
                            layer.bindPopup(feature.properties.FIRST_WADM + "<br>Value : " + data.data[i].value + "<br>Tidak ada data");
                    }

                    layer.setStyle({
                        color: '#111',
                        fillColor: color,
                        strokeWeight: 0,
                        fillOpacity: 0.8,
                        opacity:1
                    });

                    break;
                }
            }
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    });    
};

function getMap2(value){
    
    fetch('data/kabsample.json?', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        kabkota.eachLayer(function(layer) {
            var feature = layer.toGeoJSON();
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i].WADMKK == feature.properties.WADMKK) {
                    console.log(data.data[i])
                    if(data.data[i].value < 36){
                        color = '#7E2600';
                        layer.bindPopup("<p style='background-color:#7E2600;margin-top:0;margin-bottom:0;text-transform: uppercase;font-weight: bold'>" + feature.properties.WADMKK+ 
                        "</p>Value : " + data.data[i].value + "<br>Ketahanan : " + data.data[i].Ketahanan + "<p style='background-color:#7E2600;margin-top:0;margin-bottom:0'>Sangat Rentan</p>");
                    }else if(data.data[i].value < 52){
                        color = '#C83C00';
                        layer.bindPopup("<p style='background-color:#C83C00;margin-top:0;margin-bottom:0;text-transform: uppercase;font-weight: bold'>" + feature.properties.WADMKK+ 
                        "</p>Value : " + data.data[i].value + "<br>Ketahanan : " + data.data[i].Ketahanan + "<p style='background-color:#C83C00;margin-top:0;margin-bottom:0'>Rentan</p>");
                    }else if(data.data[i].value < 68){
                        color = '#00800D';
                        layer.bindPopup("<p style='background-color:#00800D;margin-top:0;margin-bottom:0;text-transform: uppercase;font-weight: bold'>" + feature.properties.WADMKK+ 
                        "</p>Value : " + data.data[i].value + "<br>Ketahanan : " + data.data[i].Ketahanan + "<p style='background-color:#00800D;margin-top:0;margin-bottom:0'>Aman</p>");
                    }else if(data.data[i].value < 84){
                        color = '#004F08';
                        layer.bindPopup("<p style='background-color:#004F08;margin-top:0;margin-bottom:0;text-transform: uppercase;font-weight: bold'>" + feature.properties.WADMKK+ 
                        "</p>Value : " + data.data[i].value + "<br>Ketahanan : " + data.data[i].Ketahanan + "<p style='background-color:#004F08;margin-top:0;margin-bottom:0'>Sangat Aman</p>");
                    }else{
                        color = '#fff';
                        layer.bindPopup(feature.properties.WADMKK + "<br>Value : " + data.data[i].value + "<br>Ketahanan : " + data.data[i].Ketahanan + "<br>Tidak ada data");
                    }  

                    layer.setStyle({
                        color: '#111',
                        fillColor: color,
                        strokeWeight: 0,
                        fillOpacity: 0.8,
                        opacity:1
                    });

                    break;
                }
            }
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });    
};

function getMap3(value){
    popupContainer.classList.add('active')
    console.log(value)
    
        
};