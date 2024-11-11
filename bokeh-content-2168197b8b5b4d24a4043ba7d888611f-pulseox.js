(function() {
  const fn = function() {
    'use strict';
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("e218a344-fb06-412c-ba38-95baaacb63e3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e218a344-fb06-412c-ba38-95baaacb63e3' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.4.1.min.js"];
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
                  const docs_json = '{"34d81a46-8b54-412f-963d-691866e07d78":{"version":"3.4.1","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1001","attributes":{"x_range":{"type":"object","name":"Range1d","id":"p1010","attributes":{"start":250,"end":1000}},"y_range":{"type":"object","name":"DataRange1d","id":"p1003"},"x_scale":{"type":"object","name":"LinearScale","id":"p1011"},"y_scale":{"type":"object","name":"LogScale","id":"p1012"},"title":{"type":"object","name":"Title","id":"p1008"},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1043","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1034","attributes":{"selected":{"type":"object","name":"Selection","id":"p1035","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1036"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[376],"dtype":"int32","order":"little"}],["wavelength (nm)",{"type":"ndarray","array":{"type":"bytes","data":"+gAAAPwAAAD+AAAAAAEAAAIBAAAEAQAABgEAAAgBAAAKAQAADAEAAA4BAAAQAQAAEgEAABQBAAAWAQAAGAEAABoBAAAcAQAAHgEAACABAAAiAQAAJAEAACYBAAAoAQAAKgEAACwBAAAuAQAAMAEAADIBAAA0AQAANgEAADgBAAA6AQAAPAEAAD4BAABAAQAAQgEAAEQBAABGAQAASAEAAEoBAABMAQAATgEAAFABAABSAQAAVAEAAFYBAABYAQAAWgEAAFwBAABeAQAAYAEAAGIBAABkAQAAZgEAAGgBAABqAQAAbAEAAG4BAABwAQAAcgEAAHQBAAB2AQAAeAEAAHoBAAB8AQAAfgEAAIABAACCAQAAhAEAAIYBAACIAQAAigEAAIwBAACOAQAAkAEAAJIBAACUAQAAlgEAAJgBAACaAQAAnAEAAJ4BAACgAQAAogEAAKQBAACmAQAAqAEAAKoBAACsAQAArgEAALABAACyAQAAtAEAALYBAAC4AQAAugEAALwBAAC+AQAAwAEAAMIBAADEAQAAxgEAAMgBAADKAQAAzAEAAM4BAADQAQAA0gEAANQBAADWAQAA2AEAANoBAADcAQAA3gEAAOABAADiAQAA5AEAAOYBAADoAQAA6gEAAOwBAADuAQAA8AEAAPIBAAD0AQAA9gEAAPgBAAD6AQAA/AEAAP4BAAAAAgAAAgIAAAQCAAAGAgAACAIAAAoCAAAMAgAADgIAABACAAASAgAAFAIAABYCAAAYAgAAGgIAABwCAAAeAgAAIAIAACICAAAkAgAAJgIAACgCAAAqAgAALAIAAC4CAAAwAgAAMgIAADQCAAA2AgAAOAIAADoCAAA8AgAAPgIAAEACAABCAgAARAIAAEYCAABIAgAASgIAAEwCAABOAgAAUAIAAFICAABUAgAAVgIAAFgCAABaAgAAXAIAAF4CAABgAgAAYgIAAGQCAABmAgAAaAIAAGoCAABsAgAAbgIAAHACAAByAgAAdAIAAHYCAAB4AgAAegIAAHwCAAB+AgAAgAIAAIICAACEAgAAhgIAAIgCAACKAgAAjAIAAI4CAACQAgAAkgIAAJQCAACWAgAAmAIAAJoCAACcAgAAngIAAKACAACiAgAApAIAAKYCAACoAgAAqgIAAKwCAACuAgAAsAIAALICAAC0AgAAtgIAALgCAAC6AgAAvAIAAL4CAADAAgAAwgIAAMQCAADGAgAAyAIAAMoCAADMAgAAzgIAANACAADSAgAA1AIAANYCAADYAgAA2gIAANwCAADeAgAA4AIAAOICAADkAgAA5gIAAOgCAADqAgAA7AIAAO4CAADwAgAA8gIAAPQCAAD2AgAA+AIAAPoCAAD8AgAA/gIAAAADAAACAwAABAMAAAYDAAAIAwAACgMAAAwDAAAOAwAAEAMAABIDAAAUAwAAFgMAABgDAAAaAwAAHAMAAB4DAAAgAwAAIgMAACQDAAAmAwAAKAMAACoDAAAsAwAALgMAADADAAAyAwAANAMAADYDAAA4AwAAOgMAADwDAAA+AwAAQAMAAEIDAABEAwAARgMAAEgDAABKAwAATAMAAE4DAABQAwAAUgMAAFQDAABWAwAAWAMAAFoDAABcAwAAXgMAAGADAABiAwAAZAMAAGYDAABoAwAAagMAAGwDAABuAwAAcAMAAHIDAAB0AwAAdgMAAHgDAAB6AwAAfAMAAH4DAACAAwAAggMAAIQDAACGAwAAiAMAAIoDAACMAwAAjgMAAJADAACSAwAAlAMAAJYDAACYAwAAmgMAAJwDAACeAwAAoAMAAKIDAACkAwAApgMAAKgDAACqAwAArAMAAK4DAACwAwAAsgMAALQDAAC2AwAAuAMAALoDAAC8AwAAvgMAAMADAADCAwAAxAMAAMYDAADIAwAAygMAAMwDAADOAwAA0AMAANIDAADUAwAA1gMAANgDAADaAwAA3AMAAN4DAADgAwAA4gMAAOQDAADmAwAA6AMAAA=="},"shape":[376],"dtype":"int32","order":"little"}],["molar extinction coefficient for O2Hb (1/cm-M)",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[376],"dtype":"float64","order":"little"}],["molar extinction coefficient for Hb (1/cm-M)",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[376],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1044","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1045"}}},"glyph":{"type":"object","name":"Line","id":"p1040","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for Hb (1/cm-M)"},"line_color":"#1f77b4","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1041","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for Hb (1/cm-M)"},"line_color":"#1f77b4","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1042","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for Hb (1/cm-M)"},"line_color":"#1f77b4","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p1057","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1048","attributes":{"selected":{"type":"object","name":"Selection","id":"p1049","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1050"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAAAARAAAAEgAAABMAAAAUAAAAFQAAABYAAAAXAAAAGAAAABkAAAAaAAAAGwAAABwAAAAdAAAAHgAAAB8AAAAgAAAAIQAAACIAAAAjAAAAJAAAACUAAAAmAAAAJwAAACgAAAApAAAAKgAAACsAAAAsAAAALQAAAC4AAAAvAAAAMAAAADEAAAAyAAAAMwAAADQAAAA1AAAANgAAADcAAAA4AAAAOQAAADoAAAA7AAAAPAAAAD0AAAA+AAAAPwAAAEAAAABBAAAAQgAAAEMAAABEAAAARQAAAEYAAABHAAAASAAAAEkAAABKAAAASwAAAEwAAABNAAAATgAAAE8AAABQAAAAUQAAAFIAAABTAAAAVAAAAFUAAABWAAAAVwAAAFgAAABZAAAAWgAAAFsAAABcAAAAXQAAAF4AAABfAAAAYAAAAGEAAABiAAAAYwAAAGQAAABlAAAAZgAAAGcAAABoAAAAaQAAAGoAAABrAAAAbAAAAG0AAABuAAAAbwAAAHAAAABxAAAAcgAAAHMAAAB0AAAAdQAAAHYAAAB3AAAAeAAAAHkAAAB6AAAAewAAAHwAAAB9AAAAfgAAAH8AAACAAAAAgQAAAIIAAACDAAAAhAAAAIUAAACGAAAAhwAAAIgAAACJAAAAigAAAIsAAACMAAAAjQAAAI4AAACPAAAAkAAAAJEAAACSAAAAkwAAAJQAAACVAAAAlgAAAJcAAACYAAAAmQAAAJoAAACbAAAAnAAAAJ0AAACeAAAAnwAAAKAAAAChAAAAogAAAKMAAACkAAAApQAAAKYAAACnAAAAqAAAAKkAAACqAAAAqwAAAKwAAACtAAAArgAAAK8AAACwAAAAsQAAALIAAACzAAAAtAAAALUAAAC2AAAAtwAAALgAAAC5AAAAugAAALsAAAC8AAAAvQAAAL4AAAC/AAAAwAAAAMEAAADCAAAAwwAAAMQAAADFAAAAxgAAAMcAAADIAAAAyQAAAMoAAADLAAAAzAAAAM0AAADOAAAAzwAAANAAAADRAAAA0gAAANMAAADUAAAA1QAAANYAAADXAAAA2AAAANkAAADaAAAA2wAAANwAAADdAAAA3gAAAN8AAADgAAAA4QAAAOIAAADjAAAA5AAAAOUAAADmAAAA5wAAAOgAAADpAAAA6gAAAOsAAADsAAAA7QAAAO4AAADvAAAA8AAAAPEAAADyAAAA8wAAAPQAAAD1AAAA9gAAAPcAAAD4AAAA+QAAAPoAAAD7AAAA/AAAAP0AAAD+AAAA/wAAAAABAAABAQAAAgEAAAMBAAAEAQAABQEAAAYBAAAHAQAACAEAAAkBAAAKAQAACwEAAAwBAAANAQAADgEAAA8BAAAQAQAAEQEAABIBAAATAQAAFAEAABUBAAAWAQAAFwEAABgBAAAZAQAAGgEAABsBAAAcAQAAHQEAAB4BAAAfAQAAIAEAACEBAAAiAQAAIwEAACQBAAAlAQAAJgEAACcBAAAoAQAAKQEAACoBAAArAQAALAEAAC0BAAAuAQAALwEAADABAAAxAQAAMgEAADMBAAA0AQAANQEAADYBAAA3AQAAOAEAADkBAAA6AQAAOwEAADwBAAA9AQAAPgEAAD8BAABAAQAAQQEAAEIBAABDAQAARAEAAEUBAABGAQAARwEAAEgBAABJAQAASgEAAEsBAABMAQAATQEAAE4BAABPAQAAUAEAAFEBAABSAQAAUwEAAFQBAABVAQAAVgEAAFcBAABYAQAAWQEAAFoBAABbAQAAXAEAAF0BAABeAQAAXwEAAGABAABhAQAAYgEAAGMBAABkAQAAZQEAAGYBAABnAQAAaAEAAGkBAABqAQAAawEAAGwBAABtAQAAbgEAAG8BAABwAQAAcQEAAHIBAABzAQAAdAEAAHUBAAB2AQAAdwEAAA=="},"shape":[376],"dtype":"int32","order":"little"}],["wavelength (nm)",{"type":"ndarray","array":{"type":"bytes","data":"+gAAAPwAAAD+AAAAAAEAAAIBAAAEAQAABgEAAAgBAAAKAQAADAEAAA4BAAAQAQAAEgEAABQBAAAWAQAAGAEAABoBAAAcAQAAHgEAACABAAAiAQAAJAEAACYBAAAoAQAAKgEAACwBAAAuAQAAMAEAADIBAAA0AQAANgEAADgBAAA6AQAAPAEAAD4BAABAAQAAQgEAAEQBAABGAQAASAEAAEoBAABMAQAATgEAAFABAABSAQAAVAEAAFYBAABYAQAAWgEAAFwBAABeAQAAYAEAAGIBAABkAQAAZgEAAGgBAABqAQAAbAEAAG4BAABwAQAAcgEAAHQBAAB2AQAAeAEAAHoBAAB8AQAAfgEAAIABAACCAQAAhAEAAIYBAACIAQAAigEAAIwBAACOAQAAkAEAAJIBAACUAQAAlgEAAJgBAACaAQAAnAEAAJ4BAACgAQAAogEAAKQBAACmAQAAqAEAAKoBAACsAQAArgEAALABAACyAQAAtAEAALYBAAC4AQAAugEAALwBAAC+AQAAwAEAAMIBAADEAQAAxgEAAMgBAADKAQAAzAEAAM4BAADQAQAA0gEAANQBAADWAQAA2AEAANoBAADcAQAA3gEAAOABAADiAQAA5AEAAOYBAADoAQAA6gEAAOwBAADuAQAA8AEAAPIBAAD0AQAA9gEAAPgBAAD6AQAA/AEAAP4BAAAAAgAAAgIAAAQCAAAGAgAACAIAAAoCAAAMAgAADgIAABACAAASAgAAFAIAABYCAAAYAgAAGgIAABwCAAAeAgAAIAIAACICAAAkAgAAJgIAACgCAAAqAgAALAIAAC4CAAAwAgAAMgIAADQCAAA2AgAAOAIAADoCAAA8AgAAPgIAAEACAABCAgAARAIAAEYCAABIAgAASgIAAEwCAABOAgAAUAIAAFICAABUAgAAVgIAAFgCAABaAgAAXAIAAF4CAABgAgAAYgIAAGQCAABmAgAAaAIAAGoCAABsAgAAbgIAAHACAAByAgAAdAIAAHYCAAB4AgAAegIAAHwCAAB+AgAAgAIAAIICAACEAgAAhgIAAIgCAACKAgAAjAIAAI4CAACQAgAAkgIAAJQCAACWAgAAmAIAAJoCAACcAgAAngIAAKACAACiAgAApAIAAKYCAACoAgAAqgIAAKwCAACuAgAAsAIAALICAAC0AgAAtgIAALgCAAC6AgAAvAIAAL4CAADAAgAAwgIAAMQCAADGAgAAyAIAAMoCAADMAgAAzgIAANACAADSAgAA1AIAANYCAADYAgAA2gIAANwCAADeAgAA4AIAAOICAADkAgAA5gIAAOgCAADqAgAA7AIAAO4CAADwAgAA8gIAAPQCAAD2AgAA+AIAAPoCAAD8AgAA/gIAAAADAAACAwAABAMAAAYDAAAIAwAACgMAAAwDAAAOAwAAEAMAABIDAAAUAwAAFgMAABgDAAAaAwAAHAMAAB4DAAAgAwAAIgMAACQDAAAmAwAAKAMAACoDAAAsAwAALgMAADADAAAyAwAANAMAADYDAAA4AwAAOgMAADwDAAA+AwAAQAMAAEIDAABEAwAARgMAAEgDAABKAwAATAMAAE4DAABQAwAAUgMAAFQDAABWAwAAWAMAAFoDAABcAwAAXgMAAGADAABiAwAAZAMAAGYDAABoAwAAagMAAGwDAABuAwAAcAMAAHIDAAB0AwAAdgMAAHgDAAB6AwAAfAMAAH4DAACAAwAAggMAAIQDAACGAwAAiAMAAIoDAACMAwAAjgMAAJADAACSAwAAlAMAAJYDAACYAwAAmgMAAJwDAACeAwAAoAMAAKIDAACkAwAApgMAAKgDAACqAwAArAMAAK4DAACwAwAAsgMAALQDAAC2AwAAuAMAALoDAAC8AwAAvgMAAMADAADCAwAAxAMAAMYDAADIAwAAygMAAMwDAADOAwAA0AMAANIDAADUAwAA1gMAANgDAADaAwAA3AMAAN4DAADgAwAA4gMAAOQDAADmAwAA6AMAAA=="},"shape":[376],"dtype":"int32","order":"little"}],["molar extinction coefficient for O2Hb (1/cm-M)",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[376],"dtype":"float64","order":"little"}],["molar extinction coefficient for Hb (1/cm-M)",{"type":"ndarray","array":{"type":"bytes","data":"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"},"shape":[376],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1058","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1059"}}},"glyph":{"type":"object","name":"Line","id":"p1054","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for O2Hb (1/cm-M)"},"line_color":"tomato","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1055","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for O2Hb (1/cm-M)"},"line_color":"tomato","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1056","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for O2Hb (1/cm-M)"},"line_color":"tomato","line_alpha":0.2,"line_width":2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1009","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1023"},{"type":"object","name":"WheelZoomTool","id":"p1024","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1025","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1026","attributes":{"syncable":false,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"SaveTool","id":"p1031"},{"type":"object","name":"ResetTool","id":"p1032"},{"type":"object","name":"HelpTool","id":"p1033"}]}},"left":[{"type":"object","name":"LogAxis","id":"p1018","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p1019","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p1020"},"axis_label":"extinction coefficient (1/cm-M)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1021"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1013","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1014","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1015"},"axis_label":"wavelength (nm)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1016"}}}],"center":[{"type":"object","name":"Grid","id":"p1017","attributes":{"axis":{"id":"p1013"}}},{"type":"object","name":"Grid","id":"p1022","attributes":{"dimension":1,"axis":{"id":"p1018"}}},{"type":"object","name":"Legend","id":"p1046","attributes":{"items":[{"type":"object","name":"LegendItem","id":"p1047","attributes":{"label":{"type":"value","value":"Hb"},"renderers":[{"id":"p1043"}]}},{"type":"object","name":"LegendItem","id":"p1060","attributes":{"label":{"type":"value","value":"O\\u2082Hb"},"renderers":[{"id":"p1057"}]}}]}}],"frame_width":400,"frame_height":200}}]}}';
                  const render_items = [{"docid":"34d81a46-8b54-412f-963d-691866e07d78","roots":{"p1001":"e218a344-fb06-412c-ba38-95baaacb63e3"},"root_ids":["p1001"]}];
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