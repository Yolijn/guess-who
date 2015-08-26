/* (c) 2013, The Knights Who Say NIH B.V. http://frameless.io/license */
void function(){'use strict';var d;
function aa() {
  var a, b, c;
  "object" === typeof global && (b = global);
  "object" === typeof self && (c = self);
  b && b.global === b && (a = b);
  c && c.self === c && (a = c);
  return a;
}
function ba() {
  var a;
  "function" === typeof define && "undefined" !== typeof define.amd ? a = define : a = null;
  return a;
}
function ca() {
  var a;
  "object" === typeof module && (a = module);
  if (a && "exports" in a) {
    return a.exports;
  }
}
function da(a) {
  var b = aa(), c = ba(), e = ca();
  (function(a, h) {
    b && (b[a] = h);
    c && c([], function() {
      return h;
    });
    e && h && ("object" === typeof h || "function" === typeof h) && (module.exports = h);
    return h;
  })("NIH", a);
  b = void 0;
}
var g = function() {
  function a(b) {
    for (var c in b) {
      b.hasOwnProperty(c) && "undefined" == typeof a[c] && (a[c] = b[c]);
    }
  }
  da(a);
  return a;
}(), ea = "undefined" != typeof Function.prototype.bind;
function k(a, b) {
  var c;
  ea ? c = b.bind(a) : c = function(c) {
    return b.apply(a, arguments);
  };
  return c;
}
var m = {};
m.A = Object.prototype;
m.toString = m.A.toString;
m.propertyIsEnumerable = m.A.propertyIsEnumerable;
var fa = "isArray" in Array;
m.aa = m.toString.call(0);
m.Z = m.toString.call(!0);
m.ba = m.toString.call("");
m.o = m.toString.call({});
m.C = function() {
  return m.toString.call(arguments);
}();
m.p = void 0;
try {
  m.p = "[object Object]";
} catch (ga) {
}
m.i = {};
m.i.W = /([!$()*+.\/?[\]^{|}])/g;
m.i.ka = function() {
  return m.toString.call(m.toString).replace(m.i.W, "\\$1");
};
m.V = new RegExp("^" + m.i.ka().replace(/toString/, ".+?") + "$");
m.Ka = function(a) {
  return m.V.test(a);
};
m.ia = function(a) {
  for (var b = {}, c = arguments.length;c--;) {
    b[arguments[c]] = !0;
  }
  return b;
};
m.$ = m.ia(m.ba, m.aa, m.Z, m.o);
m.Pa = function(a) {
  return "string" === typeof a;
};
m.Ma = function(a) {
  return "number" === typeof a;
};
m.Ga = function(a) {
  return !0 === a || !1 === a;
};
m.La = function(a) {
  return null === a;
};
m.I = function(a) {
  return "function" === typeof a;
};
m.Qa = function(a) {
  return void 0 === a;
};
m.isDate = function(a) {
  return "object" === typeof a && null !== a && a instanceof Date;
};
m.Ha = function(a) {
  return Infinity === a || -Infinity === a;
};
m.na = function(a) {
  return "number" === typeof a && isFinite(a);
};
"function" === typeof Number.isFinite ? m.isFinite = Number.isFinite : m.isFinite = m.na;
m.pa = function(a) {
  return "number" === typeof a && isNaN(a);
};
"function" === typeof Number.isNaN ? m.isNaN = Number.isNaN : m.isNaN = m.pa;
m.oa = function(a) {
  return "number" === typeof a && isFinite(a) && Math.floor(a) === a;
};
"function" === typeof Number.m ? m.m = Number.m : m.m = m.oa;
m.xa = -1074;
m.wa = 1023;
m.v = 2147483647;
m.w = -2147483648;
m.S = 4294967295;
m.U = 0;
m.R = 9007199254740991;
m.T = -9007199254740991;
m.Ia = function(a) {
  return a <= m.v && a >= m.w && (a | 0) === a;
};
m.D = function(a, b) {
  return function(c) {
    return c <= b && c >= a;
  };
};
m.Ea = m.D(m.w, m.v);
m.Fa = m.D(m.U, m.S);
m.Oa = function(a) {
  return a <= m.R && a >= m.T && m.m(a);
};
m.isArray = function(a) {
  return a instanceof Array || "object" === typeof a && "[object Array]" === m.toString.call(a);
};
fa && (m.isArray = Array.isArray);
m.isRegExp = function(a) {
  return a instanceof RegExp || "object" === typeof a && "[object RegExp]" === m.toString.call(a);
};
m.Na = function(a) {
  return null !== a && ("object" === typeof a || "function" === typeof a);
};
m.ya = "undefined" !== typeof document ? typeof document.toString : "function";
m.Q = void 0 !== m.p;
m.J = function(a) {
  var b;
  return "function" !== typeof a.toString && m.Q && "string" === typeof(b = "" + a) && b !== m.p;
};
m.ma = function(a) {
  var b = m.toString.call(a);
  return "[object Arguments]" === b || b === m.C && m.hasOwnProperty.call(a, "callee") && !m.propertyIsEnumerable.call(a, "callee");
};
m.P = "undefined" !== typeof document && m.J(document);
m.O = m.C === m.o;
m.ra = function(a) {
  var b;
  return !a || m.toString.call(a) !== m.o || !("function" !== typeof(b = a.constructor) || b instanceof b) || m.P && m.J(a) || m.O && m.ma(a) ? !1 : !0;
};
m.Ja = function(a) {
  return null === a || "object" === typeof a && m.ra(a) || m.toString.call(a) in m.$;
};
m.da = /^\[object |]$/g;
m.Da = function(a) {
  return m.toString.call(a).replace(m.da, "");
};
m.N = /^\[object .+Constructor\]$/;
m.G = function(a) {
  return "object" == typeof a && m.N.test(m.toString.call(a));
};
"undefined" !== typeof self && self && m.G(self.constructor) && (m.ha = m.I, m.I = function(a) {
  return m.ha(a) || m.G(a);
});
function n(a, b, c) {
  return a.indexOf(b, c);
}
"indexOf" in Array.prototype || (n = function(a, b, c) {
  c = c || 0;
  for (var e = a.length;c < e;c++) {
    if (a[c] === b) {
      return c;
    }
  }
  return -1;
});
function p(a) {
  for (var b = a.length;b--;) {
    a.pop();
  }
}
["a", "b", "r", "a"].sort(function() {
  return 0;
});
function ha(a) {
  return setTimeout(a, 0);
}
function ia(a) {
  return setImmediate(a);
}
var ja = "function" === typeof setImmediate && "function" === typeof clearImmediate ? ia : ha;
function q(a, b) {
  try {
    return a();
  } catch (c) {
    return b;
  }
}
function Promise(a) {
  this.e = [];
  this.k = [];
  this.a = !0;
  if ("function" == typeof a) {
    try {
      a(k(this, this.resolve), k(this, this.reject));
    } catch (b) {
      this.reject(b);
    }
  }
}
Promise.prototype.a = !0;
Promise.prototype.l = !1;
Promise.prototype.j = void 0;
var r = [], t = -1;
function v(a) {
  return (!!a && "object" === typeof a || "function" === typeof a) && "function" === typeof a.then;
}
function w(a) {
  r.push(a);
  -1 == t && (t = ja(ka));
}
function ka() {
  t = -1;
  var a = r;
  r = [];
  for (var b = 0, c = a.length;b < c;b++) {
    var e = a[b], f = void 0;
    e.l ? (f = e.e, p(e.k), e.e = []) : (f = e.k, p(e.e), e.k = []);
    for (var h = 0, l = f.length;h < l;h++) {
      try {
        f[h](e.j);
      } catch (u) {
      }
    }
  }
}
function x(a, b) {
  return function(c) {
    try {
      b.resolve(a(c));
    } catch (e) {
      b.reject(e);
    }
  };
}
function y(a) {
  var b = new Promise;
  b.resolve(a);
  return b;
}
Promise.prototype.reject = function(a) {
  if (this.a) {
    var b = !1;
    try {
      if (b = v(a)) {
        if (a === this) {
          throw new TypeError;
        }
        a.then(k(this, this.resolve), k(this, this.reject));
      }
    } catch (c) {
      b = !1, a = c;
    }
    this.a && !b && (this.l = this.a = !1, this.j = a, w(this));
  }
};
Promise.prototype.resolve = function(a) {
  if (this.a) {
    var b = !1;
    try {
      if (b = v(a)) {
        if (a === this) {
          throw new TypeError;
        }
        a.then(k(this, this.resolve), k(this, this.reject));
      }
    } catch (c) {
      this.a && (this.l = this.a = !1, this.j = c, w(this));
    }
    this.a && !b && (this.a = !1, this.l = !0, this.j = a, w(this));
  }
};
Promise.prototype.then = function(a, b) {
  var c, e = new Promise;
  c = "function" === typeof a ? x(a, e) : k(e, e.resolve);
  this.e.push(c);
  c = "function" === typeof b ? x(b, e) : k(e, e.reject);
  this.k.push(c);
  this.a || w(this);
  return e;
};
function z(a) {
}
var A = null, B = [6, 4, 3], C, D, E = 0;
if ("undefined" !== typeof ActiveXObject) {
  for (;!E && 0 < B.length;) {
    try {
      E = B[0], D = "MSXML2.DOMDocument." + E + ".0", A = new ActiveXObject(D), C = E;
    } catch (la) {
      B.shift(), E = 0;
    }
  }
}
C = E;
var F = 0 < C;
function G() {
  var a, b = C;
  if (!b) {
    throw Error("The MSXML add-on is not supported.");
  }
  A ? (a = A, A = null) : a = new ActiveXObject("MSXML2.DOMDocument." + b + ".0");
  a.async = !1;
  a.preserveWhiteSpace = !0;
  a.resolveExternals = !1;
  a.validateOnParse = !1;
  "setProperty" in a && (4 <= b && a.setProperty("NewParser", !0), a.setProperty("ProhibitDTD", !1));
  return a;
}
function ma(a) {
  var b = G();
  if (!b.loadXML(a)) {
    throw Error();
  }
  (a = b.firstChild) && 7 === a.nodeType && a.parentNode && (9 === a.parentNode.nodeType || 11 === a.parentNode.nodeType) && "xml" === a.target && b.removeChild(b.firstChild);
  return b;
}
function na() {
  return null;
}
F && z(A);
function oa(a) {
  var b = "";
  if (a) {
    var c = a.nodeType;
    if (1 == c || 11 == c) {
      b = a.text || a.innerText || a.textContent || "";
    }
  }
  return b;
}
var H = String.fromCharCode;
function I(a) {
  return a.toUpperCase();
}
var pa = /[a-z]{1,65534}/g, J = [];
function qa(a) {
  for (var b = 0, c = a.length;b < c;b++) {
    J[b] = a.charCodeAt(b) | 32;
  }
  a = H.apply(null, J);
  p(J);
  return a;
}
"I" !== H(73) && (I = function(a) {
  return a.replace(pa, qa).toUpperCase();
});
function K(a) {
  this.parse(a);
}
var ra = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/, sa = /([^\/]+)/g;
d = K.prototype;
d.scheme = "";
d.c = "";
d.path = "";
d.query = "";
d.g = "";
d.t = "";
d.L = "";
d.hostname = "";
d.port = "";
d.file = "";
d.F = !1;
d.s = !1;
d.r = !0;
d.resolve = function(a) {
  var b, c;
  "string" === typeof a ? c = new K(a) : c = a;
  if (this.r || c.F) {
    return c;
  }
  if (c.r) {
    return this;
  }
  if (c.s) {
    return new K(this.d.scheme + this.d.c + this.d.path + this.d.query + "#" + c.g);
  }
  if ("/" === c.path.charAt(0)) {
    a = c.path;
  } else {
    if ("" === c.d.c) {
      a = [];
      for (b = 0;b < this.f.length;++b) {
        "." !== this.f[b] && a.push(this.f[b]);
      }
      for (b = 0;b < c.f.length;++b) {
        "." !== c.f[b] && a.push(c.f[b]);
      }
      for (b = 1;b < a.length;++b) {
        a[b - 1] && ".." === a[b] && ".." !== a[b - 1] && (a.splice(--b, 2), --b);
      }
      b = "." !== c.file && ".." !== c.file ? c.file : "";
      ".." === c.file && a.pop();
      a = ("/" === this.path.charAt(0) || "" === this.path.charAt(0) ? "/" : "") + a.join("/") + (0 < a.length ? "/" : "") + b;
    } else {
      a = "";
    }
  }
  return new K(this.d.scheme.toLowerCase() + (c.d.c || this.d.c) + a + (c.query ? "?" + c.query : "") + (c.g ? "#" + c.g : ""));
};
d.parse = function(a) {
  a = ra.exec(a);
  this.d = {scheme:a[1] || "", c:a[3] || "", path:a[5] || "", query:a[6] || "", g:a[8] || ""};
  this.scheme = a[2] || "";
  this.c = a[4] || "";
  this.path = a[5] || "";
  this.query = a[7] || "";
  this.g = a[9] || "";
  a = this.c.indexOf("@");
  var b = this.c.lastIndexOf(":");
  if (-1 === a) {
    this.hostname = this.c;
  } else {
    var c = this.c.indexOf(":");
    -1 !== c && c < a ? (this.t = this.c.substring(0, c), this.L = this.c.substring(c + 1, a)) : this.t = this.c.substring(0, a);
    this.hostname = this.c.substring(a + 1);
  }
  b > a && (this.port = this.hostname.substring(b + 1).replace(/^0+(.+)$/, "$1"), this.hostname = this.hostname.substring(0, b));
  this.hostname && (this.hostname = this.hostname.toLowerCase().replace(/\u3002|\uFF0E|\uFF61/g, "."));
  this.path ? (this.f = this.path.match(sa) || [], "/" !== this.path.charAt(this.path.length - 1) && ((a = this.f.pop()) && "." !== a && ".." !== a || (a = ""), this.file = a)) : (this.f = [], this.file = "");
  this.F = "" !== this.scheme;
  this.r = (this.s = "" === this.scheme + this.c + this.path + this.query) && "" === this.g;
};
K.prototype.toString = function() {
  return this.d.scheme + this.d.c + this.d.path + this.d.query + this.d.g;
};
K.prototype.normalize = function() {
  return "";
};
var L = "undefined" != typeof DOMParser, ta = "undefined" !== typeof Attr, M = L || F, N = F && !L;
function ua() {
  return document.implementation.createDocument(null, null, null);
}
function P(a) {
  if ("" === a) {
    return ua();
  }
  var b = (new DOMParser).parseFromString(a, "application/xml");
  if (a = va(b)) {
    throw a;
  }
  return b;
}
function va(a) {
  var b = null;
  (a = a.documentElement) && "http://www.mozilla.org/newlayout/xml/parsererror.xml" === a.namespaceURI && "parsererror" === a.localName && (b = Error("Syntax error in XML document" + Q(a)));
  return b;
}
N && (ua = G, P = ma, va = na);
var R = M ? N ? A : P("") : null, wa = M ? N ? R.createNode(1, "x", "") : R.createElement("x") : null;
M && z(wa);
var xa = M && "function" === typeof R.normalize, ya = M && q(function() {
  var a = R.createElement("x");
  a.setAttribute("x", "x");
  return a.attributes[0].ownerElement === a;
}, !1), S;
try {
  typeof R.createElement("x").textContent, S = !1;
} catch (za) {
  S = !0;
}
var Aa = M && !S && "string" == typeof wa.textContent;
"object" == typeof window && "XPathEvaluator" in window && new XPathEvaluator;
if (Aa) {
  var Q = function(a) {
    var b = "";
    if (a) {
      var c = a.nodeType;
      if (1 === c || 11 === c) {
        b = a.textContent;
      }
    }
    return b;
  }
} else {
  var Ba = function(a, b) {
    var c, e, f, h;
    c = a.nodeType;
    if (1 === c || 9 === c || 11 === c) {
      for (f = 0, h = a.childNodes.length;f < h;f++) {
        c = a.childNodes[f], e = c.nodeType, 3 == e || 4 == e ? b.push(c.nodeValue) : 8 !== e && 7 !== e && Ba(a, b);
      }
    }
  }, Q = function(a) {
    var b = "", c = a.nodeType;
    if (1 === c || 9 === c || 11 === c) {
      b = [], Ba(a, b), b = b.join("");
    }
    return b;
  }
}
!ya && ta && q(function() {
  Attr.prototype.nodeType = 2;
});
if (xa) {
  var T = R.createDocumentFragment();
  T.appendChild(R.createTextNode("A"));
  T.appendChild(R.createTextNode("-Z"));
  T.normalize();
}
N && (Q = oa);
var Ca = !1, Da = 0;
function U() {
  Da++;
  var a = new XMLHttpRequest;
  Ca = "string" == typeof a.responseType;
  return a;
}
if ("undefined" !== typeof ActiveXObject) {
  var Ea = U, U = function() {
    for (var a, b = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"], c = Ea, e = 0, f = b.length;e < f;e++) {
      try {
        a = b[e];
        new ActiveXObject(a);
        c = function() {
          Da++;
          return new ActiveXObject(a);
        };
        break;
      } catch (h) {
      }
    }
    return c();
  }
}
var Fa = Object.prototype.hasOwnProperty;
function Ga(a, b) {
  for (var c in b) {
    Fa.call(b, c) && (a[c] = b[c]);
  }
  return a;
}
function Ha(a) {
  for (var b = {}, c, e = 0, f = arguments.length;e < f;) {
    if ((c = arguments[e++]) && "object" == typeof c) {
      for (var h in c) {
        Fa.call(c, h) && (b[h] = c[h]);
      }
    }
  }
  return b;
}
var Ia = ["", "==", "="], Ja = ["", "\x00\x00", "\x00"], Ka = /^\s+|\s+$/g;
function V(a) {
  return a && a.replace(Ka, "");
}
var W = {n:"\r\n", M:"[^\\0-\\u001F\\u007F()<>@,;:\\\\<>/\\[\\]?={} ]*", B:"[^\\0-\\u001F\\u007F]*"};
W.Y = new RegExp("^" + W.M + "$");
W.X = new RegExp("^" + W.B + "$");
W.ea = new RegExp("^(" + W.M + "):(" + W.B + ")");
W.ta = function(a) {
  return W.Y.test(a);
};
W.sa = function(a) {
  return W.X.test(a);
};
W.fa = "[^\\0-\\u001F\\u007F:]*";
W.ga = new RegExp("^" + W.fa + "$");
W.K = function(a) {
  return W.ga.test(a);
};
W.qa = W.sa;
W.Ra = function(a) {
  var b;
  return (b = W.ea.exec(a)) ? {t:b[1], L:b[2]} : null;
};
W.Ba = function(a, b) {
  var c = {};
  if ("string" == typeof a) {
    if (!W.K(a)) {
      throw new TypeError("Invalid HTTP username");
    }
    if (!W.qa(b)) {
      throw new TypeError("Invalid HTTP password");
    }
    for (var e = a + ":" + b, f = 0, h = [], l = e.length % 3, u = Ia[l], l = e + Ja[l], O = l.length;f < O;) {
      e = (l.charCodeAt(f++) << 16) + (l.charCodeAt(f++) << 8) + l.charCodeAt(f++), h.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >> 18 & 63), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >> 12 & 63), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >> 6 & 63), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e & 63));
    }
    c.Authorization = "Basic " + (h.join("").substring(0, h.length - u.length) + u);
  }
  return c;
};
W.H = function(a) {
  return 400 <= a && 599 >= a;
};
var La = {"1.1":Ha(W), "1.0":Ha(W, {K:W.ta})};
Ga(W, La);
W.za = {100:"Continue", 101:"Switching Protocols", 200:"OK", 201:"Created", 202:"Accepted", 203:"Non-Authoritative Information", 204:"No Content", 205:"Reset Content", 206:"Partial Content", 300:"Multiple Choices", 301:"Moved Permanently", 302:"Found", 303:"See Other", 304:"Not Modified", 305:"Use Proxy", 307:"Temporary Redirect", 400:"Bad Request", 401:"Unauthorized", 402:"Payment Required", 403:"Forbidden", 404:"Not Found", 405:"Method Not Allowed", 406:"Not Acceptable", 407:"Proxy Authentication Required", 
408:"Request Timeout", 409:"Conflict", 410:"Gone", 411:"Length Required", 412:"Precondition Failed", 413:"Payload Too Large", 414:"URI Too Long", 415:"Unsupported Media Type", 416:"Range Not Satisfiable", 417:"Expectation Failed", 426:"Upgrade Required", 500:"Internal Server Error", 501:"Not Implemented", 502:"Bad Gateway", 503:"Service Unavailable", 504:"Gateway Timeout", 505:"HTTP Version Not Supported"};
W.Ca = function(a, b) {
  function c(a) {
    / |;/.test(a) && (a = '"' + a + '"');
    return a;
  }
  var e = "attachment", f = /[^\x00-\x7f]/;
  f.test(a) ? (e += "; filename*=UTF-8''" + encodeURIComponent(a) + ";", e += "; filename=" + c(a.replace(f, "?"))) : e += "; filename=" + c(a);
  "number" === typeof b && (e += "; size=" + b);
  return e;
};
W.ua = function(a) {
  a = a.split(/\r\n(?!$)/);
  for (var b = {}, c, e, f, h = 0, l = a.length;h < l;h++) {
    if (e = a[h], -1 !== (c = e.indexOf(":"))) {
      f = V(e.substring(0, c)).toLowerCase(), c = V(e.substring(c + 1)), b[f] = c;
    } else {
      if ("" == e) {
        break;
      }
    }
  }
  return b;
};
W.Ta = function(a) {
  return a.replace(/(?![a-z])([a-z])/g, function(a, c) {
    return c.toUpperCase();
  }).replace(/[^a-z]+/ig, "");
};
W.quote = function(a) {
  return '"' + a + '"';
};
W.Ua = function() {
  return !0;
};
W.ja = function(a) {
  return a;
};
W.va = function(a) {
  var b, c, e;
  e = "";
  for (b in a) {
    a.hasOwnProperty(b) && (c = a[b], c = W.ja(c), e += b, e += ": ", e += c, e += W.n);
  }
  return e;
};
W.Sa = function(a, b, c, e) {
  b = V(b);
  if (!/^[-A-Z]+$/.test(a)) {
    throw Error("Invalid HTTP method: " + a);
  }
  a = a + " " + b + W.n;
  c && (a += W.va(c));
  e && (a += W.n + e);
  return a;
};
function X(a, b) {
  this.uri = a;
  this.a = b || "text";
  "json" === this.a && (this.accept = "application/json");
  this.headers = {};
}
d = X.prototype;
d.b = null;
d.h = null;
d.method = "GET";
d.contentType = null;
d.async = !0;
d.q = !1;
d.load = function(a) {
  var b, c, e = new Promise;
  void 0 === a && (a = this.body);
  this.body = void 0;
  this.e = e;
  try {
    c = this.b = U();
    c.open(I(this.method), this.uri, this.async);
    b = Ga({}, this.headers);
    this.accept && (b.Accept = this.accept);
    this.contentType && (b["Content-Type"] = this.contentType);
    for (var f in b) {
      b.hasOwnProperty(f) && c.setRequestHeader(f, b[f]);
    }
    if ((this.q = !this.async || "responseType" in c) && this.async) {
      try {
        c.responseType = "document" == this.a ? "text" : this.a;
      } catch (h) {
      }
    }
    c.onreadystatechange = k(this, this.la);
    "onerror" in c && (c.onerror = k(this, this.u));
    c.send(a);
  } catch (l) {
    this.error = l, e.reject(this);
  }
  return e;
};
d.la = function(a) {
  var b = this.e, c = this.b, e = c.readyState;
  if (2 === e) {
    if ("number" == typeof c.status && W.H(c.status)) {
      if (null !== this.b) {
        var f = this.b;
        try {
          "function" == typeof f.onload && (f.onload = null), "function" == typeof f.onreadystatechange && (f.onreadystatechange = null), Ca && "" !== f.responseType && (f.open("GET", "/", !0), f.responseType = "");
        } catch (h) {
        }
        f.abort();
        this.b = null;
      }
      b.reject(this);
    }
  } else {
    if (4 === e) {
      if (0 === c.status && ("http" === this.uri.scheme || "https" === this.uri.scheme) || W.H(c.status)) {
        this.u(a);
      } else {
        a: {
          a = null;
          c = this.e;
          b = new Ma(this.b.status, this.b.statusText);
          b.headers = W.ua(this.b.getAllResponseHeaders() || "");
          b.body = "";
          this.response = b;
          if ("document" == this.a) {
            if (this.q) {
              try {
                a = this.b.responseText ? P(this.b.responseText) : null;
              } catch (l) {
                f = l;
              }
            } else {
              a = this.b.responseXML;
            }
            a && !a.documentURI && (a.Aa = this.uri);
            if (f) {
              this.error = f;
              c.reject(this);
              break a;
            }
            this.h = a;
          } else {
            "json" === this.a ? "response" in this.b ? this.h = this.b.response : this.h = this.b.responseText : "text" == this.a && (this.h = this.b.responseText);
          }
          this.response.body = this.h;
          this.b = null;
          c.resolve(this);
        }
      }
    }
  }
};
d.u = function(a) {
  a.target.b = null;
  this.error = a;
  this.e.reject(this);
};
function Ma(a, b) {
  this.status = a;
  this.statusText = b || "";
}
var Na = "default bypass reload revalidate force-cache offline".split(" "), Oa = ["omit", "same-origin", "include"];
g.fetch = function(a, b) {
  return Pa(a, b);
};
var Y = ["arrayBuffer", "blob", "formData", "json", "text"];
function Qa(a) {
  g.fetch[a] = function(b, c) {
    return Pa(b, c).then(function(b) {
      return b[a]();
    });
  };
}
for (var Z = 0, Ra, Sa = Y.length >>> 0;Z < Sa && !1 !== Ra;Z++) {
  Z in Y && (Ra = Qa.call(null, Y[Z]));
}
function Ta(a) {
  this.ok = 200 <= a.response.status && 299 >= a.response.status;
  this.status = a.response.status;
  this.statusText = a.response.statusText;
  this.arrayBuffer = function() {
    return y(null);
  };
  this.blob = function() {
    return y(null);
  };
  this.formData = function() {
    return y(null);
  };
  this.json = function() {
    return y(JSON.parse(a.response.body));
  };
  this.text = function() {
    return y(a.response.body);
  };
}
function Pa(a, b) {
  function c(a) {
    return new Ta(a);
  }
  b || (b = {});
  var e = b.method || "GET", f = a || b.url, h = b.headers || {}, l = b.body || null, u = b.cache || null, O = b.credentials || null;
  if (b.hasOwnProperty("cache") && -1 === n(Na, u)) {
    throw new TypeError;
  }
  if (b.hasOwnProperty("credentials") && -1 === n(Oa, O)) {
    throw new TypeError;
  }
  e = {method:e, uri:f, body:l, headers:h};
  f = new K(location.href);
  e = Ua(e, f);
  return e.load().then(c, c);
}
function Ua(a, b) {
  var c = b.resolve(a.uri), e = !1, f = !1;
  a.accept && (e = a.accept, e = e.toLowerCase(), (f = "text/xml" === e || "text/xsl" === e || "application/xml" === e) || (f = "+xml" === e.substring(e.length - 4)), e = f, f = "application/json" === a.accept);
  c = e ? new X(c, "document") : f ? new X(c, "json") : new X(c, "text");
  "boolean" === typeof a.async && (c.async = a.async);
  a.method && (c.method = a.method);
  a.accept && (c.headers.Accept = a.accept);
  a.contentType && (c.contentType = a.contentType);
  a.headers && (c.headers = a.headers);
  a.body && (c.body = a.body);
  return c;
}
;}();
