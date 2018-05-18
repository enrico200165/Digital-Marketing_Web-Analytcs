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
	
	attrs = [];
	for (i = 0; i < pars.length; i++) {

		//elattrs = Object.keys(pars[i].attributes).map(function(key){ return pars[i].attributes[key];});
		
		// iterate over attributes of ith element
		for (attrIdx = 0; attrIdx < elattrs.length; attrIdx++) {
			name = elattrs[attrIdx].name;
			value = elattrs[attrIdx].value;
			msg(els[i]+"["+name+"] = "+value);
		}
				
	    //attrs.push(elattrs);
	    // msg("attr el["+i+"]: "+elattrs);
	}
	return true;
}


function dumpDataLayer() {
	for (i = 0; i < dataLayer.length; i++) { 
		msg(dataLayer[i]);
	}
}