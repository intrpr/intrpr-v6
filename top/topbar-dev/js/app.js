"use strict";

function formatPartOfSpeech(e, t, a) {
    switch (a) {
        case "noun":
            return e + " " + t + (1 === e ? "" : "s");
        case "adjective":
            return e + "-" + t;
        case "numeral":
        case null:
        case void 0:
            return e;
        default:
            return !1
    }
}

function formatCurrency(e) {
    return e = Math.round(e / 100), "$" + e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}

function formatCurrencyToCents(e) {
    return 100 * e
}

function percent(e) {
    return parseFloat(e / 100).toFixed(2) + "%"
}

function getQueryStringValue(e) {
    e = e.replace(/[\[\]]/g, "\\$&");
    var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
        a = t.exec(window.location.href);
    return a ? a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : "" : null
}

function isMobileBrowser() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function scrollToElement(e, t, a, n) {
    n = n || function() {}, a = 0 === a || "slow", t = t || 0;
    var o = jQuery(e).offset().top;
    jQuery("body, html").animate({
        scrollTop: o - t
    }, a, n)
}

function alertMessage(e) {
    $(".alert-message").text(e), $(".page-alert-layer").fadeIn(), setTimeout(function() {
        $(".page-alert-layer").fadeOut()
    }, constants.UI_CONSTANTS.alertTimeout)
}
var earnest = earnest || {};
window.earnest = window.earnest || {},
    function(e) {
        var t = function() {
                this.amount_requested = 0, this.amount_to_be_financed = 0, this.amount_approved = 0, this.amount_paid = 0, this.days_per_year = 365, this.payment_schedule = "monthly", this.type = "student_loan_refinance", this.tax_amount = 0, this.interest_rate = null, this.number_of_payments = null, this.payment_amount = null, this.final_payment_amount = null, this.final_payment_due = null, this.total_cost = null
            },
            a = function() {
                e.models.Loan.call(this), this.type = "student_loan_refinance", this.term_days = null, this.total_interest = null, this.principal_percent = null, this.interest_percent = null
            };
        a.prototype = Object.create(t.prototype), a.prototype.calcPrinciplePercent = function() {
            var e = this.amount_to_be_financed / this.total_cost;
            return Math.round(1e4 * e)
        }, a.prototype.calcInterestPercent = function() {
            var e = (this.total_cost - this.amount_to_be_financed) / this.total_cost;
            return Math.round(1e4 * e)
        }, a.prototype.calcTotalDifference = function(e) {
            return this.total_cost - e.total_cost
        }, a.prototype.updateLoanCalcValues = function(e, t, a, n) {
            this.amount_to_be_financed = e, this.interest_rate = t, this.number_of_payments = parseInt(n, 10), this.payment_amount = a
        }, e.models = e.models || {}, e.models.Loan = t, e.models.CalculatorLoan = a
    }(earnest),
    function(e) {
        e(function() {
            if (e("body").hasClass("page-template-2016")) {
                var t = ["#yir-intro", "#quote-jeffrey", "#earnest-stats"],
                    a = ["#yir-intro", "#quote-jeffrey", "#earnest-stats", "#savings-2016", "#forward-together", "#quote-sam", "#mad-money", "#quote-jiordan", "#quote-symone", "#mad-credit-rating", "#quote-ruggles", "#quote-angela"],
                    n = 0,
                    o = 0;
                e.each(t, function(t, a) {
                    n += e(a).outerHeight(!0)
                }), e.each(a, function(t, a) {
                    o += e(a).outerHeight(!0)
                }), e("#earnest-stats-heading").affix({
                    offset: {
                        top: function() {
                            return this.top = n
                        },
                        bottom: function() {
                            return this.bottom = e("body").outerHeight(!0) - (n + e("#savings-2016").outerHeight(!0)) + 100
                        }
                    }
                }), e("#blog-stats-heading").affix({
                    offset: {
                        top: function() {
                            return this.top = o
                        },
                        bottom: function() {
                            return this.bottom = e("body").outerHeight(!0) - (o + e("#best-blog-stories").outerHeight(!0)) + 100
                        }
                    }
                }), e(".social-icons a").on("click", function(t) {
                    t.preventDefault(), window.open(e(this).attr("href") + window.location.href, "socialWindow", "height=400,width=600")
                }), e(window).scroll(function() {
                    e(this).scrollTop() > 20 ? e("#masthead-yir").addClass("scrolled") : e("#masthead-yir").removeClass("scrolled")
                }), e(".right-nav a").on("click", function(t) {
                    t.preventDefault(), e("html,body").animate({
                        scrollTop: e(e(this).attr("href")).offset().top
                    }, 1e3)
                }), e('[data-toggle="tooltip"]').tooltip()
            }
        })
    }(jQuery),
    function(e) {
        function t() {
            e("#email-me-a-link").on("click", function(t) {
                t.preventDefault(), scrollToElement(e("#section-get-the-app"), 150, 500)
            })
        }

        function a() {
            if (!isMobileBrowser()) {
                var t = '<iframe src="https://player.vimeo.com/video/214251886?autoplay=1& auto-mute=1&loop=1&title=0&byline=0&portrait=0&background=1" width="500" height="888" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                e(".js-fitvids").html(t), e(".js-fitvids").fitVids(), e(".js-video-frame").prependTo(".js-fitvids"), e(".js-video-border").prependTo(".js-fitvids"), e("#iphone-no-image").css("display", "block"), e("#iphone-with-image").css("display", "none")
            }
        }
        e(function() {
            e("body").hasClass("page-template-app-landing") && (t(), a())
        })
    }(jQuery),
    function(e) {
        e.fn.get_article = function(t) {
            function a(e) {
                return e = e.toString(), e.replace(/<\/?[^>]+>/gi, "")
            }

            function n(e) {
                return e.split(/[^\s\d_\+\-\.,!@#\$%\^&\*\(\);\\\/\|<>"]+/g).length - 1
            }
            var o = this;
            o.post_obj = {}, o.remoteUrl = window.location.protocol + "//" + window.location.hostname + "/blog", o.templateId = "article_template";
            var r = function(t) {
                    jQuery.ajax({
                        url: o.remoteUrl + "/wp-json/wp/v2/posts?slug==" + t,
                        success: function(e) {},
                        cache: !1
                    }).then(function(t) {
                        i(t);
                        var a = t[0]._links,
                            n = jQuery.grep(a["wp:term"], function(e, t) {
                                return "category" === e.taxonomy
                            }),
                            r = a["wp:featuredmedia"][0].href;
                        l(n[0].href).then(function(t) {
                            s(r).then(function(t) {
                                var a = e("#" + o.templateId).html();
                                Mustache.parse(a);
                                var n = Mustache.render(a, o.post_obj);
                                e("#" + o.attr("id")).html(n)
                            })
                        })
                    })
                },
                i = function(e) {
                    var t = e[0];
                    o.post_obj.title = t.title.rendered, o.post_obj.postUrl = t.link, o.post_obj.readTime = c(t.content.rendered)
                },
                l = function(e) {
                    return jQuery.ajax({
                        url: e,
                        success: function(e) {
                            var t = jQuery.grep(e, function(e, t) {
                                    return "Featured" !== e.name && "Spotlight" !== e.name
                                }),
                                a = t[0].name;
                            o.post_obj.category = a.toLowerCase()
                        },
                        cache: !1
                    })
                },
                s = function(e) {
                    return jQuery.ajax({
                        url: e,
                        success: function(e) {
                            var t = e;
                            o.post_obj.imageUrl = t.media_details.sizes.thumbnail.source_url, o.post_obj.imageAlt = t.title.rendered, o.post_obj.imageHeight = t.media_details.height, o.post_obj.imageWidth = t.media_details.width
                        },
                        cache: !1
                    })
                },
                c = function(e) {
                    var t, o = n(a(e)),
                        r = Math.floor(o / 120),
                        i = Math.floor(o % 120 / 2);
                    return t = r >= 1 ? r + " min. read" : i + " sec. read"
                };
            r(t)
        }, "function" == typeof showArticles && showArticles()
    }(jQuery),
    function(e, t) {
        function a(e) {
            var t = 0,
                a = {
                    loans: e,
                    formatCurrency: function() {
                        return function(e, t) {
                            return formatCurrency(t(e))
                        }
                    },
                    percent: function() {
                        return function(e, t) {
                            return percent(t(e))
                        }
                    },
                    formatDate: function() {
                        return function(e, t) {
                            var a = t(e);
                            return a ? moment(new Date(a)).format("MMM. YYYY") : moment().format("MMM. YYYY")
                        }
                    },
                    total_interest_original: function() {
                        return formatCurrency(e.originalLoan.total_cost - e.originalLoan.amount_to_be_financed)
                    },
                    total_interest_refi: function() {
                        return formatCurrency(e.newLoan.total_cost - e.newLoan.amount_to_be_financed)
                    },
                    index: function() {
                        return t++
                    },
                    formatDollarsWithSmallCents: function() {
                        return function(e, t) {
                            e = t(e);
                            var a = formatCurrency(e),
                                n = (parseInt(e, 10) / 100).toFixed(2).split(".")[1];
                            return a + '<span class="value value--cents">.' + n + "</span>"
                        }
                    }
                };
            return a
        }
        var n = {
                "default": "Something went wrong, Please try again.",
                required: "All fields below are required.",
                invalidPayment: "Your entered monthly payment is too small.",
                invalidTerm: "Can’t calculate interest with your term and APR."
            },
            o = {
                currency: {
                    alias: "currency",
                    rightAlign: !1,
                    numericInput: !0,
                    autoUnmask: !0,
                    max: 1e6,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !1,
                    clearMaskOnLostFocus: !0,
                    onUnMask: function(e, t) {
                        return parseInt(t.replace(/,/g, ""), 10)
                    }
                },
                percentage: {
                    alias: "percentage",
                    rightAlign: !1,
                    numericInput: !0,
                    digitsOptional: !1,
                    autoUnmask: !0,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !1,
                    max: 30,
                    onUnMask: function(e, t) {
                        return parseInt(t, 10)
                    }
                },
                months: {
                    alias: "numeric",
                    rightAlign: !1,
                    digits: !1,
                    numericInput: !0,
                    showMaskOnHover: !1,
                    showMaskOnFocus: !1,
                    autoUnmask: !0,
                    allowPlus: !1,
                    allowMinus: !1,
                    min: 1,
                    max: 360,
                    suffix: " months",
                    onUnMask: function(e, t) {
                        return parseInt(t, 10)
                    }
                }
            },
            r = function() {
                this.button = null, this.calcButton = null, this.studentLoanCalculators = {}, this.ERROR_MESSAGES = n
            };
        r.prototype.init = function() {
            var t = this;
            this.button = e(".button--calculate"), this.calcButton = e("#calculator-button"), this.loanBalanceInput = e("#current-loan-balance"), this.aprInput = e("#current-apr"), this.paymentTermInput = e("#current-payment-term"), this.allInputs = e("#current-loan-balance, #current-apr, #current-payment-term"), isMobileBrowser() || this.loanBalanceInput.focus(), t.maskFields()
        }, r.prototype.maskFields = function() {
            this.loanBalanceInput.inputmask(o.currency), this.aprInput.inputmask(o.percentage), this.paymentTermInput.inputmask(o.currency)
        }, r.prototype.paymentTermPlaceholderSwap = function() {
            var t = "";
            "payment" === e(".calculator-radio:checked").val() ? (t = "$ 0.00", this.paymentTermInput.inputmask(o.currency)) : (t = "12 months", this.paymentTermInput.inputmask(o.months)), this.paymentTermInput.attr("placeholder", t)
        }, r.prototype.loadTemplate = function(t, n, o) {
            var r = e(t).html();
            if (r) {
                var i = a(n);
                Mustache.parse(r);
                var l = Mustache.render(r, i);
                e(o).html(l)
            }
        }, r.prototype.loadHeaderTemplate = function(t, a) {
            var n = e(t).html();
            e(a).html(n)
        }, r.prototype.loadCompareTemplate = function(t, a, n) {
            var o = e(t).html();
            if (o) {
                Mustache.parse(o);
                var r = Mustache.render(o, a);
                e(n).html(r)
            }
        }, r.prototype.validateInputValues = function(e) {
            return !!e.loanBalanceInput.val() && !!e.aprInput.val() && !!e.paymentTermInput.val()
        }, r.prototype.getInputValues = function(t) {
            var a = e('input:radio[name="payment-term"]:checked').val();
            t.amount_to_be_financed = e("#current-loan-balance").val(), t.interest_rate = e("#current-apr").val(), "payment" === a && (t.payment_amount = e("#current-payment-term").val(), t.number_of_payments = null), "term" === a && (t.number_of_payments = e("#current-payment-term").val(), t.payment_amount = null)
        }, r.prototype.displayErrors = function(t, a) {
            a = a || n["default"];
            var o = e(".calculator--errors");
            o.find(".calculator__error").html(a), t ? o.show() : o.hide()
        }, t.calculatorInputs = r
    }(jQuery, earnest);
var clientHappiness = function(e) {
    e(document).ready(function() {
        !isMobileBrowser() && config.olarkAPIKey && (window.olark || function(e) {
            var t = window,
                a = document,
                n = "https:" == t.location.protocol ? "https:" : "http:",
                o = e.name,
                r = "load",
                i = function() {
                    function l() {
                        s.P(r), t[o](r)
                    }
                    t[o] = function() {
                        (s.s = s.s || []).push(arguments)
                    };
                    for (var s = t[o]._ = {}, c = e.methods.length; c--;) ! function(e) {
                        t[o][e] = function() {
                            t[o]("call", e, arguments)
                        }
                    }(e.methods[c]);
                    s.l = e.loader, s.i = i, s.p = {
                        0: +new Date
                    }, s.P = function(e) {
                        s.p[e] = new Date - s.p[0]
                    }, t.addEventListener ? t.addEventListener(r, l, !1) : t.attachEvent("on" + r, l);
                    var u = function() {
                        function t(e) {
                            return e = "head", ["<", e, "></", e, "><", r, ' onload="var d=', y, ";d.getElementsByTagName('head')[0].", c, "(d.", p, "('script')).", d, "='", n, "//", s.l, "'", '"', "></", r, ">"].join("")
                        }
                        var r = "body",
                            i = a[r];
                        if (!i) return setTimeout(u, 100);
                        s.P(1);
                        var l, c = "appendChild",
                            p = "createElement",
                            d = "src",
                            m = a[p]("div"),
                            f = m[c](a[p](o)),
                            h = a[p]("iframe"),
                            y = "document",
                            g = "domain";
                        m.style.display = "none", i.insertBefore(m, i.firstChild).id = o, h.frameBorder = "0", h.id = o + "-loader", /MSIE[ ]+6/.test(navigator.userAgent) && (h.src = "javascript:false"), h.allowTransparency = "true", f[c](h);
                        try {
                            h.contentWindow[y].open()
                        } catch (v) {
                            e[g] = a[g], l = "javascript:var d=" + y + ".open();d.domain='" + a.domain + "';", h[d] = l + "void(0);"
                        }
                        try {
                            var b = h.contentWindow[y];
                            b.write(t()), b.close()
                        } catch (w) {
                            h[d] = l + 'd.write("' + t().replace(/"/g, String.fromCharCode(92) + '"') + '");d.close();'
                        }
                        s.P(2)
                    };
                    u()
                };
            i()
        }({
            loader: "static.olark.com/jsclient/loader0.js",
            name: "olark",
            methods: ["configure", "extend", "declare", "identify"]
        }), window.olark.identify(config.olarkAPIKey), window.olark && (window.olark("api.box.hide"), window.olark("api.chat.onOperatorsAway", function() {
            window.olark("api.box.hide"), e("#client-happiness-modal .modal-window").addClass("modal-window--small")
        }), window.olark("api.chat.onOperatorsAvailable", function() {
            window.olark("api.box.hide"), e(".client-happiness-content > .layout__item").each(function() {
                e(this).removeClass("u-1-of-1"), e(this).addClass("u-1-of-2")
            }), e(".ch-chat-section").css("display", "inline-block")
        })))
    });
    var t = function() {
            window.olark("api.box.show"), window.olark("api.box.expand"), window.olark("api.visitor.getDetails", function(e) {
                window.olark("api.chat.sendNotificationToOperator", {
                    body: "User has opened chat box!"
                }), window.olark("api.chat.sendNotificationToOperator", {
                    body: "OS: " + (e.operatingSystem || "Unknown")
                }), window.olark("api.chat.sendNotificationToOperator", {
                    body: "Browser: " + (e.browser || "Unknown")
                }), window.olark("api.chat.sendNotificationToOperator", {
                    body: "ip: " + (e.ip || "Unknown")
                }), window.olark("api.chat.sendNotificationToOperator", {
                    body: "Current page title: " + (e.currentPage.title || "Unknown")
                }), window.olark("api.chat.sendNotificationToOperator", {
                    body: "Current page url: " + (e.currentPage.url || "Unknown")
                }), window.olark("api.chat.sendNotificationToOperator", {
                    body: "Region: " + (e.region || "Unknown")
                })
            })
        },
        a = function(e) {
            window.location = "mailto:" + e
        };
    return {
        chatNow: function() {
            t()
        },
        emailUs: function(e) {
            a(e)
        }
    }
}(jQuery);
! function(e) {
    function t() {
        e(this).scrollTop() > 20 ? e(".delphi-header").addClass("scrolled") : e(".delphi-header").removeClass("scrolled")
    }

    function a() {
        u ? (e(this).text(p).removeClass("active"), c.removeClass("show-bio"), u = !1) : (e(this).text(d).addClass("active"), c.addClass("show-bio"), u = !0)
    }

    function n() {
        e(".show-card-details").css("max-height", 0).removeClass("show-card-details"), e(".delphi-card").removeClass("flip"), setTimeout(function() {
            e(".show-card-details").remove()
        }, 500), m = !1
    }

    function o(t) {
        t.preventDefault();
        var a = e(this);
        e("html, body").animate({
            scrollTop: a.offset().top - 200
        }, 2e3), a.attr("href") === f.attr("href") && m === !0 ? n() : (h.css("max-height", 0).removeClass("show-card-details"), e(".delphi-card").removeClass("flip"), a.addClass("flip"), s = b ? e(a.attr("href")).clone().insertAfter(a) : e(a.attr("href")).clone().insertAfter(a.parents(".cards-row")), setTimeout(function() {
            s.css("max-height", e(a.attr("href")).find(".content-wrapper").outerHeight(!0)), s.addClass("show-card-details")
        }, 100), setTimeout(function() {
            h.remove(), h = e(a.attr("href"))
        }, 500), f = a, m = !0)
    }

    function r() {
        e(".topic-card").eq(y).addClass("active").siblings().removeClass("active"), y === g - 1 ? w.hide() : w.show(), 0 === y ? k.hide() : k.show()
    }

    function i(t) {
        "next" === e(this).data("direction") ? y++ : y--, r()
    }

    function l(t) {
        return t.preventDefault(), "#" !== e(this).attr("href") && (e(this).blur(), void window.open(e(this).attr("href"), "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=700,height=300,top=200,left=" + (e(window).innerWidth() - 700) / 2))
    }
    var s, c = e("body"),
        u = !1,
        p = "But first, a letter from our Chief Data Officer",
        d = "Collapse",
        m = !1,
        f = e(),
        h = e(),
        y = 0,
        g = e(".topic-card").length,
        v = c.hasClass("page-template-delphi") || c.hasClass("page-template-delphi-in-life") || c.hasClass("page-template-delphi-in-practice"),
        b = e(window).width() < 768,
        w = e(".related-topic-pagi--next"),
        k = e(".related-topic-pagi--prev");
    e(function() {
        v && (e(".delphi-card").on("click", o), e("#toggle-bio").on("click", a), e(window).on("scroll", t), e("#js-rorating-initial").hide(), b || e("#js-rotating").Morphext({
            animation: "fadeIn",
            separator: ",",
            speed: 2e3,
            complete: function() {
                2 === this.index && this.stop()
            }
        })), c.hasClass("single-articles") && (e(".delphi-card").on("click", function(e) {
            e.preventDefault()
        }), e(".related-topic-pagi").on("click", i), e(window).on("scroll", t), e(".delphi-social-link").on("click", l), r())
    })
}(jQuery),
function(e, t) {
    function a() {
        e("body").scrollspy({
            target: "#disclosure-nav-container",
            offset: 130
        }), e("#disclosure-nav-container").affix({
            offset: {
                top: 130,
                bottom: function() {
                    return this.bottom = e(".site-footer").outerHeight(!0) + 150
                }
            }
        }), e(window).resize(function() {
            e("#disclosure-nav-container").affix("checkPosition")
        })
    }

    function n() {
        e(".disclosure-nav a").on("click", function(t) {
            t.preventDefault(), e(this).parent().addClass("active").siblings().removeClass("active"), scrollToElement(e(this).attr("href"), 80, 500)
        })
    }
    e(function() {
        e("body").hasClass("page-template-content-disclosure") && (a(), n())
    })
}(jQuery, earnest),
function(e) {
    function t() {
        e("body").scrollspy({
            target: "#eligibility-nav-container"
        }), e("#eligibility-nav-container").affix({
            offset: {
                top: 130,
                bottom: function() {
                    return this.bottom = e(".site-footer").outerHeight(!0) + e("#section-cross-product-links").outerHeight(!0) + e("#section-press-banner").outerHeight(!0) + 100
                }
            }
        }), e(window).resize(function() {
            e("#eligibility-nav-container").affix("checkPosition")
        })
    }
    e(".eligibility-nav a").on("click", function(t) {
        t.preventDefault(), e(this).parent().addClass("active").siblings().removeClass("active"), scrollToElement(e(this).attr("href"), 0, 500)
    }), e(function() {
        e("body").hasClass("page-template-content-eligibility") && t()
    })
}(jQuery),
function(e) {
    function t() {
        e("#employer-contact-cta").on("click", function(t) {
            t.preventDefault(), scrollToElement(e("#section-contact"), 100, 500)
        })
    }
    e(function() {
        e("body").hasClass("page-template-employer") && t()
    })
}(jQuery);
var estAnalytics = function(e) {
        var t = {
                source: "lcms"
            },
            a = function(e) {
                analytics.track(e, {
                    name: e,
                    type: "lcms CTA Click",
                    source: t.source
                })
            },
            n = function(e) {
                analytics.track("lcms Clicked CTA", {
                    name: e,
                    type: "lcms CTA Click",
                    source: t.source
                })
            },
            o = function(e) {
                analytics.track("Question Click", {
                    name: e,
                    type: "Question Click",
                    source: t.source
                })
            };
        e(document).ready(function() {
            e(".main-cta .primary-button").click(function() {
                n(e(this).text())
            }), e(".main-cta .cta-link").click(function() {
                var t = e(this);
                n(e(this).parent().prev().text() + " - " + t.text())
            }), e("#section-refinancing .cta-row a").click(function() {
                n(e(this).text())
            }), e("#site-navigation .get-rate a").click(function() {
                n(e(this).text())
            }), e(".information-cta a").click(function() {
                n(e(this).text())
            }), e("#student-loan-refinancing-page-container .main-cta a").click(function() {
                i("SLRGetRateCTA")
            }), e(".referral-cta").click(function() {
                n(e(this).text() + " - Referral CTA"), i("ReferralInciteClickedSLRGetRateCTA")
            }), e(".page-template-student-loan-refinancing").find(".nav-check-rate").click(function() {
                a("SLR-LPHeaderCTA")
            }), e(".page-template-student-loan-refinancing").find(".main-cta > a").click(function() {
                a("SLR-LPHeroCTA")
            }), e(".product-slr > .primary-button").click(function() {
                a("HomePage - SLR GetRateCTA-click")
            }), e(".product-parentslr > .primary-button").click(function() {
                a("HomePage - Parent SLR GetRateCTA-click")
            }), e(".product-pl > .primary-button").click(function() {
                a("HomePage - PL GetYouLoanCTA-click")
            }), e(".mort-cta > .primary-button").click(function() {
                a("MortPage - Mortgage GetYourRatesCTA-click")
            }), e(".mort-ch-cta > .primary-button").click(function() {
                a("MortPage - Mortgage GetInTouchCTA-click")
            }), e(".mort-email").click(function() {
                a("MortPage - Mortgage SendEmailCTA-click")
            }), e(".product-slr > .product-callout__buttons > a").click(function() {
                a("HomePage - SLR LearnMore-click")
            }), e(".product-parentslr > .product-callout__buttons > a").click(function() {
                a("HomePage - Parent SLR LearnMore-click")
            }), e(".product-pl > .product-callout__buttons > a").click(function() {
                a("HomePage - PL LearnMore-click")
            }), e(".question a").each(function() {
                e(this).click(function() {
                    var t = e.trim(e(this).text());
                    o(t)
                })
            }), e("[data-track]").click(function() {
                analytics.track("click", e(this).data("track"))
            })
        });
        var r = function(e, t) {
                analytics.track(e, t)
            },
            i = function(e) {
                var t = window.optimizely || [];
                t.push(["trackEvent", e])
            };
        return {
            segmentCTATrack: function(e) {
                n(e)
            },
            optimizelyService: function(e) {
                i(e)
            },
            track: function(e, t) {
                r(e, t)
            }
        }
    }(jQuery),
    estDaysToYears = function(e, t, a) {
        var n = a || 0,
            o = moment.duration(parseInt(e, 10), "days").asYears(),
            r = 0 === n ? Math.round(o) : o.toFixed(n);
        return formatPartOfSpeech(r, "year", t)
    },
    estDaysToMonths = function(e, t) {
        var a = Math.round(moment.duration(e, "days").asMonths());
        return formatPartOfSpeech(a, "month", t)
    },
    formSubmission = function(e, t) {
        this.email = e, this.formKey = t
    };
formSubmission.formKey = {
        CaptureSloData: "capture-slo-data",
        SlrLandingEmail: "slr-landing-email",
        iOSEmailLink: "email-ios-link",
        employers: "employers",
        partnershipSignup: "partnership-signup"
    }, $.validator.addMethod("customphone", function(e, t) {
        return this.optional(t) || /^\d{3}-\d{3}-\d{4}$/.test(e) || /^\d{10}$/.test(e)
    }, "Please enter a valid phone number"), formSubmission.prototype = function(e) {
        var t = function() {
                return e.ajax({
                    type: "POST",
                    url: config.baseApiUrl + "/public-forms/" + this.formKey,
                    data: {
                        email: this.email,
                        referrer: window.location.pathname
                    }
                })
            },
            a = function(t, a, n, o) {
                return e.ajax({
                    type: "POST",
                    url: config.baseApiUrl + "/public-forms/" + this.formKey,
                    data: {
                        name: t,
                        company: a,
                        title: n,
                        email: o,
                        referrer: window.location.pathname
                    }
                })
            },
            n = function(t, a, n, o, r, i, l) {
                return e.ajax({
                    type: "POST",
                    url: config.baseApiUrl + "/public-forms/" + this.formKey,
                    data: {
                        referrer: window.location.pathname,
                        partner_name: t,
                        partner_type: a,
                        name: n,
                        email: o,
                        phone: r,
                        product_type: i,
                        agreed_to_terms: l
                    }
                }).fail(function() {
                    alertMessage("Something went wrong, please contact us at hello@earnest.com")
                })
            };
        return {
            submit: t,
            employerSubmit: a,
            partnershipSignupSubmit: n
        }
    }(jQuery), jQuery(document).ready(function(e) {
        var t = e("#email-input");
        t.one("keypress", function() {
            e(".mobile-message").removeClass("error").html("")
        }), e("#est-email-form").submit(function(a) {
            var n = "estSlrLandingEmail",
                o = t.val(),
                r = /[^@]+@[^@]+\.[a-zA-Z]{2,}/;
            if (r.test(o)) {
                var i = new formSubmission(o, formSubmission.formKey.SlrLandingEmail);
                i.submit().then(function(e) {
                    Cookies.set(n, JSON.stringify({
                        email: o
                    })), window.location.href = constants.APP_URLS.checkRate
                })
            } else e(".mobile-message").addClass("error").html("Please enter your email address");
            a.preventDefault()
        }), e("#est-ios-email-form").submit(function(e) {
            var a = t.val(),
                n = new formSubmission(a, formSubmission.formKey.iOSEmailLink);
            n.submit().then(function(e) {
                t.val(""), window.location.href = "/apps?message=Email%20sent!"
            }), e.preventDefault()
        });
        var a = e("#est-employer-form");
        a && (a.validate({
            highlight: function(t) {
                e(t).parent("span").addClass("error")
            },
            unhighlight: function(t) {
                e(t).parent("span").removeClass("error")
            },
            errorPlacement: function(e, t) {
                return !0
            }
        }), a.submit(function(t) {
            var a = e("#employer-email").val(),
                n = e("#employer-company").val(),
                o = e("#employer-name").val(),
                r = e("#employer-title").val(),
                i = new formSubmission(a, formSubmission.formKey.employers);
            e(this).valid() && (t.preventDefault(), i.employerSubmit(o, n, r, a).then(function(e) {
                estAnalytics.track("employer page information requested", {
                    name: o,
                    company: n,
                    title: r,
                    email: a,
                    referrer: window.document.referrer
                }), window.location.href = window.document.referrer + "?message=Thanks!"
            }))
        }));
        var n = e("#est-partnership-signup-form");
        n && (n.validate({
            rules: {
                phone_number: "customphone"
            },
            highlight: function(t) {
                e(t).parent("span").addClass("error")
            },
            unhighlight: function(t) {
                e(t).parent("span").removeClass("error")
            },
            errorPlacement: function(e, t) {
                return !0
            }
        }), n.submit(function(t) {
            var a = e("#company-name").val(),
                n = e("#company-type").val(),
                o = e("#first-name").val(),
                r = e("#last-name").val(),
                i = o + " " + r,
                l = e("#contact-email").val(),
                s = e("#contact-phone-number").val(),
                c = "SLR",
                u = e("#tos-check").prop("checked"),
                p = new formSubmission(l, formSubmission.formKey.partnershipSignup);
            u || alertMessage("You need to agree to our Terms of Service before you can submit your partnership information."), e(this).valid() && (p.partnershipSignupSubmit(a, n, i, l, s, c, u).then(function(e) {
                estAnalytics.track("partnership signup page information requested", {
                    partner_name: a,
                    partner_type: n,
                    name: i,
                    email: l,
                    phone: s,
                    product_type: c,
                    agreed_to_terms: u,
                    referrer: window.document.referrer
                }), window.location.href = window.document.referrer + "?message=Thanks!"
            }), t.preventDefault())
        }))
    }),
    function(e) {
        e(".question").click(function(t) {
            t.preventDefault(), e(this).toggleClass("expanded")
        })
    }(jQuery);
var HomeMap = function() {
    var e, t = {};
    return t.init = function(e, a) {
        e = e || "94103", a = a || 11;
        var n = "",
            o = "",
            r = e,
            i = new google.maps.Geocoder;
        i.geocode({
            address: r
        }, function(e, i) {
            i === google.maps.GeocoderStatus.OK ? (n = e[0].geometry.location.lat(), o = e[0].geometry.location.lng(), t.displayMap(n, o, r, a)) : console.log("Geocode was not successful for the following reason: " + i)
        })
    }, t.displayMap = function(t, a, n, o) {
        e = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: t,
                lng: a
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: !0,
            zoom: o,
            draggable: !1,
            zoomControl: !1,
            scrollwheel: !1,
            disableDoubleClickZoom: !0,
            styles: [{
                gamma: .5
            }, {
                featureType: "poi",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#e9e9e9"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{
                    color: "#f7f7f7"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 29
                }, {
                    weight: .2
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 18
                }]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#f5f5f5"
                }, {
                    lightness: 21
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{
                    color: "#dedede"
                }, {
                    lightness: 21
                }]
            }, {
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                elementType: "labels.text.fill",
                stylers: [{
                    saturation: 36
                }, {
                    color: "#333333"
                }, {
                    lightness: 40
                }]
            }, {
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    color: "#f2f2f2"
                }, {
                    lightness: 19
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#fefefe"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#fefefe"
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }]
        });
        var r = new google.maps.FusionTablesLayer({
            query: {
                select: "geometry",
                from: "10hOgKiivcUlpXb6JddelyicWFJK7OFo9ke9d6Yh_",
                where: "name in (" + n + ")"
            },
            styles: [{
                polygonOptions: {
                    fillColor: "#76EEC4",
                    fillOpacity: .1,
                    strokeColor: "#76EEC4",
                    strokeOpacity: 1,
                    stokeWeight: 1
                }
            }],
            options: {
                suppressInfoWindows: !0
            }
        });
        r.setMap(e)
    }, t
}();
! function(e) {
    function t() {
        e("#how-it-works-nav a").each(function() {
            e(this).on("click", function(t) {
                t.preventDefault(), scrollToElement(e(this).attr("href"), 150, 500)
            })
        })
    }
    e(function() {
        e("body").hasClass("page-template-how-it-works") && t()
    })
}(jQuery);
var modal = function(e) {
    var t, a = function() {
            var a, n;
            a = Math.max(e(window).height() - t.outerHeight(), 0) / 2, n = Math.max(e(window).width() - t.outerWidth(), 0) / 2, e(window).width() <= 739 ? t.css({
                top: 5 + e(window).scrollTop(),
                left: n + e(window).scrollLeft()
            }) : t.css({
                top: a + e(window).scrollTop(),
                left: n + e(window).scrollLeft()
            })
        },
        n = function() {
            e("body").addClass("no-scroll"), a(), t.fadeIn("fast"), estAnalytics.track("Open " + t.data("name") + " Modal")
        },
        o = function() {
            t.fadeOut("fast"), e("body").removeClass("no-scroll"), estAnalytics.track("Close " + t.data("name") + " Modal"), t = null
        };
    e(".disclaimer-modal").click(function(o) {
        o.preventDefault();
        var r = e("#disclaimer-modal");
        r.data("name", "disclaimer"), t = r, n(), e(document).ready(function() {
            e(window).on("resize load", function() {
                a()
            })
        })
    }), e(".client-happiness-modal").click(function(o) {
        o.preventDefault();
        var r = e("#client-happiness-modal");
        r.data("name", "client-happiness"), t = r, n(), e(document).ready(function() {
            e(window).on("resize load", function() {
                a()
            })
        })
    }), e(".referral-invited-by-modal").click(function(o) {
        o.preventDefault();
        var r = e("#referral-invited-by-modal");
        r.data("name", "referral-invited-by"), t = r, n(), e(document).ready(function() {
            e(window).on("resize load", function() {
                a()
            })
        })
    }), e("#nav-get-started").click(function(o) {
        o.preventDefault();
        var r = e("#get-started-modal");
        r.data("name", "get-started"), t = r, n(), e(document).ready(function() {
            e(window).on("resize load", function() {
                a()
            })
        })
    }), e("#open-ebook-modal").click(function(o) {
        o.preventDefault();
        var r = e("#ebook-modal");
        r.data("name", "get-started"), t = r, n(), e(document).ready(function() {
            e(window).on("resize load", function() {
                a()
            })
        })
    });
    var r = function(o, r) {
        var i = e("#referral-invited-by-modal");
        if (i.find(".referral-name").text(o), r) {
            var l = Math.floor(r / 100);
            i.find(".referral-bonus").html(l)
        }
        i.data("name", "referral-invited-by"), t = i, n(), e(document).ready(function() {
            e(window).on("resize load", function() {
                a()
            })
        })
    };
    e(".overlay").click(function(t) {
        e(this).hasClass("locked") || o()
    }), e(".close-button").click(function(e) {
        o()
    }), e(document).ready(function() {
        var t = "user_referrals",
            a = {
                path: "/",
                domain: "localhost" !== config.cookieDomain && "127.0.0.1" !== config.cookieDomain && "0.0.0.0" !== config.cookieDomain ? config.cookieDomain || ".earnest.com" : null,
                expires: new Date(2020, 0, 1),
                secure: !0
            },
            n = Cookies.getJSON(t);
        n && (n.hasBeenDisplayed || (n.hasBeenDisplayed = !0, estAnalytics.optimizelyService("ReferredModalOpened"), Cookies.set(t, JSON.stringify(n), a), r(n.referrer_name, n.referee_bonus))), e("#ebook-form").on("submit", function(t) {
            t.preventDefault(), e.ajax({
                url: config.baseApiUrl + "/public-forms/email-ebook-link",
                data: e(this).serialize(),
                type: "POST"
            }).done(function(t) {
                e(".alert-message").text("Success. Check your inbox to download your Earnest guide."), e(".page-alert-layer").addClass("success").fadeIn(), setTimeout(function() {
                    e(".page-alert-layer").fadeOut().removeClass("success")
                }, constants.UI_CONSTANTS.alertTimeout), o()
            }).fail(function() {
                o(), e(".alert-message").text("Something went wrong. Try again in a couple minutes."), e(".page-alert-layer").fadeIn(), setTimeout(function() {
                    e(".page-alert-layer").fadeOut()
                }, constants.UI_CONSTANTS.alertTimeout)
            })
        })
    })
}(jQuery);
! function(e) {
    var t = !1;
    e(window).scroll(function() {
        e(this).scrollTop() > 20 ? e("#masthead").addClass("scrolled") : e("#masthead").removeClass("scrolled")
    }), e(".menu-toggle").click(function() {
        t ? (e("body").removeClass("mobile-menu-open"), setTimeout(function() {
            e("body").removeClass("mobile-menu-visible")
        }, 500), t = !1) : (e("body").addClass("mobile-menu-open mobile-menu-visible"), t = !0)
    }), e("#mobile-overlay").click(function() {
        e("body").removeClass("mobile-menu-open"), setTimeout(function() {
            e("body").removeClass("mobile-menu-visible")
        }, 500), t = !1
    }), e(".footer-nav-heading>a").on("click", function(e) {
        e.preventDefault()
    })
}(jQuery),
function(e) {
    function t(e) {
        return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(e)
    }
    var a = e("#subscribe-home-email"),
        n = e(".subscribe-success"),
        o = function(t) {
            e.ajax({
                type: "POST",
                url: config.baseApiUrl + "/exact-target/add_email_to_newsletter",
                data: {
                    emailAddress: t
                }
            })
        },
        r = function() {
            t(a.val()) ? (a.removeClass("error"), i({
                email: a.val()
            }), a.val("")) : a.addClass("error")
        },
        i = function(t) {
            o(t.email), analytics.identify({
                email: t.email,
                "Subscriber list": "true"
            }), analytics.track("Signed Up", {
                type: "Newsletter",
                source: "Delphi"
            }), n.show(function() {
                setTimeout(function() {
                    n.hide("slow")
                }, 1e4)
            }), e(".subscribe").off().addClass("disabled"), e(".subscribe").off().attr("disabled", "disabled")
        };
    e("#subscribe-home").off().on("click", r), a.on("keyup", function(e) {
        13 === e.keyCode && r()
    })
}(jQuery),
function(e) {
    e(document).ready(function() {
        var t = getQueryStringValue("message"),
            a = e(".page-alert-layer");
        t && (a.find(".alert-message").text(t), a.addClass("success"), a.fadeIn(), setTimeout(function() {
            a.fadeOut()
        }, constants.UI_CONSTANTS.alertTimeout)), e(".page-alert-layer .close").click(function() {
            a.fadeOut()
        })
    })
}(jQuery),
function(e) {
    function t() {
        e(".view-all-press").on("click", function(t) {
            t.preventDefault(), e(".contact-table").find("tr").toggleClass("view-all"), e(this).find("i").toggleClass("clicked"), e(this).find("i").hasClass("clicked") || scrollToElement(e("#all_press"), 300, 500)
        })
    }

    function a() {
        e("#press-nav a").each(function() {
            e(this).on("click", function(t) {
                t.preventDefault(), scrollToElement(e(this).attr("href"), 50, 500)
            })
        })
    }

    function n() {
        var t = e(".brand-container__image").height();
        e(".brand-container__image img").each(function() {
            var a = e(this).height(),
                n = (t - a) / 2;
            e(this).css("margin-top", n)
        })
    }
    e(function() {
        e("body").hasClass("page-template-press") && (t(), a(), n())
    })
}(jQuery),
function() {
    var e = navigator.userAgent.toLowerCase().indexOf("webkit") > -1,
        t = navigator.userAgent.toLowerCase().indexOf("opera") > -1,
        a = navigator.userAgent.toLowerCase().indexOf("msie") > -1;
    (e || t || a) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function() {
        var e, t = location.hash.substring(1);
        /^[A-z0-9_-]+$/.test(t) && (e = document.getElementById(t), e && (/^(?:a|select|input|button|textarea)$/i.test(e.tagName) || (e.tabIndex = -1), e.focus()))
    }, !1)
}(),
function(e, t) {
    function a() {
        this.calculatorInputs = {}, this.loans = {
            originalLoan: {},
            newLoan: {}
        }
    }
    a.prototype.init = function() {
        var e = this;
        this.calculatorInputs = new t.calculatorInputs,
            this.calculatorInputs.init(), this.loans.originalLoan = t.MarketingLoanCalc.createLoan(), this.loans.newLoan = t.MarketingLoanCalc.createLoan(), e.calculatorInputs.loadTemplate("#resultsTemplate", e.loans, "#resultsTarget"), e.bindEvents()
    }, a.prototype.bindEvents = function() {
        var t = this,
            a = t.calculatorInputs.calcButton,
            n = t.calculatorInputs.allInputs,
            o = t.calculatorInputs.paymentTermInput,
            r = t.calculatorInputs.aprInput;
        a.bind("click", function(n) {
            return a.hasClass("calculator-button--original-loan") ? (estAnalytics.segmentCTATrack("Student Loan Calculator - Add Loan Clicked"), t.originalLoanEndStep(), e(this).addClass("calculator-button--calculate").html("Calculate"), void r.focus()) : void(a.hasClass("calculator-button--calculate") && (estAnalytics.segmentCTATrack("Student Loan Calculator - Calculate Clicked"), t.refiLoanEndStep()))
        }), e('input[name="payment-term"]').change(function() {
            o.val(""), a.prop("disabled", !0), t.calculatorInputs.paymentTermPlaceholderSwap()
        }), n.bind("keyup blur", function(e) {
            t.calculatorInputs.validateInputValues(t.calculatorInputs) ? (a.prop("disabled", !1), 13 === e.which && (r.focus(), a.click())) : a.prop("disabled", !0)
        })
    }, a.prototype.originalLoanEndStep = function() {
        var a = this;
        if (!this.calculatorInputs.validateInputValues(a.calculatorInputs)) return void this.calculatorInputs.displayErrors(!0, this.calculatorInputs.ERROR_MESSAGES.required);
        this.calculatorInputs.displayErrors(!1), this.calculatorInputs.getInputValues(a.loans.originalLoan);
        var o = t.MarketingLoanCalc.calculateLoan(a.loans.originalLoan);
        if (a.$orignalPaymentTermChecked = e('input:radio[name="payment-term"]:checked'), !o) {
            var i = "payment" === a.$orignalPaymentTermChecked.val() ? this.calculatorInputs.ERROR_MESSAGES.invalidPayment : this.calculatorInputs.ERROR_MESSAGES.invalidTerm;
            return void this.calculatorInputs.displayErrors(!0, i)
        }
        a.loans.originalLoan = o, a.calculatorInputs.loadHeaderTemplate("#refi", "#header"), a.$loanBalanceContainer = e("#loan-balance-container"), a.$loanBalanceContainer.hide(), a.calculatorInputs.loadTemplate("#resultsTemplate", a.loans, "#resultsTarget"), n("right"), r(".calculation-block__graph--left", "2%"), r(".calculation-block__graph--left-overlay", "2%"), r(".calculation-block__graph--right", "100%"), r(".calculation-block__graph--right-overlay", percent(a.loans.originalLoan.principal_percent)), a.$editButton = e(".edit--original-loan"), a.paymentTermSelected = a.$orignalPaymentTermChecked.val(), a.calculatorInputs.aprInput.val(""), a.calculatorInputs.paymentTermInput.val(""), a.calculatorInputs.calcButton.removeClass("calculator-button--original-loan"), a.$editButton.css("display", "inline-block"), a.$aprLayout = e("#apr-container"), a.$aprLayout.removeClass("u-1-of-2-lap").addClass("u-1-of-1-lap"), a.calculatorInputs.calcButton.prop("disabled", !0), e('input:radio[value="term"]').prop("checked", !0), a.calculatorInputs.paymentTermPlaceholderSwap(), e(".edit--original-loan").click(function() {
            a.resetLoanSteps(), a.calculatorInputs.loanBalanceInput.focus()
        })
    }, a.prototype.refiLoanEndStep = function() {
        var a = this;
        if (!a.calculatorInputs.validateInputValues(a.calculatorInputs)) return void a.calculatorInputs.displayErrors(!0, a.calculatorInputs.ERROR_MESSAGES.required);
        a.calculatorInputs.displayErrors(!1), a.calculatorInputs.getInputValues(a.loans.newLoan);
        var o = t.MarketingLoanCalc.calculateLoan(a.loans.newLoan);
        if (a.$orignalPaymentTermChecked = e('input:radio[name="payment-term"]:checked'), !o) {
            var r = "payment" === a.$orignalPaymentTermChecked.val() ? a.calculatorInputs.ERROR_MESSAGES.invalidPayment : a.calculatorInputs.ERROR_MESSAGES.invalidTerm;
            return void a.calculatorInputs.displayErrors(!0, r)
        }
        a.loans.newLoan = o, a.calculatorInputs.loadTemplate("#resultsTemplate", a.loans, "#resultsTarget"), e("#copy").hide(), a.calculatorInputs.loadCompareTemplate("#savingsTemplate", a.calculateSavings(), "#savingsDeskLapTarget"), a.calculatorInputs.loadCompareTemplate("#savingsTemplate", a.calculateSavings(), "#savingsPalmTarget"), e("#savings--non-palm, #savings--palm").css("display", "inline-block"), a.fillInGraph(), n("left"), n("right"), isMobileBrowser() && e("html, body").animate({
            scrollTop: e("#savingsPalmTarget").offset().top - 46
        }, 1e3)
    }, a.prototype.resetLoanSteps = function() {
        var t = this;
        t.$editButton.hide(), t.$loanBalanceContainer.show(), t.$aprLayout.removeClass("u-1-of-1-lap").addClass("u-1-of-2-lap"), t.calculatorInputs.aprInput.val(t.loans.originalLoan.interest_rate / 100), e('input:radio[value="' + t.paymentTermSelected + '"]').prop("checked", !0), t.calculatorInputs.paymentTermPlaceholderSwap(), "payment" === t.paymentTermSelected && t.calculatorInputs.paymentTermInput.val(t.loans.originalLoan.payment_amount / 100), "term" === t.paymentTermSelected && t.calculatorInputs.paymentTermInput.val(t.loans.originalLoan.number_of_payments), t.calculatorInputs.loadHeaderTemplate("#start", "#header"), t.calculatorInputs.calcButton.prop("disabled", !1), t.calculatorInputs.calcButton.removeClass(".calculator-button--calculate").addClass("calculator-button--original-loan").html("Add Loan")
    }, a.prototype.calculateSavings = function() {
        var e = this,
            t = {};
        return t.total_savingsOrLosses = e.loans.originalLoan.total_cost - e.loans.newLoan.total_cost, t.show = t.total_savingsOrLosses > 0 ? "loan-results__saving--show" : "loan-results__loss--show", t.whole_dollar = formatCurrency(Math.abs(t.total_savingsOrLosses)).split(".")[0], t.cents = (t.total_savingsOrLosses / 100).toFixed(2).toString().split(".")[1], t
    }, a.prototype.fillInGraph = function() {
        var t = this,
            a = e(".results-block--principal");
        o(a, t.loans.originalLoan.total_cost, t.loans.newLoan.total_cost);
        var n = Math.min(t.loans.originalLoan.principal_percent, t.loans.newLoan.principal_percent),
            i = a.find(".calculation-block__graph--left-overlay"),
            l = a.find(".calculation-block__graph--right-overlay");
        r(i, percent(n)), r(l, percent(n));
        var s = e(".results-block--total-interest");
        o(s, t.loans.originalLoan.total_cost - t.loans.originalLoan.amount_to_be_financed, t.loans.newLoan.total_cost - t.loans.newLoan.amount_to_be_financed);
        var c = e(".results-block--apr");
        o(c, t.loans.originalLoan.interest_rate, t.loans.newLoan.interest_rate);
        var u = e(".results-block--monthly-payment");
        o(u, t.loans.originalLoan.payment_amount, t.loans.newLoan.payment_amount);
        var p = e(".results-block--payoff-date");
        o(p, t.loans.originalLoan.number_of_payments, t.loans.newLoan.number_of_payments)
    };
    var n = function(t) {
            e(".calculation-block--" + t).addClass("calculation-block--active"), e(".calculation-block--center").addClass("calculation-block--active"), e(".calculation-block__graph--" + t).addClass("calculation-block__graph--active")
        },
        o = function(e, a, n, o) {
            var i = e.find(".calculation-block__graph--left"),
                l = e.find(".calculation-block__graph--right"),
                s = 1e4;
            a === n && (i.css({
                height: percent(s)
            }), l.css({
                height: percent(s)
            }));
            var c = t.MarketingLoanCalc.calculatePercentDifference(a, n),
                u = c < s - 1e3 ? s - c : 1e3;
            o && o > 0 && (u = Math.round(u / Math.round(s / o)) + o), a > n && (r(i, percent(u)), r(l, percent(s))), n > a && (r(i, percent(s)), r(l, percent(u)))
        },
        r = function(t, a) {
            e(t).height(0), e(t).animate({
                height: a
            }, 500)
        };
    e(document).ready(function() {
        if (e("body").hasClass("page-template-student-loan-calculator")) {
            var t = new a;
            t.init()
        }
    })
}(jQuery, earnest),
function(e, t) {
    function a() {
        this.loans = [], this.calcInputs = {}, this.$calcButton, this.$paymentTermInput, this.$allInputs, this.$aprInput, this.$seeResultsButton = e("#results-button"), this.tempLoan = {}, this.exampleLoans = []
    }
    a.prototype.init = function() {
        var e = this;
        this.calcInputs = new t.calculatorInputs, this.calcInputs.init(), i(), this.$calcButton = e.calcInputs.calcButton, this.$paymentTermInput = e.calcInputs.paymentTermInput, this.$allInputs = e.calcInputs.allInputs, this.$aprInput = e.calcInputs.aprInput, e.calcInputs.loadHeaderTemplate("#titleTemplate", "#titleTarget"), e.createExampleLoanList(), e.bindEvents()
    }, a.prototype.bindEvents = function() {
        var t = this;
        t.$calcButton.bind("click", function(e) {
            t.addLoan(), estAnalytics.segmentCTATrack("Student Loan Consolidation Calculator - Add Loan Clicked"), o()
        }), e('input[name="payment-term"]').change(function() {
            t.$paymentTermInput.val(""), t.$calcButton.prop("disabled", !0), t.calcInputs.paymentTermPlaceholderSwap()
        }), t.$allInputs.bind("keyup blur", function(e) {
            t.calcInputs.validateInputValues(t.calcInputs) ? (t.$calcButton.prop("disabled", !1), 13 === e.which && (t.$aprInput.focus(), t.$calcButton.click())) : t.$calcButton.prop("disabled", !0)
        }), t.$seeResultsButton.bind("click", function() {
            scrollToElement(e(".student-loan-calculation-block-consolidation"), 100, 500)
        })
    }, a.prototype.addLoan = function() {
        var a = this;
        if (!a.calcInputs.validateInputValues(a.calcInputs)) return void a.calcInputs.displayErrors(!0, a.calcInputs.ERROR_MESSAGES.required);
        a.calcInputs.displayErrors(!1);
        var n = t.MarketingLoanCalc.createLoan();
        a.calcInputs.getInputValues(n);
        var o = t.MarketingLoanCalc.calculateLoan(n);
        if (a.$orignalPaymentTermChecked = e('input:radio[name="payment-term"]:checked'), !o) {
            var r = "payment" === a.$orignalPaymentTermChecked.val() ? a.calcInputs.ERROR_MESSAGES.invalidPayment : a.calcInputs.ERROR_MESSAGES.invalidTerm;
            return void a.calcInputs.displayErrors(!0, r)
        }
        a.loans.push(n), a.$allInputs.val(""), a.$calcButton.prop("disabled", !0), a.buildLoansTemplate();
        var i = t.MarketingLoanCalc.calculateWeightedLoanAverage(a.loans);
        a.calcInputs.loadTemplate("#newLoanInfoTarget", i, "#newLoanInfoTarget"), a.loanAverageUI(a.loans), a.calcInputs.loanBalanceInput.focus()
    }, a.prototype.bindRemoveLoan = function() {
        var t = this;
        e(".remove_loan").each(function() {
            e(this).bind("click", function() {
                var a = e(this).data("index");
                t.loans.splice(a, 1), t.buildLoansTemplate(), t.loanAverageUI(t.loans), 0 === t.loans.length && (t.calcInputs.loadTemplate("#loansTemplate", t.exampleLoans, "#loansTarget"), r())
            })
        })
    }, a.prototype.buildLoansTemplate = function() {
        var e = this;
        e.calcInputs.loadTemplate("#loansTemplate", e.loans, "#loansTarget"), e.bindRemoveLoan()
    }, a.prototype.createExampleLoanList = function() {
        var e = this,
            a = [];
        e.tempLoan = t.MarketingLoanCalc.createLoan(), e.tempLoan.total_cost = 0, e.tempLoan.interest_percent = 0, e.tempLoan.principal_percent = 0, e.tempLoan.final_payment_due = moment(), e.tempLoan.payment_amount = 0, e.tempLoan.total_interest = 0, e.tempLoan.weighted_average_interest = 0, e.exampleLoans.push(e.tempLoan), e.calcInputs.loadTemplate("#loansTemplate", e.exampleLoans, "#loansTarget"), e.loanAverageUI(a)
    }, a.prototype.loanAverageUI = function(e) {
        var a = this,
            r = t.MarketingLoanCalc.calculateWeightedLoanAverage(e);
        a.calcInputs.loadTemplate("#barLabelTemplate", r, "#barLabelTarget"), a.calcInputs.loadTemplate("#newLoanInfoTemplate", r, "#newLoanInfoTarget"), a.calcInputs.loadTemplate("#totalTemplate", r, "#totalTarget"), 0 !== a.loans.length && o(), n(r.principal_percent)
    };
    var n = function(t) {
            var a = e(".graph--fill");
            a.css({
                transition: "width 1.5s cubic-bezier(0.42,0,0.58,1)",
                width: t / 100 + "%"
            })
        },
        o = function() {
            e(".loan-info").addClass("loan-info--active").removeClass("loan-info--inactive")
        },
        r = function() {
            e(".loan-info").addClass("loan-info--inactive").removeClass("loan-info--active")
        },
        i = function() {
            e("#copy, #inputs").removeClass("u-1-of-2-lap").addClass("u-1-of-1-lap"), e("#loan-balance-container, #apr-container").removeClass("u-1-of-2-lap").addClass("u-3-of-12-lap"), e("#payment-term-container").removeClass("u-1-of-1-lap").addClass("u-4-of-12-lap"), e("#button-container").removeClass("u-1-of-1-lap").addClass("u-2-of-12-lap"), e("#button-container > #calculator-button").html('<span class="hide-on-mobile hide-on-desktop">+</span><span class="hide-on-tablet">Add</span> Loan'), e("#label-payment").html('<span class="hide-on-tablet">Min. </span>Monthly Payment'), e("#label-term").html('<span class="hide-on-tablet">Remaining </span>term')
        };
    e(document).ready(function() {
        if (e("body").hasClass("page-template-student-loan-consolidation-calculator")) {
            var t = new a;
            t.init()
        }
    })
}(jQuery, earnest);
