// NAVIGATION BAR

const searchBar = document.getElementById("search-bar");

//When search bar is pressed it stretches and removes Ctrl icon and K icon
searchBar.addEventListener('focus', () =>{

    const ctrlContainer = document.querySelector(".ctrl-container");
    const searchContainer = document.querySelector(".search-container");

    const searchQuery = document.createElement("div");
    searchQuery.classList.add("search-query");
    searchQuery.style.transition = "width 0.2s";

    searchContainer.appendChild(searchQuery);

    searchBar.style.width = "744px";
    searchBar.style.outline = "1px solid #E87646";
    searchBar.style.transition = "width 0.2s";

    ctrlContainer.remove();

    setTimeout(function () {
        
        searchQuery.style.width = "744px";
        searchQuery.textContent = "Enter a search query...";
    }, 0);

    
    
});


//When user does not focus the search bar comes back to normal and Ctrl icon and K icon returns
searchBar.addEventListener('blur', () => {

    const searchContainer = document.querySelector(".search-container");
    const searchQuery = document.querySelector(".search-query");

    searchQuery.remove();

    const createCtrl = document.createElement("div");
    createCtrl.classList.add("ctrl-container");

    const createIcon = document.createElement("div");
    createIcon.classList.add("ctrl-icon");
    createIcon.textContent = "Ctrl";

    const createK = document.createElement("div");
    createK.classList.add("k-icon");
    createK.textContent = "K";

    
    searchBar.style.width = "300px";
    searchBar.style.outline = "none";
    searchBar.style.borderColor = "#2C2C2C";

    createCtrl.appendChild(createIcon);
    createCtrl.appendChild(createK);

    searchContainer.appendChild(createCtrl);

});

