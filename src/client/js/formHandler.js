// Attach event listener to form submission
document.querySelector('form').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the value entered in the form field
    let formText = document.getElementById('name').value;

    // Assuming Client.checkForName is a function you want to keep
    Client.checkForName(formText);

    console.log("::: Form Submitted :::");

    // Modify the fetch request to call the external API
    fetch('https://jsonplaceholder.typicode.com/posts/1') // Example API endpoint
        .then(res => res.json()) // Parse the JSON response
        .then(function(data) {
            // Display the result from the API in the 'results' element
            document.getElementById('results').innerHTML = `Title: ${data.title} <br> Body: ${data.body}`;
        })
        .catch(error => console.error('Error:', error));  // Handle any errors
}

export { handleSubmit };
