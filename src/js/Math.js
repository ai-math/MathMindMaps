/**
 * Config MathJax to support LaTex style inline math
 */
function initializeLaTexInlineMath() {
    MathJax.Hub.Config({
	tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
    });
}

/**
 * Notify MathJax to update all math equations in the document
 */
function updateMathEquations() {
    MathJax.Hub.Queue(['Typeset',MathJax.Hub]);
}

/**
 * Notify MathJax to update math equations within elements of given id
 */
function updateMathEquationById(id) {
    MathJax.Hub.Queue(['Typeset',MathJax.Hub, id]);
}
