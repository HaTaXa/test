/*! Main WebHelp functions for HM Premium Pack Version 2.71
	Copyright (c) 2008-2015 by Tim Green 
	All rights reserved. */
if (hmnavpages.mainWindowName !== "") {
	$(window).attr({
		id: hmnavpages.mainWindowName,
		name: hmnavpages.mainWindowName,
	});
}
if (!Array.indexOf) {
	Array.prototype.indexOf = function (b) {
		for (var a = 0; a < this.length; a++) {
			if (this[a] == b) {
				return a;
			}
		}
		return -1;
	};
}
function chromeWarning(a) {
	if (a) {
		var b = navigator.userAgent.toLowerCase();
		var c =
			b.indexOf("applewebkit/") != -1 &&
			b.indexOf("khtml") > -1 &&
			b.indexOf("chrome") > -1;
		if (c && a) {
			return true;
		} else {
			return false;
		}
	} else {
		if (alert) {
			alert(
				"HELP SYSTEM ALERT:\n\nThis version of Google Chrome blocks cross-frame\nreferences in a way that is not compatible with HTML\nstandards. This feature makes Google Chrome unable\nto display this WebHelp help system correctly when\nloaded directly from a local computer drive without\na web server.\n\nPlease use a different browser to view this help from\nthis location.\n\nThis version of Google Chrome will display the help\ncorrectly when the help is stored on a web server."
			);
		}
	}
}
function newIE() {
	var c = -1;
	var a = navigator.userAgent.toLowerCase();
	var b = new RegExp("trident/([0-9]{1,}[.0-9]{0,})");
	if (b.exec(a) != null) {
		c = parseFloat(RegExp.$1);
	}
	return c >= 4;
}
var hmBrowser = {};
(function () {
	var c = (function () {
		var i = {
			select: "input",
			change: "input",
			submit: "form",
			reset: "form",
			error: "img",
			load: "img",
			abort: "img",
		};
		function h(j) {
			var l = document.createElement(i[j] || "div");
			j = "on" + j;
			var k = j in l;
			if (!k) {
				l.setAttribute(j, "return;");
				k = typeof l[j] == "function";
			}
			l = null;
			return k;
		}
		return h;
	})();
	var f = navigator.userAgent.toLowerCase();
	hmBrowser.agent = f;
	hmBrowser.oldMobile =
		f.indexOf("series60") != -1 ||
		f.indexOf("symbian") != -1 ||
		f.indexOf("windows ce") != -1;
	var b = navigator.userAgent.match(
		/blackberry(.*?\(khtml, like gecko\) version\/(\d)\.\d.\d.[\d]{1,4}.*?mobile safari)?/gi
	);
	if (b != null && b[1] == null) {
		hmBrowser.oldMobile = true;
	}
	hmBrowser.bb = b != null && b[2] >= 6;
	var a = /Windows Phone.*?([\d]{1,1}).*? trident\/([\d]{1,1})/i;
	b = a.exec(f);
	hmBrowser.wp7 = b != null && b[1] >= 7 && b[1] < 8 && b[2] >= 3;
	hmBrowser.wp8 = b != null && b[1] >= 8 && b[2] >= 6;
	hmBrowser.touchOS =
		c("touchstart") ||
		"ontouchstart" in window ||
		navigator.maxTouchPoints > 0 ||
		navigator.msMaxTouchPoints > 0;
	hmBrowser.windows7 =
		/windows nt 6\.1/i.test(f) && /win32/gi.test(navigator.platform);
	hmBrowser.windows8 =
		/windows nt 6\.[23]/i.test(f) && /win32/gi.test(navigator.platform);
	hmBrowser.windowsTouchIe =
		!hmBrowser.wp7 &&
		!hmBrowser.wp8 &&
		/windows nt 6\.[23].+?trident\/[67].+?touch/gi.test(f) &&
		hmBrowser.touchOS;
	hmBrowser.windowsTouchOther =
		hmBrowser.windows8 && !hmBrowser.windowsTouchIe && hmBrowser.touchOS;
	hmBrowser.windowsTouch =
		hmBrowser.windowsTouchIe || hmBrowser.windowsTouchOther;
	hmBrowser.rotation = (function () {
		if ("onorientationchange" in window || c("orientationchange")) {
			return "orientationchange";
		} else {
			if ("onmsorientationchange" in window || c("msorientationchange")) {
				return "MSOrientationChange";
			} else {
				return "resize";
			}
		}
	})();
	hmBrowser.windowsRotation =
		hmBrowser.windowsTouch && hmBrowser.rotation != "resize";
	hmBrowser.desktopOS =
		(/Win32|Win64|MacIntel|MacPPC|Linux i686|Linux x86_64|SunOS i86pc|X11/gi.test(
			navigator.platform
		) &&
			!hmBrowser.wp7 &&
			!hmBrowser.wp8) ||
		(hmBrowser.windows8 && !hmBrowser.windowsTouch);
	hmBrowser.iPhone = /iPhone/gi.test(navigator.platform);
	hmBrowser.iPad = /iPad/gi.test(navigator.platform);
	hmBrowser.iOS = hmBrowser.iPhone || hmBrowser.iPad;
	hmBrowser.android =
		/android/gi.test(f) ||
		(!hmBrowser.iOS &&
			!hmBrowser.oldMobile &&
			!hmBrowser.wp7 &&
			!hmBrowser.wp8 &&
			hmBrowser.touchOS &&
			!hmBrowser.desktopOS &&
			!hmBrowser.windowsTouch);
	hmBrowser.androidTablet =
		hmBrowser.android && (!/mobile/gi.test(f) || /tablet/gi.test(f));
	hmBrowser.androidPhone = hmBrowser.android && /mobile/gi.test(f);
	hmBrowser.mobileOS =
		!hmBrowser.desktopOS && !hmBrowser.windows8 && hmBrowser.touchOS;
	hmBrowser.mobileRotation =
		hmBrowser.mobileOS && hmBrowser.rotation != "resize";
	var g = -1;
	var d = navigator.userAgent;
	var e = new RegExp("Trident/([0-9]{1,}[.0-9]{0,})");
	if (e.exec(d) != null) {
		g = parseFloat(RegExp.$1);
	}
	hmBrowser.newIE = g >= 4;
	hmBrowser.IE6 = /msie 6/i.test(f) && !hmBrowser.newIE;
	hmBrowser.IE7 = /msie 7/i.test(f) && !hmBrowser.newIE;
	hmBrowser.IE8 = /msie 8.*?trident\/4/i.test(f);
	hmBrowser.sHeight = screen.height;
	hmBrowser.sWidth = screen.width;
	hmBrowser.pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
	hmBrowser.pixelRatioUndefined = window.devicePixelRatio ? false : true;
	hmBrowser.fullScreenMode = !window.screenTop && !window.screenY;
	hmBrowser.W8Metro = (function () {
		if (hmBrowser.windows8 && hmBrowser.fullScreenMode) {
			var h = null;
			try {
				h = !new ActiveXObject("htmlfile");
			} catch (i) {
				if (hmBrowser.newIE) {
					h = true;
				} else {
					h = false;
				}
			}
			return h;
		} else {
			return false;
		}
	})();
})();
function addCss(b) {
	var a = document.createElement("style");
	a.type = "text/css";
	if (a.styleSheet) {
		a.styleSheet.cssText = b;
	} else {
		a.appendChild(document.createTextNode(b));
	}
	document.getElementsByTagName("head")[0].appendChild(a);
}
var jsCSS =
	"div#idToolbar, div#hmtabscontrols {display: block;}\ntable#idToolbarTable {display: table;}";
