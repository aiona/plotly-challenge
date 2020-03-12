function init() {

    // Read in JSON file
        d3.json("samples.json").then((data) => {
            console.log(data);
            
           var names_list = data.names;
        
        });
    
function chart(sample) {

    d3.json("samples.json").then((data) => {
        var samples_list = data.samples;

        var resultArray = samples_list.filter(sample_item => sample_item.id == sample.id);
        var result = resultArray[0];
        console.log(result);

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        // Create horizontal bar chart to display top 10 OTU
        var bars = {
            x: sample_values,
            y: otu_ids,
            name: 'Top 10 OTU',
            orientation: 'h',
            marker: {
            color: rgb(55,128,191),
            width: 1
            },
            type: 'bar'
        };

        var dbars = bars;

        Plotly.newPlot('bar', dbars);

        // Create bubble chart to display each sample
        var bubbles = {
            x: otu_ids,
            y: sample_values,
            name: 'OTU ID',
            mode: 'markers',
            marker: {
                color: otu_ids,
            size: sample_values,
            labels: otu_labels
            }
            // text:
        };

        var dbubbles = bubbles;

        Plotly.newPlot('bubble', dbubbles);
            

    }
)};

    var firstSample = names_list[0];

    chart(firstSample);

// Display sample metadata    
/*  function buildMetadata(firstSample) {
    
    } */

    // Function to tie data.names to div id="well" (Test Subject ID)
    // On change, show selected name in div class="panel-heading" (Demographic Info) by calling chart function
    // Call chart function
}