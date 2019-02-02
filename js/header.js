/**
 * Created by cyb on 2019/1/6.
 */
$(function(){
  var weChat = $('#wechat-wrap');
  var wechatCodeWrap = $('.wechat-code-wrap');
  weChat.mouseenter(function(){
    wechatCodeWrap.removeClass('hide-wechat-code');
  })
  weChat.mouseleave(function(){
    wechatCodeWrap.addClass('hide-wechat-code');
  })

  var showTitleListIcon = $('.show-title-list-icon');
  var headerTitleListWrap = $('.header-title-list-wrap');
  showTitleListIcon.click(function(){
    if(showTitleListIcon.hasClass('close-status')){
      showTitleListIcon.removeClass('close-status');
      headerTitleListWrap.addClass('hidden');
    } else{
      showTitleListIcon.addClass('close-status')
      headerTitleListWrap.removeClass('hidden');
    }
  })
})