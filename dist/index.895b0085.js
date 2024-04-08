/*! UIkit 3.19.2 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */ (function(ve, we) {
    typeof exports == "object" && typeof module < "u" ? module.exports = we() : typeof define == "function" && define.amd ? define("uikit", we) : (ve = typeof globalThis < "u" ? globalThis : ve || self, ve.UIkit = we());
})(this, function() {
    "use strict";
    const { hasOwnProperty: ve, toString: we } = Object.prototype;
    function pt(t, e) {
        return ve.call(t, e);
    }
    const Qo = /\B([A-Z])/g, Mt = rt((t)=>t.replace(Qo, "-$1").toLowerCase()), tr = /-(\w)/g, be = rt((t)=>(t.charAt(0).toLowerCase() + t.slice(1)).replace(tr, (e, i)=>i.toUpperCase())), St = rt((t)=>t.charAt(0).toUpperCase() + t.slice(1));
    function dt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e);
    }
    function te(t, e) {
        var i;
        return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e);
    }
    function m(t, e) {
        var i;
        return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e);
    }
    function bt(t, e) {
        var i;
        return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e);
    }
    const { isArray: Q, from: It } = Array, { assign: gt } = Object;
    function et(t) {
        return typeof t == "function";
    }
    function Ct(t) {
        return t !== null && typeof t == "object";
    }
    function xt(t) {
        return we.call(t) === "[object Object]";
    }
    function ee(t) {
        return Ct(t) && t === t.window;
    }
    function xe(t) {
        return Ni(t) === 9;
    }
    function Qe(t) {
        return Ni(t) >= 1;
    }
    function $e(t) {
        return Ni(t) === 1;
    }
    function Ni(t) {
        return !ee(t) && Ct(t) && t.nodeType;
    }
    function ie(t) {
        return typeof t == "boolean";
    }
    function N(t) {
        return typeof t == "string";
    }
    function ye(t) {
        return typeof t == "number";
    }
    function vt(t) {
        return ye(t) || N(t) && !isNaN(t - parseFloat(t));
    }
    function ti(t) {
        return !(Q(t) ? t.length : Ct(t) && Object.keys(t).length);
    }
    function G(t) {
        return t === void 0;
    }
    function zi(t) {
        return ie(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function $t(t) {
        const e = Number(t);
        return isNaN(e) ? !1 : e;
    }
    function S(t) {
        return parseFloat(t) || 0;
    }
    function F(t) {
        return E(t)[0];
    }
    function E(t) {
        return Qe(t) ? [
            t
        ] : Array.from(t || []).filter(Qe);
    }
    function se(t) {
        if (ee(t)) return t;
        t = F(t);
        const e = xe(t) ? t : t == null ? void 0 : t.ownerDocument;
        return (e == null ? void 0 : e.defaultView) || window;
    }
    function ei(t, e) {
        return t === e || Ct(t) && Ct(e) && Object.keys(t).length === Object.keys(e).length && Nt(t, (i, s)=>i === e[s]);
    }
    function Fi(t, e, i) {
        return t.replace(new RegExp(`${e}|${i}`, "g"), (s)=>s === e ? i : e);
    }
    function Bt(t) {
        return t[t.length - 1];
    }
    function Nt(t, e) {
        for(const i in t)if (e(t[i], i) === !1) return !1;
        return !0;
    }
    function Fs(t, e) {
        return t.slice().sort(({ [e]: i = 0 }, { [e]: s = 0 })=>i > s ? 1 : s > i ? -1 : 0);
    }
    function zt(t, e) {
        return t.reduce((i, s)=>i + S(et(e) ? e(s) : s[e]), 0);
    }
    function Hs(t, e) {
        const i = new Set;
        return t.filter(({ [e]: s })=>i.has(s) ? !1 : i.add(s));
    }
    function Hi(t, e) {
        return e.reduce((i, s)=>({
                ...i,
                [s]: t[s]
            }), {});
    }
    function tt(t, e = 0, i = 1) {
        return Math.min(Math.max($t(t) || 0, e), i);
    }
    function A() {}
    function Li(...t) {
        return [
            [
                "bottom",
                "top"
            ],
            [
                "right",
                "left"
            ]
        ].every(([e, i])=>Math.min(...t.map(({ [e]: s })=>s)) - Math.max(...t.map(({ [i]: s })=>s)) > 0);
    }
    function ii(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function Wi(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return {
            [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
            [e]: i
        };
    }
    function Ls(t, e) {
        t = {
            ...t
        };
        for(const i in t)t = t[i] > e[i] ? Wi(t, i, e[i]) : t;
        return t;
    }
    function er(t, e) {
        t = Ls(t, e);
        for(const i in t)t = t[i] < e[i] ? Wi(t, i, e[i]) : t;
        return t;
    }
    const ji = {
        ratio: Wi,
        contain: Ls,
        cover: er
    };
    function ot(t, e, i = 0, s = !1) {
        e = E(e);
        const { length: n } = e;
        return n ? (t = vt(t) ? $t(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? n - 1 : e.indexOf(F(t)), s ? tt(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1;
    }
    function rt(t) {
        const e = Object.create(null);
        return (i, ...s)=>e[i] || (e[i] = t(i, ...s));
    }
    function p(t, e, i) {
        var s;
        if (Ct(e)) {
            for(const n in e)p(t, n, e[n]);
            return;
        }
        if (G(i)) return (s = F(t)) == null ? void 0 : s.getAttribute(e);
        for (const n of E(t))et(i) && (i = i.call(n, p(n, e))), i === null ? ke(n, e) : n.setAttribute(e, i);
    }
    function Et(t, e) {
        return E(t).some((i)=>i.hasAttribute(e));
    }
    function ke(t, e) {
        E(t).forEach((i)=>i.removeAttribute(e));
    }
    function X(t, e) {
        for (const i of [
            e,
            `data-${e}`
        ])if (Et(t, i)) return p(t, i);
    }
    function $(t, ...e) {
        for (const i of E(t)){
            const s = Ft(e).filter((n)=>!y(i, n));
            s.length && i.classList.add(...s);
        }
    }
    function D(t, ...e) {
        for (const i of E(t)){
            const s = Ft(e).filter((n)=>y(i, n));
            s.length && i.classList.remove(...s);
        }
    }
    function Ri(t, e) {
        e = new RegExp(e);
        for (const i of E(t))i.classList.remove(...It(i.classList).filter((s)=>s.match(e)));
    }
    function si(t, e, i) {
        i = Ft(i), e = Ft(e).filter((s)=>!m(i, s)), D(t, e), $(t, i);
    }
    function y(t, e) {
        return [e] = Ft(e), E(t).some((i)=>i.classList.contains(e));
    }
    function j(t, e, i) {
        const s = Ft(e);
        G(i) || (i = !!i);
        for (const n of E(t))for (const o of s)n.classList.toggle(o, i);
    }
    function Ft(t) {
        return t ? Q(t) ? t.map(Ft).flat() : String(t).split(/[ ,]/).filter(Boolean) : [];
    }
    const ir = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    function qi(t) {
        return E(t).some((e)=>ir[e.tagName.toLowerCase()]);
    }
    function q(t) {
        return E(t).some((e)=>e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }
    const Se = "input,select,textarea,button";
    function Ui(t) {
        return E(t).some((e)=>T(e, Se));
    }
    const Ie = `${Se},a[href],[tabindex]`;
    function ni(t) {
        return T(t, Ie);
    }
    function P(t) {
        var e;
        return (e = F(t)) == null ? void 0 : e.parentElement;
    }
    function Ce(t, e) {
        return E(t).filter((i)=>T(i, e));
    }
    function T(t, e) {
        return E(t).some((i)=>i.matches(e));
    }
    function oi(t, e) {
        var i;
        return (i = F(t)) == null ? void 0 : i.closest(dt(e, ">") ? e.slice(1) : e);
    }
    function Ws(t, e) {
        return N(e) ? !!oi(t, e) : F(e).contains(F(t));
    }
    function Ee(t, e) {
        const i = [];
        for(; t = P(t);)(!e || T(t, e)) && i.push(t);
        return i;
    }
    function B(t, e) {
        t = F(t);
        const i = t ? It(t.children) : [];
        return e ? Ce(i, e) : i;
    }
    function Tt(t, e) {
        return e ? E(t).indexOf(F(e)) : B(P(t)).indexOf(t);
    }
    function ne(t) {
        return t = F(t), t && [
            "origin",
            "pathname",
            "search"
        ].every((e)=>t[e] === location[e]);
    }
    function Vi(t) {
        if (ne(t)) {
            t = F(t);
            const e = decodeURIComponent(t.hash).substring(1);
            return document.getElementById(e) || document.getElementsByName(e)[0];
        }
    }
    function J(t, e) {
        return Yi(t, Rs(t, e));
    }
    function Te(t, e) {
        return Pe(t, Rs(t, e));
    }
    function Yi(t, e) {
        return F(qs(t, F(e), "querySelector"));
    }
    function Pe(t, e) {
        return E(qs(t, F(e), "querySelectorAll"));
    }
    const sr = /(^|[^\\],)\s*[!>+~-]/, js = rt((t)=>t.match(sr));
    function Rs(t, e = document) {
        return N(t) && js(t) || xe(e) ? e : e.ownerDocument;
    }
    const nr = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, or = rt((t)=>t.replace(nr, "$1 *"));
    function qs(t, e = document, i) {
        if (!t || !N(t)) return t;
        if (t = or(t), js(t)) {
            const s = ar(t);
            t = "";
            for (let n of s){
                let o = e;
                if (n[0] === "!") {
                    const r = n.substr(1).trim().split(" ");
                    if (o = P(e).closest(r[0]), n = r.slice(1).join(" ").trim(), !n.length && s.length === 1) return o;
                }
                if (n[0] === "-") {
                    const r = n.substr(1).trim().split(" "), a = (o || e).previousElementSibling;
                    o = T(a, n.substr(1)) ? a : null, n = r.slice(1).join(" ");
                }
                o && (t += `${t ? "," : ""}${lr(o)} ${n}`);
            }
            xe(e) || (e = e.ownerDocument);
        }
        try {
            return e[i](t);
        } catch  {
            return null;
        }
    }
    const rr = /.*?[^\\](?![^(]*\))(?:,|$)/g, ar = rt((t)=>t.match(rr).map((e)=>e.replace(/,$/, "").trim()));
    function lr(t) {
        const e = [];
        for(; t.parentNode;){
            const i = p(t, "id");
            if (i) {
                e.unshift(`#${Gi(i)}`);
                break;
            } else {
                let { tagName: s } = t;
                s !== "HTML" && (s += `:nth-child(${Tt(t) + 1})`), e.unshift(s), t = t.parentNode;
            }
        }
        return e.join(" > ");
    }
    function Gi(t) {
        return N(t) ? CSS.escape(t) : "";
    }
    function b(...t) {
        let [e, i, s, n, o = !1] = Xi(t);
        n.length > 1 && (n = cr(n)), o != null && o.self && (n = ur(n)), s && (n = hr(s, n));
        for (const r of i)for (const a of e)a.addEventListener(r, n, o);
        return ()=>Pt(e, i, n, o);
    }
    function Pt(...t) {
        let [e, i, , s, n = !1] = Xi(t);
        for (const o of i)for (const r of e)r.removeEventListener(o, s, n);
    }
    function H(...t) {
        const [e, i, s, n, o = !1, r] = Xi(t), a = b(e, i, s, (l)=>{
            const h = !r || r(l);
            h && (a(), n(l, h));
        }, o);
        return a;
    }
    function g(t, e, i) {
        return Ji(t).every((s)=>s.dispatchEvent(Ht(e, !0, !0, i)));
    }
    function Ht(t, e = !0, i = !1, s) {
        return N(t) && (t = new CustomEvent(t, {
            bubbles: e,
            cancelable: i,
            detail: s
        })), t;
    }
    function Xi(t) {
        return t[0] = Ji(t[0]), N(t[1]) && (t[1] = t[1].split(" ")), et(t[2]) && t.splice(2, 0, !1), t;
    }
    function hr(t, e) {
        return (i)=>{
            const s = t[0] === ">" ? Pe(t, i.currentTarget).reverse().find((n)=>n.contains(i.target)) : i.target.closest(t);
            s && (i.current = s, e.call(this, i), delete i.current);
        };
    }
    function cr(t) {
        return (e)=>Q(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function ur(t) {
        return function(e) {
            if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e);
        };
    }
    function Us(t) {
        return t && "addEventListener" in t;
    }
    function dr(t) {
        return Us(t) ? t : F(t);
    }
    function Ji(t) {
        return Q(t) ? t.map(dr).filter(Boolean) : N(t) ? Pe(t) : Us(t) ? [
            t
        ] : E(t);
    }
    function yt(t) {
        return t.pointerType === "touch" || !!t.touches;
    }
    function _t(t) {
        var e, i;
        const { clientX: s, clientY: n } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
        return {
            x: s,
            y: n
        };
    }
    const fr = {
        "animation-iteration-count": !0,
        "column-count": !0,
        "fill-opacity": !0,
        "flex-grow": !0,
        "flex-shrink": !0,
        "font-weight": !0,
        "line-height": !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        widows: !0,
        "z-index": !0,
        zoom: !0
    };
    function c(t, e, i, s) {
        const n = E(t);
        for (const o of n)if (N(e)) {
            if (e = ri(e), G(i)) return getComputedStyle(o).getPropertyValue(e);
            o.style.setProperty(e, vt(i) && !fr[e] ? `${i}px` : i || ye(i) ? i : "", s);
        } else if (Q(e)) {
            const r = {};
            for (const a of e)r[a] = c(o, a);
            return r;
        } else if (Ct(e)) for(const r in e)c(o, r, e[r], i);
        return n[0];
    }
    const ri = rt((t)=>pr(t));
    function pr(t) {
        if (dt(t, "--")) return t;
        t = Mt(t);
        const { style: e } = document.documentElement;
        if (t in e) return t;
        for (const i of [
            "webkit",
            "moz"
        ]){
            const s = `-${i}-${t}`;
            if (s in e) return s;
        }
    }
    const Ki = "uk-transition", Zi = "transitionend", Qi = "transitioncanceled";
    function gr(t, e, i = 400, s = "linear") {
        return i = Math.round(i), Promise.all(E(t).map((n)=>new Promise((o, r)=>{
                for(const l in e){
                    const h = c(n, l);
                    h === "" && c(n, l, h);
                }
                const a = setTimeout(()=>g(n, Zi), i);
                H(n, [
                    Zi,
                    Qi
                ], ({ type: l })=>{
                    clearTimeout(a), D(n, Ki), c(n, {
                        transitionProperty: "",
                        transitionDuration: "",
                        transitionTimingFunction: ""
                    }), l === Qi ? r() : o(n);
                }, {
                    self: !0
                }), $(n, Ki), c(n, {
                    transitionProperty: Object.keys(e).map(ri).join(","),
                    transitionDuration: `${i}ms`,
                    transitionTimingFunction: s,
                    ...e
                });
            })));
    }
    const O = {
        start: gr,
        async stop (t) {
            g(t, Zi), await Promise.resolve();
        },
        async cancel (t) {
            g(t, Qi), await Promise.resolve();
        },
        inProgress (t) {
            return y(t, Ki);
        }
    }, _e = "uk-animation-", Vs = "animationend", ai = "animationcanceled";
    function Ys(t, e, i = 200, s, n) {
        return Promise.all(E(t).map((o)=>new Promise((r, a)=>{
                g(o, ai);
                const l = setTimeout(()=>g(o, Vs), i);
                H(o, [
                    Vs,
                    ai
                ], ({ type: h })=>{
                    clearTimeout(l), h === ai ? a() : r(o), c(o, "animationDuration", ""), Ri(o, `${_e}\\S*`);
                }, {
                    self: !0
                }), c(o, "animationDuration", `${i}ms`), $(o, e, _e + (n ? "leave" : "enter")), dt(e, _e) && (s && $(o, `uk-transform-origin-${s}`), n && $(o, `${_e}reverse`));
            })));
    }
    const mr = new RegExp(`${_e}(enter|leave)`), At = {
        in: Ys,
        out (t, e, i, s) {
            return Ys(t, e, i, s, !0);
        },
        inProgress (t) {
            return mr.test(p(t, "class"));
        },
        cancel (t) {
            g(t, ai);
        }
    };
    function vr(t) {
        if (document.readyState !== "loading") {
            t();
            return;
        }
        H(document, "DOMContentLoaded", t);
    }
    function R(t, ...e) {
        return e.some((i)=>{
            var s;
            return ((s = t == null ? void 0 : t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase();
        });
    }
    function ts(t) {
        return t = k(t), t.innerHTML = "", t;
    }
    function Lt(t, e) {
        return G(e) ? k(t).innerHTML : L(ts(t), e);
    }
    const wr = ci("prepend"), L = ci("append"), li = ci("before"), hi = ci("after");
    function ci(t) {
        return function(e, i) {
            var s;
            const n = E(N(i) ? Wt(i) : i);
            return (s = k(e)) == null || s[t](...n), Gs(n);
        };
    }
    function at(t) {
        E(t).forEach((e)=>e.remove());
    }
    function ui(t, e) {
        for(e = F(li(t, e)); e.firstElementChild;)e = e.firstElementChild;
        return L(e, t), e;
    }
    function es(t, e) {
        return E(E(t).map((i)=>i.hasChildNodes() ? ui(It(i.childNodes), e) : L(i, e)));
    }
    function Ae(t) {
        E(t).map(P).filter((e, i, s)=>s.indexOf(e) === i).forEach((e)=>e.replaceWith(...e.childNodes));
    }
    const br = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function Wt(t) {
        const e = br.exec(t);
        if (e) return document.createElement(e[1]);
        const i = document.createElement("template");
        return i.innerHTML = t.trim(), Gs(i.content.childNodes);
    }
    function Gs(t) {
        return t.length > 1 ? t : t[0];
    }
    function kt(t, e) {
        if ($e(t)) for(e(t), t = t.firstElementChild; t;){
            const i = t.nextElementSibling;
            kt(t, e), t = i;
        }
    }
    function k(t, e) {
        return Xs(t) ? F(Wt(t)) : Yi(t, e);
    }
    function z(t, e) {
        return Xs(t) ? E(Wt(t)) : Pe(t, e);
    }
    function Xs(t) {
        return N(t) && dt(t.trim(), "<");
    }
    const jt = {
        width: [
            "left",
            "right"
        ],
        height: [
            "top",
            "bottom"
        ]
    };
    function w(t) {
        const e = $e(t) ? F(t).getBoundingClientRect() : {
            height: it(t),
            width: di(t),
            top: 0,
            left: 0
        };
        return {
            height: e.height,
            width: e.width,
            top: e.top,
            left: e.left,
            bottom: e.top + e.height,
            right: e.left + e.width
        };
    }
    function I(t, e) {
        e && c(t, {
            left: 0,
            top: 0
        });
        const i = w(t);
        if (t) {
            const { scrollY: s, scrollX: n } = se(t), o = {
                height: s,
                width: n
            };
            for(const r in jt)for (const a of jt[r])i[a] += o[r];
        }
        if (!e) return i;
        for (const s of [
            "left",
            "top"
        ])c(t, s, e[s] - i[s]);
    }
    function is(t) {
        let { top: e, left: i } = I(t);
        const { ownerDocument: { body: s, documentElement: n }, offsetParent: o } = F(t);
        let r = o || n;
        for(; r && (r === s || r === n) && c(r, "position") === "static";)r = r.parentNode;
        if ($e(r)) {
            const a = I(r);
            e -= a.top + S(c(r, "borderTopWidth")), i -= a.left + S(c(r, "borderLeftWidth"));
        }
        return {
            top: e - S(c(t, "marginTop")),
            left: i - S(c(t, "marginLeft"))
        };
    }
    function Rt(t) {
        t = F(t);
        const e = [
            t.offsetTop,
            t.offsetLeft
        ];
        for(; t = t.offsetParent;)if (e[0] += t.offsetTop + S(c(t, "borderTopWidth")), e[1] += t.offsetLeft + S(c(t, "borderLeftWidth")), c(t, "position") === "fixed") {
            const i = se(t);
            return e[0] += i.scrollY, e[1] += i.scrollX, e;
        }
        return e;
    }
    const it = Js("height"), di = Js("width");
    function Js(t) {
        const e = St(t);
        return (i, s)=>{
            if (G(s)) {
                if (ee(i)) return i[`inner${e}`];
                if (xe(i)) {
                    const n = i.documentElement;
                    return Math.max(n[`offset${e}`], n[`scroll${e}`]);
                }
                return i = F(i), s = c(i, t), s = s === "auto" ? i[`offset${e}`] : S(s) || 0, s - De(i, t);
            } else return c(i, t, !s && s !== 0 ? "" : +s + De(i, t) + "px");
        };
    }
    function De(t, e, i = "border-box") {
        return c(t, "boxSizing") === i ? zt(jt[e].map(St), (s)=>S(c(t, `padding${s}`)) + S(c(t, `border${s}Width`))) : 0;
    }
    function fi(t) {
        for(const e in jt)for(const i in jt[e])if (jt[e][i] === t) return jt[e][1 - i];
        return t;
    }
    function U(t, e = "width", i = window, s = !1) {
        return N(t) ? zt($r(t), (n)=>{
            const o = kr(n);
            return o ? Sr(o === "vh" ? Ir() : o === "vw" ? di(se(i)) : s ? i[`offset${St(e)}`] : w(i)[e], n) : n;
        }) : S(t);
    }
    const xr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, $r = rt((t)=>t.toString().replace(/\s/g, "").match(xr) || []), yr = /(?:v[hw]|%)$/, kr = rt((t)=>(t.match(yr) || [])[0]);
    function Sr(t, e) {
        return t * S(e) / 100;
    }
    let Oe, oe;
    function Ir() {
        return Oe || (oe || (oe = k("<div>"), c(oe, {
            height: "100vh",
            position: "fixed"
        }), b(window, "resize", ()=>Oe = null)), L(document.body, oe), Oe = oe.clientHeight, at(oe), Oe);
    }
    const re = typeof window < "u", V = re && document.dir === "rtl", ae = re && "ontouchstart" in window, le = re && window.PointerEvent, ft = le ? "pointerdown" : ae ? "touchstart" : "mousedown", pi = le ? "pointermove" : ae ? "touchmove" : "mousemove", Dt = le ? "pointerup" : ae ? "touchend" : "mouseup", he = le ? "pointerenter" : ae ? "" : "mouseenter", Me = le ? "pointerleave" : ae ? "" : "mouseleave", gi = le ? "pointercancel" : "touchcancel", K = {
        reads: [],
        writes: [],
        read (t) {
            return this.reads.push(t), ns(), t;
        },
        write (t) {
            return this.writes.push(t), ns(), t;
        },
        clear (t) {
            Zs(this.reads, t), Zs(this.writes, t);
        },
        flush: ss
    };
    function ss(t) {
        Ks(K.reads), Ks(K.writes.splice(0)), K.scheduled = !1, (K.reads.length || K.writes.length) && ns(t + 1);
    }
    const Cr = 4;
    function ns(t) {
        K.scheduled || (K.scheduled = !0, t && t < Cr ? Promise.resolve().then(()=>ss(t)) : requestAnimationFrame(()=>ss(1)));
    }
    function Ks(t) {
        let e;
        for(; e = t.shift();)try {
            e();
        } catch (i) {
            console.error(i);
        }
    }
    function Zs(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1);
    }
    class Qs {
        init() {
            this.positions = [];
            let e;
            this.unbind = b(document, "mousemove", (i)=>e = _t(i)), this.interval = setInterval(()=>{
                e && (this.positions.push(e), this.positions.length > 5 && this.positions.shift());
            }, 50);
        }
        cancel() {
            var e;
            (e = this.unbind) == null || e.call(this), clearInterval(this.interval);
        }
        movesTo(e) {
            if (!this.positions || this.positions.length < 2) return !1;
            const i = w(e), { left: s, right: n, top: o, bottom: r } = i, [a] = this.positions, l = Bt(this.positions), h = [
                a,
                l
            ];
            return ii(l, i) ? !1 : [
                [
                    {
                        x: s,
                        y: o
                    },
                    {
                        x: n,
                        y: r
                    }
                ],
                [
                    {
                        x: s,
                        y: r
                    },
                    {
                        x: n,
                        y: o
                    }
                ]
            ].some((d)=>{
                const f = Er(h, d);
                return f && ii(f, i);
            });
        }
    }
    function Er([{ x: t, y: e }, { x: i, y: s }], [{ x: n, y: o }, { x: r, y: a }]) {
        const l = (a - o) * (i - t) - (r - n) * (s - e);
        if (l === 0) return !1;
        const h = ((r - n) * (e - o) - (a - o) * (t - n)) / l;
        return h < 0 ? !1 : {
            x: t + h * (i - t),
            y: e + h * (s - e)
        };
    }
    function tn(t, e, i = {}, { intersecting: s = !0 } = {}) {
        const n = new IntersectionObserver(s ? (o, r)=>{
            o.some((a)=>a.isIntersecting) && e(o, r);
        } : e, i);
        for (const o of E(t))n.observe(o);
        return n;
    }
    const Tr = re && window.ResizeObserver;
    function Be(t, e, i = {
        box: "border-box"
    }) {
        if (Tr) return sn(ResizeObserver, t, e, i);
        const s = [
            b(window, "load resize", e),
            b(document, "loadedmetadata load", e, !0)
        ];
        return {
            disconnect: ()=>s.map((n)=>n())
        };
    }
    function os(t) {
        return {
            disconnect: b([
                window,
                window.visualViewport
            ], "resize", t)
        };
    }
    function en(t, e, i) {
        return sn(MutationObserver, t, e, i);
    }
    function sn(t, e, i, s) {
        const n = new t(i);
        for (const o of E(e))n.observe(o, s);
        return n;
    }
    function nn(t) {
        vi(t) && rs(t, {
            func: "playVideo",
            method: "play"
        }), mi(t) && t.play();
    }
    function on(t) {
        vi(t) && rs(t, {
            func: "pauseVideo",
            method: "pause"
        }), mi(t) && t.pause();
    }
    function rn(t) {
        vi(t) && rs(t, {
            func: "mute",
            method: "setVolume",
            value: 0
        }), mi(t) && (t.muted = !0);
    }
    function an(t) {
        return mi(t) || vi(t);
    }
    function mi(t) {
        return R(t, "video");
    }
    function vi(t) {
        return R(t, "iframe") && (ln(t) || hn(t));
    }
    function ln(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
    }
    function hn(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function rs(t, e) {
        await _r(t), cn(t, e);
    }
    function cn(t, e) {
        t.contentWindow.postMessage(JSON.stringify({
            event: "command",
            ...e
        }), "*");
    }
    const as = "_ukPlayer";
    let Pr = 0;
    function _r(t) {
        if (t[as]) return t[as];
        const e = ln(t), i = hn(t), s = ++Pr;
        let n;
        return t[as] = new Promise((o)=>{
            e && H(t, "load", ()=>{
                const r = ()=>cn(t, {
                        event: "listening",
                        id: s
                    });
                n = setInterval(r, 100), r();
            }), H(window, "message", o, !1, ({ data: r })=>{
                try {
                    return r = JSON.parse(r), e && (r == null ? void 0 : r.id) === s && r.event === "onReady" || i && Number(r == null ? void 0 : r.player_id) === s;
                } catch  {}
            }), t.src = `${t.src}${m(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`;
        }).then(()=>clearInterval(n));
    }
    function Ar(t, e = 0, i = 0) {
        return q(t) ? Li(...Ut(t).map((s)=>{
            const { top: n, left: o, bottom: r, right: a } = lt(s);
            return {
                top: n - e,
                left: o - i,
                bottom: r + e,
                right: a + i
            };
        }).concat(I(t))) : !1;
    }
    function un(t, { offset: e = 0 } = {}) {
        const i = q(t) ? qt(t, !1, [
            "hidden"
        ]) : [];
        return i.reduce((r, a, l)=>{
            const { scrollTop: h, scrollHeight: u, offsetHeight: d } = a, f = lt(a), v = u - f.height, { height: x, top: C } = i[l - 1] ? lt(i[l - 1]) : I(t);
            let M = Math.ceil(C - f.top - e + h);
            return e > 0 && d < x + e ? M += e : e = 0, M > v ? (e -= M - v, M = v) : M < 0 && (e -= M, M = 0), ()=>s(a, M - h, t, v).then(r);
        }, ()=>Promise.resolve())();
        function s(r, a, l, h) {
            return new Promise((u)=>{
                const d = r.scrollTop, f = n(Math.abs(a)), v = Date.now(), x = cs(r) === r, C = I(l).top + (x ? 0 : d);
                let M = 0, wt = 15;
                (function Ze() {
                    const Mi = o(tt((Date.now() - v) / f));
                    let mt = 0;
                    if (i[0] === r && d + a < h) {
                        mt = I(l).top + (x ? 0 : r.scrollTop) - C;
                        const me = ls(l);
                        mt -= me ? I(me).height : 0;
                    }
                    r.scrollTop = d + (a + mt) * Mi, Mi === 1 && (M === mt || !wt--) ? u() : (M = mt, requestAnimationFrame(Ze));
                })();
            });
        }
        function n(r) {
            return 40 * Math.pow(r, .375);
        }
        function o(r) {
            return .5 * (1 - Math.cos(Math.PI * r));
        }
    }
    function wi(t, e = 0, i = 0) {
        if (!q(t)) return 0;
        const s = Ot(t, !0), { scrollHeight: n, scrollTop: o } = s, { height: r } = lt(s), a = n - r, l = Rt(t)[0] - Rt(s)[0], h = Math.max(0, l - r + e), u = Math.min(a, l + t.offsetHeight - i);
        return h < u ? tt((o - h) / (u - h)) : 1;
    }
    function qt(t, e = !1, i = []) {
        const s = cs(t);
        let n = Ee(t).reverse();
        n = n.slice(n.indexOf(s) + 1);
        const o = bt(n, (r)=>c(r, "position") === "fixed");
        return ~o && (n = n.slice(o)), [
            s
        ].concat(n.filter((r)=>c(r, "overflow").split(" ").some((a)=>m([
                    "auto",
                    "scroll",
                    ...i
                ], a)) && (!e || r.scrollHeight > lt(r).height))).reverse();
    }
    function Ot(...t) {
        return qt(...t)[0];
    }
    function Ut(t) {
        return qt(t, !1, [
            "hidden",
            "clip"
        ]);
    }
    function lt(t) {
        const e = se(t);
        let i = t === cs(t) ? e : t;
        if (ee(i) && e.visualViewport) {
            let { height: n, width: o, scale: r, pageTop: a, pageLeft: l } = e.visualViewport;
            return n = Math.round(n * r), o = Math.round(o * r), {
                height: n,
                width: o,
                top: a,
                left: l,
                bottom: a + n,
                right: l + o
            };
        }
        let s = I(i);
        if (c(i, "display") === "inline") return s;
        for (let [n, o, r, a] of [
            [
                "width",
                "x",
                "left",
                "right"
            ],
            [
                "height",
                "y",
                "top",
                "bottom"
            ]
        ]){
            ee(i) ? i = t.ownerDocument : s[r] += S(c(i, `border-${r}-width`));
            const l = s[n] % 1;
            s[n] = s[o] = i[`client${St(n)}`] - (l ? l < .5 ? -l : 1 - l : 0), s[a] = s[n] + s[r];
        }
        return s;
    }
    function ls(t) {
        const { left: e, width: i, top: s } = w(t);
        for (const n of [
            0,
            s
        ]){
            const o = t.ownerDocument.elementsFromPoint(e + i / 2, n).find((r)=>!r.contains(t) && !y(r, "uk-togglable-leave") && (hs(r, "fixed") && dn(Ee(t).reverse().find((a)=>!a.contains(r) && !hs(a, "static"))) < dn(r) || hs(r, "sticky") && P(r).contains(t)));
            if (o) return o;
        }
    }
    function dn(t) {
        return S(c(t, "zIndex"));
    }
    function hs(t, e) {
        return c(t, "position") === e;
    }
    function cs(t) {
        return se(t).document.scrollingElement;
    }
    const ht = [
        [
            "width",
            "x",
            "left",
            "right"
        ],
        [
            "height",
            "y",
            "top",
            "bottom"
        ]
    ];
    function fn(t, e, i) {
        i = {
            attach: {
                element: [
                    "left",
                    "top"
                ],
                target: [
                    "left",
                    "top"
                ],
                ...i.attach
            },
            offset: [
                0,
                0
            ],
            placement: [],
            ...i
        }, Q(e) || (e = [
            e,
            e
        ]), I(t, pn(t, e, i));
    }
    function pn(t, e, i) {
        const s = gn(t, e, i), { boundary: n, viewportOffset: o = 0, placement: r } = i;
        let a = s;
        for (const [l, [h, , u, d]] of Object.entries(ht)){
            const f = Dr(t, e[l], o, n, l);
            if (bi(s, f, l)) continue;
            let v = 0;
            if (r[l] === "flip") {
                const x = i.attach.target[l];
                if (x === d && s[d] <= f[d] || x === u && s[u] >= f[u]) continue;
                v = Mr(t, e, i, l)[u] - s[u];
                const C = Or(t, e[l], o, l);
                if (!bi(us(s, v, l), C, l)) {
                    if (bi(s, C, l)) continue;
                    if (i.recursion) return !1;
                    const M = Br(t, e, i);
                    if (M && bi(M, C, 1 - l)) return M;
                    continue;
                }
            } else if (r[l] === "shift") {
                const x = I(e[l]), { offset: C } = i;
                v = tt(tt(s[u], f[u], f[d] - s[h]), x[u] - s[h] + C[l], x[d] - C[l]) - s[u];
            }
            a = us(a, v, l);
        }
        return a;
    }
    function gn(t, e, i) {
        let { attach: s, offset: n } = {
            attach: {
                element: [
                    "left",
                    "top"
                ],
                target: [
                    "left",
                    "top"
                ],
                ...i.attach
            },
            offset: [
                0,
                0
            ],
            ...i
        }, o = I(t);
        for (const [r, [a, , l, h]] of Object.entries(ht)){
            const u = s.target[r] === s.element[r] ? lt(e[r]) : I(e[r]);
            o = us(o, u[l] - o[l] + mn(s.target[r], h, u[a]) - mn(s.element[r], h, o[a]) + +n[r], r);
        }
        return o;
    }
    function us(t, e, i) {
        const [, s, n, o] = ht[i], r = {
            ...t
        };
        return r[n] = t[s] = t[n] + e, r[o] += e, r;
    }
    function mn(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0;
    }
    function Dr(t, e, i, s, n) {
        let o = wn(...vn(t, e).map(lt));
        return i && (o[ht[n][2]] += i, o[ht[n][3]] -= i), s && (o = wn(o, I(Q(s) ? s[n] : s))), o;
    }
    function Or(t, e, i, s) {
        const [n, o, r, a] = ht[s], [l] = vn(t, e), h = lt(l);
        return [
            "auto",
            "scroll"
        ].includes(c(l, `overflow-${o}`)) && (h[r] -= l[`scroll${St(r)}`], h[a] = h[r] + l[`scroll${St(n)}`]), h[r] += i, h[a] -= i, h;
    }
    function vn(t, e) {
        return Ut(e).filter((i)=>i.contains(t));
    }
    function wn(...t) {
        let e = {};
        for (const i of t)for (const [, , s, n] of ht)e[s] = Math.max(e[s] || 0, i[s]), e[n] = Math.min(...[
            e[n],
            i[n]
        ].filter(Boolean));
        return e;
    }
    function bi(t, e, i) {
        const [, , s, n] = ht[i];
        return t[s] >= e[s] && t[n] <= e[n];
    }
    function Mr(t, e, { offset: i, attach: s }, n) {
        return gn(t, e, {
            attach: {
                element: bn(s.element, n),
                target: bn(s.target, n)
            },
            offset: Nr(i, n)
        });
    }
    function Br(t, e, i) {
        return pn(t, e, {
            ...i,
            attach: {
                element: i.attach.element.map(xn).reverse(),
                target: i.attach.target.map(xn).reverse()
            },
            offset: i.offset.reverse(),
            placement: i.placement.reverse(),
            recursion: !0
        });
    }
    function bn(t, e) {
        const i = [
            ...t
        ], s = ht[e].indexOf(t[e]);
        return ~s && (i[e] = ht[e][1 - s % 2 + 2]), i;
    }
    function xn(t) {
        for(let e = 0; e < ht.length; e++){
            const i = ht[e].indexOf(t);
            if (~i) return ht[1 - e][i % 2 + 2];
        }
    }
    function Nr(t, e) {
        return t = [
            ...t
        ], t[e] *= -1, t;
    }
    var zr = Object.freeze({
        __proto__: null,
        $: k,
        $$: z,
        Animation: At,
        Dimensions: ji,
        MouseTracker: Qs,
        Transition: O,
        addClass: $,
        after: hi,
        append: L,
        apply: kt,
        assign: gt,
        attr: p,
        before: li,
        boxModelAdjust: De,
        camelize: be,
        children: B,
        clamp: tt,
        closest: oi,
        createEvent: Ht,
        css: c,
        data: X,
        dimensions: w,
        each: Nt,
        empty: ts,
        endsWith: te,
        escape: Gi,
        fastdom: K,
        filter: Ce,
        find: Yi,
        findAll: Pe,
        findIndex: bt,
        flipPosition: fi,
        fragment: Wt,
        getCoveringElement: ls,
        getEventPos: _t,
        getIndex: ot,
        getTargetedElement: Vi,
        hasAttr: Et,
        hasClass: y,
        hasOwn: pt,
        hasTouch: ae,
        height: it,
        html: Lt,
        hyphenate: Mt,
        inBrowser: re,
        includes: m,
        index: Tt,
        intersectRect: Li,
        isArray: Q,
        isBoolean: ie,
        isDocument: xe,
        isElement: $e,
        isEmpty: ti,
        isEqual: ei,
        isFocusable: ni,
        isFunction: et,
        isInView: Ar,
        isInput: Ui,
        isNode: Qe,
        isNumber: ye,
        isNumeric: vt,
        isObject: Ct,
        isPlainObject: xt,
        isRtl: V,
        isSameSiteAnchor: ne,
        isString: N,
        isTag: R,
        isTouch: yt,
        isUndefined: G,
        isVideo: an,
        isVisible: q,
        isVoidElement: qi,
        isWindow: ee,
        last: Bt,
        matches: T,
        memoize: rt,
        mute: rn,
        noop: A,
        observeIntersection: tn,
        observeMutation: en,
        observeResize: Be,
        observeViewportResize: os,
        off: Pt,
        offset: I,
        offsetPosition: Rt,
        offsetViewport: lt,
        on: b,
        once: H,
        overflowParents: Ut,
        parent: P,
        parents: Ee,
        pause: on,
        pick: Hi,
        play: nn,
        pointInRect: ii,
        pointerCancel: gi,
        pointerDown: ft,
        pointerEnter: he,
        pointerLeave: Me,
        pointerMove: pi,
        pointerUp: Dt,
        position: is,
        positionAt: fn,
        prepend: wr,
        propName: ri,
        query: J,
        queryAll: Te,
        ready: vr,
        remove: at,
        removeAttr: ke,
        removeClass: D,
        removeClasses: Ri,
        replaceClass: si,
        scrollIntoView: un,
        scrollParent: Ot,
        scrollParents: qt,
        scrolledOver: wi,
        selFocusable: Ie,
        selInput: Se,
        sortBy: Fs,
        startsWith: dt,
        sumBy: zt,
        swap: Fi,
        toArray: It,
        toBoolean: zi,
        toEventTargets: Ji,
        toFloat: S,
        toNode: F,
        toNodes: E,
        toNumber: $t,
        toPx: U,
        toWindow: se,
        toggleClass: j,
        trigger: g,
        ucfirst: St,
        uniqueBy: Hs,
        unwrap: Ae,
        width: di,
        within: Ws,
        wrapAll: ui,
        wrapInner: es
    }), st = {
        connected () {
            $(this.$el, this.$options.id);
        }
    };
    const Fr = [
        "days",
        "hours",
        "minutes",
        "seconds"
    ];
    var Hr = {
        mixins: [
            st
        ],
        props: {
            date: String,
            clsWrapper: String,
            role: String
        },
        data: {
            date: "",
            clsWrapper: ".uk-countdown-%unit%",
            role: "timer"
        },
        connected () {
            p(this.$el, "role", this.role), this.date = S(Date.parse(this.$props.date)), this.end = !1, this.start();
        },
        disconnected () {
            this.stop();
        },
        events: {
            name: "visibilitychange",
            el: ()=>document,
            handler () {
                document.hidden ? this.stop() : this.start();
            }
        },
        methods: {
            start () {
                this.stop(), this.update(), this.timer || (g(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1e3));
            },
            stop () {
                this.timer && (clearInterval(this.timer), g(this.$el, "countdownstop"), this.timer = null);
            },
            update () {
                const t = Lr(this.date);
                t.total || (this.stop(), this.end || (g(this.$el, "countdownend"), this.end = !0));
                for (const e of Fr){
                    const i = k(this.clsWrapper.replace("%unit%", e), this.$el);
                    if (!i) continue;
                    let s = String(Math.trunc(t[e]));
                    s = s.length < 2 ? `0${s}` : s, i.textContent !== s && (s = s.split(""), s.length !== i.children.length && Lt(i, s.map(()=>"<span></span>").join("")), s.forEach((n, o)=>i.children[o].textContent = n));
                }
            }
        }
    };
    function Lr(t) {
        const e = Math.max(0, t - Date.now()) / 1e3;
        return {
            total: e,
            seconds: e % 60,
            minutes: e / 60 % 60,
            hours: e / 60 / 60 % 24,
            days: e / 60 / 60 / 24
        };
    }
    const Y = {};
    Y.events = Y.watch = Y.observe = Y.created = Y.beforeConnect = Y.connected = Y.beforeDisconnect = Y.disconnected = Y.destroy = ds, Y.args = function(t, e) {
        return e !== !1 && ds(e || t);
    }, Y.update = function(t, e) {
        return Fs(ds(t, et(e) ? {
            read: e
        } : e), "order");
    }, Y.props = function(t, e) {
        if (Q(e)) {
            const i = {};
            for (const s of e)i[s] = String;
            e = i;
        }
        return Y.methods(t, e);
    }, Y.computed = Y.methods = function(t, e) {
        return e ? t ? {
            ...t,
            ...e
        } : e : t;
    }, Y.i18n = Y.data = function(t, e, i) {
        return i ? $n(t, e, i) : e ? t ? function(s) {
            return $n(t, e, s);
        } : e : t;
    };
    function $n(t, e, i) {
        return Y.computed(et(t) ? t.call(i, i) : t, et(e) ? e.call(i, i) : e);
    }
    function ds(t, e) {
        return t = t && !Q(t) ? [
            t
        ] : t, e ? t ? t.concat(e) : Q(e) ? e : [
            e
        ] : t;
    }
    function Wr(t, e) {
        return G(e) ? t : e;
    }
    function Ne(t, e, i) {
        const s = {};
        if (et(e) && (e = e.options), e.extends && (t = Ne(t, e.extends, i)), e.mixins) for (const o of e.mixins)t = Ne(t, o, i);
        for(const o in t)n(o);
        for(const o in e)pt(t, o) || n(o);
        function n(o) {
            s[o] = (Y[o] || Wr)(t[o], e[o], i);
        }
        return s;
    }
    function ce(t, e = []) {
        try {
            return t ? dt(t, "{") ? JSON.parse(t) : e.length && !m(t, ":") ? {
                [e[0]]: t
            } : t.split(";").reduce((i, s)=>{
                const [n, o] = s.split(/:(.*)/);
                return n && !G(o) && (i[n.trim()] = o.trim()), i;
            }, {}) : {};
        } catch  {
            return {};
        }
    }
    function fs(t, e) {
        return t === Boolean ? zi(e) : t === Number ? $t(e) : t === "list" ? Rr(e) : t === Object && N(e) ? ce(e) : t ? t(e) : e;
    }
    const jr = /,(?![^(]*\))/;
    function Rr(t) {
        return Q(t) ? t : N(t) ? t.split(jr).map((e)=>vt(e) ? $t(e) : zi(e.trim())) : [
            t
        ];
    }
    function qr(t) {
        t._data = {}, t._updates = [
            ...t.$options.update || []
        ];
    }
    function Ur(t, e) {
        t._updates.unshift(e);
    }
    function Vr(t) {
        delete t._data;
    }
    function ze(t, e = "update") {
        t._connected && t._updates.length && (t._queued || (t._queued = new Set, K.read(()=>{
            t._connected && Yr(t, t._queued), delete t._queued;
        })), t._queued.add(e.type || e));
    }
    function Yr(t, e) {
        for (const { read: i, write: s, events: n = [] } of t._updates){
            if (!e.has("update") && !n.some((r)=>e.has(r))) continue;
            let o;
            i && (o = i.call(t, t._data, e), o && xt(o) && gt(t._data, o)), s && o !== !1 && K.write(()=>{
                t._connected && s.call(t, t._data, e);
            });
        }
    }
    function ct(t) {
        return We(Be, t, "resize");
    }
    function Fe(t) {
        return We(tn, t);
    }
    function ps(t) {
        return We(en, t);
    }
    function He(t = {}) {
        return Fe({
            handler: function(e, i) {
                const { targets: s = this.$el, preload: n = 5 } = t;
                for (const o of E(et(s) ? s(this) : s))z('[loading="lazy"]', o).slice(0, n - 1).forEach((r)=>ke(r, "loading"));
                for (const o of e.filter(({ isIntersecting: r })=>r).map(({ target: r })=>r))i.unobserve(o);
            },
            ...t
        });
    }
    function gs(t) {
        return We((e, i)=>os(i), t, "resize");
    }
    function Le(t) {
        return We((e, i)=>({
                disconnect: b(Xr(e), "scroll", i, {
                    passive: !0
                })
            }), t, "scroll");
    }
    function yn(t) {
        return {
            observe (e, i) {
                return {
                    observe: A,
                    unobserve: A,
                    disconnect: b(e, ft, i, {
                        passive: !0
                    })
                };
            },
            handler (e) {
                if (!yt(e)) return;
                const i = _t(e), s = "tagName" in e.target ? e.target : P(e.target);
                H(document, `${Dt} ${gi} scroll`, (n)=>{
                    const { x: o, y: r } = _t(n);
                    (n.type !== "scroll" && s && o && Math.abs(i.x - o) > 100 || r && Math.abs(i.y - r) > 100) && setTimeout(()=>{
                        g(s, "swipe"), g(s, `swipe${Gr(i.x, i.y, o, r)}`);
                    });
                });
            },
            ...t
        };
    }
    function We(t, e, i) {
        return {
            observe: t,
            handler () {
                ze(this, i);
            },
            ...e
        };
    }
    function Gr(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
    }
    function Xr(t) {
        return E(t).map((e)=>{
            const { ownerDocument: i } = e, s = Ot(e, !0);
            return s === i.scrollingElement ? i : s;
        });
    }
    var kn = {
        props: {
            margin: String,
            firstColumn: Boolean
        },
        data: {
            margin: "uk-margin-small-top",
            firstColumn: "uk-first-column"
        },
        observe: [
            ps({
                options: {
                    childList: !0,
                    attributes: !0,
                    attributeFilter: [
                        "style"
                    ]
                }
            }),
            ct({
                target: ({ $el: t })=>[
                        t,
                        ...B(t)
                    ]
            })
        ],
        update: {
            read () {
                return {
                    rows: ms(It(this.$el.children))
                };
            },
            write ({ rows: t }) {
                for (const e of t)for (const i of e)j(i, this.margin, t[0] !== e), j(i, this.firstColumn, e[V ? e.length - 1 : 0] === i);
            },
            events: [
                "resize"
            ]
        }
    };
    function ms(t) {
        const e = [
            []
        ], i = t.some((s, n)=>n && t[n - 1].offsetParent !== s.offsetParent);
        for (const s of t){
            if (!q(s)) continue;
            const n = vs(s, i);
            for(let o = e.length - 1; o >= 0; o--){
                const r = e[o];
                if (!r[0]) {
                    r.push(s);
                    break;
                }
                const a = vs(r[0], i);
                if (n.top >= a.bottom - 1 && n.top !== a.top) {
                    e.push([
                        s
                    ]);
                    break;
                }
                if (n.bottom - 1 > a.top || n.top === a.top) {
                    let l = r.length - 1;
                    for(; l >= 0; l--){
                        const h = vs(r[l], i);
                        if (n.left >= h.left) break;
                    }
                    r.splice(l + 1, 0, s);
                    break;
                }
                if (o === 0) {
                    e.unshift([
                        s
                    ]);
                    break;
                }
            }
        }
        return e;
    }
    function vs(t, e = !1) {
        let { offsetTop: i, offsetLeft: s, offsetHeight: n, offsetWidth: o } = t;
        return e && ([i, s] = Rt(t)), {
            top: i,
            left: s,
            bottom: i + n,
            right: s + o
        };
    }
    const ws = "uk-transition-leave", bs = "uk-transition-enter";
    function Sn(t, e, i, s = 0) {
        const n = xi(e, !0), o = {
            opacity: 1
        }, r = {
            opacity: 0
        }, a = (u)=>()=>n === xi(e) ? u() : Promise.reject(), l = a(async ()=>{
            $(e, ws), await Promise.all(Cn(e).map((u, d)=>new Promise((f)=>setTimeout(()=>O.start(u, r, i / 2, "ease").then(f), d * s)))), D(e, ws);
        }), h = a(async ()=>{
            const u = it(e);
            $(e, bs), t(), c(B(e), {
                opacity: 0
            }), await Jr();
            const d = B(e), f = it(e);
            c(e, "alignContent", "flex-start"), it(e, u);
            const v = Cn(e);
            c(d, r);
            const x = v.map(async (C, M)=>{
                await Kr(M * s), await O.start(C, o, i / 2, "ease");
            });
            u !== f && x.push(O.start(e, {
                height: f
            }, i / 2 + v.length * s, "ease")), await Promise.all(x).then(()=>{
                D(e, bs), n === xi(e) && (c(e, {
                    height: "",
                    alignContent: ""
                }), c(d, {
                    opacity: ""
                }), delete e.dataset.transition);
            });
        });
        return y(e, ws) ? In(e).then(h) : y(e, bs) ? In(e).then(l).then(h) : l().then(h);
    }
    function xi(t, e) {
        return e && (t.dataset.transition = 1 + xi(t)), $t(t.dataset.transition) || 0;
    }
    function In(t) {
        return Promise.all(B(t).filter(O.inProgress).map((e)=>new Promise((i)=>H(e, "transitionend transitioncanceled", i))));
    }
    function Cn(t) {
        return ms(B(t)).flat().filter((e)=>q(e));
    }
    function Jr() {
        return new Promise((t)=>requestAnimationFrame(t));
    }
    function Kr(t) {
        return new Promise((e)=>setTimeout(e, t));
    }
    async function Zr(t, e, i) {
        await Pn();
        let s = B(e);
        const n = s.map((f)=>En(f, !0)), o = {
            ...c(e, [
                "height",
                "padding"
            ]),
            display: "block"
        };
        await Promise.all(s.concat(e).map(O.cancel)), t(), s = s.concat(B(e).filter((f)=>!m(s, f))), await Promise.resolve(), K.flush();
        const r = p(e, "style"), a = c(e, [
            "height",
            "padding"
        ]), [l, h] = Qr(e, s, n), u = s.map((f)=>({
                style: p(f, "style")
            }));
        s.forEach((f, v)=>h[v] && c(f, h[v])), c(e, o), g(e, "scroll"), K.flush(), await Pn();
        const d = s.map((f, v)=>P(f) === e && O.start(f, l[v], i, "ease")).concat(O.start(e, a, i, "ease"));
        try {
            await Promise.all(d), s.forEach((f, v)=>{
                p(f, u[v]), P(f) === e && c(f, "display", l[v].opacity === 0 ? "none" : "");
            }), p(e, "style", r);
        } catch  {
            p(s, "style", ""), ta(e, o);
        }
    }
    function En(t, e) {
        const i = c(t, "zIndex");
        return q(t) ? {
            display: "",
            opacity: e ? c(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: i === "auto" ? Tt(t) : i,
            ...Tn(t)
        } : !1;
    }
    function Qr(t, e, i) {
        const s = e.map((o, r)=>P(o) && r in i ? i[r] ? q(o) ? Tn(o) : {
                opacity: 0
            } : {
                opacity: q(o) ? 1 : 0
            } : !1), n = s.map((o, r)=>{
            const a = P(e[r]) === t && (i[r] || En(e[r]));
            if (!a) return !1;
            if (!o) delete a.opacity;
            else if (!("opacity" in o)) {
                const { opacity: l } = a;
                l % 1 ? o.opacity = 1 : delete a.opacity;
            }
            return a;
        });
        return [
            s,
            n
        ];
    }
    function ta(t, e) {
        for(const i in e)c(t, i, "");
    }
    function Tn(t) {
        const { height: e, width: i } = I(t);
        return {
            height: e,
            width: i,
            transform: "",
            ...is(t),
            ...c(t, [
                "marginTop",
                "marginLeft"
            ])
        };
    }
    function Pn() {
        return new Promise((t)=>requestAnimationFrame(t));
    }
    var _n = {
        props: {
            duration: Number,
            animation: Boolean
        },
        data: {
            duration: 150,
            animation: "slide"
        },
        methods: {
            animate (t, e = this.$el) {
                const i = this.animation;
                return (i === "fade" ? Sn : i === "delayed-fade" ? (...n)=>Sn(...n, 40) : i ? Zr : ()=>(t(), Promise.resolve()))(t, e, this.duration).catch(A);
            }
        }
    };
    const _ = {
        TAB: 9,
        ESC: 27,
        SPACE: 32,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    var ea = {
        mixins: [
            _n
        ],
        args: "target",
        props: {
            target: String,
            selActive: Boolean
        },
        data: {
            target: "",
            selActive: !1,
            attrItem: "uk-filter-control",
            cls: "uk-active",
            duration: 250
        },
        computed: {
            children: ({ target: t }, e)=>z(`${t} > *`, e),
            toggles: ({ attrItem: t }, e)=>z(`[${t}],[data-${t}]`, e)
        },
        watch: {
            toggles (t) {
                this.updateState();
                const e = z(this.selActive, this.$el);
                for (const i of t){
                    this.selActive !== !1 && j(i, this.cls, m(e, i));
                    const s = aa(i);
                    R(s, "a") && p(s, "role", "button");
                }
            },
            children (t, e) {
                e && this.updateState();
            }
        },
        events: {
            name: "click keydown",
            delegate () {
                return `[${this.attrItem}],[data-${this.attrItem}]`;
            },
            handler (t) {
                t.type === "keydown" && t.keyCode !== _.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current));
            }
        },
        methods: {
            apply (t) {
                const e = this.getState(), i = Dn(t, this.attrItem, this.getState());
                ia(e, i) || this.setState(i);
            },
            getState () {
                return this.toggles.filter((t)=>y(t, this.cls)).reduce((t, e)=>Dn(e, this.attrItem, t), {
                    filter: {
                        "": ""
                    },
                    sort: []
                });
            },
            async setState (t, e = !0) {
                t = {
                    filter: {
                        "": ""
                    },
                    sort: [],
                    ...t
                }, g(this.$el, "beforeFilter", [
                    this,
                    t
                ]);
                for (const i of this.toggles)j(i, this.cls, na(i, this.attrItem, t));
                await Promise.all(z(this.target, this.$el).map((i)=>{
                    const s = ()=>{
                        sa(t, i, B(i)), this.$update(this.$el);
                    };
                    return e ? this.animate(s, i) : s();
                })), g(this.$el, "afterFilter", [
                    this
                ]);
            },
            updateState () {
                K.write(()=>this.setState(this.getState(), !1));
            }
        }
    };
    function An(t, e) {
        return ce(X(t, e), [
            "filter"
        ]);
    }
    function ia(t, e) {
        return [
            "filter",
            "sort"
        ].every((i)=>ei(t[i], e[i]));
    }
    function sa(t, e, i) {
        const s = oa(t);
        i.forEach((r)=>c(r, "display", s && !T(r, s) ? "none" : ""));
        const [n, o] = t.sort;
        if (n) {
            const r = ra(i, n, o);
            ei(r, i) || L(e, r);
        }
    }
    function Dn(t, e, i) {
        const { filter: s, group: n, sort: o, order: r = "asc" } = An(t, e);
        return (s || G(o)) && (n ? s ? (delete i.filter[""], i.filter[n] = s) : (delete i.filter[n], (ti(i.filter) || "" in i.filter) && (i.filter = {
            "": s || ""
        })) : i.filter = {
            "": s || ""
        }), G(o) || (i.sort = [
            o,
            r
        ]), i;
    }
    function na(t, e, { filter: i = {
        "": ""
    }, sort: [s, n] }) {
        const { filter: o = "", group: r = "", sort: a, order: l = "asc" } = An(t, e);
        return G(a) ? r in i && o === i[r] || !o && r && !(r in i) && !i[""] : s === a && n === l;
    }
    function oa({ filter: t }) {
        let e = "";
        return Nt(t, (i)=>e += i || ""), e;
    }
    function ra(t, e, i) {
        return [
            ...t
        ].sort((s, n)=>X(s, e).localeCompare(X(n, e), void 0, {
                numeric: !0
            }) * (i === "asc" || -1));
    }
    function aa(t) {
        return k("a,button", t) || t;
    }
    let xs;
    function On(t) {
        const e = b(t, "touchstart", (s)=>{
            if (s.targetTouches.length !== 1 || T(s.target, 'input[type="range"')) return;
            let n = _t(s).y;
            const o = b(t, "touchmove", (r)=>{
                const a = _t(r).y;
                a !== n && (n = a, qt(r.target).some((l)=>{
                    if (!t.contains(l)) return !1;
                    let { scrollHeight: h, clientHeight: u } = l;
                    return u < h;
                }) || r.preventDefault());
            }, {
                passive: !1
            });
            H(t, "scroll touchend touchcanel", o, {
                capture: !0
            });
        });
        if (xs) return e;
        xs = !0;
        const { scrollingElement: i } = document;
        return c(i, {
            overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
            touchAction: "none",
            paddingRight: di(window) - i.clientWidth || ""
        }), ()=>{
            xs = !1, e(), c(i, {
                overflowY: "",
                touchAction: "",
                paddingRight: ""
            });
        };
    }
    var je = {
        props: {
            container: Boolean
        },
        data: {
            container: !0
        },
        computed: {
            container ({ container: t }) {
                return t === !0 && this.$container || t && k(t);
            }
        }
    }, Vt = {
        props: {
            cls: Boolean,
            animation: "list",
            duration: Number,
            velocity: Number,
            origin: String,
            transition: String
        },
        data: {
            cls: !1,
            animation: [
                !1
            ],
            duration: 200,
            velocity: .2,
            origin: !1,
            transition: "ease",
            clsEnter: "uk-togglable-enter",
            clsLeave: "uk-togglable-leave"
        },
        computed: {
            hasAnimation: ({ animation: t })=>!!t[0],
            hasTransition: ({ animation: t })=>[
                    "slide",
                    "reveal"
                ].some((e)=>dt(t[0], e))
        },
        methods: {
            async toggleElement (t, e, i) {
                try {
                    return await Promise.all(E(t).map((s)=>{
                        const n = ie(e) ? e : !this.isToggled(s);
                        if (!g(s, `before${n ? "show" : "hide"}`, [
                            this
                        ])) return Promise.reject();
                        const o = (et(i) ? i : i === !1 || !this.hasAnimation ? la : this.hasTransition ? ha : ca)(s, n, this), r = n ? this.clsEnter : this.clsLeave;
                        $(s, r), g(s, n ? "show" : "hide", [
                            this
                        ]);
                        const a = ()=>{
                            D(s, r), g(s, n ? "shown" : "hidden", [
                                this
                            ]);
                        };
                        return o ? o.then(a, ()=>(D(s, r), Promise.reject())) : a();
                    })), !0;
                } catch  {
                    return !1;
                }
            },
            isToggled (t = this.$el) {
                return t = F(t), y(t, this.clsEnter) ? !0 : y(t, this.clsLeave) ? !1 : this.cls ? y(t, this.cls.split(" ")[0]) : q(t);
            },
            _toggle (t, e) {
                if (!t) return;
                e = !!e;
                let i;
                this.cls ? (i = m(this.cls, " ") || e !== y(t, this.cls), i && j(t, this.cls, m(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), z("[autofocus]", t).some((s)=>q(s) ? s.focus() || !0 : s.blur()), i && g(t, "toggled", [
                    e,
                    this
                ]);
            }
        }
    };
    function la(t, e, { _toggle: i }) {
        return At.cancel(t), O.cancel(t), i(t, e);
    }
    async function ha(t, e, { animation: i, duration: s, velocity: n, transition: o, _toggle: r }) {
        var a;
        const [l = "reveal", h = "top"] = ((a = i[0]) == null ? void 0 : a.split("-")) || [], u = [
            [
                "left",
                "right"
            ],
            [
                "top",
                "bottom"
            ]
        ], d = u[m(u[0], h) ? 0 : 1], f = d[1] === h, x = [
            "width",
            "height"
        ][u.indexOf(d)], C = `margin-${d[0]}`, M = `margin-${h}`;
        let wt = w(t)[x];
        const Ze = O.inProgress(t);
        await O.cancel(t), e && r(t, !0);
        const Mi = Object.fromEntries([
            "padding",
            "border",
            "width",
            "height",
            "minWidth",
            "minHeight",
            "overflowY",
            "overflowX",
            C,
            M
        ].map((Zo)=>[
                Zo,
                t.style[Zo]
            ])), mt = w(t), me = S(c(t, C)), Xo = S(c(t, M)), Qt = mt[x] + Xo;
        !Ze && !e && (wt += Xo);
        const [Bi] = es(t, "<div>");
        c(Bi, {
            boxSizing: "border-box",
            height: mt.height,
            width: mt.width,
            ...c(t, [
                "overflow",
                "padding",
                "borderTop",
                "borderRight",
                "borderBottom",
                "borderLeft",
                "borderImage",
                M
            ])
        }), c(t, {
            padding: 0,
            border: 0,
            minWidth: 0,
            minHeight: 0,
            [M]: 0,
            width: mt.width,
            height: mt.height,
            overflow: "hidden",
            [x]: wt
        });
        const Jo = wt / Qt;
        s = (n * Qt + s) * (e ? 1 - Jo : Jo);
        const Ko = {
            [x]: e ? Qt : 0
        };
        f && (c(t, C, Qt - wt + me), Ko[C] = e ? me : Qt + me), !f ^ l === "reveal" && (c(Bi, C, -Qt + wt), O.start(Bi, {
            [C]: e ? 0 : -Qt
        }, s, o));
        try {
            await O.start(t, Ko, s, o);
        } finally{
            c(t, Mi), Ae(Bi.firstChild), e || r(t, !1);
        }
    }
    function ca(t, e, i) {
        const { animation: s, duration: n, _toggle: o } = i;
        return e ? (o(t, !0), At.in(t, s[0], n, i.origin)) : At.out(t, s[1] || s[0], n, i.origin).then(()=>o(t, !1));
    }
    const nt = [];
    var $s = {
        mixins: [
            st,
            je,
            Vt
        ],
        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean,
            role: String
        },
        data: {
            cls: "uk-open",
            escClose: !0,
            bgClose: !0,
            overlay: !0,
            stack: !1,
            role: "dialog"
        },
        computed: {
            panel: ({ selPanel: t }, e)=>k(t, e),
            transitionElement () {
                return this.panel;
            },
            bgClose ({ bgClose: t }) {
                return t && this.panel;
            }
        },
        connected () {
            p(this.panel || this.$el, "role", this.role), this.overlay && p(this.panel || this.$el, "aria-modal", !0);
        },
        beforeDisconnect () {
            m(nt, this) && this.toggleElement(this.$el, !1, !1);
        },
        events: [
            {
                name: "click",
                delegate () {
                    return `${this.selClose},a[href*="#"]`;
                },
                handler (t) {
                    const { current: e, defaultPrevented: i } = t, { hash: s } = e;
                    !i && s && ne(e) && !this.$el.contains(k(s)) ? this.hide() : T(e, this.selClose) && (t.preventDefault(), this.hide());
                }
            },
            {
                name: "toggle",
                self: !0,
                handler (t) {
                    t.defaultPrevented || (t.preventDefault(), this.isToggled() === m(nt, this) && this.toggle());
                }
            },
            {
                name: "beforeshow",
                self: !0,
                handler (t) {
                    if (m(nt, this)) return !1;
                    !this.stack && nt.length ? (Promise.all(nt.map((e)=>e.hide())).then(this.show), t.preventDefault()) : nt.push(this);
                }
            },
            {
                name: "show",
                self: !0,
                handler () {
                    this.stack && c(this.$el, "zIndex", S(c(this.$el, "zIndex")) + nt.length);
                    const t = [
                        this.overlay && da(this),
                        this.overlay && On(this.$el),
                        this.bgClose && fa(this),
                        this.escClose && pa(this)
                    ];
                    H(this.$el, "hidden", ()=>t.forEach((e)=>e && e()), {
                        self: !0
                    }), $(document.documentElement, this.clsPage);
                }
            },
            {
                name: "shown",
                self: !0,
                handler () {
                    ni(this.$el) || p(this.$el, "tabindex", "-1"), T(this.$el, ":focus-within") || this.$el.focus();
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    m(nt, this) && nt.splice(nt.indexOf(this), 1), c(this.$el, "zIndex", ""), nt.some((t)=>t.clsPage === this.clsPage) || D(document.documentElement, this.clsPage);
                }
            }
        ],
        methods: {
            toggle () {
                return this.isToggled() ? this.hide() : this.show();
            },
            show () {
                return this.container && P(this.$el) !== this.container ? (L(this.container, this.$el), new Promise((t)=>requestAnimationFrame(()=>this.show().then(t)))) : this.toggleElement(this.$el, !0, Mn);
            },
            hide () {
                return this.toggleElement(this.$el, !1, Mn);
            }
        }
    };
    function Mn(t, e, { transitionElement: i, _toggle: s }) {
        return new Promise((n, o)=>H(t, "show hide", ()=>{
                var r;
                (r = t._reject) == null || r.call(t), t._reject = o, s(t, e);
                const a = H(i, "transitionstart", ()=>{
                    H(i, "transitionend transitioncancel", n, {
                        self: !0
                    }), clearTimeout(l);
                }, {
                    self: !0
                }), l = setTimeout(()=>{
                    a(), n();
                }, ua(c(i, "transitionDuration")));
            })).then(()=>delete t._reject);
    }
    function ua(t) {
        return t ? te(t, "ms") ? S(t) : S(t) * 1e3 : 0;
    }
    function da(t) {
        return b(document, "focusin", (e)=>{
            Bt(nt) === t && !t.$el.contains(e.target) && t.$el.focus();
        });
    }
    function fa(t) {
        return b(document, ft, ({ target: e })=>{
            Bt(nt) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || H(document, `${Dt} ${gi} scroll`, ({ defaultPrevented: i, type: s, target: n })=>{
                !i && s === Dt && e === n && t.hide();
            }, !0);
        });
    }
    function pa(t) {
        return b(document, "keydown", (e)=>{
            e.keyCode === 27 && Bt(nt) === t && t.hide();
        });
    }
    var ys = {
        slide: {
            show (t) {
                return [
                    {
                        transform: W(t * -100)
                    },
                    {
                        transform: W()
                    }
                ];
            },
            percent (t) {
                return Re(t);
            },
            translate (t, e) {
                return [
                    {
                        transform: W(e * -100 * t)
                    },
                    {
                        transform: W(e * 100 * (1 - t))
                    }
                ];
            }
        }
    };
    function Re(t) {
        return Math.abs(c(t, "transform").split(",")[4] / t.offsetWidth);
    }
    function W(t = 0, e = "%") {
        return t += t ? e : "", `translate3d(${t}, 0, 0)`;
    }
    function ue(t) {
        return `scale3d(${t}, ${t}, 1)`;
    }
    function ga(t, e, i, { animation: s, easing: n }) {
        const { percent: o, translate: r, show: a = A } = s, l = a(i);
        let h;
        return {
            dir: i,
            show (u, d = 0, f) {
                const v = f ? "linear" : n;
                return u -= Math.round(u * tt(d, -1, 1)), this.translate(d), $i(e, "itemin", {
                    percent: d,
                    duration: u,
                    timing: v,
                    dir: i
                }), $i(t, "itemout", {
                    percent: 1 - d,
                    duration: u,
                    timing: v,
                    dir: i
                }), new Promise((x)=>{
                    h || (h = x), Promise.all([
                        O.start(e, l[1], u, v),
                        O.start(t, l[0], u, v)
                    ]).then(()=>{
                        this.reset(), h();
                    }, A);
                });
            },
            cancel () {
                return O.cancel([
                    e,
                    t
                ]);
            },
            reset () {
                for(const u in l[0])c([
                    e,
                    t
                ], u, "");
            },
            async forward (u, d = this.percent()) {
                return await this.cancel(), this.show(u, d, !0);
            },
            translate (u) {
                this.reset();
                const d = r(u, i);
                c(e, d[1]), c(t, d[0]), $i(e, "itemtranslatein", {
                    percent: u,
                    dir: i
                }), $i(t, "itemtranslateout", {
                    percent: 1 - u,
                    dir: i
                });
            },
            percent () {
                return o(t || e, e, i);
            },
            getDistance () {
                return t == null ? void 0 : t.offsetWidth;
            }
        };
    }
    function $i(t, e, i) {
        g(t, Ht(e, !1, !1, i));
    }
    var yi = {
        props: {
            i18n: Object
        },
        data: {
            i18n: null
        },
        methods: {
            t (t, ...e) {
                var i, s, n;
                let o = 0;
                return ((n = ((i = this.i18n) == null ? void 0 : i[t]) || ((s = this.$options.i18n) == null ? void 0 : s[t])) == null ? void 0 : n.replace(/%s/g, ()=>e[o++] || "")) || "";
            }
        }
    }, ma = {
        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },
        data: {
            autoplay: !1,
            autoplayInterval: 7e3,
            pauseOnHover: !0
        },
        connected () {
            p(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
        },
        disconnected () {
            this.stopAutoplay();
        },
        update () {
            p(this.slides, "tabindex", "-1");
        },
        events: [
            {
                name: "visibilitychange",
                el: ()=>document,
                filter () {
                    return this.autoplay;
                },
                handler () {
                    document.hidden ? this.stopAutoplay() : this.startAutoplay();
                }
            }
        ],
        methods: {
            startAutoplay () {
                this.stopAutoplay(), this.interval = setInterval(()=>{
                    this.stack.length || this.draggable && T(this.$el, ":focus-within") && !T(this.$el, ":focus") || this.pauseOnHover && T(this.$el, ":hover") || this.show("next");
                }, this.autoplayInterval);
            },
            stopAutoplay () {
                clearInterval(this.interval);
            }
        }
    };
    const qe = {
        passive: !1,
        capture: !0
    }, Bn = {
        passive: !0,
        capture: !0
    }, va = "touchstart mousedown", ks = "touchmove mousemove", Nn = "touchend touchcancel mouseup click input scroll", zn = (t)=>t.preventDefault();
    var wa = {
        props: {
            draggable: Boolean
        },
        data: {
            draggable: !0,
            threshold: 10
        },
        created () {
            for (const t of [
                "start",
                "move",
                "end"
            ]){
                const e = this[t];
                this[t] = (i)=>{
                    const s = _t(i).x * (V ? -1 : 1);
                    this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i);
                };
            }
        },
        events: [
            {
                name: va,
                passive: !0,
                delegate () {
                    return `${this.selList} > *`;
                },
                handler (t) {
                    !this.draggable || this.parallax || !yt(t) && ba(t.target) || t.target.closest(Se) || t.button > 0 || this.length < 2 || this.start(t);
                }
            },
            {
                name: "dragstart",
                handler (t) {
                    t.preventDefault();
                }
            },
            {
                name: ks,
                el () {
                    return this.list;
                },
                handler: A,
                ...qe
            }
        ],
        methods: {
            start () {
                this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, b(document, ks, this.move, qe), b(document, Nn, this.end, Bn), c(this.list, "userSelect", "none");
            },
            move (t) {
                const e = this.pos - this.drag;
                if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold) return;
                this.dragging || b(this.list, "click", zn, qe), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
                let { slides: i, prevIndex: s } = this, n = Math.abs(e), o = this.getIndex(s + this.dir), r = Fn.call(this, s, o);
                for(; o !== s && n > r;)this.drag -= r * this.dir, s = o, n -= r, o = this.getIndex(s + this.dir), r = Fn.call(this, s, o);
                this.percent = n / r;
                const a = i[s], l = i[o], h = this.index !== o, u = s === o;
                let d;
                for (const f of [
                    this.index,
                    this.prevIndex
                ])m([
                    o,
                    s
                ], f) || (g(i[f], "itemhidden", [
                    this
                ]), u && (d = !0, this.prevIndex = s));
                (this.index === s && this.prevIndex !== s || d) && g(i[this.index], "itemshown", [
                    this
                ]), h && (this.prevIndex = s, this.index = o, u || (g(a, "beforeitemhide", [
                    this
                ]), g(a, "itemhide", [
                    this
                ])), g(l, "beforeitemshow", [
                    this
                ]), g(l, "itemshow", [
                    this
                ])), this._transitioner = this._translate(Math.abs(this.percent), a, !u && l);
            },
            end () {
                if (Pt(document, ks, this.move, qe), Pt(document, Nn, this.end, Bn), this.dragging) {
                    if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                    else {
                        const t = (V ? this.dir * (V ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                        this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0);
                    }
                }
                setTimeout(()=>Pt(this.list, "click", zn, qe)), c(this.list, {
                    userSelect: ""
                }), this.drag = this.percent = null;
            }
        }
    };
    function Fn(t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
    }
    function ba(t) {
        return c(t, "userSelect") !== "none" && It(t.childNodes).some((e)=>e.nodeType === 3 && e.textContent.trim());
    }
    function xa(t) {
        t._watches = [];
        for (const e of t.$options.watch || [])for (const [i, s] of Object.entries(e))Hn(t, s, i);
        t._initial = !0;
    }
    function Hn(t, e, i) {
        t._watches.push({
            name: i,
            ...xt(e) ? e : {
                handler: e
            }
        });
    }
    function $a(t, e) {
        for (const { name: i, handler: s, immediate: n = !0 } of t._watches)(t._initial && n || pt(e, i) && !ei(e[i], t[i])) && s.call(t, t[i], e[i]);
        t._initial = !1;
    }
    function ya(t) {
        const { computed: e } = t.$options;
        if (t._computed = {}, e) for(const i in e)Ln(t, i, e[i]);
    }
    function Ln(t, e, i) {
        t._hasComputed = !0, Object.defineProperty(t, e, {
            enumerable: !0,
            get () {
                const { _computed: s, $props: n, $el: o } = t;
                return pt(s, e) || (s[e] = (i.get || i).call(t, n, o)), s[e];
            },
            set (s) {
                const { _computed: n } = t;
                n[e] = i.set ? i.set.call(t, s) : s, G(n[e]) && delete n[e];
            }
        });
    }
    function ka(t) {
        t._hasComputed && (Ur(t, {
            read: ()=>$a(t, Wn(t)),
            events: [
                "resize",
                "computed"
            ]
        }), Ia(), Ue.add(t));
    }
    function Sa(t) {
        Ue == null || Ue.delete(t), Wn(t);
    }
    function Wn(t) {
        const e = {
            ...t._computed
        };
        return t._computed = {}, e;
    }
    let Ss, Ue;
    function Ia() {
        Ss || (Ue = new Set, Ss = new MutationObserver(()=>{
            for (const t of Ue)ze(t, "computed");
        }), Ss.observe(document, {
            subtree: !0,
            childList: !0
        }));
    }
    function Ca(t) {
        t._events = [];
        for (const e of t.$options.events || [])if (pt(e, "handler")) jn(t, e);
        else for(const i in e)jn(t, e[i], i);
    }
    function Ea(t) {
        t._events.forEach((e)=>e()), delete t._events;
    }
    function jn(t, e, i) {
        let { name: s, el: n, handler: o, capture: r, passive: a, delegate: l, filter: h, self: u } = xt(e) ? e : {
            name: i,
            handler: e
        };
        n = et(n) ? n.call(t, t) : n || t.$el, !(!n || Q(n) && !n.length || h && !h.call(t)) && t._events.push(b(n, s, l ? N(l) ? l : l.call(t, t) : null, N(o) ? t[o] : o.bind(t), {
            passive: a,
            capture: r,
            self: u
        }));
    }
    function Ta(t) {
        t._observers = [];
        for (const e of t.$options.observe || [])if (pt(e, "handler")) qn(t, e);
        else for (const i of e)qn(t, i);
    }
    function Rn(t, ...e) {
        t._observers.push(...e);
    }
    function Pa(t) {
        for (const e of t._observers)e.disconnect();
    }
    function qn(t, e) {
        let { observe: i, target: s = t.$el, handler: n, options: o, filter: r, args: a } = e;
        if (r && !r.call(t, t)) return;
        const l = `_observe${t._observers.length}`;
        et(s) && !pt(t, l) && Ln(t, l, ()=>s.call(t, t)), n = N(n) ? t[n] : n.bind(t), et(o) && (o = o.call(t, t));
        const h = pt(t, l) ? t[l] : s, u = i(h, n, o, a);
        et(s) && Q(t[l]) && u.unobserve && Hn(t, {
            handler: _a(u),
            immediate: !1
        }, l), Rn(t, u);
    }
    function _a(t) {
        return (e, i)=>{
            for (const s of i)!m(e, s) && t.unobserve(s);
            for (const s of e)!m(i, s) && t.observe(s);
        };
    }
    function Aa(t) {
        const { $options: e, $props: i } = t, s = Un(e);
        gt(i, s);
        const { computed: n, methods: o } = e;
        for(let r in i)r in s && (!n || !pt(n, r)) && (!o || !pt(o, r)) && (t[r] = i[r]);
    }
    function Un(t) {
        const e = {}, { args: i = [], props: s = {}, el: n, id: o } = t;
        if (!s) return e;
        for(const a in s){
            const l = Mt(a);
            let h = X(n, l);
            G(h) || (h = s[a] === Boolean && h === "" ? !0 : fs(s[a], h), !(l === "target" && dt(h, "_")) && (e[a] = h));
        }
        const r = ce(X(n, o), i);
        for(const a in r){
            const l = be(a);
            G(s[l]) || (e[l] = fs(s[l], r[a]));
        }
        return e;
    }
    const Da = rt((t, e)=>{
        const i = Object.keys(e), s = i.concat(t).map((n)=>[
                Mt(n),
                `data-${Mt(n)}`
            ]).flat();
        return {
            attributes: i,
            filter: s
        };
    });
    function Oa(t) {
        const { $options: e, $props: i } = t, { id: s, props: n, el: o } = e;
        if (!n) return;
        const { attributes: r, filter: a } = Da(s, n), l = new MutationObserver((h)=>{
            const u = Un(e);
            h.some(({ attributeName: d })=>{
                const f = d.replace("data-", "");
                return (f === s ? r : [
                    be(f),
                    be(d)
                ]).some((v)=>!G(u[v]) && u[v] !== i[v]);
            }) && t.$reset();
        });
        l.observe(o, {
            attributes: !0,
            attributeFilter: a
        }), Rn(t, l);
    }
    function de(t, e) {
        var i;
        (i = t.$options[e]) == null || i.forEach((s)=>s.call(t));
    }
    function Is(t) {
        t._connected || (Aa(t), de(t, "beforeConnect"), t._connected = !0, Ca(t), qr(t), xa(t), Ta(t), Oa(t), ka(t), de(t, "connected"), ze(t));
    }
    function Cs(t) {
        t._connected && (de(t, "beforeDisconnect"), Ea(t), Vr(t), Pa(t), Sa(t), de(t, "disconnected"), t._connected = !1);
    }
    let Ma = 0;
    function Vn(t, e = {}) {
        e.data = za(e, t.constructor.options), t.$options = Ne(t.constructor.options, e, t), t.$props = {}, t._uid = Ma++, Ba(t), Na(t), ya(t), de(t, "created"), e.el && t.$mount(e.el);
    }
    function Ba(t) {
        const { data: e = {} } = t.$options;
        for(const i in e)t.$props[i] = t[i] = e[i];
    }
    function Na(t) {
        const { methods: e } = t.$options;
        if (e) for(const i in e)t[i] = e[i].bind(t);
    }
    function za({ data: t = {} }, { args: e = [], props: i = {} }) {
        Q(t) && (t = t.slice(0, e.length).reduce((s, n, o)=>(xt(n) ? gt(s, n) : s[e[o]] = n, s), {}));
        for(const s in t)G(t[s]) ? delete t[s] : i[s] && (t[s] = fs(i[s], t[s]));
        return t;
    }
    const ut = function(t) {
        Vn(this, t);
    };
    ut.util = zr, ut.options = {}, ut.version = "3.19.2";
    const Fa = "uk-", Yt = "__uikit__", fe = {};
    function Yn(t, e) {
        var i;
        const s = Fa + Mt(t);
        if (!e) return xt(fe[s]) && (fe[s] = ut.extend(fe[s])), fe[s];
        t = be(t), ut[t] = (o, r)=>Ve(t, o, r);
        const n = xt(e) ? {
            ...e
        } : e.options;
        return n.id = s, n.name = t, (i = n.install) == null || i.call(n, ut, n, t), ut._initialized && !n.functional && requestAnimationFrame(()=>Ve(t, `[${s}],[data-${s}]`)), fe[s] = n;
    }
    function Ve(t, e, i, ...s) {
        const n = Yn(t);
        return n.options.functional ? new n({
            data: xt(e) ? e : [
                e,
                i,
                ...s
            ]
        }) : e ? z(e).map(o)[0] : o();
        function o(r) {
            const a = ki(r, t);
            if (a) {
                if (i) a.$destroy();
                else return a;
            }
            return new n({
                el: r,
                data: i
            });
        }
    }
    function Gt(t) {
        return (t == null ? void 0 : t[Yt]) || {};
    }
    function ki(t, e) {
        return Gt(t)[e];
    }
    function Ha(t, e) {
        t[Yt] || (t[Yt] = {}), t[Yt][e.$options.name] = e;
    }
    function La(t, e) {
        var i;
        (i = t[Yt]) == null || delete i[e.$options.name], ti(t[Yt]) || delete t[Yt];
    }
    function Wa(t) {
        t.component = Yn, t.getComponents = Gt, t.getComponent = ki, t.update = Gn, t.use = function(i) {
            if (!i.installed) return i.call(null, this), i.installed = !0, this;
        }, t.mixin = function(i, s) {
            s = (N(s) ? this.component(s) : s) || this, s.options = Ne(s.options, i);
        }, t.extend = function(i) {
            i || (i = {});
            const s = this, n = function(r) {
                Vn(this, r);
            };
            return n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.options = Ne(s.options, i), n.super = s, n.extend = s.extend, n;
        };
        let e;
        Object.defineProperty(t, "container", {
            get () {
                return e || document.body;
            },
            set (i) {
                e = k(i);
            }
        });
    }
    function Gn(t, e) {
        t = t ? F(t) : document.body;
        for (const i of Ee(t).reverse())Xn(i, e);
        kt(t, (i)=>Xn(i, e));
    }
    function Xn(t, e) {
        const i = Gt(t);
        for(const s in i)ze(i[s], e);
    }
    function ja(t) {
        t.prototype.$mount = function(e) {
            const i = this;
            Ha(e, i), i.$options.el = e, document.contains(e) && Is(i);
        }, t.prototype.$destroy = function(e = !1) {
            const i = this, { el: s } = i.$options;
            s && Cs(i), de(i, "destroy"), La(s, i), e && at(i.$el);
        }, t.prototype.$create = Ve, t.prototype.$emit = function(e) {
            ze(this, e);
        }, t.prototype.$update = function(e = this.$el, i) {
            Gn(e, i);
        }, t.prototype.$reset = function() {
            Cs(this), Is(this);
        }, t.prototype.$getComponent = ki, Object.defineProperties(t.prototype, {
            $el: {
                get () {
                    return this.$options.el;
                }
            },
            $container: Object.getOwnPropertyDescriptor(t, "container")
        });
    }
    let Ra = 1;
    function Xt(t, e = null) {
        return (e == null ? void 0 : e.id) || `${t.$options.id}-${Ra++}`;
    }
    var qa = {
        i18n: {
            next: "Next slide",
            previous: "Previous slide",
            slideX: "Slide %s",
            slideLabel: "%s of %s",
            role: "String"
        },
        data: {
            selNav: !1,
            role: "region"
        },
        computed: {
            nav: ({ selNav: t }, e)=>k(t, e),
            navChildren () {
                return B(this.nav);
            },
            selNavItem: ({ attrItem: t })=>`[${t}],[data-${t}]`,
            navItems (t, e) {
                return z(this.selNavItem, e);
            }
        },
        watch: {
            nav (t, e) {
                p(t, "role", "tablist"), e && this.$emit();
            },
            list (t) {
                p(t, "role", "presentation");
            },
            navChildren (t) {
                p(t, "role", "presentation");
            },
            navItems (t) {
                for (const e of t){
                    const i = X(e, this.attrItem), s = k("a,button", e) || e;
                    let n, o = null;
                    if (vt(i)) {
                        const r = $t(i), a = this.slides[r];
                        a && (a.id || (a.id = Xt(this, a)), o = a.id), n = this.t("slideX", S(i) + 1), p(s, "role", "tab");
                    } else this.list && (this.list.id || (this.list.id = Xt(this, this.list)), o = this.list.id), n = this.t(i);
                    p(s, {
                        "aria-controls": o,
                        "aria-label": p(s, "aria-label") || n
                    });
                }
            },
            slides (t) {
                t.forEach((e, i)=>p(e, {
                        role: this.nav ? "tabpanel" : "group",
                        "aria-label": this.t("slideLabel", i + 1, this.length),
                        "aria-roledescription": this.nav ? null : "slide"
                    }));
            },
            length (t) {
                const e = this.navChildren.length;
                if (this.nav && t !== e) {
                    ts(this.nav);
                    for(let i = 0; i < t; i++)L(this.nav, `<li ${this.attrItem}="${i}"><a href></a></li>`);
                }
            }
        },
        connected () {
            p(this.$el, {
                role: this.role,
                "aria-roledescription": "carousel"
            });
        },
        update: [
            {
                write () {
                    this.navItems.concat(this.nav).forEach((t)=>t && (t.hidden = !this.maxIndex)), this.updateNav();
                },
                events: [
                    "resize"
                ]
            }
        ],
        events: [
            {
                name: "click keydown",
                delegate () {
                    return this.selNavItem;
                },
                filter () {
                    return !this.parallax;
                },
                handler (t) {
                    t.target.closest("a,button") && (t.type === "click" || t.keyCode === _.SPACE) && (t.preventDefault(), this.show(X(t.current, this.attrItem)));
                }
            },
            {
                name: "itemshow",
                handler: "updateNav"
            },
            {
                name: "keydown",
                delegate () {
                    return this.selNavItem;
                },
                filter () {
                    return !this.parallax;
                },
                handler (t) {
                    const { current: e, keyCode: i } = t, s = X(e, this.attrItem);
                    if (!vt(s)) return;
                    let n = i === _.HOME ? 0 : i === _.END ? "last" : i === _.LEFT ? "previous" : i === _.RIGHT ? "next" : -1;
                    ~n && (t.preventDefault(), this.show(n));
                }
            }
        ],
        methods: {
            updateNav () {
                const t = this.getValidIndex();
                for (const e of this.navItems){
                    const i = X(e, this.attrItem), s = k("a,button", e) || e;
                    if (vt(i)) {
                        const o = $t(i) === t;
                        j(e, this.clsActive, o), j(s, "uk-disabled", this.parallax), p(s, {
                            "aria-selected": o,
                            tabindex: o && !this.parallax ? null : -1
                        }), o && s && T(P(e), ":focus-within") && s.focus();
                    } else j(e, "uk-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex));
                }
            }
        }
    }, Jn = {
        mixins: [
            ma,
            wa,
            qa,
            yi
        ],
        props: {
            clsActivated: String,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number
        },
        data: ()=>({
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "uk-active",
                clsActivated: "",
                clsEnter: "uk-slide-enter",
                clsLeave: "uk-slide-leave",
                clsSlideActive: "uk-slide-active",
                Transitioner: !1,
                transitionOptions: {}
            }),
        connected () {
            this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
        },
        disconnected () {
            D(this.slides, this.clsActive);
        },
        computed: {
            duration: ({ velocity: t }, e)=>Kn(e.offsetWidth / t),
            list: ({ selList: t }, e)=>k(t, e),
            maxIndex () {
                return this.length - 1;
            },
            slides () {
                return B(this.list);
            },
            length () {
                return this.slides.length;
            }
        },
        watch: {
            slides (t, e) {
                e && this.$emit();
            }
        },
        observe: ct(),
        events: {
            itemshow ({ target: t }) {
                $(t, this.clsEnter, this.clsSlideActive);
            },
            itemshown ({ target: t }) {
                D(t, this.clsEnter);
            },
            itemhide ({ target: t }) {
                $(t, this.clsLeave);
            },
            itemhidden ({ target: t }) {
                D(t, this.clsLeave, this.clsSlideActive);
            }
        },
        methods: {
            show (t, e = !1) {
                var i;
                if (this.dragging || !this.length || this.parallax) return;
                const { stack: s } = this, n = e ? 0 : s.length, o = ()=>{
                    s.splice(n, 1), s.length && this.show(s.shift(), !0);
                };
                if (s[e ? "unshift" : "push"](t), !e && s.length > 1) {
                    s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
                    return;
                }
                const r = this.getIndex(this.index), a = y(this.slides, this.clsActive) && this.slides[r], l = this.getIndex(t, this.index), h = this.slides[l];
                if (a === h) {
                    o();
                    return;
                }
                if (this.dir = Ua(t, r), this.prevIndex = r, this.index = l, a && !g(a, "beforeitemhide", [
                    this
                ]) || !g(h, "beforeitemshow", [
                    this,
                    a
                ])) {
                    this.index = this.prevIndex, o();
                    return;
                }
                const u = this._show(a, h, e).then(()=>{
                    a && g(a, "itemhidden", [
                        this
                    ]), g(h, "itemshown", [
                        this
                    ]), s.shift(), this._transitioner = null, requestAnimationFrame(()=>s.length && this.show(s.shift(), !0));
                });
                return a && g(a, "itemhide", [
                    this
                ]), g(h, "itemshow", [
                    this
                ]), u;
            },
            getIndex (t = this.index, e = this.index) {
                return tt(ot(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex));
            },
            getValidIndex (t = this.index, e = this.prevIndex) {
                return this.getIndex(t, e);
            },
            _show (t, e, i) {
                if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                    easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                    ...this.transitionOptions
                }), !i && !t) return this._translate(1), Promise.resolve();
                const { length: s } = this.stack;
                return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent);
            },
            _translate (t, e = this.prevIndex, i = this.index) {
                const s = this._getTransitioner(e === i ? !1 : e, i);
                return s.translate(t), s;
            },
            _getTransitioner (t = this.prevIndex, e = this.index, i = this.dir || 1, s = this.transitionOptions) {
                return new this.Transitioner(ye(t) ? this.slides[t] : t, ye(e) ? this.slides[e] : e, i * (V ? -1 : 1), s);
            }
        }
    };
    function Ua(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
    }
    function Kn(t) {
        return .5 * t + 300;
    }
    var Zn = {
        mixins: [
            Jn
        ],
        props: {
            animation: String
        },
        data: {
            animation: "slide",
            clsActivated: "uk-transition-active",
            Animations: ys,
            Transitioner: ga
        },
        computed: {
            animation ({ animation: t, Animations: e }) {
                return {
                    ...e[t] || e.slide,
                    name: t
                };
            },
            transitionOptions () {
                return {
                    animation: this.animation
                };
            }
        },
        events: {
            beforeitemshow ({ target: t }) {
                $(t, this.clsActive);
            },
            itemshown ({ target: t }) {
                $(t, this.clsActivated);
            },
            itemhidden ({ target: t }) {
                D(t, this.clsActive, this.clsActivated);
            }
        }
    }, Qn = {
        ...ys,
        fade: {
            show () {
                return [
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1
                    }
                ];
            },
            percent (t) {
                return 1 - c(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t
                    },
                    {
                        opacity: t
                    }
                ];
            }
        },
        scale: {
            show () {
                return [
                    {
                        opacity: 0,
                        transform: ue(0.8)
                    },
                    {
                        opacity: 1,
                        transform: ue(1)
                    }
                ];
            },
            percent (t) {
                return 1 - c(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t,
                        transform: ue(1 - .2 * t)
                    },
                    {
                        opacity: t,
                        transform: ue(0.8 + .2 * t)
                    }
                ];
            }
        }
    }, to = {
        mixins: [
            $s,
            Zn
        ],
        functional: !0,
        props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
        },
        data: ()=>({
                preload: 1,
                videoAutoplay: !1,
                delayControls: 3e3,
                items: [],
                cls: "uk-open",
                clsPage: "uk-lightbox-page",
                selList: ".uk-lightbox-items",
                attrItem: "uk-lightbox-item",
                selClose: ".uk-close-large",
                selCaption: ".uk-lightbox-caption",
                pauseOnHover: !1,
                velocity: 2,
                Animations: Qn,
                template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
            }),
        created () {
            const t = k(this.template), e = k(this.selList, t);
            this.items.forEach(()=>L(e, "<li>"));
            const i = k("[uk-close]", t), s = this.t("close");
            i && s && (i.dataset.i18n = JSON.stringify({
                label: s
            })), this.$mount(L(this.container, t));
        },
        computed: {
            caption: ({ selCaption: t }, e)=>k(t, e)
        },
        events: [
            {
                name: `${pi} ${ft} keydown`,
                handler: "showControls"
            },
            {
                name: "click",
                self: !0,
                delegate () {
                    return `${this.selList} > *`;
                },
                handler (t) {
                    t.defaultPrevented || this.hide();
                }
            },
            {
                name: "shown",
                self: !0,
                handler: "showControls"
            },
            {
                name: "hide",
                self: !0,
                handler () {
                    this.hideControls(), D(this.slides, this.clsActive), O.stop(this.slides);
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    this.$destroy(!0);
                }
            },
            {
                name: "keyup",
                el: ()=>document,
                handler ({ keyCode: t }) {
                    if (!this.isToggled(this.$el) || !this.draggable) return;
                    let e = -1;
                    t === _.LEFT ? e = "previous" : t === _.RIGHT ? e = "next" : t === _.HOME ? e = 0 : t === _.END && (e = "last"), ~e && this.show(e);
                }
            },
            {
                name: "beforeitemshow",
                handler (t) {
                    this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Qn.scale, D(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
                }
            },
            {
                name: "itemshow",
                handler () {
                    Lt(this.caption, this.getItem().caption || "");
                    for(let t = -this.preload; t <= this.preload; t++)this.loadItem(this.index + t);
                }
            },
            {
                name: "itemshown",
                handler () {
                    this.draggable = this.$props.draggable;
                }
            },
            {
                name: "itemload",
                async handler (t, e) {
                    const { source: i, type: s, alt: n = "", poster: o, attrs: r = {} } = e;
                    if (this.setItem(e, "<span uk-spinner></span>"), !i) return;
                    let a;
                    const l = {
                        allowfullscreen: "",
                        style: "max-width: 100%; box-sizing: border-box;",
                        "uk-responsive": "",
                        "uk-video": `${this.videoAutoplay}`
                    };
                    if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
                        const h = Ye("img", {
                            src: i,
                            alt: n,
                            ...r
                        });
                        b(h, "load", ()=>this.setItem(e, h)), b(h, "error", ()=>this.setError(e));
                    } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                        const h = Ye("video", {
                            src: i,
                            poster: o,
                            controls: "",
                            playsinline: "",
                            "uk-video": `${this.videoAutoplay}`,
                            ...r
                        });
                        b(h, "loadedmetadata", ()=>this.setItem(e, h)), b(h, "error", ()=>this.setError(e));
                    } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i)) this.setItem(e, Ye("iframe", {
                        src: i,
                        allowfullscreen: "",
                        class: "uk-lightbox-iframe",
                        ...r
                    }));
                    else if (a = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) this.setItem(e, Ye("iframe", {
                        src: `https://www.youtube${a[1] || ""}.com/embed/${a[2]}${a[3] ? `?${a[3]}` : ""}`,
                        width: 1920,
                        height: 1080,
                        ...l,
                        ...r
                    }));
                    else if (a = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) try {
                        const { height: h, width: u } = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, {
                            credentials: "omit"
                        })).json();
                        this.setItem(e, Ye("iframe", {
                            src: `https://player.vimeo.com/video/${a[1]}${a[2] ? `?${a[2]}` : ""}`,
                            width: u,
                            height: h,
                            ...l,
                            ...r
                        }));
                    } catch  {
                        this.setError(e);
                    }
                }
            }
        ],
        methods: {
            loadItem (t = this.index) {
                const e = this.getItem(t);
                this.getSlide(e).childElementCount || g(this.$el, "itemload", [
                    e
                ]);
            },
            getItem (t = this.index) {
                return this.items[ot(t, this.slides)];
            },
            setItem (t, e) {
                g(this.$el, "itemloaded", [
                    this,
                    Lt(this.getSlide(t), e)
                ]);
            },
            getSlide (t) {
                return this.slides[this.items.indexOf(t)];
            },
            setError (t) {
                this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },
            showControls () {
                clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), $(this.$el, "uk-active", "uk-transition-active");
            },
            hideControls () {
                D(this.$el, "uk-active", "uk-transition-active");
            }
        }
    };
    function Ye(t, e) {
        const i = Wt(`<${t}>`);
        return p(i, e), i;
    }
    var Va = {
        install: Ya,
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles: ({ toggle: t }, e)=>z(t, e)
        },
        watch: {
            toggles (t) {
                this.hide();
                for (const e of t)R(e, "a") && p(e, "role", "button");
            }
        },
        disconnected () {
            this.hide();
        },
        events: {
            name: "click",
            delegate () {
                return `${this.toggle}:not(.uk-disabled)`;
            },
            handler (t) {
                t.preventDefault(), this.show(t.current);
            }
        },
        methods: {
            show (t) {
                const e = Hs(this.toggles.map(eo), "source");
                if ($e(t)) {
                    const { source: i } = eo(t);
                    t = bt(e, ({ source: s })=>i === s);
                }
                return this.panel = this.panel || this.$create("lightboxPanel", {
                    ...this.$props,
                    items: e
                }), b(this.panel.$el, "hidden", ()=>this.panel = null), this.panel.show(t);
            },
            hide () {
                var t;
                return (t = this.panel) == null ? void 0 : t.hide();
            }
        }
    };
    function Ya(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", to), gt(e.props, t.component("lightboxPanel").options.props);
    }
    function eo(t) {
        const e = {};
        for (const i of [
            "href",
            "caption",
            "type",
            "poster",
            "alt",
            "attrs"
        ])e[i === "href" ? "source" : i] = X(t, i);
        return e.attrs = ce(e.attrs), e;
    }
    var Ga = {
        mixins: [
            je
        ],
        functional: !0,
        args: [
            "message",
            "status"
        ],
        data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: "",
            pos: "top-center",
            clsContainer: "uk-notification",
            clsClose: "uk-notification-close",
            clsMsg: "uk-notification-message"
        },
        install: Xa,
        computed: {
            marginProp: ({ pos: t })=>`margin-${t.match(/[a-z]+(?=-)/)[0]}`,
            startProps () {
                return {
                    opacity: 0,
                    [this.marginProp]: -this.$el.offsetHeight
                };
            }
        },
        created () {
            const t = `${this.clsContainer}-${this.pos}`, e = `data-${this.clsContainer}-container`, i = k(`.${t}[${e}]`, this.container) || L(this.container, `<div class="${this.clsContainer} ${t}" ${e}></div>`);
            this.$mount(L(i, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`));
        },
        async connected () {
            const t = S(c(this.$el, this.marginProp));
            await O.start(c(this.$el, this.startProps), {
                opacity: 1,
                [this.marginProp]: t
            }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
        },
        events: {
            click (t) {
                t.target.closest('a[href="#"],a[href=""]') && t.preventDefault(), this.close();
            },
            [he] () {
                this.timer && clearTimeout(this.timer);
            },
            [Me] () {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout));
            }
        },
        methods: {
            async close (t) {
                const e = (i)=>{
                    const s = P(i);
                    g(i, "close", [
                        this
                    ]), at(i), s != null && s.hasChildNodes() || at(s);
                };
                this.timer && clearTimeout(this.timer), t || await O.start(this.$el, this.startProps), e(this.$el);
            }
        }
    };
    function Xa(t) {
        t.notification.closeAll = function(e, i) {
            kt(document.body, (s)=>{
                const n = t.getComponent(s, "notification");
                n && (!e || e === n.group) && n.close(i);
            });
        };
    }
    var Si = {
        props: {
            media: Boolean
        },
        data: {
            media: !1
        },
        connected () {
            const t = Ja(this.media, this.$el);
            if (this.matchMedia = !0, t) {
                this.mediaObj = window.matchMedia(t);
                const e = ()=>{
                    this.matchMedia = this.mediaObj.matches, g(this.$el, Ht("mediachange", !1, !0, [
                        this.mediaObj
                    ]));
                };
                this.offMediaObj = b(this.mediaObj, "change", ()=>{
                    e(), this.$emit("resize");
                }), e();
            }
        },
        disconnected () {
            var t;
            (t = this.offMediaObj) == null || t.call(this);
        }
    };
    function Ja(t, e) {
        if (N(t)) {
            if (dt(t, "@")) t = S(c(e, `--uk-breakpoint-${t.substr(1)}`));
            else if (isNaN(t)) return t;
        }
        return t && vt(t) ? `(min-width: ${t}px)` : "";
    }
    function io(t) {
        return Math.ceil(Math.max(0, ...z("[stroke]", t).map((e)=>{
            try {
                return e.getTotalLength();
            } catch  {
                return 0;
            }
        })));
    }
    const Ii = {
        x: Ci,
        y: Ci,
        rotate: Ci,
        scale: Ci,
        color: Es,
        backgroundColor: Es,
        borderColor: Es,
        blur: Jt,
        hue: Jt,
        fopacity: Jt,
        grayscale: Jt,
        invert: Jt,
        saturate: Jt,
        sepia: Jt,
        opacity: Za,
        stroke: Qa,
        bgx: oo,
        bgy: oo
    }, { keys: so } = Object;
    var no = {
        mixins: [
            Si
        ],
        props: ho(so(Ii), "list"),
        data: ho(so(Ii), void 0),
        computed: {
            props (t, e) {
                const i = {};
                for(const n in t)n in Ii && !G(t[n]) && (i[n] = t[n].slice());
                const s = {};
                for(const n in i)s[n] = Ii[n](n, e, i[n], i);
                return s;
            }
        },
        events: {
            load () {
                this.$emit();
            }
        },
        methods: {
            reset () {
                for(const t in this.getCss(0))c(this.$el, t, "");
            },
            getCss (t) {
                const e = {};
                for(const i in this.props)this.props[i](e, tt(t));
                return e.willChange = Object.keys(e).map(ri).join(","), e;
            }
        }
    };
    function Ci(t, e, i) {
        let s = Ti(i) || ({
            x: "px",
            y: "px",
            rotate: "deg"
        })[t] || "", n;
        return t === "x" || t === "y" ? (t = `translate${St(t)}`, n = (o)=>S(S(o).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", n = (o)=>{
            var r;
            return Ti([
                o
            ]) ? U(o, "width", e, !0) / e[`offset${(r = o.endsWith) != null && r.call(o, "vh") ? "Height" : "Width"}`] : S(o);
        }), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = pe(i, n), (o, r)=>{
            o.transform = `${o.transform || ""} ${t}(${Ge(i, r)}${s})`;
        };
    }
    function Es(t, e, i) {
        return i.length === 1 && i.unshift(Xe(e, t, "")), i = pe(i, (s)=>Ka(e, s)), (s, n)=>{
            const [o, r, a] = lo(i, n), l = o.map((h, u)=>(h += a * (r[u] - h), u === 3 ? S(h) : parseInt(h, 10))).join(",");
            s[t] = `rgba(${l})`;
        };
    }
    function Ka(t, e) {
        return Xe(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(S);
    }
    function Jt(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Ti(i) || ({
            blur: "px",
            hue: "deg"
        })[t] || "%";
        return t = ({
            fopacity: "opacity",
            hue: "hue-rotate"
        })[t] || t, i = pe(i), (n, o)=>{
            const r = Ge(i, o);
            n.filter = `${n.filter || ""} ${t}(${r + s})`;
        };
    }
    function Za(t, e, i) {
        return i.length === 1 && i.unshift(Xe(e, t, "")), i = pe(i), (s, n)=>{
            s[t] = Ge(i, n);
        };
    }
    function Qa(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = Ti(i), n = io(e);
        return i = pe(i.reverse(), (o)=>(o = S(o), s === "%" ? o * n / 100 : o)), i.some(([o])=>o) ? (c(e, "strokeDasharray", n), (o, r)=>{
            o.strokeDashoffset = Ge(i, r);
        }) : A;
    }
    function oo(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const n = t === "bgy" ? "height" : "width";
        s[t] = pe(i, (a)=>U(a, n, e));
        const o = [
            "bgx",
            "bgy"
        ].filter((a)=>a in s);
        if (o.length === 2 && t === "bgx") return A;
        if (Xe(e, "backgroundSize", "") === "cover") return tl(t, e, i, s);
        const r = {};
        for (const a of o)r[a] = ro(e, a);
        return ao(o, r, s);
    }
    function tl(t, e, i, s) {
        const n = el(e);
        if (!n.width) return A;
        const o = {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, r = [
            "bgx",
            "bgy"
        ].filter((u)=>u in s), a = {};
        for (const u of r){
            const d = s[u].map(([M])=>M), f = Math.min(...d), v = Math.max(...d), x = d.indexOf(f) < d.indexOf(v), C = v - f;
            a[u] = `${(x ? -C : 0) - (x ? f : v)}px`, o[u === "bgy" ? "height" : "width"] += C;
        }
        const l = ji.cover(n, o);
        for (const u of r){
            const d = u === "bgy" ? "height" : "width", f = l[d] - o[d];
            a[u] = `max(${ro(e, u)},-${f}px) + ${a[u]}`;
        }
        const h = ao(r, a, s);
        return (u, d)=>{
            h(u, d), u.backgroundSize = `${l.width}px ${l.height}px`, u.backgroundRepeat = "no-repeat";
        };
    }
    function ro(t, e) {
        return Xe(t, `background-position-${e.substr(-1)}`, "");
    }
    function ao(t, e, i) {
        return function(s, n) {
            for (const o of t){
                const r = Ge(i[o], n);
                s[`background-position-${o.substr(-1)}`] = `calc(${e[o]} + ${r}px)`;
            }
        };
    }
    const Ei = {};
    function el(t) {
        const e = c(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (Ei[e]) return Ei[e];
        const i = new Image;
        return e && (i.src = e, !i.naturalWidth) ? (i.onload = ()=>{
            Ei[e] = Ts(i), g(t, Ht("load", !1));
        }, Ts(i)) : Ei[e] = Ts(i);
    }
    function Ts(t) {
        return {
            width: t.naturalWidth,
            height: t.naturalHeight
        };
    }
    function pe(t, e = S) {
        const i = [], { length: s } = t;
        let n = 0;
        for(let o = 0; o < s; o++){
            let [r, a] = N(t[o]) ? t[o].trim().split(/ (?![^(]*\))/) : [
                t[o]
            ];
            if (r = e(r), a = a ? S(a) / 100 : null, o === 0 ? a === null ? a = 0 : a && i.push([
                r,
                0
            ]) : o === s - 1 && (a === null ? a = 1 : a !== 1 && (i.push([
                r,
                a
            ]), a = 1)), i.push([
                r,
                a
            ]), a === null) n++;
            else if (n) {
                const l = i[o - n - 1][1], h = (a - l) / (n + 1);
                for(let u = n; u > 0; u--)i[o - u][1] = l + h * (n - u + 1);
                n = 0;
            }
        }
        return i;
    }
    function lo(t, e) {
        const i = bt(t.slice(1), ([, s])=>e <= s) + 1;
        return [
            t[i - 1][0],
            t[i][0],
            (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])
        ];
    }
    function Ge(t, e) {
        const [i, s, n] = lo(t, e);
        return i + Math.abs(i - s) * n * (i < s ? 1 : -1);
    }
    const il = /^-?\d+(?:\.\d+)?(\S+)?/;
    function Ti(t, e) {
        var i;
        for (const s of t){
            const n = (i = s.match) == null ? void 0 : i.call(s, il);
            if (n) return n[1];
        }
        return e;
    }
    function Xe(t, e, i) {
        const s = t.style[e], n = c(c(t, e, i), e);
        return t.style[e] = s, n;
    }
    function ho(t, e) {
        return t.reduce((i, s)=>(i[s] = e, i), {});
    }
    function co(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
    }
    var sl = {
        mixins: [
            no
        ],
        props: {
            target: String,
            viewport: Number,
            easing: Number,
            start: String,
            end: String
        },
        data: {
            target: !1,
            viewport: 1,
            easing: 1,
            start: 0,
            end: 0
        },
        computed: {
            target: ({ target: t }, e)=>uo(t && J(t, e) || e),
            start ({ start: t }) {
                return U(t, "height", this.target, !0);
            },
            end ({ end: t, viewport: e }) {
                return U(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, !0);
            }
        },
        observe: [
            gs(),
            Le({
                target: ({ target: t })=>t
            }),
            ct({
                target: ({ $el: t, target: e })=>[
                        t,
                        e,
                        Ot(e, !0)
                    ]
            })
        ],
        update: {
            read ({ percent: t }, e) {
                if (e.has("scroll") || (t = !1), !q(this.$el)) return !1;
                if (!this.matchMedia) return;
                const i = t;
                return t = co(wi(this.target, this.start, this.end), this.easing), {
                    percent: t,
                    style: i === t ? !1 : this.getCss(t)
                };
            },
            write ({ style: t }) {
                if (!this.matchMedia) {
                    this.reset();
                    return;
                }
                t && c(this.$el, t);
            },
            events: [
                "scroll",
                "resize"
            ]
        }
    };
    function uo(t) {
        return t ? "offsetTop" in t ? t : uo(P(t)) : document.documentElement;
    }
    var fo = {
        props: {
            parallax: Boolean,
            parallaxTarget: Boolean,
            parallaxStart: String,
            parallaxEnd: String,
            parallaxEasing: Number
        },
        data: {
            parallax: !1,
            parallaxTarget: !1,
            parallaxStart: 0,
            parallaxEnd: 0,
            parallaxEasing: 0
        },
        observe: [
            ct({
                target: ({ $el: t, parallaxTarget: e })=>[
                        t,
                        e
                    ],
                filter: ({ parallax: t })=>t
            }),
            Le({
                filter: ({ parallax: t })=>t
            })
        ],
        computed: {
            parallaxTarget ({ parallaxTarget: t }, e) {
                return t && J(t, e) || this.list;
            }
        },
        update: {
            write () {
                if (!this.parallax) return;
                const t = this.parallaxTarget, e = U(this.parallaxStart, "height", t, !0), i = U(this.parallaxEnd, "height", t, !0), s = co(wi(t, e, i), this.parallaxEasing), [n, o] = this.getIndexAt(s), r = this.getValidIndex(n + Math.ceil(o)), a = this.slides[n], l = this.slides[r], { triggerShow: h, triggerShown: u, triggerHide: d, triggerHidden: f } = nl(this);
                if (~this.prevIndex) for (const x of new Set([
                    this.index,
                    this.prevIndex
                ]))m([
                    r,
                    n
                ], x) || (d(this.slides[x]), f(this.slides[x]));
                const v = this.prevIndex !== n || this.index !== r;
                this.dir = 1, this.prevIndex = n, this.index = r, a !== l && d(a), h(l), v && u(a), this._translate(a === l ? 1 : o, a, l);
            },
            events: [
                "scroll",
                "resize"
            ]
        },
        methods: {
            getIndexAt (t) {
                const e = t * (this.length - 1);
                return [
                    Math.floor(e),
                    e % 1
                ];
            }
        }
    };
    function nl(t) {
        const { clsSlideActive: e, clsEnter: i, clsLeave: s } = t;
        return {
            triggerShow: n,
            triggerShown: o,
            triggerHide: r,
            triggerHidden: a
        };
        function n(l) {
            y(l, s) && (r(l), a(l)), y(l, e) || (g(l, "beforeitemshow", [
                t
            ]), g(l, "itemshow", [
                t
            ]));
        }
        function o(l) {
            y(l, i) && g(l, "itemshown", [
                t
            ]);
        }
        function r(l) {
            y(l, e) || n(l), y(l, i) && o(l), y(l, s) || (g(l, "beforeitemhide", [
                t
            ]), g(l, "itemhide", [
                t
            ]));
        }
        function a(l) {
            y(l, s) && g(l, "itemhidden", [
                t
            ]);
        }
    }
    var po = {
        update: {
            write () {
                if (this.stack.length || this.dragging || this.parallax) return;
                const t = this.getValidIndex();
                !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1, this.prevIndex, this.index);
            },
            events: [
                "resize"
            ]
        }
    }, go = {
        observe: He({
            target: ({ slides: t })=>t,
            targets: (t)=>t.getAdjacentSlides()
        }),
        methods: {
            getAdjacentSlides () {
                return [
                    1,
                    -1
                ].map((t)=>this.slides[this.getIndex(this.index + t)]);
            }
        }
    };
    function ol(t, e, i, { center: s, easing: n, list: o }) {
        const r = t ? Je(t, o, s) : Je(e, o, s) + w(e).width * i, a = e ? Je(e, o, s) : r + w(t).width * i * (V ? -1 : 1);
        let l;
        return {
            dir: i,
            show (h, u = 0, d) {
                const f = d ? "linear" : n;
                return h -= Math.round(h * tt(u, -1, 1)), this.translate(u), u = t ? u : tt(u, 0, 1), Ps(this.getItemIn(), "itemin", {
                    percent: u,
                    duration: h,
                    timing: f,
                    dir: i
                }), t && Ps(this.getItemIn(!0), "itemout", {
                    percent: 1 - u,
                    duration: h,
                    timing: f,
                    dir: i
                }), new Promise((v)=>{
                    l || (l = v), O.start(o, {
                        transform: W(-a * (V ? -1 : 1), "px")
                    }, h, f).then(l, A);
                });
            },
            cancel () {
                return O.cancel(o);
            },
            reset () {
                c(o, "transform", "");
            },
            async forward (h, u = this.percent()) {
                return await this.cancel(), this.show(h, u, !0);
            },
            translate (h) {
                const u = this.getDistance() * i * (V ? -1 : 1);
                c(o, "transform", W(tt(-a + (u - u * h), -ge(o), w(o).width) * (V ? -1 : 1), "px"));
                const d = this.getActives(), f = this.getItemIn(), v = this.getItemIn(!0);
                h = t ? tt(h, -1, 1) : 0;
                for (const x of B(o)){
                    const C = m(d, x), M = x === f, wt = x === v, Ze = M || !wt && (C || i * (V ? -1 : 1) === -1 ^ Pi(x, o) > Pi(t || e));
                    Ps(x, `itemtranslate${Ze ? "in" : "out"}`, {
                        dir: i,
                        percent: wt ? 1 - h : M ? h : C ? 1 : 0
                    });
                }
            },
            percent () {
                return Math.abs((c(o, "transform").split(",")[4] * (V ? -1 : 1) + r) / (a - r));
            },
            getDistance () {
                return Math.abs(a - r);
            },
            getItemIn (h = !1) {
                let u = this.getActives(), d = vo(o, Je(e || t, o, s));
                if (h) {
                    const f = u;
                    u = d, d = f;
                }
                return d[bt(d, (f)=>!m(u, f))];
            },
            getActives () {
                return vo(o, Je(t || e, o, s));
            }
        };
    }
    function Je(t, e, i) {
        const s = Pi(t, e);
        return i ? s - rl(t, e) : Math.min(s, mo(e));
    }
    function mo(t) {
        return Math.max(0, ge(t) - w(t).width);
    }
    function ge(t, e) {
        return zt(B(t).slice(0, e), (i)=>w(i).width);
    }
    function rl(t, e) {
        return w(e).width / 2 - w(t).width / 2;
    }
    function Pi(t, e) {
        return t && (is(t).left + (V ? w(t).width - w(e).width : 0)) * (V ? -1 : 1) || 0;
    }
    function vo(t, e) {
        e -= 1;
        const i = w(t).width, s = e + i + 2;
        return B(t).filter((n)=>{
            const o = Pi(n, t), r = o + Math.min(w(n).width, i);
            return o >= e && r <= s;
        });
    }
    function Ps(t, e, i) {
        g(t, Ht(e, !1, !1, i));
    }
    var al = {
        mixins: [
            st,
            Jn,
            po,
            fo,
            go
        ],
        props: {
            center: Boolean,
            sets: Boolean,
            active: String
        },
        data: {
            center: !1,
            sets: !1,
            attrItem: "uk-slider-item",
            selList: ".uk-slider-items",
            selNav: ".uk-slider-nav",
            clsContainer: "uk-slider-container",
            active: "all",
            Transitioner: ol
        },
        computed: {
            finite ({ finite: t }) {
                return t || ll(this.list, this.center);
            },
            maxIndex () {
                if (!this.finite || this.center && !this.sets) return this.length - 1;
                if (this.center) return Bt(this.sets);
                let t = 0;
                const e = mo(this.list), i = bt(this.slides, (s)=>{
                    if (t >= e) return !0;
                    t += w(s).width;
                });
                return ~i ? i : this.length - 1;
            },
            sets ({ sets: t }) {
                if (!t || this.parallax) return;
                let e = 0;
                const i = [], s = w(this.list).width;
                for(let n = 0; n < this.length; n++){
                    const o = w(this.slides[n]).width;
                    e + o > s && (e = 0), this.center ? e < s / 2 && e + o + w(this.slides[ot(+n + 1, this.slides)]).width / 2 > s / 2 && (i.push(+n), e = s / 2 - o / 2) : e === 0 && i.push(Math.min(+n, this.maxIndex)), e += o;
                }
                if (i.length) return i;
            },
            transitionOptions () {
                return {
                    center: this.center,
                    list: this.list
                };
            },
            slides () {
                return B(this.list).filter(q);
            }
        },
        connected () {
            j(this.$el, this.clsContainer, !k(`.${this.clsContainer}`, this.$el));
        },
        observe: ct({
            target: ({ slides: t })=>t
        }),
        update: {
            write () {
                for (const t of this.navItems){
                    const e = $t(X(t, this.attrItem));
                    e !== !1 && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !m(this.sets, e));
                }
                this.reorder(), this.updateActiveClasses();
            },
            events: [
                "resize"
            ]
        },
        events: {
            beforeitemshow (t) {
                !this.dragging && this.sets && this.stack.length < 2 && !m(this.sets, this.index) && (this.index = this.getValidIndex());
                const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && e > 1) {
                    for(let n = 0; n < e; n++)this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                    t.preventDefault();
                    return;
                }
                const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex, s = ge(this.list) / this.length;
                this.duration = Kn(s / this.velocity) * (w(this.slides[i]).width / s), this.reorder();
            },
            itemshow () {
                ~this.prevIndex && $(this._getTransitioner().getItemIn(), this.clsActive), this.updateActiveClasses(this.prevIndex);
            },
            itemshown () {
                this.updateActiveClasses();
            }
        },
        methods: {
            reorder () {
                if (this.finite) {
                    c(this.slides, "order", "");
                    return;
                }
                const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                if (this.slides.forEach((n, o)=>c(n, "order", this.dir > 0 && o < t ? 1 : this.dir < 0 && o >= this.index ? -1 : "")), !this.center) return;
                const e = this.slides[t];
                let i = w(this.list).width / 2 - w(e).width / 2, s = 0;
                for(; i > 0;){
                    const n = this.getIndex(--s + t, t), o = this.slides[n];
                    c(o, "order", n > t ? -2 : -1), i -= w(o).width;
                }
            },
            updateActiveClasses (t = this.index) {
                let e = this._getTransitioner(t).getActives();
                this.active !== "all" && (e = [
                    this.slides[this.getValidIndex(t)]
                ]);
                const i = [
                    this.clsActive,
                    !this.sets || m(this.sets, S(this.index)) ? this.clsActivated : ""
                ];
                for (const s of this.slides){
                    const n = m(e, s);
                    j(s, i, n), p(s, "aria-hidden", !n);
                    for (const o of z(Ie, s))pt(o, "_tabindex") || (o._tabindex = p(o, "tabindex")), p(o, "tabindex", n ? o._tabindex : -1);
                }
            },
            getValidIndex (t = this.index, e = this.prevIndex) {
                if (t = this.getIndex(t, e), !this.sets) return t;
                let i;
                do {
                    if (m(this.sets, t)) return t;
                    i = t, t = this.getIndex(t + this.dir, e);
                }while (t !== i);
                return t;
            },
            getAdjacentSlides () {
                const { width: t } = w(this.list), e = -t, i = t * 2, s = w(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, o = new Set;
                for (const r of [
                    -1,
                    1
                ]){
                    let a = n + (r > 0 ? s : 0), l = 0;
                    do {
                        const h = this.slides[this.getIndex(this.index + r + l++ * r)];
                        a += w(h).width * r, o.add(h);
                    }while (this.length > l && a > e && a < i);
                }
                return Array.from(o);
            },
            getIndexAt (t) {
                let e = -1;
                const i = this.center ? ge(this.list) - (w(this.slides[0]).width / 2 + w(Bt(this.slides)).width / 2) : ge(this.list, this.maxIndex);
                let s = t * i, n = 0;
                do {
                    const o = w(this.slides[++e]).width, r = this.center ? o / 2 + w(this.slides[e + 1]).width / 2 : o;
                    n = s / r % 1, s -= r;
                }while (s >= 0 && e < this.maxIndex);
                return [
                    e,
                    n
                ];
            }
        }
    };
    function ll(t, e) {
        if (!t || t.length < 2) return !0;
        const { width: i } = w(t);
        if (!e) return Math.ceil(ge(t)) < Math.trunc(i + hl(t));
        const s = B(t), n = Math.trunc(i / 2);
        for(const o in s){
            const r = s[o], a = w(r).width, l = new Set([
                r
            ]);
            let h = 0;
            for (const u of [
                -1,
                1
            ]){
                let d = a / 2, f = 0;
                for(; d < n;){
                    const v = s[ot(+o + u + f++ * u, s)];
                    if (l.has(v)) return !0;
                    d += w(v).width, l.add(v);
                }
                h = Math.max(h, a / 2 + w(s[ot(+o + u, s)]).width / 2 - (d - n));
            }
            if (Math.trunc(h) > zt(s.filter((u)=>!l.has(u)), (u)=>w(u).width)) return !0;
        }
        return !1;
    }
    function hl(t) {
        return Math.max(0, ...B(t).map((e)=>w(e).width));
    }
    var wo = {
        mixins: [
            no
        ],
        data: {
            selItem: "!li"
        },
        beforeConnect () {
            this.item = J(this.selItem, this.$el);
        },
        disconnected () {
            this.item = null;
        },
        events: [
            {
                name: "itemin itemout",
                self: !0,
                el () {
                    return this.item;
                },
                handler ({ type: t, detail: { percent: e, duration: i, timing: s, dir: n } }) {
                    K.read(()=>{
                        if (!this.matchMedia) return;
                        const o = this.getCss(xo(t, n, e)), r = this.getCss(bo(t) ? .5 : n > 0 ? 1 : 0);
                        K.write(()=>{
                            c(this.$el, o), O.start(this.$el, r, i, s).catch(A);
                        });
                    });
                }
            },
            {
                name: "transitioncanceled transitionend",
                self: !0,
                el () {
                    return this.item;
                },
                handler () {
                    O.cancel(this.$el);
                }
            },
            {
                name: "itemtranslatein itemtranslateout",
                self: !0,
                el () {
                    return this.item;
                },
                handler ({ type: t, detail: { percent: e, dir: i } }) {
                    K.read(()=>{
                        if (!this.matchMedia) {
                            this.reset();
                            return;
                        }
                        const s = this.getCss(xo(t, i, e));
                        K.write(()=>c(this.$el, s));
                    });
                }
            }
        ]
    };
    function bo(t) {
        return te(t, "in");
    }
    function xo(t, e, i) {
        return i /= 2, bo(t) ^ e < 0 ? i : 1 - i;
    }
    var cl = {
        ...ys,
        fade: {
            show () {
                return [
                    {
                        opacity: 0,
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            },
            percent (t) {
                return 1 - c(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t,
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            }
        },
        scale: {
            show () {
                return [
                    {
                        opacity: 0,
                        transform: ue(1.5),
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            },
            percent (t) {
                return 1 - c(t, "opacity");
            },
            translate (t) {
                return [
                    {
                        opacity: 1 - t,
                        transform: ue(1 + .5 * t),
                        zIndex: 0
                    },
                    {
                        zIndex: -1
                    }
                ];
            }
        },
        pull: {
            show (t) {
                return t < 0 ? [
                    {
                        transform: W(30),
                        zIndex: -1
                    },
                    {
                        transform: W(),
                        zIndex: 0
                    }
                ] : [
                    {
                        transform: W(-100),
                        zIndex: 0
                    },
                    {
                        transform: W(),
                        zIndex: -1
                    }
                ];
            },
            percent (t, e, i) {
                return i < 0 ? 1 - Re(e) : Re(t);
            },
            translate (t, e) {
                return e < 0 ? [
                    {
                        transform: W(30 * t),
                        zIndex: -1
                    },
                    {
                        transform: W(-100 * (1 - t)),
                        zIndex: 0
                    }
                ] : [
                    {
                        transform: W(-t * 100),
                        zIndex: 0
                    },
                    {
                        transform: W(30 * (1 - t)),
                        zIndex: -1
                    }
                ];
            }
        },
        push: {
            show (t) {
                return t < 0 ? [
                    {
                        transform: W(100),
                        zIndex: 0
                    },
                    {
                        transform: W(),
                        zIndex: -1
                    }
                ] : [
                    {
                        transform: W(-30),
                        zIndex: -1
                    },
                    {
                        transform: W(),
                        zIndex: 0
                    }
                ];
            },
            percent (t, e, i) {
                return i > 0 ? 1 - Re(e) : Re(t);
            },
            translate (t, e) {
                return e < 0 ? [
                    {
                        transform: W(t * 100),
                        zIndex: 0
                    },
                    {
                        transform: W(-30 * (1 - t)),
                        zIndex: -1
                    }
                ] : [
                    {
                        transform: W(-30 * t),
                        zIndex: -1
                    },
                    {
                        transform: W(100 * (1 - t)),
                        zIndex: 0
                    }
                ];
            }
        }
    }, ul = {
        mixins: [
            st,
            Zn,
            po,
            fo,
            go
        ],
        props: {
            ratio: String,
            minHeight: String,
            maxHeight: String
        },
        data: {
            ratio: "16:9",
            minHeight: void 0,
            maxHeight: void 0,
            selList: ".uk-slideshow-items",
            attrItem: "uk-slideshow-item",
            selNav: ".uk-slideshow-nav",
            Animations: cl
        },
        watch: {
            list (t) {
                c(t, {
                    aspectRatio: this.ratio ? this.ratio.replace(":", "/") : void 0,
                    minHeight: this.minHeight,
                    maxHeight: this.maxHeight,
                    minWidth: "100%",
                    maxWidth: "100%"
                });
            }
        },
        methods: {
            getAdjacentSlides () {
                return [
                    1,
                    -1
                ].map((t)=>this.slides[this.getIndex(this.index + t)]);
            }
        }
    }, dl = {
        mixins: [
            st,
            _n
        ],
        props: {
            group: String,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
        },
        data: {
            group: !1,
            threshold: 5,
            clsItem: "uk-sortable-item",
            clsPlaceholder: "uk-sortable-placeholder",
            clsDrag: "uk-sortable-drag",
            clsDragState: "uk-drag",
            clsBase: "uk-sortable",
            clsNoDrag: "uk-sortable-nodrag",
            clsEmpty: "uk-sortable-empty",
            clsCustom: "",
            handle: !1,
            pos: {}
        },
        created () {
            for (const t of [
                "init",
                "start",
                "move",
                "end"
            ]){
                const e = this[t];
                this[t] = (i)=>{
                    gt(this.pos, _t(i)), e(i);
                };
            }
        },
        events: {
            name: ft,
            passive: !1,
            handler: "init"
        },
        computed: {
            target: (t, e)=>(e.tBodies || [
                    e
                ])[0],
            items () {
                return B(this.target);
            },
            isEmpty () {
                return !this.items.length;
            },
            handles ({ handle: t }, e) {
                return t ? z(t, e) : this.items;
            }
        },
        watch: {
            isEmpty (t) {
                j(this.target, this.clsEmpty, t);
            },
            handles (t, e) {
                c(e, {
                    touchAction: "",
                    userSelect: ""
                }), c(t, {
                    touchAction: "none",
                    userSelect: "none"
                });
            }
        },
        update: {
            write (t) {
                if (!this.drag || !P(this.placeholder)) return;
                const { pos: { x: e, y: i }, origin: { offsetTop: s, offsetLeft: n }, placeholder: o } = this;
                c(this.drag, {
                    top: i - s,
                    left: e - n
                });
                const r = this.getSortable(document.elementFromPoint(e, i));
                if (!r) return;
                const { items: a } = r;
                if (a.some(O.inProgress)) return;
                const l = ml(a, {
                    x: e,
                    y: i
                });
                if (a.length && (!l || l === o)) return;
                const h = this.getSortable(o), u = vl(r.target, l, o, e, i, r === h && t.moved !== l);
                u !== !1 && (u && o === u || (r !== h ? (h.remove(o), t.moved = l) : delete t.moved, r.insert(o, u), this.touched.add(r)));
            },
            events: [
                "move"
            ]
        },
        methods: {
            init (t) {
                const { target: e, button: i, defaultPrevented: s } = t, [n] = this.items.filter((o)=>o.contains(e));
                !n || s || i > 0 || Ui(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.touched = new Set([
                    this
                ]), this.placeholder = n, this.origin = {
                    target: e,
                    index: Tt(n),
                    ...this.pos
                }, b(document, pi, this.move), b(document, Dt, this.end), this.threshold || this.start(t));
            },
            start (t) {
                this.drag = gl(this.$container, this.placeholder);
                const { left: e, top: i } = w(this.placeholder);
                gt(this.origin, {
                    offsetLeft: this.pos.x - e,
                    offsetTop: this.pos.y - i
                }), $(this.drag, this.clsDrag, this.clsCustom), $(this.placeholder, this.clsPlaceholder), $(this.items, this.clsItem), $(document.documentElement, this.clsDragState), g(this.$el, "start", [
                    this,
                    this.placeholder
                ]), fl(this.pos), this.move(t);
            },
            move (t) {
                this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
            },
            end () {
                if (Pt(document, pi, this.move), Pt(document, Dt, this.end), !this.drag) return;
                pl();
                const t = this.getSortable(this.placeholder);
                this === t ? this.origin.index !== Tt(this.placeholder) && g(this.$el, "moved", [
                    this,
                    this.placeholder
                ]) : (g(t.$el, "added", [
                    t,
                    this.placeholder
                ]), g(this.$el, "removed", [
                    this,
                    this.placeholder
                ])), g(this.$el, "stop", [
                    this,
                    this.placeholder
                ]), at(this.drag), this.drag = null;
                for (const { clsPlaceholder: e, clsItem: i } of this.touched)for (const s of this.touched)D(s.items, e, i);
                this.touched = null, D(document.documentElement, this.clsDragState);
            },
            insert (t, e) {
                $(this.items, this.clsItem);
                const i = ()=>e ? li(e, t) : L(this.target, t);
                this.animate(i);
            },
            remove (t) {
                this.target.contains(t) && this.animate(()=>at(t));
            },
            getSortable (t) {
                do {
                    const e = this.$getComponent(t, "sortable");
                    if (e && (e === this || this.group !== !1 && e.group === this.group)) return e;
                }while (t = P(t));
            }
        }
    };
    let $o;
    function fl(t) {
        let e = Date.now();
        $o = setInterval(()=>{
            let { x: i, y: s } = t;
            s += document.scrollingElement.scrollTop;
            const n = (Date.now() - e) * .3;
            e = Date.now(), qt(document.elementFromPoint(i, t.y)).reverse().some((o)=>{
                let { scrollTop: r, scrollHeight: a } = o;
                const { top: l, bottom: h, height: u } = lt(o);
                if (l < s && l + 35 > s) r -= n;
                else if (h > s && h - 35 < s) r += n;
                else return;
                if (r > 0 && r < a - u) return o.scrollTop = r, !0;
            });
        }, 15);
    }
    function pl() {
        clearInterval($o);
    }
    function gl(t, e) {
        let i;
        if (R(e, "li", "tr")) {
            i = k("<div>"), L(i, e.cloneNode(!0).children);
            for (const s of e.getAttributeNames())p(i, s, e.getAttribute(s));
        } else i = e.cloneNode(!0);
        return L(t, i), c(i, "margin", "0", "important"), c(i, {
            boxSizing: "border-box",
            width: e.offsetWidth,
            height: e.offsetHeight,
            padding: c(e, "padding")
        }), it(i.firstElementChild, it(e.firstElementChild)), i;
    }
    function ml(t, e) {
        return t[bt(t, (i)=>ii(e, w(i)))];
    }
    function vl(t, e, i, s, n, o) {
        if (!B(t).length) return;
        const r = w(e);
        if (!o) return wl(t, i) || n < r.top + r.height / 2 ? e : e.nextElementSibling;
        const a = w(i), l = yo([
            r.top,
            r.bottom
        ], [
            a.top,
            a.bottom
        ]), [h, u, d, f] = l ? [
            s,
            "width",
            "left",
            "right"
        ] : [
            n,
            "height",
            "top",
            "bottom"
        ], v = a[u] < r[u] ? r[u] - a[u] : 0;
        return a[d] < r[d] ? v && h < r[d] + v ? !1 : e.nextElementSibling : v && h > r[f] - v ? !1 : e;
    }
    function wl(t, e) {
        const i = B(t).length === 1;
        i && L(t, e);
        const s = B(t), n = s.some((o, r)=>{
            const a = w(o);
            return s.slice(r + 1).some((l)=>{
                const h = w(l);
                return !yo([
                    a.left,
                    a.right
                ], [
                    h.left,
                    h.right
                ]);
            });
        });
        return i && at(e), n;
    }
    function yo(t, e) {
        return t[1] > e[0] && e[1] > t[0];
    }
    var ko = {
        props: {
            pos: String,
            offset: null,
            flip: Boolean,
            shift: Boolean,
            inset: Boolean
        },
        data: {
            pos: `bottom-${V ? "right" : "left"}`,
            offset: !1,
            flip: !0,
            shift: !0,
            inset: !1
        },
        connected () {
            this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = m([
                "top",
                "bottom"
            ], this.dir) ? "y" : "x";
        },
        methods: {
            positionAt (t, e, i) {
                let s = [
                    this.getPositionOffset(t),
                    this.getShiftOffset(t)
                ];
                const n = [
                    this.flip && "flip",
                    this.shift && "shift"
                ], o = {
                    element: [
                        this.inset ? this.dir : fi(this.dir),
                        this.align
                    ],
                    target: [
                        this.dir,
                        this.align
                    ]
                };
                if (this.axis === "y") {
                    for(const l in o)o[l].reverse();
                    s.reverse(), n.reverse();
                }
                const r = bl(t), a = w(t);
                c(t, {
                    top: -a.height,
                    left: -a.width
                }), fn(t, e, {
                    attach: o,
                    offset: s,
                    boundary: i,
                    placement: n,
                    viewportOffset: this.getViewportOffset(t)
                }), r();
            },
            getPositionOffset (t = this.$el) {
                return U(this.offset === !1 ? c(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (m([
                    "left",
                    "top"
                ], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
            },
            getShiftOffset (t = this.$el) {
                return this.align === "center" ? 0 : U(c(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (m([
                    "left",
                    "top"
                ], this.align) ? 1 : -1);
            },
            getViewportOffset (t) {
                return U(c(t, "--uk-position-viewport-offset"));
            }
        }
    };
    function bl(t) {
        const e = Ot(t), { scrollTop: i } = e;
        return ()=>{
            i !== e.scrollTop && (e.scrollTop = i);
        };
    }
    var xl = {
        mixins: [
            je,
            Vt,
            ko
        ],
        data: {
            pos: "top",
            animation: [
                "uk-animation-scale-up"
            ],
            duration: 100,
            cls: "uk-active"
        },
        connected () {
            $l(this.$el);
        },
        disconnected () {
            this.hide();
        },
        methods: {
            show () {
                if (this.isToggled(this.tooltip || null)) return;
                const { delay: t = 0, title: e } = kl(this.$options);
                if (!e) return;
                const i = p(this.$el, "title"), s = b(this.$el, [
                    "blur",
                    Me
                ], (o)=>!yt(o) && this.hide());
                this.reset = ()=>{
                    p(this.$el, {
                        title: i,
                        "aria-describedby": null
                    }), s();
                };
                const n = Xt(this);
                p(this.$el, {
                    title: null,
                    "aria-describedby": n
                }), clearTimeout(this.showTimer), this.showTimer = setTimeout(()=>this._show(e, n), t);
            },
            async hide () {
                var t;
                T(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, !1, !1), (t = this.reset) == null || t.call(this), at(this.tooltip), this.tooltip = null);
            },
            async _show (t, e) {
                this.tooltip = L(this.container, `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`), b(this.tooltip, "toggled", (i, s)=>{
                    if (!s) return;
                    const n = ()=>this.positionAt(this.tooltip, this.$el);
                    n();
                    const [o, r] = yl(this.tooltip, this.$el, this.pos);
                    this.origin = this.axis === "y" ? `${fi(o)}-${r}` : `${r}-${fi(o)}`;
                    const a = [
                        H(document, `keydown ${ft}`, this.hide, !1, (l)=>l.type === ft && !this.$el.contains(l.target) || l.type === "keydown" && l.keyCode === _.ESC),
                        b([
                            document,
                            ...Ut(this.$el)
                        ], "scroll", n, {
                            passive: !0
                        })
                    ];
                    H(this.tooltip, "hide", ()=>a.forEach((l)=>l()), {
                        self: !0
                    });
                }), await this.toggleElement(this.tooltip, !0) || this.hide();
            }
        },
        events: {
            [`focus ${he} ${ft}`] (t) {
                (!yt(t) || t.type === ft) && this.show();
            }
        }
    };
    function $l(t) {
        ni(t) || p(t, "tabindex", "0");
    }
    function yl(t, e, [i, s]) {
        const n = I(t), o = I(e), r = [
            [
                "left",
                "right"
            ],
            [
                "top",
                "bottom"
            ]
        ];
        for (const l of r){
            if (n[l[0]] >= o[l[1]]) {
                i = l[1];
                break;
            }
            if (n[l[1]] <= o[l[0]]) {
                i = l[0];
                break;
            }
        }
        return s = (m(r[0], i) ? r[1] : r[0]).find((l)=>n[l] === o[l]) || "center", [
            i,
            s
        ];
    }
    function kl(t) {
        const { el: e, id: i, data: s } = t;
        return [
            "delay",
            "title"
        ].reduce((n, o)=>({
                [o]: X(e, o),
                ...n
            }), {
            ...ce(X(e, i), [
                "title"
            ]),
            ...s
        });
    }
    var Sl = {
        mixins: [
            yi
        ],
        i18n: {
            invalidMime: "Invalid File Type: %s",
            invalidName: "Invalid File Name: %s",
            invalidSize: "Invalid File Size: %s Kilobytes Max"
        },
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },
        data: {
            allow: !1,
            clsDragover: "uk-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: A,
            beforeAll: A,
            beforeSend: A,
            complete: A,
            completeAll: A,
            error: A,
            fail: A,
            load: A,
            loadEnd: A,
            loadStart: A,
            progress: A
        },
        events: {
            change (t) {
                T(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
            },
            drop (t) {
                _i(t);
                const e = t.dataTransfer;
                e != null && e.files && (D(this.$el, this.clsDragover), this.upload(e.files));
            },
            dragenter (t) {
                _i(t);
            },
            dragover (t) {
                _i(t), $(this.$el, this.clsDragover);
            },
            dragleave (t) {
                _i(t), D(this.$el, this.clsDragover);
            }
        },
        methods: {
            async upload (t) {
                if (t = It(t), !t.length) return;
                g(this.$el, "upload", [
                    t
                ]);
                for (const s of t){
                    if (this.maxSize && this.maxSize * 1e3 < s.size) {
                        this.fail(this.t("invalidSize", this.maxSize));
                        return;
                    }
                    if (this.allow && !So(this.allow, s.name)) {
                        this.fail(this.t("invalidName", this.allow));
                        return;
                    }
                    if (this.mime && !So(this.mime, s.type)) {
                        this.fail(this.t("invalidMime", this.mime));
                        return;
                    }
                }
                this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
                const e = Il(t, this.concurrent), i = async (s)=>{
                    const n = new FormData;
                    s.forEach((o)=>n.append(this.name, o));
                    for(const o in this.params)n.append(o, this.params[o]);
                    try {
                        const o = await Cl(this.url, {
                            data: n,
                            method: this.method,
                            responseType: this.type,
                            beforeSend: (r)=>{
                                const { xhr: a } = r;
                                b(a.upload, "progress", this.progress);
                                for (const l of [
                                    "loadStart",
                                    "load",
                                    "loadEnd",
                                    "abort"
                                ])b(a, l.toLowerCase(), this[l]);
                                return this.beforeSend(r);
                            }
                        });
                        this.complete(o), e.length ? await i(e.shift()) : this.completeAll(o);
                    } catch (o) {
                        this.error(o);
                    }
                };
                await i(e.shift());
            }
        }
    };
    function So(t, e) {
        return e.match(new RegExp(`^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}$`, "i"));
    }
    function Il(t, e) {
        const i = [];
        for(let s = 0; s < t.length; s += e)i.push(t.slice(s, s + e));
        return i;
    }
    function _i(t) {
        t.preventDefault(), t.stopPropagation();
    }
    function Cl(t, e) {
        const i = {
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest,
            beforeSend: A,
            responseType: "",
            ...e
        };
        return Promise.resolve().then(()=>i.beforeSend(i)).then(()=>El(t, i));
    }
    function El(t, e) {
        return new Promise((i, s)=>{
            const { xhr: n } = e;
            for(const o in e)if (o in n) try {
                n[o] = e[o];
            } catch  {}
            n.open(e.method.toUpperCase(), t);
            for(const o in e.headers)n.setRequestHeader(o, e.headers[o]);
            b(n, "load", ()=>{
                n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(gt(Error(n.statusText), {
                    xhr: n,
                    status: n.status
                }));
            }), b(n, "error", ()=>s(gt(Error("Network Error"), {
                    xhr: n
                }))), b(n, "timeout", ()=>s(gt(Error("Network Timeout"), {
                    xhr: n
                }))), n.send(e.data);
        });
    }
    var Tl = Object.freeze({
        __proto__: null,
        Countdown: Hr,
        Filter: ea,
        Lightbox: Va,
        LightboxPanel: to,
        Notification: Ga,
        Parallax: sl,
        Slider: al,
        SliderParallax: wo,
        Slideshow: ul,
        SlideshowParallax: wo,
        Sortable: dl,
        Tooltip: xl,
        Upload: Sl
    });
    function Pl(t) {
        re && window.MutationObserver && (document.body ? requestAnimationFrame(()=>Io(t)) : new MutationObserver((e, i)=>{
            document.body && (Io(t), i.disconnect());
        }).observe(document.documentElement, {
            childList: !0
        }));
    }
    function Io(t) {
        g(document, "uikit:init", t), document.body && kt(document.body, Co), new MutationObserver((e)=>e.forEach(_l)).observe(document, {
            subtree: !0,
            childList: !0
        }), new MutationObserver((e)=>e.forEach(Al)).observe(document, {
            subtree: !0,
            attributes: !0
        }), t._initialized = !0;
    }
    function _l({ addedNodes: t, removedNodes: e }) {
        for (const i of t)kt(i, Co);
        for (const i of e)kt(i, Dl);
    }
    function Al({ target: t, attributeName: e }) {
        var i;
        const s = Eo(e);
        if (s) {
            if (Et(t, e)) {
                Ve(s, t);
                return;
            }
            (i = ki(t, s)) == null || i.$destroy();
        }
    }
    function Co(t) {
        const e = Gt(t);
        for(const i in Gt(t))Is(e[i]);
        for (const i of t.getAttributeNames()){
            const s = Eo(i);
            s && Ve(s, t);
        }
    }
    function Dl(t) {
        const e = Gt(t);
        for(const i in Gt(t))Cs(e[i]);
    }
    function Eo(t) {
        dt(t, "data-") && (t = t.slice(5));
        const e = fe[t];
        return e && (xt(e) ? e : e.options).name;
    }
    Wa(ut), ja(ut);
    var To = {
        mixins: [
            st,
            Vt
        ],
        props: {
            animation: Boolean,
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: !0,
            collapsible: !0,
            multiple: !1,
            clsOpen: "uk-open",
            toggle: "> .uk-accordion-title",
            content: "> .uk-accordion-content",
            offset: 0
        },
        computed: {
            items: ({ targets: t }, e)=>z(t, e),
            toggles ({ toggle: t }) {
                return this.items.map((e)=>k(t, e));
            },
            contents ({ content: t }) {
                return this.items.map((e)=>{
                    var i;
                    return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || k(t, e);
                });
            }
        },
        watch: {
            items (t, e) {
                if (e || y(t, this.clsOpen)) return;
                const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                i && this.toggle(i, !1);
            },
            toggles () {
                this.$emit();
            },
            contents (t) {
                for (const e of t){
                    const i = y(this.items.find((s)=>s.contains(e)), this.clsOpen);
                    Ai(e, !i);
                }
                this.$emit();
            }
        },
        observe: He(),
        events: [
            {
                name: "click keydown",
                delegate () {
                    return `${this.targets} ${this.$props.toggle}`;
                },
                async handler (t) {
                    var e;
                    t.type === "keydown" && t.keyCode !== _.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = Ml(t.target), await this.toggle(Tt(this.toggles, t.current)), this._off());
                }
            },
            {
                name: "shown hidden",
                self: !0,
                delegate () {
                    return this.targets;
                },
                handler () {
                    this.$emit();
                }
            }
        ],
        update () {
            const t = Ce(this.items, `.${this.clsOpen}`);
            for(const e in this.items){
                const i = this.toggles[e], s = this.contents[e];
                if (!i || !s) continue;
                i.id = Xt(this, i), s.id = Xt(this, s);
                const n = m(t, this.items[e]);
                p(i, {
                    role: R(i, "a") ? "button" : null,
                    "aria-controls": s.id,
                    "aria-expanded": n,
                    "aria-disabled": !this.collapsible && t.length < 2 && n
                }), p(s, {
                    role: "region",
                    "aria-labelledby": i.id
                }), R(s, "ul") && p(B(s), "role", "presentation");
            }
        },
        methods: {
            toggle (t, e) {
                t = this.items[ot(t, this.items)];
                let i = [
                    t
                ];
                const s = Ce(this.items, `.${this.clsOpen}`);
                if (!this.multiple && !m(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && m(s, t))) return Promise.all(i.map((n)=>this.toggleElement(n, !m(s, n), (o, r)=>{
                        if (j(o, this.clsOpen, r), e === !1 || !this.animation) {
                            Ai(k(this.content, o), !r);
                            return;
                        }
                        return Ol(o, r, this);
                    })));
            }
        }
    };
    function Ai(t, e) {
        t && (t.hidden = e);
    }
    async function Ol(t, e, { content: i, duration: s, velocity: n, transition: o }) {
        var r;
        i = ((r = t._wrapper) == null ? void 0 : r.firstElementChild) || k(i, t), t._wrapper || (t._wrapper = ui(i, "<div>"));
        const a = t._wrapper;
        c(a, "overflow", "hidden");
        const l = S(c(a, "height"));
        await O.cancel(a), Ai(i, !1);
        const h = zt([
            "marginTop",
            "marginBottom"
        ], (d)=>c(i, d)) + w(i).height, u = l / h;
        s = (n * h + s) * (e ? 1 - u : u), c(a, "height", l), await O.start(a, {
            height: e ? h : 0
        }, s, o), Ae(i), delete t._wrapper, e || Ai(i, !0);
    }
    function Ml(t) {
        const e = Ot(t, !0);
        let i;
        return function s() {
            i = requestAnimationFrame(()=>{
                const { top: n } = w(t);
                n < 0 && (e.scrollTop += n), s();
            });
        }(), ()=>requestAnimationFrame(()=>cancelAnimationFrame(i));
    }
    var Bl = {
        mixins: [
            st,
            Vt
        ],
        args: "animation",
        props: {
            animation: Boolean,
            close: String
        },
        data: {
            animation: !0,
            selClose: ".uk-alert-close",
            duration: 150
        },
        events: {
            name: "click",
            delegate () {
                return this.selClose;
            },
            handler (t) {
                t.preventDefault(), this.close();
            }
        },
        methods: {
            async close () {
                await this.toggleElement(this.$el, !1, Nl), this.$destroy(!0);
            }
        }
    };
    function Nl(t, e, { duration: i, transition: s, velocity: n }) {
        const o = S(c(t, "height"));
        return c(t, "height", o), O.start(t, {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderTop: 0,
            borderBottom: 0,
            opacity: 0
        }, n * o + i, s);
    }
    var Po = {
        args: "autoplay",
        props: {
            automute: Boolean,
            autoplay: Boolean
        },
        data: {
            automute: !1,
            autoplay: !0
        },
        connected () {
            this.autoplay === "inview" && !Et(this.$el, "preload") && (this.$el.preload = "none"), R(this.$el, "iframe") && !Et(this.$el, "allow") && (this.$el.allow = "autoplay"), this.automute && rn(this.$el);
        },
        observe: [
            Fe({
                filter: ({ $el: t, autoplay: e })=>e && an(t),
                handler ([{ isIntersecting: t }]) {
                    document.fullscreenElement || (t ? nn(this.$el) : on(this.$el));
                },
                args: {
                    intersecting: !1
                },
                options: ({ $el: t, autoplay: e })=>({
                        root: e === "inview" ? null : P(t)
                    })
            })
        ]
    }, zl = {
        mixins: [
            Po
        ],
        props: {
            width: Number,
            height: Number
        },
        data: {
            automute: !0
        },
        events: {
            "load loadedmetadata" () {
                this.$emit("resize");
            }
        },
        observe: ct({
            target: ({ $el: t })=>[
                    _o(t) || P(t)
                ],
            filter: ({ $el: t })=>!Ao(t)
        }),
        update: {
            read () {
                if (Ao(this.$el)) return;
                const { ratio: t, cover: e } = ji, { $el: i, width: s, height: n } = this;
                let o = {
                    width: s,
                    height: n
                };
                if (!s || !n) {
                    const h = {
                        width: i.naturalWidth || i.videoWidth || i.clientWidth,
                        height: i.naturalHeight || i.videoHeight || i.clientHeight
                    };
                    s ? o = t(h, "width", s) : n ? o = t(h, "height", n) : o = h;
                }
                const { offsetHeight: r, offsetWidth: a } = _o(i) || P(i), l = e(o, {
                    width: a + (a % 2 ? 1 : 0),
                    height: r + (r % 2 ? 1 : 0)
                });
                return !l.width || !l.height ? !1 : l;
            },
            write ({ height: t, width: e }) {
                c(this.$el, {
                    height: t,
                    width: e
                });
            },
            events: [
                "resize"
            ]
        }
    };
    function _o(t) {
        for(; t = P(t);)if (c(t, "position") !== "static") return t;
    }
    function Ao(t) {
        return R(t, "img", "video");
    }
    let Z;
    var Do = {
        mixins: [
            je,
            ko,
            Vt
        ],
        args: "pos",
        props: {
            mode: "list",
            toggle: Boolean,
            boundary: Boolean,
            boundaryX: Boolean,
            boundaryY: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            stretch: Boolean,
            delayShow: Number,
            delayHide: Number,
            autoUpdate: Boolean,
            clsDrop: String,
            animateOut: Boolean,
            bgScroll: Boolean,
            closeOnScroll: Boolean
        },
        data: {
            mode: [
                "click",
                "hover"
            ],
            toggle: "- *",
            boundary: !1,
            boundaryX: !1,
            boundaryY: !1,
            target: !1,
            targetX: !1,
            targetY: !1,
            stretch: !1,
            delayShow: 0,
            delayHide: 800,
            autoUpdate: !0,
            clsDrop: !1,
            animateOut: !1,
            bgScroll: !0,
            animation: [
                "uk-animation-fade"
            ],
            cls: "uk-open",
            container: !1,
            closeOnScroll: !1
        },
        computed: {
            boundary ({ boundary: t, boundaryX: e, boundaryY: i }, s) {
                return [
                    J(e || t, s) || window,
                    J(i || t, s) || window
                ];
            },
            target ({ target: t, targetX: e, targetY: i }, s) {
                return e || (e = t || this.targetEl), i || (i = t || this.targetEl), [
                    e === !0 ? window : J(e, s),
                    i === !0 ? window : J(i, s)
                ];
            }
        },
        created () {
            this.tracker = new Qs;
        },
        beforeConnect () {
            this.clsDrop = this.$props.clsDrop || `uk-${this.$options.name}`;
        },
        connected () {
            $(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = Ll(this)), this._style = Hi(this.$el.style, [
                "width",
                "height"
            ]);
        },
        disconnected () {
            this.isActive() && (this.hide(!1), Z = null), c(this.$el, this._style);
        },
        observe: He({
            target: ({ toggle: t, $el: e })=>J(t, e),
            targets: ({ $el: t })=>t
        }),
        events: [
            {
                name: "click",
                delegate () {
                    return ".uk-drop-close";
                },
                handler (t) {
                    t.preventDefault(), this.hide(!1);
                }
            },
            {
                name: "click",
                delegate () {
                    return 'a[href*="#"]';
                },
                handler ({ defaultPrevented: t, current: e }) {
                    const { hash: i } = e;
                    !t && i && ne(e) && !this.$el.contains(k(i)) && this.hide(!1);
                }
            },
            {
                name: "beforescroll",
                handler () {
                    this.hide(!1);
                }
            },
            {
                name: "toggle",
                self: !0,
                handler (t, e) {
                    t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1);
                }
            },
            {
                name: "toggleshow",
                self: !0,
                handler (t, e) {
                    t.preventDefault(), this.show(e == null ? void 0 : e.$el);
                }
            },
            {
                name: "togglehide",
                self: !0,
                handler (t) {
                    t.preventDefault(), T(this.$el, ":focus,:hover") || this.hide();
                }
            },
            {
                name: `${he} focusin`,
                filter () {
                    return m(this.mode, "hover");
                },
                handler (t) {
                    yt(t) || this.clearTimers();
                }
            },
            {
                name: `${Me} focusout`,
                filter () {
                    return m(this.mode, "hover");
                },
                handler (t) {
                    !yt(t) && t.relatedTarget && this.hide();
                }
            },
            {
                name: "toggled",
                self: !0,
                handler (t, e) {
                    e && (this.clearTimers(), this.position());
                }
            },
            {
                name: "show",
                self: !0,
                handler () {
                    Z = this, this.tracker.init(), p(this.targetEl, "aria-expanded", !0);
                    const t = [
                        Wl(this),
                        jl(this),
                        ql(this),
                        this.autoUpdate && Oo(this),
                        this.closeOnScroll && Rl(this)
                    ];
                    H(this.$el, "hide", ()=>t.forEach((e)=>e && e()), {
                        self: !0
                    }), this.bgScroll || H(this.$el, "hidden", On(this.$el), {
                        self: !0
                    });
                }
            },
            {
                name: "beforehide",
                self: !0,
                handler: "clearTimers"
            },
            {
                name: "hide",
                handler ({ target: t }) {
                    if (this.$el !== t) {
                        Z = Z === null && this.$el.contains(t) && this.isToggled() ? this : Z;
                        return;
                    }
                    Z = this.isActive() ? null : Z, this.tracker.cancel(), p(this.targetEl, "aria-expanded", null);
                }
            }
        ],
        update: {
            write () {
                this.isToggled() && !y(this.$el, this.clsEnter) && this.position();
            }
        },
        methods: {
            show (t = this.targetEl, e = !0) {
                if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
                    if (Z) {
                        if (e && Z.isDelaying) {
                            this.showTimer = setTimeout(()=>T(t, ":hover") && this.show(), 10);
                            return;
                        }
                        let i;
                        for(; Z && i !== Z && !Z.$el.contains(this.$el);)i = Z, Z.hide(!1, !1);
                    }
                    this.container && P(this.$el) !== this.container && L(this.container, this.$el), this.showTimer = setTimeout(()=>this.toggleElement(this.$el, !0), e && this.delayShow || 0);
                }
            },
            hide (t = !0, e = !0) {
                const i = ()=>this.toggleElement(this.$el, !1, this.animateOut && e);
                this.clearTimers(), this.isDelayedHide = t, this.isDelaying = Fl(this.$el).some((s)=>this.tracker.movesTo(s)), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
            },
            clearTimers () {
                clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1;
            },
            isActive () {
                return Z === this;
            },
            position () {
                D(this.$el, "uk-drop-stack"), c(this.$el, this._style), this.$el.hidden = !0;
                const t = this.target.map((n)=>Hl(this.$el, n)), e = this.getViewportOffset(this.$el), i = [
                    [
                        0,
                        [
                            "x",
                            "width",
                            "left",
                            "right"
                        ]
                    ],
                    [
                        1,
                        [
                            "y",
                            "height",
                            "top",
                            "bottom"
                        ]
                    ]
                ];
                for (const [n, [o, r]] of i)this.axis !== o && m([
                    o,
                    !0
                ], this.stretch) && c(this.$el, {
                    [r]: Math.min(I(this.boundary[n])[r], t[n][r] - 2 * e),
                    [`overflow-${o}`]: "auto"
                });
                const s = t[0].width - 2 * e;
                this.$el.hidden = !1, c(this.$el, "maxWidth", ""), this.$el.offsetWidth > s && $(this.$el, "uk-drop-stack"), c(this.$el, "maxWidth", s), this.positionAt(this.$el, this.target, this.boundary);
                for (const [n, [o, r, a, l]] of i)if (this.axis === o && m([
                    o,
                    !0
                ], this.stretch)) {
                    const h = Math.abs(this.getPositionOffset()), u = I(this.target[n]), d = I(this.$el);
                    c(this.$el, {
                        [r]: (u[a] > d[a] ? u[this.inset ? l : a] - Math.max(I(this.boundary[n])[a], t[n][a] + e) : Math.min(I(this.boundary[n])[l], t[n][l] - e) - u[this.inset ? a : l]) - h,
                        [`overflow-${o}`]: "auto"
                    }), this.positionAt(this.$el, this.target, this.boundary);
                }
            }
        }
    };
    function Fl(t) {
        const e = [];
        return kt(t, (i)=>c(i, "position") !== "static" && e.push(i)), e;
    }
    function Hl(t, e) {
        return lt(Ut(e).find((i)=>i.contains(t)));
    }
    function Ll(t) {
        const { $el: e } = t.$create("toggle", J(t.toggle, t.$el), {
            target: t.$el,
            mode: t.mode
        });
        return p(e, "aria-haspopup", !0), e;
    }
    function Wl(t) {
        const e = ()=>t.$emit(), i = [
            os(e),
            Be(Ut(t.$el).concat(t.target), e)
        ];
        return ()=>i.map((s)=>s.disconnect());
    }
    function Oo(t, e = ()=>t.$emit()) {
        return b([
            document,
            ...Ut(t.$el)
        ], "scroll", e, {
            passive: !0
        });
    }
    function jl(t) {
        return b(document, "keydown", (e)=>{
            e.keyCode === _.ESC && t.hide(!1);
        });
    }
    function Rl(t) {
        return Oo(t, ()=>t.hide(!1));
    }
    function ql(t) {
        return b(document, ft, ({ target: e })=>{
            t.$el.contains(e) || H(document, `${Dt} ${gi} scroll`, ({ defaultPrevented: i, type: s, target: n })=>{
                !i && s === Dt && e === n && !(t.targetEl && Ws(e, t.targetEl)) && t.hide(!1);
            }, !0);
        });
    }
    var Mo = {
        mixins: [
            st,
            je
        ],
        props: {
            align: String,
            clsDrop: String,
            boundary: Boolean,
            dropbar: Boolean,
            dropbarAnchor: Boolean,
            duration: Number,
            mode: Boolean,
            offset: Boolean,
            stretch: Boolean,
            delayShow: Boolean,
            delayHide: Boolean,
            target: Boolean,
            targetX: Boolean,
            targetY: Boolean,
            animation: Boolean,
            animateOut: Boolean,
            closeOnScroll: Boolean
        },
        data: {
            align: V ? "right" : "left",
            clsDrop: "uk-dropdown",
            clsDropbar: "uk-dropnav-dropbar",
            boundary: !0,
            dropbar: !1,
            dropbarAnchor: !1,
            duration: 200,
            container: !1,
            selNavItem: "> li > a, > ul > li > a"
        },
        computed: {
            dropbarAnchor: ({ dropbarAnchor: t }, e)=>J(t, e) || e,
            dropbar ({ dropbar: t }) {
                return t ? (t = this._dropbar || J(t, this.$el) || k(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = k("<div></div>"))) : null;
            },
            dropContainer (t, e) {
                return this.container || e;
            },
            dropdowns ({ clsDrop: t }, e) {
                var i;
                const s = z(`.${t}`, e);
                if (this.dropContainer !== e) for (const n of z(`.${t}`, this.dropContainer)){
                    const o = (i = this.getDropdown(n)) == null ? void 0 : i.targetEl;
                    !m(s, n) && o && this.$el.contains(o) && s.push(n);
                }
                return s;
            },
            items ({ selNavItem: t }, e) {
                return z(t, e);
            }
        },
        watch: {
            dropbar (t) {
                $(t, "uk-dropbar", "uk-dropbar-top", this.clsDropbar, `uk-${this.$options.name}-dropbar`);
            },
            dropdowns () {
                this.initializeDropdowns();
            }
        },
        connected () {
            this.initializeDropdowns();
        },
        disconnected () {
            at(this._dropbar), delete this._dropbar;
        },
        events: [
            {
                name: "mouseover focusin",
                delegate () {
                    return this.selNavItem;
                },
                handler ({ current: t }) {
                    const e = this.getActive();
                    e && m(e.mode, "hover") && e.targetEl && !t.contains(e.targetEl) && !e.isDelaying && e.hide(!1);
                }
            },
            {
                name: "keydown",
                self: !0,
                delegate () {
                    return this.selNavItem;
                },
                handler (t) {
                    var e;
                    const { current: i, keyCode: s } = t, n = this.getActive();
                    s === _.DOWN && (n == null ? void 0 : n.targetEl) === i && (t.preventDefault(), (e = k(Ie, n.$el)) == null || e.focus()), Bo(t, this.items, n);
                }
            },
            {
                name: "keydown",
                el () {
                    return this.dropContainer;
                },
                delegate () {
                    return `.${this.clsDrop}`;
                },
                handler (t) {
                    var e;
                    const { current: i, keyCode: s } = t;
                    if (!m(this.dropdowns, i)) return;
                    const n = this.getActive();
                    let o = -1;
                    if (s === _.HOME ? o = 0 : s === _.END ? o = "last" : s === _.UP ? o = "previous" : s === _.DOWN ? o = "next" : s === _.ESC && ((e = n.targetEl) == null || e.focus()), ~o) {
                        t.preventDefault();
                        const r = z(Ie, i);
                        r[ot(o, r, bt(r, (a)=>T(a, ":focus")))].focus();
                    }
                    Bo(t, this.items, n);
                }
            },
            {
                name: "mouseleave",
                el () {
                    return this.dropbar;
                },
                filter () {
                    return this.dropbar;
                },
                handler () {
                    const t = this.getActive();
                    t && m(t.mode, "hover") && !this.dropdowns.some((e)=>T(e, ":hover")) && t.hide();
                }
            },
            {
                name: "beforeshow",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler ({ target: t }) {
                    this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && hi(this.dropbarAnchor, this.dropbar), $(t, `${this.clsDrop}-dropbar`));
                }
            },
            {
                name: "show",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler ({ target: t }) {
                    if (!this.isDropbarDrop(t)) return;
                    const e = this.getDropdown(t), i = ()=>{
                        const s = Math.max(...Ee(t, `.${this.clsDrop}`).concat(t).map((n)=>I(n).bottom));
                        I(this.dropbar, {
                            left: I(this.dropbar).left,
                            top: this.getDropbarOffset(e.getPositionOffset())
                        }), this.transitionTo(s - I(this.dropbar).top + S(c(t, "marginBottom")), t);
                    };
                    this._observer = Be([
                        e.$el,
                        ...e.target
                    ], i), i();
                }
            },
            {
                name: "beforehide",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler (t) {
                    const e = this.getActive();
                    T(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && m(e.mode, "hover") && e.isDelayedHide && !this.items.some((i)=>e.targetEl !== i && T(i, ":focus")) && t.preventDefault();
                }
            },
            {
                name: "hide",
                el () {
                    return this.dropContainer;
                },
                filter () {
                    return this.dropbar;
                },
                handler ({ target: t }) {
                    var e;
                    if (!this.isDropbarDrop(t)) return;
                    (e = this._observer) == null || e.disconnect();
                    const i = this.getActive();
                    (!i || i.$el === t) && this.transitionTo(0);
                }
            }
        ],
        methods: {
            getActive () {
                var t;
                return m(this.dropdowns, (t = Z) == null ? void 0 : t.$el) && Z;
            },
            async transitionTo (t, e) {
                const { dropbar: i } = this, s = it(i);
                if (e = s < t && e, await O.cancel([
                    e,
                    i
                ]), e) {
                    const n = I(e).top - I(i).top - s;
                    n > 0 && c(e, "transitionDelay", `${n / t * this.duration}ms`);
                }
                c(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), it(i, s), await Promise.all([
                    O.start(i, {
                        height: t
                    }, this.duration),
                    O.start(e, {
                        clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
                    }, this.duration).finally(()=>c(e, {
                            clipPath: "",
                            transitionDelay: ""
                        }))
                ]).catch(A);
            },
            getDropdown (t) {
                return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
            },
            isDropbarDrop (t) {
                return m(this.dropdowns, t) && y(t, this.clsDrop);
            },
            getDropbarOffset (t) {
                const { $el: e, target: i, targetY: s } = this, { top: n, height: o } = I(J(s || i || e, e));
                return n + o + t;
            },
            initializeDropdowns () {
                this.$create("drop", this.dropdowns.filter((t)=>!this.getDropdown(t)), {
                    ...this.$props,
                    flip: !1,
                    shift: !0,
                    pos: `bottom-${this.align}`,
                    boundary: this.boundary === !0 ? this.$el : this.boundary
                });
            }
        }
    };
    function Bo(t, e, i) {
        var s, n, o;
        const { current: r, keyCode: a } = t;
        let l = -1;
        a === _.HOME ? l = 0 : a === _.END ? l = "last" : a === _.LEFT ? l = "previous" : a === _.RIGHT ? l = "next" : a === _.TAB && ((s = i.targetEl) == null || s.focus(), (n = i.hide) == null || n.call(i, !1)), ~l && (t.preventDefault(), (o = i.hide) == null || o.call(i, !1), e[ot(l, e, e.indexOf(i.targetEl || r))].focus());
    }
    var Ul = {
        mixins: [
            st
        ],
        args: "target",
        props: {
            target: Boolean
        },
        data: {
            target: !1
        },
        computed: {
            input: (t, e)=>k(Se, e),
            state () {
                return this.input.nextElementSibling;
            },
            target ({ target: t }, e) {
                return t && (t === !0 && P(this.input) === e && this.input.nextElementSibling || k(t, e));
            }
        },
        update () {
            var t;
            const { target: e, input: i } = this;
            if (!e) return;
            let s;
            const n = Ui(e) ? "value" : "textContent", o = e[n], r = (t = i.files) != null && t[0] ? i.files[0].name : T(i, "select") && (s = z("option", i).filter((a)=>a.selected)[0]) ? s.textContent : i.value;
            o !== r && (e[n] = r);
        },
        events: [
            {
                name: "change",
                handler () {
                    this.$emit();
                }
            },
            {
                name: "reset",
                el () {
                    return this.$el.closest("form");
                },
                handler () {
                    this.$emit();
                }
            }
        ]
    }, Vl = {
        extends: kn,
        mixins: [
            st
        ],
        name: "grid",
        props: {
            masonry: Boolean,
            parallax: String,
            parallaxStart: String,
            parallaxEnd: String,
            parallaxJustify: Boolean
        },
        data: {
            margin: "uk-grid-margin",
            clsStack: "uk-grid-stack",
            masonry: !1,
            parallax: 0,
            parallaxStart: 0,
            parallaxEnd: 0,
            parallaxJustify: !1
        },
        connected () {
            this.masonry && $(this.$el, "uk-flex-top", "uk-flex-wrap-top");
        },
        observe: Le({
            filter: ({ parallax: t, parallaxJustify: e })=>t || e
        }),
        update: [
            {
                write ({ rows: t }) {
                    j(this.$el, this.clsStack, !t.some((e)=>e.length > 1));
                },
                events: [
                    "resize"
                ]
            },
            {
                read (t) {
                    const { rows: e } = t;
                    let { masonry: i, parallax: s, parallaxJustify: n, margin: o } = this;
                    if (s = Math.max(0, U(s)), !(i || s || n) || No(e) || e[0].some((x, C)=>e.some((M)=>M[C] && M[C].offsetWidth !== x.offsetWidth))) return t.translates = t.scrollColumns = !1;
                    let r = Gl(e, o), a, l;
                    i ? [a, l] = Yl(e, r, i === "next") : a = Xl(e);
                    const h = a.map((x)=>zt(x, "offsetHeight") + r * (x.length - 1)), u = Math.max(0, ...h);
                    let d, f, v;
                    return (s || n) && (d = h.map((x, C)=>n ? u - x + s : s / (C % 2 || 8)), n || (s = Math.max(...h.map((x, C)=>x + d[C] - u))), f = U(this.parallaxStart, "height", this.$el, !0), v = U(this.parallaxEnd, "height", this.$el, !0)), {
                        columns: a,
                        translates: l,
                        scrollColumns: d,
                        parallaxStart: f,
                        parallaxEnd: v,
                        padding: s,
                        height: l ? u : ""
                    };
                },
                write ({ height: t, padding: e }) {
                    c(this.$el, "paddingBottom", e || ""), t !== !1 && c(this.$el, "height", t);
                },
                events: [
                    "resize"
                ]
            },
            {
                read ({ rows: t, scrollColumns: e, parallaxStart: i, parallaxEnd: s }) {
                    return e && No(t) ? !1 : {
                        scrolled: e ? wi(this.$el, i, s) : !1
                    };
                },
                write ({ columns: t, scrolled: e, scrollColumns: i, translates: s }) {
                    !e && !s || t.forEach((n, o)=>n.forEach((r, a)=>{
                            let [l, h] = s && s[o][a] || [
                                0,
                                0
                            ];
                            e && (h += e * i[o]), c(r, "transform", `translate(${l}px, ${h}px)`);
                        }));
                },
                events: [
                    "scroll",
                    "resize"
                ]
            }
        ]
    };
    function No(t) {
        return t.flat().some((e)=>c(e, "position") === "absolute");
    }
    function Yl(t, e, i) {
        const s = [], n = [], o = Array(t[0].length).fill(0);
        let r = 0;
        for (let a of t){
            V && (a = a.reverse());
            let l = 0;
            for(const h in a){
                const { offsetWidth: u, offsetHeight: d } = a[h], f = i ? h : o.indexOf(Math.min(...o));
                _s(s, f, a[h]), _s(n, f, [
                    (f - h) * u * (V ? -1 : 1),
                    o[f] - r
                ]), o[f] += d + e, l = Math.max(l, d);
            }
            r += l + e;
        }
        return [
            s,
            n
        ];
    }
    function Gl(t, e) {
        const i = t.flat().find((s)=>y(s, e));
        return S(i ? c(i, "marginTop") : c(t[0][0], "paddingLeft"));
    }
    function Xl(t) {
        const e = [];
        for (const i of t)for(const s in i)_s(e, s, i[s]);
        return e;
    }
    function _s(t, e, i) {
        t[e] || (t[e] = []), t[e].push(i);
    }
    var Jl = {
        args: "target",
        props: {
            target: String,
            row: Boolean
        },
        data: {
            target: "> *",
            row: !0
        },
        computed: {
            elements: ({ target: t }, e)=>z(t, e)
        },
        observe: ct({
            target: ({ $el: t, elements: e })=>e.reduce((i, s)=>i.concat(s, ...s.children), [
                    t
                ])
        }),
        events: {
            name: "loadingdone",
            el () {
                return document.fonts;
            },
            handler () {
                this.$emit("resize");
            }
        },
        update: {
            read () {
                return {
                    rows: (this.row ? ms(this.elements) : [
                        this.elements
                    ]).map(Kl)
                };
            },
            write ({ rows: t }) {
                for (const { heights: e, elements: i } of t)i.forEach((s, n)=>c(s, "minHeight", e[n]));
            },
            events: [
                "resize"
            ]
        }
    };
    function Kl(t) {
        if (t.length < 2) return {
            heights: [
                ""
            ],
            elements: t
        };
        let e = t.map(Zl);
        const i = Math.max(...e);
        return {
            heights: t.map((s, n)=>e[n].toFixed(2) === i.toFixed(2) ? "" : i),
            elements: t
        };
    }
    function Zl(t) {
        const e = Hi(t.style, [
            "display",
            "minHeight"
        ]);
        q(t) || c(t, "display", "block", "important"), c(t, "minHeight", "");
        const i = w(t).height - De(t, "height", "content-box");
        return c(t, e), i;
    }
    var Ql = {
        args: "target",
        props: {
            target: String
        },
        data: {
            target: ""
        },
        computed: {
            target: ({ target: t }, e)=>J(t, e)
        },
        observe: ct({
            target: ({ target: t })=>t
        }),
        update: {
            read () {
                return {
                    height: this.target.offsetHeight
                };
            },
            write ({ height: t }) {
                c(this.$el, {
                    minHeight: t
                });
            },
            events: [
                "resize"
            ]
        }
    }, th = {
        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },
        data: {
            expand: !1,
            offsetTop: !1,
            offsetBottom: !1,
            minHeight: 0
        },
        observe: [
            gs({
                filter: ({ expand: t })=>t
            }),
            ct({
                target: ({ $el: t })=>qt(t)
            })
        ],
        update: {
            read () {
                if (!q(this.$el)) return !1;
                let t = "";
                const e = De(this.$el, "height", "content-box"), { body: i, scrollingElement: s } = document, n = Ot(this.$el), { height: o } = lt(n === i ? s : n), r = s === n || i === n;
                if (t = `calc(${r ? "100vh" : `${o}px`}`, this.expand) {
                    const a = w(n).height - w(this.$el).height;
                    t += ` - ${a}px`;
                } else {
                    if (this.offsetTop) {
                        if (r) {
                            const a = this.offsetTop === !0 ? this.$el : J(this.offsetTop, this.$el), l = Rt(a)[0] - Rt(n)[0];
                            t += l > 0 && l < o / 2 ? ` - ${l}px` : "";
                        } else t += ` - ${c(n, "paddingTop")}`;
                    }
                    this.offsetBottom === !0 ? t += ` - ${w(this.$el.nextElementSibling).height}px` : vt(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && te(this.offsetBottom, "px") ? t += ` - ${S(this.offsetBottom)}px` : N(this.offsetBottom) && (t += ` - ${w(J(this.offsetBottom, this.$el)).height}px`);
                }
                return t += `${e ? ` - ${e}px` : ""})`, {
                    minHeight: t
                };
            },
            write ({ minHeight: t }) {
                c(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
            },
            events: [
                "resize"
            ]
        }
    }, eh = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>', ih = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>', sh = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', nh = '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>', oh = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>', rh = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', ah = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>', lh = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>', hh = '<svg width="40" height="40" viewBox="0 0 40 40"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>', ch = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>', uh = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>', zo = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>', dh = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>', fh = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>', ph = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>', gh = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>', mh = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>', vh = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>', wh = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', bh = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>', Fo = {
        args: "src",
        props: {
            width: Number,
            height: Number,
            ratio: Number
        },
        data: {
            ratio: 1
        },
        connected () {
            this.svg = this.getSvg().then((t)=>{
                if (!this._connected) return;
                const e = xh(t, this.$el);
                return this.svgEl && e !== this.svgEl && at(this.svgEl), $h.call(this, e, t), this.svgEl = e;
            }, A);
        },
        disconnected () {
            this.svg.then((t)=>{
                this._connected || (qi(this.$el) && (this.$el.hidden = !1), at(t), this.svgEl = null);
            }), this.svg = null;
        },
        methods: {
            async getSvg () {}
        }
    };
    function xh(t, e) {
        if (qi(e) || R(e, "canvas")) {
            e.hidden = !0;
            const s = e.nextElementSibling;
            return Ho(t, s) ? s : hi(e, t);
        }
        const i = e.lastElementChild;
        return Ho(t, i) ? i : L(e, t);
    }
    function Ho(t, e) {
        return R(t, "svg") && R(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function $h(t, e) {
        const i = [
            "width",
            "height"
        ];
        let s = i.map((o)=>this[o]);
        s.some((o)=>o) || (s = i.map((o)=>p(e, o)));
        const n = p(e, "viewBox");
        n && !s.some((o)=>o) && (s = n.split(" ").slice(2)), s.forEach((o, r)=>p(t, i[r], S(o) * this.ratio || null));
    }
    const Di = {
        spinner: wh,
        totop: bh,
        marker: nh,
        "close-icon": eh,
        "close-large": ih,
        "drop-parent-icon": sh,
        "nav-parent-icon": rh,
        "nav-parent-icon-large": oh,
        "navbar-parent-icon": ah,
        "navbar-toggle-icon": lh,
        "overlay-icon": hh,
        "pagination-next": ch,
        "pagination-previous": uh,
        "search-icon": zo,
        "search-large": dh,
        "search-navbar": fh,
        "search-toggle-icon": zo,
        "slidenav-next": gh,
        "slidenav-next-large": ph,
        "slidenav-previous": vh,
        "slidenav-previous-large": mh
    }, As = {
        install: Ah,
        mixins: [
            Fo
        ],
        args: "icon",
        props: {
            icon: String
        },
        isIcon: !0,
        beforeConnect () {
            $(this.$el, "uk-icon");
        },
        methods: {
            async getSvg () {
                const t = Oh(this.icon);
                if (!t) throw "Icon not found.";
                return t;
            }
        }
    }, Kt = {
        args: !1,
        extends: As,
        data: (t)=>({
                icon: Mt(t.constructor.options.name)
            }),
        beforeConnect () {
            $(this.$el, this.$options.id);
        }
    }, yh = {
        extends: Kt,
        beforeConnect () {
            const t = this.$props.icon;
            this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
        }
    }, kh = {
        extends: Kt,
        mixins: [
            yi
        ],
        i18n: {
            toggle: "Open Search",
            submit: "Submit Search"
        },
        beforeConnect () {
            const t = y(this.$el, "uk-search-toggle") || y(this.$el, "uk-navbar-toggle");
            if (this.icon = t ? "search-toggle-icon" : y(this.$el, "uk-search-icon") && oi(this.$el, ".uk-search-large") ? "search-large" : oi(this.$el, ".uk-search-navbar") ? "search-navbar" : this.$props.icon, !Et(this.$el, "aria-label")) {
                if (t) {
                    const e = this.t("toggle");
                    p(this.$el, "aria-label", e);
                } else {
                    const e = this.$el.closest("a,button");
                    if (e) {
                        const i = this.t("submit");
                        p(e, "aria-label", i);
                    }
                }
            }
        }
    }, Sh = {
        extends: Kt,
        beforeConnect () {
            p(this.$el, "role", "status");
        },
        methods: {
            async getSvg () {
                const t = await As.methods.getSvg.call(this);
                return this.ratio !== 1 && c(k("circle", t), "strokeWidth", 1 / this.ratio), t;
            }
        }
    }, Zt = {
        extends: Kt,
        mixins: [
            yi
        ],
        beforeConnect () {
            const t = this.$el.closest("a,button");
            p(t, "role", this.role !== null && R(t, "a") ? "button" : this.role);
            const e = this.t("label");
            e && !Et(t, "aria-label") && p(t, "aria-label", e);
        }
    }, Lo = {
        extends: Zt,
        beforeConnect () {
            $(this.$el, "uk-slidenav");
            const t = this.$props.icon;
            this.icon = y(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
        }
    }, Ih = {
        extends: Zt,
        i18n: {
            label: "Open menu"
        }
    }, Ch = {
        extends: Zt,
        i18n: {
            label: "Close"
        },
        beforeConnect () {
            this.icon = `close-${y(this.$el, "uk-close-large") ? "large" : "icon"}`;
        }
    }, Eh = {
        extends: Zt,
        i18n: {
            label: "Open"
        }
    }, Th = {
        extends: Zt,
        i18n: {
            label: "Back to top"
        }
    }, Ph = {
        extends: Zt,
        i18n: {
            label: "Next page"
        },
        data: {
            role: null
        }
    }, _h = {
        extends: Zt,
        i18n: {
            label: "Previous page"
        },
        data: {
            role: null
        }
    }, Oi = {};
    function Ah(t) {
        t.icon.add = (e, i)=>{
            const s = N(e) ? {
                [e]: i
            } : e;
            Nt(s, (n, o)=>{
                Di[o] = n, delete Oi[o];
            }), t._initialized && kt(document.body, (n)=>Nt(t.getComponents(n), (o)=>{
                    o.$options.isIcon && o.icon in s && o.$reset();
                }));
        };
    }
    const Dh = {
        twitter: "x"
    };
    function Oh(t) {
        return t = Dh[t] || t, Di[t] ? (Oi[t] || (Oi[t] = k((Di[Mh(t)] || Di[t]).trim())), Oi[t].cloneNode(!0)) : null;
    }
    function Mh(t) {
        return V ? Fi(Fi(t, "left", "right"), "previous", "next") : t;
    }
    var Bh = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            sources: String,
            margin: String,
            target: String,
            loading: String
        },
        data: {
            dataSrc: "",
            sources: !1,
            margin: "50%",
            target: !1,
            loading: "lazy"
        },
        connected () {
            this.loading !== "lazy" ? this.load() : Os(this.$el) && (this.$el.loading = "lazy", Ds(this.$el));
        },
        disconnected () {
            this.img && (this.img.onload = ""), delete this.img;
        },
        observe: Fe({
            target: ({ $el: t, $props: e })=>[
                    t,
                    ...Te(e.target, t)
                ],
            handler (t, e) {
                this.load(), e.disconnect();
            },
            options: ({ margin: t })=>({
                    rootMargin: t
                }),
            filter: ({ loading: t })=>t === "lazy"
        }),
        methods: {
            load () {
                if (this.img) return this.img;
                const t = Os(this.$el) ? this.$el : zh(this.$el, this.dataSrc, this.sources);
                return ke(t, "loading"), Ds(this.$el, t.currentSrc), this.img = t;
            }
        }
    };
    function Ds(t, e) {
        if (Os(t)) {
            const i = P(t);
            (R(i, "picture") ? B(i) : [
                t
            ]).forEach((n)=>Wo(n, n));
        } else e && !m(t.style.backgroundImage, e) && (c(t, "backgroundImage", `url(${Gi(e)})`), g(t, Ht("load", !1)));
    }
    const Nh = [
        "data-src",
        "data-srcset",
        "sizes"
    ];
    function Wo(t, e) {
        for (const i of Nh){
            const s = X(t, i);
            s && p(e, i.replace(/^(data-)+/, ""), s);
        }
    }
    function zh(t, e, i) {
        const s = new Image;
        return Fh(s, i), Wo(t, s), s.onload = ()=>{
            Ds(t, s.currentSrc);
        }, p(s, "src", e), s;
    }
    function Fh(t, e) {
        if (e = Hh(e), e.length) {
            const i = Wt("<picture>");
            for (const s of e){
                const n = Wt("<source>");
                p(n, s), L(i, n);
            }
            L(i, t);
        }
    }
    function Hh(t) {
        if (!t) return [];
        if (dt(t, "[")) try {
            t = JSON.parse(t);
        } catch  {
            t = [];
        }
        else t = ce(t);
        return Q(t) || (t = [
            t
        ]), t.filter((e)=>!ti(e));
    }
    function Os(t) {
        return R(t, "img");
    }
    var Lh = {
        props: {
            target: String,
            selActive: String
        },
        data: {
            target: !1,
            selActive: !1
        },
        computed: {
            target: ({ target: t }, e)=>t ? z(t, e) : [
                    e
                ]
        },
        observe: [
            ps({
                target: ({ target: t })=>t,
                options: {
                    attributes: !0,
                    attributeFilter: [
                        "class"
                    ],
                    attributeOldValue: !0
                }
            }),
            {
                target: ({ target: t })=>t,
                observe: (t, e)=>{
                    const i = Be([
                        ...t,
                        document.documentElement
                    ], e), s = [
                        b(document, "scroll itemshown itemhidden", e, {
                            passive: !0,
                            capture: !0
                        }),
                        b(document, "show hide transitionstart", (n)=>(e(), i.observe(n.target))),
                        b(document, "shown hidden transitionend transitioncancel", (n)=>(e(), i.unobserve(n.target)))
                    ];
                    return {
                        disconnect () {
                            i.disconnect(), s.map((n)=>n());
                        }
                    };
                },
                handler () {
                    this.$emit();
                }
            }
        ],
        update: {
            read () {
                for (const t of this.target)si(t, "uk-light,uk-dark", !this.selActive || T(t, this.selActive) ? Wh(t) : "");
            }
        }
    };
    function Wh(t) {
        const { left: e, top: i, height: s, width: n } = w(t);
        let o;
        for (const r of [
            .25,
            .5,
            .75
        ]){
            const a = t.ownerDocument.elementsFromPoint(Math.max(0, e) + n * r, Math.max(0, i) + s / 2);
            for (const l of a){
                if (t.contains(l) || l.closest('[class*="-leave"]') && a.some((u)=>l !== u && T(u, '[class*="-enter"]'))) continue;
                const h = c(l, "--uk-inverse");
                if (h) {
                    if (h === o) return `uk-${h}`;
                    o = h;
                    break;
                }
            }
        }
        return o ? `uk-${o}` : "";
    }
    var jh = {
        mixins: [
            st,
            Si
        ],
        props: {
            fill: String
        },
        data: {
            fill: "",
            clsWrapper: "uk-leader-fill",
            clsHide: "uk-leader-hide",
            attrFill: "data-fill"
        },
        computed: {
            fill: ({ fill: t }, e)=>t || c(e, "--uk-leader-fill-content")
        },
        connected () {
            [this.wrapper] = es(this.$el, `<span class="${this.clsWrapper}">`);
        },
        disconnected () {
            Ae(this.wrapper.childNodes);
        },
        observe: ct(),
        update: {
            read () {
                return {
                    width: Math.trunc(this.$el.offsetWidth / 2),
                    fill: this.fill,
                    hide: !this.matchMedia
                };
            },
            write ({ width: t, fill: e, hide: i }) {
                j(this.wrapper, this.clsHide, i), p(this.wrapper, this.attrFill, new Array(t).join(e));
            },
            events: [
                "resize"
            ]
        }
    }, Rh = {
        install: qh,
        mixins: [
            $s
        ],
        data: {
            clsPage: "uk-modal-page",
            selPanel: ".uk-modal-dialog",
            selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
        },
        events: [
            {
                name: "fullscreenchange webkitendfullscreen",
                capture: !0,
                handler (t) {
                    R(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
                }
            },
            {
                name: "show",
                self: !0,
                handler () {
                    y(this.panel, "uk-margin-auto-vertical") ? $(this.$el, "uk-flex") : c(this.$el, "display", "block"), it(this.$el);
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    c(this.$el, "display", ""), D(this.$el, "uk-flex");
                }
            }
        ]
    };
    function qh({ modal: t }) {
        t.dialog = function(i, s) {
            const n = t(`<div class="uk-modal"> <div class="uk-modal-dialog">${i}</div> </div>`, {
                stack: !0,
                role: "alertdialog",
                ...s
            });
            return n.show(), b(n.$el, "hidden", async ()=>{
                await Promise.resolve(), n.$destroy(!0);
            }, {
                self: !0
            }), n;
        }, t.alert = function(i, s) {
            return e(({ i18n: n })=>`<div class="uk-modal-body">${N(i) ? i : Lt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${n.ok}</button> </div>`, s);
        }, t.confirm = function(i, s) {
            return e(({ i18n: n })=>`<form> <div class="uk-modal-body">${N(i) ? i : Lt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${n.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${n.ok}</button> </div> </form>`, s, ()=>Promise.reject());
        }, t.prompt = function(i, s, n) {
            const o = e(({ i18n: l })=>`<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${N(i) ? i : Lt(i)}</label> <input class="uk-input" value="${s || ""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${l.cancel}</button> <button class="uk-button uk-button-primary">${l.ok}</button> </div> </form>`, n, ()=>null, ()=>a.value), { $el: r } = o.dialog, a = k("input", r);
            return b(r, "show", ()=>a.select()), o;
        }, t.i18n = {
            ok: "Ok",
            cancel: "Cancel"
        };
        function e(i, s, n = A, o = A) {
            s = {
                bgClose: !1,
                escClose: !0,
                ...s,
                i18n: {
                    ...t.i18n,
                    ...s == null ? void 0 : s.i18n
                }
            };
            const r = t.dialog(i(s), s);
            return gt(new Promise((a)=>{
                const l = b(r.$el, "hide", ()=>a(n()));
                b(r.$el, "submit", "form", (h)=>{
                    h.preventDefault(), a(o(r)), l(), r.hide();
                });
            }), {
                dialog: r
            });
        }
    }
    var Uh = {
        extends: To,
        data: {
            targets: "> .uk-parent",
            toggle: "> a",
            content: "> ul"
        }
    };
    const Ms = "uk-navbar-transparent";
    var Vh = {
        extends: Mo,
        props: {
            dropbarTransparentMode: Boolean
        },
        data: {
            clsDrop: "uk-navbar-dropdown",
            selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle",
            dropbarTransparentMode: !1
        },
        computed: {
            navbarContainer: (t, e)=>e.closest(".uk-navbar-container")
        },
        watch: {
            items () {
                const t = y(this.$el, "uk-navbar-justify"), e = z(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
                for (const i of e){
                    const s = t ? z(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", i).length : "";
                    c(i, "flexGrow", s);
                }
            }
        },
        events: [
            {
                name: "show",
                el () {
                    return this.dropContainer;
                },
                handler ({ target: t }) {
                    this.getTransparentMode(t) === "remove" && y(this.navbarContainer, Ms) && (D(this.navbarContainer, Ms), this._transparent = !0);
                }
            },
            {
                name: "hide",
                el () {
                    return this.dropContainer;
                },
                async handler () {
                    await Yh(), !this.getActive() && this._transparent && ($(this.navbarContainer, Ms), this._transparent = null);
                }
            }
        ],
        methods: {
            getTransparentMode (t) {
                if (!this.navbarContainer) return;
                if (this.dropbar && this.isDropbarDrop(t)) return this.dropbarTransparentMode;
                const e = this.getDropdown(t);
                if (e && y(t, "uk-dropbar")) return e.inset ? "behind" : "remove";
            },
            getDropbarOffset (t) {
                const { top: e, height: i } = I(this.navbarContainer);
                return e + (this.dropbarTransparentMode === "behind" ? 0 : i + t);
            }
        }
    };
    function Yh() {
        return new Promise((t)=>setTimeout(t));
    }
    var Gh = {
        mixins: [
            $s
        ],
        args: "mode",
        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean,
            swiping: Boolean
        },
        data: {
            mode: "slide",
            flip: !1,
            overlay: !1,
            clsPage: "uk-offcanvas-page",
            clsContainer: "uk-offcanvas-container",
            selPanel: ".uk-offcanvas-bar",
            clsFlip: "uk-offcanvas-flip",
            clsContainerAnimation: "uk-offcanvas-container-animation",
            clsSidebarAnimation: "uk-offcanvas-bar-animation",
            clsMode: "uk-offcanvas",
            clsOverlay: "uk-offcanvas-overlay",
            selClose: ".uk-offcanvas-close",
            container: !1,
            swiping: !0
        },
        computed: {
            clsFlip: ({ flip: t, clsFlip: e })=>t ? e : "",
            clsOverlay: ({ overlay: t, clsOverlay: e })=>t ? e : "",
            clsMode: ({ mode: t, clsMode: e })=>`${e}-${t}`,
            clsSidebarAnimation: ({ mode: t, clsSidebarAnimation: e })=>t === "none" || t === "reveal" ? "" : e,
            clsContainerAnimation: ({ mode: t, clsContainerAnimation: e })=>t !== "push" && t !== "reveal" ? "" : e,
            transitionElement ({ mode: t }) {
                return t === "reveal" ? P(this.panel) : this.panel;
            }
        },
        observe: yn({
            filter: ({ swiping: t })=>t
        }),
        update: {
            read () {
                this.isToggled() && !q(this.$el) && this.hide();
            },
            events: [
                "resize"
            ]
        },
        events: [
            {
                name: "touchmove",
                self: !0,
                passive: !1,
                filter () {
                    return this.overlay;
                },
                handler (t) {
                    t.cancelable && t.preventDefault();
                }
            },
            {
                name: "show",
                self: !0,
                handler () {
                    this.mode === "reveal" && !y(P(this.panel), this.clsMode) && (ui(this.panel, "<div>"), $(P(this.panel), this.clsMode));
                    const { body: t, scrollingElement: e } = document;
                    $(t, this.clsContainer, this.clsFlip), c(t, "touch-action", "pan-y pinch-zoom"), c(this.$el, "display", "block"), c(this.panel, "maxWidth", e.clientWidth), $(this.$el, this.clsOverlay), $(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), it(t), $(t, this.clsContainerAnimation), this.clsContainerAnimation && Xh();
                }
            },
            {
                name: "hide",
                self: !0,
                handler () {
                    D(document.body, this.clsContainerAnimation), c(document.body, "touch-action", "");
                }
            },
            {
                name: "hidden",
                self: !0,
                handler () {
                    this.clsContainerAnimation && Jh(), this.mode === "reveal" && Ae(this.panel), D(this.panel, this.clsSidebarAnimation, this.clsMode), D(this.$el, this.clsOverlay), c(this.$el, "display", ""), c(this.panel, "maxWidth", ""), D(document.body, this.clsContainer, this.clsFlip);
                }
            },
            {
                name: "swipeLeft swipeRight",
                handler (t) {
                    this.isToggled() && te(t.type, "Left") ^ this.flip && this.hide();
                }
            }
        ]
    };
    function Xh() {
        jo().content += ",user-scalable=0";
    }
    function Jh() {
        const t = jo();
        t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function jo() {
        return k('meta[name="viewport"]', document.head) || L(document.head, '<meta name="viewport">');
    }
    var Kh = {
        mixins: [
            st
        ],
        props: {
            selContainer: String,
            selContent: String,
            minHeight: Number
        },
        data: {
            selContainer: ".uk-modal",
            selContent: ".uk-modal-dialog",
            minHeight: 150
        },
        computed: {
            container: ({ selContainer: t }, e)=>e.closest(t),
            content: ({ selContent: t }, e)=>e.closest(t)
        },
        observe: ct({
            target: ({ container: t, content: e })=>[
                    t,
                    e
                ]
        }),
        update: {
            read () {
                return !this.content || !this.container || !q(this.$el) ? !1 : {
                    max: Math.max(this.minHeight, it(this.container) - (w(this.content).height - it(this.$el)))
                };
            },
            write ({ max: t }) {
                c(this.$el, {
                    minHeight: this.minHeight,
                    maxHeight: t
                });
            },
            events: [
                "resize"
            ]
        }
    }, Zh = {
        props: [
            "width",
            "height"
        ],
        connected () {
            $(this.$el, "uk-responsive-width"), c(this.$el, "aspectRatio", `${this.width}/${this.height}`);
        }
    }, Qh = {
        props: {
            offset: Number
        },
        data: {
            offset: 0
        },
        connected () {
            tc(this);
        },
        disconnected () {
            ec(this);
        },
        methods: {
            async scrollTo (t) {
                t = t && k(t) || document.body, g(this.$el, "beforescroll", [
                    this,
                    t
                ]) && (await un(t, {
                    offset: this.offset
                }), g(this.$el, "scrolled", [
                    this,
                    t
                ]));
            }
        }
    };
    const Ke = new Set;
    function tc(t) {
        Ke.size || b(document, "click", Ro), Ke.add(t);
    }
    function ec(t) {
        Ke.delete(t), Ke.size || Pt(document, "click", Ro);
    }
    function Ro(t) {
        if (!t.defaultPrevented) for (const e of Ke)e.$el.contains(t.target) && ne(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(Vi(e.$el)));
    }
    var ic = {
        args: "cls",
        props: {
            cls: String,
            target: String,
            hidden: Boolean,
            margin: String,
            repeat: Boolean,
            delay: Number
        },
        data: ()=>({
                cls: "",
                target: !1,
                hidden: !0,
                margin: "-1px",
                repeat: !1,
                delay: 0,
                inViewClass: "uk-scrollspy-inview"
            }),
        computed: {
            elements: ({ target: t }, e)=>t ? z(t, e) : [
                    e
                ]
        },
        watch: {
            elements (t) {
                this.hidden && c(Ce(t, `:not(.${this.inViewClass})`), "opacity", 0);
            }
        },
        connected () {
            this.elementData = new Map;
        },
        disconnected () {
            for (const [t, e] of this.elementData.entries())D(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
            delete this.elementData;
        },
        observe: Fe({
            target: ({ elements: t })=>t,
            handler (t) {
                const e = this.elementData;
                for (const { target: i, isIntersecting: s } of t){
                    e.has(i) || e.set(i, {
                        cls: X(i, "uk-scrollspy-class") || this.cls
                    });
                    const n = e.get(i);
                    !this.repeat && n.show || (n.show = s);
                }
                this.$emit();
            },
            options: ({ margin: t })=>({
                    rootMargin: t
                }),
            args: {
                intersecting: !1
            }
        }),
        update: [
            {
                write (t) {
                    for (const [e, i] of this.elementData.entries())i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(()=>new Promise((s)=>setTimeout(s, this.delay))).then(()=>{
                        this.toggle(e, !0), setTimeout(()=>{
                            i.queued = !1, this.$emit();
                        }, 300);
                    })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1);
                }
            }
        ],
        methods: {
            toggle (t, e) {
                var i;
                const s = this.elementData.get(t);
                if (s) {
                    if ((i = s.off) == null || i.call(s), c(t, "opacity", !e && this.hidden ? 0 : ""), j(t, this.inViewClass, e), j(t, s.cls), /\buk-animation-/.test(s.cls)) {
                        const n = ()=>Ri(t, "uk-animation-[\\w-]+");
                        e ? s.off = H(t, "animationcancel animationend", n, {
                            self: !0
                        }) : n();
                    }
                    g(t, e ? "inview" : "outview"), s.inview = e, this.$update(t);
                }
            }
        }
    }, sc = {
        props: {
            cls: String,
            closest: Boolean,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
        },
        data: {
            cls: "uk-active",
            closest: !1,
            scroll: !1,
            overflow: !0,
            offset: 0
        },
        computed: {
            links: (t, e)=>z('a[href*="#"]', e).filter((i)=>i.hash && ne(i)),
            elements ({ closest: t }) {
                return this.links.map((e)=>e.closest(t || "*"));
            }
        },
        watch: {
            links (t) {
                this.scroll && this.$create("scroll", t, {
                    offset: this.offset
                });
            }
        },
        observe: [
            Fe(),
            Le()
        ],
        update: [
            {
                read () {
                    const t = this.links.map(Vi).filter(Boolean), { length: e } = t;
                    if (!e || !q(this.$el)) return !1;
                    const i = Ot(t, !0), { scrollTop: s, scrollHeight: n } = i, o = lt(i), r = n - o.height;
                    let a = !1;
                    if (s === r) a = e - 1;
                    else {
                        for(let l = 0; l < t.length; l++){
                            const h = ls(t[l]), u = this.offset + (h ? I(h).height : 0);
                            if (I(t[l]).top - o.top - u > 0) break;
                            a = +l;
                        }
                        a === !1 && this.overflow && (a = 0);
                    }
                    return {
                        active: a
                    };
                },
                write ({ active: t }) {
                    const e = t !== !1 && !y(this.elements[t], this.cls);
                    this.links.forEach((i)=>i.blur());
                    for(let i = 0; i < this.elements.length; i++)j(this.elements[i], this.cls, +i === t);
                    e && g(this.$el, "active", [
                        t,
                        this.elements[t]
                    ]);
                },
                events: [
                    "scroll",
                    "resize"
                ]
            }
        ]
    }, nc = {
        mixins: [
            st,
            Si
        ],
        props: {
            position: String,
            top: null,
            bottom: null,
            start: null,
            end: null,
            offset: String,
            overflowFlip: Boolean,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            showOnUp: Boolean,
            targetOffset: Number
        },
        data: {
            position: "top",
            top: !1,
            bottom: !1,
            start: !1,
            end: !1,
            offset: 0,
            overflowFlip: !1,
            animation: "",
            clsActive: "uk-active",
            clsInactive: "",
            clsFixed: "uk-sticky-fixed",
            clsBelow: "uk-sticky-below",
            selTarget: "",
            showOnUp: !1,
            targetOffset: !1
        },
        computed: {
            target: ({ selTarget: t }, e)=>t && k(t, e) || e
        },
        connected () {
            this.start = qo(this.start || this.top), this.end = qo(this.end || this.bottom), this.placeholder = k("+ .uk-sticky-placeholder", this.$el) || k('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
        },
        beforeDisconnect () {
            this.isFixed && (this.hide(), D(this.target, this.clsInactive)), Uo(this.$el), at(this.placeholder), this.placeholder = null;
        },
        observe: [
            gs({
                handler () {
                    U("100vh", "height") !== this._data.viewport && this.$emit("resize");
                }
            }),
            Le({
                target: ()=>document.scrollingElement
            }),
            ct({
                target: ()=>document.scrollingElement,
                options: {
                    box: "content-box"
                }
            }),
            ct({
                target: ({ $el: t })=>t
            })
        ],
        events: [
            {
                name: "load hashchange popstate",
                el () {
                    return window;
                },
                filter () {
                    return this.targetOffset !== !1;
                },
                handler () {
                    const { scrollingElement: t } = document;
                    !location.hash || t.scrollTop === 0 || setTimeout(()=>{
                        const e = I(k(location.hash)), i = I(this.$el);
                        this.isFixed && Li(e, i) && (t.scrollTop = e.top - i.height - U(this.targetOffset, "height", this.placeholder) - U(this.offset, "height", this.placeholder));
                    });
                }
            },
            {
                name: "transitionstart",
                handler () {
                    this.transitionInProgress = H(this.$el, "transitionend transitioncancel", ()=>this.transitionInProgress = null);
                }
            }
        ],
        update: [
            {
                read ({ height: t, width: e, margin: i, sticky: s }) {
                    if (this.inactive = !this.matchMedia || !q(this.$el), this.inactive) return;
                    const n = this.isFixed && !this.transitionInProgress;
                    n && (Ns(this.target), this.hide()), this.active || ({ height: t, width: e } = I(this.$el), i = c(this.$el, "margin")), n && this.show();
                    const o = U("100vh", "height"), r = it(window), a = Math.max(0, document.scrollingElement.scrollHeight - o);
                    let l = this.position;
                    this.overflowFlip && t > o && (l = l === "top" ? "bottom" : "top");
                    const h = this.isFixed ? this.placeholder : this.$el;
                    let u = U(this.offset, "height", s ? this.$el : h);
                    l === "bottom" && (t < r || this.overflowFlip) && (u += r - t);
                    const d = this.overflowFlip ? 0 : Math.max(0, t + u - o), f = I(h).top, v = I(this.$el).height, x = (this.start === !1 ? f : Bs(this.start, this.$el, f)) - u, C = this.end === !1 ? a : Math.min(a, Bs(this.end, this.$el, f + t, !0) - v - u + d);
                    return s = a && !this.showOnUp && x + u === f && C === Math.min(a, Bs(!0, this.$el, 0, !0) - v - u + d) && c(P(this.$el), "overflowY") === "visible", {
                        start: x,
                        end: C,
                        offset: u,
                        overflow: d,
                        height: t,
                        elHeight: v,
                        width: e,
                        margin: i,
                        top: Rt(h)[0],
                        sticky: s,
                        viewport: o
                    };
                },
                write ({ height: t, width: e, margin: i, offset: s, sticky: n }) {
                    if ((this.inactive || n || !this.isFixed) && Uo(this.$el), this.inactive) return;
                    n && (t = e = i = 0, c(this.$el, {
                        position: "sticky",
                        top: s
                    }));
                    const { placeholder: o } = this;
                    c(o, {
                        height: t,
                        width: e,
                        margin: i
                    }), (P(o) !== P(this.$el) || n ^ Tt(o) < Tt(this.$el)) && ((n ? li : hi)(this.$el, o), o.hidden = !0);
                },
                events: [
                    "resize"
                ]
            },
            {
                read ({ scroll: t = 0, dir: e = "down", overflow: i, overflowScroll: s = 0, start: n, end: o, elHeight: r, height: a, sticky: l }) {
                    const h = document.scrollingElement.scrollTop, u = t <= h ? "down" : "up", d = this.isFixed ? this.placeholder : this.$el;
                    return {
                        dir: u,
                        prevDir: e,
                        scroll: h,
                        prevScroll: t,
                        below: h > I(d).top + (l ? Math.min(a, r) : a),
                        offsetParentTop: I(d.offsetParent).top,
                        overflowScroll: tt(s + tt(h, n, o) - tt(t, n, o), 0, i)
                    };
                },
                write (t, e) {
                    const i = e.has("scroll"), { initTimestamp: s = 0, dir: n, prevDir: o, scroll: r, prevScroll: a = 0, top: l, start: h, below: u } = t;
                    if (r < 0 || r === a && i || this.showOnUp && !i && !this.isFixed) return;
                    const d = Date.now();
                    if ((d - s > 300 || n !== o) && (t.initScroll = r, t.initTimestamp = d), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(a - r) <= 10)) {
                        if (this.inactive || r < h || this.showOnUp && (r <= h || n === "down" && i || n === "up" && !this.isFixed && !u)) {
                            if (!this.isFixed) {
                                At.inProgress(this.$el) && l > r && (At.cancel(this.$el), this.hide());
                                return;
                            }
                            if (this.animation && u) {
                                if (y(this.$el, "uk-animation-leave")) return;
                                At.out(this.$el, this.animation).then(()=>this.hide(), A);
                            } else this.hide();
                        } else this.isFixed ? this.update() : this.animation && u ? (this.show(), At.in(this.$el, this.animation).catch(A)) : (Ns(this.target), this.show());
                    }
                },
                events: [
                    "resize",
                    "resizeViewport",
                    "scroll"
                ]
            }
        ],
        methods: {
            show () {
                this.isFixed = !0, this.update(), this.placeholder.hidden = !1;
            },
            hide () {
                const { offset: t, sticky: e } = this._data;
                this.setActive(!1), D(this.$el, this.clsFixed, this.clsBelow), e ? c(this.$el, "top", t) : c(this.$el, {
                    position: "",
                    top: "",
                    width: "",
                    marginTop: ""
                }), this.placeholder.hidden = !0, this.isFixed = !1;
            },
            update () {
                let { width: t, scroll: e = 0, overflow: i, overflowScroll: s = 0, start: n, end: o, offset: r, offsetParentTop: a, sticky: l, below: h } = this._data;
                const u = n !== 0 || e > n;
                if (!l) {
                    let d = "fixed";
                    e > o && (r += o - a + s - i, d = "absolute"), c(this.$el, {
                        position: d,
                        width: t,
                        marginTop: 0
                    }, "important");
                }
                c(this.$el, "top", r - s), this.setActive(u), j(this.$el, this.clsBelow, h), $(this.$el, this.clsFixed);
            },
            setActive (t) {
                const e = this.active;
                this.active = t, t ? (si(this.target, this.clsInactive, this.clsActive), e !== t && g(this.$el, "active")) : (si(this.target, this.clsActive, this.clsInactive), e !== t && (Ns(this.target), g(this.$el, "inactive")));
            }
        }
    };
    function Bs(t, e, i, s) {
        if (!t) return 0;
        if (vt(t) || N(t) && t.match(/^-?\d/)) return i + U(t, "height", e, !0);
        {
            const n = t === !0 ? P(e) : J(t, e);
            return I(n).bottom - (s && n != null && n.contains(e) ? S(c(n, "paddingBottom")) : 0);
        }
    }
    function qo(t) {
        return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function Uo(t) {
        c(t, {
            position: "",
            top: "",
            marginTop: "",
            width: ""
        });
    }
    function Ns(t) {
        $(t, "uk-transition-disable"), requestAnimationFrame(()=>D(t, "uk-transition-disable"));
    }
    var oc = {
        mixins: [
            Fo
        ],
        args: "src",
        props: {
            src: String,
            icon: String,
            attributes: "list",
            strokeAnimation: Boolean
        },
        data: {
            strokeAnimation: !1
        },
        observe: [
            ps({
                async handler () {
                    const t = await this.svg;
                    t && Vo.call(this, t);
                },
                options: {
                    attributes: !0,
                    attributeFilter: [
                        "id",
                        "class",
                        "style"
                    ]
                }
            })
        ],
        async connected () {
            m(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
            const t = await this.svg;
            t && (Vo.call(this, t), this.strokeAnimation && hc(t));
        },
        methods: {
            async getSvg () {
                return R(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t)=>H(this.$el, "load", t)), ac(await rc(this.src), this.icon) || Promise.reject("SVG not found.");
            }
        }
    };
    function Vo(t) {
        const { $el: e } = this;
        $(t, p(e, "class"), "uk-svg");
        for(let i = 0; i < e.style.length; i++){
            const s = e.style[i];
            c(t, s, c(e, s));
        }
        for(const i in this.attributes){
            const [s, n] = this.attributes[i].split(":", 2);
            p(t, s, n);
        }
        this.$el.id || ke(t, "id");
    }
    const rc = rt(async (t)=>t ? dt(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function ac(t, e) {
        return e && m(t, "<symbol") && (t = lc(t)[e] || t), t = k(t.substr(t.indexOf("<svg"))), (t == null ? void 0 : t.hasChildNodes()) && t;
    }
    const Yo = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, lc = rt(function(t) {
        const e = {};
        Yo.lastIndex = 0;
        let i;
        for(; i = Yo.exec(t);)e[i[3]] = `<svg ${i[1]}svg>`;
        return e;
    });
    function hc(t) {
        const e = io(t);
        e && c(t, "--uk-animation-stroke", e);
    }
    const zs = ".uk-disabled *, .uk-disabled, [disabled]";
    var Go = {
        mixins: [
            Vt
        ],
        args: "connect",
        props: {
            connect: String,
            toggle: String,
            itemNav: String,
            active: Number,
            followFocus: Boolean,
            swiping: Boolean
        },
        data: {
            connect: "~.uk-switcher",
            toggle: "> * > :first-child",
            itemNav: !1,
            active: 0,
            cls: "uk-active",
            attrItem: "uk-switcher-item",
            selVertical: ".uk-nav",
            followFocus: !1,
            swiping: !0
        },
        computed: {
            connects: ({ connect: t }, e)=>Te(t, e),
            connectChildren () {
                return this.connects.map((t)=>B(t)).flat();
            },
            toggles: ({ toggle: t }, e)=>z(t, e),
            children (t, e) {
                return B(e).filter((i)=>this.toggles.some((s)=>i.contains(s)));
            }
        },
        watch: {
            connects (t) {
                this.swiping && c(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
            },
            connectChildren () {
                let t = Math.max(0, this.index());
                for (const e of this.connects)B(e).forEach((i, s)=>j(i, this.cls, s === t));
                this.$emit();
            },
            toggles (t) {
                this.$emit();
                const e = this.index();
                this.show(~e ? e : t[this.active] || t[0]);
            }
        },
        connected () {
            p(this.$el, "role", "tablist");
        },
        observe: [
            He({
                targets: ({ connectChildren: t })=>t
            }),
            yn({
                target: ({ connects: t })=>t,
                filter: ({ swiping: t })=>t
            })
        ],
        events: [
            {
                name: "click keydown",
                delegate () {
                    return this.toggle;
                },
                handler (t) {
                    !T(t.current, zs) && (t.type === "click" || t.keyCode === _.SPACE) && (t.preventDefault(), this.show(t.current));
                }
            },
            {
                name: "keydown",
                delegate () {
                    return this.toggle;
                },
                handler (t) {
                    const { current: e, keyCode: i } = t, s = T(this.$el, this.selVertical);
                    let n = i === _.HOME ? 0 : i === _.END ? "last" : i === _.LEFT && !s || i === _.UP && s ? "previous" : i === _.RIGHT && !s || i === _.DOWN && s ? "next" : -1;
                    if (~n) {
                        t.preventDefault();
                        const o = this.toggles.filter((a)=>!T(a, zs)), r = o[ot(n, o, o.indexOf(e))];
                        r.focus(), this.followFocus && this.show(r);
                    }
                }
            },
            {
                name: "click",
                el () {
                    return this.connects.concat(this.itemNav ? Te(this.itemNav, this.$el) : []);
                },
                delegate () {
                    return `[${this.attrItem}],[data-${this.attrItem}]`;
                },
                handler (t) {
                    t.target.closest("a,button") && (t.preventDefault(), this.show(X(t.current, this.attrItem)));
                }
            },
            {
                name: "swipeRight swipeLeft",
                filter () {
                    return this.swiping;
                },
                el () {
                    return this.connects;
                },
                handler ({ type: t }) {
                    this.show(te(t, "Left") ? "next" : "previous");
                }
            }
        ],
        update () {
            var t;
            p(this.connects, "role", "presentation"), p(B(this.$el), "role", "presentation");
            for(const e in this.toggles){
                const i = this.toggles[e], s = (t = this.connects[0]) == null ? void 0 : t.children[e];
                p(i, "role", "tab"), s && (i.id = Xt(this, i), s.id = Xt(this, s), p(i, "aria-controls", s.id), p(s, {
                    role: "tabpanel",
                    "aria-labelledby": i.id
                }));
            }
            p(this.$el, "aria-orientation", T(this.$el, this.selVertical) ? "vertical" : null);
        },
        methods: {
            index () {
                return bt(this.children, (t)=>y(t, this.cls));
            },
            show (t) {
                const e = this.toggles.filter((r)=>!T(r, zs)), i = this.index(), s = ot(!Qe(t) || m(e, t) ? t : 0, e, ot(this.toggles[i], e)), n = ot(e[s], this.toggles);
                this.children.forEach((r, a)=>{
                    j(r, this.cls, n === a), p(this.toggles[a], {
                        "aria-selected": n === a,
                        tabindex: n === a ? null : -1
                    });
                });
                const o = i >= 0 && i !== s;
                this.connects.forEach(async ({ children: r })=>{
                    const a = It(r).filter((l, h)=>h !== n && y(l, this.cls));
                    await this.toggleElement(a, !1, o), await this.toggleElement(r[n], !0, o);
                });
            }
        }
    }, cc = {
        mixins: [
            st
        ],
        extends: Go,
        props: {
            media: Boolean
        },
        data: {
            media: 960,
            attrItem: "uk-tab-item",
            selVertical: ".uk-tab-left,.uk-tab-right"
        },
        connected () {
            const t = y(this.$el, "uk-tab-left") ? "uk-tab-left" : y(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
            t && this.$create("toggle", this.$el, {
                cls: t,
                mode: "media",
                media: this.media
            });
        }
    };
    const uc = 32;
    var dc = {
        mixins: [
            Si,
            Vt
        ],
        args: "target",
        props: {
            href: String,
            target: null,
            mode: "list",
            queued: Boolean
        },
        data: {
            href: !1,
            target: !1,
            mode: "click",
            queued: !0
        },
        computed: {
            target ({ target: t }, e) {
                return t = Te(t || e.hash, e), t.length ? t : [
                    e
                ];
            }
        },
        connected () {
            m(this.mode, "media") || (ni(this.$el) || p(this.$el, "tabindex", "0"), !this.cls && R(this.$el, "a") && p(this.$el, "role", "button"));
        },
        observe: He({
            target: ({ target: t })=>t
        }),
        events: [
            {
                name: ft,
                filter () {
                    return m(this.mode, "hover");
                },
                handler (t) {
                    this._preventClick = null, !(!yt(t) || ie(this._showState) || this.$el.disabled) && (g(this.$el, "focus"), H(document, ft, ()=>g(this.$el, "blur"), !0, (e)=>!this.$el.contains(e.target)), m(this.mode, "click") && (this._preventClick = !0));
                }
            },
            {
                name: `mouseenter mouseleave ${he} ${Me} focus blur`,
                filter () {
                    return m(this.mode, "hover");
                },
                handler (t) {
                    if (yt(t) || this.$el.disabled) return;
                    const e = m([
                        "mouseenter",
                        he,
                        "focus"
                    ], t.type), i = this.isToggled(this.target);
                    if (!e && (!ie(this._showState) || t.type !== "blur" && T(this.$el, ":focus") || t.type === "blur" && T(this.$el, ":hover"))) {
                        i === this._showState && (this._showState = null);
                        return;
                    }
                    e && ie(this._showState) && i !== this._showState || (this._showState = e ? i : null, this.toggle(`toggle${e ? "show" : "hide"}`));
                }
            },
            {
                name: "keydown",
                filter () {
                    return m(this.mode, "click") && !R(this.$el, "input");
                },
                handler (t) {
                    t.keyCode === uc && (t.preventDefault(), this.$el.click());
                }
            },
            {
                name: "click",
                filter () {
                    return [
                        "click",
                        "hover"
                    ].some((t)=>m(this.mode, t));
                },
                handler (t) {
                    let e;
                    (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && T(this.target, e.hash))) && t.preventDefault(), !this._preventClick && m(this.mode, "click") && this.toggle();
                }
            },
            {
                name: "mediachange",
                filter () {
                    return m(this.mode, "media");
                },
                el () {
                    return this.target;
                },
                handler (t, e) {
                    e.matches ^ this.isToggled(this.target) && this.toggle();
                }
            }
        ],
        methods: {
            async toggle (t) {
                if (!g(this.target, t || "toggle", [
                    this
                ])) return;
                if (Et(this.$el, "aria-expanded") && p(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued) return this.toggleElement(this.target);
                const e = this.target.filter((s)=>y(s, this.clsLeave));
                if (e.length) {
                    for (const s of this.target){
                        const n = m(e, s);
                        this.toggleElement(s, n, n);
                    }
                    return;
                }
                const i = this.target.filter(this.isToggled);
                await this.toggleElement(i, !1) && await this.toggleElement(this.target.filter((s)=>!m(i, s)), !0);
            }
        }
    }, fc = Object.freeze({
        __proto__: null,
        Accordion: To,
        Alert: Bl,
        Close: Ch,
        Cover: zl,
        Drop: Do,
        DropParentIcon: Kt,
        Dropdown: Do,
        Dropnav: Mo,
        FormCustom: Ul,
        Grid: Vl,
        HeightMatch: Jl,
        HeightPlaceholder: Ql,
        HeightViewport: th,
        Icon: As,
        Img: Bh,
        Inverse: Lh,
        Leader: jh,
        Margin: kn,
        Marker: Eh,
        Modal: Rh,
        Nav: Uh,
        NavParentIcon: yh,
        Navbar: Vh,
        NavbarParentIcon: Kt,
        NavbarToggleIcon: Ih,
        Offcanvas: Gh,
        OverflowAuto: Kh,
        OverlayIcon: Kt,
        PaginationNext: Ph,
        PaginationPrevious: _h,
        Responsive: Zh,
        Scroll: Qh,
        Scrollspy: ic,
        ScrollspyNav: sc,
        SearchIcon: kh,
        SlidenavNext: Lo,
        SlidenavPrevious: Lo,
        Spinner: Sh,
        Sticky: nc,
        Svg: oc,
        Switcher: Go,
        Tab: cc,
        Toggle: dc,
        Totop: Th,
        Video: Po
    });
    return Nt(fc, (t, e)=>ut.component(e, t)), Pl(ut), Nt(Tl, (t, e)=>ut.component(e, t)), ut;
});

//# sourceMappingURL=index.895b0085.js.map
