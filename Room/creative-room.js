// Isometric 3D Room Interactive Controls
document.addEventListener('DOMContentLoaded', function() {
    const room = document.getElementById('creative-room');
    if (!room) return;

    let isDragging = false;
    let previousMouseX = 0;
    let rotationZ = -45;
    const rotationX = 60; // Fixed isometric angle

    // Pause/resume animation on hover
    room.addEventListener('mouseenter', function() {
        room.style.animationPlayState = 'paused';
    });

    room.addEventListener('mouseleave', function() {
        if (!isDragging) {
            room.style.animationPlayState = 'running';
        }
    });

    // Mouse drag to rotate horizontally
    room.addEventListener('mousedown', function(e) {
        isDragging = true;
        previousMouseX = e.clientX;
        room.style.animation = 'none';
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;

        const deltaX = e.clientX - previousMouseX;
        rotationZ += deltaX * 0.5;

        room.style.transform = `rotateX(${rotationX}deg) rotateZ(${rotationZ}deg)`;

        previousMouseX = e.clientX;
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            setTimeout(() => {
                room.style.animation = 'rotateIsometricRoom 12s infinite ease-in-out, subtleGlow 4s infinite ease-in-out';
            }, 100);
        }
    });

    // Touch support for mobile
    let touchStartX = 0;

    room.addEventListener('touchstart', function(e) {
        isDragging = true;
        touchStartX = e.touches[0].clientX;
        room.style.animation = 'none';
        e.preventDefault();
    }, { passive: false });

    room.addEventListener('touchmove', function(e) {
        if (!isDragging) return;

        const deltaX = e.touches[0].clientX - touchStartX;
        rotationZ += deltaX * 0.5;

        room.style.transform = `rotateX(${rotationX}deg) rotateZ(${rotationZ}deg)`;

        touchStartX = e.touches[0].clientX;
    }, { passive: false });

    room.addEventListener('touchend', function() {
        if (isDragging) {
            isDragging = false;
            setTimeout(() => {
                room.style.animation = 'rotateIsometricRoom 12s infinite ease-in-out, subtleGlow 4s infinite ease-in-out';
            }, 100);
        }
    });

    // Add subtle hover effects to room items
    const roomItems = document.querySelectorAll('.room-item');
    roomItems.forEach((item, index) => {
        item.style.transition = 'all 0.3s ease';

        item.addEventListener('mouseenter', function() {
            this.style.transform = `${this.style.transform || ''} scale(1.05)`;
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace('scale(1.05)', '');
        });
    });
});
