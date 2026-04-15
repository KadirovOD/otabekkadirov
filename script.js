document.addEventListener("DOMContentLoaded", () => {
    // Faqat bosh sahifada ishlashi uchun tekshirish
    const ctaSection = document.getElementById("hidden-cta-section");
    
    if (ctaSection) {
        // 5 sekunddan keyin chiqadigan qilindi
        const delayInMilliseconds = 5000; 
        
        setTimeout(() => {
            // 'hidden' klassini olib tashlaymiz, shunda CSS dagi opacity va transform animatsiyasi ishga tushadi
            ctaSection.classList.remove("hidden");
        }, delayInMilliseconds);
    }
});
