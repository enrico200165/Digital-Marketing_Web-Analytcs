


function genericClickHandler(evt) {	    	
	evt.preventDefault(); // try to prevent navigating away    	    	
	target = evt.target;
	clickMatches(target,selsMustTrap,true);
	buildPath(target);
    return false;    		
}


var codeToExecute = function() {
	
	dumpDataLayer();
	
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