var wms_layers = [];

var format_TitikUKMUPTbenerpol_0 = new ol.format.GeoJSON();
var features_TitikUKMUPTbenerpol_0 = format_TitikUKMUPTbenerpol_0.readFeatures(json_TitikUKMUPTbenerpol_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikUKMUPTbenerpol_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikUKMUPTbenerpol_0.addFeatures(features_TitikUKMUPTbenerpol_0);
var lyr_TitikUKMUPTbenerpol_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikUKMUPTbenerpol_0, 
                style: style_TitikUKMUPTbenerpol_0,
                interactive: true,
                title: '<img src="styles/legend/TitikUKMUPTbenerpol_0.png" /> Titik UKM- UPT bener pol'
            });
var format_JALANKENANGAN_1 = new ol.format.GeoJSON();
var features_JALANKENANGAN_1 = format_JALANKENANGAN_1.readFeatures(json_JALANKENANGAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANKENANGAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANKENANGAN_1.addFeatures(features_JALANKENANGAN_1);
var lyr_JALANKENANGAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALANKENANGAN_1, 
                style: style_JALANKENANGAN_1,
                interactive: true,
                title: '<img src="styles/legend/JALANKENANGAN_1.png" /> JALAN KENANGAN'
            });
var format_UKMCENTER_2 = new ol.format.GeoJSON();
var features_UKMCENTER_2 = format_UKMCENTER_2.readFeatures(json_UKMCENTER_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UKMCENTER_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UKMCENTER_2.addFeatures(features_UKMCENTER_2);
var lyr_UKMCENTER_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UKMCENTER_2, 
                style: style_UKMCENTER_2,
                interactive: true,
                title: '<img src="styles/legend/UKMCENTER_2.png" /> UKM CENTER'
            });
var format_BTN_3 = new ol.format.GeoJSON();
var features_BTN_3 = format_BTN_3.readFeatures(json_BTN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BTN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BTN_3.addFeatures(features_BTN_3);
var lyr_BTN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BTN_3, 
                style: style_BTN_3,
                interactive: true,
                title: '<img src="styles/legend/BTN_3.png" /> BTN'
            });
var format_JOBCENTER_4 = new ol.format.GeoJSON();
var features_JOBCENTER_4 = format_JOBCENTER_4.readFeatures(json_JOBCENTER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JOBCENTER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JOBCENTER_4.addFeatures(features_JOBCENTER_4);
var lyr_JOBCENTER_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JOBCENTER_4, 
                style: style_JOBCENTER_4,
                interactive: true,
                title: '<img src="styles/legend/JOBCENTER_4.png" /> JOB CENTER'
            });
var format_LAPANGANTENIS_5 = new ol.format.GeoJSON();
var features_LAPANGANTENIS_5 = format_LAPANGANTENIS_5.readFeatures(json_LAPANGANTENIS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAPANGANTENIS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAPANGANTENIS_5.addFeatures(features_LAPANGANTENIS_5);
var lyr_LAPANGANTENIS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAPANGANTENIS_5, 
                style: style_LAPANGANTENIS_5,
                interactive: true,
                title: '<img src="styles/legend/LAPANGANTENIS_5.png" /> LAPANGAN TENIS'
            });
var format_LAPBASKET_6 = new ol.format.GeoJSON();
var features_LAPBASKET_6 = format_LAPBASKET_6.readFeatures(json_LAPBASKET_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAPBASKET_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAPBASKET_6.addFeatures(features_LAPBASKET_6);
var lyr_LAPBASKET_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAPBASKET_6, 
                style: style_LAPBASKET_6,
                interactive: true,
                title: '<img src="styles/legend/LAPBASKET_6.png" /> LAP. BASKET'
            });
var format_LAPBOLA_7 = new ol.format.GeoJSON();
var features_LAPBOLA_7 = format_LAPBOLA_7.readFeatures(json_LAPBOLA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAPBOLA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAPBOLA_7.addFeatures(features_LAPBOLA_7);
var lyr_LAPBOLA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAPBOLA_7, 
                style: style_LAPBOLA_7,
                interactive: true,
                title: '<img src="styles/legend/LAPBOLA_7.png" /> LAP.BOLA'
            });
