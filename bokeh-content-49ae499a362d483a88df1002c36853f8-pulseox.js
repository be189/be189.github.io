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
    
    
    const element = document.getElementById("ad1b2990-87dc-42ab-9f27-78b87f01dba8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ad1b2990-87dc-42ab-9f27-78b87f01dba8' but no matching script tag was found.")
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
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.8.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.8.0.min.js"];
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
                  const docs_json = '{"09259e6d-8e07-45cc-ae04-ff9fbad8839d":{"version":"3.8.0","title":"Bokeh Application","config":{"type":"object","name":"DocumentConfig","id":"p1006","attributes":{"notifications":{"type":"object","name":"Notifications","id":"p1007"}}},"roots":[{"type":"object","name":"Figure","id":"p1010","attributes":{"x_range":{"type":"object","name":"Range1d","id":"p1019","attributes":{"start":250,"end":1000}},"y_range":{"type":"object","name":"DataRange1d","id":"p1012"},"x_scale":{"type":"object","name":"LinearScale","id":"p1020"},"y_scale":{"type":"object","name":"LogScale","id":"p1021"},"title":{"type":"object","name":"Title","id":"p1017"},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1054","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1045","attributes":{"selected":{"type":"object","name":"Selection","id":"p1046","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1047"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yXTVVcWBgAA0A8LxVYwMDDAwk4ExU4MsFAMbMVCVGSbOms9Xdix0M1Y2LnZsTQXuunS2HRprOzpPceH+xNuIBAIBJGN7OQgJ7kIJjd5CCEv+chPAQpSiMIUoSihhFGM4pSgJOGUojRlKEsE5ShPBSoSSRSVqEwVqlKNaKpTg5rUojZ1qEs96tOAhjQihsbEEkcTmhJPM5rTgpa0ojVtaEs72tOBjiTQic50oSuJJNGN7vSgJ71Ipjd9SKEv/ejPAFIZyCAGM4ShDGM4IxhJGqMYzRjGMo50xpPBBCYyiUwmk8UjPMpjTGEq03ic6cxgJrOYzRM8yVM8zTM8y3M8zxzm8gIv8hIvM4/5LGAhi1jMEpayjOW8wqu8xuusYCVv8CarWM0a1vIWb/MO77KO9WxgI5vYzBa2so3t7GAn7/E+u9jNHvayj/0c4CCHOMwHfMhHfMwnfMoRjnKM45zgJJ/xOV/wJac4zVd8zRnO8g3f8h3f8wM/co7zXOAiP/Ezl7jML/zKb/zOH/zJFa5yjev8xd/8w7/8xw1ucovb3OEu9/if+4GH+YPIRnZykJNcBJObPISQl3zkpwAFKURhilCUUMIoRnFKUJJwSlGaMpQlgnKUpwIViSSKSlSmClWpRjTVqUFNalGbOtSlHvVpQEMaEUNjYomjCU2JpxnNaUFLWtGaNrSlHe3pQEcS6ERnutCVRJLoRnd60JNeJNObPqTQl370ZwCpDGQQgxnCUIYxnBGMJI1RjGYMYxlHOuPJYAITmUQmk8niAZZAZj7gBQAA"},"shape":[376],"dtype":"int32","order":"little"}],["wavelength (nm)",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3RgUYdAABA0bctSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSTIzkyTZ4Z4vuJ+BQOCLbwI/AoGfBBFMCKGEEU4EkUQRTQyxxBFPAokkkUwKqaSRTgaZZJFNDrnkkU8BhRRRTAmllFFOBZVUUU0NtdRRTwONNNFMC6200U4HnXTRTQ+99NHPAIMMMcwIo4wxzgSTTDHNDLPMMc8CiyyxzAqrrLHOBptssc0Ou+yxzwGHHHHMCaeccc4Fl1xxzQ233HHPA4888cwLr7zxmz/85R/vfPDJF98EfoogggkhlDDCiSCSKKKJIZY44kkgkSSSSSGVNNLJIJMssskhlzzyKaCQIoopoZQyyqmgkiqqqaGWOuppoJEmmmmhlTba6aCTLrrpoZc++hlgkCGGGWGUMcaZYJIppplhljnmWWCRJZZZYZU11tlgky222WGXPfY54JAjjjnhlDPOueCSK6654ZY77nngkSeeeeGVN37zh7/8450PPvnim8Av/wkimBBCCSOcCCKJIpoYYokjngQSSSKZFFJJI50MMskimxxyySOfAgopopgSSimjnAoqqaKaGmqpo54GGmmimRZaaaOdDjrpopseeumjnwEGGWKYEUYZY5wJJplimhlmmWOeBRZZYpkVVlljnQ022WKbHXbZY58DDjnimBNOOeOcCy654pobbrnjngceeeKZF/4DCIdpB+AFAAA="},"shape":[376],"dtype":"int32","order":"little"}],["molar extinction coefficient for O2Hb (1/cm-M)",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/12Ua0yVdRzHH8xLJnMQaSFKh7kop7kazaYv7OmFZZO1qEayQfKK0XKrA8pNpEfuxu3AyeR4YWeunG656diYNrOzUcwXx2YD5GoerkkxgjAVUQyfz/fI8Lz57Hf7/n7/3///HMOY/d2cMh/B+BX6tt+DV6DhnrZpfXYf/ycP4K4Z/J8/tGluNd5+RMcxaPmgOSS7BaZ+A40o+TdSb3VL10kfMz/Yn7msl+/C4v+Ip0zC9ydg1Dj518egKWaI58R/xublW13QPIOO4fwXbkHfWHGL+ANxlP7W4G342x38J5nP2KZ5vVOq014TOY/p1X4D0GrQOVPEReL3upcE0Y++2U8/K0YsYQ7fmPZyRPOlQKNMdjJ55pY78/dpar6fNU+17rmB+w0U6F6fWwDzFnKP65bYDPQvhdtCbXo/XI79Vhj3nBRu82zHs9x3wwqbvpZIdApWU1cWTd3DF/F3QyMbehPW0D95FXq3V/K+hiOIv0sf31L6m2ufwb+Reb2b9B5X8s7MZTr3Se2lX+/pBPdvfqr39IPezaVRGPsXXH8Tvv4nPD8EXx0002Z/w18M2Ixd1W8e8Xg8XYv7sN8MkNf3h22npV8342Z/jRt62X94j3nF7/fHh3QTj+yy6yMPd2I/30n+0Q78MR3YFdeIj7Xbfk9iO32a2+x4nLON/DVt9BlvhXmteietdl+/q5X6M9jxk63oFrbBaemfoL+nrYu8Q73oX7zBXuv6iBcO0Gc3+7FGhum3Q/szR/DPiIu03y9lJ5FnXVZdyBBz7GK/w1Pq0669JgaYp4s5jJ4b9vkzawLk/96H3nHmMn7UXAvUZwn9rei/iV/QPNma96UhW29yJMB573F+f7z25PCz74xf8M/8xHxxTcTrz6FjnIZXv4NeL/m3jpJ3yYO//DD1CYfQjXLj31kLn3ZpX1XS+xq+Vo7e6lL0vi3GH1aE3sED6D1lkTe6n7yWfM2zj7zcPPI+yiWeloPdmK1zZOv8WeR79hKf3IOdJE5lSjcTnXcy1TdDfjFVdGRQ1+VU3IluplO68ptO9GKd6IXO2cF4MD9YH9SzGXA+7jev/+w8wfmC8wbnD56HvezB7xPNvbJFM0t2lnSyqWvV/lJz1CdH+87F3pBH/uJ9mlP3cSGfevd+5ReQv/sr3buF/7RF3toD+F3iuPhBITxb+Phd2P2yiqgbKFJeMfoXi9FdV6L3U4K/t0R9S6kr0nu7Vqq9lumcolcMiI5ynacc3c0H8VtiQHToXaeKPtGo0J5Fq0J7qtAeK9W3kj4RVcxXWqVzVulc1fqOqok3VVN/v5r4ezXYx2q0xxr8MS50dug7TBdzxHKxXjyl/GYX9SPyh9XSd1MtfZJrdb+yK/W9e2v1/Sm/RXaP8ieC/wt1xKPrqH+jDv92caeYLuaI5WK9eEo8L14WO6U7qD5j8t+tY44QN3MtEyPc+CP1/+Vw6zt1656Ut155Mcp7QXnLlbdQ9kwd+dNzffn/VP8JcUT+XuVdVV2z5m564pz1T+whZ25Pts7Hqtsq/yvqEx6cR/sPiL65e+N9iqm6r82639Bgnd5Ho0vvVO8kyaU96b0YLvN/wDi8N8ALAAA="},"shape":[376],"dtype":"float64","order":"little"}],["molar extinction coefficient for Hb (1/cm-M)",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/22VeUxUVxTGpy4RcUMluMQq2mq0Ji5Vo02ludoSbauGYttotLUaNbZoBFdAiyP65g0u1QEEFJRNFBCpSCvQGjJF4wrIJkipCO64FQuo4NLOvN9Jmi7vny/nnu985zvnXgaTyfFZnivT/+EFQY8XBpoXg/ZswY4vyc8FzRkSm14RdwNNZyQfIvmpEku9PQc95SJ95tBXDW8j3/4Z8YInxE3NYNkfnDc3orv+d+ofPQTzHoDn74NDJL4OmpY8Au9K3VF0zIseoz8GffuAJtCFvuZboIprIR6FL7Nd/Pk+RfcLfNs3t5LfwDyqn8yXI/gZc5teyV6LZS/xskf/P4k9TVMMng9YFwh+FSuYK3gZVE3C93gN/iQwYR5oDgFVosQ//RPrhraDfx60B7U30HNDB7C1I/mFneib4YLe0870ndoFnYqu1D/sbqDPFjcDG8N6Eu/sBX9/bwPdGtzRn+CB3rY+xHV90Zvcn/NhA9Bd9jo+bAMNPDbYk/Pqf2EWWBcHz/xOP+pG0mf3FPyoFvyq4cxnn8j9maJ4LyqtXo1zfNltV9W+vY5vWrURj6uqVEWFjm9pBfGlMvI5pWqp80so4fy7S+jdKSJeXET+ZiH8hELyfhK7Ce9EEfrzisl3E52PS6jvQZ/b5aUGb0ZMGfzl5byjBeLL9zK8DyrRn1gF/60r6IyUeWb9in5ADToRv8E/cRVedS3oWsc+LtbB31nPnmZdN+p29LjBeangzpvgh7fw1eE2sR00h94Bve+CLg3kk0Cz+z3iZYLxoDlRcJXg+4IWqcsSvSrRfyB920nfEeLnS/yZI24Yc60+d524t8zjV88eTjH3asf8xn7m1Brn/dJq4F+7wl66VNLn83LqUkvA9EL2HHuB+u3nON94hnjdaTCggPOzdnR88zk/dpL6Hj+TX5FHPDaXfK8c+M0/Ej/5ARwgODUbDD7OPbZloROUhU7rMfKBgo3fq/m7ClqGt2WSfyNTuVYl+3vNOKrqg90zp63NULkDtfufHDiinLT5Z9PRbUxTjtPcgRPS1CnH8S5rqvJ1EmsOwxt9GP3QQ+hVpqjpTsERKejqB8k3J6O/KFkd9PdyrbqURL1XkhrhNJaeqBzs+uC+ifJ/LIE+nQSnxON/zQH6HNqP3pU4/HWOo258rHKmXRfsoy5sr3LKuufHEPeMYU9LopWXUygvCp/dotBZuEc9cICWE6kCnAT3SPXEMXZBQIQa5CQUh7O/9uHMNcn2HzT6T7TRb6wNvZU29jcsnP5Xw5nnXATzV0SCzXvwczQanT7ie+HfaMzzdgy+bNHsoziKc1eZx1vm2CT+8yLkPYXDHyVz+NnIF+1mn2N2Ew/dpTY4L+TeTt5B8Q6wcjtYuw28HcZ99wmDv8oqejr7ek9njy46fcsszB1n4XyZRXgW9uduYU/3NPJ2jbkyNfIZGu/niAYvXWOfaRr+UzXe1WGpO6RxrylSl6zhM0nqEjX8xwv/gCb+RH+f+IjRuI9o0dujsd9k4R0XvV/ER4n4uKaxp0cac3a30G+0zO9joS5A5g63oJsteymWfIPsp4NO/SCdeLLOu5ir42+9jv9InXeQJfdQrOPrro7+cx1f3a3wBlv5+xtvxfc0K+9jtpU6H7nXmVb295GcT7eyD285H2JlLpOVvrVy76E6+l3FZ7RF+sq8jvs09CfI/g9ulXezFf0VW5izNBRf74bK79Rm7nX2ZvzUmemz3Az/8SZ0W0Lk3r6V37ON4OVg+M1B4JtB6tnsGymxnwaq8+vy4/uvXK9Kh9S0hgSvUxcTvU80aWtV+cxFbnNsa5Tj9JuTcauVg33aM3WV3FuAan5ZEdiQ708+cqXMt0K9SHtcNrPAT3VtN1L3qP5a/QXTFiqjwAsAAA=="},"shape":[376],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1055","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1056"}}},"glyph":{"type":"object","name":"Line","id":"p1051","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for Hb (1/cm-M)"},"line_color":"#1f77b4","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1052","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for Hb (1/cm-M)"},"line_color":"#1f77b4","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1053","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for Hb (1/cm-M)"},"line_color":"#1f77b4","line_alpha":0.2,"line_width":2}}}},{"type":"object","name":"GlyphRenderer","id":"p1068","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1059","attributes":{"selected":{"type":"object","name":"Selection","id":"p1060","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1061"},"data":{"type":"map","entries":[["index",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/yXTVVcWBgAA0A8LxVYwMDDAwk4ExU4MsFAMbMVCVGSbOms9Xdix0M1Y2LnZsTQXuunS2HRprOzpPceH+xNuIBAIBJGN7OQgJ7kIJjd5CCEv+chPAQpSiMIUoSihhFGM4pSgJOGUojRlKEsE5ShPBSoSSRSVqEwVqlKNaKpTg5rUojZ1qEs96tOAhjQihsbEEkcTmhJPM5rTgpa0ojVtaEs72tOBjiTQic50oSuJJNGN7vSgJ71Ipjd9SKEv/ejPAFIZyCAGM4ShDGM4IxhJGqMYzRjGMo50xpPBBCYyiUwmk8UjPMpjTGEq03ic6cxgJrOYzRM8yVM8zTM8y3M8zxzm8gIv8hIvM4/5LGAhi1jMEpayjOW8wqu8xuusYCVv8CarWM0a1vIWb/MO77KO9WxgI5vYzBa2so3t7GAn7/E+u9jNHvayj/0c4CCHOMwHfMhHfMwnfMoRjnKM45zgJJ/xOV/wJac4zVd8zRnO8g3f8h3f8wM/co7zXOAiP/Ezl7jML/zKb/zOH/zJFa5yjev8xd/8w7/8xw1ucovb3OEu9/if+4GH+YPIRnZykJNcBJObPISQl3zkpwAFKURhilCUUMIoRnFKUJJwSlGaMpQlgnKUpwIViSSKSlSmClWpRjTVqUFNalGbOtSlHvVpQEMaEUNjYomjCU2JpxnNaUFLWtGaNrSlHe3pQEcS6ERnutCVRJLoRnd60JNeJNObPqTQl370ZwCpDGQQgxnCUIYxnBGMJI1RjGYMYxlHOuPJYAITmUQmk8niAZZAZj7gBQAA"},"shape":[376],"dtype":"int32","order":"little"}],["wavelength (nm)",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/w3RgUYdAABA0bctSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSTIzkyTZ4Z4vuJ+BQOCLbwI/AoGfBBFMCKGEEU4EkUQRTQyxxBFPAokkkUwKqaSRTgaZZJFNDrnkkU8BhRRRTAmllFFOBZVUUU0NtdRRTwONNNFMC6200U4HnXTRTQ+99NHPAIMMMcwIo4wxzgSTTDHNDLPMMc8CiyyxzAqrrLHOBptssc0Ou+yxzwGHHHHMCaeccc4Fl1xxzQ233HHPA4888cwLr7zxmz/85R/vfPDJF98EfoogggkhlDDCiSCSKKKJIZY44kkgkSSSSSGVNNLJIJMssskhlzzyKaCQIoopoZQyyqmgkiqqqaGWOuppoJEmmmmhlTba6aCTLrrpoZc++hlgkCGGGWGUMcaZYJIppplhljnmWWCRJZZZYZU11tlgky222WGXPfY54JAjjjnhlDPOueCSK6654ZY77nngkSeeeeGVN37zh7/8450PPvnim8Av/wkimBBCCSOcCCKJIpoYYokjngQSSSKZFFJJI50MMskimxxyySOfAgopopgSSimjnAoqqaKaGmqpo54GGmmimRZaaaOdDjrpopseeumjnwEGGWKYEUYZY5wJJplimhlmmWOeBRZZYpkVVlljnQ022WKbHXbZY58DDjnimBNOOeOcCy654pobbrnjngceeeKZF/4DCIdpB+AFAAA="},"shape":[376],"dtype":"int32","order":"little"}],["molar extinction coefficient for O2Hb (1/cm-M)",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/12Ua0yVdRzHH8xLJnMQaSFKh7kop7kazaYv7OmFZZO1qEayQfKK0XKrA8pNpEfuxu3AyeR4YWeunG656diYNrOzUcwXx2YD5GoerkkxgjAVUQyfz/fI8Lz57Hf7/n7/3///HMOY/d2cMh/B+BX6tt+DV6DhnrZpfXYf/ycP4K4Z/J8/tGluNd5+RMcxaPmgOSS7BaZ+A40o+TdSb3VL10kfMz/Yn7msl+/C4v+Ip0zC9ydg1Dj518egKWaI58R/xublW13QPIOO4fwXbkHfWHGL+ANxlP7W4G342x38J5nP2KZ5vVOq014TOY/p1X4D0GrQOVPEReL3upcE0Y++2U8/K0YsYQ7fmPZyRPOlQKNMdjJ55pY78/dpar6fNU+17rmB+w0U6F6fWwDzFnKP65bYDPQvhdtCbXo/XI79Vhj3nBRu82zHs9x3wwqbvpZIdApWU1cWTd3DF/F3QyMbehPW0D95FXq3V/K+hiOIv0sf31L6m2ufwb+Reb2b9B5X8s7MZTr3Se2lX+/pBPdvfqr39IPezaVRGPsXXH8Tvv4nPD8EXx0002Z/w18M2Ixd1W8e8Xg8XYv7sN8MkNf3h22npV8342Z/jRt62X94j3nF7/fHh3QTj+yy6yMPd2I/30n+0Q78MR3YFdeIj7Xbfk9iO32a2+x4nLON/DVt9BlvhXmteietdl+/q5X6M9jxk63oFrbBaemfoL+nrYu8Q73oX7zBXuv6iBcO0Gc3+7FGhum3Q/szR/DPiIu03y9lJ5FnXVZdyBBz7GK/w1Pq0669JgaYp4s5jJ4b9vkzawLk/96H3nHmMn7UXAvUZwn9rei/iV/QPNma96UhW29yJMB573F+f7z25PCz74xf8M/8xHxxTcTrz6FjnIZXv4NeL/m3jpJ3yYO//DD1CYfQjXLj31kLn3ZpX1XS+xq+Vo7e6lL0vi3GH1aE3sED6D1lkTe6n7yWfM2zj7zcPPI+yiWeloPdmK1zZOv8WeR79hKf3IOdJE5lSjcTnXcy1TdDfjFVdGRQ1+VU3IluplO68ptO9GKd6IXO2cF4MD9YH9SzGXA+7jev/+w8wfmC8wbnD56HvezB7xPNvbJFM0t2lnSyqWvV/lJz1CdH+87F3pBH/uJ9mlP3cSGfevd+5ReQv/sr3buF/7RF3toD+F3iuPhBITxb+Phd2P2yiqgbKFJeMfoXi9FdV6L3U4K/t0R9S6kr0nu7Vqq9lumcolcMiI5ynacc3c0H8VtiQHToXaeKPtGo0J5Fq0J7qtAeK9W3kj4RVcxXWqVzVulc1fqOqok3VVN/v5r4ezXYx2q0xxr8MS50dug7TBdzxHKxXjyl/GYX9SPyh9XSd1MtfZJrdb+yK/W9e2v1/Sm/RXaP8ieC/wt1xKPrqH+jDv92caeYLuaI5WK9eEo8L14WO6U7qD5j8t+tY44QN3MtEyPc+CP1/+Vw6zt1656Ut155Mcp7QXnLlbdQ9kwd+dNzffn/VP8JcUT+XuVdVV2z5m564pz1T+whZ25Pts7Hqtsq/yvqEx6cR/sPiL65e+N9iqm6r82639Bgnd5Ho0vvVO8kyaU96b0YLvN/wDi8N8ALAAA="},"shape":[376],"dtype":"float64","order":"little"}],["molar extinction coefficient for Hb (1/cm-M)",{"type":"ndarray","array":{"type":"bytes","data":"H4sIAAEAAAAC/22VeUxUVxTGpy4RcUMluMQq2mq0Ji5Vo02ludoSbauGYttotLUaNbZoBFdAiyP65g0u1QEEFJRNFBCpSCvQGjJF4wrIJkipCO64FQuo4NLOvN9Jmi7vny/nnu985zvnXgaTyfFZnivT/+EFQY8XBpoXg/ZswY4vyc8FzRkSm14RdwNNZyQfIvmpEku9PQc95SJ95tBXDW8j3/4Z8YInxE3NYNkfnDc3orv+d+ofPQTzHoDn74NDJL4OmpY8Au9K3VF0zIseoz8GffuAJtCFvuZboIprIR6FL7Nd/Pk+RfcLfNs3t5LfwDyqn8yXI/gZc5teyV6LZS/xskf/P4k9TVMMng9YFwh+FSuYK3gZVE3C93gN/iQwYR5oDgFVosQ//RPrhraDfx60B7U30HNDB7C1I/mFneib4YLe0870ndoFnYqu1D/sbqDPFjcDG8N6Eu/sBX9/bwPdGtzRn+CB3rY+xHV90Zvcn/NhA9Bd9jo+bAMNPDbYk/Pqf2EWWBcHz/xOP+pG0mf3FPyoFvyq4cxnn8j9maJ4LyqtXo1zfNltV9W+vY5vWrURj6uqVEWFjm9pBfGlMvI5pWqp80so4fy7S+jdKSJeXET+ZiH8hELyfhK7Ce9EEfrzisl3E52PS6jvQZ/b5aUGb0ZMGfzl5byjBeLL9zK8DyrRn1gF/60r6IyUeWb9in5ADToRv8E/cRVedS3oWsc+LtbB31nPnmZdN+p29LjBeangzpvgh7fw1eE2sR00h94Bve+CLg3kk0Cz+z3iZYLxoDlRcJXg+4IWqcsSvSrRfyB920nfEeLnS/yZI24Yc60+d524t8zjV88eTjH3asf8xn7m1Brn/dJq4F+7wl66VNLn83LqUkvA9EL2HHuB+u3nON94hnjdaTCggPOzdnR88zk/dpL6Hj+TX5FHPDaXfK8c+M0/Ej/5ARwgODUbDD7OPbZloROUhU7rMfKBgo3fq/m7ClqGt2WSfyNTuVYl+3vNOKrqg90zp63NULkDtfufHDiinLT5Z9PRbUxTjtPcgRPS1CnH8S5rqvJ1EmsOwxt9GP3QQ+hVpqjpTsERKejqB8k3J6O/KFkd9PdyrbqURL1XkhrhNJaeqBzs+uC+ifJ/LIE+nQSnxON/zQH6HNqP3pU4/HWOo258rHKmXRfsoy5sr3LKuufHEPeMYU9LopWXUygvCp/dotBZuEc9cICWE6kCnAT3SPXEMXZBQIQa5CQUh7O/9uHMNcn2HzT6T7TRb6wNvZU29jcsnP5Xw5nnXATzV0SCzXvwczQanT7ie+HfaMzzdgy+bNHsoziKc1eZx1vm2CT+8yLkPYXDHyVz+NnIF+1mn2N2Ew/dpTY4L+TeTt5B8Q6wcjtYuw28HcZ99wmDv8oqejr7ek9njy46fcsszB1n4XyZRXgW9uduYU/3NPJ2jbkyNfIZGu/niAYvXWOfaRr+UzXe1WGpO6RxrylSl6zhM0nqEjX8xwv/gCb+RH+f+IjRuI9o0dujsd9k4R0XvV/ER4n4uKaxp0cac3a30G+0zO9joS5A5g63oJsteymWfIPsp4NO/SCdeLLOu5ir42+9jv9InXeQJfdQrOPrro7+cx1f3a3wBlv5+xtvxfc0K+9jtpU6H7nXmVb295GcT7eyD285H2JlLpOVvrVy76E6+l3FZ7RF+sq8jvs09CfI/g9ulXezFf0VW5izNBRf74bK79Rm7nX2ZvzUmemz3Az/8SZ0W0Lk3r6V37ON4OVg+M1B4JtB6tnsGymxnwaq8+vy4/uvXK9Kh9S0hgSvUxcTvU80aWtV+cxFbnNsa5Tj9JuTcauVg33aM3WV3FuAan5ZEdiQ708+cqXMt0K9SHtcNrPAT3VtN1L3qP5a/QXTFiqjwAsAAA=="},"shape":[376],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1069","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1070"}}},"glyph":{"type":"object","name":"Line","id":"p1065","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for O2Hb (1/cm-M)"},"line_color":"tomato","line_width":2}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1066","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for O2Hb (1/cm-M)"},"line_color":"tomato","line_alpha":0.1,"line_width":2}},"muted_glyph":{"type":"object","name":"Line","id":"p1067","attributes":{"x":{"type":"field","field":"wavelength (nm)"},"y":{"type":"field","field":"molar extinction coefficient for O2Hb (1/cm-M)"},"line_color":"tomato","line_alpha":0.2,"line_width":2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1018","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1032"},{"type":"object","name":"WheelZoomTool","id":"p1033","attributes":{"renderers":"auto"}},{"type":"object","name":"BoxZoomTool","id":"p1034","attributes":{"dimensions":"both","overlay":{"type":"object","name":"BoxAnnotation","id":"p1035","attributes":{"syncable":false,"line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5,"level":"overlay","visible":false,"left":{"type":"number","value":"nan"},"right":{"type":"number","value":"nan"},"top":{"type":"number","value":"nan"},"bottom":{"type":"number","value":"nan"},"left_units":"canvas","right_units":"canvas","top_units":"canvas","bottom_units":"canvas","handles":{"type":"object","name":"BoxInteractionHandles","id":"p1041","attributes":{"all":{"type":"object","name":"AreaVisuals","id":"p1040","attributes":{"fill_color":"white","hover_fill_color":"lightgray"}}}}}}}},{"type":"object","name":"SaveTool","id":"p1042"},{"type":"object","name":"ResetTool","id":"p1043"},{"type":"object","name":"HelpTool","id":"p1044"}]}},"left":[{"type":"object","name":"LogAxis","id":"p1027","attributes":{"ticker":{"type":"object","name":"LogTicker","id":"p1028","attributes":{"num_minor_ticks":10,"mantissas":[1,5]}},"formatter":{"type":"object","name":"LogTickFormatter","id":"p1029"},"axis_label":"extinction coefficient (1/cm-M)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1030"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1022","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1023","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1024"},"axis_label":"wavelength (nm)","major_label_policy":{"type":"object","name":"AllLabels","id":"p1025"}}}],"center":[{"type":"object","name":"Grid","id":"p1026","attributes":{"axis":{"id":"p1022"}}},{"type":"object","name":"Grid","id":"p1031","attributes":{"dimension":1,"axis":{"id":"p1027"}}},{"type":"object","name":"Legend","id":"p1057","attributes":{"items":[{"type":"object","name":"LegendItem","id":"p1058","attributes":{"label":{"type":"value","value":"Hb"},"renderers":[{"id":"p1054"}]}},{"type":"object","name":"LegendItem","id":"p1071","attributes":{"label":{"type":"value","value":"O\\u2082Hb"},"renderers":[{"id":"p1068"}]}}]}}],"frame_width":400,"frame_height":200}}]}}';
                  const render_items = [{"docid":"09259e6d-8e07-45cc-ae04-ff9fbad8839d","roots":{"p1010":"ad1b2990-87dc-42ab-9f27-78b87f01dba8"},"root_ids":["p1010"]}];
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