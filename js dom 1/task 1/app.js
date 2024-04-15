function remove() {
    ed1.value = ""
    ed2.value = ""
}

function plus() {
    result.value = Number(ed1.value) + Number(ed2.value);
    remove()
}
function minus() {
    result.value = Number(ed1.value) - Number(ed2.value);
    remove()
}
function multipy() {
    result.value = Number(ed1.value) * Number(ed2.value);
    remove()
}
function divide() {
    result.value = Number(ed1.value) / Number(ed2.value);
    remove()
}

