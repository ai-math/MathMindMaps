/**
 * Config MathJax to support LaTex style inline math
 */
function initializeLaTexInlineMath() {
    MathJax.Hub.Config({
	tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
    });
    console.log("Math > Initialize");
}

/**
 * Notify MathJax to update all math equations in the document
 */
function updateMathEquations() {
    MathJax.Hub.Queue(['Typeset',MathJax.Hub]);
    console.log("Math > update: all");
}

/**
 * Notify MathJax to update math equations within elements of given id
 */
function updateMathEquationById(id) {
    MathJax.Hub.Queue(['Typeset',MathJax.Hub, id]);
    console.log("Math > update: " + id);
}

var catx = catx || {};

catx.MathController = function(eventBus) {

    var self = this;
    /**
     * Initialise.
     * 
     * @private
     */
    this.init = function() {

	eventBus.subscribe(mindmaps.Event.MAP_LOADED, this.mapLoaded
			   .bind(this));
	eventBus.subscribe(mindmaps.Event.NODE_BEGIN_EDITING, this.nodeBeginEditing
			   .bind(this));
    };

    /**
     * Handler for map loaded event.
     */
    this.mapLoaded = function(map) {
	updateMathEquations();
    };
    
    this.nodeBeginEditing = function(node) {
	console.log("Event > Editing Node: " + node.getContainerId() + " caption: " + node.getCaptionId() + " text: " + node.text.caption);
	
	var captionElem = $("#" + node.getCaptionId()).text(node.text.caption);
    };
    this.init();
}
