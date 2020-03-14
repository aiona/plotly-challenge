function init() {

    // Read in JSON file
    d3.json("./static/js/samples.json").then((data) => {
        console.log(data);
        
        var names_list = data.names;
        const firstSample = names_list[0];
        chart(firstSample);
        
    });
    
}

    
function chart(sample) {

    d3.json("./static/js/samples.json").then((data) => {
        var samples_list = data.samples;

        var resultArray = samples_list.filter(sample_item => sample_item.id == sample.id);
        var result = resultArray[0];
        console.log(result);

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        console.log(otu_ids);

        // Create horizontal bar chart to display top 10 OTU
        var bars = [{
            x: sample_values,
            y: otu_ids,
            type: 'bar'
        }];

        var layout = {
            title: 'title',
            xaxis: { title: 'x-title'},
            yaxis: { title: 'y-title'}
        };


        Plotly.newPlot('bar', bars, layout);

        // Create bubble chart to display each sample
        /*
        var bubbles = {
            x: otu_ids,
            y: sample_values,
            name: 'OTU ID',
            mode: 'markers',
            marker: {
                color: otu_ids,
            size: sample_values,
            },
            text: otu_labels
        };

        var layout = {

            xaxis: {
                title: 'OTU ID'
            }

        };

        var dbubbles = [bubbles];

        Plotly.newPlot('bubble', dbubbles, layout);*/
            

    });
}

init()

// Display sample metadata    
/*  function buildMetadata(firstSample) {
    
    } 

    // Populate dropdown menu with data.names - select id="well" (Test Subject ID)
    
    d3.selectAll("#selDataset").on("change", buildMetadata);

    // Function called by change to DOM
    function buildMetadata(newSample) {

        // Select dropdown menu and assign to variable
        var dropdownMenu = d3.select("#selDataset");

        // Assign the value of the dropdown menu option to a variable
        var menuOption = dropdownMenu.property("value");

        var data = [];

        // Choose selected dataset based on value in names_list
        if (data.names == firstSample) {
            chart(firstSample);
        }

        else if (data.names != firstSample) {
            chart(sample);
        }

        // Update the restyled plot's values
        function updatePlotly(newdata) {
            Plotly.restyle("bar", "values", [data]);
        }
    }



        // Call function to update the chart
        updatePlotly(data);
    
   


    // On change, show selected name in div class="panel-heading" (Demographic Info) by calling chart function
    // Call chart function
}
*/