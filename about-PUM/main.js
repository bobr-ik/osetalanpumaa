function scrollnavbar(obj) {
    obj.scrollIntoView({ block: 'start', behavior: 'smooth' });
    document.getElementById('check').checked = 0;
}