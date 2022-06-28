const form = document.getElementById('sheetdb-form');
    form.addEventListener('submit', (event) => {
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),   
    })
    .then(res => res.json())
    .then((html) => {
        window.alert("Hello! I am an alert box!");
    });
});