function toggleFAQ() {
    const faqContent = document.getElementById('faq-content');
    if (faqContent.style.maxHeight) {
        faqContent.style.maxHeight = null;
    } else {
        faqContent.style.maxHeight = faqContent.scrollHeight + "px";
    }
}
