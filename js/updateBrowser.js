(function($,currentBrowser){
  $.getJSON('fakeapi/browsers.js',function(browsers){
    var cookieValue = $.cookie('updateBrowser'),
        versionOk = false,
        badBrowser = false,
        browser = browsers[currentBrowser.name];
        
    console.log(browser.display);
    console.log(browser.minVersion);
    console.log(currentBrowser.versionNumber);
    
    if (browser){
      //we have an actual browser to work with
      $('.updateBrowser'+currentBrowser.name+' a img').attr('src','img/update-btn.png');
      $('#currentBrowserName').text(browser.display);
      if (currentBrowser.versionNumber >= browser.minVersion){
        versionOk = true;
      }
    } else {
      $('#updateBrowserSupportedText').toggle();
      badBrowser = true;
      //we have an unidentified browser
    }
    
    if ((!versionOk && !cookieValue) || badBrowser){
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
