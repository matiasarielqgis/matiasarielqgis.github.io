var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_DatosPoblacional_1 = new ol.format.GeoJSON();
var features_DatosPoblacional_1 = format_DatosPoblacional_1.readFeatures(json_DatosPoblacional_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DatosPoblacional_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DatosPoblacional_1.addFeatures(features_DatosPoblacional_1);
var lyr_DatosPoblacional_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DatosPoblacional_1, 
                style: style_DatosPoblacional_1,
                interactive: true,
    title: 'Datos Poblacional<br />\
    <img src="styles/legend/DatosPoblacional_1_0.png" /> 5 - 616<br />\
    <img src="styles/legend/DatosPoblacional_1_1.png" /> 616 - 932<br />\
    <img src="styles/legend/DatosPoblacional_1_2.png" /> 932 - 1289<br />\
    <img src="styles/legend/DatosPoblacional_1_3.png" /> 1289 - 1806<br />\
    <img src="styles/legend/DatosPoblacional_1_4.png" /> 1806 - 3284<br />'
        });
var format_LimitesdeLocalidades_2 = new ol.format.GeoJSON();
var features_LimitesdeLocalidades_2 = format_LimitesdeLocalidades_2.readFeatures(json_LimitesdeLocalidades_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesdeLocalidades_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesdeLocalidades_2.addFeatures(features_LimitesdeLocalidades_2);
var lyr_LimitesdeLocalidades_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimitesdeLocalidades_2, 
                style: style_LimitesdeLocalidades_2,
                interactive: true,
                title: '<img src="styles/legend/LimitesdeLocalidades_2.png" /> Limites de Localidades'
            });
var format_Peajes_3 = new ol.format.GeoJSON();
var features_Peajes_3 = format_Peajes_3.readFeatures(json_Peajes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peajes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peajes_3.addFeatures(features_Peajes_3);
var lyr_Peajes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peajes_3, 
                style: style_Peajes_3,
                interactive: true,
                title: '<img src="styles/legend/Peajes_3.png" /> Peajes'
            });
var format_AutopistaBsAsLaPlata2019_4 = new ol.format.GeoJSON();
var features_AutopistaBsAsLaPlata2019_4 = format_AutopistaBsAsLaPlata2019_4.readFeatures(json_AutopistaBsAsLaPlata2019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AutopistaBsAsLaPlata2019_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutopistaBsAsLaPlata2019_4.addFeatures(features_AutopistaBsAsLaPlata2019_4);
var lyr_AutopistaBsAsLaPlata2019_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AutopistaBsAsLaPlata2019_4, 
                style: style_AutopistaBsAsLaPlata2019_4,
                interactive: true,
    title: 'Autopista Bs.As-La Plata 2019<br />\
    <img src="styles/legend/AutopistaBsAsLaPlata2019_4_0.png" /> 37990 - 60500<br />\
    <img src="styles/legend/AutopistaBsAsLaPlata2019_4_1.png" /> 60500 - 82000<br />\
    <img src="styles/legend/AutopistaBsAsLaPlata2019_4_2.png" /> 82000 - 102000<br />\
    <img src="styles/legend/AutopistaBsAsLaPlata2019_4_3.png" /> 102000 - 121700<br />'
        });
var format_AutopistaBsAsLaPlata2007_5 = new ol.format.GeoJSON();
var features_AutopistaBsAsLaPlata2007_5 = format_AutopistaBsAsLaPlata2007_5.readFeatures(json_AutopistaBsAsLaPlata2007_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AutopistaBsAsLaPlata2007_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutopistaBsAsLaPlata2007_5.addFeatures(features_AutopistaBsAsLaPlata2007_5);
var lyr_AutopistaBsAsLaPlata2007_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AutopistaBsAsLaPlata2007_5, 
                style: style_AutopistaBsAsLaPlata2007_5,
                interactive: true,
    title: 'Autopista Bs.As-La Plata 2007<br />\
    <img src="styles/legend/AutopistaBsAsLaPlata2007_5_0.png" /> 39116 - 60662<br />\
    <img src="styles/legend/AutopistaBsAsLaPlata2007_5_1.png" /> 60662 - 82208<br />\
    <img src="styles/legend/AutopistaBsAsLaPlata2007_5_2.png" /> 82208 - 103754<br />\
    <img src="styles/legend/AutopistaBsAsLaPlata2007_5_3.png" /> 103754 - 125300<br />'
        });
