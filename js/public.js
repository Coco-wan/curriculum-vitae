// JavaScript Document
$(document).ready(function(){
//-----------------
  var DEFAULT_WIDTH = 640, // 页面的默认宽度
      ua = navigator.userAgent.toLowerCase(), // 根据 user agent 的信息获取浏览器信息
      deviceWidth = window.screen.width, // 设备的宽度
      devicePixelRatio = window.devicePixelRatio || 1, // 物理像素和设备独立像素的比例，默认为1
      targetDensitydpi;
  if (ua.indexOf("android") !== -1 && parseFloat(ua.slice(ua.indexOf("android")+8)) < 4) {
      targetDensitydpi = DEFAULT_WIDTH / deviceWidth * devicePixelRatio * 160;
      $('meta[name="viewport"]').attr('content', 'target-densitydpi=' + targetDensitydpi + ', width=device-width, user-scalable=no');
  }

  }) 
