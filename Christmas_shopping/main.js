const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementsByClassName("row")
    const product = document.querySelectorAll(".col-4")
    const pname = document.getElementsByTagName("h4")

    for(var i=0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h4')[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            }else {
                product[i].style.display = "none";
            }
        }
    }
}
document.addEventListener('scroll', (e) => {
  if(window.scrollY >= 821) {
    document.getElementById('menu').classList.add('show');
    document.getElementById('menu').classList.remove('hide');
    document.getElementById('slide-home').style.marginTop = '0px';
  }else{
    document.getElementById('menu').classList.add('hide');
    document.getElementById('menu').classList.remove('show');
    document.getElementById('slide-home').style.marginTop = '0px';
  }
})
