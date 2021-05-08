/*! --------------- Script (c) 2006-2011 EC Software ---------------
This script was created by Help & Manual. It is designed for use 
in combination with the output of Help & Manual and must not
be used outside this context.     http://www.helpandmanual.com
This version modified for Premium Pack 2 WebHelp Skins Version 2.71
Do not modify this file! It will be overwritten by Help & Manual.
-----------------------------------------------------------------*/
var topicInitScriptAvailable = true;
var HMToggles = new Array();
var HMGallery = new Array();
var HMTogglesAllExpanded = false;
var hmAnimateTemp = hmAnimate;
function hmmin(b, a) {
	if (b < a) {
		return b;
	}
	return a;
}
function hmmax(b, a) {
	if (b > a) {
		return b;
	}
	return a;
}
var HMSyncTOC = function (a, b) {
	if (location.search.lastIndexOf("toc=0") <= 0) {
		if (parent.hmNavigationFrame) {
			parent.lazysync(b);
		} else {
			if (hmForceRedirect && parent.location && parent.location.href) {
				parent.location.href = a + "?" + b;
			}
		}
	}
};
var HMToggleExpandAll = function (a) {
	if (HMToggles.length != null) {
		for (i = 0; i < HMToggles.length; i++) {
			HMToggleExpand(HMToggles[i], a, a && hmAnimate);
		}
	}
	HMTogglesAllExpanded = a;
};
var HMAnyToggleOpen = function () {
	var a = false;
	if (HMToggles.length != null) {
		for (i = 0; i < HMToggles.length; i++) {
			if (HMToggles[i].getAttribute("hm.state") == "1") {
				a = true;
			}
		}
	}
	if (!a) {
		HMTogglesAllExpanded = false;
	}
	return a;
};
var HMToggle = function () {
	var d = HMToggle.arguments[0];
	for (i = 1; i < HMToggle.arguments.length; i++) {
		var a = HMToggle.arguments[i];
		var c = document.getElementById(a);
		switch (d) {
			case "toggle":
				var b = c.getAttribute("hm.state");
				if (b == null) {
					b = "0";
				}
				HMToggleExpand(c, b != "1", hmAnimate);
				break;
			case "expand":
				HMToggleExpand(c, true, false);
				break;
			case "collapse":
				HMToggleExpand(c, false, false);
				break;
		}
	}
};
var HMToggleExpand = function (c, b, a) {
	tagName = c.nodeName.toLowerCase();
	switch (tagName) {
		case "span":
			HMToggleExpandText(c, b, a);
			break;
		case "div":
			HMToggleExpandDropdown(c, b, a);
			break;
		case "img":
			HMToggleExpandPicture(c, b, a);
			break;
	}
	c.setAttribute("hm.state", b ? "1" : "0");
};
var HMToggleExpandText = function (c, b, a) {
	c.style.display = b ? "inline" : "none";
};
var HMToggleExpandDropdown = function (c, b, a) {
	if (a) {
		if (b) {
			$(c).slideDown("fast");
		} else {
			$(c).animate({ height: "toggle" }, "fast", function () {
				if (document.all && !window.opera) {
					var d = $(c).prev();
					if ($(d).outerHeight != 0) {
						d = $('<div style="height:1px"></div>').insertBefore(c);
					} else {
						$(d).css("display", "block");
					}
					$(d).css("display", "none");
				}
			});
		}
	} else {
		c.style.display = b ? "block" : "none";
	}
};
var HMToggleExpandPicture = function (g, h, c) {
	var e = h ? g.getAttribute("hm.src0") : g.getAttribute("hm.src1");
	var j = h ? g.getAttribute("hm.src1") : g.getAttribute("hm.src0");
	var k = g.src.replace(e, j);
	var d = g.getAttribute("hm.type") == "dropdown";
	if (!d && c) {
		$(g).stop();
		var f = new Image();
		f.onload = function () {
			var n = f.width;
			var m = f.height;
			var l = g.width;
			var o = g.height;
			if (n > 0 && m > 0) {
				if (n == l && m == o) {
					g.src = k;
				} else {
					$(g).animate({ width: n, height: m }, "fast", function () {
						g.src = k;
					});
				}
			}
		};
		f.src = k;
	} else {
		g.src = k;
		$(g).css("width", "auto");
		$(g).css("height", "auto");
	}
	var b = h ? g.getAttribute("hm.title1") : g.getAttribute("hm.title0");
	if (b != null) {
		g.title = b;
	}
	var a = h ? g.getAttribute("hm.caption1") : g.getAttribute("hm.caption0");
	if (a != null) {
		g.parentNode.parentNode.parentNode.nextSibling.firstChild.firstChild.innerHTML = a;
	}
};
var HMShowPictureLightbox = function (f) {
	var e = document.getElementById(f);
	var n = $(e).offset().left;
	var j = $(e).offset().top;
	var g = $(e).outerWidth();
	var c = $(e).outerHeight();
	var d = e.getAttribute("hm.src0");
	var l = e.getAttribute("hm.src1");
	var m = e.src.replace(d, l);
	var b = e.getAttribute("hm.title1");
	var a = e.getAttribute("hm.caption1");
	var k = '<img id="hmlightboximage" src="' + m + '" alt="' + b + '"/>';
	var h = new Image();
	h.onload = function () {
		HMShowLightbox(k, n, j, g, c, h.width, h.height, a, true, false);
	};
	h.src = m;
};
var HMShowVideoLightbox = function (a, e, d, b, j) {
	var h = $(e).offset().left;
	var g = $(e).offset().top;
	var f = $(e).outerWidth();
	var c = $(e).outerHeight();
	if (a.stopPropagation) {
		a.stopPropagation();
	} else {
		a.cancelBubble = true;
	}
	HMShowLightbox(d, h, g, f, c, b, j, "", false, true);
};
var HMShowLightbox = function (s, b, D, y, g, c, m, G, x, F) {
	var C =
		parent.hmNavigationFrame &&
		parent.document.getElementById("hmnavigation") &&
		parent.document.getElementById("hmnavigation").nodeName.toLowerCase() ==
			"iframe";
	if (window.opener) {
		C = false;
	}
	var e = $(window);
	var E = $(document);
	var z = $("body");
	var h = null;
	if (C) {
		z = parent.$("body");
		E = parent.$(document);
		e = parent.window;
	} else {
		$("body").prepend(
			'<div id="lightboxbody" style="position: absolute; top: 0; right: 0; left:0;bottom:0;overflow: hidden;z-index:10100"></div>'
		);
		z = $("div#lightboxbody");
	}
	$(z).prepend(
		'<div id="hmlightboxbackground" style="z-index:99997;border:none;padding:0;margin:0;position:absolute;left:0;top:0;bottom:0;right:0;background-color:#7F7F7F;filter:alpha(opacity=50);opacity:0.5;display:none;"></div>'
	);
	var d = C ? parent.$("#hmlightboxbackground") : $("#hmlightboxbackground");
	if (C) {
		$(z).prepend(
			'<div id="hmlightboxscrolllayer" style="z-index:99998;border:none;padding:0;margin:0;position:absolute;left:0;top:0;right:0;bottom:0;overflow:auto;background-color:transparent;"></div>'
		);
		h = parent.$("#hmlightboxscrolllayer");
		z = h;
	}
	$(z).prepend(
		'<div id="hmlightbox" style="z-index:99999;position:absolute;display:none"><img id="lbZoomer" style="display:none;position:absolute;top:0;right:0;cursor:pointer;" height="48" width="48" src="ZoomIn.png" alt="' +
			tVars.zoomTip +
			'" title="' +
			tVars.zoomTip +
			'" border="0" /></div>'
	);
	var f = C ? parent.$("#hmlightbox") : $("#hmlightbox");
	var a = C ? parent.$("img#lbZoomer") : $("img#lbZoomer");
	var r = $(s).appendTo(f);
	var o = null;
	if (G != null) {
		$(f).append('<p id="hmlightboxcaption">' + G + "</p>");
		o = C ? parent.$("#hmlightboxcaption") : $("#hmlightboxcaption");
	}
	var B = 300;
	var j;
	var A = c;
	var k = m;
	if (hmLightboxConstrained) {
		m = (function () {
			var I = m;
			var H = o != null ? 60 : 40;
			while (c > $(e).width() - 40 || I > $(e).height() - H) {
				c = c * 0.99;
				I = I * 0.99;
			}
			return I;
		})();
	}
	c = Math.round(c);
	m = Math.round(m);
	r.css({ width: c + "px", height: m + "px" });
	if (o != null) {
		o.css("width", c + "px");
	}
	if (hmAnimate && x) {
		var t = q();
		if (o != null) {
			o.css("display", "none");
		}
		r.css({ width: y + "px", height: g + "px" });
		j = q();
		j[0] = b;
		j[1] = D;
		if (C) {
			j[0] =
				j[0] +
				parent.$("#hmtopicpane").offset().left -
				$(document).scrollLeft();
			j[1] =
				j[1] + parent.$("#hmtopicpane").offset().top - $(document).scrollTop();
		}
		f.css({ left: j[0] + "px", top: j[1] + "px" });
		f.show();
		f.animate(
			{ left: t[0] - r.position().left, top: t[1] - r.position().top },
			B,
			function () {
				d.fadeIn(100);
				if (o != null) {
					o.css("display", "block");
				}
			}
		);
		r.animate({ width: c, height: m }, B);
	} else {
		var t = q();
		n(false);
		f.show();
		if (hmAnimate && x) {
			d.fadeIn(100);
		} else {
			d.show();
		}
	}
	$(e).bind("resize.hmlightbox", function () {
		n(false);
	});
	$(z).bind("click.hmlightbox", w);
	$(z).bind("keydown.hmlightbox", l);
	if (!F) {
		$(f).bind("mouseenter.hmlightbox", function () {
			u(true);
		});
		$(f).bind("mouseleave.hmlightbox", function () {
			u(false);
		});
		a.bind("click.hmlightbox", function (H) {
			H.preventDefault();
			H.stopPropagation();
			n(true);
		});
	}
	$(f).focus();
	function u(H) {
		if (H && (c < A || m < k)) {
			a.fadeIn("fast");
		} else {
			a.fadeOut("fast");
		}
	}
	function v() {
		if (!window.opener) {
			d.css(
				"width",
				($(E).scrollLeft() > 0 ? $(E).width() : $(e).width()) + "px"
			);
			d.css(
				"height",
				($(E).scrollTop() > 0 ? $(E).height() : $(e).height()) + "px"
			);
		} else {
			d.css(
				"width",
				($(E).scrollLeft() > 0 ? $(E).width() : $(e).width()) + "px"
			);
			d.css("height", $(z).prop("scrollHeight") + "px");
		}
	}
	function n(K) {
		var I = $(e).width();
		var J = $(e).height();
		if (K) {
			c = A;
			m = k;
			$(f).unbind("mouseenter.hmlightbox");
			$(f).unbind("mouseleave.hmlightbox");
			$(e).unbind("resize.hmlightbox");
			$(e).bind("resize.hmlightbox", function () {
				var L = $(e).width();
				var M = $(e).height();
				if (h != null) {
					h.css({ width: L + "px", height: M + "px", overflow: "auto" });
				}
			});
			a.hide();
			if (hmAnimate && x) {
				f.animate({ left: $(e).width() / 2 - c / 2 + "px", top: 10 }, B);
				r.animate({ width: c, height: m }, B);
			} else {
				r.css({ width: c + "px", height: m + "px" });
				f.css({ left: "10px", top: "10px" });
			}
			if (window.opener || !C) {
				z.css("overflow", "auto");
			}
		} else {
			if (hmLightboxConstrained && !F) {
				m = (function () {
					var M = m;
					var L = o != null ? 60 : 40;
					while (c > I - 40 || M > J - L) {
						c = c * 0.99;
						M = M * 0.99;
					}
					while (c < I - 40 && c < A && M < J - L && M < k) {
						c = c * 1.01;
						M = M * 1.01;
					}
					return M;
				})();
				if (Math.abs(A - c) < 3) {
					c = A;
					m = k;
				} else {
					c = Math.round(c);
					m = Math.round(m);
				}
				r.css({ width: c + "px", height: m + "px" });
				if (o != null) {
					o.css("width", c + "px");
				}
			}
		}
		var H = q();
		f.css({ left: H[0] + "px", top: H[1] - 8 + "px" });
		if (h != null) {
			if (F || K) {
				h.css({ width: I + "px", height: J + "px", overflow: "auto" });
			} else {
				h.css({ width: I + "px", height: J + "px", overflow: "hidden" });
			}
		}
	}
	function q() {
		var K = f.width();
		var N = f.height();
		if (F) {
			K = c;
			N = m;
		}
		var M = hmmax(K + 40, E.width());
		var I = hmmax(N + 40, E.height());
		var L = hmmax(
			20,
			parseInt(($(e).width() - K) / 2) + (C ? 0 : E.scrollLeft())
		);
		var H = hmmax(
			20,
			parseInt(($(e).height() - N) / 2) + (C ? 0 : E.scrollTop())
		);
		var J = new Array(L, H, K, N);
		return J;
	}
	function l(H) {
		if (H.keyCode == 27) {
			p();
		}
	}
	function w(I) {
		var H =
			!F ||
			I.pageX < f.position().left ||
			I.pageY < f.position().top ||
			I.pageX > f.position().left + f.width() ||
			I.pageY > f.position().top + f.height();
		if (H) {
			p();
		}
	}
	function p() {
		if (hmAnimate && x) {
			if (o != null) {
				o.css("display", "none");
			}
			r.animate({ width: y, height: g }, B);
			d.fadeOut("fast");
			f.animate(
				{ left: j[0] - r.position().left, top: j[1] - r.position().top },
				B,
				function () {
					f.remove();
					if (h != null) {
						h.remove();
					}
					d.remove();
					if (window.opener || !C) {
						$("div#lightboxbody").remove();
					}
				}
			);
		} else {
			f.remove();
			if (h != null) {
				h.remove();
			}
			d.remove();
			if (window.opener || !C) {
				$("div#lightboxbody").remove();
			}
		}
		$(e).unbind(".hmlightbox");
		$(z).unbind(".hmlightbox");
		hmAnimate = hmAnimateTemp;
		if (F) {
			window.location.reload();
		}
	}
};
var HMSearchCheck = function (d) {
	var c = window.location.search.lastIndexOf("zoom_highlight") > 0;
	if (!c) {
		var a = d.getElementsByTagName("FONT");
		if (a.length > 0) {
			var b = "";
			for (var e = 0; e < a.length; e++) {
				b = a[e].style.cssText;
				if (b.indexOf("BACKGROUND-COLOR") == 0) {
					c = true;
					break;
				}
			}
		}
	}
	return c;
};
var HMInitToggle = function () {
	if (document.getElementById) {
		var e = document.getElementById(HMInitToggle.arguments[0]);
		var a = false;
		for (i = 1; i < HMInitToggle.arguments.length - 1; i = i + 2) {
			if (HMInitToggle.arguments[i] == "onclick") {
				e.onclick = Function(HMInitToggle.arguments[i + 1]);
			}
			if (HMInitToggle.arguments[i].substring(0, 6) == "hm.src") {
				e.setAttribute(
					HMInitToggle.arguments[i],
					decodeURI(HMInitToggle.arguments[i + 1])
				);
				var d = new Image();
				d.src = HMInitToggle.arguments[i + 1];
			} else {
				e.setAttribute(
					HMInitToggle.arguments[i],
					HMInitToggle.arguments[i + 1]
				);
				if (
					HMInitToggle.arguments[i] == "hm.type" &&
					HMInitToggle.arguments[i + 1] == "picture"
				) {
					a = true;
				}
			}
		}
		if (a) {
			var c = e.parentNode;
			if (c.nodeName.toLowerCase() == "a") {
				if (hmImageLightbox) {
					HMGallery[HMGallery.length] = e;
					c.href =
						"javascript:HMShowPictureLightbox('" +
						HMInitToggle.arguments[0] +
						"')";
				} else {
					HMToggles[HMToggles.length] = e;
					c.href =
						"javascript:HMToggle('toggle','" + HMInitToggle.arguments[0] + "')";
				}
			}
		} else {
			var f = HMSearchCheck(e);
			HMToggles[HMToggles.length] = e;
			if (f) {
				e.setAttribute("hm.state", "1");
				var b = document.getElementById(e.getAttribute("id") + "_ICON");
				if (b) {
					HMToggleExpand(b, true);
				}
			}
			HMToggleExpand(e, e.getAttribute("hm.state") == "1" || f);
		}
	}
};
var HMTrackTopiclink = function (a) {
	if (parent.frames.length > 0) {
		if (parent.gaaccount) {
			parent.track("exit", a.href);
		}
	}
};
var hmshowPopup = function (a, f, c) {
	$("#hmpopupdiv").stop().remove();
	var j = $('<div id="hmpopupdiv"></div>').appendTo("body");
	if (hmPopupSticky) {
		$("body").bind("mouseup.hmpopup", hmhidePopup);
		$("body").bind("keydown.hmpopup", function (l) {
			if (l.keyCode == 27) {
				hmhidePopup();
			}
		});
	}
	j.html(f);
	var e = a.clientX + $(document).scrollLeft();
	var g = a.clientY + $(document).scrollTop();
	var b = $(window).width() / 1.5;
	var h = j.width();
	if (h > b) {
		j.width(b);
	}
	var k = 20 + g;
	var d = e - h / 2;
	if (d < 10) {
		d = 10;
	}
	if (d + j.outerWidth() > $(window).width()) {
		d = $(window).width() - j.outerWidth();
	}
	if (d < 0) {
		d = 0;
	}
	j.css({ left: d + "px", top: k + "px" });
	if (hmAnimate) {
		j.show("fast");
	} else {
		j.show();
	}
};
var hmhidePopup = function () {
	if (hmPopupSticky) {
		$("body").unbind(".hmpopup");
	}
	var a = $("#hmpopupdiv");
	if (a.length > 0) {
		if (hmAnimate) {
			a.hide("fast");
		} else {
			$(hmpopupdiv).hide();
		}
	}
};