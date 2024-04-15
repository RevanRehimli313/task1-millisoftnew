function remove() {
    one.value = ""
    two.value = ""
    three.value = ""
    
}

function chg () {
    document.getElementById("divborder").style.width = document.getElementById("one").value
    document.getElementById("divborder").style.height = document.getElementById("two").value
    document.getElementById("divborder").style.borderWidth = document.getElementById("three").value
    // remove()
}