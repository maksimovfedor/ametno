// Example values for demonstration
let labelExpr = "datum.label + ' some text ' + datum.label";
let legend = {
    encode: {
        labels: {
            update: {
                text: {
                    signal: "legendTextSignal"
                }
            }
        }
    }
};

// Replacing all occurrences of 'datum.label' with the value of legend.encode.labels.update.text.signal
let expr = labelExpr.replaceAll('datum.label', legend.encode.labels.update.text.signal);

console.log(expr);  // Output: "legendTextSignal + ' some text ' + legendTextSignal"
