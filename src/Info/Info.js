import React from 'react';
import self from '../img/self.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(245,90,14)", "rgb(214,84,142)"];
/*
I highly recommend using a gradient generator like https://paytonjewell.github.io/gradient-generator/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */



/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Hyun Woo",
    lastName: "Kim",
    initials: "Needon", // the example uses first and last, but feel free to use three or more if you like.
    position: "Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self portrait in the "img" folder something else!
    gradient: `linear-gradient(135deg, ${colors})`, // don't change this either
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        ["🇰🇷", "Based in the Korea"], // change the emojis to something related to your list item :)
        ["💼", "Backend Engineer"],
        ["✉️", "admin@needon.kr"],
    ],
    socials: [
        ["https://github.com/k4584587", githubIcon()], // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        ["https://blog.needon.kr", blogIcon()],
        ["https://www.youtube.com/channel/UCu0D-JCht5L-v_yjBjszMZw", youtubeIcon()],
    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    hobbies: [
        ["📖", "reading"], // Same as above, change the emojis to match / relate to your hobbies or interests.
        ["🎭", "theater"], // You can also remove the emojis if you'd like, I just think they look cute :P
        ["🎥", "movies"],
        ["🌶", "spicy food"]
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            liveLink: "paytonjewell.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            sourceLink: "paytonjewell.dev", // this should be a link to the **repository** of the project, where the code is hosted. Github, Phabricator, etc.
        },
        {
            title: "Project 2",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
        {
            title: "Project 3",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
        {
            title: "Project 4",
            liveLink: "https://paytonjewell.dev",
            sourceLink: "https://paytonjewell.dev",
        },
    ]
}

// leave these alone unless you know how to work with FontAwesome and want to change to your liking :)

function githubIcon() {
    return <i className="fa fa-github" aria-hidden="true" />
}

function blogIcon() {
    return <i className="fa fa-book" aria-hidden="true"/>
}

function youtubeIcon() {
    return <i className="fa fa-youtube" aria-hidden="true"/>
}