
function showContentL(){
    let element = document.getElementById("tab1-content")
    element.classList.remove("d-none")
    document.getElementById("tab2-button").classList.remove("button-background")
    document.getElementById("tab3-button").classList.remove("button-background")
    document.getElementById("tab1-button").classList.add("button-background")
    
    document.getElementById("tab2-content").classList.add("d-none")
    document.getElementById("tab3-content").classList.add("d-none")
}
function showContentP(){
    let element = document.getElementById("tab2-content")
    element.classList.remove("d-none")
    document.getElementById("tab1-button").classList.remove("button-background")
    document.getElementById("tab3-button").classList.remove("button-background")
    document.getElementById("tab2-button").classList.add("button-background")
    
    document.getElementById("tab1-content").classList.add("d-none")
    document.getElementById("tab3-content").classList.add("d-none")
}
function showContentT(){
    let element = document.getElementById("tab3-content")
    element.classList.remove("d-none")
    document.getElementById("tab1-button").classList.remove("button-background")
    document.getElementById("tab2-button").classList.remove("button-background")
    document.getElementById("tab3-button").classList.add("button-background")
    
    document.getElementById("tab1-content").classList.add("d-none")
    document.getElementById("tab2-content").classList.add("d-none")
}