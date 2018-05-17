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





(function(){
    var codeToExecute = function(){

    	
    	/** ******************** */
        // YOUR CODE HERE
    	
 
    	/*
    	 * Exploring how to detect clicks
    	 * el: should be evt.target
    	 * */
    	function clickMatches(el, sels, dump = true) {
    			    		    		
    		for (i = 0; i < sels.length; i++) {
    			if (sels[i].charAt(0) == '.' || sels[i].charAt(0) == '.') 
    				escSel = sels[i].charAt(0)+jQuery.escapeSelector(sels[i].substring(1, sels[i].length-1));
    			else 
    				escSel = jQuery.escapeSelector(sels[i]);

    			// is: does NOT catch descendands, exact 
    			if (jQuery(escSel).is(el)) {
    				console.log("selector: "+escSel+" is '"+el.id+"'");
    			}
    			if (jQuery(el).is(jQuery(escSel))) {
    				console.log("selector: "+escSel+" is '"+el.id+"'");
    			}

    			// has: should catch descendants, ancestor.has(potentialDescendant)   
    			if (jQuery(escSel).has(el)) {
    				console.log("selector: "+escSel+" has '"+el.id+"'");
    			}
    			if (jQuery(el).has($(escSel))) {
    				console.log("selector: "+escSel+" has '"+el.id+"' reversed");
    			}

    			return true;
    		}
    	}


    	function genericClickHandler(evt) {	    	
	        msg("enrico click by a " + event.target.nodeName + " element.");
	    	evt.preventDefault(); // try to prevent navigating away    	    	
    		target = evt.target;
    		msg("event target: element"+target +" ID="+target.id+" class ="+target.class);
    		clickMatches(target,selsMustTrap,true);	
	        return false;    		
    	}
    	
    	
    	jQuery(document).ready(function(){    		
    	    $(document).on('click',genericClickHandler);
    	});


        /** ******************** */
        console.log('added JQuery, and maybe some event detection');
    };

    var intervalInt = window.setInterval(function(){
        if(typeof jQuery !== 'undefined' && jQuery){
            // Clear this interval
            window.clearInterval(intervalInt);

            codeToExecute();
        }
    }, 100);
})();




