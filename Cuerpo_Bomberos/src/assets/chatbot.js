(function (d, t) {
    var v = d.createElement(t), s = d.getElementById("chat");
    v.onload = function () {
        window.voiceflow.chat.load({
            verify: { projectID: '666a628c4982158f9953cb1a' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
        });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; d.body.insertBefore(v, d.getElementById("chat"));
})(document, 'script');