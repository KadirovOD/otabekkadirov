document.addEventListener("DOMContentLoaded", () => {
    // Faqat bosh sahifada ishlashi uchun tekshirish
    const ctaSection = document.getElementById("hidden-cta-section");
    
    if (ctaSection) {
        // 10 daqiqa (millisekundlarda: 10 * 60 * 1000 = 600000)
        // Dasturchilar uchun Eslatma: Dizaynni tekshirish uchun buni masalan 5000 (5 sekund) qilib o'zgartiring.
        const delayInMilliseconds = 600000; 
        
        setTimeout(() => {
            // 'hidden' klassini olib tashlaymiz, shunda CSS dagi opacity va transform animatsiyasi ishga tushadi
            ctaSection.classList.remove("hidden");
        }, delayInMilliseconds);
    }
});
