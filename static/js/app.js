// Read in JSON file
//const data = await d3.json("/static/data/samples.json")
d3.json("../data/samples.json").then((data) => {
    console.log(data);

});

// Create horizontal bar chart to display top 10 OTU

 var trace1 = {
    x: [0,50,100,150],
    y: data.sample_values,
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