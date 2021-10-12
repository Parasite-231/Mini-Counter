var grabValue = document.getElementById("card-title")

var count = 0
function startCount(){

    count = count + 1
    grabValue.innerText = count

}

function setCountToNull(){

    count = 0
    grabValue.innerText = count
}