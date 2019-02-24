const profesion = baffle(".profesion");

profesion.set({
    characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
    speed: 90
});

profesion.start();

profesion.reveal(3000);
console.log("tagline");
$('#tagline').t({
    beep: false,
    caret:'<span style="color:red;">|</span>',
    typing:function(elm,chr){
    if(chr.match(/\-trigger/))
        $('#pow-txt').show().delay(100).fadeOut(0);
    }
});
setTimeout(function(){
    $('.loader').hide();

}, 1800);