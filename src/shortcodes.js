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
        return `<div class="text-4xl lg:text-5xl/tight">${content}</div>`;
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
        <div class="mySlides fade w-10/12">
            <img class="max-h-[80vh] rounded-lg" src="/assets/images/${dir}/${image}" />
        </div>
    `).join('');

    return `
        <div class="slideshow-container flex flex-col items-center gap-6">
            <div class="slideshow-main flex flex-row gap-4 justify-between items-start">
                <span class="left md:first-line:text-4xl hover:text-red-400 cursor-pointer"><-</span>
                ${slideshowImages}
                <span class="right md:text-4xl hover:text-red-400 cursor-pointer whitespace-nowrap">-></span>   
            </div>
            <div class="dots-container flex gap-2">                         
        </div>
    `;
    });

}