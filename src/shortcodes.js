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
        return `<div class="text-3xl lg:text-4xl/tight">${content}</div>`;
    });

    eleventyConfig.addPairedShortcode('mediumtext', function(content) {
        return `<div class="text-xl lg:text-2xl/tight">${content}</div>`;
    });    
  
    eleventyConfig.addShortcode('bigImage', function(image, alt, caption) {
        return `
        <figure class="full-width">
            <img class="shadow-md rounded-lg" src="${image}" alt="${alt}">
            <figcaption class="text-neutral-400">${caption}</figcaption>
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
        <div class="mySlides fade w-11/12">
            <img class="max-h-[80vh] rounded-lg mx-auto" src="/assets/images/${dir}/${image}" />
        </div>
    `).join('');

    return `
        <div class="slideshow-container flex flex-col items-center gap-6">
            <div class="slideshow-main w-full flex flex-row gap-4 justify-between items-center">
                <span class="left md:first-line:text-4xl hover:text-red-400 cursor-pointer">←</span>
                ${slideshowImages}
                <span class="right md:text-4xl hover:text-red-400 cursor-pointer whitespace-nowrap">→</span>   
            </div>
            <div class="dots-container flex gap-2">                         
        </div>
    `;
    });


    eleventyConfig.addPairedShortcode('twocolumn', function(content) {
        const columns = content.split('<!-- split -->');
        return `<div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
                ${columns[0]}
            </div>
            <div class="md:w-1/2">
                ${columns[1]}
            </div>
        </div>`;
    });


    // eleventyConfig.addShortcode('workrolestech', function(roles, tech) {
    //     console.log(roles)
    //     const rolesList = roles.map(role => `<li>${role}</li>`).join('');
    //     console.log('rolesList', rolesList);
    //     // const techList = techlist.map(tech => `<li>${tech}</li>`).join('');
    //     return `<div class="full-width mb-24">
    //         <div class="flex flex-col md:flex-row gap-12 items-start w-full">  
    //             <div class="w-full md:w-1/2">
    //                 <h2 class="instrument-serif text-2xl">❋ Roles</h2>                    
    //                 <ul class="leading-snug">
    //                     ${rolesList}   
    //                 </ul>                    
    //             </div>
    //             <div class="w-full md:w-1/2">
    //                 <h2 class="instrument-serif text-2xl">❋ Technology</h2>
    //                 <ul class="leading-snug">
    //                     ${tech}   
    //                 </ul> 
    //             </div>
    //         </div>
    //     </div>`;
    // });

    eleventyConfig.addShortcode('workrolestech', function() {
        
    const rolesList = this.ctx.environments.roles.map(role => `<li>${role}</li>`).join('');
    const techList = this.ctx.environments.techlist.map(tech => `<li>${tech}</li>`).join('');


    return `<div class="full-width mb-16">
    <div class="flex flex-col md:flex-row gap-12 items-start w-full">  
        <div class="w-full md:w-1/2">
            <h2 class="instrument-serif text-2xl">❋ Roles</h2>                    
            <ul class="leading-snug">
                ${rolesList}   
            </ul>                    
        </div>
        <div class="w-full md:w-1/2">
            <h2 class="instrument-serif text-2xl">❋ Technology</h2>
            <ul class="leading-snug">
                ${techList}   
            </ul> 
        </div>
    </div>
</div>`;
});





}