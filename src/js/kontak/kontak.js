document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Check if all fields are filled
            const nama = document.getElementById('nama-lengkap').value.trim();
            const email = document.getElementById('alamat-email').value.trim();
            const subjek = document.getElementById('subjek').value.trim();
            const pesan = document.getElementById('pesan').value.trim();

            if (!nama || !email || !subjek || !pesan) {
                alert('Semua kolom harus diisi!');
                return;
            }

            // Form is valid, process the data
            const formData = new FormData(this);
            const data = {
                nama: formData.get('nama-lengkap'),
                email: formData.get('alamat-email'),
                subjek: formData.get('subjek'),
                pesan: formData.get('pesan')
            };

            console.log('Data Formulir:', data);

            // Create and show success popup
            showSuccessPopup();
            
            // Reset the form
            this.reset();
        });
    }

    // Function to show success popup
    function showSuccessPopup() {
        // Create popup elements
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
        
        // Add event listener to close button
        closeButton.addEventListener('click', () => {
            document.body.removeChild(popup);
        });
        
        // Assemble popup
        popupContent.appendChild(popupTitle);
        popupContent.appendChild(popupMessage);
        popupContent.appendChild(closeButton);
        popup.appendChild(popupContent);
        
        // Add popup to body
        document.body.appendChild(popup);
        
        // Also close when clicking outside
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                document.body.removeChild(popup);
            }
        });
    }

    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });

    // Hide/show header on scroll
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const currentScrollY = window.scrollY;
        
        // Determine scroll direction
        if (currentScrollY > lastScrollY) {
            // Scrolling down - hide the header
            header.classList.add('nav-hidden');
        } else {
            // Scrolling up - show the header
            header.classList.remove('nav-hidden');
        }
        
        lastScrollY = currentScrollY;
    });

});