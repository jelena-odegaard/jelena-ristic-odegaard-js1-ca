function textUpdate() {
    const heading = document.querySelector("h1");
    const paragraph = document.querySelector("blockquote");

    headingText = heading.innerText;
    paragraphText = paragraph.innerText;

    console.log(headingText);
    console.log(paragraphText);

    const updatedHeading = headingText.replace(/The/g, "Replaced");
    const updatedParagraph = paragraphText
        .replace(/The/g, "Replaced")
        .replace(/the/g, "replaced");

    heading.innerText = updatedHeading;
    paragraph.innerText = updatedParagraph;
}

setTimeout(textUpdate, 4000);
