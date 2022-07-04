### rem适配方案

```javascript
 (function () {
        var DEFAULT_FONT_SIZE = 16
        var docEl = document.documentElement
        var userWebsetFontDefaultSize = DEFAULT_FONT_SIZE
          // 用原生方法获取用户设置的浏览器的字体大小(兼容ie)
          if (docEl.currentStyle) {
            userWebsetFontDefaultSize = docEl.currentStyle['fontSize']
          } else {
            userWebsetFontDefaultSize = getComputedStyle(docEl, false)['fontSize']
          }
          // 取数字部分
          userWebsetFontDefaultSize = parseFloat(userWebsetFontDefaultSize)
          // 将实际的字号除以默认字号
        var sizeScale = userWebsetFontDefaultSize / DEFAULT_FONT_SIZE
        var designWidth = 768;
        var docElement = document.documentElement,
            eventName = "orientationchange" in window ? "orientationchange" : "resize",
            remFunc = function () {
                var clientWidth = docElement.clientWidth;
                if (!clientWidth) {
                    return
                }
                if(clientWidth > 768){
                  if( clientWidth  > 1600) {
                    designWidth = 1920;
                    if(clientWidth < 1750){
                      designWidth = 1600;
                    }
                  }
                  else{
                    designWidth = 1550;
                    if(clientWidth < 1000) {
                      designWidth = 1550;
                    }
                  }
                }else{
                  designWidth = 768;
                }
                if(designWidth == 768){
                  docElement.style.fontSize = ( 100 * clientWidth / designWidth /  sizeScale ) + "px"
                }
               else{
                docElement.style.fontSize = ( 100 * clientWidth / designWidth ) + "px"
               }
            };
        if (!document.addEventListener) {
            return
        }
        window.addEventListener(eventName, remFunc, false);
        window.addEventListener("DOMContentLoaded", remFunc, false);
        remFunc()
      })();
```