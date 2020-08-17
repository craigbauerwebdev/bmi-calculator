//apends bundle top production file
$.getJSON("build/asset-manifest.json", function (json) {
    console.log(json.entrypoints);
    var ep = json.entrypoints;
    /*
    Reference (these 3 scripts created dynamically from assets-manifest.json)
    <script src = "./build/static/js/runtime-main.09b85ec0.js" ></script >
    <script src="./build/static/js/2.b3aa5aee.chunk.js"></script>
    <script src="./build/static/js/main.41a23aeb.chunk.js"></script>
    */
    $.each(ep, function (index, point) {
        var
            bundle = document.createElement('script');
            bundle.setAttribute('type', "text/javascript");
            bundle.setAttribute('src', "build/" + point);
            document.body.appendChild(bundle);
    });
});