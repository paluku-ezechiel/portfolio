var button = document.querySelector(".btn-view");

let listenerFunction = {
    openProject : () => {
        window.open('https://github.com/paluku-ezechiel/boulangerie.git', target="_blank");
    }
}

let setupListener = () => {
    button.addEventListener("click", listenerFunction.openProject)
}