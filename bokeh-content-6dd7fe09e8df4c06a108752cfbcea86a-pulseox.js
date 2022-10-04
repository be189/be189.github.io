(function() {
  const fn = function() {
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("fa7ff9d5-019c-46a2-907b-b97cd8606aa1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fa7ff9d5-019c-46a2-907b-b97cd8606aa1' but no matching script tag was found.")
        }
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.3.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"29e5e4bc-6cbc-46b7-9d18-9148cdc26446":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1022","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"wavelength (nm)"},"y":{"field":"molar extinction coefficient for Hb (1/cm-M)"}},"id":"1036","type":"Line"},{"attributes":{},"id":"1047","type":"AllLabels"},{"attributes":{"ticker":null},"id":"1043","type":"LogTickFormatter"},{"attributes":{},"id":"1071","type":"Selection"},{"attributes":{},"id":"1020","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null},"id":"1040","type":"Title"},{"attributes":{},"id":"1049","type":"Selection"},{"attributes":{"label":{"value":"Hb"},"renderers":[{"id":"1038"}]},"id":"1052","type":"LegendItem"},{"attributes":{"coordinates":null,"group":null,"items":[{"id":"1052"},{"id":"1073"}]},"id":"1051","type":"Legend"},{"attributes":{"label":{"value":"O\\u2082Hb"},"renderers":[{"id":"1058"}]},"id":"1073","type":"LegendItem"},{"attributes":{"axis_label":"extinction coefficient (1/cm-M)","coordinates":null,"formatter":{"id":"1043"},"group":null,"major_label_policy":{"id":"1044"},"ticker":{"id":"1016"}},"id":"1015","type":"LogAxis"},{"attributes":{"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375],"molar extinction coefficient for Hb (1/cm-M)":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[376]},"molar extinction coefficient for O2Hb (1/cm-M)":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[376]},"wavelength (nm)":[250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438,440,442,444,446,448,450,452,454,456,458,460,462,464,466,468,470,472,474,476,478,480,482,484,486,488,490,492,494,496,498,500,502,504,506,508,510,512,514,516,518,520,522,524,526,528,530,532,534,536,538,540,542,544,546,548,550,552,554,556,558,560,562,564,566,568,570,572,574,576,578,580,582,584,586,588,590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,680,682,684,686,688,690,692,694,696,698,700,702,704,706,708,710,712,714,716,718,720,722,724,726,728,730,732,734,736,738,740,742,744,746,748,750,752,754,756,758,760,762,764,766,768,770,772,774,776,778,780,782,784,786,788,790,792,794,796,798,800,802,804,806,808,810,812,814,816,818,820,822,824,826,828,830,832,834,836,838,840,842,844,846,848,850,852,854,856,858,860,862,864,866,868,870,872,874,876,878,880,882,884,886,888,890,892,894,896,898,900,902,904,906,908,910,912,914,916,918,920,922,924,926,928,930,932,934,936,938,940,942,944,946,948,950,952,954,956,958,960,962,964,966,968,970,972,974,976,978,980,982,984,986,988,990,992,994,996,998,1000]},"selected":{"id":"1049"},"selection_policy":{"id":"1048"}},"id":"1033","type":"ColumnDataSource"},{"attributes":{},"id":"1009","type":"LogScale"},{"attributes":{"line_alpha":0.2,"line_color":"tomato","line_width":2,"x":{"field":"wavelength (nm)"},"y":{"field":"molar extinction coefficient for O2Hb (1/cm-M)"}},"id":"1057","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"tomato","line_width":2,"x":{"field":"wavelength (nm)"},"y":{"field":"molar extinction coefficient for O2Hb (1/cm-M)"}},"id":"1056","type":"Line"},{"attributes":{"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375],"molar extinction coefficient for Hb (1/cm-M)":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[376]},"molar extinction coefficient for O2Hb (1/cm-M)":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[376]},"wavelength (nm)":[250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,434,436,438,440,442,444,446,448,450,452,454,456,458,460,462,464,466,468,470,472,474,476,478,480,482,484,486,488,490,492,494,496,498,500,502,504,506,508,510,512,514,516,518,520,522,524,526,528,530,532,534,536,538,540,542,544,546,548,550,552,554,556,558,560,562,564,566,568,570,572,574,576,578,580,582,584,586,588,590,592,594,596,598,600,602,604,606,608,610,612,614,616,618,620,622,624,626,628,630,632,634,636,638,640,642,644,646,648,650,652,654,656,658,660,662,664,666,668,670,672,674,676,678,680,682,684,686,688,690,692,694,696,698,700,702,704,706,708,710,712,714,716,718,720,722,724,726,728,730,732,734,736,738,740,742,744,746,748,750,752,754,756,758,760,762,764,766,768,770,772,774,776,778,780,782,784,786,788,790,792,794,796,798,800,802,804,806,808,810,812,814,816,818,820,822,824,826,828,830,832,834,836,838,840,842,844,846,848,850,852,854,856,858,860,862,864,866,868,870,872,874,876,878,880,882,884,886,888,890,892,894,896,898,900,902,904,906,908,910,912,914,916,918,920,922,924,926,928,930,932,934,936,938,940,942,944,946,948,950,952,954,956,958,960,962,964,966,968,970,972,974,976,978,980,982,984,986,988,990,992,994,996,998,1000]},"selected":{"id":"1071"},"selection_policy":{"id":"1070"}},"id":"1053","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"wavelength (nm)"},"y":{"field":"molar extinction coefficient for Hb (1/cm-M)"}},"id":"1035","type":"Line"},{"attributes":{},"id":"1046","type":"BasicTickFormatter"},{"attributes":{"line_color":"tomato","line_width":2,"x":{"field":"wavelength (nm)"},"y":{"field":"molar extinction coefficient for O2Hb (1/cm-M)"}},"id":"1055","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"1033"},"glyph":{"id":"1035"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1037"},"nonselection_glyph":{"id":"1036"},"view":{"id":"1039"}},"id":"1038","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1011"}],"center":[{"id":"1014"},{"id":"1018"},{"id":"1051"}],"frame_height":200,"frame_width":400,"left":[{"id":"1015"}],"renderers":[{"id":"1038"},{"id":"1058"}],"title":{"id":"1040"},"toolbar":{"id":"1026"},"x_range":{"id":"1003"},"x_scale":{"id":"1007"},"y_range":{"id":"1005"},"y_scale":{"id":"1009"}},"id":"1002","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"data_source":{"id":"1053"},"glyph":{"id":"1055"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1057"},"nonselection_glyph":{"id":"1056"},"view":{"id":"1059"}},"id":"1058","type":"GlyphRenderer"},{"attributes":{"end":1000,"start":250},"id":"1003","type":"Range1d"},{"attributes":{"source":{"id":"1033"}},"id":"1039","type":"CDSView"},{"attributes":{},"id":"1048","type":"UnionRenderers"},{"attributes":{},"id":"1007","type":"LinearScale"},{"attributes":{"tools":[{"id":"1019"},{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"}]},"id":"1026","type":"Toolbar"},{"attributes":{"source":{"id":"1053"}},"id":"1059","type":"CDSView"},{"attributes":{"num_minor_ticks":10},"id":"1016","type":"LogTicker"},{"attributes":{"axis":{"id":"1015"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1018","type":"Grid"},{"attributes":{},"id":"1023","type":"ResetTool"},{"attributes":{},"id":"1070","type":"UnionRenderers"},{"attributes":{"axis_label":"wavelength (nm)","coordinates":null,"formatter":{"id":"1046"},"group":null,"major_label_policy":{"id":"1047"},"ticker":{"id":"1012"}},"id":"1011","type":"LinearAxis"},{"attributes":{"axis":{"id":"1011"},"coordinates":null,"group":null,"ticker":null},"id":"1014","type":"Grid"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","line_width":2,"x":{"field":"wavelength (nm)"},"y":{"field":"molar extinction coefficient for Hb (1/cm-M)"}},"id":"1037","type":"Line"},{"attributes":{"overlay":{"id":"1025"}},"id":"1021","type":"BoxZoomTool"},{"attributes":{},"id":"1012","type":"BasicTicker"},{"attributes":{},"id":"1019","type":"PanTool"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{},"id":"1024","type":"HelpTool"},{"attributes":{},"id":"1044","type":"AllLabels"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1025","type":"BoxAnnotation"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"29e5e4bc-6cbc-46b7-9d18-9148cdc26446","root_ids":["1002"],"roots":{"1002":"fa7ff9d5-019c-46a2-907b-b97cd8606aa1"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
    function(Bokeh) {
        }
      ];
    
      function run_inline_js() {
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();