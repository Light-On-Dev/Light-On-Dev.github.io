window.onload = function () {
    loadUniversals();
}

async function loadUniversals() {
    var header = document.getElementsByTagName('header')[0];
    var footer = document.getElementsByTagName('footer')[0];

    var headerContent = await fetch('./universal-assets/header.html').then(data => {return data.text()})
    var footerContent = await fetch('./universal-assets/footer.html').then(data => {return data.text()})

    header.outerHTML = headerContent;
    footer.outerHTML = footerContent;
}