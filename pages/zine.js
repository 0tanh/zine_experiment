// if you're seeing this then hi! i put no effort into this section of the site.

const links = { // betty put links here (trailing commas are fine)
    "Press kit": "/zine/underbelly-zine.pdf",
};

export const render = () => {
    const anchors = Object.entries(links).map(([txt, href]) =>
        `<a href="${href}" style="display:block;">&gt; ${txt}</a>`
    ).join("");
    document.querySelector("title").innerText = "d011 // presskit";
    document.querySelector("main").innerHTML = `
        <div id="landing">
            <h1 class="evenpad" style="justify-self:center">press</h1>
            <hr>
            ${anchors}
        </div>
    `;
};
