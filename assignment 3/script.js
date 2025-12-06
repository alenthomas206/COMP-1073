const API_KEY = "AIzaSyDHuUC7E5wg3esrsxcNnf22A-YWc6q7ekA";

document.getElementById("searchBtn").addEventListener("click", searchVideos);

async function searchVideos() {
    const query = document.getElementById("searchInput").value.trim();

    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=9&key=${API_KEY}`;//from documentation

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("API Response:", data); 

        displayResults(data.items);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
