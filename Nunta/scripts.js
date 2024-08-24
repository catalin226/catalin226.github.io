document.getElementById("homeBtn").addEventListener("click", function() {
    document.getElementById("homeContent").style.display = "block";
    document.getElementById("imagesContent").style.display = "none";
    document.getElementById("videoContent").style.display = "none";
    document.getElementById("catalogContent").style.display = "none";
});

document.getElementById("imagesBtn").addEventListener("click", function() {
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("imagesContent").style.display = "block";
    document.getElementById("videoContent").style.display = "none";
    document.getElementById("catalogContent").style.display = "none";
});

document.getElementById("videoBtn").addEventListener("click", function() {
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("imagesContent").style.display = "none";
    document.getElementById("videoContent").style.display = "block";
    document.getElementById("catalogContent").style.display = "none";
});

document.getElementById("catalogBtn").addEventListener("click", function() {
    document.getElementById("homeContent").style.display = "none";
    document.getElementById("imagesContent").style.display = "none";
    document.getElementById("videoContent").style.display = "none";
    document.getElementById("catalogContent").style.display = "block";
});

document.getElementById('catalogBtn').addEventListener('click', function() {
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('imagesContent').style.display = 'none';
    document.getElementById('videoContent').style.display = 'none';
    document.getElementById('catalogContent').style.display = 'block';
});


