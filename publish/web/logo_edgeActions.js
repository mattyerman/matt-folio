
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6096,function(sym,e){sym.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'logo-outline'
(function(symbolName){})("logo-outline");
//Edge symbol end:'logo-outline'
})(jQuery,AdobeEdge,"logo-animation");