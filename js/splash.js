document.addEventListener('DOMContentLoaded', function () {
    const splashFrame = document.createElement('iframe');
    splashFrame.id = 'splash-frame';
    splashFrame.src = 'splash.html';
    document.body.appendChild(splashFrame);

    document.body.style.overflow = 'hidden';

    window.addEventListener('message', function (event) {
        if (event.data === 'closeSplash') {
            document.body.style.overflow = '';
            splashFrame.remove();
        }
    });
});