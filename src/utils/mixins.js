import Vue from 'vue'

// 全站共用的 function，會注入每個 component 當中
Vue.mixin({
  methods: {
    // 參考： https://gist.github.com/joshcanhelp/a3a669df80898d4097a1e2c01dea52c1
    // https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery
    scrollTo (scrollTo, scrollDuration) {
      // Set a default for where we're scrolling to
      if (typeof scrollTo === 'string') {
        // Assuming this is a selector we can use to find an element
        var scrollToObj = document.getElementById(scrollTo)
        if (scrollToObj && typeof scrollToObj.getBoundingClientRect === 'function') {
          scrollTo = window.pageYOffset + scrollToObj.getBoundingClientRect().top - 80
        }
      } else if (typeof scrollTo !== 'number') {
        // If it's nothing above and not an integer, we assume top of the window
        scrollTo = 0
      }

      // Set this a bit higher
      var anchorHeightAdjust = 30
      if (scrollTo > anchorHeightAdjust) {
        scrollTo = scrollTo - anchorHeightAdjust
      }

      // Set a default for the duration
      if (typeof scrollDuration !== 'number' || scrollDuration < 0) {
        scrollDuration = 1000
      }

      // Declarations
      var cosParameter = (window.pageYOffset - scrollTo) / 2
      var scrollCount = 0
      var oldTimestamp = window.performance.now()

      function step (newTimestamp) {
        var tsDiff = newTimestamp - oldTimestamp

        // Performance.now() polyfill loads late so passed-in timestamp is a larger offset
        // on the first go-through than we want so I'm adjusting the difference down here.
        // Regardless, we would rather have a slightly slower animation than a big jump so a good
        // safeguard, even if we're not using the polyfill.
        if (tsDiff > 100) {
          tsDiff = 30
        }

        scrollCount += Math.PI / (scrollDuration / tsDiff)

        // As soon as we cross over Pi, we're about where we need to be
        if (scrollCount >= Math.PI) {
          return
        }

        var moveStep = Math.round(scrollTo + cosParameter + cosParameter * Math.cos(scrollCount))
        window.scrollTo(0, moveStep)
        oldTimestamp = newTimestamp
        window.requestAnimationFrame(step)
      }

      window.requestAnimationFrame(step)
    },
    /**
     *  字串加密 https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
     * encodeURIComponent: 處理中轉英以及特殊字元像是 '@' 的編碼
     * btoa: base64編碼
     */
    encodeValue (value) {
      if (!value) return false
      return window.btoa(encodeURIComponent(value))
    },
    // 將 /n 改成 <br> 換行顯示
    lineBreak (str) {
      return str ? str.replace(/\n|\r\n/g, '<br/>') : ''
    }
  }
})
