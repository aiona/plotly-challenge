


// Create horizontal bar chart to display top 10 OTU

 var trace1 = {
    x: data.sample_values,
    y: data.otu_ids,
    name: 'Top 10 OTU',
    orientation: 'h',
    marker: {
        color: rgb(55,128,191),
        width: 1
    },
    type: 'bar'
}; 

// Create bubble chart to display each sample

// Display sample metadata

// Display key-value pairs from metadata JSON

// Update plots when new sample is selected

    //Event handler?

// Bonus
function buildMetadata(sample) {
    
}

function chart(sample) {
    d3.json("samples.json").then((data) => {
        var samples_list = data.samples;

        var results = samples_list.filter(sample_item => sample_item.id == sample.id);
        console.log(results);
    });
}

function init() {

// Read in JSON file
    d3.json("samples.json").then((data) => {
        console.log(data);
        
       var names_list = data.names;
    
    });

    var firstSample = names_list[0];

    // buildMetadata(firstSample)
    chart(firstSample);
}