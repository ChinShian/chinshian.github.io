! function (e) {
    function t(t) {
        for (var n, s, a = t[0], u = t[1], c = t[2], f = 0, l = []; f < a.length; f++) s = a[f], Object.prototype.hasOwnProperty.call(i, s) && i[s] && l.push(i[s][0]), i[s] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
        for (d && d(t); l.length;) l.shift()();
        return o.push.apply(o, c || []), r()
    }

    function r() {
        for (var e, t = 0; t < o.length; t++) {
            for (var r = o[t], n = !0, a = 1; a < r.length; a++) {
                var u = r[a];
                0 !== i[u] && (n = !1)
            }
            n && (o.splice(t--, 1), e = s(s.s = r[0]))
        }
        return e
    }
    var n = {},
        i = {
            6: 0
        },
        o = [];

    function s(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, s), r.l = !0, r.exports
    }
    s.m = e, s.c = n, s.d = function (e, t, r) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, s.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (s.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) s.d(r, n, function (t) {
                return e[t]
            }.bind(null, n));
        return r
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "./";
    var a = window.webpackJsonp = window.webpackJsonp || [],
        u = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var c = 0; c < a.length; c++) t(a[c]);
    var d = u;
    o.push([151, 0, 1]), r()
}({
    101: function (e, t, r) {
        "use strict";
        (function (e) {
            r(30);
            var t = r(86),
                n = t.getParser(window.navigator.userAgent),
                i = n.getPlatform(),
                o = "Internet Explorer" === n.getBrowser().name;
            "mobile" === i.type && (window.location.href = 'index2.html'), o && e("body").addClass("isIE"), window.WE_GLOBAL.isIE = o
        }).call(this, r(0))
    },
    102: function (e, t, r) {},
    151: function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(0),
            i = r.n(n);
        r(95), r(35);
        i()((function () {
            var e = i()(".cursor"),
                t = e.find(".cursor-inner"),
                r = {
                    x: 0,
                    y: 0
                },
                n = !1;
            if (window.isIE) e.hide();
            else {
                var o = 0,
                    s = 0;
                i()(document).on("mousemove", (function (t) {
                    r.x = t.clientX, r.y = t.clientY, n || e.css({
                        transform: "translate3d(".concat(r.x, "px, ").concat(r.y, "px, 0)")
                    })
                }));
                var a = 0;
                i()(document).on("mousemove", ".clickable", (function () {
                    clearTimeout(a), e.addClass("active"), t.css({
                        transition: "transform .3s"
                    }), i()(this).hasClass("clickable--dark") && e.addClass("cursor--dark")
                })), i()(document).on("mouseleave", ".clickable", (function () {
                    window.cancelAnimationFrame(s), window.clearTimeout(o), a = setTimeout((function () {
                        n = !1, t.css({
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "none"
                        }), e.removeClass("cursor--dark"), e.removeClass("active")
                    }), 0)
                }))
            }
        }));
        r(38);

        function o(e) {
            if (WE_GLOBAL.locale !== e) {
                try {
                    window.location.pathname.length < 0 ? localStorage.setItem("we-locale", e) : localStorage.removeItem("we-locale")
                } catch (e) {}
                WE_GLOBAL.consoleLog("l", WE_GLOBAL.localePaths[WE_GLOBAL.locale], WE_GLOBAL.localePaths[e]), window.location.pathname = window.location.pathname.replace(WE_GLOBAL.localePaths[WE_GLOBAL.locale], WE_GLOBAL.localePaths[e])
            }
        }
        i()(".lang").on("click", (function () {
            o(i()(this).data("lang"))
        }));
        try {
            o(localStorage.getItem("we-locale") || WE_GLOBAL.locale)
        } catch (e) {}
        var s;
        r(101), r(102);

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }(s = function () {
            function e() {
                var t = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.$window = i()(window), this.inited = !1, this.initTasks = [], this.$window.on("load", (function () {
                    t.triggerInit()
                }))
            }
            var t, r, n;
            return t = e, (r = [{
                key: "addInitTask",
                value: function (e) {
                    var t = this,
                        r = {
                            task: e,
                            done: !1
                        };
                    this.initTasks.push(r), e.then((function () {
                        r.done = !0, t.initTasks.every((function (e) {
                            return e.done
                        })) && t.triggerInit()
                    }))
                }
            }, {
                key: "triggerInit",
                value: function () {
                    this.inited || (this.inited = !0, this.$window.trigger(e.INIT_EVENT), this.$window.trigger("resize"))
                }
            }, {
                key: "addOnInitedListener",
                value: function (t) {
                    this.inited && t(), this.$window.on(e.INIT_EVENT, t)
                }
            }, {
                key: "addOnResizeListener",
                value: function (e) {
                    this.$window.on("resize", (function () {
                        e()
                    }))
                }
            }]) && a(t.prototype, r), n && a(t, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }()).INIT_EVENT = "page-inited", window.WE_GLOBAL.app = new s, window.WE_GLOBAL.app.addOnInitedListener(
            //     (function () {
            //     var e, t;
            //     (e = new window.XMLHttpRequest).open("get", "/"), e.send(null), e.onreadystatechange = function () {
            //         var t = null,
            //             r = null;
            //         2 === e.readyState && (t = e.getResponseHeader("Date"), r = new Date(t), i()(".copyright-text span").html(r.getFullYear()), "function" == typeof e.abort && e.abort())
            //     }, (t = i()("body")).removeClass("page-loading"), t.css("visibility", "visible"), t.css("visibility", "")
            // })
        )
    },
    86: function (e, t, r) {
        e.exports = function (e) {
            var t = {};

            function r(n) {
                if (t[n]) return t[n].exports;
                var i = t[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
            }
            return r.m = e, r.c = t, r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }, r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, r.t = function (e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var i in e) r.d(n, i, function (t) {
                        return e[t]
                    }.bind(null, i));
                return n
            }, r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                } : function () {
                    return e
                };
                return r.d(t, "a", t), t
            }, r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, r.p = "", r(r.s = 90)
        }({
            17: function (e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n = r(18),
                    i = function () {
                        function e() {}
                        return e.getFirstMatch = function (e, t) {
                            var r = t.match(e);
                            return r && r.length > 0 && r[1] || ""
                        }, e.getSecondMatch = function (e, t) {
                            var r = t.match(e);
                            return r && r.length > 1 && r[2] || ""
                        }, e.matchAndReturnConst = function (e, t, r) {
                            if (e.test(t)) return r
                        }, e.getWindowsVersionName = function (e) {
                            switch (e) {
                                case "NT":
                                    return "NT";
                                case "XP":
                                    return "XP";
                                case "NT 5.0":
                                    return "2000";
                                case "NT 5.1":
                                    return "XP";
                                case "NT 5.2":
                                    return "2003";
                                case "NT 6.0":
                                    return "Vista";
                                case "NT 6.1":
                                    return "7";
                                case "NT 6.2":
                                    return "8";
                                case "NT 6.3":
                                    return "8.1";
                                case "NT 10.0":
                                    return "10";
                                default:
                                    return
                            }
                        }, e.getMacOSVersionName = function (e) {
                            var t = e.split(".").splice(0, 2).map((function (e) {
                                return parseInt(e, 10) || 0
                            }));
                            if (t.push(0), 10 === t[0]) switch (t[1]) {
                                case 5:
                                    return "Leopard";
                                case 6:
                                    return "Snow Leopard";
                                case 7:
                                    return "Lion";
                                case 8:
                                    return "Mountain Lion";
                                case 9:
                                    return "Mavericks";
                                case 10:
                                    return "Yosemite";
                                case 11:
                                    return "El Capitan";
                                case 12:
                                    return "Sierra";
                                case 13:
                                    return "High Sierra";
                                case 14:
                                    return "Mojave";
                                case 15:
                                    return "Catalina";
                                default:
                                    return
                            }
                        }, e.getAndroidVersionName = function (e) {
                            var t = e.split(".").splice(0, 2).map((function (e) {
                                return parseInt(e, 10) || 0
                            }));
                            if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                        }, e.getVersionPrecision = function (e) {
                            return e.split(".").length
                        }, e.compareVersions = function (t, r, n) {
                            void 0 === n && (n = !1);
                            var i = e.getVersionPrecision(t),
                                o = e.getVersionPrecision(r),
                                s = Math.max(i, o),
                                a = 0,
                                u = e.map([t, r], (function (t) {
                                    var r = s - e.getVersionPrecision(t),
                                        n = t + new Array(r + 1).join(".0");
                                    return e.map(n.split("."), (function (e) {
                                        return new Array(20 - e.length).join("0") + e
                                    })).reverse()
                                }));
                            for (n && (a = s - Math.min(i, o)), s -= 1; s >= a;) {
                                if (u[0][s] > u[1][s]) return 1;
                                if (u[0][s] === u[1][s]) {
                                    if (s === a) return 0;
                                    s -= 1
                                } else if (u[0][s] < u[1][s]) return -1
                            }
                        }, e.map = function (e, t) {
                            var r, n = [];
                            if (Array.prototype.map) return Array.prototype.map.call(e, t);
                            for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                            return n
                        }, e.find = function (e, t) {
                            var r, n;
                            if (Array.prototype.find) return Array.prototype.find.call(e, t);
                            for (r = 0, n = e.length; r < n; r += 1) {
                                var i = e[r];
                                if (t(i, r)) return i
                            }
                        }, e.assign = function (e) {
                            for (var t, r, n = e, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
                            if (Object.assign) return Object.assign.apply(Object, [e].concat(o));
                            var a = function () {
                                var e = o[t];
                                "object" == typeof e && null !== e && Object.keys(e).forEach((function (t) {
                                    n[t] = e[t]
                                }))
                            };
                            for (t = 0, r = o.length; t < r; t += 1) a();
                            return e
                        }, e.getBrowserAlias = function (e) {
                            return n.BROWSER_ALIASES_MAP[e]
                        }, e.getBrowserTypeByAlias = function (e) {
                            return n.BROWSER_MAP[e] || ""
                        }, e
                    }();
                t.default = i, e.exports = t.default
            },
            18: function (e, t, r) {
                "use strict";
                t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                    "Amazon Silk": "amazon_silk",
                    "Android Browser": "android",
                    Bada: "bada",
                    BlackBerry: "blackberry",
                    Chrome: "chrome",
                    Chromium: "chromium",
                    Electron: "electron",
                    Epiphany: "epiphany",
                    Firefox: "firefox",
                    Focus: "focus",
                    Generic: "generic",
                    "Google Search": "google_search",
                    Googlebot: "googlebot",
                    "Internet Explorer": "ie",
                    "K-Meleon": "k_meleon",
                    Maxthon: "maxthon",
                    "Microsoft Edge": "edge",
                    "MZ Browser": "mz",
                    "NAVER Whale Browser": "naver",
                    Opera: "opera",
                    "Opera Coast": "opera_coast",
                    PhantomJS: "phantomjs",
                    Puffin: "puffin",
                    QupZilla: "qupzilla",
                    QQ: "qq",
                    QQLite: "qqlite",
                    Safari: "safari",
                    Sailfish: "sailfish",
                    "Samsung Internet for Android": "samsung_internet",
                    SeaMonkey: "seamonkey",
                    Sleipnir: "sleipnir",
                    Swing: "swing",
                    Tizen: "tizen",
                    "UC Browser": "uc",
                    Vivaldi: "vivaldi",
                    "WebOS Browser": "webos",
                    WeChat: "wechat",
                    "Yandex Browser": "yandex",
                    Roku: "roku"
                }, t.BROWSER_MAP = {
                    amazon_silk: "Amazon Silk",
                    android: "Android Browser",
                    bada: "Bada",
                    blackberry: "BlackBerry",
                    chrome: "Chrome",
                    chromium: "Chromium",
                    electron: "Electron",
                    epiphany: "Epiphany",
                    firefox: "Firefox",
                    focus: "Focus",
                    generic: "Generic",
                    googlebot: "Googlebot",
                    google_search: "Google Search",
                    ie: "Internet Explorer",
                    k_meleon: "K-Meleon",
                    maxthon: "Maxthon",
                    edge: "Microsoft Edge",
                    mz: "MZ Browser",
                    naver: "NAVER Whale Browser",
                    opera: "Opera",
                    opera_coast: "Opera Coast",
                    phantomjs: "PhantomJS",
                    puffin: "Puffin",
                    qupzilla: "QupZilla",
                    qq: "QQ Browser",
                    qqlite: "QQ Browser Lite",
                    safari: "Safari",
                    sailfish: "Sailfish",
                    samsung_internet: "Samsung Internet for Android",
                    seamonkey: "SeaMonkey",
                    sleipnir: "Sleipnir",
                    swing: "Swing",
                    tizen: "Tizen",
                    uc: "UC Browser",
                    vivaldi: "Vivaldi",
                    webos: "WebOS Browser",
                    wechat: "WeChat",
                    yandex: "Yandex Browser"
                }, t.PLATFORMS_MAP = {
                    tablet: "tablet",
                    mobile: "mobile",
                    desktop: "desktop",
                    tv: "tv"
                }, t.OS_MAP = {
                    WindowsPhone: "Windows Phone",
                    Windows: "Windows",
                    MacOS: "macOS",
                    iOS: "iOS",
                    Android: "Android",
                    WebOS: "WebOS",
                    BlackBerry: "BlackBerry",
                    Bada: "Bada",
                    Tizen: "Tizen",
                    Linux: "Linux",
                    ChromeOS: "Chrome OS",
                    PlayStation4: "PlayStation 4",
                    Roku: "Roku"
                }, t.ENGINE_MAP = {
                    EdgeHTML: "EdgeHTML",
                    Blink: "Blink",
                    Trident: "Trident",
                    Presto: "Presto",
                    Gecko: "Gecko",
                    WebKit: "WebKit"
                }
            },
            90: function (e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n, i = (n = r(91)) && n.__esModule ? n : {
                        default: n
                    },
                    o = r(18);

                function s(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                var a = function () {
                    function e() {}
                    var t, r;
                    return e.getParser = function (e, t) {
                        if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
                        return new i.default(e, t)
                    }, e.parse = function (e) {
                        return new i.default(e).getResult()
                    }, t = e, (r = [{
                        key: "BROWSER_MAP",
                        get: function () {
                            return o.BROWSER_MAP
                        }
                    }, {
                        key: "ENGINE_MAP",
                        get: function () {
                            return o.ENGINE_MAP
                        }
                    }, {
                        key: "OS_MAP",
                        get: function () {
                            return o.OS_MAP
                        }
                    }, {
                        key: "PLATFORMS_MAP",
                        get: function () {
                            return o.PLATFORMS_MAP
                        }
                    }]) && s(t, r), e
                }();
                t.default = a, e.exports = t.default
            },
            91: function (e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n = u(r(92)),
                    i = u(r(93)),
                    o = u(r(94)),
                    s = u(r(95)),
                    a = u(r(17));

                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var c = function () {
                    function e(e, t) {
                        if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                        this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                    }
                    var t = e.prototype;
                    return t.getUA = function () {
                        return this._ua
                    }, t.test = function (e) {
                        return e.test(this._ua)
                    }, t.parseBrowser = function () {
                        var e = this;
                        this.parsedResult.browser = {};
                        var t = a.default.find(n.default, (function (t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array) return t.test.some((function (t) {
                                return e.test(t)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                    }, t.getBrowser = function () {
                        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                    }, t.getBrowserName = function (e) {
                        return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                    }, t.getBrowserVersion = function () {
                        return this.getBrowser().version
                    }, t.getOS = function () {
                        return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                    }, t.parseOS = function () {
                        var e = this;
                        this.parsedResult.os = {};
                        var t = a.default.find(i.default, (function (t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array) return t.test.some((function (t) {
                                return e.test(t)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                    }, t.getOSName = function (e) {
                        var t = this.getOS().name;
                        return e ? String(t).toLowerCase() || "" : t || ""
                    }, t.getOSVersion = function () {
                        return this.getOS().version
                    }, t.getPlatform = function () {
                        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                    }, t.getPlatformType = function (e) {
                        void 0 === e && (e = !1);
                        var t = this.getPlatform().type;
                        return e ? String(t).toLowerCase() || "" : t || ""
                    }, t.parsePlatform = function () {
                        var e = this;
                        this.parsedResult.platform = {};
                        var t = a.default.find(o.default, (function (t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array) return t.test.some((function (t) {
                                return e.test(t)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                    }, t.getEngine = function () {
                        return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                    }, t.getEngineName = function (e) {
                        return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                    }, t.parseEngine = function () {
                        var e = this;
                        this.parsedResult.engine = {};
                        var t = a.default.find(s.default, (function (t) {
                            if ("function" == typeof t.test) return t.test(e);
                            if (t.test instanceof Array) return t.test.some((function (t) {
                                return e.test(t)
                            }));
                            throw new Error("Browser's test function is not valid")
                        }));
                        return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                    }, t.parse = function () {
                        return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                    }, t.getResult = function () {
                        return a.default.assign({}, this.parsedResult)
                    }, t.satisfies = function (e) {
                        var t = this,
                            r = {},
                            n = 0,
                            i = {},
                            o = 0;
                        if (Object.keys(e).forEach((function (t) {
                                var s = e[t];
                                "string" == typeof s ? (i[t] = s, o += 1) : "object" == typeof s && (r[t] = s, n += 1)
                            })), n > 0) {
                            var s = Object.keys(r),
                                u = a.default.find(s, (function (e) {
                                    return t.isOS(e)
                                }));
                            if (u) {
                                var c = this.satisfies(r[u]);
                                if (void 0 !== c) return c
                            }
                            var d = a.default.find(s, (function (e) {
                                return t.isPlatform(e)
                            }));
                            if (d) {
                                var f = this.satisfies(r[d]);
                                if (void 0 !== f) return f
                            }
                        }
                        if (o > 0) {
                            var l = Object.keys(i),
                                h = a.default.find(l, (function (e) {
                                    return t.isBrowser(e, !0)
                                }));
                            if (void 0 !== h) return this.compareVersion(i[h])
                        }
                    }, t.isBrowser = function (e, t) {
                        void 0 === t && (t = !1);
                        var r = this.getBrowserName().toLowerCase(),
                            n = e.toLowerCase(),
                            i = a.default.getBrowserTypeByAlias(n);
                        return t && i && (n = i.toLowerCase()), n === r
                    }, t.compareVersion = function (e) {
                        var t = [0],
                            r = e,
                            n = !1,
                            i = this.getBrowserVersion();
                        if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(a.default.compareVersions(i, r, n)) > -1
                    }, t.isOS = function (e) {
                        return this.getOSName(!0) === String(e).toLowerCase()
                    }, t.isPlatform = function (e) {
                        return this.getPlatformType(!0) === String(e).toLowerCase()
                    }, t.isEngine = function (e) {
                        return this.getEngineName(!0) === String(e).toLowerCase()
                    }, t.is = function (e, t) {
                        return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                    }, t.some = function (e) {
                        var t = this;
                        return void 0 === e && (e = []), e.some((function (e) {
                            return t.is(e)
                        }))
                    }, e
                }();
                t.default = c, e.exports = t.default
            },
            92: function (e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : {
                        default: n
                    },
                    o = /version\/(\d+(\.?_?\d+)+)/i,
                    s = [{
                        test: [/googlebot/i],
                        describe: function (e) {
                            var t = {
                                    name: "Googlebot"
                                },
                                r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/opera/i],
                        describe: function (e) {
                            var t = {
                                    name: "Opera"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/opr\/|opios/i],
                        describe: function (e) {
                            var t = {
                                    name: "Opera"
                                },
                                r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/SamsungBrowser/i],
                        describe: function (e) {
                            var t = {
                                    name: "Samsung Internet for Android"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/Whale/i],
                        describe: function (e) {
                            var t = {
                                    name: "NAVER Whale Browser"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/MZBrowser/i],
                        describe: function (e) {
                            var t = {
                                    name: "MZ Browser"
                                },
                                r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/focus/i],
                        describe: function (e) {
                            var t = {
                                    name: "Focus"
                                },
                                r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/swing/i],
                        describe: function (e) {
                            var t = {
                                    name: "Swing"
                                },
                                r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/coast/i],
                        describe: function (e) {
                            var t = {
                                    name: "Opera Coast"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/opt\/\d+(?:.?_?\d+)+/i],
                        describe: function (e) {
                            var t = {
                                    name: "Opera Touch"
                                },
                                r = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/yabrowser/i],
                        describe: function (e) {
                            var t = {
                                    name: "Yandex Browser"
                                },
                                r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/ucbrowser/i],
                        describe: function (e) {
                            var t = {
                                    name: "UC Browser"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/Maxthon|mxios/i],
                        describe: function (e) {
                            var t = {
                                    name: "Maxthon"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/epiphany/i],
                        describe: function (e) {
                            var t = {
                                    name: "Epiphany"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/puffin/i],
                        describe: function (e) {
                            var t = {
                                    name: "Puffin"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/sleipnir/i],
                        describe: function (e) {
                            var t = {
                                    name: "Sleipnir"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/k-meleon/i],
                        describe: function (e) {
                            var t = {
                                    name: "K-Meleon"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/micromessenger/i],
                        describe: function (e) {
                            var t = {
                                    name: "WeChat"
                                },
                                r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/qqbrowser/i],
                        describe: function (e) {
                            var t = {
                                    name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                                },
                                r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/msie|trident/i],
                        describe: function (e) {
                            var t = {
                                    name: "Internet Explorer"
                                },
                                r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/\sedg\//i],
                        describe: function (e) {
                            var t = {
                                    name: "Microsoft Edge"
                                },
                                r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/edg([ea]|ios)/i],
                        describe: function (e) {
                            var t = {
                                    name: "Microsoft Edge"
                                },
                                r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/vivaldi/i],
                        describe: function (e) {
                            var t = {
                                    name: "Vivaldi"
                                },
                                r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/seamonkey/i],
                        describe: function (e) {
                            var t = {
                                    name: "SeaMonkey"
                                },
                                r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/sailfish/i],
                        describe: function (e) {
                            var t = {
                                    name: "Sailfish"
                                },
                                r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/silk/i],
                        describe: function (e) {
                            var t = {
                                    name: "Amazon Silk"
                                },
                                r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/phantom/i],
                        describe: function (e) {
                            var t = {
                                    name: "PhantomJS"
                                },
                                r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/slimerjs/i],
                        describe: function (e) {
                            var t = {
                                    name: "SlimerJS"
                                },
                                r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                        describe: function (e) {
                            var t = {
                                    name: "BlackBerry"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/(web|hpw)[o0]s/i],
                        describe: function (e) {
                            var t = {
                                    name: "WebOS Browser"
                                },
                                r = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/bada/i],
                        describe: function (e) {
                            var t = {
                                    name: "Bada"
                                },
                                r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/tizen/i],
                        describe: function (e) {
                            var t = {
                                    name: "Tizen"
                                },
                                r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/qupzilla/i],
                        describe: function (e) {
                            var t = {
                                    name: "QupZilla"
                                },
                                r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/firefox|iceweasel|fxios/i],
                        describe: function (e) {
                            var t = {
                                    name: "Firefox"
                                },
                                r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/electron/i],
                        describe: function (e) {
                            var t = {
                                    name: "Electron"
                                },
                                r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/MiuiBrowser/i],
                        describe: function (e) {
                            var t = {
                                    name: "Miui"
                                },
                                r = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/chromium/i],
                        describe: function (e) {
                            var t = {
                                    name: "Chromium"
                                },
                                r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/chrome|crios|crmo/i],
                        describe: function (e) {
                            var t = {
                                    name: "Chrome"
                                },
                                r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/GSA/i],
                        describe: function (e) {
                            var t = {
                                    name: "Google Search"
                                },
                                r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: function (e) {
                            var t = !e.test(/like android/i),
                                r = e.test(/android/i);
                            return t && r
                        },
                        describe: function (e) {
                            var t = {
                                    name: "Android Browser"
                                },
                                r = i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/playstation 4/i],
                        describe: function (e) {
                            var t = {
                                    name: "PlayStation 4"
                                },
                                r = i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/safari|applewebkit/i],
                        describe: function (e) {
                            var t = {
                                    name: "Safari"
                                },
                                r = i.default.getFirstMatch(o, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/.*/i],
                        describe: function (e) {
                            var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                            return {
                                name: i.default.getFirstMatch(t, e),
                                version: i.default.getSecondMatch(t, e)
                            }
                        }
                    }];
                t.default = s, e.exports = t.default
            },
            93: function (e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : {
                        default: n
                    },
                    o = r(18),
                    s = [{
                        test: [/Roku\/DVP/],
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                            return {
                                name: o.OS_MAP.Roku,
                                version: t
                            }
                        }
                    }, {
                        test: [/windows phone/i],
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                            return {
                                name: o.OS_MAP.WindowsPhone,
                                version: t
                            }
                        }
                    }, {
                        test: [/windows /i],
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                r = i.default.getWindowsVersionName(t);
                            return {
                                name: o.OS_MAP.Windows,
                                version: t,
                                versionName: r
                            }
                        }
                    }, {
                        test: [/Macintosh(.*?) FxiOS(.*?)\//],
                        describe: function (e) {
                            var t = {
                                    name: o.OS_MAP.iOS
                                },
                                r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/macintosh/i],
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                r = i.default.getMacOSVersionName(t),
                                n = {
                                    name: o.OS_MAP.MacOS,
                                    version: t
                                };
                            return r && (n.versionName = r), n
                        }
                    }, {
                        test: [/(ipod|iphone|ipad)/i],
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                            return {
                                name: o.OS_MAP.iOS,
                                version: t
                            }
                        }
                    }, {
                        test: function (e) {
                            var t = !e.test(/like android/i),
                                r = e.test(/android/i);
                            return t && r
                        },
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                                r = i.default.getAndroidVersionName(t),
                                n = {
                                    name: o.OS_MAP.Android,
                                    version: t
                                };
                            return r && (n.versionName = r), n
                        }
                    }, {
                        test: [/(web|hpw)[o0]s/i],
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                r = {
                                    name: o.OS_MAP.WebOS
                                };
                            return t && t.length && (r.version = t), r
                        }
                    }, {
                        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                            return {
                                name: o.OS_MAP.BlackBerry,
                                version: t
                            }
                        }
                    }, {
                        test: [/bada/i],
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                            return {
                                name: o.OS_MAP.Bada,
                                version: t
                            }
                        }
                    }, {
                        test: [/tizen/i],
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                            return {
                                name: o.OS_MAP.Tizen,
                                version: t
                            }
                        }
                    }, {
                        test: [/linux/i],
                        describe: function () {
                            return {
                                name: o.OS_MAP.Linux
                            }
                        }
                    }, {
                        test: [/CrOS/],
                        describe: function () {
                            return {
                                name: o.OS_MAP.ChromeOS
                            }
                        }
                    }, {
                        test: [/PlayStation 4/],
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                            return {
                                name: o.OS_MAP.PlayStation4,
                                version: t
                            }
                        }
                    }];
                t.default = s, e.exports = t.default
            },
            94: function (e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : {
                        default: n
                    },
                    o = r(18),
                    s = [{
                        test: [/googlebot/i],
                        describe: function () {
                            return {
                                type: "bot",
                                vendor: "Google"
                            }
                        }
                    }, {
                        test: [/huawei/i],
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                r = {
                                    type: o.PLATFORMS_MAP.mobile,
                                    vendor: "Huawei"
                                };
                            return t && (r.model = t), r
                        }
                    }, {
                        test: [/nexus\s*(?:7|8|9|10).*/i],
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.tablet,
                                vendor: "Nexus"
                            }
                        }
                    }, {
                        test: [/ipad/i],
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.tablet,
                                vendor: "Apple",
                                model: "iPad"
                            }
                        }
                    }, {
                        test: [/Macintosh(.*?) FxiOS(.*?)\//],
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.tablet,
                                vendor: "Apple",
                                model: "iPad"
                            }
                        }
                    }, {
                        test: [/kftt build/i],
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.tablet,
                                vendor: "Amazon",
                                model: "Kindle Fire HD 7"
                            }
                        }
                    }, {
                        test: [/silk/i],
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.tablet,
                                vendor: "Amazon"
                            }
                        }
                    }, {
                        test: [/tablet(?! pc)/i],
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.tablet
                            }
                        }
                    }, {
                        test: function (e) {
                            var t = e.test(/ipod|iphone/i),
                                r = e.test(/like (ipod|iphone)/i);
                            return t && !r
                        },
                        describe: function (e) {
                            var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                            return {
                                type: o.PLATFORMS_MAP.mobile,
                                vendor: "Apple",
                                model: t
                            }
                        }
                    }, {
                        test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.mobile,
                                vendor: "Nexus"
                            }
                        }
                    }, {
                        test: [/[^-]mobi/i],
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function (e) {
                            return "blackberry" === e.getBrowserName(!0)
                        },
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.mobile,
                                vendor: "BlackBerry"
                            }
                        }
                    }, {
                        test: function (e) {
                            return "bada" === e.getBrowserName(!0)
                        },
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function (e) {
                            return "windows phone" === e.getBrowserName()
                        },
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.mobile,
                                vendor: "Microsoft"
                            }
                        }
                    }, {
                        test: function (e) {
                            var t = Number(String(e.getOSVersion()).split(".")[0]);
                            return "android" === e.getOSName(!0) && t >= 3
                        },
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.tablet
                            }
                        }
                    }, {
                        test: function (e) {
                            return "android" === e.getOSName(!0)
                        },
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function (e) {
                            return "macos" === e.getOSName(!0)
                        },
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.desktop,
                                vendor: "Apple"
                            }
                        }
                    }, {
                        test: function (e) {
                            return "windows" === e.getOSName(!0)
                        },
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.desktop
                            }
                        }
                    }, {
                        test: function (e) {
                            return "linux" === e.getOSName(!0)
                        },
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.desktop
                            }
                        }
                    }, {
                        test: function (e) {
                            return "playstation 4" === e.getOSName(!0)
                        },
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.tv
                            }
                        }
                    }, {
                        test: function (e) {
                            return "roku" === e.getOSName(!0)
                        },
                        describe: function () {
                            return {
                                type: o.PLATFORMS_MAP.tv
                            }
                        }
                    }];
                t.default = s, e.exports = t.default
            },
            95: function (e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : {
                        default: n
                    },
                    o = r(18),
                    s = [{
                        test: function (e) {
                            return "microsoft edge" === e.getBrowserName(!0)
                        },
                        describe: function (e) {
                            if (/\sedg\//i.test(e)) return {
                                name: o.ENGINE_MAP.Blink
                            };
                            var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                            return {
                                name: o.ENGINE_MAP.EdgeHTML,
                                version: t
                            }
                        }
                    }, {
                        test: [/trident/i],
                        describe: function (e) {
                            var t = {
                                    name: o.ENGINE_MAP.Trident
                                },
                                r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: function (e) {
                            return e.test(/presto/i)
                        },
                        describe: function (e) {
                            var t = {
                                    name: o.ENGINE_MAP.Presto
                                },
                                r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: function (e) {
                            var t = e.test(/gecko/i),
                                r = e.test(/like gecko/i);
                            return t && !r
                        },
                        describe: function (e) {
                            var t = {
                                    name: o.ENGINE_MAP.Gecko
                                },
                                r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/(apple)?webkit\/537\.36/i],
                        describe: function () {
                            return {
                                name: o.ENGINE_MAP.Blink
                            }
                        }
                    }, {
                        test: [/(apple)?webkit/i],
                        describe: function (e) {
                            var t = {
                                    name: o.ENGINE_MAP.WebKit
                                },
                                r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }];
                t.default = s, e.exports = t.default
            }
        })
    },
    95: function (e, t, r) {
        window.WE_GLOBAL = {
                locale: "".concat("zh", "-").concat("CN"),
                localePaths: {
                    "zh-CN": "/",
                    "en-US": "/en/"
                }
            },
            function () {
                for (var e = 0, t = ["webkit", "moz"], r = 0; r < t.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window["".concat(t[r], "RequestAnimationFrame")], window.cancelAnimationFrame = window["".concat(t[r], "CancelAnimationFrame")] || window["".concat(t[r], "CancelRequestAnimationFrame")];
                window.requestAnimationFrame || (window.requestAnimationFrame = function (t) {
                    var r = (new Date).getTime(),
                        n = Math.max(0, 16.7 - (r - e)),
                        i = window.setTimeout((function () {
                            t(r + n)
                        }), n);
                    return e = r + n, i
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
                    clearTimeout(e)
                })
            }(), window.WE_GLOBAL.consoleLog = function () {}
    }
});