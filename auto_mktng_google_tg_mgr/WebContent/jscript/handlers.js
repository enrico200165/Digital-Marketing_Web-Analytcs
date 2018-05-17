/*
 * Exploring how to detect clicks
 * el: should be evt.target
 * */
function clickMatches(el, sels, dump = true) {

	if (!el) {
		msg("element is null");
	}
	
	for (i = 0; i < sels.length; i++) {
		if (sels[i].charAt(0) == '.' || sels[i].charAt(0) == '#') 
			escSel = sels[i].charAt(0)+jQuery.escapeSelector(sels[i].substring(1));
		else 
			escSel = jQuery.escapeSelector(sels[i]);

		//descs = jQuery("#div01").find(el);
		descs = jQuery(escSel).find(el);
		if (descs.length > 0) {
				msg("element: " + el+" is descendants of $("+sels[i]+")")
		}

		
//		console.log(jQuery(escSel)[0]+" - "+el)
		if (jQuery(escSel).length > 0 && jQuery(escSel)[0] == el ){
			msg(jQuery(escSel)[0]+" is itself "+ el)				
		}
		
/*		
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
*/
	}
}


