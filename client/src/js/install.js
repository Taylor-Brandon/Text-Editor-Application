const butInstall = document.getElementById('buttonInstall');


window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
    console.log('beforeinstallprompt event fired');
});


butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) return; 
   
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log('User choice:', result);

    
    window.deferredPrompt = null;
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
});


window.addEventListener('appinstalled', () => {
    console.log('App was installed successfully!');
    alert('App Installed!');
    butInstall.style.visibility = 'hidden';
});
