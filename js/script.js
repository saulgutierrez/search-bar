const searchContent = document.querySelector(".search");
const inputBox = searchContent.querySelector("input");
const sugBox = searchContent.querySelector(".autocomplete");
const icon = searchContent.querySelector(".icon");
let linkTag = searchContent.querySelector("a");
let webLink;

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }

        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        emptyArray = emptyArray.map((data) => {
            return data = `<li>${data}</li>`
        });

        searchContent.classList.add("active");
        showSuggestions(emptyArray);
        let allList = sugBox.querySelectorAll("li");
        for(let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchContent.classList.remove("active");
    }
}

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }

    searchContent.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`
    } else {
        listData = list.join('');
    }
    sugBox.innerHTML = listData;
}