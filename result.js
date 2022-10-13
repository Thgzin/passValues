window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getItem('NAME');
    const date = sessionStorage.getItem('DATE');
    const time = sessionStorage.getItem('TIME');

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-date').innerHTML = date;
    document.getElementById('result-time').innerHTML = time;

})