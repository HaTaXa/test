/*! ----------------------------------------------------------------------------
Zoom Search Engine 6.0 (15/Jul/2008)
Highlight & auto-scroll script (DOM version)
jumpHL() function modified for Help & Manual Premium Pack
Script compressed with YUI compressor for Premium Pack
Original version available with Zoom Search Engine 6.0
email: zoom@wrensoft.com
www: http://www.wrensoft.com
Copyright (C) Wrensoft 2008
---------------------------------------------------------------------------- */
/*!Script options
----------------------------------------------------------------------------
Enable or disable scroll to first match in target topic - does not work in IE6 */
var JumpToFirstOccurance = true;
/*! Set to false to enable search highlighting in topic headers */
var SkipZoomStops = true;
/*! ------------------------------------------------------------------------
Main script
---------------------------------------------------------------------------- */
var CatchJSErrors = true;
var IsZoomStop = 0;
function catcherror() {
	return true;
}
if (CatchJSErrors) {
	window.onerror = catcherror;
}
function QueryString(b) {
	var c = null;
	for (var a = 0; a < QueryString.keys.length; a++) {
		if (QueryString.keys[a] == b) {
			c = QueryString.values[a];
			break;
		}
	}
	return c;
}
function QueryString_Parse() {
	var e = window.location.search.substring(1);
	var d = e.split("&");
	for (var b = 0; b < d.length; b++) {
		var f = d[b].indexOf("=");
		if (f >= 0) {
			var a = d[b].substring(0, f);
			var c = d[b].substring(f + 1);
			QueryString.keys[QueryString.keys.length] = a;
			QueryString.values[QueryString.values.length] = c;
		}
	}
}
QueryString.keys = new Array();
QueryString.values = new Array();
QueryString_Parse();
function getElement(a) {
	if (document.getElementById) {
		return document.getElementById(a);
	} else {
		if (document.all) {
			return document.all[a];
		}
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
function ZRetrieveQuery() {
	var g = 0;
	var a;
	var e;
	a = QueryString("zoom_highlight");
	if (a == "" || a == null) {
		a = QueryString("zoom_highlightsub");
		if (a == "" || a == null) {
			return false;
		} else {
			g = 1;
		}
	}
	if (parent.window) {
		if (a && a.length > 0) {
			parent.window.lastSearch = document.location.search.substr(1);
		} else {
			parent.window.lastSearch = "";
		}
	}
	if (
		(document.charset && document.charset == "utf-8") ||
		(document.characterSet && document.characterSet == "UTF-8")
	) {
		a = decodeURIComponent(a);
	} else {
		a = unescape(a);
	}
	a = a.toLowerCase();
	var d = /\"(.*?)\"|[^\\+\"]+/g;
	e = a.match(d);
	for (var c = 0; c < e.length; c++) {
		if (e[c] != "") {
			if (e[c].indexOf('"') != -1) {
				e[c] = e[c].replace(/\"/g, "");
				e[c] = e[c].replace(/\+/g, " ");
			} else {
				e[c] = e[c].replace(/\+/g, "");
			}
			if (e[c].indexOf("*") != -1 || e[c].indexOf("?") != -1) {
				e[c] = e[c].replace(/\\/g, " ");
				e[c] = e[c].replace(/\^/g, " ");
				e[c] = e[c].replace(/\#/g, " ");
				e[c] = e[c].replace(/\$/g, " ");
				e[c] = e[c].replace(/\./g, " ");
				var f = /\w/;
				if (f.test(e[c])) {
					e[c] = e[c].replace(/\*/g, "[^\\s]*");
					e[c] = e[c].replace(/\?/g, "[^\\s]");
				} else {
					e[c] = "";
				}
			}
			if (e[c] != "") {
				if (g == 0) {
					e[c] = "(>[\\s]*|>[^<]+[\\b\\W])(" + e[c] + ")(<|[\\b\\W][^>]*<)";
				} else {
					var b = "";
					if (e[c].substr(0, 7) == "[^\\s]*") {
						b = "\\b";
					}
					e[c] = "(>|>[^<]+)" + b + "(" + e[c] + ")([^>]*<)";
				}
			}
		}
	}
	return e;
}
function ZHighlightText(terms, text) {
	text = text.replace(/&amp;/gi, "&");
	text = text.replace(/&nbsp;/gi, "");
	for (var i = 0; i < terms.length; i++) {
		if (terms[i] != "") {
			var l = 0;
			re = new RegExp(terms[i], "gi");
			var count = 0;
			text = text.replace(/<(?![\/]?span)/g, "&lt;");
			text = text.replace(">", "&gt;");
			text = text.replace(/span&gt;/g, "span>");
			text = text.replace(/"highlight"&gt;/g, '"highlight">');
			text = ">" + text + "<";
			do {
				l = text.length;
				text = text.replace(
					re,
					'$1<span class="highlight" id="highlight" name="highlight">$2</span id="highlight">$3'
				);
				count++;
			} while (l != text.length && count < 100);
			text = text.substring(1, text.length - 1);
		}
	}
	text = text.replace(eval("//g"), "");
	text = text.replace(eval("//g"), "&nbsp;");
	return text;
}
function jumpHL() {
	var b = $("span.highlight")[0],
		a;
	if (b) {
		setTimeout(function () {
			a = $("div#hmheader").height();
			var d = findPosY(b);
			var c = d - (a + 25) + "px";
			if (d < a + 100) {
				$("#idcontent").scrollTo(0);
			} else {
				$("#idcontent").scrollTo(c, 600, { axis: "y" });
			}
		}, 200);
	}
}
function ZHighlightReplace(c, a) {
	var e = a.nodeValue;
	var d = ZHighlightText(c, e);
	if (d != e) {
		var b = document.createElement("span");
		b.innerHTML = d;
		a.parentNode.replaceChild(b, a);
	}
}
function ZHighlightSearch(d, a) {
	if (!a) {
		a = document.body.childNodes;
	}
	for (var c = 0, b = a.length; c < b; c++) {
		ZHighlightSearch(d, a[c].childNodes);
		if (SkipZoomStops && a[c].nodeType === 8) {
			if (a[c].nodeValue == "ZOOMSTOP") {
				IsZoomStop = 1;
			} else {
				if (a[c].nodeValue == "ZOOMRESTART") {
					IsZoomStop = 0;
				}
			}
		}
		if (IsZoomStop == 0 && a[c].nodeType === 3) {
			ZHighlightReplace(d, a[c]);
		}
	}
}
function highlight() {
	var a = /msie 6|MSIE 6/.test(navigator.userAgent);
	if (!"".match) {
		return;
	}
	if (document.body) {
		var b = ZRetrieveQuery();
		if (b != false) {
			IsZoomStop = 0;
			ZHighlightSearch(b);
			if (JumpToFirstOccurance && !a) {
				jumpHL();
			}
		}
	}
}