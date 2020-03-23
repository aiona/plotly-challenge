function init() {

    // Reference the dropdown select element
    var selector = d3.select("#selDataset");

    // Read in JSON file
    d3.json("./static/js/samples.json").then((data) => {
        console.log(data);
        
        var names_list = data.names;

        names_list.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample)
        });

        console.log(names_list)
        const firstSample = names_list[0];
        chart(firstSample);
        namesList = names_list;

        buildMetadata(firstSample);
         
    });
    
}

function buildMetadata(sample) {
    d3.json("./static/js/samples.json").then((data) => {
        var metadata = data.metadata;

        console.log(metadata);
        var resultArray = metadata.filter(metadata_item => metadata_item.id == sample);
        var result = resultArray[0];
        console.log(result);


        var panel = d3.select("#sample-metadata");
        panel.html("");

        Object.entries(result).forEach(([key, value]) => {
            panel.append("h6").text(`${key}: ${value}`);
            
        })
    }
    
    )
}

function chart(sample) {

    d3.json("./static/js/samples.json").then((data) => {
        var samples_list = data.samples;

        console.log(samples_list);
        var resultArray = samples_list.filter(sample_item => sample_item.id == sample);
        var result = resultArray[0];
        console.log(result);

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values.slice(0,10).reverse();
        console.log(otu_ids);
        var top_otu = otu_ids.slice(0, 10).reverse()
        console.log(top_otu)

        // Create horizontal bar chart to display top 10 OTU
        var bars = [{
            x: sample_values,
            y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            orientation: 'h',
            text: otu_labels.slice(0,10).reverse(),
            type: 'bar'
        }];

        var layout = {
            title: 'Top 10 OTUs',
        };

        barsT = bars
        Plotly.newPlot('bar', bars, layout);

        // Create bubble chart to display each sample
       
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
            //colorscale
        };

        var layout = {
            //margins

            xaxis: {
                title: 'OTU ID'
            }

        };

        var dbubbles = [bubbles];
        bubblesT = dbubbles

        Plotly.newPlot('bubble', dbubbles, layout);
            

    });
}

function optionChanged(newSample) {

    buildMetadata(newSample);

    chart(newSample);

};

    init()