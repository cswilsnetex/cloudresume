(function () {
    fetch("https://cloudresume-api.azurewebsites.net/api/counter", {
        method: "POST",
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("visitor-count").textContent = data.count;
        })
        .catch(function () {
            // silently fail
        });
})();
