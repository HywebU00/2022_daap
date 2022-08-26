// 自行加入的JS請寫在這裡
$(function() {
    //sticky sidebar
    // -------------------------------
    if ($('.stickySidebar').length > 0) {
        var stickySidebar = new StickySidebar('.stickySidebar', {
            containerSelector: '.main',
            topSpacing: 93,
            bottomSpacing: 0,
            minWidth: 991,
            resizeSensor: true,
        });
    }
    // 首頁輪播
    // -------------------------------
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        pauseOnHover: false,
        pauseOnFocus: false,
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });

    // 多圖輪播
    // -------------------------------
    $('.spotSlider').slick({
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },{
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    // 廣告輪播
    // -------------------------------
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrow: false,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });

    // header search switch
    // -------------------------------
    $('.search .search_switch').click(function(e) {

        $(this).parent().siblings('.form_grp').fadeOut(300);

        if($(this).hasClass('act')){
            $(this).removeClass('act');
            $(this).parent().siblings('.form_grp').fadeOut();
        }else{
            $(this).addClass('act');
            $(this).parent().siblings('.form_grp').fadeIn();
        }
    });

    // -------------------------------
    $('.cards').find('.col').click(function(){
        var TT = $(this).position().top,
            ObH = $(this).height(),
            ObMg = 16;

        $('.cards .col').removeClass('active');
        $(this).addClass('active');
        $(this).next('.showbox').css({ top: TT + ObH + ObMg} );
    })
    // 點外面關閉showbox
    // -------------------------------
    $(document).on('touchend click', function(e) {
        var container2 = $('.cards');
        if (!container2.is(e.target) && container2.has(e.target).length === 0) {
            $('.cards .col').removeClass('active');
        }
    });

    // 重要公告
    $('.tip').find('.close').click(function(event) {
        $('.tip').fadeOut();
    });

    // 查詢條件
    /*------------------------------------*/
    $('.condition_query .btn-function').siblings('.query_box').hide();

    var _btnFunction = $('.btn-function');

    _btnFunction.off().click(function(e) {
        $(this).siblings('.query_box').stop(true, true).slideToggle();
        e.preventDefault();
    });
    _btnFunction.keyup(function(event) {
        $(this).siblings('.query_box').stop(true, true).slideDown();
    });
    $('.condition_query .query_box')
        .find('.btn_grp>button:last')
        .focusout(function(event) {
            $(this).parents('.query_box').slideUp();
    });
        
    // 點外面關閉share
    $(document).on('touchend click', function(e) {
        var container3 = $('.function_panel .condition_query');
        if (!container3.is(e.target) && container3.has(e.target).length === 0) {
            $('.condition_query .query_box').slideUp();
        }
    });


    // 園區地圖
    // -------------------------------
    $('.spot').find('.info').hide();
    var _btnSpot = $('.spot .title').find('a');

    _btnSpot.off().click(function(e) {
        $('.info').stop(true, true).slideUp();
        $(this).parent('.title').next('.info').stop(true, true).slideDown();
        e.preventDefault();
    });
    _btnSpot.keyup(function(event) {
        $('.info').stop(true, true).slideUp();
        $(this).parent('.title').next('.info').stop(true, true).slideDown();
    });
    $('.zoneMap')
        // .find('.btn_grp>button:last')
        .find('.btn_grp>button:last')
        .focusout(function(event) {
            $(this).parents('.info').slideUp();
    });
        
    // 點外面關閉share
    $(document).on('touchend click', function(e) {
        var container4 = $('.spot');
        if (!container4.is(e.target) && container4.has(e.target).length === 0) {
            $('.spot .info').slideUp();
        }
    });

    // 會員專區 頁籤：展開詳細內容
    // -------------------------------
    // $('.records .tabContent').find('.detail').hide();
    // $('.item .detail').addClass('show');

    $('.records .tabContent').find('.item .switch').click(function(event) {
        if($(this).parent().siblings('.detail').hasClass('show')){
            $(this).parent().siblings('.detail').removeClass('show').slideUp();
            $(this).text('展開詳細內容');
        }else{
            $(this).parent().siblings('.detail').addClass('show').slideDown(400, function(){tabSet();});
            $(this).text('顯示更少');
        }
    });

    // 預約
    // -------------------------------
    $('.calander .today').find('a:first-child').addClass('act');
    $('.calander td').find('a').click(function(event) {
        $('.calander td').find('a').removeClass('act');
        $(this).addClass('act');
    });

    $('.calander .weekly .today').find('a:first-child').removeClass('act');
    $('.calander .weekly .list').find('a').click(function(event) {
        $('.calander .weekly .list').find('a').removeClass('act');
        $(this).addClass('act');
    });

    $('.mask_switch').click(function(event) {
        if($(this).siblings('.mask').hasClass('show')){
            $(this).siblings('.mask').removeClass('show');
            $(this).text('顯示更多');
        }else{
            $(this).siblings('.mask').addClass('show');
            $(this).text('顯示更少');
        }
    });


    // 值班紀錄：排班表 right sidebar
    // -------------------------------
    
    // 月曆、開啟右側邊欄
    $('.calander .links.schedule').find('.mask a').click(function(event) {
        $('.sidebar-schedule').fadeIn();
        $('.sidebar-schedule .content').addClass('act');
    });

    // 手機版
    $('.calander .link_list').find('.items a').click(function(event) {
        $('.sidebar-schedule').fadeIn();
        $('.sidebar-schedule .content').addClass('act');
    });

    // click close、關閉右側邊欄
    $('.sidebar-schedule .btn-close').click(function(event) {
        $('.sidebar-schedule').fadeOut();
        $('.sidebar-schedule .content').removeClass('act');
    });
    // click 編輯、展開 .county
    $('.sidebar-schedule .item').find('button.switch').click(function(event) {
        // alert('有');
        if($(this).parent().siblings('.county').hasClass('show')){
            $(this).parent().siblings('.county').removeClass('show');
            $(this).text('編輯');
        }else{
            $(this).parent().siblings('.county').addClass('show');
            $(this).text('收合');
        }
    });

    // 側邊欄
    // -------------------------------
    $('.left_block').find('.title a.handle').click(function(event) {

        if($(this).parents('.left_block').hasClass('show')){
            $(this).parents('.left_block').removeClass('show');
            $(this).text('開啟');
        }else{
            $(this).parents('.left_block').addClass('show');
            $(this).text('收合');
        }
    });


    //燈箱slick+lightBox組合
    // -------------------------------
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // 
    $('.cppic_slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

    // password_toggle
    // -------------------------------
    var passShow = false;
    $('.password_toggle').each(function(index, el) {
        $(this).find('.btn-icon').off().click(function(e) {
            if (!passShow) {
                $(this).children('i').removeClass().addClass('i_show');
                $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
                passShow = true;
                // console.log(passShow);
            } else {
                $(this).children('i').removeClass().addClass('i_hide');
                $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
                passShow = false;
                // console.log(passShow);
            }
            e.preventDefault();
        });
    });
    // 場館資訊
    // -------------------------------
    $('.sudo_tabItem').each(function(index){
        $(this).on('focus click', function() {
            $('.sudo_tabItem').each(function(){$(this).removeClass('active')});
            $('.sudo_tabContent').each(function(){$(this).removeClass('active');});
            $('.info_box').each(function(){$(this).removeClass('show')});
            $(this).addClass('active');
            var content = $('.sudo_tabContent')[index];
            $(content).addClass('active');
            $($(content).find('.info_box')[0]).addClass('show');
            $(content).find('.slick-prev').off('click').on('click', function(){
                var length = $(content).find('.info_box').length;
                var curActiveIndex = 0;
                $(content).find('.info_box').each(function(infoIndex){
                    if($(this).hasClass('show')) {
                        curActiveIndex = infoIndex;
                        $(this).removeClass('show');
                    }
                });
                var newIndex = curActiveIndex - 1;
                if(newIndex < 0)
                    newIndex = length - 1;
                $($(content).find('.info_box')[newIndex]).addClass('show');
            });
            $(content).find('.slick-next').off('click').on('click', function(){
                var length = $(content).find('.info_box').length;
                var curActiveIndex = 0;
                $(content).find('.info_box').each(function(infoIndex){
                    if($(this).hasClass('show')) {
                        curActiveIndex = infoIndex;
                        $(this).removeClass('show');
                    }
                });
                var newIndex = (curActiveIndex + 1) % length;
                $($(content).find('.info_box')[newIndex]).addClass('show');
            });
        });
    });
    
    $($('.sudo_tabItem')[0]).trigger('click');
    $('.switch').trigger('click');
});