module.exports = function(eleventyConfig) {  
     
    // Copy `src/style.css` to `_site/style.css`  
    eleventyConfig.addPassthroughCopy("src/style.css"); 
    eleventyConfig.addPassthroughCopy("src/tailwind-output.css"); 
    eleventyConfig.addPassthroughCopy("src/assets/fonts/*");
    eleventyConfig.addPassthroughCopy("src/assets/images/**/*");
    eleventyConfig.addPassthroughCopy("src/script.js"); 

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