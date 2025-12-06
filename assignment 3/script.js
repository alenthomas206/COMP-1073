const API_KEY = "AIzaSyDHuUC7E5wg3esrsxcNnf22A-YWc6q7ekA";

document.getElementById("searchBtn").addEventListener("click", searchVideos);

async function searchVideos() {
    const query = document.getElementById("searchInput").value.trim();

    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=9&key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.items);
    } catch (error) {
        console.error("Error fetching YouTube data:", error);
    }
}

function displayResults(videos) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (!videos || videos.length === 0) {
        resultsDiv.innerHTML = "<p>No videos found.</p>";
        return;
    }

    videos.forEach(video => {
        const card = document.createElement("div");
        card.classList.add("video-card");

        const videoId = video.id.videoId;
        const thumbnail = video.snippet.thumbnails.medium.url;
        const title = video.snippet.title;
        const channel = video.snippet.channelTitle;
        const published = new Date(video.snippet.publishTime).toLocaleDateString();

        card.innerHTML = `
            <img src="${thumbnail}" alt="Video Thumbnail">
            <h3>${title}</h3>
            <p><strong>Channel:</strong> ${channel}</p>
            <p><strong>Published:</strong> ${published}</p>
        `;

        card.addEventListener("click", () => {
            playVideo(videoId);
        });

        resultsDiv.appendChild(card);
    });
}

function playVideo(videoId) {
    const playerContainer = document.getElementById("playerContainer");
    const videoPlayer = document.getElementById("videoPlayer");

    playerContainer.style.display = "block";
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
}

document.getElementById("closePlayer").addEventListener("click", () => {
    const playerContainer = document.getElementById("playerContainer");
    const videoPlayer = document.getElementById("videoPlayer");

    videoPlayer.src = "";
    playerContainer.style.display = "none";
});
