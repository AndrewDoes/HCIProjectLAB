function navigateProduct() {
    window.location.href = "Product.html"
}

let slideShow;

function getCurrentPic() {
    for (let i = 1; i <= 3; i++) {
        var button = document.getElementById('nav' + i)
        if (button.classList.contains('active')) {

            return (i);
        }
    }
}

function autoMove(x) {
    // console.log(x);
    var carousel = document.getElementById('promo-carousel');
    var currentMarginLeft = carousel.style.marginLeft;
    var currbtn = document.getElementById('nav' + x);
    var nextbtn = x === 3 ? document.getElementById('nav' + (1)) : document.getElementById('nav' + (x + 1));

    currbtn.classList.remove('active');
    nextbtn.classList.add('active')

    if (x === 3) {
        var newMarginLeft = 0;
    }
    else {
        var newMarginLeft = -(80 * (x - 1))
    }
    // console.log(currentMarginLeft)
    carousel.style.marginLeft = newMarginLeft + "vw";
}


function manualMove(x) {
    // console.log(x);
    var carousel = document.getElementById('promo-carousel');
    var currentMarginLeft = carousel.style.marginLeft;
    var oldBtn = document.getElementById('nav' + getCurrentPic());
    var newBtn = document.getElementById('nav' + (x + 1))
    oldBtn.classList.remove('active');
    newBtn.classList.add('active');

    if (x === 0) {
        var newMarginLeft = 0;
    }
    else {
        var newMarginLeft = -(80 * x)
    }
    // console.log(currentMarginLeft)
    carousel.style.marginLeft = newMarginLeft + "vw";
}

function autoMove() {
    slideShow = setInterval(() => {
        let i = getCurrentPic() === 3 ? 0 : getCurrentPic();
        // console.log(i);
        manualMove(i);
    }, 3000);
}

autoMove();