
/*
========================================
AUSTRALIA'S HIDDEN WINGS
FIT3179 Data Visualisation 2

Vega and Vega-Lite Visualisations
11 visualisations in total
========================================
*/


// ========================================
// CHAPTER 1: INSECT GROUP BAR CHART
// ========================================

vegaEmbed("#insect_bar_chart", "insect_bar_chart.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {
    console.log("Insect bar chart loaded successfully!");
})
.catch(function(error) {
    console.error("Error loading insect bar chart:", error);
});


// ========================================
// CHAPTER 1: INSECT FAMILY SUNBURST DIAGRAM
// ========================================

vegaEmbed("#insect_sunburst", "insect_sunburst.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {
    console.log("Insect sunburst diagram loaded successfully!");
})
.catch(function(error) {
    console.error("Error loading insect sunburst diagram:", error);
});


// ========================================
// CHAPTER 2: AUSTRALIAN CHOROPLETH MAP
// ========================================

vegaEmbed("#insect_map", "insect_choropleth.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {
    console.log("Choropleth map loaded successfully!");
})
.catch(function(error) {
    console.error("Error loading choropleth map:", error);
});


// ========================================
// CHAPTER 2: INSECT OBSERVATION POINT MAP
// ========================================

vegaEmbed("#insect_point_map", "insect_point_map.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {
    console.log("Insect point map loaded successfully!");
})
.catch(function(error) {
    console.error("Error loading insect point map:", error);
});


// ========================================
// CHAPTER 3: SEASONAL INSECT HEATMAP
// ========================================

vegaEmbed("#insect_seasonal_heatmap", "insect_seasonal_heatmap.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {
    console.log("Seasonal heatmap loaded successfully!");
})
.catch(function(error) {
    console.error("Error loading seasonal heatmap:", error);
});


// ========================================
// CHAPTER 4: RAINFALL AND INSECT SIGHTINGS
// RADAR CHART
// ========================================

vegaEmbed("#insect_rainfall_chart", "insect_rainfall_chart.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {
    console.log("Rainfall radar chart loaded successfully!");
})
.catch(function(error) {
    console.error("Error loading rainfall radar chart:", error);
});


// ========================================
// CHAPTER 4: WETTER VS DRIER MONTHS
// CONNECTED COMPARISON CHART
// ========================================

vegaEmbed("#insect_rainfall_wet_dry", "insect_rainfall_wet_dry.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {
    console.log("Rainfall wet-dry comparison loaded successfully!");
})
.catch(function(error) {
    console.error("Error loading rainfall wet-dry comparison:", error);
});


// ========================================
// CHAPTER 5: HISTORICAL INSECT STREAMGRAPH
// 1980–2025
// ========================================

vegaEmbed("#insect_streamgraph", "insect_streamgraph.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {
    console.log("Historical insect streamgraph loaded successfully!");
})
.catch(function(error) {
    console.error("Error loading historical insect streamgraph:", error);
});


// ========================================
// CHAPTER 6: MELBOURNE INSECT SANKEY DIAGRAM
// ========================================

vegaEmbed("#melbourne_insect_sankey", "insect_melbourne_sankey.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {
    console.log("Melbourne insect Sankey diagram loaded successfully!");
})
.catch(function(error) {
    console.error("Error loading Melbourne insect Sankey diagram:", error);
});


// ========================================
// CHAPTER 7: THREATENED INSECT
// PROPORTIONAL-SYMBOL MAP
// ========================================

vegaEmbed("#insect_threatened_map", "insect_threatened_map.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {
    console.log("Threatened insect map loaded successfully!");
})
.catch(function(error) {
    console.error("Error loading threatened insect map:", error);
});


// ========================================
// CHAPTER 8: THREATENED INSECT
// CONSERVATION CHART
// ========================================

vegaEmbed("#insect_conservation_chart", "insect_conservation_chart.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {
    console.log("Conservation chart loaded successfully!");
})
.catch(function(error) {
    console.error("Error loading conservation chart:", error);
});