var format_AutopistaBsAsLaPlata_6 = new ol.format.GeoJSON();
var features_AutopistaBsAsLaPlata_6 = format_AutopistaBsAsLaPlata_6.readFeatures(json_AutopistaBsAsLaPlata_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AutopistaBsAsLaPlata_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutopistaBsAsLaPlata_6.addFeatures(features_AutopistaBsAsLaPlata_6);
var lyr_AutopistaBsAsLaPlata_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AutopistaBsAsLaPlata_6, 
                style: style_AutopistaBsAsLaPlata_6,
                interactive: true,
                title: '<img src="styles/legend/AutopistaBsAsLaPlata_6.png" /> Autopista Bs.As-La Plata '
            });
var format_Puntosdemedicion_7 = new ol.format.GeoJSON();
var features_Puntosdemedicion_7 = format_Puntosdemedicion_7.readFeatures(json_Puntosdemedicion_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdemedicion_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdemedicion_7.addFeatures(features_Puntosdemedicion_7);cluster_Puntosdemedicion_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Puntosdemedicion_7
});
var lyr_Puntosdemedicion_7 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Puntosdemedicion_7, 
                style: style_Puntosdemedicion_7,
                interactive: true,
                title: '<img src="styles/legend/Puntosdemedicion_7.png" /> Puntos de medicion'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_DatosPoblacional_1.setVisible(true);lyr_LimitesdeLocalidades_2.setVisible(true);lyr_Peajes_3.setVisible(true);lyr_AutopistaBsAsLaPlata2019_4.setVisible(true);lyr_AutopistaBsAsLaPlata2007_5.setVisible(true);lyr_AutopistaBsAsLaPlata_6.setVisible(true);lyr_Puntosdemedicion_7.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_DatosPoblacional_1,lyr_LimitesdeLocalidades_2,lyr_Peajes_3,lyr_AutopistaBsAsLaPlata2019_4,lyr_AutopistaBsAsLaPlata2007_5,lyr_AutopistaBsAsLaPlata_6,lyr_Puntosdemedicion_7];
