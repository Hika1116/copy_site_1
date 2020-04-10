import $ from 'jquery';
import additionCalculator from './modules/addition-calculator';
import taxCalculator from './modules/tax-calculator';

import '../scss/reset.scss';
import '../scss/base.scss';

window.addEventListener('load', function() {
    // 初期化処理
    console.log("load");
  })
window.addEventListener('DOMContentLoaded', function() {
    // 初期化処理（こちらの方が早いかも）
    console.log("DOMContentLoaded");
})
$(document).ready(function(){
    //Jqueryでの初期化処理
    console.log("初期化Jquery");
});