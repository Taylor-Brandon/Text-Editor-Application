const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';


    butInstall.addEventListener('click', async () => {
        await event.prompt();
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
});
});

window.addEventListener('appinstalled', (event) => {
    alert('App Installed!');
    console.log('👍', 'appinstalled', event);
});
