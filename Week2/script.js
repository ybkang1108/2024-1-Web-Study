var title = document.getElementById('title');

var count = 0;
var click = document.getElementById('clickButton');
function countClicks() {
    count += 1;
    click.innerHTML = count;
    switch (count) {
        case 10:
            title.style.fontSize = "50px";
            break;
        case 50:
            title.style.fontSize = "70px";
            break;
        case 100:
            title.style.fontSize = "100px";
            break;
        case 101:
            title.textContent = '이걸 왜' + '<br/>' + '1000번이나...';
            title.style.fontSize = "200px";
            setTimeout(function() {
                title.textContent = "GDSC Hongik!";
                title.style.fontSize = "100px";
            }, 1000); // 1000ms동안만 title 변경      
            break;
    }
}

function changeColor(button) {
    const color = button.style.backgroundColor;
    title.style.color = color;
}

var colorText = document.querySelectorAll(".colorText");
function changeBgColor(button) {
    const bgColor = button.style.backgroundColor;
    document.body.style.backgroundColor = bgColor;
    if (bgColor == "cornflowerblue") {
        colorText.forEach(element => {
            element.style.color = "white";
        });
    } else {
        colorText.forEach(element => {
            element.style.color = "grey";
        });
    }
}