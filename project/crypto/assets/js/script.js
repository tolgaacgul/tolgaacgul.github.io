function copyLink() {
    const link = document.getElementById('inviteLink').innerText;
    navigator.clipboard.writeText(link).then(() => {
        alert('Link copied to clipboard!');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}


// KAMERA AÇMAK İÖİN

const openCamera = document.getElementById('openCamera');
const video = document.getElementById('video');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeModal = document.getElementById('closeModal');

openCamera.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        modal.style.display = 'block';
        overlay.style.display = 'block';
    } catch (err) {
        console.error('Kamera açılırken hata oluştu: ', err);
    }
});

const closeCameraModal = () => {
    const stream = video.srcObject;
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    }
    video.srcObject = null;
    modal.style.display = 'none';
    overlay.style.display = 'none';
};

// Tıklama olayları
closeModal.addEventListener('click', closeCameraModal);
overlay.addEventListener('click', closeCameraModal);

// Esc tuşuyla kapatma
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeCameraModal();
    }
});