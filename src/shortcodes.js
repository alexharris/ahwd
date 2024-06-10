module.exports = function(eleventyConfig) {

    // eleventyConfig.addShortcode('biglist', function(title1, list1, title2, list2) {
    //     const list1a = list1.split(',').map(item => `<li class="leading-snug my-0">${item.trim()}</li>`).join('');
    //     const list2b = list2.split(',').map(item => `<li class="leading-snug my-0">${item.trim()}</li>`).join('');
    //     return `
    //     <div class="flex flex-col md:flex-row my-16 gap-8 md:gap-4">
    //     <div class="md:w-1/2">
    //         <div class="text-xl uppercase pb-6 font-bold star">${title1 ? title1 : ''}</div>
    //         <ul class="text-2xl md:text-3xl list-disc pl-8 my-0">
    //             ${list1a}
    //         </ul>
    //     </div>
    //     <div class="md:w-1/2">
    //         ${title2 ? `<div class="text-xl uppercase pb-6 font-bold star">${title2}</div>` : ''}
    //         <ul class="text-2xl md:text-3xl list-disc pl-8 md:w-1/ my-0">
    //             ${list2b}
    //         </ul>
    //     </div>
    //     </div>
    //     `;
    // });

    eleventyConfig.addPairedShortcode('bigtext', function(content) {
        return `<div class="text-3xl md:text-4xl font-extrabold">${content}</div>`;
    });
  

    eleventyConfig.addShortcode('bigImage', function(image, alt, caption) {
        return `
        <figure class="full-width">
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

}