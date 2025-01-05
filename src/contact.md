---
layout: post.njk
title: About
---

<div class="w-full px-12 flex flex-col md:flex-row items-center gap-8">
    <!-- <span class="socko tracking-widest text-5xl pb-8 outline-text text-white link-white">get in touch</span>          -->
    <div class="w-full md:w-2/5 text-md lg:text-2xl prose dark:text-white">
    <h2 class="dark:text-white">Get in touch</h2>
    <p class="hidden md:block">
        Interested in working together? Want to talk about the internet?
    </p>  
    <p>
        <a class="underline" href="mailto:hello@alexharris.online">hello@alexharris.online</a><br />
        <a href="https://github.com/alexharris">Github</a><br />
        <a href="https://www.linkedin.com/in/alex-harris-a7425b90/">LinkedIn</a>
    </p>
    </div>
    <div class="w-full md:w-3/5">
    <form class="flex flex-col items-start w-full text-black w-1/2" name="contact" netlify>
        <label class="w-full pb-4">
        <div class="pb-3 dark:text-white">Your Email</div>
        <input class="w-full rounded-xl border border-black h-12 p-2" type="email" name="email" required/>
        </label>
        <label class="w-full pb-4">
        <div class="pb-3 dark:text-white">Message</div>
        <textarea class="w-full rounded-xl border border-black h-12 md:h-24 p-2"name="message" required></textarea>
        </label>
        <button class="border dark:text-white border-black dark:border-white px-4 py-2 hover:bg-black hover:text-white cursor-pointer rounded-xl" type="submit">Send Message</button>
    </form> 
    </div>
</div>  