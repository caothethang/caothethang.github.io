var picture = document.getElementsByTagName('img');
var mainImage = document.getElementById('main');
for(let i=0;i<picture.length;i++){
    picture[i].addEventListener('click',function (ev){
        console.log(ev.target)
        let imgsrc=picture[i].getAttribute('src');
        mainImage.setAttribute('src',imgsrc);
    })
}

