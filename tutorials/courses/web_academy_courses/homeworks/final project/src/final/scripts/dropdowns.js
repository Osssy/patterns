//dropdowns!

/*
export function dropdowns(){

    //Browse!

    const dropdownBrowse = document.querySelector(".dropdown__link-browse");
    const browseList = document.querySelector(".browse__list");

    dropdownBrowse.addEventListener('click', toogleBrowse);

    function toogleBrowse() {
        if (browseList.style.display === "block") {
            browseList.style.display = "none";
        } else {
            browseList.style.display = "block";
        }
    }

    //Community!

    const dropdownCommunity = document.querySelector(".dropdown__link-community");
    const communityList = document.querySelector(".community__list");

    dropdownCommunity.addEventListener('click', toogleCommunity);

    function toogleCommunity() {
        if (communityList.style.display === "block") {
            communityList.style.display = "none";
        } else {
            communityList.style.display = "block";
        }
    }
}
*/



export function dropdown() {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown__content");

    dropbtn.addEventListener('click', toogle);

    function toogle() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }   else {
            dropdownContent.style.display = "block";
        }
    }
}

