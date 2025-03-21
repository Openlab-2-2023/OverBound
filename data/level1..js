(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level1",
{ "compressionlevel":-1,
 "height":14,
 "infinite":false,
 "layers":[
        {
         "id":8,
         "image":"..\/level1 copy.png",
         "imageheight":1296,
         "imagewidth":2304,
         "name":"Image Layer 2",
         "opacity":1,
         "type":"imagelayer",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 1330, 1330, 1330, 1330,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 1330, 1330, 1330, 0, 1330, 0, 0, 0, 0,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            1330, 0, 0, 0, 0, 0, 0, 0, 1330, 1330, 1330, 1330, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            1330, 1330, 1330, 1330, 1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            0, 0, 0, 0, 1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            0, 0, 0, 0, 1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            0, 0, 0, 0, 1330, 0, 0, 0, 0, 0, 0, 1330, 1330, 1330, 1330, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            0, 0, 0, 0, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 0, 0, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":14,
         "id":9,
         "name":"collisions",
         "opacity":0,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203,
            203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203,
            203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203,
            1217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 189, 279, 279, 279, 1217,
            1217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 278, 69, 70, 68, 1217,
            1217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 278, 1217, 1217, 202, 1217,
            1217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 278, 1217, 1217, 202, 203,
            1217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 278, 202, 203, 202, 203,
            1217, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 278, 202, 203, 202, 203,
            203, 308, 308, 308, 308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 278, 202, 203, 202, 203,
            203, 278, 278, 279, 308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 278, 202, 203, 203, 203,
            203, 1217, 1217, 279, 308, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 308, 202, 203, 203, 203,
            203, 1217, 1217, 309, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 278, 202, 203, 203, 203,
            203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203],
         "height":14,
         "id":6,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 8, 9, 10, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 37, 38, 41, 203,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 8, 9, 11, 0, 101, 67, 69, 71, 1217,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 39, 40, 41, 0, 131, 0, 0, 0, 203,
            0, 0, 0, 0, 0, 0, 0, 0, 6, 9, 10, 11, 0, 0, 0, 0, 0, 0, 0, 0, 101, 0, 0, 0, 0,
            0, 6, 7, 8, 11, 0, 0, 0, 36, 37, 38, 41, 203, 0, 0, 0, 0, 0, 0, 0, 131, 0, 0, 0, 0,
            0, 36, 39, 40, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 0, 0, 0, 0,
            0, 157, 158, 159, 336, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 202, 0, 0, 0,
            0, 0, 0, 0, 276, 0, 0, 0, 0, 0, 0, 6, 8, 9, 11, 0, 0, 0, 0, 0, 101, 202, 0, 0, 0,
            0, 0, 0, 0, 306, 0, 0, 0, 0, 0, 0, 36, 37, 38, 41, 0, 0, 0, 0, 0, 131, 202, 203, 0, 0,
            0, 0, 0, 0, 336, 337, 338, 339, 340, 339, 340, 341, 338, 339, 71, 159, 157, 158, 159, 160, 161, 202, 203, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203, 0, 0],
         "height":14,
         "id":7,
         "name":"Tile Layer 2",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":25,
         "x":0,
         "y":0
        }],
 "nextlayerid":10,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.11.2",
 "tileheight":92,
 "tilesets":[
        {
         "firstgid":1,
         "source":":\/automap-tiles.tsx"
        }, 
        {
         "columns":30,
         "firstgid":6,
         "image":"..\/..\/..\/Downloads\/Tiles_scaled_7x_pngcrushed.png",
         "imageheight":2800,
         "imagewidth":2800,
         "margin":0,
         "name":"env_ground",
         "spacing":0,
         "tilecount":900,
         "tileheight":92,
         "tilewidth":92
        }, 
        {
         "firstgid":906,
         "source":"..\/..\/Downloads\/env_ground.tsx"
        }, 
        {
         "firstgid":1193,
         "source":"..\/..\/After Effects\/makima\/makii.tsx"
        }],
 "tilewidth":92,
 "type":"map",
 "version":"1.10",
 "width":25
});