window.addEventListener('load', () => {
    const name1 = sessionStorage.getItem('NAME1');
    document.getElementById('circularmenu-welcome').innerHTML = name1;
    document.getElementById('circularmenu-welcome1').innerHTML = name1;
    });
