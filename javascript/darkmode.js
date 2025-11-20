document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');

    const enableDarkMode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    }

    const disableDarkMode = () => {
        document.body.classList.remove('darkmode');
        localStorage.removeItem('darkmode');
    }

    if (localStorage.getItem('darkmode') === 'active') {
        enableDarkMode();
    }

    themeSwitch.addEventListener('click', () => {
        localStorage.getItem('darkmode') !== 'active' ? enableDarkMode() : disableDarkMode();
    });
});
