var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PflanzungenaufBucheneV_1 = new ol.format.GeoJSON();
var features_PflanzungenaufBucheneV_1 = format_PflanzungenaufBucheneV_1.readFeatures(json_PflanzungenaufBucheneV_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PflanzungenaufBucheneV_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PflanzungenaufBucheneV_1.addFeatures(features_PflanzungenaufBucheneV_1);
var lyr_PflanzungenaufBucheneV_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PflanzungenaufBucheneV_1, 
                style: style_PflanzungenaufBucheneV_1,
                interactive: true,
                title: '<img src="styles/legend/PflanzungenaufBucheneV_1.png" /> Pflanzungen aufBuchen e.V.'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PflanzungenaufBucheneV_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PflanzungenaufBucheneV_1];
lyr_PflanzungenaufBucheneV_1.set('fieldAliases', {'Baumart': 'Baumart', '#Baum': 'Anzahl gepflanzte Bäume', 'Dat_Jahr': 'Jahr Pflanzung', });
lyr_PflanzungenaufBucheneV_1.set('fieldImages', {'Baumart': 'TextEdit', '#Baum': 'TextEdit', 'Dat_Jahr': 'TextEdit', });
lyr_PflanzungenaufBucheneV_1.set('fieldLabels', {'Baumart': 'inline label', '#Baum': 'inline label', 'Dat_Jahr': 'inline label', });
lyr_PflanzungenaufBucheneV_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});