if (
	hmBrowser.iPad ||
	hmBrowser.android ||
	/IEMobile\/10/.test(navigator.userAgent) ||
	hmBrowser.W8Metro
) {
	jsCSS +=
		"\ndiv#hmtabsCtab, div#tabsMenu, img.closetab {display: none;}\ndiv#hmtabswindow {left: 10px}\ndiv#idUndocTabTool, div#idNewTabTool, li#indextab img.closetab, li#searchtab img.closetab {display: none;}";
	if (/IEMobile\/10/.test(navigator.userAgent)) {
		jsCSS += "\n@media (max-width: 400px) {@-ms-viewport {width: 320px;}}";
	}
	if (/iPad/.test(navigator.platform)) {
		jsCSS += "\ninput#idInputSearch {height: 1.8em}";
	}
}
addCss(jsCSS);
if (document.all && !window.opera) {
	lazysync = function (c) {
		if (c != "") {
			var e = hmNavigationFrame().document.getElementById("toc");
			if (e) {
				if (!tocselecting) {
					var a = $("a[href^='" + c + "']", e);
					if (a.length > 0) {
						var b = $(a).children("span").attr("id");
						var d = false;
						if (hmTocSingleClick) {
							d = hilightexpand(b);
						} else {
							d = hilight(b);
						}
						intoview(a[0], e, d);
						hilight(b);
					}
				}
				if (autocollapse) {
					if (currentselection) {
						collapseunfocused(e, currentselection.id);
					} else {
						collapseunfocused(e, "");
					}
				}
			}
			track("topic", c);
		}
		tocselecting = false;
	};
}
$(function () {
	$.extend(
		($.fn.disableTextSelect = function () {
			return this.each(function () {
				if (/gecko.+?firefox/i.test(navigator.UserAgent)) {
					$(this).css("MozUserSelect", "none");
				} else {
					if (window.ActiveXObject || "ActiveXObject" in window) {
						$(this).bind("selectstart", function () {
							return false;
						});
					} else {
						$(this).mousedown(function () {
							return false;
						});
					}
				}
			});
		})
	);
});
function closePermalink() {
	$("div#permalink").css("visibility", "hidden");
	$("div#unclicker").unbind("click.closeperma");
	$("div#unclicker").hide();
	document.onselectstart = function () {
		return false;
	};
}
function doPermalink(a) {
	document.onselectstart = function () {};
	var f = hmWebHelp.tabsapi
		.getCurrentPane()
		.find("iframe")
		.contents()
		.find("title")
		.text();
	var g = hmWebHelp.tabsapi.getCurrentPane().find("iframe").attr("src");
	if (hmnavpages.cachefix) {
		g = g.replace(/\?cachehash=\d*?$/gim, "");
	}
	var c = hmWebHelp.tabsapi.getIndex();
	var b = g;
	if (c == 0) {
		b = hmWebHelp.activePage;
	}
	if (hmpldata.auto) {
		var e = document.location.href.toString().replace(/\#.*$/, "");
		e = e.replace(/\?.*$/, "");
	} else {
		var e = hmpldata.hurl;
		if (!/\.[\w]{3,4}$/im.test(e) && !/\/$/im.test(e)) {
			e = e + "/";
		}
	}
	if (c > 0 && c < 3) {
		b = hmWebHelp.currentPage;
	}
	if (e.length == e.lastIndexOf("/") + 1) {
		e = e + a + "?" + b;
	} else {
		e = e + "?" + b;
	}
	e = e.replace(/ /g, "%20");
	switch (a) {
		case "close":
			closePermalink();
			break;
		case "bookmark":
			if (hmWebHelp.server) {
				if (window.sidebar && window.sidebar.addPanel) {
					window.sidebar.addPanel(f, e, "");
					closePermalink();
				} else {
					if ("AddFavorite" in window.external) {
						window.external.AddFavorite(e, f);
						closePermalink();
					} else {
						$("textarea#plinkBox").focus().select();
						alert(hmpldata.sorry);
					}
				}
			} else {
				alert(hmpldata.noserver);
				closePermalink();
			}
			document.onselectstart = function () {
				return false;
			};
			break;
		case "alert":
			$("textarea#plinkBox").focus().select();
			alert(hmpldata.manualcopy);
			document.onselectstart = function () {
				return false;
			};
			break;
		default:
			if ($("div#permalink").css("visibility") == "visible") {
				closePermalink();
				return;
			}
			$("div#unclicker")
				.bind("click.closeperma", function () {
					closePermalink();
				})
				.show();
			var d = 400;
			if ($("div#idToolbar").width() < d) {
				d = $("div#idToolbar").width() - 25;
			}
			$("textarea#plinkBox").css(
				"height",
				Math.round(e.length / 30) * 17 + "px"
			);
			$("textarea#plinkBox")
				.css("width", d + "px")
				.val(e);
			if (!hmWebHelp.server || !hmWebHelp.isFlash) {
				$("tr#offlinemessage").show();
				$("#selectPermalink, #bookmarkPermalink").attr("disabled", "disabled");
			}
			$("div#permalink").css("visibility", "visible");
			$("textarea#plinkBox").select();
			break;
	}
}
function initClipboard() {
	if (
		navigator.platform.indexOf("iPad") === -1 &&
		navigator.platform.indexOf("iPhone") === -1 &&
		hmWebHelp.isFlash
	) {
		ZeroClipboard.config({ forceHandCursor: true });
		var a = new ZeroClipboard($("input#selectPermalink"));
		a.on("ready", function (b) {
			a.on("copy", function (c) {
				c.clipboardData.setData(
					"text/plain",
					document.getElementById("plinkBox").value
				);
			});
			a.on("aftercopy", function (c) {
				$("textarea#plinkBox").select();
				alert(
					hmpldata.copied + "\n" + document.getElementById("plinkBox").value
				);
				closePermalink();
			});
		});
	}
}
function trimString(a) {
	return a.replace(/^\s+/g, "").replace(/\s+$/g, "");
}
function browserPlatform(a) {
	if (hmBrowser.wp7 || hmBrowser.oldMobile || hmBrowser.bb) {
		document.location.replace("_nomobilewarning.html");
		return;
	}
	if (hmBrowser.IE6 | hmBrowser.IE7) {
		document.location.replace("_oldiewarning.html");
		return;
	}
	if (hmBrowser.desktopOS) {
		return;
	}
	if ((a && hmBrowser.iPad) || hmBrowser.androidTablet) {
		if (mobRe.ipad != "") {
			document.location.replace(mobRe.ipad);
		} else {
			return;
		}
	}
	if (
		a &&
		(hmBrowser.androidPhone ||
			hmBrowser.iPhone ||
			hmBrowser.wp8 ||
			hmBrowser.wp7 ||
			hmBrowser.bb)
	) {
		if (mobRe.smart != "") {
			document.location.replace(mobRe.smart);
		}
	}
}
var doCookies = {
	setCookie: function (c, e, f, d) {
		var a;
		if (f && typeof f == "number") {
			var b = new Date();
			b.setTime(b.getTime() + f * 24 * 60 * 60 * 1000);
			a = "; expires=" + b.toGMTString();
		} else {
			if (d && typeof d == "number") {
				var b = new Date();
				b.setTime(b.getTime() + d * 60 * 1000);
				a = "expires=" + b.toGMTString();
			} else {
				a = "";
			}
		}
		document.cookie = c + "=" + e + "; " + a + "; path=/";
	},
	getCookie: function (b) {
		var e = b + "=";
		var a = document.cookie.split(";");
		for (var d = 0; d < a.length; d++) {
			var f = a[d];
			while (f.charAt(0) == " ") {
				f = f.substring(1, f.length);
			}
			if (f.indexOf(e) == 0) {
				return f.substring(e.length, f.length);
			}
		}
		return null;
	},
	deleteCookie: function (a) {
		doCookies.setCookie(a, "", -1);
	},
};
function hmcachefix(a) {
	var b = a;
	Number.prototype.hashCode = function () {
		var g = 0,
			d,
			e,
			c,
			f = this.toString();
		if (f.length == 0) {
			return g;
		}
		for (d = 0, c = f.length; d < c; d++) {
			e = f.charCodeAt(d);
			g = (g << 5) - g + e;
			g |= 0;
			if (g < 0) {
				g = -g;
			}
		}
		return g;
	};
	this.getTarget = function (d) {
		var c = this.cacheHash();
		if (d.indexOf("?") > -1) {
			c = c.replace(/\?/, "&");
		}
		if (d.indexOf("#") > -1) {
			d = d.replace(/\#/, c + "#");
		} else {
			d = d + c;
		}
		return d;
	};
	this.cacheHash = function () {
		if (b == 999) {
			return "?cachehash=" + new Date().getTime().hashCode();
		} else {
			var c = doCookies.getCookie("cacheHash");
			if (!c) {
				c = "?cachehash=" + new Date().getTime().hashCode();
				doCookies.setCookie("cacheHash", c, 0, b);
			}
			return c;
		}
	};
}
if (hmnavpages.cachefix) {
	var hmCacheFix = new hmcachefix(hmnavpages.cachefix);
}
function openWindow(c, a, b) {
	this.win = c;
	this.tabID = a;
	this.liID = a.replace(/(.*?)Link$/gm, "li$1");
	this.tool = b;
}
var hmTabSlider = {
	sliderWidth: 0,
	currentTab: 0,
	navTabs: [],
	userTabs: [],
	visibleTabs: [],
	tabsNum: 0,
	isMaxPos: false,
	canBounce: true,
	updateSlider: function () {
		var d = 0;
		var c = hmTabSlider.navTabs.length;
		if (c > 0) {
			hmTabSlider.navTabs.splice(0, c);
			hmTabSlider.visibleTabs.splice(0, c);
		}
		$("ul#tabsList").html("");
		hmTabSlider.sliderWidth = 0;
		hmTabSlider.navTabs.push(hmTabSlider.sliderWidth);
		$("ul#topictabs a").each(function (e) {
			$(this).parent("li").attr("tabnum", e);
			if ($(this).is(":visible")) {
				hmTabSlider.sliderWidth += $(this).parent("li").outerWidth(true);
				hmTabSlider.navTabs.push(hmTabSlider.sliderWidth);
				hmTabSlider.visibleTabs.push(e);
			}
		});
		var b = "";
		for (var a = 0; a < hmTabSlider.visibleTabs.length; a++) {
			b =
				b +
				"index " +
				a +
				": " +
				hmTabSlider.visibleTabs[a] +
				" - " +
				hmTabSlider.navTabs[a] +
				"\n";
		}
		hmTabSlider.sliderWidth += 2;
		$("ul.tabs a").each(function (e) {
			var f =
				e == 0
					? hminfo.currtopic + ":&nbsp;" + $(this).attr("data")
					: e == 1 || e == 2
					? $(this).text()
					: $(this).attr("data");
			if ($(this).is(":visible")) {
				$("ul#tabsList").append(
					"<li><a id='tabList" +
						e +
						"' href='#' onclick='hmTabSlider.goToTab(" +
						e +
						",true)'>" +
						f +
						"</a></li>"
				);
			}
		});
		$("div#hmtabslider").css("width", hmTabSlider.sliderWidth + "px");
		c = hmTabSlider.tabsNum;
		if (c > 0) {
			hmTabSlider.userTabs.splice(0, c);
		}
		$("ul.tabs a").each(function (e) {
			hmTabSlider.userTabs[$(this).attr("id")] = e;
			hmTabSlider.tabsNum = e;
		});
		hmTabSlider.hiTabMenu();
	},
	hiTabMenu: function () {
		var b = true;
		try {
			hmWebHelp.mainWin.tVars != null;
		} catch (a) {
			b = false;
		}
		if (b || hmWebHelp.tabsapi.getIndex() > 0) {
			hmWebHelp.togTogCheck();
		}
		$("ul.tabs a").each(function (d) {
			var e = $(this).attr("class") ? $(this).attr("class") : "";
			if (e && e.indexOf("current") > -1) {
				$("ul#tabsList a[id='tabList" + d + "']").css("font-weight", "bold");
				if (d > 0) {
					hmWebHelp.activePage = $(this).parent("li").attr("hpage");
				}
				if (d >= 3) {
					hmWebHelp.currentWin = document.getElementById(
						hmWebHelp.currentFrameID()
					).contentWindow;
					hmWebHelp.currentDoc = document.getElementById(
						hmWebHelp.currentFrameID()
					).contentWindow.document;
				} else {
					if (d < 3) {
						hmWebHelp.currentWin = hmWebHelp.mainWin;
						hmWebHelp.currentDoc = hmWebHelp.mainDoc;
					}
				}
			} else {
				if ($("ul#tabsList a").length > 0) {
					$("ul#tabsList a[id='tabList" + d + "']").css(
						"font-weight",
						"normal"
					);
				}
			}
		});
	},
	maxTab: function () {
		var b = hmTabSlider.sliderWidth - $("div#hmtabswindow").innerWidth();
		var a;
		for (var c = 0; c < hmTabSlider.navTabs.length; c++) {
			if (hmTabSlider.navTabs[c] < b) {
				a = c;
			}
		}
		a = parseInt(a) + 2;
		a =
			$("ul.tabs a").not(":hidden").length - 1 > a
				? a
				: $("ul.tabs a").not(":hidden").length - 1;
		return a;
	},
	maxTarget: function (b) {
		var a = hmTabSlider.maxTab() - 1;
		var c = 0;
		if (b < a) {
			c = hmTabSlider.navTabs[b];
			hmTabSlider.isMaxPos = false;
		} else {
			c = hmTabSlider.sliderWidth - $("div#hmtabswindow").innerWidth();
			hmTabSlider.isMaxPos = true;
		}
		return c;
	},
	getCurrentTab: function () {
		var c = $("div#hmtabslider").position();
		c = c.left;
		if (c != 0) {
			c = -c;
		}
		var a = 0;
		for (var b = 0; b < hmTabSlider.navTabs.length; b++) {
			if (hmTabSlider.navTabs[b] > c) {
				break;
			}
			a = parseInt(b);
		}
		return a;
	},
	moveSlider: function (a) {
		a = a === 0 ? 0 : -a;
		$("div#hmtabslider").animate(
			{ left: a },
			550,
			"easeOutBack",
			function () {}
		);
	},
	bounceSlider: function (b) {
		var d, c, a;
		if (hmTabSlider.canBounce) {
			hmTabSlider.canBounce = false;
			d = $("div#hmtabslider").position();
			c = d.left - 10;
			a = d.left;
			if (b == "right") {
				c = d.left + 10;
			}
			$("div#hmtabslider").animate(
				{ left: c },
				100,
				"easeOutBack",
				function () {
					$("div#hmtabslider").animate(
						{ left: a },
						100,
						"easeOutBack",
						function () {
							setTimeout(function () {
								hmTabSlider.canBounce = true;
							}, 300);
						}
					);
				}
			);
		}
	},
	updateToolbar: function (a) {
		if (a === 0 && !hmWebHelp.external) {
			hmWebHelp.enableTool("idNewTab", true);
			hmWebHelp.enableTool("idUndocTab", false);
			hmWebHelp.enableTool("idPermalink", true);
		} else {
			if (a === 0 && hmWebHelp.external) {
				hmWebHelp.enableTool("idNewTab", false);
				hmWebHelp.enableTool("idUndocTab", false);
				hmWebHelp.enableTool("idPermalink", false);
				hmWebHelp.enableTool("idFeedBack", false);
				hmWebHelp.enableTool("idPrinter", false);
				hmWebHelp.enableTool("idShowHide", false);
			} else {
				if (a > 0 && a < 3) {
					hmWebHelp.enableTool("idNewTab", false);
					hmWebHelp.enableTool("idUndocTab", true);
					hmWebHelp.enableTool("idPermalink", false);
					hmWebHelp.enableTool("idPrinter", false);
					hmWebHelp.enableTool("idFeedBack", false);
				} else {
					hmWebHelp.enableTool("idNewTab", false);
					hmWebHelp.enableTool("idUndocTab", true);
					hmWebHelp.enableTool("idPermalink", true);
					hmWebHelp.enableTool("idPrinter", true);
					hmWebHelp.enableTool("idFeedBack", true);
				}
			}
		}
	},
	goToTab: function (a, b) {
		var d = $("div#hmtabslider").position();
		if (hmTabSlider.sliderWidth > $("div#hmtabswindow").innerWidth()) {
			hmTabSlider.moveSlider(hmTabSlider.maxTarget(a));
		} else {
			if (
				hmTabSlider.sliderWidth < $("div#hmtabswindow").innerWidth() &&
				d.left < 0
			) {
				hmTabSlider.moveSlider(0);
				setTimeout(function () {
					hmTabSlider.goToTab(a, b);
				}, 600);
			}
		}
		if (b) {
			hmWebHelp.tabsapi.click(a);
			hmTabSlider.updateToolbar(a);
			hmTabSlider.hiTabMenu();
			if (a === 2) {
				hmWebHelp.schWin.resizeForm();
			}
			if (a === 0 || a > 2) {
				try {
					document
						.getElementById(hmWebHelp.currentFrameID())
						.contentWindow.nsheader();
				} catch (c) {}
				if (a === 0) {
					lazysync(hmWebHelp.currentPage);
					hmWebHelp.tocWin.tocScroller(hmWebHelp.currentPage);
				}
				if (a > 0) {
					lazysync(hmWebHelp.activePage);
					hmWebHelp.tocWin.tocScroller(hmWebHelp.activePage);
				}
			}
		}
	},
	hideMenu: function () {
		if ($("div#tabsMenu").is(":visible")) {
			$("div#tabsMenu").slideUp("fast");
			$("div#unclicker").unbind("click.tabmenu");
		}
	},
	togTabMenu: function () {
		if ($("div#tabsMenu").is(":hidden")) {
			$("div#tabsMenu").slideDown("fast");
		} else {
			$("div#tabsMenu").slideUp("fast");
			$("div#unclicker").unbind("click.tabmenu");
		}
	},
	alignTab: function (d) {
		var f = $("div#hmtabslider").position();
		var c = $("div#hmtabswindow").innerWidth();
		var a = $("div#hmtabslider").innerWidth() - 2;
		var b = hmTabSlider.navTabs[d];
		var e = hmTabSlider.navTabs[hmTabSlider.visibleTabs[d + 1]];
		if (!e) {
			e = $("div#hmtabswindow").innerWidth();
		}
		if (c - f.left >= e || b < -f.left) {
			hmTabSlider.goToTab(d, true);
		}
	},
	nextValidTab: function (d, c) {
		var b = d;
		var a = hmTabSlider.tabsNum;
		if (c) {
			while (
				!$("ul#topictabs li[tabnum='" + d + "']").is(":visible") &&
				d < a
			) {
				d++;
			}
		} else {
			while (
				!$("ul#topictabs li[tabnum='" + d + "']").is(":visible") &&
				d > 0
			) {
				d--;
			}
		}
		if (
			!$("ul#topictabs li[tabnum='" + d + "']").is(":visible") ||
			d > a ||
			d < 0
		) {
			d = b - 1;
		}
		if (d < 0) {
			d = 0;
		}
		if (d > a) {
			d = a;
		}
		return d;
	},
	incrToVisible: function (e, d) {
		var a = hmTabSlider.tabsNum;
		var c = hmWebHelp.tabsapi.getIndex();
		var b = d ? "left" : "right";
		e = hmTabSlider.nextValidTab(e, d);
		if (e <= a && e > -1 && e != c) {
			hmTabSlider.goToTab(e, true);
		} else {
			hmTabSlider.bounceSlider(b);
		}
	},
	initTabControls: function () {
		$("img#tabRight").click(function (a) {
			hmTabSlider.incrToVisible(hmWebHelp.tabsapi.getIndex() + 1, true);
		});
		$("img#tabLeft").click(function (a) {
			hmTabSlider.incrToVisible(hmWebHelp.tabsapi.getIndex() - 1, false);
		});
	},
};
var hmWebHelp = {
	tabsapi: {},
	openTabs: [],
	tabsCookie: [],
	openWindows: [],
	dockChecker: null,
	currentPage: "",
	activePage: "",
	tabFile: "",
	isNewTab: false,
	newTabReady: false,
	autoTabs: false,
	external: false,
	qSearch: true,
	searchArgs: "",
	searchReturnArgs: "",
	navWidth: hmnavpages.tocWidth >= 180 ? hmnavpages.tocWidth : 180,
	navHidden: false,
	server: (function () {
		return /^https??:\/\//im.test(document.location);
	})(),
	browser: "desktop",
	textn: (function () {
		return hmnavpages.def.substr(hmnavpages.def.lastIndexOf("."));
	})(),
	tocDoc: 0,
	tocWin: 0,
	idxDoc: 0,
	idxWin: 0,
	schDoc: 0,
	schWin: 0,
	mainDoc: 0,
	mainWin: 0,
	currentDoc: 0,
	currentWin: 0,
	isFlash: (function () {
		var c = false;
		var d = false;
		if (navigator.platform != "iPad" && navigator.platform != "iPhone") {
			if (window.ActiveXObject) {
				try {
					c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
				} catch (b) {
					void 0;
				}
				if (c) {
					d = true;
				}
			} else {
				if (navigator.plugins && navigator.plugins.length) {
					d =
						navigator.plugins["Shockwave Flash 2.0"] ||
						navigator.plugins["Shockwave Flash"]
							? true
							: false;
				} else {
					if (navigator.mimeTypes && navigator.mimeTypes.length) {
						var a = navigator.mimeTypes["application/x-shockwave-flash"];
						d = a && a.enabledPlugin;
					}
				}
			}
		}
		return d;
	})(),
	hmWebHelpReady: false,
	hmTopicLoaded: false,
	hmWebHelpPage: (function () {
		var a = document.location.href;
		a = a.substring(0, a.indexOf("#") == -1 ? a.length : a.indexOf("#"));
		a = a.substring(0, a.indexOf("?") == -1 ? a.length : a.indexOf("?"));
		a = a.substring(a.lastIndexOf("/") + 1, a.length);
		return a;
	})(),
	doTabsCookie: function (c) {
		var f = doCookies.getCookie("openTabs");
		var e = f ? f.split(",") : false;
		var a = "";
		switch (c) {
			case "getDefaultTopic":
				if (f) {
					return e[0];
				} else {
					return false;
				}
				break;
			case "setTabsCookie":
				var d = hmWebHelp.currentPage.substr(
					0,
					hmWebHelp.currentPage.lastIndexOf(".")
				);
				if (!d || d === "") {
					return;
				}
				a = d;
				for (var b in hmWebHelp.openTabs) {
					if (hmWebHelp.openTabs[b] !== d && b < 4) {
						a += "," + hmWebHelp.openTabs[b];
					}
					if (b > 3) {
						break;
					}
				}
				if (f) {
					doCookies.deleteCookie("openTabs");
				}
				doCookies.setCookie("openTabs", a, 30);
				break;
			case "getTabsCookie":
				if (f) {
					hmWebHelp.tabsCookie = e;
				} else {
					return;
				}
				break;
		}
	},
	fileExists: function (b) {
		if (
			document.location.href.indexOf("http:") < 0 &&
			document.location.href.indexOf("https:") < 0
		) {
			return true;
		}
		var a = new XMLHttpRequest();
		a.open("HEAD", b, false);
		a.send();
		return a.status != 404;
	},
	tbToolAdjust: function () {
		var a = 5;
		if (hmBrowser.wp8) {
			a = 10;
		}
		setTimeout(function () {
			var c = $(window).width();
			function b() {
				var e = 0;
				$(
					"div#idSearch:visible,.nav-icon-box-left:visible,.nav-icon-box-right:visible"
				).each(function () {
					e += $(this).outerWidth() + a;
				});
				return e;
			}
			try {
				$("div#idToolbar").css({ "max-width": c + "px" });
				if (b() > c) {
					$("td.toolbar-search").hide();
					if (b() > c) {
						$("td.toolbar-left").hide();
						$("td.toolbar-center").css({ "text-align": "left", margin: "0 0" });
					}
					if (b() > c) {
						$("div#sharetool").hide();
					}
					if (b() > c) {
						$("div#idPrintTool").hide();
					}
					if (b() > c) {
						$("div#idFeedBackTool").hide();
					}
					if (b() > c) {
						$("div#idPermalinkTool").hide();
					}
				} else {
					if (b() < c) {
						$("td.toolbar-left").show();
						if (b() > c) {
							$("td.toolbar-left").hide();
						} else {
							$("td.toolbar-center").css({
								"text-align": "center",
								margin: "0 auto",
							});
						}
						if (b() < c) {
							$("div#idPermalinkTool").show();
						}
						if (b() > c) {
							$("div#idPermalinkTool").hide();
						}
						if (b() < c) {
							$("div#idFeedBackTool").show();
						}
						if (b() > c) {
							$("div#idFeedBackTool").hide();
						}
						if (b() < c) {
							$("div#idPrintTool").show();
						}
						if (b() > c) {
							$("div#idPrintTool").hide();
						}
						if (b() < c) {
							$("div#sharetool").show();
						}
						if (b() > c) {
							$("div#sharetool").hide();
						}
						if (b() < c) {
							$("td.toolbar-search").show();
						}
						if (b() > c) {
							$("td.toolbar-search").hide();
						}
					}
				}
			} catch (d) {
				alert(d.message);
			}
		}, 300);
	},
	doSocial: function () {
		var b = hmWebHelp.tabsapi.getIndex();
		if (b > 0 && b < 3) {
			hmWebHelp.tabsapi.click(0);
		}
		var a = $("div#hmsocialmedia", hmWebHelp.currentDoc);
		if ($("div#xunclicker", hmWebHelp.currentDoc).length == 0) {
			$("body", hmWebHelp.currentDoc).prepend('<div id="xunclicker"></div>');
		}
		var c = $("div#xunclicker", hmWebHelp.currentDoc);
		if ($(a).css("visibility") == "hidden") {
			$(c)
				.bind("click", function (d) {
					$(
						"div.googleplusone-button iframe, div.twitter-button iframe",
						hmWebHelp.currentDoc
					).hide();
					$(a).css("visibility", "hidden");
					$(c).hide().unbind("click");
				})
				.show();
			$(
				"div.googleplusone-button iframe, div.twitter-button iframe",
				hmWebHelp.currentDoc
			).show();
			$(a).css("visibility", "visible");
		} else {
			$(
				"div.googleplusone-button iframe, div.twitter-button iframe",
				hmWebHelp.currentDoc
			).hide();
			$(a).css("visibility", "hidden");
			$(c).unbind("click");
			$(c).hide();
		}
	},
	parseUrl: function (i, g) {
		hmLayout.startTab = 0;
		hmLayout.hmIndexArg = "";
		hmLayout.hmSearchArg = "";
		if (i.length > 2) {
			var h = /(\?|&)([^&?:\/]+?(\.htm[l]?|\.php[\d]?|\.asp))/;
			var c = h.exec(i);
			if (c != null) {
				var j = new RegExp("javascript|:|&#58;|&#x3a;|%3a|3a;|58;|/", "i");
				if (!j.test(c[2]) && !j.test(g)) {
					var f = hmnavpages.cachefix ? hmCacheFix.cacheHash() : "";
					document.getElementById("hmcontent").src = c[2] + f + g;
				}
			}
			var e = /(\?|&)([^&?]?(nav=index|nav=search|nav=toc))/;
			var c = e.exec(i);
			if (c != null) {
				var a = c[2];
				if (a == "nav=index") {
					hmLayout.startTab = 1;
				} else {
					if (a == "nav=search") {
						hmLayout.startTab = 2;
					}
				}
			}
			var b = /(\?|&)([^&?]?search=([^&?]+))/;
			var c = b.exec(i);
			if (c != null) {
				hmLayout.hmSearchArg = decodeURIComponent(c[3]);
				hmLayout.startTab = 2;
			}
			var d = /(\?|&)([^&?]?index=([^&?]+))/;
			var c = d.exec(i);
			if (c != null) {
				hmLayout.hmIndexArg = decodeURIComponent(c[3]);
				hmLayout.startTab = 1;
			}
		}
	},
	loadAutoTabs: function () {
		if (
			!hmBrowser.desktopOS ||
			!hmWebHelp.server ||
			hmnavpages.query != "" ||
			hmnavpages.hash != ""
		) {
			return;
		}
		var b, c, a;
		if (hmWebHelp.tabsCookie.length > 0 && hmnavpages.userReload) {
			c = 1;
			a = hmWebHelp.tabsCookie.length - 1 < 5 ? hmWebHelp.tabsCookie.length : 4;
			b = hmWebHelp.tabsCookie;
		} else {
			if (hmnavpages.autoTabs) {
				c = 1;
				a = hmnavpages.autoTabs.length < 5 ? hmnavpages.autoTabs.length : 4;
				b = hmnavpages.autoTabs;
			} else {
				return;
			}
		}
		if (b.length < 2) {
			return;
		}
		hmWebHelp.autoTabs = true;
		var d = setInterval(function () {
			if (hmWebHelp.newTabReady) {
				if (hmWebHelp.fileExists(b[c] + hmWebHelp.textn)) {
					hmWebHelp.newTab(b[c]);
				}
				c++;
				if (c === a) {
					clearInterval(d);
					setTimeout(function () {
						hmWebHelp.autoTabs = false;
						hmTabSlider.goToTab(0, true);
					}, 300);
				}
			}
		}, 50);
	},
	setFrameDoc: function (b, c) {
		var d = document.getElementById(b);
		var a = setInterval(function () {
			try {
				if ($("body", d.contentWindow.document).html()) {
					clearInterval(a);
					switch (b) {
						case "hmnavigation":
							hmWebHelp.tocDoc = d.contentWindow.document;
							hmWebHelp.tocWin = d.contentWindow;
							break;
						case "hmcontent":
							hmWebHelp.mainDoc = d.contentWindow.document;
							hmWebHelp.mainWin = d.contentWindow;
							break;
						case "hmindex":
							hmWebHelp.idxDoc = d.contentWindow.document;
							hmWebHelp.idxWin = d.contentWindow;
							break;
						case "hmsearchframe":
							hmWebHelp.schDoc = d.contentWindow.document;
							hmWebHelp.schWin = d.contentWindow;
							break;
						default:
							alert("no such framedoc found");
					}
				}
			} catch (e) {
				clearInterval(a);
				document.location.replace(c);
			}
		}, 100);
	},
	writeTopic: function () {
		var d = hmnavpages.query,
			b;
		if (d != "") {
			b = d.indexOf("&");
			if (b > -1) {
				d = d.substr(0, b);
			}
			if (d.indexOf("=") == -1) {
				hmnavpages.def = d + hmnavpages.hash;
			}
			if (typeof hmGetContextId != "undefined") {
				var a = hmGetContextId(hmnavpages.query);
				if (a != "" && a != "undefined") {
					hmnavpages.def = a + hmnavpages.hash;
				}
			}
		}
		var c = hmnavpages.def;
		if (hmnavpages.cachefix) {
			c = hmCacheFix.getTarget(hmnavpages.def);
		}
		document.write(
			'<iframe name="hmcontent" id="hmcontent" class="scrollpane" src="' +
				c +
				'" title="Content Tab" height="100%" width="100%" frameborder="0" scrolling="auto"></iframe>'
		);
	},
	writeTOC: function () {
		var a = hmnavpages.toc;
		if (hmnavpages.cachefix) {
			a = hmCacheFix.getTarget(a);
		}
		document.write(
			'<iframe name="hmnavigation" id="hmnavigation" class="scrollpane" src="' +
				a +
				'" title="Navigation Pane" height="100%" width="100%" frameborder="0" scrolling="auto"></iframe>'
		);
	},
	printTopic: function (a) {
		var b = hmnavpages.printHL ? "&" + lastSearch : "";
		a += "?toc=0&printWindow" + b;
		window.open(
			a,
			"",
			"toolbar=1,scrollbars=1,location=0,status=1,menubar=1,titlebar=1,resizable=1"
		);
		lastSearch = "";
	},
	maxZindex: function () {
		var a = document.getElementsByTagName
			? document.getElementsByTagName("*")
			: document.all;
		return a.length;
	},
	currentFrameID: function () {
		var b = "";
		var a = $(hmWebHelp.tabsapi.getCurrentTab()).parent().find("a").attr("id");
		switch (a) {
			case "topictablink":
				b = "hmcontent";
				break;
			case "indextablink":
				b = null;
				break;
			case "searchtablink":
				b = null;
				break;
			default:
				b = a.replace("Link", "Frame");
		}
		return b;
	},
	togTogCheck: function () {
		var c = hmWebHelp.currentFrameID();
		if (!c) {
			hmWebHelp.enableTool("idShowHide", false);
			hmWebHelp.enableTool("idFeedBack", false);
			hmWebHelp.enableTool("idPrinter", false);
			return false;
		}
		var b;
		try {
			b = document.getElementById(c).contentWindow.HMToggles;
		} catch (a) {
			b = false;
		}
		if (b && b.length > 0) {
			hmWebHelp.enableTool("idShowHide", true);
		} else {
			hmWebHelp.enableTool("idShowHide", false);
		}
		if (c) {
			hmWebHelp.enableTool("idFeedBack", true);
			hmWebHelp.enableTool("idPrinter", true);
		}
	},
	toggleToggles: function () {
		var b = new Date().getTime();
		if (b - hmWebHelp.timerCheck < 800) {
			return;
		}
		hmWebHelp.timerCheck = b;
		var a = hmWebHelp.currentFrameID();
		if (!a) {
			return false;
		} else {
			document.getElementById(a).contentWindow.toggleToggles();
		}
	},
	clipTitle: function (e, b) {
		e = trimString(e);
		e = e.replace(/((\s|&nbsp;)+)/gi, " ");
		var d = e;
		var g = b;
		var f = 0;
		var a = "";
		var c = "";
		if (e.length > b) {
			e = e + " ";
			c = e.substr(0, e.indexOf(" "));
			if (c.length >= b) {
				c = e.substr(0, b);
				return c + "&hellip;";
			}
			e = trimString(e);
			d = e.substr(0, b);
			e = e + " ";
			do {
				g++;
				d = e.substr(0, g);
			} while (d.substr(d.length - 1, 1) != " ");
			d = trimString(d);
			e = trimString(e);
			f = g - b;
			a = trimString(e.substr(d.lastIndexOf(" ")));
			a = trimString(a.substr(0, a.indexOf(" ")));
			if (f < 5) {
				return (
					trimString(
						e.substr(0, trimString(d).lastIndexOf(" ") + a.length + 1)
					) + "&hellip;"
				);
			} else {
				return (
					trimString(e.substr(0, trimString(d).lastIndexOf(" "))) + "&hellip;"
				);
			}
		} else {
			return e;
		}
	},
	deSelect: function () {
		if (window.getSelection) {
			window.getSelection().removeAllRanges();
		} else {
			if (document.selection) {
				document.selection.empty();
			}
		}
		return false;
	},
	resizeNav: function (f, d) {
		hmWebHelp.deSelect();
		if ($("img#navshowhide").offset().left > 100) {
			var c =
				!document.all && !window.opera ? f.clientX - d : event.clientX - d;
			var a = hmWebHelp.navWidth + c < 180 ? 180 : hmWebHelp.navWidth + c;
			var b = a + 17;
			$("div#hmnavbox").css("width", a + "px");
			$("div#hmtopicpane").css("left", b + "px");
		}
	},
	unQuot: function (a) {
		a = a.replace(/&gt;/g, ">");
		a = a.replace(/&lt;/g, "<");
		a = a.replace(/&quot;/g, '"');
		a = a.replace(/&amp;/g, "&");
		if (hmnavpages.fb_unicode) {
			return encodeURIComponent(a);
		} else {
			a = escape(a);
			a = a.replace(/%E2|%E0|%E5|%E1|%E3/g, "a");
			a = a.replace(/%C5|%C0|%C1|%C2|%C3/g, "A");
			a = a.replace(/%C7/g, "C");
			a = a.replace(/%E7/g, "c");
			a = a.replace(/%E9|%EA|%EB|%E8/g, "e");
			a = a.replace(/%C9|%CA|%C8|%CB/g, "E");
			a = a.replace(/%u0192/g, "f");
			a = a.replace(/%EF|%EE|%EC|%ED/g, "i");
			a = a.replace(/%CF|%CD|%CE|%CC/g, "I");
			a = a.replace(/%F1/g, "n");
			a = a.replace(/%D1/g, "N");
			a = a.replace(/%F4|%F2|%F3|%F5|%F8/g, "o");
			a = a.replace(/%D4|%D2|%D3|%D5|%D8/g, "O");
			a = a.replace(/%u0161/g, "s");
			a = a.replace(/%u0160/g, "S");
			a = a.replace(/%FB|%FA|%F9/g, "u");
			a = a.replace(/%DB|%DA|%D9/g, "U");
			a = a.replace(/%FF|%FD/g, "y");
			a = a.replace(/%DD|%u0178/g, "Y");
			a = a.replace(/%FC/g, "ue");
			a = a.replace(/%DC/g, "Ue");
			a = a.replace(/%E4|%E6/g, "ae");
			a = a.replace(/%C4|%C6/g, "Ae");
			a = a.replace(/%F6|%u0153/g, "oe");
			a = a.replace(/%D6/g, "Oe");
			a = a.replace(/%DF/g, "ss");
			a = a.replace(/%24CRLF%24/g, "%0A%0D");
			return a;
		}
	},
	mailFB: function (c) {
		var f = hmWebHelp.currentFrameID();
		if (!f) {
			return false;
		}
		f = document.getElementById(f).contentWindow;
		if (f.tVars.mailUrl !== "") {
			var a = f.tVars.mailUrl;
			var l = f.tVars.mailUrlQuery !== "" ? f.tVars.mailUrlQuery : false;
			a = trimString(a);
			a = a.replace(/\?$/, "").replace(/\%20/g, " ");
			if (l) {
				l = trimString(l);
				l = l
					.replace(/^\?/, "")
					.replace(/&amp;/g, "&")
					.replace(/&gt;/g, ">")
					.replace(/&lt;/g, "<")
					.replace(/\%20/g, " ")
					.replace(/&quot;/g, '"')
					.replace(/&apos;/g, "'");
				a = a + "?" + l;
			}
			a = encodeURI(a);
			var k = window.open(a, "fbWin", "", false);
			return;
		}
		var g = hmWebHelp.unQuot(f.tVars.mailsubject);
		var b = hmWebHelp.unQuot(f.tVars.mailpath);
		var e = hmWebHelp.unQuot(f.tVars.mailbody);
		var h = hmWebHelp.unQuot(f.tVars.mailid);
		var i = function (q) {
			if (q.substr(0, 2) !== "$$") {
				return q;
			}
			var p = "";
			q = q
				.replace(/^\$\$/g, "")
				.replace(/\$\$$/, "")
				.replace(/\/\//g, "/")
				.replace(/\"/g, "");
			q = q.split("/");
			if (q.length === 4) {
				p = '"' + q[0] + '" <' + q[1] + "@" + q[2] + "." + q[3] + ">";
			} else {
				if (q.length === 3) {
					p = q[0] + "@" + q[1] + "." + q[2];
				} else {
					alert("Error: Invalid idFeedBack address format!");
					return;
				}
			}
			return p;
		};
		var j = i(hmfb.mailrecipient);
		var o = i(hmfb.simplerecipient);
		if (!c) {
			var n =
				"mailto:" +
				(hmnavpages.fb_unicode ? encodeURIComponent(j) : escape(j)) +
				"?subject=" +
				g;
			var m = "&body=Ref:%20" + b + "%20ID:%20" + h + "%0A%0D" + e + "%0A%0D";
		} else {
			var n =
				"mailto:" +
				(hmnavpages.fb_unicode ? encodeURIComponent(o) : escape(o)) +
				"?subject=" +
				f.tVars.simplesubject;
			var m = "&body=Ref-ID:%20" + h + "%0A%0D";
		}
		var d = n + m;
		document.location.href = d;
	},
	ffFix: function () {
		if (!/gecko.+?firefox/i.test(navigator.UserAgent)) {
			return;
		}
		var a = document.location.search;
		if (
			a.indexOf("r2d2") > -1 ||
			a.indexOf("nav=") > -1 ||
			a.indexOf("search=") > -1 ||
			a.indexOf("index=") > -1
		) {
			return;
		} else {
			a = a == "" ? "?r2d2" : a + "&r2d2";
			document.location.search = a;
		}
	},
	hmInit: function () {
		hmWebHelp.parseUrl(document.location.search, document.location.hash);
		hmnavpages.autoTabs = (function () {
			var j = hmnavpages.autoTabs;
			if (j.substr(2, 9) === "AUTO_TABS") {
				return false;
			} else {
				if (j === "") {
					return false;
				}
				j = j
					.replace(/ /g, "")
					.replace(/&nbsp;/g, "")
					.replace(/,$/, "")
					.toLowerCase();
				return j.split(",");
			}
		})();
		if ((hmnavpages.userReload || hmnavpages.autoTabs) && hmWebHelp.server) {
			hmWebHelp.doTabsCookie("getTabsCookie");
			if (
				(!hmWebHelp.tabsCookie || hmWebHelp.tabsCookie.length < 1) &&
				hmnavpages.autoTabs &&
				hmWebHelp.fileExists(hmnavpages.autoTabs[0] + hmWebHelp.textn)
			) {
				document.getElementById("hmcontent").src =
					hmnavpages.autoTabs[0] + hmWebHelp.textn;
			} else {
				if (
					hmnavpages.userReload &&
					hmWebHelp.fileExists(hmWebHelp.tabsCookie[0] + hmWebHelp.textn)
				) {
					if (
						hmWebHelp.tabsCookie.length > 0 &&
						hmWebHelp.tabsCookie[0] !==
							hmnavpages.def.substr(0, hmnavpages.def.lastIndexOf("."))
					) {
						document.getElementById("hmcontent").src =
							hmWebHelp.tabsCookie[0] + hmWebHelp.textn;
					}
				} else {
					doCookies.deleteCookie("openTabs");
				}
			}
			if (hmnavpages.userReload) {
				$(window).unload(function () {
					hmWebHelp.doTabsCookie("setTabsCookie");
				});
			}
		}
		$("body").prepend('<div id="unclicker"></div>');
		$("div#hmnavbox").css("width", hmWebHelp.navWidth + "px");
		$("div#hmtopicpane").css("left", hmWebHelp.navWidth + 17 + "px");
		hmpldata.show = hmpldata.show && hmBrowser.desktopOS && !hmBrowser.IE8;
		if (hmpldata.show) {
			$("body").prepend(
				'<div id="permalink" class="popups"><table cellspacing="3" cellpadding="0" width="400" height="50"><tr><td align="left"><div id="permalink_box" style="position:relative">&nbsp;<input type="button" id="selectPermalink" value="' +
					hmpldata.select +
					'" /></div></td><td align="center"><input type="button" id="bookmarkPermalink" value="' +
					hmpldata.bookmark +
					'" onClick="doPermalink(\'bookmark\')" /></td><td align="right"><input type="button" id="closePermalink" value="' +
					hmpldata.close +
					'" onClick="doPermalink(\'close\')" /></td></tr><tr id="offlinemessage"><td colspan="3" align="center"> <p>' +
					hmpldata.manualcopy +
					'</p></td></tr><tr><td colspan="3" align="center"> <textarea id="plinkBox" readonly="readonly"></textarea></td></tr></table></div>'
			);
			$("td#idTopicNavTD").prepend(
				'<div class="nav-icon-box-right" id="idPermalinkTool"><span id="idNavIconPermalink" onclick="doPermalink(hmnavpages.top);"><img id="idPermalinkOn" class="nav-icon" src="permalink.png" alt="' +
					hmpldata.copy +
					'" title="' +
					hmpldata.copy +
					'"/></span><img id="idPermalinkOff" src="permalinkoff.png" /><br /><span id="idPermalinkText" class="nav-text-on">' +
					hmpldata.title +
					"</span></div>"
			);
		}
		$("input[id*='Permalink']").css("cursor", "pointer");
		$("div#hmnavbox").prepend(
			'<div id="hmdragdivider" /><div id="hmnavhandle"><a href="javascript: void(0);" onclick="hmWebHelp.showHideNav()"><img src="nav_close.png" id="navshowhide" alt="' +
				hminfo.hidenav +
				'" title="' +
				hminfo.hidenav +
				'" border="0"/></a></div>'
		);
		var a = hmnavpages.idx;
		if (hmnavpages.cachefix && hmnavpages.idx != "") {
			a = hmCacheFix.getTarget(a);
		}
		var c = hmnavpages.sch;
		if (hmnavpages.cachefix && hmnavpages.sch != "") {
			c = hmCacheFix.getTarget(c);
		}
		$("div#hmtopicbox").append(
			'<div id="hmindexbox"><iframe name="hmindex" id="hmindex" class="scrollpane" src="' +
				a +
				'" title="Index Tab" height="100%" width="100%" frameborder="0" scrolling="auto"></iframe></div><div id="hmsearchbox"><iframe name="hmsearchframe" id="hmsearchframe" class="scrollpane" src="' +
				c +
				'" title="Search Tab" height="100%" width="100%" frameborder="0" scrolling="auto"></iframe>'
		);
		$("#hmnavbox").css(
			"margin-top",
			parseInt($("#hmnavbox").css("margin-top")) + 8 + "px"
		);
		$("#hmtopicpane").css(
			"margin-top",
			parseInt($("#hmtopicpane").css("margin-top")) + 8 + "px"
		);
		if (hmnavpages.idx == "") {
			$("li#indextab").hide();
		}
		if (hmnavpages.sch == "") {
			$("li#searchtab").hide();
		}
		// стр.1640 выдает ошибку: Uncaught TypeError: $(...).tabs is not a function
		$("ul.tabs").tabs("div#hmtopicbox > div");
		hmWebHelp.tabsapi = $("ul.tabs").data("tabs");
		$("div#hmdragdivider").mousedown(function (k) {
			if (!hmWebHelp.navHidden) {
				var j = !document.all && !window.opera ? k.clientX : event.clientX;
				$("div#unclicker").show().css("cursor", "col-resize");
				$("div#unclicker")
					.bind("mousemove", function (l) {
						hmWebHelp.resizeNav(l, j);
					})
					.bind("mouseup", function () {
						$("div#unclicker").hide().css("cursor", "default");
						hmWebHelp.navWidth = parseInt($("div#hmnavbox").css("width"), 10);
						$(this).unbind("mousemove");
						$(this).unbind("mouseup");
					});
			}
		});
		if (
			navigator.platform.indexOf("iPad") < 0 &&
			!/Android/.test(navigator.userAgent)
		) {
			$("img.navicon")
				.mouseover(function () {
					$(this).toggleClass("nav-icon nav-icon-H");
				})
				.mouseout(function () {
					$(this).toggleClass("nav-icon nav-icon-H");
				});
			$("ul#topictabs").on("mouseenter", "li.hmtabs", function () {
				$(this).find("a,span").not("[class='current']").addClass("hover");
				$(this).find("img.closetab").show();
			});
			$("ul#topictabs").on("mouseleave", "li.hmtabs", function () {
				$(this).find("a,span").not("[class='current']").removeClass("hover");
				$(this).find("img.closetab").hide();
			});
			$("li#indextab img.closetab, li#searchtab img.closetab")
				.mouseover(function () {
					$(this).css("cursor", "pointer").attr("src", "closetabon.png");
				})
				.mouseout(function () {
					$(this).attr("src", "closetaboff.png");
				})
				.click(function () {
					$(this).parent().hide();
					hmTabSlider.updateSlider();
					if ($(this).parent().has("a.current").length > 0) {
						hmWebHelp.tabsapi.click(0);
						hmTabSlider.hiTabMenu();
						hmWebHelp.enableTool("idNewTab", true);
						hmWebHelp.enableTool("idUndocTab", false);
					}
				});
		}
		if (
			"ontouchstart" in window ||
			navigator.maxTouchPoints > 0 ||
			navigator.msMaxTouchPoints > 0
		) {
			var f = "touchstart";
			if ("onpointerdown" in window) {
				f = "pointerdown";
			} else {
				if ("onmspointerdown" in window) {
					f = "mspointerdown";
				}
			}
			$("li.hmtabs,span:has(img.navicon)").bind(f, function (j) {
				j.target.click();
				j.preventDefault();
			});
			if (
				("onorientationchange" in window || hmBrowser.windowsTouch) &&
				hmBrowser.fullScreenMode &&
				window.orientation
			) {
				var b = screen.width < screen.height ? screen.width : screen.height;
				var h = screen.width > screen.height ? screen.width : screen.height;
				if (h / b > 1.4) {
					$(window).bind(hmBrowser.rotation, function () {
						setTimeout(function () {
							var j = Math.abs(window.orientation);
							alert(window.orientation);
							if (j == 90) {
								if (hmWebHelp.navHidden) {
									hmWebHelp.showHideNav();
								}
							} else {
								if (!hmWebHelp.navHidden) {
									hmWebHelp.showHideNav();
								}
							}
						}, 500);
					});
				}
			}
		}
		hmWebHelp.enableTool("idUndocTab", false);
		if (
			hmpldata.hurl.substr(0, hmpldata.hurl.lastIndexOf("/")) !=
			location.href.substr(0, location.href.lastIndexOf("/"))
		) {
			hmWebHelp.enableTool("social", false);
		}
		$("input#idInputSearch").keyup(function (j) {
			if (
				j.keyCode == 13 &&
				$("input#idInputSearch").val().length > 0 &&
				hmWebHelp.qSearch
			) {
				hmWebHelp.remoteSearch();
			}
		});
		$("li.hmtabs")
			.not("li#topictab")
			.click(function () {
				if (hmWebHelp.tabsapi.getIndex() != 0) {
					hmWebHelp.enableTool("idNewTab", false);
					hmWebHelp.enableTool("idUndocTab", true);
					hmTabSlider.hiTabMenu();
					hmTabSlider.alignTab(hmWebHelp.tabsapi.getIndex());
				}
			});
		$("li#topictab").click(function () {
			hmWebHelp.enableTool("idNewTab", true);
			hmWebHelp.enableTool("idUndocTab", false);
			hmTabSlider.hiTabMenu();
			hmTabSlider.alignTab(hmWebHelp.tabsapi.getIndex());
		});
		$("li#indextab").click(function () {
			setTimeout(function () {
				hmWebHelp.idxWin.nsHeader();
			}, 100);
		});
		$("img.tabPlayer")
			.mouseover(function () {
				$(this).toggleClass("tabPlayer tabPlayerH");
			})
			.mouseout(function () {
				$(this).toggleClass("tabPlayerH tabPlayer");
			});
		$("img#toggleTabMenu").bind("click", function (j) {
			j.stopPropagation();
			hmTabSlider.togTabMenu();
			if ($("div#tabsMenu").is(":visible")) {
				$("div#unclicker")
					.show()
					.bind("click.tabmenu", function () {
						$("div#tabsMenu").slideUp("fast");
						$(this).hide().unbind("click.tabmenu");
					});
			}
		});
		if (document.all && !window.opera) {
			$("iframe#hmcontent").attr("src", $("iframe#hmcontent").attr("src"));
		}
		hmWebHelp.setFrameDoc("hmnavigation", hmnavpages.toc);
		hmWebHelp.setFrameDoc("hmcontent", hmnavpages.def);
		hmWebHelp.setFrameDoc("hmindex", hmnavpages.idx);
		hmWebHelp.setFrameDoc("hmsearchframe", hmnavpages.sch);
		if (hmnavpages.cachefix) {
			$("a.nav-cache").on("click", function (j) {
				j.preventDefault();
				$("iframe#hmcontent").attr(
					"src",
					hmCacheFix.getTarget($(this).attr("href"))
				);
			});
		}
		var e = 0;
		var g = setInterval(function () {
			if (
				hmWebHelp.tocDoc != 0 &&
				hmWebHelp.idxDoc != 0 &&
				hmWebHelp.schDoc != 0 &&
				hmWebHelp.mainDoc != 0 &&
				hmWebHelp.newTabReady
			) {
				clearInterval(g);
				hmWebHelp.hmWebHelpReady = true;
				hmWebHelp.loadAutoTabs();
			} else {
				e++;
			}
		}, 100);
		$("li.hmtabs, li.hmtabs a").disableTextSelect();
		if (hmWebHelp.server && hmpldata.show) {
			if (hmWebHelp.isFlash) {
				$.getScript("ZeroClipboard.js", function () {
					initClipboard();
				});
			}
		} else {
			if (hmpldata.show) {
				$("input#selectPermalink").bind("click", function () {
					doPermalink("alert");
				});
			}
		}
		if (!hmBrowser.desktopOS) {
			hmWebHelp.tbToolAdjust();
			$(window).bind("resize", function () {
				hmWebHelp.tbToolAdjust();
			});
		} else {
			var i = 0;
			var d = 7;
			if (/applewebkit.+?chrome/gi.test(hmBrowser.agent)) {
				d = 9;
			}
			setTimeout(function () {
				$(
					"div#idSearch:visible,.nav-icon-box-left:visible,.nav-icon-box-right:visible"
				).each(function () {
					i += $(this).outerWidth() + d;
				});
				$("div#idToolbar").css({ "min-width": i + "px" });
			}, 600);
		}
		hmWebHelp.initBanner(0, true);
		if (hmnavpages.banneroff) {
			hmWebHelp.toggleBanner(true);
		}
		document.onselectstart = function () {
			return false;
		};
		$("#hmcontent").bind("load", function () {
			var j, n, m;
			var k = hmWebHelp.external;
			m = document.location.href;
			m = m.substr(0, m.lastIndexOf("/"));
			try {
				j = this.contentDocument.location.href;
				if (j) {
					if (hmWebHelp.external) {
						n = hmWebHelp.external;
					} else {
						n = j.substr(j.lastIndexOf("/") + 1);
						j = j.substr(0, j.lastIndexOf("/"));
						if (this.contentWindow.tVars != null) {
							hmWebHelp.external = false;
						} else {
							hmWebHelp.external = $(
								"a[href$='" + n + "']",
								hmWebHelp.tocDoc
							).attr("href");
						}
					}
				}
			} catch (l) {
				if (!hmWebHelp.external) {
					hmWebHelp.external = hminfo.webfile;
				}
			}
			if (k && !hmWebHelp.external && n) {
				lazysync(n);
				hmWebHelp.external = false;
				hmTabSlider.goToTab(0, true);
			} else {
				if (hmWebHelp.external && n) {
					m = $("a[href='" + hmWebHelp.external + "']", hmWebHelp.tocDoc)
						.children("span")
						.text();
					$("a#topictablink", parent.document).html("<span>" + m + "</span>");
					lazysync(hmWebHelp.external);
					hmTabSlider.goToTab(0, true);
					hmWebHelp.external = false;
				} else {
					if (hmWebHelp.external && !n) {
						if (!/^http/.test(hmWebHelp.external)) {
							$("a#topictablink", parent.document).html(
								"<span>" + hmWebHelp.external + "</span>"
							);
							$("span[class^='hilight']", hmWebHelp.tocDoc).each(function () {
								var o = $(this).attr("class");
								o = o.substr(o.length - 1);
								$(this).attr("class", "heading" + o);
							});
						}
						hmTabSlider.goToTab(0, true);
						hmWebHelp.external = false;
					}
				}
			}
		});
	},
	initHeadMenu: function () {
		$("ul.topnav li ul.subnav").css(
			"top",
			$($("ul.topnav")[0]).height() + "px"
		);
		if (
			!(
				"ontouchstart" in window ||
				navigator.maxTouchPoints > 0 ||
				navigator.msMaxTouchPoints > 0
			)
		) {
			$("ul.topnav li").hover(
				function () {
					$(this).find("ul.subnav").slideDown("fast");
				},
				function () {
					$(this).find("ul.subnav").hide();
				}
			);
		} else {
			var a = "touchstart";
			if ("onpointerdown" in window) {
				a = "pointerdown";
			} else {
				if ("onmspointerdown" in window) {
					a = "mspointerdown";
				}
			}
			$("ul.topnav > li:has(ul) > a, div#unclicker").on(a, function (b) {
				b.target.click();
				b.preventDefault();
			});
			$("ul.topnav > li:has(ul) > a").on("click", function (b) {
				b.preventDefault();
				$("div#unclicker")
					.bind("click.closemenu", function () {
						$("ul.topnav li").find("ul.subnav").hide();
						$("div#unclicker").unbind("click.closemenu");
						$("div#unclicker").hide();
					})
					.show();
				if ($(this).parent().find("ul.subnav").is(":hidden")) {
					$("ul.topnav li").find("ul.subnav").hide();
					$(this).parent().find("ul.subnav").slideDown("fast");
				}
			});
			$("ul.subnav li a").on("click", function () {
				$("ul.topnav li").find("ul.subnav").hide();
			});
		}
		hmLayout.menuInit = true;
	},
	initBanner: function (a, e) {
		hmLayout.banner = $("div#idContainer").length > 0;
		if (!a) {
			a = 0;
		}
		if (!hmLayout.menuInit && hmLayout.banner) {
			hmWebHelp.initHeadMenu();
		}
		var b = $("#hmtabscontrols").height();
		var d = $("div#idContainer").is(":hidden");
		var c = $("div#idToolbar").outerHeight();
		if ((d || e) && hmLayout.banner) {
			c += $("div#idContainer").outerHeight() - 5;
		}
		if (!hmLayout.banner) {
			$("div#idToolbar").toggleClass("banner-toolbar compact-toolbar");
		}
		$("div#hmnavbox").animate({ top: c }, a);
		$("div#hmtopicpane").animate({ top: c + b - 5 }, a);
	},
	toggleBanner: function (a) {
		var e = new Date().getTime();
		if (e - hmWebHelp.timerCheck < 800) {
			return;
		}
		hmWebHelp.timerCheck = e;
		if (!hmLayout.banner) {
			return;
		}
		var c = $("#hmtabscontrols").height();
		var d = $("div#idContainer").is(":hidden");
		var b = $("div#idToolbar").outerHeight();
		if (d) {
			b += $("div#idContainer").outerHeight() - 5;
			$("ul.topnav").show();
		} else {
			$("ul.topnav").hide();
		}
		$("div#idToolbar").toggleClass("banner-toolbar compact-toolbar");
		if (a) {
			hmWebHelp.initBanner(0, false);
			$("div#idContainer").slideToggle(0);
		} else {
			hmWebHelp.initBanner(hmLayout.bannerSpeed, false);
			$("div#idContainer").slideToggle(hmLayout.bannerSpeed);
		}
	},
	showHideNav: function () {
		var a = -(hmWebHelp.navWidth - 5) + "";
		var b = hmWebHelp.navWidth + 17 + "";
		if (parseInt($("div#hmnavbox").css("left"), 10) === 0) {
			$("div#hmtocbody", hmWebHelp.tocDoc).css("overflow", "hidden");
			$("div#hmdragdivider").css("cursor", "default");
			$("div#hmnavbox").animate({ left: a }, 400, function () {});
			$("div#hmtopicpane").animate({ left: "22" }, 400, function () {
				$("img#navshowhide").attr({
					alt: hminfo.shownav,
					title: hminfo.shownav,
					src: "nav_open.png",
				});
			});
			hmWebHelp.navHidden = true;
		} else {
			$("div#hmdragdivider").css("cursor", "col-resize");
			$("div#hmtocbody", hmWebHelp.tocDoc).css("overflow", "auto");
			$("div#hmnavbox").animate({ left: "0" }, 400, function () {});
			$("div#hmtopicpane").animate({ left: b }, 400, function () {
				$("img#navshowhide").attr({
					alt: hminfo.hidenav,
					title: hminfo.hidenav,
					src: "nav_close.png",
				});
			});
			hmWebHelp.navHidden = false;
		}
	},
	newTab: function (d) {
		var c = d
			? d
			: hmWebHelp.currentPage.substr(0, hmWebHelp.currentPage.lastIndexOf("."));
		var e =
			c + hmWebHelp.currentPage.substr(hmWebHelp.currentPage.lastIndexOf("."));
		hmWebHelp.newTabReady = false;
		var b = c + "Div";
		var a = c + "Frame";
		var g = c + "Link";
		if ($.inArray(c, hmWebHelp.openTabs) > -1) {
			alert(hminfo.tabopen);
			return;
		}
		if (hmnavpages.cachefix) {
			e = hmCacheFix.getTarget(e);
		}
		hmWebHelp.isNewTab = true;
		hmWebHelp.openTabs.push(c);
		hmWebHelp.tabsapi.destroy();
		var f = !hmnavpages.isEWriter ? ' ondblclick="hmWebHelp.undockTab() ' : "";
		$("li#searchtab").after(
			'<li class="hmtabs" id="' +
				c +
				'" hpage="' +
				e +
				f +
				'style="visibility: hidden;"><img class="closetab" src="closetaboff.png" alt="' +
				hminfo.tabclose +
				'" title="' +
				hminfo.tabclose +
				'"/><a href="#" id="' +
				g +
				'"><span>-</span></a></li>'
		);
		$("div#hmsearchbox").after(
			'<div class="hmnewtabbox" id="' +
				b +
				'"><iframe name="' +
				a +
				'" id="' +
				a +
				'" class="scrollpane" src="' +
				e +
				'" title="New Tab" height="100%" width="100%" frameborder="0" scrolling="auto"></iframe></div>'
		);
		$("ul.tabs").tabs("div#hmtopicbox > div");
		hmWebHelp.tabsapi = $("ul.tabs").data("tabs");
		hmWebHelp.initTab($("li#" + c + ""), b, c);
		$("li#" + c + ",li#" + c + " a").disableTextSelect();
		setTimeout(function () {
			$("li#" + c + "").css("visibility", "visible");
			if (!d) {
				hmWebHelp.tabsapi.click(3);
			}
		}, 200);
	},
	enableTool: function (a, b) {
		if (b) {
			$("img#" + a + "On").show();
			$("img#" + a + "Off").hide();
			$("span#" + a + "Text").removeClass("navtextOff");
		} else {
			$("img#" + a + "On").hide();
			$("img#" + a + "Off").show();
			$("span#" + a + "Text").addClass("navtextOff");
		}
	},
	initTab: function (a, c, b) {
		$(a).click(function () {
			hmWebHelp.enableTool("idNewTab", false);
			hmWebHelp.enableTool("idUndocTab", true);
			hmTabSlider.hiTabMenu();
			hmTabSlider.alignTab(hmWebHelp.tabsapi.getIndex());
			hmWebHelp.activePage = $(this).attr("hpage");
			var d = hmWebHelp.currentFrameID();
			if (d) {
				document.getElementById(d).contentWindow.nsheader();
			}
			lazysync(hmWebHelp.activePage);
		});
		$("img.closetab", a)
			.mouseover(function () {
				$(this).css("cursor", "pointer").attr("src", "closetabon.png");
			})
			.mouseout(function () {
				$(this).attr("src", "closetaboff.png");
			})
			.click(function () {
				var e = 0;
				if ($(this).parent().has("a.current").length > 0) {
					e = hmWebHelp.tabsapi.getIndex() - 1;
					e = e < 3 ? 0 : e;
				} else {
					e = hmWebHelp.tabsapi.getIndex();
					var d = $(this).siblings("a").attr("id");
					if (hmTabSlider.userTabs[d] < e) {
						e--;
					}
				}
				hmWebHelp.killTab($(this).parent(), c, b, e);
			});
	},
	killTab: function (c, a, d, b) {
		hmWebHelp.tabsapi.destroy();
		$(c).remove();
		$("div#" + a).remove();
		hmWebHelp.openTabs.splice(hmWebHelp.openTabs.indexOf(d), 1);
		$("ul.tabs").tabs("div#hmtopicbox > div");
		hmWebHelp.tabsapi = $("ul.tabs").data("tabs");
		hmTabSlider.updateSlider();
		hmWebHelp.tabsapi.click(b);
		hmTabSlider.hiTabMenu();
		if (b == 0) {
			hmWebHelp.enableTool("idNewTab", true);
		}
	},
	windowPoller: function () {
		var c;
		if (hmWebHelp.openWindows.length > 0) {
			for (var b = 0; b < hmWebHelp.openWindows.length; b++) {
				c = hmWebHelp.openWindows[b].win;
				if (!c || c.closed) {
					var a = hmWebHelp.openWindows[b].tool;
					$(hmWebHelp.openWindows[b].liID).show();
					$(hmWebHelp.openWindows[b].tabID).show();
					if (a != "topic") {
						hmWebHelp.enableTool(a, true);
						if (a == "search") {
							$("#hmsearchframe")
								.contents()
								.find("input#zoom_searchbox")
								.val(hmWebHelp.searchReturnArgs);
							$("#hmsearchframe").contents().find("form").submit();
							hmWebHelp.tabsapi.click(2);
							hmTabSlider.updateToolbar(2);
						} else {
							if (a == "index") {
								hmWebHelp.tabsapi.click(1);
								hmTabSlider.updateToolbar(1);
							}
						}
					}
					window.focus();
					setTimeout(function () {
						hmTabSlider.updateSlider();
					}, 300);
					hmWebHelp.openWindows.splice(b, 1);
					break;
				}
			}
		} else {
			window.clearInterval(hmWebHelp.dockChecker);
			hmWebHelp.dockChecker = null;
		}
	},
	getCurTabDoc: function (b) {
		var c = hmWebHelp.tabsapi.getIndex();
		if (c > 0 && c < 3) {
			var a = "hmcontent";
		} else {
			var a = hmWebHelp.tabsapi
				.getCurrentTab()
				.attr("id")
				.replace("Link", "Frame");
			if (a == "topictablink") {
				a = "hmcontent";
			}
		}
		if (b == "window") {
			return document.getElementById(a).contentWindow.window;
		} else {
			return document.getElementById(a).contentWindow.document;
		}
	},
	undockTab: function () {
		var c = hmWebHelp.tabsapi.getIndex();
		if (c == 0) {
			alert(hminfo.noundock);
			return;
		}
		var e = c == 1 ? "index" : c == 2 ? "search" : "topic";
		var b = "#" + hmWebHelp.tabsapi.getCurrentTab().attr("id");
		var a;
		hmWebHelp.tabsapi.click(0);
		hmWebHelp.activePage = hmWebHelp.currentPage;
		if (c < 3) {
			hmWebHelp.enableTool(e, false);
		}
		hmWebHelp.enableTool("idNewTab", true);
		$(b).hide();
		$(b.replace(/(.*?)Link$/gm, "li$1")).hide();
		$(b).siblings("img.closetab").hide();
		var d = $("div#hmcontentbox").width();
		var i = $("div#hmcontentbox").height();
		if (c == 2) {
			hmWebHelp.searchArgs = $("#hmsearchframe")
				.contents()
				.find("input#zoom_searchbox")
				.val();
			a = window.open(
				hmnavpages.sch,
				"hmsearchwindow",
				"toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,titlebar=0,resizable=1,width=" +
					d +
					",height=" +
					i +
					""
			);
		} else {
			if (c == 1) {
				a = window.open(
					hmnavpages.idx,
					"hmindexwindow",
					"toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,titlebar=0,resizable=1,width=" +
						d +
						",height=" +
						i +
						""
				);
			} else {
				if (c > 2) {
					var g = b.replace(/(.*?)Link$/gm, "iframe$1Frame");
					var f = hmnavpages.cachefix
						? $(g).attr("src") + "&toc=0"
						: $(g).attr("src") + "?toc=0";
					var h = b.replace(/#(.*?)Link$/gm, "$1Window");
					a = window.open(
						f,
						h,
						"toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,titlebar=0,resizable=1,width=" +
							d +
							",height=" +
							i +
							""
					);
					lazysync(hmWebHelp.currentPage);
				}
			}
		}
		hmWebHelp.enableTool("idUndocTab", false);
		hmWebHelp.openWindows.push(new openWindow(a, b, e));
		a.focus();
		if (hmWebHelp.openWindows.length === 1) {
			hmWebHelp.dockChecker = setInterval(function () {
				hmWebHelp.windowPoller();
			}, 200);
		}
		hmTabSlider.updateSlider();
	},
	topicsPane: function () {
		hmWebHelp.enableTool("idNewTab", true);
		hmWebHelp.enableTool("idUndocTab", false);
		hmWebHelp.tabsapi.click(0);
		hmTabSlider.updateSlider();
		hmWebHelp.activePage = hmWebHelp.currentPage;
	},
	userFeedback: function () {
		feedbackwindow = window.open(
			"idFeedBack.php",
			"hmfeedbackwindow",
			"toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,titlebar=0,resizable=1,width=500,height=600"
		);
	},
	indexPane: function () {
		$("li#indextab").show().parent().show();
		hmWebHelp.enableTool("idNewTab", false);
		hmWebHelp.enableTool("idUndocTab", true);
		hmWebHelp.tabsapi.click(1);
		setTimeout(function () {
			hmWebHelp.idxWin.nsHeader();
		}, 100);
		hmTabSlider.updateSlider();
		hmWebHelp.activePage = "index";
	},
	searchPane: function () {
		$("li#searchtab").show().parent().show();
		hmWebHelp.enableTool("idNewTab", false);
		hmWebHelp.enableTool("idUndocTab", true);
		hmWebHelp.tabsapi.click(2);
		hmTabSlider.updateSlider();
		hmWebHelp.activePage = "search";
	},
	remoteSearch: function () {
		var a = $("input#idInputSearch").val();
		$("li#searchtab").show("fast");
		hmWebHelp.tabsapi.click(2);
		hmWebHelp.activePage = "search";
		hmWebHelp.enableTool("idNewTab", false);
		hmWebHelp.enableTool("idUndocTab", true);
		$("#hmsearchframe").contents().find("input#zoom_searchbox").val(a);
		$("#hmsearchframe").contents().find("form").submit();
	},
	supportsStorage: function () {
		return "localStorage" in window && window.localStorage !== null;
	},
};
browserPlatform(true);
if (document.location.search != "") {
	var target = document.location.search.substr(1);
	var hash = document.location.hash;
	var xxsTest = new RegExp("javascript|:|&#58;|&#x3a;|%3a|3a;|58;|/", "i");
	if (target !== "") {
		target = xxsTest.test(target) ? "" : target;
	}
	if (hash !== "") {
		hash = xxsTest.test(hash) ? "" : hash;
	}
	if (target !== "") {
		if (target.indexOf("&") > -1) {
			target = target.substr(0, target.indexOf("&"));
		}
		if (target.indexOf("=") < 0) {
			hmnavpages.def = target + hash;
		}
	}
}
$(document).ready(function () {
	if (hmnavpages.checkChrome && !hmWebHelp.server) {
		if (chromeWarning(true)) {
			$("body").hide();
			chromeWarning(false);
			return;
		}
	}
	hmWebHelp.hmInit();
	hmTabSlider.initTabControls();
});