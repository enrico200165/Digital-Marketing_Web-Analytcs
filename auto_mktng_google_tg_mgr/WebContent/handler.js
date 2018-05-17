if(typeof jQuery === 'undefined'|| !jQuery){
    (function(){
        var s=document.createElement('script');
        s.setAttribute('src','https://code.jquery.com/jquery-3.3.1.js');
        if(typeof jQuery=='undefined'){
            document.getElementsByTagName('head')[0].appendChild(s);
        }
    })();
}

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





(function(){
    var codeToExecute = function(){

    	
    	/** ******************** */
        // YOUR CODE HERE
    	
    	var idsMustTrap = ["button01"
    		, "button02"
    		, "ReadyToGoBar:https://rules.config.landrover.com/jdxl/en_gb/l550"
    		];

    	var selsMustTrap = [ // "ReadyToGoBar\:https\:\/\/rules\.config\.landrover\.com\/jdxl\/en_gb\/l550"
    		"#button01"
    		,"#ReadyToGoBar:https://rules.config.landrover.com/jdxl/en_gb/l550"
    		];



    	
    	function evmatches(el, sels, dump = true) {
    			    		    		
    		for (i = 0; i < sels.length; i++) {
    			if (sels[i].charAt(0) == '.' || sels[i].charAt(0) == '.') 
    				escSel = sels[i].charAt(0)+jQuery.escapeSelector(sels[i].substring(1, sels[i].length-1));
    			else 
    				escSel = jQuery.escapeSelector(sels[i]);

    			// match
/*    			if (el.match(escSel)) {
    				console.log("'"+el.id+"' matches "+sels[i])
    			}
    			if ($(escSel).match(el)) {
    				console.log("'"+el.id+"' matches "+sels[i]+" reversed")
    			}
*/
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

    			msg(buildPath(el));
    			
    			return true;
    		}
    	}


    	function processEvent(evt) {
    		// console.log("in process event");
    		target = evt.target;
    		msg("event target: element"+target +" ID="+target.id+" class ="+target.class);
    		evmatches(target,selsMustTrap,true);	
    	}

    	jQuery(document).ready(function(){
    		
    	    $(document).on('click', function(evt) {
    	    	
    	    	matches = $("div").has("div");
    	    	for (i = 0; i < matches.length; i++) {
    	    		if (matches.has("div")) {
    	    			msg("yes")
    	    		} else {
    	    			msg("no")    	    			
    	    		}
    	    	}
    	    	
    	    	evt.preventDefault()
    	    	
    	        message = "enrico Click by a " + event.target.nodeName + " element.";
    	        console.log(message);
    	        if(!jQuery(evt.target).is('#my-id')) {
    	        // Hide
    	        }
    	        processEvent(evt);
    	        
    	        return false;
    	    });
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




