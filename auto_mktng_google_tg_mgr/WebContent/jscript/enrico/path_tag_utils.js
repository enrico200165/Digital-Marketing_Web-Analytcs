


/** examine path info of event target 
 * (later on maybe also build a selector)
* e: event target
*/

function buildPath(e)  {

	var parsTemp = $(e).parents();
	
	// get list of parents, adjust direction
	pars = [e];
	for (i = 0; i < parsTemp.length; i++) { pars.push(parsTemp[i]); }
	pars.reverse();

	positions = pars.map(function(x) { return $(x).index();});
	els = pars.map(function(x) { return x.tagName; }); // msg("elements: "+els, (new Error()).lineNumber);
	ids = pars.map(function(x) { return x.id; }); // msg("ids: "+ids);
	classes = pars.map(function(x) { return x.className; }); // msg("classes: "+classes);

	
	for (deepestIdPos = ids.length;  ids[--deepestIdPos] == null && deepestIdPos >=0; ) {}
    msg(deepestIdPos);
		
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
			name = elattrs[attrIdx].name;
			if (name.toLowerCase() == "class" || name.toLowerCase() == "id") {
				continue; // process elsewhere in this fnc
			}
			value = elattrs[attrIdx].value;
			ithTagAttributes[name] = '\"'+value+'\"'; // dumpMsg += " "+name+"= '"+value+"',";
		}
		elAttrs[i] = ithTagAttributes;  // msg(dumpMsg);
		
		// build a selector
		
	}
	
	
	// --- build selector, will NOT work because too complex ---
	// that's ok, I want all the info, then manually I choose/build it
	selector = ""; 
	for (i = 0; i < pars.length; i++) {

		// tags RECOMMENDED AGAINST
		selector += els[i].toLowerCase(); // tag
		
		// ID, if present stop, for this ith component
		// selector += (ids[i] ? ("#"+jQuery.escapeSelector(ids[i])) : "");
		selector += (ids[i] ? ("#"+ids[i]) : "");
		if (ids[i]) {
			// selector += " "; // probably not necessary, just keep for now
			// continue; // TODO restore continue after debugging
		}
				
		// classes
		if (classes[i] != null && classes[i].length >0)  {
			clss = classes[i].replace(" ", ".");
			selector += ("."+clss);
		}
		
		
		// attributes
		if ((attrs = elAttrs[i])) {
			keys = Object.keys(attrs);
			for (k = 0; k < keys.length; k++) {
				selector += "["+keys[k]+"="+attrs[keys[k]]+"]";
			}
		}

		
		// add child position
		noChild = (new Set()).add("html").add("body");
		if (!noChild.has( els[i].toLowerCase()))  {
			selector += ":nth-child("+positions[i]+")";
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