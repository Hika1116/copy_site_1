import $ from 'jquery';
import additionCalculator from './modules/addition-calculator';
import taxCalculator from './modules/tax-calculator';

import '../scss/reset.scss';
import '../scss/base.scss';

const $win = $(window);


// window.addEventListener('load', function() {
//     // 初期化処理
//     console.log("load");
//   })
// $(document).ready(function(){
//     //Jqueryでの初期化処理
//     console.log("初期化Jquery");
// });


window.addEventListener('DOMContentLoaded', function() {
    // 初期化処理（こちらの方が早いかも）
    console.log("DOMContentLoaded");
})

$win.scroll(function() {
    if (Number($(this).scrollTop()) >= 100){
        $(".middle-menu-fixed-area").addClass("opacity-true-area");
        $(".middle-menu-fixed-area").removeClass("opacity-false-area");

        $(".middle-sub-header-area").addClass("opacity-true-area");
        $(".middle-sub-header-area").removeClass("opacity-false-area");
    } else {
        $(".middle-menu-fixed-area").removeClass("opacity-true-area");
        $(".middle-menu-fixed-area").addClass("opacity-false-area");

        $(".middle-sub-header-area").removeClass("opacity-true-area");
        $(".middle-sub-header-area").addClass("opacity-false-area");
    }
});

$('#icon-event').click(function(){
    console.log("click image");
    $("over-menu-area").css("transform", "translateY(0)");
});

$("#start-button").click(function() {
    console.log("click start button");
})