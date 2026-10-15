window.addEventListener('DOMContentLoaded', () => {
    // Dynamic time-based greeting logic
    const hour = new Date().getHours();
    const greetingEl = document.getElementById('dynamicGreeting');
    if (hour < 12) {
        greetingEl.textContent = "Good Morning, E-Commerce Seller";
    } else if (hour < 18) {
        greetingEl.textContent = "Good Afternoon, E-Commerce Seller";
    } else {
        greetingEl.textContent = "Good Evening, E-Commerce Seller";
    }

    // Modal popup functionality
    const modal = document.getElementById('auditModal');
    const triggerBtn = document.getElementById('auditTriggerBtn');
    const closeBtn = document.getElementById('closeModalBtn');

    if (triggerBtn && modal && closeBtn) {
        triggerBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});