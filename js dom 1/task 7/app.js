let elements = document.querySelectorAll(".table li");
let rows = document.querySelectorAll(".row");

elements.forEach(item => {
    item.addEventListener("click", function () {
        elements.forEach(x => {
            x.classList.remove("active")
        })
        item.classList.add("active");
        
        rows.forEach(item2 => {
            item2.classList.add("passiv");
        })
        rows.forEach(item1 => {
            if (item1.className.includes(item.innerText)) {
                item1.classList.remove("passiv")
            }
        })
        })
    });
    
