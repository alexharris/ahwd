const shortcodes = require('./src/shortcodes');


module.exports = function(eleventyConfig) {  

    shortcodes(eleventyConfig);
     
    // Copy `src/style.css` to `_site/style.css`  
    eleventyConfig.addPassthroughCopy("src/style.css"); 
    eleventyConfig.addPassthroughCopy("src/tailwind-output.css"); 
    eleventyConfig.addPassthroughCopy("src/assets/fonts/*");
    eleventyConfig.addPassthroughCopy("src/assets/images/**/*");
    eleventyConfig.addPassthroughCopy("src/script.js"); 
    

    // This collects all of the jobs into a collection
    eleventyConfig.addCollection("jobs", function(collection) {
      return collection.getFilteredByGlob("work/*.md");
    });    

    // This adds a nunjuks filter for map, used in the job pagination
    eleventyConfig.addNunjucksFilter("map", function(arr, key) {
      return arr.map(item => item[key]);
    });

  // This adds a nunjuks filter for indexOf, used in the job pagination
    eleventyConfig.addNunjucksFilter("indexOf", function(arr, val) {
      return arr.indexOf(val);
    });    


    return {
        // When a passthrough file is modified, rebuild the pages:    
        passthroughFileCopy: true,        
        dir: {  
            input: "src",  
            includes: "_includes",      
            data: "_data",     
            output: "_site"    
        }  
    };
};