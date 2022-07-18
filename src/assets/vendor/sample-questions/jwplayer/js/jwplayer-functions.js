jwplayer.key = "ii0/LrIbDhtTsUFUOQDge7RnR4Fga6NbWEnSfQ==";
$("#audioplayer").each(function () {
$(document).ready(function () {
    var audioPlayer = jwplayer("audioplayer");
    audioPlayer.setup({
        file: "https://ptevoucher.com.au/images/test-audio.mp3",
        startparam: "ec_seek",
        height: 40,
         icons: true,
        // autoplay: false,
         //stopAudioPlayer:true,
        events: {
            onReady: function (event) {
                $('.jw-icon-playback').removeAttr('Style');
                $('.jw-icon-prev').removeAttr('Style');
                $('.jw-icon-next').removeAttr('Style');
                audioPlayer.stop();
                //audioPlayer.play();
                //audioPlayer.pause();
                // stopAudioPlayer();
                // showLoading();
                // hideLoading();
            }
        }
    });
});
});