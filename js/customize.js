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
    };
    if ($('.marquee').length > 0) {
        $('.marquee ul').slick({
            dots: false,
            infinite: true,
            vertical: true,
            verticalSwiping: true,
            speed: 300,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: true, //滑鼠移過後暫停自動撥放
            focusOnSelect: true,
        });
    }
    // // 首頁輪播
    // // -------------------------------
    // $('.mpSlider').slick({
    //     mobileFirst: true,
    //     dots: true,
    //     arrows: true,
    //     infinite: true,
    //     speed: 500,
    //     autoplay: true,
    //     // autoplaySpeed: 15000, // 每張幻燈片間隔15秒切換
    //     fade: true,
    //     lazyLoaded: true,
    //     lazyLoad: 'ondemand',
    //     // ease: 'ease',
    //     pauseOnHover: true,   // 修正：滑鼠移入暫停
    //     pauseOnFocus: true,   // 建議一起設定，避免鍵盤操作誤觸也會播放
    //     customPaging: function(slider, i) {
    //         var title = $(slider.$slides[i]).find('img').attr('alt').trim();
    //         return $('<button type="button" aria-label="' + title + '"/>').text(title);
    //     }
    // });

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

    // 海報輪播
    // $('.posterSlider').slick({
    //     arrows: true,                       //左右箭頭
    //     autoplay: false,                    //自動播放
    //     autoplaySpeed: 15000, // 每張幻燈片間隔15秒切換
    //     dots: true,                        //顯示圓點
    //     dotsClass:  'slick-dots',           //原點css
    //     draggable: true,                    //滑鼠可以拖曳
    //     infinite: false,                     //無限輪播
    //     pauseOnHover: true,                 //滑鼠移過後暫停自動撥放
    //     pauseOnDotsHover: false,            //滑鼠移過圓點後暫停自動撥放
    //     rtl: false,                         //改變輪播方向
    //     slidesToShow: 1,                    //一次顯示幾張
    //     slidesToScroll: 1,                  //一次輪播幾張
    //     vertical: false ,                   //改成垂直方向
    //     fade: true,                         // 淡入
    //     centerMode: true,                   //圖片中心模式
    //     adaptiveHeight: true,               //圖片上下適應高度
    // });


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
    $('.tiptop').find('.close').click(function(event) {
        $('.tiptop').fadeOut();
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

$(function () {
    // =========================
    // ① 首頁輪播 .mpSlider 專屬設定
    // =========================
    const mpOptions = {
        mobileFirst: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 15000,          // 15秒
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        pauseOnHover: true,
        pauseOnFocus: true,
        customPaging: function (slider, i) {
        var title = ($(slider.$slides[i]).find('img').attr('alt') || '').trim() || ('第 ' + (i + 1) + ' 張');
        return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    };

    // =========================
    // ② 海報輪播 .posterSlider 專屬設定
    // =========================
    const posterOptions = {
        arrows: true,
        autoplay: true,                // 海報輪播預設不自動播
        autoplaySpeed: 15000,
        dots: true,
        dotsClass: 'slick-dots',
        draggable: true,
        infinite: true,                // 不循環
        pauseOnHover: true,
        pauseOnDotsHover: false,
        rtl: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        fade: true,                     // 淡入
        centerMode: true,
        adaptiveHeight: true
    };

    // 初始化兩個輪播（各用各的設定）
    const $mp = $('.mpSlider').slick(mpOptions);
    const $poster = $('.posterSlider').slick(posterOptions);

    // 小工具：更新按鈕狀態（同一套邏輯供兩種輪播用）
    function setBtnState($btn, playing) {
        if (playing) {
        $btn.text('暫停播放')
            .attr({'aria-label':'暫停自動播放輪播','aria-pressed':'false'})
            .removeClass('stopped');
        } else {
        $btn.text('開始播放')
            .attr({'aria-label':'開始自動播放輪播','aria-pressed':'true'})
            .addClass('stopped');
        }
    }

    // 綁定每個控制按鈕（用 data-target 找到它負責的輪播）
    $('.sliderToggle').each(function () {
        const $btn = $(this);
        const targetSel = $btn.data('target');
        const $slider = $(targetSel);

        // 建立關聯
        $slider.data('controller', $btn);

        // 初始狀態：若此輪播的 slick 設定為 autoplay，就視為「播放中」，否則視為「暫停」
        const slickInstance = $slider.slick('getSlick');
        const initialPlaying = !!slickInstance.options.autoplay;
        setBtnState($btn, initialPlaying);

        // 點擊：手動切換暫停/播放（只影響各自輪播）
        $btn.on('click', function () {
        const isManuallyPaused = $btn.attr('aria-pressed') === 'true';
        if (isManuallyPaused) {
            $slider.slick('slickPlay');
            setBtnState($btn, true);
        } else {
            $slider.slick('slickPause');
            setBtnState($btn, false);
        }
        });

        // 滑鼠：移入暫停；移出時「若不是手動暫停」才恢復播放
        $slider.on('mouseenter', function () {
        $(this).slick('slickPause');
        });
        $slider.on('mouseleave', function () {
        const $ctl = $(this).data('controller');
        const manuallyPaused = $ctl && $ctl.attr('aria-pressed') === 'true';
        if (!manuallyPaused) $(this).slick('slickPlay');
        });

        // 鍵盤：左右切換、空白鍵切換播放狀態（焦點在輪播上時才作用）
        $slider.on('keydown', function (e) {
        switch (e.key) {
            case 'ArrowLeft':
            e.preventDefault();
            $(this).slick('slickPrev');
            break;
            case 'ArrowRight':
            e.preventDefault();
            $(this).slick('slickNext');
            break;
            case ' ':
            case 'Spacebar':
            case 'Space':
            e.preventDefault();
            $btn.click();
            break;
        }
        });
    });

    //（可選）如果你有顯示目前張數的元素，可針對各自輪播另外綁定
    // 例如：#mp-status、#poster-status
    function bindStatus($slider, $statusEl){
        if (!$statusEl || !$statusEl.length) return;
        $slider.on('afterChange', function (event, slick, currentSlide) {
        $statusEl.text(`目前顯示第 ${currentSlide + 1} 張，共 ${slick.slideCount} 張`);
        });
    }
    // bindStatus($('.mpSlider'), $('#mp-status'));
    // bindStatus($('.posterSlider'), $('#poster-status'));
});


// $(document).ready(function () {
//     // 首頁輪播
//     // -------------------------------
//     $('.mpSlider').slick({
//         mobileFirst: true,
//         dots: true,
//         arrows: true,
//         infinite: true,
//         speed: 500,
//         autoplay: true,
//         autoplaySpeed: 15000, // 每張幻燈片間隔15秒切換
//         fade: true,
//         lazyLoaded: true,
//         lazyLoad: 'ondemand',
//         // ease: 'ease',
//         pauseOnHover: true,   // 修正：滑鼠移入暫停
//         pauseOnFocus: true,   // 建議一起設定，避免鍵盤操作誤觸也會播放
//         customPaging: function(slider, i) {
//             var title = $(slider.$slides[i]).find('img').attr('alt').trim();
//             return $('<button type="button" aria-label="' + title + '"/>').text(title);
//         }
//     });

//     // 控制自動播放的變數
// 	let isPlaying = true;

//     // 更新輪播狀態提示
// 	function updateCarouselStatus(currentSlide, totalSlides) {
// 		$("#carousel-status").text(
// 			`目前顯示第 ${currentSlide} 張投影片，共 ${totalSlides} 張`
// 		);
// 	}
// 	// 處理暫停/播放按鈕點擊
// 	$("#toggle-autoplay").click(function () {
// 		if (isPlaying) {
// 			// 暫停播放
// 			$(".mpSlider").slick("slickPause");
// 			$(this)
// 				.text("開始播放")
// 				.attr("aria-label", "開始自動播放輪播")
// 				.attr("aria-pressed", "true")
//                 .addClass('stopped');
// 		} else {
// 			// 開始播放
// 			$(".mpSlider").slick("slickPlay");
// 			$(this)
// 				.text("暫停播放")
// 				.attr("aria-label", "暫停自動播放輪播")
// 				.attr("aria-pressed", "false")
//                 .removeClass('stopped');
// 		}
// 		isPlaying = !isPlaying;
// 	});

//     // 監聽輪播變化
// 	$(".mpSlider").on("afterChange", function (event, slick, currentSlide) {
// 		updateCarouselStatus(currentSlide + 1, slick.slideCount);
// 	});

// 	// 鍵盤控制
// 	$(".mpSlider").on("keydown", function (e) {
// 		switch (e.key) {
// 			case "ArrowLeft":
// 				$(this).slick("slickPrev");
// 				break;
// 			case "ArrowRight":
// 				$(this).slick("slickNext");
// 				break;
// 			case "Space":
// 				$("#toggle-autoplay").click();
// 				e.preventDefault();
// 				break;
// 		}
// 	});
// });