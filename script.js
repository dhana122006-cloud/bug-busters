let selectedLanguage = "English";

function selectLanguage(language) {
    selectedLanguage = language;

    document.getElementById("selectedLanguage").innerText =
        "Selected Language: " + language;

    alert(language + " selected successfully!");
}

function continueToApp() {
    if (selectedLanguage === "") {
        alert("Please select a language");
        return;
    }

    alert("Welcome to Multilingual Healthcare Assistant!");
}