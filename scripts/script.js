document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.services__list_item-link');
    
    links.forEach(link => {
        link.addEventListener('focus', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('blur', function() {
            this.style.transform = '';
        });
        
        link.addEventListener('touchstart', function(e) {
            this.classList.add('touch-active');
        });
        
        link.addEventListener('touchend', function(e) {
            setTimeout(() => {
                this.classList.remove('touch-active');
            }, 300);
        });
    });
});