(function($,currentBrowser){
  $.get('fakeapi/browsers.json',function(browsers){
    var cookieValue = $.cookie('updateBrowser'),
        versionOk = false,
        browser = browsers[currentBrowser.name];
    
    if (browsers[currentBrowser.name]){
      //we have an actual browser to work with
      $('.updateBrowser'+currentBrowser.name+' a img').attr('src','img/download-btn.png');
      $('#currentBrowserName').text(browser.display);
      if (currentBrowser.versionNumber >= browser.minVersion){
        versionOk = true;
      }
    } else {
      $('#updateBrowserSupportedText').toggle();
      //we have an unidentified browser
    }
    
    if (versionOk || !cookieValue){
      $('#updateBrowser.hiddenOnLoad, #updateBrowserMask.hiddenOnLoad').removeClass('hiddenOnLoad');
      $(document).on('click','#closeUpdateBrowser',function (evt){
        var checked = $('#hideUpdateBrowser').attr('checked');
        if (checked){
          $.cookie('updateBrowser','udpateBrowser',{expires: 3650 /*ten years*/,path:'/'})
        }
        $('#updateBrowser, #updateBrowserMask').addClass('hiddenOnLoad');
      });
    }
  });
})(jQuery, $.browser)
