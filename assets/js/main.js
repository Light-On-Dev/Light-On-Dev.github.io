document.getElementById('inputSubmit').addEventListener('click', form)

function form() {
    var inputName = document.getElementById('inputName').value;
    var inputEmail = document.getElementById('inputEmail').value;
    var inputMessage = document.getElementById('inputMessage').value;

    var formdata = new FormData();
    formdata.append("entry.1824477395", inputName);
    formdata.append("entry.1392148432", inputEmail);
    formdata.append("entry.1932890148", inputMessage);

    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSdwtrhKmVXx2WEAk7cK7cR4lPbVwVBOsIpz-nZOh7fTNKPU1g/formResponse', {
        method: 'POST',
        body: formdata
    })

    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputMessage').value = '';
}