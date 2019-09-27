var size = 0;
var placement = 'point';
function categories_PULVERIZACIONESAGROVANTS2019sml_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'ajo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(85,214,201,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'cebolla':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(188,41,237,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'girasol':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(109,200,18,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'glifo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(234,190,127,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'lechuga':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(239,54,116,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'maiz':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(199,204,106,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'NDVI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(237,22,194,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'papa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(57,85,207,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'tomate':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(71,15,212,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'vid':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(83,159,202,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'zanahoria':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(127,236,176,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'zapallo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),fill: new ol.style.Fill({color: 'rgba(230,58,35,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PULVERIZACIONESAGROVANTS2019sml_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Cultivo");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_PULVERIZACIONESAGROVANTS2019sml_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