var format_AULA_8 = new ol.format.GeoJSON();
var features_AULA_8 = format_AULA_8.readFeatures(json_AULA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AULA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AULA_8.addFeatures(features_AULA_8);
var lyr_AULA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AULA_8, 
                style: style_AULA_8,
                interactive: true,
                title: '<img src="styles/legend/AULA_8.png" /> AULA'
            });
var format_MUSHOLA_9 = new ol.format.GeoJSON();
var features_MUSHOLA_9 = format_MUSHOLA_9.readFeatures(json_MUSHOLA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUSHOLA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUSHOLA_9.addFeatures(features_MUSHOLA_9);
var lyr_MUSHOLA_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUSHOLA_9, 
                style: style_MUSHOLA_9,
                interactive: true,
                title: '<img src="styles/legend/MUSHOLA_9.png" /> MUSHOLA'
            });
var format_BNI_10 = new ol.format.GeoJSON();
var features_BNI_10 = format_BNI_10.readFeatures(json_BNI_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BNI_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BNI_10.addFeatures(features_BNI_10);
var lyr_BNI_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BNI_10, 
                style: style_BNI_10,
                interactive: true,
                title: '<img src="styles/legend/BNI_10.png" /> BNI'
            });
var format_UKM_11 = new ol.format.GeoJSON();
var features_UKM_11 = format_UKM_11.readFeatures(json_UKM_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UKM_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UKM_11.addFeatures(features_UKM_11);
var lyr_UKM_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UKM_11, 
                style: style_UKM_11,
                interactive: true,
                title: '<img src="styles/legend/UKM_11.png" /> UKM'
            });
var format_SANGGAR_12 = new ol.format.GeoJSON();
var features_SANGGAR_12 = format_SANGGAR_12.readFeatures(json_SANGGAR_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SANGGAR_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SANGGAR_12.addFeatures(features_SANGGAR_12);
var lyr_SANGGAR_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SANGGAR_12, 
                style: style_SANGGAR_12,
                interactive: true,
                title: '<img src="styles/legend/SANGGAR_12.png" /> SANGGAR'
            });
var format_GSG_13 = new ol.format.GeoJSON();
var features_GSG_13 = format_GSG_13.readFeatures(json_GSG_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GSG_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GSG_13.addFeatures(features_GSG_13);
var lyr_GSG_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GSG_13, 
                style: style_GSG_13,
                interactive: true,
                title: '<img src="styles/legend/GSG_13.png" /> GSG'
            });
var format_UPTPTKK_14 = new ol.format.GeoJSON();
var features_UPTPTKK_14 = format_UPTPTKK_14.readFeatures(json_UPTPTKK_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPTPTKK_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPTPTKK_14.addFeatures(features_UPTPTKK_14);
var lyr_UPTPTKK_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UPTPTKK_14, 
                style: style_UPTPTKK_14,
                interactive: true,
                title: '<img src="styles/legend/UPTPTKK_14.png" /> UPT PTKK'
            });
var format_LAP_15 = new ol.format.GeoJSON();
var features_LAP_15 = format_LAP_15.readFeatures(json_LAP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAP_15.addFeatures(features_LAP_15);
var lyr_LAP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAP_15, 
                style: style_LAP_15,
                interactive: true,
                title: '<img src="styles/legend/LAP_15.png" /> LAP'
            });

