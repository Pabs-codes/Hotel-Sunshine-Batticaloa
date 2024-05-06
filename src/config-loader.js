let config = {
    API_URL: 'default'
}

await fetch('/config.json')
    .then(response => response.json())
    .then(data => {
        config.API_URL = data.API_URL;
    })
    .catch(error => {
        console.error('Error fetching config:', error);
    });

export default config;