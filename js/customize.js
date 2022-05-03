// 自行加入的JS請寫在這裡
$(function() {
    //sticky sidebar
    if ($('.stickySidebar').length > 0) {
        var stickySidebar = new StickySidebar('.stickySidebar', {
            containerSelector: '.main',
            topSpacing: 93,
            bottomSpacing: 0,
            minWidth: 768,
            resizeSensor: true,
        });
    }
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: false,
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
    $('.spotSlider').slick({
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
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

    // 
    $('.cards').find('.col').click(function(){
        var TT = $(this).position().top,
            ObH = $(this).height(),
            ObMg = 16;

        $('.cards .col').removeClass('active');
        $(this).addClass('active');
        $(this).next('.showbox').css({ top: TT + ObH + ObMg} );
    })
    // 點外面關閉showbox
    $(document).on('touchend click', function(e) {
        var container2 = $('.cards');
        if (!container2.is(e.target) && container2.has(e.target).length === 0) {
            $('.cards .showboxs').hide();
        }
    });


    /*-----------------------------------*/
    ///////////////// 變數 ////////////////
    /*-----------------------------------*/
    var _window = $(window),
        ww = _window.outerWidth(),
        wh = _window.height(),
        _body = $('body'),
        wwNormal = 1400,
        wwMedium = 992,
        wwSmall = 768,
        wwxs = 576;

    // 場館資訊 sudo_tabs

    // 標題 right position set
    // sudo_tabItem
    // A = sudo_tabItem 寬度
    // B = sudo_tabs DOM 內的第幾個：ntb(2n+1)
    // C = 再乘以 10%
    // D = 塞入

    // 內容 計算高度
    // sudo_tabContent
    // 提取 .info_box 高度， 塞入 sudo_tabContent

    // var tab_headerHeight2 = Math.floor($('.header').outerHeight(true));
    // var resizeTimer2;
    // _window.resize(function() {
    //     clearTimeout(resizeTimer2);
    //     resizeTimer2 = setTimeout(function() {
    //         ww = _window.outerWidth();
    //         tabSet();
    //     }, 50);
    // });

    // function tabSet() {
    //     $('.sudo_tabs').each(function() {
    //         var _tab = $(this),
    //             _sudo_tabItem = _tab.find('.sudo_tabItem'),                             // 標題
    //             _sudo_tabContent = _tab.find('.sudo_tabContent'),                       // 內容
    //             tabwidth = _tab.width(),                                                // 該組 tab 的寬度
    //             sudo_tabItemHeight = _sudo_tabItem.outerHeight(),                       // 標題、高度
    //             sudo_tabItemWidth  = _sudo_tabItem.outerWidth(),                        // 標題、寬度
    //             sudo_tabContentHeight = _tab.find('.active').next().innerHeight(),      // 內容、高度
    //             tiGap = 0,                                                              // 數值 1
    //             TTT = parseInt('10%'),                                                  // 數值 2
    //             sudo_tabItemLength = _sudo_tabItem.length;                              // 標題、數量
                

    //         _tab.find('.active').next('.sudo_tabContent').show();

    //         if (ww >= wwSmall) {

    //             // 桌機版
    //             // sudo_tabItem right position set
    //             // DOM 2n+1 為 sudo_tabItem 

    //             // A = sudo_tabItemWidth
    //             // B = sudo_tabs DOM 內的第幾個：ntb(2n+1)
    //             // C = 再乘以 10%
    //             // D = 塞入

    //             _sudo_tabItem.css('right', )

    //             _tab.height(sudo_tabContentHeight + sudo_tabItemHeight);



    //             // _sudo_tabContent.css('top', sudo_tabItemHeight);         
    //             // _tab.height(sudo_tabContentHeight + sudo_tabItemHeight);

    //             // // sudo_tabItemWidth = ( tabwidth / sudo_tabItemLength);           // width 402
    //             // sudo_tabItemWidth = ( tabwidth / sudo_tabItemLength) - TTT;        // width 400

    //             // _sudo_tabItem.width(sudo_tabItemWidth).css('margin-left', '3px');
    //             // _sudo_tabItem.first().css('margin-left', 0);
    //             // _sudo_tabItem.last().css({ position: 'absolute', top: 0, right: 0 }).width(sudo_tabItemWidth);

    //         } else {
    //             _tab.css('height', 'auto');
    //             _sudo_tabItem.width(tabwidth);
    //             _sudo_tabItem.css('margin-left', 0).last().css('position', 'relative');
    //         }
    //         _sudo_tabItem.focus(tabs); //改button後，前面改_sudo_tabItem
    //         _sudo_tabItem.click(tabs); //改button後，前面改_sudo_tabItem
    //         function tabs(e) {
    //             var _sudo_tabItemNow = $(this), //改button後，原來$(this).parent(),改$(this)
    //                 tvp = _tab.offset().top,
    //                 tabIndex = _sudo_tabItemNow.index() / 2,
    //                 scollDistance = tvp + sudo_tabItemHeight * tabIndex - tab_headerHeight;
    //             _sudo_tabItem.removeClass('active');
    //             _sudo_tabItemNow.addClass('active');
    //             if (ww <= wwSmall) {
    //                 _sudo_tabItem.not('.active').next().slideUp();
    //                 _sudo_tabItemNow.next().slideDown();
    //                 $('html,body').stop(true, false).animate({ scrollTop: scollDistance });
    //             } else {
    //                 _sudo_tabItem.not('.active').next().hide();
    //                 _sudo_tabItemNow.next().show();
    //                 sudo_tabContentHeight = _sudo_tabItemNow.next().innerHeight();
    //                 _tab.height(sudo_tabContentHeight + sudo_tabItemHeight);
    //             }
    //             e.preventDefault();
    //         }
    //     });
    // }
    // $('.tabs>.tabItem:first-child>a').trigger('click');
    // tabSet();




    // .sudo_tabItem 總數量
    // .sudo_tabItem right 位置控制

    // .sudo_tabItem： nth-child(2n+1) 

    // DOM排序：nth-child(2n+1) = 1
    // 畫面排序：1
    // DOM排序：nth-child(2n+1) = 3
    // 畫面排序：2
    // DOM排序：nth-child(2n+1) = 5
    // 畫面排序：3
    // DOM排序：nth-child(2n+1) = 7
    // 畫面排序：4 
    // DOM排序：nth-child(2n+1) = 9
    // 畫面排序：5 
    // DOM排序：nth-child(2n+1) = 11
    // 畫面排序：6 

    // 計算自己是父層的第幾個元素、.index()，從0起算

    // right= 60px * ( button_sum - $(this) 的 nth-child(2n+1) )
    // right = .sudo_tabItem

    // function sudo_tabSet() {

    //     var button_sum = $('.sudo_tabs').find('button').length,
    //         button_index = $('.sudo_tabs').find('button').index(this);
    //         // 按鈕總數量，目前共 5
    //         // 計算自己是父層的第幾個元素

    //         if (ww >= wwSmall) {
                
    //         }else{}
    // }

    // sudo_tabSet();

    // $('.sudo_tabs button').click(function(event) {
    //     button_index = $('.sudo_tabs').find('button').index(this);
    //     // alert(button_index);                    // 目前吐出 0～4
    // });




    // -------------------------------


    //燈箱slick+lightBox組合
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
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

    // password_toggle
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
});