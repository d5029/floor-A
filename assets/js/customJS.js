$(function(){
    const data = [
        {
            title: 'title1',
            content: 'XXXX1'
        },
        {
            title: 'title2',
            content: 'XXXX2'
        },
        {
            title: 'title3',
            content: 'XXXX3'
        },
        {
            title: 'title4',
            content: 'XXXX4'
        },
        {
            title: 'title5',
            content: 'XXXX5'
        },
        {
            title: 'title6',
            content: 'XXXX6'
        },
        {
            title: 'title7',
            content: 'XXXX7'
        },
        {
            title: 'title8',
            content: 'XXXX8'
        },
        {
            title: 'title9',
            content: 'XXXX9'
        },
        {
            title: 'title10',
            content: 'XXXX10'
        },
        {
            title: 'title11',
            content: 'XXXX11'
        },
        {
            title: 'title12',
            content: 'XXXX12'
        },
        {
            title: 'title13',
            content: 'XXXX13'
        },
        {
            title: 'title14',
            content: 'XXXX14'
        },
        {
            title: 'title15',
            content: 'XXXX15'
        },
        {
            title: 'title16',
            content: 'XXXX16'
        },
        {
            title: 'title17',
            content: 'XXXX17'
        },
        {
            title: 'title18',
            content: 'XXXX18'
        },
        {
            title: 'title19',
            content: 'XXXX19'
        },
        {
            title: 'title20',
            content: 'XXXX20'
        },
    ]
    $(".canvas polygon").hover(function(){
        let index = $(".canvas polygon").index($(this));
        $(this).attr("fill-opacity", "0.4");
        $(".canvas").append("<div class='tooltip'><h5></h5><p></p></div>");
        $(".tooltip").css({
            "left": $(this).position().left,
            "top":$(this).position().top
        });
        $(".tooltip h5").text(data[index].title);
        $(".tooltip p").text(data[index].content);
    },
    function(){
        $(this).attr("fill-opacity", "0.2");
        $(".canvas .tooltip").remove()
    });
})