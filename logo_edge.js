/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['65px', '225px','113px','110px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['45']]
            },
            {
                id: 'Rectangle2Copy2',
                type: 'rect',
                rect: ['65px', '225px','113px','110px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],['45']]
            },
            {
                id: 'Group',
                type: 'group',
                rect: ['86px', '78px','164','164','auto', 'auto'],
                c: [
                {
                    id: 'long_1Copy',
                    type: 'image',
                    rect: ['166px', '-9px','18px','81px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"longline.svg",'0px','0px'],
                    transform: [[],['45']]
                },
                {
                    id: 'long_1Copy2',
                    type: 'image',
                    rect: ['-20px', '90px','18px','81px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"longline.svg",'0px','0px'],
                    transform: [[],['45']]
                },
                {
                    id: 'short_1',
                    type: 'image',
                    rect: ['57px', '23px','18px','62px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"shortline.svg",'0px','0px'],
                    transform: [[],['45']]
                },
                {
                    id: 'short_2',
                    type: 'image',
                    rect: ['70px', '30px','18px','62px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"shortline.svg",'0px','0px']
                },
                {
                    id: 'logo-mask',
                    type: 'image',
                    rect: ['-90px', '-78px','336px','336px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"logo-mask.svg",'0px','0px']
                }]
            },
            {
                id: 'logo-outline',
                type: 'image',
                rect: ['86px', '85px','160px','160px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo-outline.svg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '192px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '115px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '26px'],
                ["style", "width", '120px']
            ],
            "${_short_1}": [
                ["style", "top", '23px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '62px'],
                ["style", "opacity", '0'],
                ["style", "left", '57px'],
                ["style", "width", '18px']
            ],
            "${_long_1Copy2}": [
                ["style", "top", '90px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '81px'],
                ["style", "left", '-20px'],
                ["style", "width", '18px']
            ],
            "${_Group}": [
                ["style", "top", '78px'],
                ["style", "left", '87px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_long_1Copy}": [
                ["style", "top", '-9px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '81px'],
                ["style", "left", '166px'],
                ["style", "width", '18px']
            ],
            "${_Rectangle2Copy2}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '115px'],
                ["style", "top", '109px'],
                ["style", "left", '109px'],
                ["style", "width", '120px']
            ],
            "${_logo-mask}": [
                ["style", "top", '-78px'],
                ["style", "height", '336px'],
                ["style", "left", '-90px'],
                ["style", "width", '336px']
            ],
            "${_short_2}": [
                ["style", "top", '30px'],
                ["style", "-webkit-transform-origin", [50,85.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,85.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,85.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,85.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,85.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '62px'],
                ["style", "opacity", '0'],
                ["style", "left", '70px'],
                ["style", "width", '18px']
            ],
            "${_logo-outline}": [
                ["style", "height", '160px'],
                ["style", "top", '85px'],
                ["style", "left", '86px'],
                ["style", "width", '160px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,127,102,1.00)'],
                ["style", "width", '332px'],
                ["style", "height", '332px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6250,
            autoPlay: true,
            labels: {
                "Repeat": 6096
            },
            timeline: [
                { id: "eid406", tween: [ "style", "${_short_2}", "top", '30px', { fromValue: '30px'}], position: 0, duration: 0, easing: "easeOutQuint" },
                { id: "eid19", tween: [ "style", "${_short_2}", "top", '33px', { fromValue: '33px'}], position: 697, duration: 0, easing: "easeOutBack" },
                { id: "eid20", tween: [ "style", "${_short_2}", "top", '34px', { fromValue: '34px'}], position: 1297, duration: 0, easing: "easeOutBack" },
                { id: "eid407", tween: [ "style", "${_long_1Copy}", "top", '-9px', { fromValue: '-9px'}], position: 0, duration: 0, easing: "easeOutQuint" },
                { id: "eid41", tween: [ "style", "${_long_1Copy}", "top", '69px', { fromValue: '-9px'}], position: 750, duration: 520, easing: "easeInQuart" },
                { id: "eid10", tween: [ "transform", "${_short_1}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 596, duration: 478, easing: "easeOutExpo" },
                { id: "eid31", tween: [ "transform", "${_short_2}", "rotateZ", '-270deg', { fromValue: '0deg'}], position: 697, duration: 600, easing: "easeInQuart" },
                { id: "eid4", tween: [ "style", "${_long_1Copy2}", "left", '48px', { fromValue: '-20px'}], position: 378, duration: 319, easing: "easeOutBack" },
                { id: "eid405", tween: [ "style", "${_long_1Copy2}", "top", '90px', { fromValue: '90px'}], position: 0, duration: 0, easing: "easeOutQuint" },
                { id: "eid5", tween: [ "style", "${_long_1Copy2}", "top", '24px', { fromValue: '90px'}], position: 378, duration: 319, easing: "easeOutBack" },
                { id: "eid686", tween: [ "style", "${_Rectangle2}", "left", '108px', { fromValue: '25px'}], position: 5847, duration: 249, easing: "easeInExpo" },
                { id: "eid692", tween: [ "style", "${_Rectangle2Copy2}", "width", '120px', { fromValue: '120px'}], position: 0, duration: 0, easing: "easeOutQuint" },
                { id: "eid693", tween: [ "style", "${_Rectangle2Copy2}", "width", '120px', { fromValue: '120px'}], position: 291, duration: 0, easing: "easeOutQuint" },
                { id: "eid15", tween: [ "style", "${_short_1}", "opacity", '1', { fromValue: '0'}], position: 596, duration: 0, easing: "easeInQuint" },
                { id: "eid741", tween: [ "style", "${_Group}", "left", '87px', { fromValue: '87px'}], position: 0, duration: 0, easing: "easeInExpo" },
                { id: "eid51", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,127,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,127,102,1.00)'}], position: 0, duration: 0, easing: "easeInQuart" },
                { id: "eid739", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,127,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,127,102,1.00)'}], position: 208, duration: 0, easing: "easeInExpo" },
                { id: "eid738", tween: [ "color", "${_Stage}", "background-color", 'rgba(216,216,216,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,127,102,1.00)'}], position: 6250, duration: 0, easing: "easeInExpo" },
                { id: "eid11", tween: [ "style", "${_short_1}", "left", '70px', { fromValue: '59px'}], position: 596, duration: 478, easing: "easeOutExpo" },
                { id: "eid690", tween: [ "style", "${_Rectangle2Copy2}", "left", '191px', { fromValue: '109px'}], position: 0, duration: 428, easing: "easeInExpo" },
                { id: "eid404", tween: [ "style", "${_Stage}", "height", '332px', { fromValue: '332px'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_long_1Copy}", "left", '92px', { fromValue: '165px'}], position: 750, duration: 520, easing: "easeInQuart" },
                { id: "eid403", tween: [ "style", "${_Stage}", "width", '332px', { fromValue: '332px'}], position: 0, duration: 0 },
                { id: "eid688", tween: [ "style", "${_Rectangle2Copy2}", "top", '28px', { fromValue: '109px'}], position: 0, duration: 428, easing: "easeInExpo" },
                { id: "eid685", tween: [ "style", "${_Rectangle2}", "top", '109px', { fromValue: '193px'}], position: 5847, duration: 249, easing: "easeInExpo" },
                { id: "eid47", tween: [ "style", "${_short_2}", "opacity", '1', { fromValue: '0'}], position: 697, duration: 139, easing: "easeInQuart" },
                { id: "eid48", tween: [ "style", "${_short_2}", "opacity", '1', { fromValue: '1'}], position: 836, duration: 461, easing: "easeInQuart" },
                { id: "eid27", tween: [ "style", "${_short_2}", "-webkit-transform-origin", [50,85.5], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,85.5]}], position: 697, duration: 0, easing: "easeOutBack" },
                { id: "eid835", tween: [ "style", "${_short_2}", "-moz-transform-origin", [50,85.5], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,85.5]}], position: 697, duration: 0, easing: "easeOutBack" },
                { id: "eid836", tween: [ "style", "${_short_2}", "-ms-transform-origin", [50,85.5], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,85.5]}], position: 697, duration: 0, easing: "easeOutBack" },
                { id: "eid837", tween: [ "style", "${_short_2}", "msTransformOrigin", [50,85.5], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,85.5]}], position: 697, duration: 0, easing: "easeOutBack" },
                { id: "eid838", tween: [ "style", "${_short_2}", "-o-transform-origin", [50,85.5], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,85.5]}], position: 697, duration: 0, easing: "easeOutBack" },
                { id: "eid408", tween: [ "style", "${_short_1}", "top", '23px', { fromValue: '23px'}], position: 0, duration: 0, easing: "easeOutQuint" },
                { id: "eid12", tween: [ "style", "${_short_1}", "top", '34px', { fromValue: '23px'}], position: 596, duration: 478, easing: "easeOutExpo" }            ]
        }
    }
},
"Symbol_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'logo-mask',
                    type: 'image',
                    rect: ['0px', '0px', '325px', '325px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/logo-mask.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logo-mask}": [
                ["style", "top", '0px'],
                ["style", "height", '325px'],
                ["style", "left", '0px'],
                ["style", "width", '325px']
            ],
            "${symbolSelector}": [
                ["style", "height", '325px'],
                ["style", "width", '325px']
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
},
"logo-outline": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'logo-outline',
                    type: 'image',
                    rect: ['0px', '0px', '164px', '173px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/logo-outline.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logo-outline}": [
                ["style", "top", '0px'],
                ["style", "height", '173px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '164px']
            ],
            "${symbolSelector}": [
                ["style", "height", '173px'],
                ["style", "width", '164px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4582,
            autoPlay: true,
            timeline: [
                { id: "eid118", tween: [ "style", "${_logo-outline}", "opacity", '1', { fromValue: '0'}], position: 4582, duration: 0, easing: "easeOutExpo" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "logo-animation");
