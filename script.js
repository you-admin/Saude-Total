/* Saúde Total - Landing Page Script */

document.addEventListener('DOMContentLoaded', function () {

    // Ano dinâmico no footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Tracking simples de clique no CTA (para futuras integrações com Meta Pixel / GA)
    const ctaButtons = document.querySelectorAll('.cta-button, .floating-cta');
    ctaButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Evento personalizado - integre aqui seu pixel/analytics
            // Ex.: fbq('track', 'Lead');
            // Ex.: gtag('event', 'whatsapp_click');
            try {
                if (typeof window.fbq === 'function') {
                    window.fbq('track', 'Lead');
                }
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'click', {
                        event_category: 'CTA',
                        event_label: 'WhatsApp VIP'
                    });
                }
            } catch (e) {
                // Silencioso - não bloqueia o redirecionamento
            }
        });
    });

    // Mostrar CTA flutuante somente após scroll (mobile)
    const floatingCta = document.querySelector('.floating-cta');
    if (floatingCta) {
        floatingCta.style.opacity = '0';
        floatingCta.style.transform = 'translateY(20px)';
        floatingCta.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                floatingCta.style.opacity = '1';
                floatingCta.style.transform = 'translateY(0)';
            } else {
                floatingCta.style.opacity = '0';
                floatingCta.style.transform = 'translateY(20px)';
            }
        }, { passive: true });
    }

});
