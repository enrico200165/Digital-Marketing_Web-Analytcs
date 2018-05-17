/*
 * Exploring how to detect clicks
 * el: should be evt.target
 * */
function clickMatches(el, sels, dump = true) {

	for (i = 0; i < sels.length; i++) {
		if (sels[i].charAt(0) == '.' || sels[i].charAt(0) == '#') 
			escSel = sels[i].charAt(0)+jQuery.escapeSelector(sels[i].substring(1));
		else 
			escSel = jQuery.escapeSelector(sels[i]);

		
		selecteds = jQuery(escSel); 
		
		
		// IS() : does NOT catch descendands, exact 
		if (jQuery(escSel).is(el)) {
			console.log("selector: "+escSel+" is '"+el.id+"'");
		}
		if (jQuery(el).is(jQuery(escSel))) {
			console.log("selector: "+escSel+" is '"+el.id+"'");
		}

		// HAS(): should catch descendants, ancestor.has(potentialDescendant)   
		if (jQuery(escSel).has(el)) {
			console.log("selector: "+escSel+" has() '"+el.id+"'");
		}
		if (jQuery(el).has($(escSel))) {
			console.log("selector: "+escSel+" has '"+el.id+"' reversed");
		}

		return true;
	}
}


