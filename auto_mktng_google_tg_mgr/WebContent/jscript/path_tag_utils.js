/**
 * 
 */


function buildPath(e)  {

	var parsTemp = $(e).parents();
	
	pars = [e];
	for (i = 0; i < parsTemp.length; i++) { pars.push(parsTemp[i]); }
	pars.reverse();
	
	els = pars.map(function(x) { return x.tagName; }); msg("elements: "+els, (new Error()).lineNumber);
	ids = pars.map(function(x) { return x.id; }); msg("ids: "+ids);
	classes = pars.map(function(x) { return x.classname; }); msg("classes: "+classes);
	
	elAttrs = []; // vector of dictionaries
	for (i = 0; i < pars.length; i++) {

		// get keys of all attributes for curr. element
		elattrs = Object.keys(pars[i].attributes).map(function(key){ return pars[i].attributes[key];});
		
		if (elattrs.length <= 0) { // no attributes, must push anyway
			elAttrs[i] = null;
			continue;
		}
		
		dumpMsg = "atributes of ...<"+els[i]+">";
		// iterate over attributes of ith element
		ithTagAttribules = {};
		for (attrIdx = 0; attrIdx < elattrs.length; attrIdx++) {
			name = elattrs[attrIdx].name;
			value = elattrs[attrIdx].value;
			ithTagAttributes.push({name: value}); 
			dumpMsg += " "+name+"= '"+value+"',";
		}
		elAttrs[i] = ithTagAttributes; 
		msg(dumpMsg);
	}
		
	
	return true;
}





function dumpDataLayer() {
	for (i = 0; i < dataLayer.length; i++) { 
		msg(dataLayer[i]);
	}
}