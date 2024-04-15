let elements = document.querySelectorAll(".fon");
elements.forEach(item => {
    item.addEventListener("click", function () {
        
        let d = (item.previousElementSibling.getAttribute("src"));
        foto.setAttribute("src", d)
        client.innerText = item.parentElement.nextElementSibling.children[0].innerText
        category.innerText = item.parentElement.nextElementSibling.children[1].innerText
        document.querySelector(".item-container").style.display = "flex"
    })
})

function bagla() {
    document.querySelector(".item-container").style.display = "none"
}
