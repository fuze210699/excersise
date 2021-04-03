const btn = document.querySelector(".turn");
btn.addEventListener("click", () => {
    if (document.querySelector(".overlay").classList.contains("display-b")) {
        document.querySelector(".overlay").classList.remove("display-b");
        document.querySelector(".overlay").classList.add("display-n");
    } else {
        document.querySelector(".overlay").classList.remove("display-n");
        document.querySelector(".overlay").classList.add("display-b");
    }
})