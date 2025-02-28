function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => alert("File uploaded successfully: " + data))
    .catch(error => console.error("Error:", error));
}