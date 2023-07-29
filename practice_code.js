window.addEventListener("load", function() {
    const fetchPromise = this.fetch("https://handlers.education.launchcode.org/static/planets.json");
    fetchPromise.then( function(response) {
        const jsonPromise = response.json();
        jsonPromise.then( function(json) {
            console.log(json);
        });
    });
});