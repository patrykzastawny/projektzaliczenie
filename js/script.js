/*jshint esversion: 6 */

//tworzę zdarzenie które wykona się na zmianę tapety
$('#select-wallpaper').on('change', function (e) {
    adjustViewToSelectedWallpaper();
});

//zdarzenie które wykona się na zmianę powtarzania
$('#select-repeat').on('change', function (e) {
    adjustViewToSelectedRepeat();
});

let init = () => {
    fillWallpapers();
    adjustViewToSelectedWallpaper();
    adjustViewToSelectedRepeat();
};
//pobranie zaznaczonej wartosci tapety z listy z value (w tym przypadku nazwy pliku)
let adjustViewToSelectedWallpaper = () => {
    let selectedwallpaper = $("#select-wallpaper option:selected" ).val();     
       //zmiana wartosci parametru background-image poprzez zmiane stylu css dla body
    $('body').css('background-image', "url(\"img/"+selectedwallpaper+"\")");
};

let adjustViewToSelectedRepeat = () => {
	 //pobranie zaznaczonej wartosci powtarzania sie z listy z value (w tym przypadku stylu css)
    let selectedRepeat = $("#select-repeat option:selected" ).val();
     //zmiana stylu powtarzania sie css
    $('body').css('background-repeat', selectedRepeat);
};

let fillWallpapers = () => {
    let wallpapers = getWallpapers();

    for (let i = 0; i < wallpapers.length; i++) {
    	//dodanie plikow na liste wyporu
        $("#select-wallpaper").append("<option value='"+wallpapers[i].fileName+"'>"+wallpapers[i].name+"</option>");
    }
};

let getWallpapers = () => {
        
    return [
        {
            name: "kwiatki",
            fileName: "flowers.jpg"
        },
        {
            name: "samochody",
            fileName: "cars.jpg"
        },
        {
            name: "bąbelki",
            fileName: "double-bubble.webp"
        },
        {
            name: "zwierzęta",
            fileName: "animals.jpg"
        },
         {
            name: "strona",
            fileName: "tlo-strony.jpg"
        },
         {
            name: "pwsz",
            fileName: "pwsz.jpg"
        },
         {
            name: "wypelnienie",
            fileName: "wypelnienie.jpg"
        }
    ];
};

init();