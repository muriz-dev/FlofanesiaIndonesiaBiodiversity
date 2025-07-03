document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nama = document.getElementById('nama-lengkap').value.trim();
            const email = document.getElementById('alamat-email').value.trim();
            const subjek = document.getElementById('subjek').value.trim();
            const pesan = document.getElementById('pesan').value.trim();

            if (!nama || !email || !subjek || !pesan) {
                alert('Semua kolom harus diisi!');
                return;
            }

            const formData = new FormData(this);
            const data = {
                nama: formData.get('nama-lengkap'),
                email: formData.get('alamat-email'),
                subjek: formData.get('subjek'),
                pesan: formData.get('pesan')
            };

            console.log('Data Formulir:', data);

            showSuccessPopup();
            
            this.reset();
        });
    }

    function showSuccessPopup() {
        const popup = document.createElement('div');
        popup.className = 'fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-50';
        
        const popupContent = document.createElement('div');
        popupContent.className = 'bg-white rounded-[20px] p-8 max-w-md text-center shadow-lg transform transition-all';
        
        const popupTitle = document.createElement('h3');
        popupTitle.className = 'text-2xl font-bold text-zinc-800 mb-4';
        popupTitle.textContent = 'Terima Kasih :)';
        
        const popupMessage = document.createElement('p');
        popupMessage.className = 'text-xl text-zinc-600 mb-6';
        popupMessage.textContent = 'Pesan Anda telah terkirim.';
        
        const closeButton = document.createElement('button');
        closeButton.className = 'px-6 py-3 bg-lime-200 text-zinc-700 font-semibold text-lg rounded-full hover:bg-lime-300 transition-colors';
        closeButton.textContent = 'Tutup';
        
        closeButton.addEventListener('click', () => {
            document.body.removeChild(popup);
        });
        
        popupContent.appendChild(popupTitle);
        popupContent.appendChild(popupMessage);
        popupContent.appendChild(closeButton);
        popup.appendChild(popupContent);
        
        document.body.appendChild(popup);
        
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                document.body.removeChild(popup);
            }
        });
    }
});