(function(){
//Get bootstrap grid dimensions
    var lg = document.querySelector(".lg"),
      md = document.querySelector(".md"),
      sm = document.querySelector(".sm"),
      xs = document.querySelector(".xs");

    htmlMarkup();
    getDimensions();
    // window.resize event listener
    window.addEventListener("resize", function (timeout, delay) {
      // clear the timeout
      clearTimeout(timeout);
      // start timing for event "completion"
      timeout = setTimeout(getDimensions, delay);
    });
    // window.resize callback function
    function getDimensions() {
      var screenWidth = document.querySelector("#screen-width");
      (timeout = false), (delay = 0), (calls = 0);
      return (screenWidth.innerHTML = window.innerWidth);
      //  calls += 1;
      // c.innerHTML = calls;
    }
      function htmlMarkup(markup) {
        console.log("html markup ran");
        var config = {
          lg: {
            background: "#059AB2"
          },
          md: {
            background: "#44BBCC"
          },
          sm: {
            background: "#F27E5D"
          },
          xs: {
            background: "#059AB2"
          }
        };

        document.body.innerHTML +=
          '<div style="width: 100%;letter-spacing:1px;background-color: purple;text-align:right;font-family:helvetica;line-height:20px;color: white;margin: auto;position: absolute;top:0;right: 0;left:0;position:fixed;z-index: 9999;" title="wrapper"><div class="lg" style="background-color: ' +
          config.lg.background +
          ';position: absolute;padding: 3px 0;margin: 0 auto;width: 100%;right: 0;left: 0;"><p style="margin: 0;padding: 5px;">lg</p></div><div class="md" style="		max-width: 1140px;background-color: ' +
          config.md.background +
          ';position: absolute;padding: 3px 0;margin: 0 auto;width: 100%;right: 0;left: 0;"><p style="margin: 0;padding: 5px;">md</p></div><div class="sm" style="max-width: 940px;background-color: ' +
          config.sm.background +
          ';position: absolute;padding: 3px 0;margin: 0 auto;z-index: 1;width: 100%;right: 0;left: 0;"><p style="margin: 0;padding: 5px;">sm</p></div><div class="xs" style="		max-width: 720px;background-color: ' +
          config.xs.background +
          ';position: absolute;padding: 3px 0;margin: 0 auto;z-index: 1;width: 100%;right: 0;left: 0;"><p style="margin: 0;padding: 5px;">xs</p></div><div id="screen-width" style="width: 65px;margin: 0 auto;z-index:4;position:relative;text-align:center;color:white;padding-top: 10px;letter-spacing:inherit;"></div></div>';
      }
}())
