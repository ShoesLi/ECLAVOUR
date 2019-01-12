/**
 * Created by cyb on 2019/1/6.
 */
$(function(){
  jQuery(window).trigger('resize').trigger('scroll');
  $('.parallax-window').parallax({
    naturalWidth: 600,
    naturalHeight: 400
  });
})