var galleryImg = JSON.parse(localStorage.getItem("Images"));
var theIMG_1 = document.querySelector("#the_IMG_1");
var theIMG_2 = document.querySelector("#the_IMG_2");
var theIMG_3 = document.querySelector("#the_IMG_3");
var theIMG_4 = document.querySelector("#the_IMG_4");
var theIMG_5 = document.querySelector("#the_IMG_5");
var theIMG_6 = document.querySelector("#the_IMG_6");
var theIMG_7 = document.querySelector("#the_IMG_7")
var theTitle_1 = document.querySelector("#the_title_1");
var theTitle_2 = document.querySelector("#the_title_2");
var theTitle_3 = document.querySelector("#the_title_3");
var theTitle_4 = document.querySelector("#the_title_4");
var theTitle_5 = document.querySelector("#the_title_5");
var theTitle_6 = document.querySelector("#the_title_6");
var theTitle_7 = document.querySelector("#the_title_7");
var theDescription_1 = document.querySelector("#the_description_1");
var theDescription_2 = document.querySelector("#the_description_2");
var theDescription_3 = document.querySelector("#the_description_3");
var theDescription_4 = document.querySelector("#the_description_4");
var theDescription_5 = document.querySelector("#the_description_5");
var theDescription_6 = document.querySelector("#the_description_6");
var theDescription_7 = document.querySelector("#the_description_7");

galleryArray = [];

console.log(galleryImg);

var gallery = function() {
        if (galleryImg) {
                for (var i = 0; i < galleryImg.length; i++) {
                        if (galleryImg.length > 7) {
                                console.log("!!!");
                                galleryImg.shift();
                        }
                }
                theIMG_1.innerHTML = galleryImg[0].picture;
                theTitle_1.innerHTML = galleryImg[0].title;
                theDescription_1.innerHTML = galleryImg[0].description;

                theIMG_2.innerHTML = galleryImg[1].picture;
                theTitle_2.innerHTML = galleryImg[1].title;
                theDescription_2.innerHTML = galleryImg[1].description;

                theIMG_3.innerHTML = galleryImg[2].picture;
                theTitle_3.innerHTML = galleryImg[2].title;
                theDescription_3.innerHTML = galleryImg[2].description;

                theIMG_4.innerHTML = galleryImg[3].picture;
                theTitle_4.innerHTML = galleryImg[3].title;
                theDescription_4.innerHTML = galleryImg[3].description;

                theIMG_5.innerHTML = galleryImg[4].picture;
                theTitle_5.innerHTML = galleryImg[4].title;
                theDescription_5.innerHTML = galleryImg[4].description;

                theIMG_6.innerHTML = galleryImg[5].picture;
                theTitle_6.innerHTML = galleryImg[5].title;
                theDescription_6.innerHTML = galleryImg[5].description;

                theIMG_7.innerHTML = galleryImg[6].picture;
                theTitle_7.innerHTML = galleryImg[6].title;
                theDescription_7.innerHTML = galleryImg[6].description;
        }
        
        
        

        
};

gallery();
