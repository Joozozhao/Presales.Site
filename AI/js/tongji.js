(function($){
  $('.body-home .part .item a').on('click',function () {
    var index=$('.body-home .part .item a').index($(this));
    if (index<24) {
      var c='导航首页点击';
      var a='序号：'+(index+1);
      var l=$(this).attr('href');
      _hmt.push(['_trackEvent',c,a,l]);
    }
  });
})(jQuery);


(function($){
    //if (typeof eventTrack != 'function') return;
    /**
     * 首页热门推荐
     */
    $('.body-website #hot .item a').on('click', function () {
      if (typeof eventTrack != 'function') return;
      var index = $('.body-website #hot .item a').index($(this)) + 1;
      eventTrack('15',index);
    });
    /**
     * 高清图库
     */
    $('.body-website #photo .item a').on('click', function () {
      if (typeof eventTrack != 'function') return;
      var index = $('.body-website #hot .item a').index($(this)) + 1;
      eventTrack('16',index);
    });

})(jQuery);