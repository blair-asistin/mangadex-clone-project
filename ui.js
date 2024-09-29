const searchBar= document.getElementById("search-bar");

searchBar.addEventListener('focus', () =>{

    searchBar.style.width = "744px";
    searchBar.style.outline = "1px solid #E87646";
    searchBar.style.transition = "width 0.2s";
});

searchBar.addEventListener('blur', () => {

    searchBar.style.width = "300px";
    searchBar.style.outline = "none";
    searchBar.style.borderColor = "#2C2C2C";
    
});