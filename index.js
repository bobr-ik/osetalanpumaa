

window.onload= init;


function init(){

  const container = document.getElementById('accept-point');
  const content = document.getElementById('popup-content');
  const closer = document.getElementById('popup-closer');
  var overlay = new ol.Overlay({
    element: container,
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  });
  
  const map = new ol.Map({
    overlays: [overlay],
    target: 'map',
    view: new ol.View({
      center: ol.proj.fromLonLat([44.145641, 43.376226]),
      zoom: 8.5
    }),
  
  });
  
  
  const polyLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'https://api.maptiler.com/data/714b968b-8f22-4a3c-8526-52808ad604e2/features.json?key=Wco4p5rChNXXJw3pJDwO',
      format: new ol.format.GeoJSON(),
    }),
    style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(0, 119, 255, 0.3)'
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(0, 119, 255)',
        width: 2
      })
    })
  })
  
  
  const marker1 = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([44.692281, 43.735266])
          )
        })
      ],
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        src: "image/map-points/map-point-1.png"
      })
    }),
  })
  
  const marker2 = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([44.457234, 43.675392])
          )
        })
      ],
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        src: "image/map-points/map-point-2.png"
      })
    }),
  })
  
  const marker3 = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([44.249769, 43.314155])
          )
        })
      ],
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        src: "image/map-points/map-point-3.png"
      })
    }),
  })
  
  const marker4 = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([44.280864, 43.277249])
          )
        })
      ],
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        src: "image/map-points/map-point-4.png"
      })
    }),
  })
  
  const marker5 = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([44.143996, 42.861462])
          )
        })
      ],
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        src: "image/map-points/map-point-5.png"
      })
    }),
  })
  
  const marker6 = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([44.152425, 42.876220])
          )
        })
      ],
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        src: "image/map-points/map-point-6.png"
      })
    }),
  })
  
  const marker7 = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([43.596497, 42.904032])
          )
        })
      ],
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        src: "image/map-points/map-point-7.png"
      })
    }),
  })
  
  const marker8 = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [
        new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([43.895183, 42.763481])
          )
        })
      ],
    }),
    style: new ol.style.Style({
      image: new ol.style.Icon({
        src: "image/map-points/map-point-8.png"
      })
    }),
  })

  var layer1 = new ol.layer.Tile({
    source: new ol.source.TileJSON({
      url: 'https://api.maptiler.com/maps/openstreetmap/tiles.json?key=Wco4p5rChNXXJw3pJDwO',
      tileSize: 512
    }),
    opacity: 0
  });
  
  var layer2 = new ol.layer.Tile({
    source: new ol.source.TileJSON({
      url: 'https://api.maptiler.com/maps/satellite/tiles.json?key=Wco4p5rChNXXJw3pJDwO',
      tileSize: 512
    }),
    opacity: 0
  });
  
  var layer3 = new ol.layer.Tile({
    source: new ol.source.TileJSON({
      url: 'https://api.maptiler.com/maps/topo-v2/tiles.json?key=Wco4p5rChNXXJw3pJDwO',
      tileSize: 512
    }),
    opacity: 0
  });
  
  function update() {
    if (layerSwitch1.checked) {
      layer1.setOpacity(1);
    } else {
      layer1.setOpacity(0);
    }
  
    if (layerSwitch2.checked) {
      layer2.setOpacity(1);
    } else {
      layer2.setOpacity(0);
    }
  
    if (layerSwitch3.checked) {
      layer3.setOpacity(1);
    } else {
      layer3.setOpacity(0);
    }
  }
  
  
  
  
  var layerSwitch1 = document.getElementById('layer-switch-1')
  var layerSwitch2 = document.getElementById('layer-switch-2')
  var layerSwitch3 = document.getElementById('layer-switch-3')


  document.getElementById('switchers').addEventListener('click', update)

map.addLayer(layer1)
map.addLayer(layer2)
map.addLayer(layer3)
map.addLayer(polyLayer)
map.addLayer(marker1)
map.addLayer(marker2)
map.addLayer(marker3)
map.addLayer(marker4)
map.addLayer(marker5)
map.addLayer(marker6)
map.addLayer(marker7)
map.addLayer(marker8)

map.on('click', function (evt) {
  var feature = map.forEachFeatureAtPixel(evt.pixel,
    function (feature, layer) {
      if (layer == polyLayer){
        content.innerHTML = feature.get('Name')
        document.getElementById('accept-point-button').style.display = 'none'
        return feature;
      }else{
        document.getElementById('accept-point-button').style.display = 'inline-block'
      }
      if (layer == marker1) {
        content.innerHTML = '1. Нижнее течение реки Терек';
        document.getElementById('accept-point-button').pointName = 'first-point'
        return feature;
      }
      if (layer == marker2) {
        content.innerHTML = '2. Луг в Моздокском районе';
        document.getElementById('accept-point-button').pointName = 'second-point'
        return feature;
      }
      if (layer == marker3) {
        content.innerHTML = '3. Курпский лес, Эльхотовские ворота';
        document.getElementById('accept-point-button').pointName = 'third-point'
        return feature;
      }
      if (layer == marker4) {
        content.innerHTML = '4. Южный склон Сунженского хребта в Кировском районе';
        document.getElementById('accept-point-button').pointName = 'forth-point'
        return feature;
      }
      if (layer == marker5) {
        content.innerHTML = '5. Долина реки Ардон в Алагирском районе';
        document.getElementById('accept-point-button').pointName = 'fifth-point'
        return feature;
      }
      if (layer == marker6) {
        content.innerHTML = '6. Скалистый хребет в Алагирском районе';
        document.getElementById('accept-point-button').pointName = 'sixth-point'
        return feature;
      }
      if (layer == marker7) {
        content.innerHTML = '7. Лес рядом с водопадом Байради';
        document.getElementById('accept-point-button').pointName = 'seventh-point'
        return feature;
      }
      if (layer == marker8) {
        content.innerHTML = '8. Сказский ледник';
        document.getElementById('accept-point-button').pointName = 'eighth-point'
        return feature;
      }

    })
  if (feature) {
    const coordinate = evt.coordinate;
    overlay.setPosition(coordinate);
    document.getElementById('map-scroll').scrollIntoView({ block: 'start', behavior: 'smooth' });

  }
})


closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  document.getElementById('first-point').style.display = 'none'
  document.getElementById('second-point').style.display = 'none'
  document.getElementById('third-point').style.display = 'none'
  document.getElementById('forth-point').style.display = 'none'
  document.getElementById('fifth-point').style.display = 'none'
  document.getElementById('sixth-point').style.display = 'none'
  document.getElementById('seventh-point').style.display = 'none'
  document.getElementById('eighth-point').style.display = 'none'
  return false;
};
}













