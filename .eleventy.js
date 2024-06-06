module.exports = function(eleventyConfig) {  
     
    // Copy `src/style.css` to `_site/style.css`  
    eleventyConfig.addPassthroughCopy("src/style.css"); 
    eleventyConfig.addPassthroughCopy("src/tailwind-output.css"); 
    eleventyConfig.addPassthroughCopy("src/assets/fonts/*");
    eleventyConfig.addPassthroughCopy("src/assets/images/**/*");
    eleventyConfig.addPassthroughCopy("src/script.js"); 
    
    eleventyConfig.addShortcode('bigImage', function(image, alt, caption) {
        return `
          <figure >
              <img class="shadow-md rounded-lg" src="${image}" alt="${alt}">
              <figcaption>${caption}</figcaption>
          </figure>
        `;
    });

    eleventyConfig.addShortcode('pillbutton', function(page, text, link) {
      return `
      <a ${page.url === link ? 'aria-current="page"' : ''} class="pill-button" href="${link}">
      ${text}
        </a>

      `;
  });

    eleventyConfig.addShortcode('slideshow', function(images, directory) {
      var dir = directory || '';
      let slideshowImages = images.map((image, index) => `
        <div class="mySlides fade">
          <img class="max-h-[80vh] rounded-lg" src="/assets/images/${dir}/${image}" />
        </div>
      `).join('');
    
      return `
        <div class="slideshow-container flex flex-col items-center cursor-pointer bg-gray-200 dark:bg-blue-950 p-2 md:p-8">
          <div class="arrow left flex flex-col justify-center cursor-pointer md:p-2">
            <svg class="stroke-blue-400 hover:fill-blue-400" width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.944 18.5352L46.9412 18.5352V25.5352L15.9436 25.5352H14.7365L15.59 26.3887L26.793 37.5917L21.8433 42.5414L1.33717 22.0353L21.8433 1.52926L26.793 6.479L15.5904 17.6816L14.7369 18.5352H15.944Z" />
            </svg>          
          </div>  
            ${slideshowImages}
          <div class="arrow right flex flex-col justify-center items-end cursor-pointer md:p-2">
            <svg class="stroke-blue-400 hover:fill-blue-400" width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.1272 25.5356H1.13V18.5356H32.1276H33.3347L32.4811 17.6821L21.2782 6.47912L26.2279 1.52937L46.734 22.0355L26.2279 42.5415L21.2782 37.5918L32.4808 26.3892L33.3343 25.5356H32.1272Z""/>
            </svg>                             
          </div>
        </div>
      `;
    });

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