lyr_TitikUKMUPTbenerpol_0.setVisible(true);lyr_JALANKENANGAN_1.setVisible(true);lyr_UKMCENTER_2.setVisible(true);lyr_BTN_3.setVisible(true);lyr_JOBCENTER_4.setVisible(true);lyr_LAPANGANTENIS_5.setVisible(true);lyr_LAPBASKET_6.setVisible(true);lyr_LAPBOLA_7.setVisible(true);lyr_AULA_8.setVisible(true);lyr_MUSHOLA_9.setVisible(true);lyr_BNI_10.setVisible(true);lyr_UKM_11.setVisible(true);lyr_SANGGAR_12.setVisible(true);lyr_GSG_13.setVisible(true);lyr_UPTPTKK_14.setVisible(true);lyr_LAP_15.setVisible(true);
var layersList = [lyr_TitikUKMUPTbenerpol_0,lyr_JALANKENANGAN_1,lyr_UKMCENTER_2,lyr_BTN_3,lyr_JOBCENTER_4,lyr_LAPANGANTENIS_5,lyr_LAPBASKET_6,lyr_LAPBOLA_7,lyr_AULA_8,lyr_MUSHOLA_9,lyr_BNI_10,lyr_UKM_11,lyr_SANGGAR_12,lyr_GSG_13,lyr_UPTPTKK_14,lyr_LAP_15];
lyr_TitikUKMUPTbenerpol_0.set('fieldAliases', {'titik': 'titik', 'x': 'x', 'y': 'y', });
lyr_JALANKENANGAN_1.set('fieldAliases', {'id': 'id', });
lyr_UKMCENTER_2.set('fieldAliases', {'id': 'id', });
lyr_BTN_3.set('fieldAliases', {'id': 'id', });
lyr_JOBCENTER_4.set('fieldAliases', {'id': 'id', });
lyr_LAPANGANTENIS_5.set('fieldAliases', {'id': 'id', });
lyr_LAPBASKET_6.set('fieldAliases', {'id': 'id', });
lyr_LAPBOLA_7.set('fieldAliases', {'id': 'id', });
lyr_AULA_8.set('fieldAliases', {'id': 'id', });
lyr_MUSHOLA_9.set('fieldAliases', {'id': 'id', });
lyr_BNI_10.set('fieldAliases', {'id': 'id', });
lyr_UKM_11.set('fieldAliases', {'id': 'id', });
lyr_SANGGAR_12.set('fieldAliases', {'id': 'id', });
lyr_GSG_13.set('fieldAliases', {'id': 'id', });
lyr_UPTPTKK_14.set('fieldAliases', {'id': 'id', });
lyr_LAP_15.set('fieldAliases', {'id': 'id', });
lyr_TitikUKMUPTbenerpol_0.set('fieldImages', {'titik': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_JALANKENANGAN_1.set('fieldImages', {'id': 'TextEdit', });
lyr_UKMCENTER_2.set('fieldImages', {'id': 'TextEdit', });
lyr_BTN_3.set('fieldImages', {'id': '', });
lyr_JOBCENTER_4.set('fieldImages', {'id': '', });
lyr_LAPANGANTENIS_5.set('fieldImages', {'id': 'TextEdit', });
lyr_LAPBASKET_6.set('fieldImages', {'id': '', });
lyr_LAPBOLA_7.set('fieldImages', {'id': 'TextEdit', });
lyr_AULA_8.set('fieldImages', {'id': '', });
lyr_MUSHOLA_9.set('fieldImages', {'id': '', });
lyr_BNI_10.set('fieldImages', {'id': '', });
lyr_UKM_11.set('fieldImages', {'id': 'TextEdit', });
lyr_SANGGAR_12.set('fieldImages', {'id': '', });
lyr_GSG_13.set('fieldImages', {'id': '', });
lyr_UPTPTKK_14.set('fieldImages', {'id': 'TextEdit', });
lyr_LAP_15.set('fieldImages', {'id': 'TextEdit', });
lyr_TitikUKMUPTbenerpol_0.set('fieldLabels', {'titik': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_JALANKENANGAN_1.set('fieldLabels', {'id': 'no label', });
lyr_UKMCENTER_2.set('fieldLabels', {'id': 'no label', });
lyr_BTN_3.set('fieldLabels', {'id': 'no label', });
lyr_JOBCENTER_4.set('fieldLabels', {'id': 'no label', });
lyr_LAPANGANTENIS_5.set('fieldLabels', {'id': 'no label', });
lyr_LAPBASKET_6.set('fieldLabels', {'id': 'no label', });
lyr_LAPBOLA_7.set('fieldLabels', {'id': 'no label', });
lyr_AULA_8.set('fieldLabels', {'id': 'no label', });
lyr_MUSHOLA_9.set('fieldLabels', {'id': 'no label', });
lyr_BNI_10.set('fieldLabels', {'id': 'no label', });
lyr_UKM_11.set('fieldLabels', {'id': 'no label', });
lyr_SANGGAR_12.set('fieldLabels', {'id': 'no label', });
lyr_GSG_13.set('fieldLabels', {'id': 'no label', });
lyr_UPTPTKK_14.set('fieldLabels', {'id': 'no label', });
lyr_LAP_15.set('fieldLabels', {'id': 'no label', });
lyr_LAP_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});