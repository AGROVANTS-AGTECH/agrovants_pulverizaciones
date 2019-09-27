var wms_layers = [];


        var lyr_Googlestreet_0 = new ol.layer.Tile({
            'title': 'Google street',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PULVERIZACIONESAGROVANTS2019sml_1 = new ol.format.GeoJSON();
var features_PULVERIZACIONESAGROVANTS2019sml_1 = format_PULVERIZACIONESAGROVANTS2019sml_1.readFeatures(json_PULVERIZACIONESAGROVANTS2019sml_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PULVERIZACIONESAGROVANTS2019sml_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PULVERIZACIONESAGROVANTS2019sml_1.addFeatures(features_PULVERIZACIONESAGROVANTS2019sml_1);
var lyr_PULVERIZACIONESAGROVANTS2019sml_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PULVERIZACIONESAGROVANTS2019sml_1, 
                style: style_PULVERIZACIONESAGROVANTS2019sml_1,
                interactive: true,
    title: 'PULVERIZACIONES AGROVANTS 2019 - sml<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_0.png" /> ajo<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_1.png" /> cebolla<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_2.png" /> girasol<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_3.png" /> glifo<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_4.png" /> lechuga<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_5.png" /> maiz<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_6.png" /> NDVI<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_7.png" /> papa<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_8.png" /> tomate<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_9.png" /> vid<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_10.png" /> zanahoria<br />\
    <img src="styles/legend/PULVERIZACIONESAGROVANTS2019sml_1_11.png" /> zapallo<br />'
        });

lyr_Googlestreet_0.setVisible(true);lyr_PULVERIZACIONESAGROVANTS2019sml_1.setVisible(true);
var layersList = [lyr_Googlestreet_0,lyr_PULVERIZACIONESAGROVANTS2019sml_1];
lyr_PULVERIZACIONESAGROVANTS2019sml_1.set('fieldAliases', {'Cultivo': 'Cultivo', 'Superficie': 'Superficie', 'Departamen': 'Departamen', 'Provinia': 'Provinia', 'Propietari': 'Propietari', 'Establecim': 'Establecim', });
lyr_PULVERIZACIONESAGROVANTS2019sml_1.set('fieldImages', {'Cultivo': 'TextEdit', 'Superficie': 'TextEdit', 'Departamen': 'TextEdit', 'Provinia': 'TextEdit', 'Propietari': 'TextEdit', 'Establecim': 'TextEdit', });
lyr_PULVERIZACIONESAGROVANTS2019sml_1.set('fieldLabels', {'Cultivo': 'header label', 'Superficie': 'inline label', 'Departamen': 'no label', 'Provinia': 'inline label', 'Propietari': 'no label', 'Establecim': 'no label', });
lyr_PULVERIZACIONESAGROVANTS2019sml_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});