lyr_DatosPoblacional_1.set('fieldAliases', {'toponimo_i': 'toponimo_i', 'link': 'link', 'varon': 'varon', 'mujer': 'mujer', 'totalpobl': 'totalpobl', 'hogares': 'hogares', 'viviendasp': 'viviendasp', 'viv_part_h': 'viv_part_h', });
lyr_LimitesdeLocalidades_2.set('fieldAliases', {'link': 'link', 'codpcia': 'codpcia', 'departamen': 'departamen', 'provincia': 'provincia', 'mujeres': 'mujeres', 'varones': 'varones', 'personas': 'personas', 'hogares': 'hogares', 'viv_part': 'viv_part', 'viv_part_h': 'viv_part_h', });
lyr_Peajes_3.set('fieldAliases', {'id': 'id', 'nombres': 'nombres', });
lyr_AutopistaBsAsLaPlata2019_4.set('fieldAliases', {'id': 'id', 'TMDA_n': 'TMDA_n', 'TMDA 2019': 'TMDA 2019', 'Distrito': 'Distrito', 'Límites del Tramo': 'Límites del Tramo', 'Inicio': 'Inicio', 'Fin': 'Fin', 'TMDA': 'TMDA', 'Detalle': 'Detalle', 'Observaciones': 'Observaciones', 'Estado de mantenimiento': 'Estado de mantenimiento', 'Obras en ejecución 2020': 'Obras en ejecución 2020', });
lyr_AutopistaBsAsLaPlata2007_5.set('fieldAliases', {'id': 'id', 'TMDA_n': 'TMDA 2007', 'TMDA 2019': 'TMDA 2019', 'Distrito': 'Distrito', 'Límites del Tramo': 'Límites del Tramo', 'Inicio': 'Inicio', 'Fin': 'Fin', 'TMDA': 'TMDA', 'Detalle': 'Detalle', 'Observaciones': 'Observaciones', 'Estado de mantenimiento': 'Estado de mantenimiento', 'Obras en ejecución 2020': 'Obras en ejecución 2020', });
lyr_AutopistaBsAsLaPlata_6.set('fieldAliases', {'id': 'id', 'TMDA_n': 'TMDA 2007', 'TMDA 2019': 'TMDA 2019', 'Distrito': 'Distrito', 'Límites del Tramo': 'Límites del Tramo', 'Inicio': 'Inicio', 'Fin': 'Fin', 'TMDA': 'TMDA', 'Detalle': 'Detalle', 'Observaciones': 'Observaciones', 'Estado de mantenimiento': 'Estado de mantenimiento', 'Obras en ejecución 2020': 'Obras en ejecución 2020', });
lyr_Puntosdemedicion_7.set('fieldAliases', {'id': 'id', 'Etiqueta': 'Etiqueta', });
lyr_DatosPoblacional_1.set('fieldImages', {'toponimo_i': 'TextEdit', 'link': 'TextEdit', 'varon': 'TextEdit', 'mujer': 'TextEdit', 'totalpobl': 'TextEdit', 'hogares': 'TextEdit', 'viviendasp': 'TextEdit', 'viv_part_h': 'TextEdit', });
lyr_LimitesdeLocalidades_2.set('fieldImages', {'link': 'TextEdit', 'codpcia': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'mujeres': 'TextEdit', 'varones': 'TextEdit', 'personas': 'TextEdit', 'hogares': 'TextEdit', 'viv_part': 'TextEdit', 'viv_part_h': 'TextEdit', });
lyr_Peajes_3.set('fieldImages', {'id': 'TextEdit', 'nombres': 'TextEdit', });
lyr_AutopistaBsAsLaPlata2019_4.set('fieldImages', {'id': 'TextEdit', 'TMDA_n': 'TextEdit', 'TMDA 2019': 'TextEdit', 'Distrito': 'TextEdit', 'Límites del Tramo': 'TextEdit', 'Inicio': 'TextEdit', 'Fin': 'TextEdit', 'TMDA': 'Range', 'Detalle': 'TextEdit', 'Observaciones': 'TextEdit', 'Estado de mantenimiento': 'TextEdit', 'Obras en ejecución 2020': 'TextEdit', });
lyr_AutopistaBsAsLaPlata2007_5.set('fieldImages', {'id': 'TextEdit', 'TMDA_n': 'TextEdit', 'TMDA 2019': '', 'Distrito': 'TextEdit', 'Límites del Tramo': 'TextEdit', 'Inicio': 'TextEdit', 'Fin': 'TextEdit', 'TMDA': 'Range', 'Detalle': 'TextEdit', 'Observaciones': 'TextEdit', 'Estado de mantenimiento': 'TextEdit', 'Obras en ejecución 2020': 'TextEdit', });
lyr_AutopistaBsAsLaPlata_6.set('fieldImages', {'id': 'TextEdit', 'TMDA_n': 'TextEdit', 'TMDA 2019': 'TextEdit', 'Distrito': 'TextEdit', 'Límites del Tramo': 'TextEdit', 'Inicio': 'TextEdit', 'Fin': 'TextEdit', 'TMDA': 'Range', 'Detalle': 'TextEdit', 'Observaciones': 'TextEdit', 'Estado de mantenimiento': 'TextEdit', 'Obras en ejecución 2020': 'TextEdit', });
lyr_Puntosdemedicion_7.set('fieldImages', {'id': 'TextEdit', 'Etiqueta': 'TextEdit', });
lyr_DatosPoblacional_1.set('fieldLabels', {'toponimo_i': 'no label', 'link': 'no label', 'varon': 'no label', 'mujer': 'no label', 'totalpobl': 'no label', 'hogares': 'no label', 'viviendasp': 'no label', 'viv_part_h': 'no label', });
lyr_LimitesdeLocalidades_2.set('fieldLabels', {'link': 'no label', 'codpcia': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'mujeres': 'no label', 'varones': 'no label', 'personas': 'no label', 'hogares': 'no label', 'viv_part': 'no label', 'viv_part_h': 'no label', });
lyr_Peajes_3.set('fieldLabels', {'id': 'no label', 'nombres': 'no label', });
lyr_AutopistaBsAsLaPlata2019_4.set('fieldLabels', {'id': 'no label', 'TMDA_n': 'no label', 'TMDA 2019': 'no label', 'Distrito': 'no label', 'Límites del Tramo': 'no label', 'Inicio': 'no label', 'Fin': 'no label', 'TMDA': 'no label', 'Detalle': 'no label', 'Observaciones': 'no label', 'Estado de mantenimiento': 'no label', 'Obras en ejecución 2020': 'no label', });
lyr_AutopistaBsAsLaPlata2007_5.set('fieldLabels', {'id': 'no label', 'TMDA_n': 'no label', 'TMDA 2019': 'no label', 'Distrito': 'no label', 'Límites del Tramo': 'no label', 'Inicio': 'no label', 'Fin': 'no label', 'TMDA': 'no label', 'Detalle': 'no label', 'Observaciones': 'no label', 'Estado de mantenimiento': 'no label', 'Obras en ejecución 2020': 'no label', });
lyr_AutopistaBsAsLaPlata_6.set('fieldLabels', {'id': 'no label', 'TMDA_n': 'no label', 'TMDA 2019': 'no label', 'Distrito': 'no label', 'Límites del Tramo': 'no label', 'Inicio': 'no label', 'Fin': 'no label', 'TMDA': 'no label', 'Detalle': 'no label', 'Observaciones': 'no label', 'Estado de mantenimiento': 'no label', 'Obras en ejecución 2020': 'no label', });
lyr_Puntosdemedicion_7.set('fieldLabels', {'id': 'no label', 'Etiqueta': 'no label', });
lyr_Puntosdemedicion_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});