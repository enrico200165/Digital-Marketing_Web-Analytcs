/*
 * Exploring how to detect clicks
 * el: should be evt.target
 * */
function clickMatches(el, sels, dump = true) {

	if (!el) {
		msg("element is null");
	}
	msg("\n\n\n---------------------------------------");

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
		
		if (jQuery(escSel).length > 0 && jQuery(escSel)[0] == el ){
			msg(""+jQuery(escSel)[0].tagName +" is itself "+ el+" id: "+ (el.id ? el.id : "no id" ));											
		}		
	}
}


