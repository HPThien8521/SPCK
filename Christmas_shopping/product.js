var productImg = document.getElementById('BIGproductImg');
var smallImg = document.getElementsByClassName("product-img");
        productImg.src = smallImg[0].src;
        smallImg[0].style.border = "2px solid blue";
        smallImg[3].style.border = "none";
        smallImg[4].style.border = "none";
        smallImg[1].style.border = "none";
        smallImg[2].style.border = "none";

    smallImg[0].onclick = function(){
        productImg.src = smallImg[0].src;
        smallImg[0].style.border = "2px solid blue";
        smallImg[3].style.border = "none";
        smallImg[4].style.border = "none";
        smallImg[1].style.border = "none";
        smallImg[2].style.border = "none";
    }
    smallImg[1].onclick = function(){
        productImg.src = smallImg[1].src;
        smallImg[1].style.border = "2px solid blue";
        smallImg[3].style.border = "none";
        smallImg[4].style.border = "none";
        smallImg[2].style.border = "none";
        smallImg[0].style.border = "none";
    }
    smallImg[2].onclick = function(){
        productImg.src = smallImg[2].src;
        smallImg[2].style.border = "2px solid blue";
        smallImg[3].style.border = "none";
        smallImg[4].style.border = "none";
        smallImg[1].style.border = "none";
        smallImg[0].style.border = "none";
    }
    smallImg[3].onclick = function(){
        productImg.src = smallImg[3].src;
        smallImg[3].style.border = "2px solid blue";
        smallImg[2].style.border = "none";
        smallImg[4].style.border = "none";
        smallImg[1].style.border = "none";
        smallImg[0].style.border = "none";
    }
    smallImg[4].onclick = function(){
        productImg.src = smallImg[4].src;
        smallImg[4].style.border = "2px solid blue";
        smallImg[3].style.border = "none";
        smallImg[2].style.border = "none";
        smallImg[1].style.border = "none";
        smallImg[0].style.border = "none";
    }

