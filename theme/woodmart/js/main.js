function change(x){
    console.log("basıldı")
    let resim = document.getElementById("idCarouselImg1")
    if(x==4){
        resim.src = "img/img1-4.jpeg";
    }else if(x==3){
        resim.src = "img/img1-3.jpeg";
    }else if(x==2){
        resim.src = "img/img1-2.jpeg";
    }else if(x==1){
        resim.src = "img/img1.jpeg";
    }
    
}