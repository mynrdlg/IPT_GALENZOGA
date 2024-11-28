function updateTimestamp() {
    const timestampElement = document.getElementById('timestamp');
    if (!timestampElement) {
        console.error("Timestamp element not found!");
        return;
    }

    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    };
    const formattedDate = now.toLocaleString('en-US', options); 
    timestampElement.textContent = formattedDate; 
}

setInterval(updateTimestamp, 1000); // Update every second
updateTimestamp(); // Run immediately on load
