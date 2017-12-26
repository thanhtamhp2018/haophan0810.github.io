var arrDataSpecial = [SN01, SN02, SN03, SN04, SN05, SN06, SN07, SN08];
var arrDataBestSell = [SN09, SN10, SN11, SN12, SN13, SN14, SN15, SN16];
var ABC = {
    name: 'Sinh Nhật Ngọt Ngào',
    category: 'birthday',
    description: 'Làm ngọt theo cách bạn thể hiện mình với sự sắp xếp hoa hồng và hoa cẩm chướng tươi tắn và tươi tắn này. Những bông hồng và hoa cẩm chướng. Những bông hồng và hoa màu trắng nở lên cho dịp này, làm ấm trái tim của người đặc biệt đó trong cuộc sống của bạn.',
    title: 'Giỏ hoa sinh nhật ngọt ngào',
    alt: 'Giỏ hoa sinh nhật ngọt ngào',
    rating: 4,
    cost: 1000000,
    //promotion sale||new||hot 
    classPromotion: 'promotion-new',
    namePromotion: 'New',
    sale: 10,
    src: 'images/birthday/SN01.jpg',
    //codePromotion S:sale N:new H:hot D:default
    codePromotion: 'S',
    curentCost: function () {
        if (this.codePromotion !== 'S') {
            return this.cost;
        } else {
            let m = this.cost - (this.cost * this.sale) / 100;
            return m;
        };
    }
}
$(document).ready(function () {
    //products special
    var htmlProductSpecial = "";
    var test=0;
    var test2=0;
    for (var i = 0; i < arrDataSpecial.length; i++) {
        ;
        test2=(test%4+1)/10;
        test+=1;
        htmlProductSpecial += '<div class="product wow fadeInUp" data-wow-duration="0,5s" data-wow-delay="'+test2+'s" id="' + arrDataSpecial[i].id + '">' +
            '<div class="content-product">' +
            ' <div class="image-product">' +
            '<a href="product-description.html">' +
            '<img src="' + arrDataSpecial[i].src + '" alt="' + arrDataSpecial[i].alt + '" title="' + arrDataSpecial[i].title + '">' +
            '</a>' +
            '</div>' +
            '<div class="descrition">' +
            '<div class="name-product">' +
            '<a href="">' +
            '<span>' + arrDataSpecial[i].name + '</span>' +
            '</a>' +
            '</div>' +
            '<div class="cost-product">' +
            '<span class="cost-product-sale ' + arrDataSpecial[i].promotion + '">' + arrDataSpecial[i].oldCost() + ' đ</span>' +
            '<span class="cost-product-not-sale">' + arrDataSpecial[i].curentCost() + ' đ</span>' +
            '</div>' +
            '<div class="rating-product">' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '</div>' +
            '<div class="shopping-cart">' +
            '<div class="shopping-cart-div">' +
            '<a href="" class="shopping-cart-a">' +
            '<i class="fa fa-shopping-cart product-cart" aria-hidden="true"></i>' +
            '<span class="shopping-cart-span">Thêm vào giỏ hàng</span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="special-product ' + arrDataSpecial[i].classPromotion + '">' +
            '<div class="hot-product">' +
            '<span class="promotion">' + arrDataSpecial[i].textPromotion() + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="quick-view">' +
            '<a href="" title="Xem nhanh">' +
            '<i class="fa fa-search-plus" aria-hidden="true"></i>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>'

    }

    //products best sellest
    var htmlBestSellest = "";
    var testBest=0;
    var testBest2=0;
    for (var i = 0; i < arrDataBestSell.length; i++) {
        testBest2=(testBest%4+1)/10;
        testBest+=1;
       
        htmlBestSellest += '<div class="product wow fadeInUp" data-wow-duration="0,5s" data-wow-delay="'+testBest2+'s" id="' + arrDataBestSell[i].id + '">' +
            '<div class="content-product">' +
            ' <div class="image-product">' +
            '<a href="product-description.html">' +
            '<img src="' + arrDataBestSell[i].src + '" alt="' + arrDataBestSell[i].alt + '" title="' + arrDataBestSell[i].title + '">' +
            '</a>' +
            '</div>' +
            '<div class="descrition">' +
            '<div class="name-product">' +
            '<a href="">' +
            '<span>' + arrDataBestSell[i].name + '</span>' +
            '</a>' +
            '</div>' +
            '<div class="cost-product">' +
            '<span class="cost-product-sale ' + arrDataBestSell[i].promotion + '">' + arrDataBestSell[i].oldCost() + ' đ</span>' +
            '<span class="cost-product-not-sale">' + arrDataBestSell[i].curentCost() + ' đ</span>' +
            '</div>' +
            '<div class="rating-product">' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '<i class="fa fa-star rating-product" aria-hidden="true"></i>' +
            '</div>' +
            '<div class="shopping-cart">' +
            '<div class="shopping-cart-div">' +
            '<a href="" class="shopping-cart-a">' +
            '<i class="fa fa-shopping-cart product-cart" aria-hidden="true"></i>' +
            '<span class="shopping-cart-span">Thêm vào giỏ hàng</span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="special-product ' + arrDataBestSell[i].classPromotion + '">' +
            '<div class="hot-product">' +
            '<span class="promotion">' + arrDataBestSell[i].textPromotion() + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="quick-view">' +
            '<a href="" title="Xem nhanh">' +
            '<i class="fa fa-search-plus" aria-hidden="true"></i>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>'

    }
    $('#content-products-special').append(htmlProductSpecial);
    $('#content-products-best-sellest').append(htmlBestSellest);
    new WOW().init();
    var objHeight = 0;
    $.each($('.slide-image'), function () {

        objHeight = $(this).height();
    });
    $('#slide-images').height(objHeight);



    //after load, show popup
    // $('#start-wrap').addClass('show-start-wrap');
    // $('#show-sale-start').addClass('show-sale-start');
    // var showPTitleStart = setInterval(function(){
    //     $('#title-sale-start').addClass('title-sale-start');

    //     clearInterval(showPTitleStart);
    // },500);
    // var showContentStart = setInterval(function(){
    //  $('p.content-sale-start,h1.content-sale-start').addClass('effect-content-sale-start');
    //     clearInterval(showContentStart);
    // },800);
    // //close when click x
    // $('i.content-sale-start').click(function(){
    //     $('#start-wrap').removeClass('show-start-wrap');
    //     console.log(this);;
    // })
    // //au to close
    // var closeStartSale = setInterval(function(){
    //     $('#start-wrap').removeClass('show-start-wrap');


    //     clearInterval(closeStartSale);
    // },5000);

    //Auto set height for div slide
    var slideImg = $('.slide-image');
    var circleSlide = $('.circle-slide');

    //Auto play slide
    setInterval(function () {
        $('#arrow-next').trigger('click');

    }, 4000)
    //Click arrow Next
    $('#arrow-next').click(function () {
        $('.slide-image').removeClass('add-transition');
        var nextSlide = $('.active').next();
        var _this = this;
        console.log(nextSlide.index());
        $(this).css('pointer-events', 'none');
        $('.active-circle').removeClass('active-circle');

        if (nextSlide.index() < slideImg.length) {
            $('.active').addClass('current-slide-out').one('webkitAnimationEnd', function () {
                $('.current-slide-out').removeClass('current-slide-out');
            });

            nextSlide.addClass('next-slide-in').one('webkitAnimationEnd', function () {
                console.log('why');
                $('.active').removeClass('active');

                $('.next-slide-in').addClass('active').removeClass('next-slide-in');
                setTimeout(function () {
                    $(_this).css('pointer-events', 'auto');
                }, 500);

            });
            console.log(nextSlide.index());
            var index = nextSlide.index();
            //    $('.active-circle').removeClass('active-circle');
            $('.circle-slide:nth(' + index + ')').addClass('active-circle');
            console.log($('.circle-slide:nth(' + index + ')').index());
        } else {
            $('.active').addClass('current-slide-out').one('webkitAnimationEnd', function () {
                $('.current-slide-out').removeClass('current-slide-out');
            });
            $('.slide-image:first').addClass('next-slide-in').one('webkitAnimationEnd', function () {
                console.log('why');
                $('.active').removeClass('active');

                $('.next-slide-in').addClass('active').removeClass('next-slide-in');
            });
            setTimeout(function () {
                $(_this).css('pointer-events', 'auto');
            }, 500);
            $('.circle-slide:first').addClass('active-circle');

        }


    })

    // handle arrow back

    $('#arrow-back').click(function () {
        $('.slide-image').removeClass('add-transition');

        var backSlide = $('.active').prev();
        var _this = this;
        console.log(backSlide.index());
        $(this).css('pointer-events', 'none');
        $('.active-circle').removeClass('active-circle');
        if (backSlide.index() < 0) {
            $('.active').addClass('current-slide-out-right').one('webkitAnimationEnd', function () {
                $('.current-slide-out-right').removeClass('current-slide-out-right');
            });
            $('.slide-image:last').addClass('next-slide-in-left').one('webkitAnimationEnd', function () {
                console.log('why');
                $('.active').removeClass('active');

                $('.next-slide-in-left').addClass('active').removeClass('next-slide-in-left');
            });
            setTimeout(function () {
                $(_this).css('pointer-events', 'auto');
            }, 500);
            $('.circle-slide:last').addClass('active-circle');
        } else {
            $(this).css('pointer-events', 'none');

            $('.active').addClass('current-slide-out-right').one('webkitAnimationEnd', function () {
                $('.current-slide-out-right').removeClass('current-slide-out-right');
            });

            backSlide.addClass('next-slide-in-left').one('webkitAnimationEnd', function () {
                console.log('why');
                $('.active').removeClass('active');

                $('.next-slide-in-left').addClass('active').removeClass('next-slide-in-left');
                setTimeout(function () {
                    $(_this).css('pointer-events', 'auto');
                }, 500);

            });
            var index = backSlide.index();

            $('.circle-slide:nth(' + index + ')').addClass('active-circle');


        }


    })

    //Click circle in slide
    $('.circle-slide').click(function () {
        // $('.slide-image').addClass('add-transition');
        $('.circle-slide').css('pointer-events', 'none');
        console.log($(this).index());
        $('.active').addClass('fadeOutLeft animated').one('webkitAnimationEnd', function () {
            $('.fadeOutLeft').removeClass('active fadeOutLeft animated');

        });

        $('.active-circle').removeClass('active-circle');
        $(this).addClass('active-circle');
        var index = $(this).index();
        $('.slide-image:nth(' + index + ')').addClass('active fadeInRight animated').one('webkitAnimationEnd', function () {
            $('.fadeInRight').removeClass('fadeInRight animated');
        });
        setTimeout(function () {
            $('.circle-slide').css('pointer-events', 'auto');
        }, 800);

    })

    // handle when scroll
    $(window).scroll(function () {
        var viewportWidth = $("body").innerWidth();
        var viewportHeight = $("body").innerHeight();
        var c = document.body.clientHeight;
        var b = $(window).scrollTop();
        var a = $("html").scrollTop();

        // $('.test').html(a);
        if (a > 55) {
            //fix-nav
            $('#nav-down-wrap').addClass('testScroll');
            //fix-back-to-top
            $('div.back-to-top').addClass('show-back-to-top');
            if ($('sub.menu-cart').data('number-product') != '0') {
                $('a.cart-scrolled').addClass('show-cart-bottom');
            }
        } else {
            $('#nav-down-wrap').removeClass('testScroll');
            $('div.back-to-top').removeClass('show-back-to-top');
            $('a.cart-scrolled').removeClass('show-cart-bottom');
        }
        console.log(a);
        if (a > 200) {
            $('.product').addClass('fadeInLeft animated');
        }


    })
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });


})