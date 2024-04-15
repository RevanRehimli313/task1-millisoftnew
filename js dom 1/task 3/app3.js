function remove() {
    one.value = ""
    two.value = ""
    three.value = ""
    selectone.value = "Border style"
    selecttwo.value = "Border color"
    selectthree.value = "Color"
    selectfour.value = "Background color"
}

function btn() {
    document.getElementById("divborder").style.width = document.getElementById("one").value
    document.getElementById("divborder").style.height = document.getElementById("two").value
    document.getElementById("divborder").style.borderWidth = document.getElementById("three").value
    
    document.getElementById("divborder").style.borderStyle = document.getElementById("selectone").value
    document.getElementById("divborder").style.borderColor = document.getElementById("selecttwo").value
    document.getElementById("divborder").style.color = document.getElementById("selectthree").value
    document.getElementById("divborder").style.backgroundColor = document.getElementById("selectfour").value
    
    remove()
}
