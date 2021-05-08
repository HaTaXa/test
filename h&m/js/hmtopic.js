/*! Topic page init functions for HM Premium Pack Version 2.71
Copyright (c) 2008-2015 by Tim Green 
All rights reserved. */
(function () {
	if (!(self != top && window.parent.window.hmWebHelp)) {
		return;
	}
	window.parent.window.hmnavpages.loadCount++;
	if (window.parent.window.hmnavpages.loadCount > 1) {
		$("meta[name='description']", window.parent.document).remove();
		$("head", window.parent.document).prepend(
			'<meta name="description" content="' + tVars.descr + '" />'
		);
		$("meta[name='keywords']", window.parent.document).remove();
		$("head", window.parent.document).prepend(
			'<meta name="keywords" content="' + tVars.keys + '" />'
		);
	}
	if (tVars.topicTitleBar) {
		var a = tVars.titleP;
		switch (tVars.titleBarContent) {
			case "project":
				a = tVars.projectTitle + " - " + tVars.titleP;
				break;
			case "parent":
				a = tVars.mailpath.substr(0, tVars.mailpath.length - 2);
				var d = 0;
				try {
					d = a.match(/&gt;/gi).length;
				} catch (c) {
					d = 0;
				}
				if (d > 1) {
					var b = a.substr(a.lastIndexOf("&gt;"));
					a = a.substr(0, a.lastIndexOf("&gt;"));
					b = a.substr(a.lastIndexOf("&gt;") + 4) + " " + b;
					a = b;
				}
				break;
			default:
				break;
		}
		a = "<title>" + a + "</title>";
		$("title", window.parent.document).remove();
		$("head", window.parent.document).prepend(a);
	}
	if (history && history.pushState) {
		var e = tVars.hmHelpPage + "?" + tVars.currP + document.location.hash;
		window.parent.window.history.replaceState(null, null, e);
	}
})();
HMSyncTOCold = HMSyncTOC;
HMSyncTOC = function (a, c) {
	try {
		var b = parent.window.hmWebHelp;
	} catch (d) {
		var b = false;
	}
	if (b) {
		if (parent.hmWebHelp.autoTabs) {
			return;
		}
	}
	b = parent.window.hmWebHelp
		? parent.window.hmWebHelp.hmTopicLoaded
		: window.opener && window.opener.hmWebHelp
		? window.opener.hmWebHelp.hmTopicLoaded
		: false;
	b = b && document.all && !window.opera;
	if (b) {
		HMSyncTOCold(a, c);
	} else {
		setTimeout(function () {
			HMSyncTOCold(a, c);
		}, 200);
	}
};
function loadScript(a, c) {
	if (c == "js") {
		var b = document.createElement("script");
		b.setAttribute("type", "text/javascript");
		b.setAttribute("src", a);
	} else {
		if (c == "css") {
			var b = document.createElement("link");
			b.setAttribute("rel", "stylesheet");
			b.setAttribute("type", "text/css");
			b.setAttribute("href", a);
		}
	}
	if (typeof b != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(b);
	}
}
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
if (parent.window.hmWebHelp) {
	if (!parent.window.hmWebHelp.isNewTab) {
		parent.window.hmWebHelp.currentPage = parent.window.hmWebHelp.activePage = window.tVars.currP;
	}
}
hmatocvars.atoc_css = "";
if (hmatocvars.atoc_show) {
	hmatocvars.atoc_css =
		"div#atocIcon {display: block;}\np.autoTOC {color:" +
		hmatocvars.atoc_linkcolor +
		";}\n\n#autoTocWrapper ul li {background-color:" +
		hmatocvars.atoc_bg +
		";}\n#autoTocWrapper,#autoTocInner {border-color:" +
		hmatocvars.atoc_border +
		"}";
}
if (document.location.search.indexOf("toc=0") > -1 && !window.opener) {
	hmatocvars.atoc_css +=
		"\ndiv#hmheader {padding: 10px 0px 0 10px; width: auto}\ndiv#idcontent {padding: 10px 10px 10px 10px; overflow-x: auto; overflow-y: scroll; position: absolute;\nright: 0px; bottom: 0px; left: 0px;}\n";
}
if (document.all && !window.opera && hmatocvars.atoc_show) {
	hmatocvars.atoc_css += "div#atocIcon {right: 20px;}";
}
if (tVars.header) {
	var pageVis = "";
	if (parent.window && parent.window.hmnavpages) {
		pageVis = "; visibility: hidden;";
	}
	addCss(
		"html,body {overflow: hidden;}\ndiv#hmheader {position: fixed; overflow: hidden; }\ndiv#idcontent {position: absolute; overflow-x: auto; overflow-y: scroll;" +
			pageVis +
			"}\n#noScriptNavHead {display: none;}\n" +
			hmatocvars.atoc_css
	);
} else {
	addCss(
		"html,body {overflow: hidden;}\ndiv#hmheader {display: none; }\ndiv#idcontent {position: absolute; top: 0px; overflow-x: auto; overflow-y: scroll;" +
			pageVis +
			"}\n#noScriptNavHead {display: none;}\n"
	);
}
var cookiesEnabled = (function () {
	var a = navigator.cookieEnabled ? true : false;
	if (typeof navigator.cookieEnabled == "undefined" && !a) {
		document.cookie = "testcookie";
		a = document.cookie.indexOf("testcookie") != -1 ? true : false;
	}
	return a;
})();
function setCookie(d, e, b, f) {
	if (b && f) {
		switch (b) {
			case "seconds":
				f = f * 1000;
				break;
			case "minutes":
				f = f * 1000 * 60;
				break;
			case "hours":
				f = f * 1000 * 60 * 60;
				break;
			case "days":
				f = f * 1000 * 60 * 60 * 24;
				break;
			default:
				f = f * 1000 * 60 * 60 * 24;
		}
	}
	if (f) {
		var c = new Date();
		c.setTime(c.getTime() + f);
		var a = "; expires=" + c.toGMTString();
	} else {
		var a = "";
	}
	document.cookie = d + "=" + e + a + "; path=/";
}
function getCookie(b) {
	if (!cookiesEnabled) {
		return null;
	}
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
}
function deleteCookie(a) {
	setCookie(a, "", "hours", -1);
}
function toggleCheck(e) {
	var a = $(e).parents("div[id^='TOGGLE'][hm\\.state='0']");
	if (a.length > 0) {
		for (var b = a.length - 1; b > -1; b--) {
			var d = $(a[b]).attr("id");
			var c = d + "_ICON";
			if ($("img[id='" + c + "']").length > 0) {
				HMToggle("expand", d, c);
			} else {
				HMToggle("expand", d);
			}
		}
		return a.length * 200;
	} else {
		return 0;
	}
}
function doPrint() {
	tVars.printMode = true;
	$("body").css("visibility", "hidden");
	setTimeout(function () {
		var a = hmAnimate;
		var b = tVars.autoPrint
			? ""
			: '<button onclick="print()" id="livePrintButton" title="' +
			  tVars.printButtonTip +
			  '"><img id="livePrintIcon" src="printer.png" />&nbsp;' +
			  tVars.printButton +
			  "</button>";
		if (a) {
			hmAnimate = false;
		}
		HMToggleExpandAll(true);
		$("div#hmheadercontents img, p#breadcrumbs").remove();
		if (!tVars.printFooter) {
			$("div.topicfooter").remove();
		}
		var c = $("div#hmheadercontents").html();
		c = '<div style="padding-bottom: 10px;">' + b + c + "</div>";
		$("div#hmheader, div#autoTocWrapper").remove();
		$("p#breadcrumbs").hide();
		$("img[id^='TOGGLE']").parent("td").remove();
		$("div#idcontent").css({
			position: "static",
			"overflow-y": "hidden",
			"overflow-x": "hidden",
			"padding-top": 0,
			visibility: "visible",
		});
		$("html").css({ overflow: "auto" });
		$(c).prependTo("div#idcontent");
		$("a, area")
			.not(":has(> img.image-toggle)")
			.attr({ href: "javascript:void(0);", onclick: "void(0);" });
		hmAnimate = a;
		$("body").css("visibility", "visible").hide().slideDown("fast");
		if (tVars.autoPrint) {
			setTimeout(function () {
				print();
			}, 300);
		}
	}, 150);
}
function openTargetToggle(e, b) {
	var a;
	var d = false;
	if (b == "menu") {
		a = $(e[0])
			.parent("span:has(a.dropdown-toggle)")
			.find("a.dropdown-toggle")
			.attr("href");
		if (!a) {
			a = $(e[0])
				.parent("p:has(a.dropdown-toggle)")
				.find("a.dropdown-toggle")
				.attr("href");
		}
	} else {
		a = $(e[0]).parent("p:has(a.dropdown-toggle)");
		a = $(a).find("a.dropdown-toggle").attr("href");
		if (!a) {
			a = $(e[0])
				.parent("td")
				.parent("tr")
				.parent()
				.parent("table")
				.parent("div:has(a.dropdown-toggle)");
			a = $(a).find("a.dropdown-toggle").attr("href");
		}
	}
	var f = false;
	var c = "";
	if (a) {
		if (a.indexOf("ICON") != -1) {
			f = true;
		}
		a = a.replace(/^.*?\,\'/, "");
		a = a.replace(/\'.*$/, "");
		if (f) {
			c = a + "_ICON";
		}
		if (!f) {
			HMToggle("expand", a);
			return true;
		} else {
			HMToggle("expand", a, c);
			return true;
		}
	} else {
		return false;
	}
}
function findPosY(b) {
	var a = 0;
	if (b.offsetParent) {
		while (b.offsetParent) {
			a += b.offsetTop;
			b = b.offsetParent;
		}
	} else {
		if (b.y) {
			a += b.y;
		}
	}
	return a;
}
function flashTarget(d, c, a) {
	c--;
	b();
	function b() {
		setTimeout(function () {
			$(d).each(function () {
				$(d).css("visibility", "hidden");
				setTimeout(function () {
					c--;
					$(d).css("visibility", "visible");
					if (c > 0) {
						b();
					}
				}, a);
			});
		}, a);
	}
}
function aniScroll(c, e, b) {
	var a = "div#idcontent";
	if (hmAnimate) {
		hmAnimate = false;
		var d = true;
	}
	var f = toggleCheck(c[0]);
	if (f > 400) {
		f = 400;
	}
	openTargetToggle(c, e);
	setTimeout(function (g) {
		if (b) {
			$(a).scrollTo(0, 0);
		}
		$("div#idcontent").css("visibility", "visible");
		$(a).scrollTo($(c), 600, {
			offset: -12,
			axis: "y",
			onAfter: function () {
				if (d) {
					hmAnimate = true;
				}
				if (!b) {
					flashTarget($(c[0]).parent(), 3, 200);
				}
			},
		});
	}, f);
}
function toggleJump() {
	var a = function () {
		if (location.hash) {
			var c = location.hash.replace(/\#/, "");
			var b;
			if ($("a[id='" + c + "']").length > 0) {
				b = $("a[id='" + c + "']");
			} else {
				if ($("a[name='" + c + "']").length > 0) {
					b = $("a[name='" + c + "']");
				} else {
					return false;
				}
			}
			aniScroll(b, "page", true);
			return false;
		}
	};
	if (document.all && !window.opera) {
		setTimeout(function () {
			a();
			$("div#idcontent").css("visibility", "visible");
		}, 20);
	} else {
		a();
		$("div#idcontent").css("visibility", "visible");
	}
}
function toggleToggles() {
	var a = hmAnimate;
	if (HMToggles.length != null) {
		var b = true;
		for (var c = 0; c < HMToggles.length; c++) {
			if (HMToggles[c].getAttribute("hm.state") == "1") {
				b = false;
				break;
			}
		}
		if (HMToggles.length > 20 && a) {
			hmAnimate = false;
		}
		HMToggleExpandAll(b);
		hmAnimate = a;
	}
}
function nsheader() {
	if (tVars.printMode) {
		return;
	}
	if (tVars.header) {
		var a = 0;
		var b = 0;
		$("div#hmheader")
			.children()
			.each(function () {
				if ($(this).outerHeight() > a) {
					a = $(this).outerHeight();
				}
			});
		$("div#hmheader").css("height", a + 5 + "px");
		b = a + 16;
		$("div#idcontent").css("top", b + "px");
	} else {
		if (window.opener) {
			$("div#idcontent").css("top", "2px");
		}
	}
}
$(document).ready(function () {
	if (parent.window && parent.window.hmnavpages) {
		$("div#idcontent").css("visibility", "hidden");
	}
	tVars.jumpdone = false;
	if (
		self == top &&
		!(window.opener && window.opener.hmWebHelp) &&
		!hmForceRedirect
	) {
		loadScript("hm_webhelp_undocked.css", "css");
		$(".sync-toc").show();
		$(".sync-toc-off").hide();
		$("p#breadcrumbs a,p#breadcrumbs a:visited").css("color", "red");
		$("p#breadcrumbs a:hover").css("color", "blue");
	}
	if (/toc=0&printWindow/g.test(location.search)) {
		doPrint();
		return;
	}
	if (document.all && !window.opera) {
		setTimeout(function () {
			nsheader();
		}, 0);
	} else {
		nsheader();
	}
	$(window).bind("resize", function () {
		nsheader();
	});
	var d = "hmcontent";
	if (
		document.all &&
		window.opener &&
		window.opener.hmWebHelp &&
		!window.opera
	) {
		d = window.opener.frames[1].name;
	}
	if (parent.window.hmWebHelp) {
		if (window.name == d) {
			parent.hmWebHelp.mainDoc = document;
			parent.hmWebHelp.mainWin = window;
			parent.hmWebHelp.currentDoc = document;
			parent.hmWebHelp.currentWin = window;
		} else {
			if (tVars.currP == parent.hmWebHelp.currentPage) {
				parent.hmWebHelp.currentDoc = document;
				parent.hmWebHelp.currentWin = window;
			}
		}
	}
	if (parent.window.hmWebHelp || (window.opener && window.opener.hmWebHelp)) {
		var b = parent.window.hmWebHelp
			? parent.window.hmWebHelp.textn
			: window.opener.hmWebHelp.textn;
		$("a[href*='\\" + b + "'],area[href*='\\" + b + "']")
			.not(
				"[href^='" +
					tVars.currP +
					"'],[href^='\\./" +
					tVars.currP +
					"'],[href^='\\.\\.'],[href^='\\./" +
					tVars.hmHelpPage +
					"'],[href^='" +
					tVars.hmHelpPage +
					"'],[href^='file:'],a.weblink"
			)
			.attr("target", d)
			.bind("click", function () {
				var j = $(this).attr("href");
				var h = false;
				var i = j.substr(j.indexOf("#") + 1);
				if (i.length > 0) {
					var g = j.substr(0, j.indexOf("#"));
					if (parent.window.hmWebHelp) {
						h =
							g == parent.hmWebHelp.currentPage &&
							parent.hmWebHelp.tabsapi.getIndex() > 0;
					}
				}
				if (window.opener) {
					if (h) {
						window.opener.hmWebHelp.tabsapi.click(0);
					}
					if (document.all && !window.opera) {
						window.opener.$("iframe#" + d).attr("src", j);
					}
					window.opener.hmWebHelp.tocWin.tocScroller(j);
				} else {
					if (h) {
						parent.hmWebHelp.tabsapi.click(0);
					}
					parent.hmWebHelp.tocWin.tocScroller(j);
				}
			});
	}
	if (tVars.webRedirect) {
		$("a[href^='http'],a.weblink,a.filelink")
			.not("[class='xcSignupText']")
			.attr("target", "_blank");
	}
	$(
		"a[href^='" +
			tVars.currP +
			"#'],a[href^='#']:not(a[href='#'],a[href='#disqus_thread']),area[href^='" +
			tVars.currP +
			"#'],area[href^='#']:not(area[href='#'])"
	).click(function (h) {
		localLink = true;
		var g = $(this).attr("href").replace(/.*?\#/, "");
		var i = $("a[id='" + g + "']");
		if (!i.length > 0) {
			i = $("a[name='" + g + "']");
		}
		aniScroll(i, "page", false);
		return false;
	});
	if (
		parent.window &&
		typeof parent.hmnavpages != "undefined" &&
		parent.hmnavpages.cachefix
	) {
		$("a.topiclink, p#breadcrumbs a").on("click", function (g) {
			g.preventDefault();
			document.location.href = parent.hmCacheFix.getTarget(
				$(this).attr("href")
			);
		});
	}
	if (parent.window.hmWebHelp) {
		function e() {
			if (HMToggles.length && HMToggles.length > 0) {
				parent.hmWebHelp.enableTool("togtog", true);
			} else {
				parent.hmWebHelp.enableTool("togtog", false);
			}
			var i = window.tVars.nextP;
			var g = window.tVars.prevP;
			i = i != "" ? i : window.tVars.currP;
			g = g != "" ? g : window.tVars.currP;
			var h = window.tVars.currP;
			h = h.substr(0, h.lastIndexOf("."));
			if (!parent.window.hmWebHelp.isNewTab) {
				parent.window.hmTabSlider.goToTab(0, true);
				$("#navicon_next", parent.document).attr("href", i);
				$("#navicon_previous", parent.document).attr("href", g);
				$("#navicon_home", parent.document).attr("href", window.tVars.defP);
				$("a#topictablink", parent.document)
					.html(
						"<span>" +
							parent.window.hmWebHelp.clipTitle(window.tVars.titleP, 15) +
							"</span>"
					)
					.attr(
						"data",
						parent.window.hmWebHelp.clipTitle(window.tVars.titleP, 60)
					)
					.attr("title", window.tVars.titleP);
			} else {
				$("a#" + h + "Link", parent.document).html(
					"<span>" +
						parent.window.hmWebHelp.clipTitle(window.tVars.titleP, 15) +
						"</span>"
				);
				$("a#" + h + "Link", parent.document).attr(
					"data",
					parent.window.hmWebHelp.clipTitle(window.tVars.titleP, 60)
				);
			}
			parent.window.hmTabSlider.updateSlider();
			if (parent.window.hmWebHelp.isNewTab) {
				if (!parent.window.hmWebHelp.autoTabs) {
					parent.window.hmTabSlider.goToTab(3, true);
				}
				parent.window.hmWebHelp.isNewTab = false;
			}
			if (parent.hmLayout.startTab > 0) {
				var j = setInterval(function () {
					if (parent.hmWebHelp.hmWebHelpReady) {
						clearInterval(j);
						if (parent.hmLayout.startTab == 1) {
							parent.hmWebHelp.indexPane();
						} else {
							parent.hmWebHelp.searchPane();
						}
						parent.hmLayout.startTab = 0;
					}
				}, 100);
			}
			parent.window.hmWebHelp.hmTopicLoaded = true;
		}
	} else {
		if (window.opener && window.opener.hmWebHelp) {
			var a = setInterval(function () {
				function i() {
					clearInterval(a);
					window.close();
				}
				try {
					var g = window.opener.hmWebHelp.openWindows.length;
				} catch (h) {
					i();
				}
				if (!window.opener || g < 1) {
					i();
				}
			}, 500);
		}
		$("a#indextablink").removeAttr("href");
		loadScript("hm_webhelp_undocked.css", "css");
		$("body,html").css("backgroundImage", "url('" + tVars.background + "')");
	}
	if (
		$("span[class*='_atoc_'], span[class*='_atocs_']").length >=
			hmatocvars.atoc_minHeaders &&
		hmatocvars.atoc_show
	) {
		tVars.jumpdone = true;
		if (/^https??:\/\//im.test(document.location)) {
			$.getScript("autotoc.js", function () {
				autoTOC();
			});
		} else {
			loadScript("autotoc.js", "js");
			var f = setInterval(function () {
				if (atocLoaded) {
					clearInterval(f);
					autoTOC();
				}
			}, 100);
		}
	}
	if ($("table[id*='_srt_']").length < 1) {
		tVars.tablesReady = true;
	} else {
		if (/^https??:\/\//im.test(document.location)) {
			$.getScript("sortable.js", function () {
				sortables_init();
			});
		} else {
			loadScript("sortable.js", "js");
			var c = setInterval(function () {
				if (sortableLoaded) {
					clearInterval(c);
					sortables_init();
				}
			}, 100);
		}
	}
	(function () {
		var j, h;
		var g = document.location.hash;
		var k = 0;
		j = h = HMToggles.length;
		var i = setInterval(function () {
			h = HMToggles.length;
			k++;
			if (h > j) {
				j = h;
			} else {
				tVars.togglesReady = true;
			}
			if (tVars.togglesReady && tVars.tablesReady) {
				clearInterval(i);
				$("div#idcontent").css("visibility", "visible");
				if (parent.hmWebHelp) {
					parent.hmWebHelp.newTabReady = true;
					if (typeof e == "function") {
						e();
					}
				}
				if (g && g.length > 0) {
					toggleJump();
				}
			}
		}, 200);
	})();
	$(window).bind("hashchange", function () {
		if (parent.window && parent.window.hmnavpages) {
			$("div#idcontent").css("visibility", "hidden");
		}
		setTimeout(function () {
			toggleJump();
		}, 300);
	});
});