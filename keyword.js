var mydata = document.querySelector('div').innerText;
document.querySelector('div').innerHTML = "";
for (const i in mydata) {
    document.querySelector('div').innerHTML += `<span>${mydata[i]}</span>`;
}


var index = 0;
document.body.onkeypress = function (event) {
    if (event.key == mydata[index]) {

        document.querySelectorAll('span')[index].style.color = "lime";

        // True count

        document.querySelectorAll("aside")[0].innerHTML++;

        // Space count


        if (mydata[index] == " ") {
            document.querySelectorAll("aside")[2].innerHTML++;
        }

        // console.log(event.key, mydata[0], "Match");
    } else {
        document.querySelectorAll('span')[index].style.color = "red";


        // False count

        document.querySelectorAll("aside")[1].innerHTML++;


        console.log(event.key, mydata[index], "No Match,");
    }
    index++;
    // console.log(event);

}