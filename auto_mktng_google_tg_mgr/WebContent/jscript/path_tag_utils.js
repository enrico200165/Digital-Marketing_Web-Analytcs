/**
 * 
 */


function buildPath(e)  {

	var parsTemp = $(e).parents();
	
	pars = [e];
	for (i = 0; i < parsTemp.length; i++) { pars.push(parsTemp[i]); }
	pars.reverse();

	positions = pars.map(function(x) { return $(x).index();});
	els = pars.map(function(x) { return x.tagName; }); // msg("elements: "+els, (new Error()).lineNumber);
	ids = pars.map(function(x) { return x.id; }); // msg("ids: "+ids);
	classes = pars.map(function(x) { return x.classname; }); // msg("classes: "+classes);
	
	elAttrs = []; // vector of dictionaries
	for (i = 0; i < pars.length; i++) {

		// get keys of all attributes for curr. element
		elattrs = Object.keys(pars[i].attributes).map(function(key){ return pars[i].attributes[key];});
		
		if (elattrs.length <= 0) { // no attributes, must push anyway
			elAttrs[i] = null;
			continue;
		}
		
		// iterate over attributes of ith element
		dumpMsg = "atributes of ...<"+els[i]+">";
		ithTagAttributes = {};
		for (attrIdx = 0; attrIdx < elattrs.length; attrIdx++) {
			name = elattrs[attrIdx].name; value = elattrs[attrIdx].value;
			ithTagAttributes[name] = value; // dumpMsg += " "+name+"= '"+value+"',";
		}
		elAttrs[i] = ithTagAttributes;  // msg(dumpMsg);
		
		// build a selector
		
	}
	
	selector = "";
	for (i = 0; i < pars.length; i++) {
		
		// ID, if present stop, for this ith component
		// selector += (ids[i] ? ("#"+jQuery.escapeSelector(ids[i])) : "");
		selector += (ids[i] ? ("#"+ids[i]) : "");
		if (ids[i]) {
			selector += " "; // probably not necessary, just keep for now
			continue; // TODO restore continue after debugging
		}
		
		selector += els[i].toLowerCase(); // tag
		
		noChild = (new Set()).add("html").add("body");
		if (!noChild.has( els[i].toLowerCase()))  {
			selector += ":nth-child("+positions[i]+")";
		}
		
		// attributes
		if ((attrs = elAttrs[i])) {
			keys = Object.keys(attrs);
			for (k = 0; k < keys.length; k++) {
				selector += "["+keys[k]+"="+attrs[keys[k]]+"]";
			}
		}
		
		if (i <=  pars.length) {selector += " > ";}
	}
    msg("selector: "+selector);
	return selector;
}





function dumpDataLayer() {
	for (i = 0; i < dataLayer.length; i++) { 
		msg(dataLayer[i]);
	}
}