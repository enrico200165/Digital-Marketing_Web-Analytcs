function msg(m) { console.log("##enrico: "+m) }

function buildPath(e)  {

	var pars = $(e).parents();
	
	els = pars.map(function() { return this.tagName; }).get().reverse();
	msg("elements: "+els);
	ids = pars.map(function() { return this.id; }).get().reverse();
	msg("ids: "+ids);
	classes = pars.map(function() { return this.classname; }).get().reverse();
	msg("classes: "+classes);
	
	attrs = [];
	for (i = 0; i < pars.length; i++) {	
		elattrs = Object.keys(pars[i].attributes).map(function(key){ return pars[i].attributes[key];});
	    attrs.push(elattrs);
	    msg("attr el["+i+"]: "+elattrs);
	}
	return true;
}


var idsMustTrap = ["button01"
	, "button02"
	, "ReadyToGoBar:https://rules.config.landrover.com/jdxl/en_gb/l550"
	];

var selsMustTrap = [ // "ReadyToGoBar\:https\:\/\/rules\.config\.landrover\.com\/jdxl\/en_gb\/l550"
	"#button01"
	,"#ReadyToGoBar:https://rules.config.landrover.com/jdxl/en_gb/l550"
	];


function genericClickHandler(evt) {	    	
    msg("enrico click by a " + event.target.nodeName + " element.");
	evt.preventDefault(); // try to prevent navigating away    	    	
	target = evt.target;
	msg("event target: element"+target +" ID="+target.id+" class ="+target.class);
	clickMatches(target,selsMustTrap,true);	
    return false;    		
}


var codeToExecute = function() {

	jQuery(document).ready(function(){    		
	    $(document).on('click',genericClickHandler);
	});
};


/* Load jQuery
 * */
(function(){
    var intervalInt = window.setInterval(function(){
        if(typeof jQuery !== 'undefined' && jQuery){
            // console.log('added JQuery, and maybe some event detection');
            // Clear this interval
            window.clearInterval(intervalInt);
            codeToExecute();
        }
    }, 100);
})();




