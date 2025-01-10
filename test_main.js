function loadData() {
    console.log('Starting data fetch...');
    fetch('data.php')
        .then(response => {
            console.log('Raw response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Parsed data:', data);
            createTiles(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}