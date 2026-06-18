document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // 1. NAVBAR STICKY SCROLL EFFECT
    // =============================================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        });
    }

    // =============================================
    // 2. MOBILE HAMBURGER MENU
    // =============================================
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinksContainer.classList.toggle('active');
        });

        // Tutup menu saat klik link nav
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                navLinksContainer.classList.remove('active');
            });
        });
    }

    // =============================================
    // 3. INTERACTIVE TABS (PRICE LIST)
    // =============================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTabId = button.getAttribute('data-tab');

                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                button.classList.add('active');
                const activeContent = document.getElementById(targetTabId);
                if (activeContent) activeContent.classList.add('active');
            });
        });
    }

    // =============================================
    // 4. WHATSAPP ORDER FORM
    // =============================================
    const orderForm = document.getElementById('waOrderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name     = document.getElementById('clientName').value.trim();
            const category = document.getElementById('productCategory').value;
            const item     = document.getElementById('priceEstimation').value.trim();
            const notes    = document.getElementById('orderNotes').value.trim() || 'Tidak ada catatan tambahan';

            const whatsappNumber = '6283834536082';

            const textMessage =
                `Halo Nakia Flawer, saya ingin melakukan pemesanan via Web Katalog:\n\n` +
                `*Nama:* ${name}\n` +
                `*Kategori:* ${category}\n` +
                `*Pilihan Barang / Budget:* ${item}\n` +
                `*Catatan / Ucapan:* ${notes}\n\n` +
                `Mohon diinformasikan ketersediaan produk dan totalannya. Terima kasih!`;

            const encodedMessage = encodeURIComponent(textMessage);
            window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`, '_blank');
        });
    }
    /*
    // =============================================
    // 5. SCROLL REVEAL ANIMATION
    // =============================================
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

        revealElements.forEach(el => observer.observe(el));
    }*/

    // =============================================
    // 6. NAV LINK ACTIVE HIGHLIGHT ON SCROLL
    // =============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let currentId = '';
            sections.forEach(section => {
                if (window.scrollY >= section.offsetTop - 160) {
                    currentId = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        });
    }

});

let currentIndex = 0;
    const slider = document.getElementById('heroSlider');
    const totalSlides = slider.querySelectorAll('.slide-img').length;

    function startSlideShow() {
        setInterval(() => {
            // Naikkan index foto
            currentIndex++;
            
            // Jika sudah di foto terakhir, kembali ke foto pertama
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            
            // Geser kontainer ke kiri berdasarkan persentase (100 / jumlah slide)
            const percentageToMove = currentIndex * (100 / totalSlides);
            slider.style.transform = `translateX(-${percentageToMove}%)`;
            
        }, 3000); // Ganti foto setiap 4 detik (4000ms)
    }

    // Jalankan slider saat halaman selesai dimuat
    window.addEventListener('DOMContentLoaded', startSlideShow);
