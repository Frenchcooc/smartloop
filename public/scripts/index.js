var slider = [
    {
        bg: ['#f5536e', '#ff1c1c'],
        pos: -100,
        favicon: 'favicon-red.png'
    },
    {
        bg: ['#2ea8ff', '#004ad2'],
        pos: -440,
        favicon: 'favicon-blue.png'
    },
    {
        bg: ['#fff155', '#f9d300'],
        pos: -755,
        favicon: 'favicon-yellow.png'
    },
    {
        bg: ['#f434ce', '#ff2956'],
        pos: -1100,
        favicon: 'favicon-pink.png'
    }
];
var curColor = 1;

setInterval(function() {
    if (curColor > 3)
        curColor = 0
    $('.header-container').css('background', 'linear-gradient(to bottom right, ' + slider[curColor].bg[0] + ', ' + slider[curColor].bg[1] + ')')
    var pos = slider[curColor].pos
    if (window.innerWidth < 700)
        pos = slider[curColor].pos*0.8-110
    $('.cases-top2').css('left', pos);
    $('#favicon').attr('href', './public/images/' + slider[curColor].favicon)
    //$('.buy-btn').css('color', slider[curColor].bg[1])
    curColor++;
}, 3000);