//banner图轮播 
var banner = document.getElementById("photo");
var index = 0;

    setInterval( function() {
        index++;
        banner.src = "./image/" + index + ".jpg";
        // console.dir(banner)
        if (index === 5) { index = 0; }
        console.log(banner)
    },2000)

