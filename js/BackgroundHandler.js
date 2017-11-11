class BackgroundHandler {

    construct() {

    }

    setImage(image) {
        $('body').css('background-image', `url(${image})`);
    }

}
