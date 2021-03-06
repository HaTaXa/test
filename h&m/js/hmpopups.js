/*! Help & Manual Advanced JavaScript Popups
For Help & Manual Premium Pack Version 2.71
Copyright (c) 2008-2015 by Tim Green
All Rights Reserved */
var popCfg = {};
var hpop = {};
var hmParams = "";
var scrBar = false;
function hmpopScrListen(g) {
	g.preventDefault();
	var a = parseInt($("#hmpopupdiv").css("borderWidth"), 10);
	var h = $("#hmpopupdiv").offset();
	var f = $("#hmpopupdiv").outerWidth() - (20 + a);
	var b = $("#hmpopupdiv").outerHeight() - (20 + a);
	var d = g.pageX - h.left;
	var c = g.pageY - h.top;
	if (d > f || c > b) {
		scrBar = true;
		$("#hmpopupdiv").css("cursor", "auto");
	} else {
		scrBar = false;
		$("#hmpopupdiv").css("cursor", "move");
	}
}
function rgbHex(b) {
	if (b.substr(0, 1) === "#") {
		return b;
	}
	var e = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(b);
	var f = parseInt(e[2]);
	var d = parseInt(e[3]);
	var a = parseInt(e[4]);
	var c = a | (d << 8) | (f << 16);
	return e[1] + "#" + c.toString(16);
}
function traperror() {
	return true;
}
$(document).ready(function () {
	if (
		$("a.popuplink").length > 0 ||
		$("input[onclick^='return hmshowPopup']").length > 0 ||
		$("area[href^='javascript:void(0)']").length > 0
	) {
		$("body").append('<div id="hmpopupdiv" />');
		$("div#hmpopupdiv").css({
			visibility: "hidden",
			display: "block",
			width: "auto",
			overflow: "auto",
		});
		hpop.ua = navigator.userAgent.toLowerCase();
		hpop.dom = document.getElementById ? true : false;
		hpop.ie4 = document.all && !hpop.dom ? true : false;
		hpop.ie5_5 =
			hpop.ua.indexOf("msie 5.5") >= 0 && hpop.ua.indexOf("opera") < 0
				? true
				: false;
		hpop.ie6 =
			hpop.ua.indexOf("msie 6") >= 0 && hpop.ua.indexOf("opera") < 0
				? true
				: false;
		hpop.ns4 = document.layers && !hpop.dom ? true : false;
		hpop.ie9 =
			(hpop.ua.indexOf("msie 9") >= 0 || hpop.ua.indexOf("msie 10") >= 0) &&
			hpop.ua.indexOf("opera") < 0;
		hpop.is_ie = hpop.ua.indexOf("msie") >= 0 && hpop.ua.indexOf("opera") < 0;
		hpop.is_webkit = hpop.ua.indexOf("webkit") > 0;
		hpop.iequirks =
			hpop.is_ie && document.compatMode.toLowerCase() == "backcompat";
		hpop.is_ff =
			hpop.ua.indexOf("firefox") >= 0 &&
			!hpop.is_ie &&
			hpop.ua.indexOf("opera") < 0;
		hpop.is_chm = location.href.search("::") >= 0;
		hpop.is_ns = document.getElementById("innerdiv") ? true : false;
		hpop.offsxy = 6;
		hpop.isvideo = false;
		hpop.smallPopup = false;
		hpop.bdDrag = false;
		hpop.reSize = "nw-resize";
		hpop.ewResize = !hpop.is_ie && !hpop.is_chm ? "ew-resize" : "e-resize";
		hpop.nsResize = !hpop.is_ie && !hpop.is_chm ? "ns-resize" : "s-resize";
		hpop.popclick = false;
		if (!hpop.ie4 && !hpop.ie5_5 && !hpop.ns4) {
			hmshowPopup = function (e, d, f) {
				hmNewPopup(e, d, f);
			};
			popCfg.bWidth = parseInt(
				$("div#hmpopupdiv").css("border-left-width"),
				10
			);
			popCfg.pPadding = parseInt($("div#hmpopupdiv").css("paddingTop"), 10);
			popCfg.pbgColor = rgbHex($("div#hmpopupdiv").css("background-color"));
			popCfg.bdColor = rgbHex(
				$("div#hmpopupdiv").css("border-left-color")
			).replace("#", "");
			popCfg.smallDim = window.hmPopSmallDim;
			popCfg.killVideo = window.hmPopKillVideo;
			if (hpop.is_chm) {
				window.onerror = traperror;
			}
		}
	}
});
function hmNewPopup(T, f, x) {
	var p = function (Z) {
		var W = false;
		var Y = !hpop.is_ie ? Z.target : event.srcElement;
		var X = $(window).width(),
			aa = $(window).height();
		if (!hpop.is_ie || (hpop.is_ie && hpop.is_ns)) {
			X = X - 20;
			aa = aa - 20;
		}
		var V = Y.id;
		do {
			V = Y.id;
			if (V && V == "hmpopupdiv") {
				W = true;
			}
			Y = Y.parentNode;
		} while (V !== "hmpopupdiv" && Y.parentNode);
		if (W) {
			return false;
		} else {
			if (Z.clientX > X || Z.clientY > aa || hpop.bdDrag) {
				return false;
			}
			z(true);
			return false;
		}
	};
	$("div#hmpopupdiv, #vidbg").stop(false, true);
	z(false);
	$("#vidbg").remove();
	var K = {};
	var h = false;
	var D = false;
	var U = false;
	var Q = false;
	var I = 0;
	var G = 0;
	var m = 0;
	var v = 0;
	var d = 0;
	var j = 0;
	var J = 0;
	var O = 0;
	var o = popCfg.bWidth;
	var y = popCfg.pPadding;
	var u = popCfg.pbgColor;
	var c = popCfg.bdColor;
	var w;
	var F;
	var L;
	var b;
	var s;
	var r;
	var i;
	var t = window.hmpBShadow;
	var P = popCfg.smallDim ? popCfg.smallDim : 500;
	if (P < 500) {
		P = 500;
	}
	function a(e) {
		return e.toString(16);
	}
	function A(e) {
		return parseInt(e, 16);
	}
	function C(e) {
		return e.length == 1 ? "0" + e : e;
	}
	function S(e) {
		return e > 240 ? 240 : e < 0 ? 0 : e;
	}
	function B(e) {
		var W, V, X;
		W = C(a(S(e + w)));
		V = C(a(S(e + F)));
		X = C(a(S(e + L)));
		return "#" + W + V + X;
	}
	if (!t) {
		r = b = i = s = "#" + a(c);
	} else {
		w = A(c.substring(0, 2));
		F = A(c.substring(2, 4));
		L = A(c.substring(4, 6));
		r = B(0);
		s = B(20);
		b = B(180);
		i = B(180);
	}
	hpop.isvideo = /<object[\s\S]*?(\.swf|\.flv|\.avi|\.mpg|\.mov|\.ram|\.mp4|\.mkv|\.m4v|\.wmv|\.divx|\.dvr-ms|\.f4v|\.fli|\.m2p|\.mpeg|\.mpeg4|\.ogm|\.ogv|\.ogx|\.xvid)[\s\S]*?<\/object>/im.test(
		f
	);
	if (hpop.ie6) {
		f =
			'<table border="0" cellpadding="0" cellspacing="0"><tr><td valign="top">' +
			f +
			"</td></tr></table>";
	}
	var R = $("div#hmpopupdiv");
	$(R).html(f);
	E(T);
	function n(X) {
		var W = !hpop.is_ie ? X.clientX - I : event.clientX - I;
		var V = !hpop.is_ie ? X.clientY - G : event.clientY - G;
		if (h) {
			K.style.left = m + W + "px";
			K.style.top = v + V + "px";
			if (hpop.is_ie) {
				K.style.zoom = "1";
				K.style.filter = "alpha(opacity=40)";
			} else {
				K.style.opacity = "0.4";
			}
			q();
			return false;
		}
	}
	function N(X) {
		var W = !hpop.is_ie ? X.clientX - I : event.clientX - I;
		var V = !hpop.is_ie ? X.clientY - G : event.clientY - G;
		if (D) {
			if (
				J + W > 130 &&
				(hpop.reSize == "nw-resize" || hpop.reSize == hpop.ewResize)
			) {
				K.style.width = J + W + "px";
			}
			if (
				O + V > 70 &&
				(hpop.reSize == "nw-resize" || hpop.reSize == hpop.nsResize)
			) {
				K.style.height = O + V + "px";
			}
			$("body").css("cursor", hpop.reSize);
			K.style.overflow = "hidden";
			q();
			return false;
		}
	}
	function M(Y) {
		var W = !hpop.is_ie ? Y.target : event.srcElement;
		var V = W.id;
		if (V != "hmpopupdiv") {
			for (
				var X = W;
				(X.id == "hmpopupdiv" || !X.id) && X.parentNode;
				X = X.parentNode
			) {
				V = X.id;
				if (V == "hmpopupdiv") {
					break;
				}
			}
		}
		if (hpop.bdDrag && !hpop.isvideo) {
			k(document.body, true);
			D = true;
			hpop.reSize = $("body").css("cursor");
			I = !hpop.is_ie ? Y.clientX : event.clientX;
			G = !hpop.is_ie ? Y.clientY : event.clientY;
			J = parseInt(K.style.width, 10);
			O = parseInt(K.style.height, 10);
			H(document, "mousemove", N);
			return false;
		}
		if (V == "hmpopupdiv" && !scrBar && !hpop.isvideo) {
			k(document.body, true);
			h = true;
			m = parseInt(K.style.left, 10);
			v = parseInt(K.style.top, 10);
			I = !hpop.is_ie ? Y.clientX : event.clientX;
			G = !hpop.is_ie ? Y.clientY : event.clientY;
			if (
				(I - $(K).position().left < $(K).width() - 14 ||
					K.clientHeight >= K.scrollHeight) &&
				(G - $(K).position().top < $(K).height() - 14 ||
					K.clientWidth >= K.scrollWidth)
			) {
				H(document, "mousemove", n);
			}
			return false;
		}
	}
	function l() {
		if (h) {
			h = false;
			scrBar = false;
			if (hpop.is_ie) {
				K.style.removeAttribute("filter");
				K.style.removeAttribute("zoom");
			} else {
				K.style.opacity = "1.0";
			}
			g(document, "mousemove", n);
			k(document.body, false);
		} else {
			if (D) {
				D = false;
				g(document, "mousemove", N);
				k(document.body, false);
				K.style.overflow = "auto";
			}
		}
		return false;
	}
	function H(W, V, e) {
		if (W.attachEvent) {
			W["e" + V + e] = e;
			W[V + e] = function () {
				W["e" + V + e](window.event);
			};
			W.attachEvent("on" + V, W[V + e]);
		} else {
			W.addEventListener(V, e, false);
		}
	}
	function g(W, V, e) {
		if (W.detachEvent) {
			W.detachEvent("on" + V, W[V + e]);
			W[V + e] = null;
			W["e" + V + e] = null;
		} else {
			W.removeEventListener(V, e, false);
		}
	}
	function q() {
		if (window.getSelection) {
			window.getSelection().removeAllRanges();
		} else {
			if (document.selection) {
				document.selection.empty();
			}
		}
		return false;
	}
	function k(e, V) {
		function W() {
			return false;
		}
		if (V) {
			if (hpop.is_ie) {
				H(e, "selectstart", W);
			} else {
				if (typeof e.style.MozUserSelect != "undefined") {
					e.style.MozUserSelect = "none";
				} else {
					H(e, "mousedown", W);
				}
			}
		} else {
			if (hpop.is_ie) {
				g(e, "selectstart", W);
			} else {
				if (typeof e.style.MozUserSelect != "undefined") {
					e.style.MozUserSelect = "elements";
				} else {
					g(e, "mousedown", W);
				}
			}
		}
	}
	function E(Z) {
		U = false;
		K = document.getElementById("hmpopupdiv");
		Z = Z ? Z : window.event;
		var ac = Z.clientX;
		var ab = Z.clientY;
		var Y = $("body").scrollLeft();
		var W = $("body").scrollTop();
		var ad = $(window).width();
		var aa = $(window).height();
		var X = $(K).outerWidth();
		var V = $(K).outerHeight();
		K.style.padding = y + "px";
		K.style.borderColor = b + " " + s + " " + r + " " + i;
		K.style.left = "0px";
		K.style.top = "0px";
		if (!hpop.iequirks) {
			$(K).css({ height: $(K).height() + "px", width: $(K).width() + "px" });
		} else {
			$(K).css({
				height: $(K).outerHeight() + "px",
				width: $(K).outerWidth() + "px",
			});
		}
		V = $(K).outerHeight();
		X = $(K).outerWidth();
		if (!hpop.isvideo) {
			if (X > Math.round(ad * 0.9)) {
				K.style.width = hpop.iequirks
					? Math.round(ad * 0.9) + "px"
					: Math.round(ad * 0.9) - (2 * o + 2 * y) + "px";
				X = $(K).outerWidth();
			}
			if (V > Math.round(aa * 0.9)) {
				K.style.height = hpop.iequirks
					? Math.round(aa * 0.9) + "px"
					: Math.round(aa * 0.9) - (2 * o + 2 * y) + "px";
				V = $(K).outerHeight();
			} else {
				if (K.scrollHeight > K.clientHeight) {
					if (!hpop.iequirks) {
						K.style.height =
							$(K).height() + (K.scrollHeight - K.clientHeight) + "px";
					} else {
						K.style.height =
							$(K).outerHeight() + (K.scrollHeight - K.clientHeight) + "px";
					}
				}
			}
		}
		if (ac + X > ad - 40) {
			K.style.left = ac - (ac + X - (ad - 40)) + "px";
			if (parseInt(K.style.left, 10) < 10) {
				K.style.left = "10px";
			}
		} else {
			K.style.left = ac + "px";
		}
		if (ab + V > aa - 40) {
			K.style.top = ab - (ab + V - (aa - 40)) + "px";
			if (parseInt(K.style.top, 10) < 10) {
				K.style.top = "10px";
			}
		} else {
			K.style.top = ab + "px";
		}
		if (hpop.is_ie && !hpop.ie9 && !hmHeaderTopic) {
			K.style.top = parseInt(K.style.top, 10) + $(window).scrollTop() + "px";
		}
		if ($(K).width() + $(K).height() < popCfg.smallDim) {
			if (!hpop.isvideo) {
				K.style.cursor = "move";
			}
			hpop.smallPopup = true;
		} else {
			hpop.smallPopup = false;
			if (!hpop.isvideo) {
				$("#hmpopupdiv").bind("mousemove.scrBar", hmpopScrListen);
			}
		}
		if (!hpop.isvideo) {
			H(document, "mousedown", M);
			H(document, "mouseup", l);
		}
		H(document, "mousedown", p);
		if (!hpop.isvideo) {
			K.style.position =
				(!hpop.is_ie && !hpop.is_chm) || hpop.ie9 ? "fixed" : "absolute";
		}
		K.style.overflow = "auto";
		$(K).css({ display: "none", visibility: "visible" });
		$(K).show("fast");
		if (hpop.isvideo) {
			$("body").append(
				'<div id="vidbg" style="background-color: black; opacity:0.5;filter:alpha(opacity=50); z-index:800; position: absolute; top: 0; left:0; height: 100%; width: 100%; display:none;"></div>'
			);
			$("#vidbg").fadeIn("slow");
		}
		if (!hpop.ie6 && !hpop.isvideo) {
			$("img")
				.bind("mousedown.imagebug", function (ae) {
					ae.preventDefault();
				})
				.bind("drag.imagebug", function (ae) {
					ae.preventDefault();
				});
			$("body")
				.bind("mousedown.cursorbug", function (ae) {
					ae.preventDefault();
				})
				.bind("drag.cursorbug", function (ae) {
					ae.preventDefault();
				});
		}
		if (!hpop.smallPopup && !hpop.isvideo) {
			$("body").bind("mousemove.popup", function (ak) {
				var ai = $(K).position();
				var aj =
					!hpop.is_ie || hpop.ie6 ? $(K).outerWidth() : $(K).outerWidth();
				var ah =
					!hpop.is_ie || hpop.ie6 ? $(K).outerHeight() : $(K).outerHeight();
				var af =
					ak.pageX > ai.left + (aj - 4) &&
					ak.pageX < ai.left + aj + 8 &&
					ak.pageY > ai.top &&
					ak.pageY < ai.top + +ah + 8;
				var ae =
					ak.pageY > ai.top + (ah - 4 - o) &&
					ak.pageY < ai.top + ah + 8 &&
					ak.pageX < ai.left + aj + 8 &&
					ak.pageX > ai.left + 4;
				var ag =
					(af && ak.pageY > ai.top + ah - 10) ||
					(ae && ak.pageX > ai.left + aj - 10);
				hpop.bdDrag = af || ae;
				$("body").css("cursor", function () {
					return ag
						? "nw-resize"
						: af && !ae
						? hpop.ewResize
						: ae && !af
						? hpop.nsResize
						: "";
				});
				if (hpop.is_webkit) {
					$(K).css("cursor", function () {
						var e =
							ak.pageX > ai.left &&
							ak.pageX < ai.left + (aj - 20) &&
							ak.pageY > ai.top &&
							ak.pageY < ai.top + (ah - 20);
						return ag
							? "nw-resize"
							: af && !ae
							? hpop.ewResize
							: ae && !af
							? hpop.nsResize
							: e
							? "move"
							: "auto";
					});
				}
			});
		}
	}
	function z(e) {
		scrBar = false;
		var V = document.getElementById("hmpopupdiv");
		if (V.style.visibility === "visible") {
			if (hpop.isvideo) {
				if (e) {
					$("#vidbg").fadeOut("slow", function () {
						if (popCfg.killVideo) {
							location.reload();
						}
					});
				} else {
					$("#vidbg").hide();
					if (popCfg.killVideo) {
						location.reload();
					}
				}
			}
			$(V).hide(e ? "fast" : 0, function () {
				$(V)
					.unbind("mousemove.scrBar")
					.css({
						visibility: "hidden",
						display: "block",
						width: "auto",
						height: "auto",
						top: "0px",
						left: "0px",
						cursor: "default",
					});
				hpop.isvideo = false;
				hpop.smallPopup = false;
				hpop.bdDrag = false;
				try {
					g(document, "mousedown", p);
					g(document, "mousedown", M);
					g(document, "mouseup", l);
					$("img").unbind("mousedown.imagebug").unbind("drag.imagebug");
					$("body")
						.unbind("mousemove.popup")
						.unbind("mousedown.cursorbug")
						.unbind("drag.cursorbug");
				} catch (W) {}
			});
		}
	}
}