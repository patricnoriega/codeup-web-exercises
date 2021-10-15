console.log('1.2.3')

var gitHubApiPromise = fetch('https://api.github.com/users/patricnoriega/events');
console.log(gitHubApiPromise)

fetch('https://api.github.com/users/patricnoriega/events', {headers: {'Authorization': gitHubApiKey}})
    .then(function (results) {
        console.log(results);
        results.json().then((resultsObj) => console.log(resultsObj));
    }).then()