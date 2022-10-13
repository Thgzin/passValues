function handleSubmit () {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("DATE", date);
    sessionStorage.setItem("TIME", time);
    return;
}