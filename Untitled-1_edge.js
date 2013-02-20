/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'stripes',
            type:'image',
            rect:['0','0','1100px','800px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"stripes.png",'0px','0px']
         },
         {
            id:'amenities',
            type:'image',
            rect:['109px','-208px','188px','802px','auto','auto'],
            clip:['rect(0px 188px 200px 0px)'],
            fill:["rgba(0,0,0,0)",im+"amenities.png",'0px','0px']
         },
         {
            id:'contact',
            type:'image',
            rect:['582px','800px','238px','802px','auto','auto'],
            clip:['rect(0px 238px 400px 0px)'],
            fill:["rgba(0,0,0,0)",im+"contact.png",'0px','0px']
         },
         {
            id:'gallery',
            type:'image',
            rect:['827px','-270px','146px','802px','auto','auto'],
            clip:['rect(0px 146px 300px 0px)'],
            fill:["rgba(0,0,0,0)",im+"gallery.png",'0px','0px']
         },
         {
            id:'neighborhood',
            type:'image',
            rect:['281px','805px','185px','802px','auto','auto'],
            clip:['rect(0px 185px 200px 0px)'],
            fill:["rgba(0,0,0,0)",im+"neighborhood.png",'0px','0px']
         },
         {
            id:'residences',
            type:'image',
            rect:['425px','-276px','146px','802px','auto','auto'],
            clip:['rect(0px 146px 300px 0px)'],
            fill:["rgba(0,0,0,0)",im+"residences.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_neighborhood}": [
            ["style", "top", '804.59px'],
            ["style", "left", '281.11px'],
            ["style", "clip", [0,185,200,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_gallery}": [
            ["style", "top", '-269.59px'],
            ["style", "left", '826.93px'],
            ["style", "clip", [0,146,300,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_contact}": [
            ["style", "top", '800px'],
            ["style", "left", '581.6px'],
            ["style", "clip", [0,238,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1100px'],
            ["style", "height", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_amenities}": [
            ["style", "top", '-207.53px'],
            ["style", "left", '108.79px'],
            ["style", "clip", [0,188,200,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_residences}": [
            ["style", "top", '-276px'],
            ["style", "left", '425.19px'],
            ["style", "clip", [0,146,300,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-19394170");
