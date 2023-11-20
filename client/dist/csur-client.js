var Ot = Object.defineProperty;
var Lt = (l, e, t) => e in l ? Ot(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var ye = (l, e, t) => (Lt(l, typeof e != "symbol" ? e + "" : e, t), t);
function we() {
}
function ut(l) {
  return l();
}
function Sl() {
  return /* @__PURE__ */ Object.create(null);
}
function ge(l) {
  l.forEach(ut);
}
function mt(l) {
  return typeof l == "function";
}
function pt(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function St(l) {
  return Object.keys(l).length === 0;
}
function _(l, e) {
  l.appendChild(e);
}
function ft(l, e, t) {
  const s = qt(l);
  if (!s.getElementById(e)) {
    const r = D("style");
    r.id = e, r.textContent = t, Nt(s, r);
  }
}
function qt(l) {
  if (!l)
    return document;
  const e = l.getRootNode ? l.getRootNode() : l.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : l.ownerDocument;
}
function Nt(l, e) {
  return _(
    /** @type {Document} */
    l.head || l,
    e
  ), e.sheet;
}
function B(l, e, t) {
  l.insertBefore(e, t || null);
}
function $(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function vl(l, e) {
  for (let t = 0; t < l.length; t += 1)
    l[t] && l[t].d(e);
}
function D(l) {
  return document.createElement(l);
}
function Y(l) {
  return document.createTextNode(l);
}
function F() {
  return Y(" ");
}
function jt() {
  return Y("");
}
function X(l, e, t, s) {
  return l.addEventListener(e, t, s), () => l.removeEventListener(e, t, s);
}
function x(l, e, t) {
  t == null ? l.removeAttribute(e) : l.getAttribute(e) !== t && l.setAttribute(e, t);
}
function Vt(l) {
  return Array.from(l.childNodes);
}
function Z(l, e) {
  e = "" + e, l.data !== e && (l.data = /** @type {string} */
  e);
}
function Ce(l, e) {
  l.value = e ?? "";
}
function el(l, e, t, s) {
  t == null ? l.style.removeProperty(e) : l.style.setProperty(e, t, s ? "important" : "");
}
function ql(l, e, t) {
  for (let s = 0; s < l.options.length; s += 1) {
    const r = l.options[s];
    if (r.__value === e) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (l.selectedIndex = -1);
}
function Gt(l) {
  const e = l.querySelector(":checked");
  return e && e.__value;
}
function Ut(l) {
  const e = {};
  return l.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let zl;
function qe(l) {
  zl = l;
}
const Be = [], ll = [];
let Fe = [];
const bl = [], Ht = /* @__PURE__ */ Promise.resolve();
let gl = !1;
function Yt() {
  gl || (gl = !0, Ht.then(fe));
}
function tl(l) {
  Fe.push(l);
}
function bt(l) {
  bl.push(l);
}
const wl = /* @__PURE__ */ new Set();
let Re = 0;
function fe() {
  if (Re !== 0)
    return;
  const l = zl;
  do {
    try {
      for (; Re < Be.length; ) {
        const e = Be[Re];
        Re++, qe(e), Wt(e.$$);
      }
    } catch (e) {
      throw Be.length = 0, Re = 0, e;
    }
    for (qe(null), Be.length = 0, Re = 0; ll.length; )
      ll.pop()();
    for (let e = 0; e < Fe.length; e += 1) {
      const t = Fe[e];
      wl.has(t) || (wl.add(t), t());
    }
    Fe.length = 0;
  } while (Be.length);
  for (; bl.length; )
    bl.pop()();
  gl = !1, wl.clear(), qe(l);
}
function Wt(l) {
  if (l.fragment !== null) {
    l.update(), ge(l.before_update);
    const e = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, e), l.after_update.forEach(tl);
  }
}
function Jt(l) {
  const e = [], t = [];
  Fe.forEach((s) => l.indexOf(s) === -1 ? e.push(s) : t.push(s)), t.forEach((s) => s()), Fe = e;
}
const Ke = /* @__PURE__ */ new Set();
let Te;
function sl() {
  Te = {
    r: 0,
    c: [],
    p: Te
    // parent group
  };
}
function rl() {
  Te.r || ge(Te.c), Te = Te.p;
}
function ae(l, e) {
  l && l.i && (Ke.delete(l), l.i(e));
}
function be(l, e, t, s) {
  if (l && l.o) {
    if (Ke.has(l))
      return;
    Ke.add(l), Te.c.push(() => {
      Ke.delete(l), s && (t && l.d(1), s());
    }), l.o(e);
  } else
    s && s();
}
function Ie(l) {
  return (l == null ? void 0 : l.length) !== void 0 ? l : Array.from(l);
}
function gt(l, e, t) {
  const s = l.$$.props[e];
  s !== void 0 && (l.$$.bound[s] = t, t(l.$$.ctx[s]));
}
function ht(l) {
  l && l.c();
}
function _l(l, e, t) {
  const { fragment: s, after_update: r } = l.$$;
  s && s.m(e, t), tl(() => {
    const n = l.$$.on_mount.map(ut).filter(mt);
    l.$$.on_destroy ? l.$$.on_destroy.push(...n) : ge(n), l.$$.on_mount = [];
  }), r.forEach(tl);
}
function Cl(l, e) {
  const t = l.$$;
  t.fragment !== null && (Jt(t.after_update), ge(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Xt(l, e) {
  l.$$.dirty[0] === -1 && (Be.push(l), Yt(), l.$$.dirty.fill(0)), l.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function kt(l, e, t, s, r, n, o = null, v = [-1]) {
  const a = zl;
  qe(l);
  const c = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: we,
    not_equal: r,
    bound: Sl(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Sl(),
    dirty: v,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  o && o(c.root);
  let y = !1;
  if (c.ctx = t ? t(l, e.props || {}, (d, u, ...i) => {
    const w = i.length ? i[0] : u;
    return c.ctx && r(c.ctx[d], c.ctx[d] = w) && (!c.skip_bound && c.bound[d] && c.bound[d](w), y && Xt(l, d)), u;
  }) : [], c.update(), y = !0, ge(c.before_update), c.fragment = s ? s(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Vt(e.target);
      c.fragment && c.fragment.l(d), d.forEach($);
    } else
      c.fragment && c.fragment.c();
    e.intro && ae(l.$$.fragment), _l(l, e.target, e.anchor), fe();
  }
  qe(a);
}
let xt;
typeof HTMLElement == "function" && (xt = class extends HTMLElement {
  constructor(e, t, s) {
    super();
    /** The Svelte component constructor */
    ye(this, "$$ctor");
    /** Slots */
    ye(this, "$$s");
    /** The Svelte component instance */
    ye(this, "$$c");
    /** Whether or not the custom element is connected */
    ye(this, "$$cn", !1);
    /** Component props data */
    ye(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ye(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ye(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    ye(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    ye(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, s) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, s);
  }
  removeEventListener(e, t, s) {
    if (super.removeEventListener(e, t, s), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(n) {
        return () => {
          let o;
          return {
            c: function() {
              o = D("slot"), n !== "default" && x(o, "name", n);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, y) {
              B(c, o, y);
            },
            d: function(c) {
              c && $(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const t = {}, s = Ut(this);
      for (const n of this.$$s)
        n in s && (t[n] = [e(n)]);
      for (const n of this.attributes) {
        const o = this.$$g_p(n.name);
        o in this.$$d || (this.$$d[o] = Qe(o, n.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$scope: {
            ctx: []
          }
        }
      });
      const r = () => {
        this.$$r = !0;
        for (const n in this.$$p_d)
          if (this.$$d[n] = this.$$c.$$.ctx[this.$$c.$$.props[n]], this.$$p_d[n].reflect) {
            const o = Qe(
              n,
              this.$$d[n],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const n in this.$$l)
        for (const o of this.$$l[n]) {
          const v = this.$$c.$on(n, o);
          this.$$l_u.set(o, v);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, s) {
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Qe(e, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Qe(l, e, t, s) {
  var n;
  const r = (n = t[l]) == null ? void 0 : n.type;
  if (e = r === "Boolean" && typeof e != "boolean" ? e != null : e, !s || !t[l])
    return e;
  if (s === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function zt(l, e, t, s, r, n) {
  let o = class extends xt {
    constructor() {
      super(l, t, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (v) => (e[v].attribute || v).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((v) => {
    Object.defineProperty(o.prototype, v, {
      get() {
        return this.$$c && v in this.$$c ? this.$$c[v] : this.$$d[v];
      },
      set(a) {
        var c;
        a = Qe(v, a, e), this.$$d[v] = a, (c = this.$$c) == null || c.$set({ [v]: a });
      }
    });
  }), s.forEach((v) => {
    Object.defineProperty(o.prototype, v, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[v];
      }
    });
  }), n && (o = n(o)), l.element = /** @type {any} */
  o, o;
}
class _t {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ye(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ye(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Cl(this, 1), this.$destroy = we;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!mt(t))
      return we;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return s.push(t), () => {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !St(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Kt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Kt);
let Ne, ul, ml, pl;
const ve = {
  light: "",
  dark: ""
}, Nl = [];
async function Qt(l) {
  return await new Promise((e) => setTimeout(e, l));
}
function Zt() {
  return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (l) => {
    const e = Math.random() * 16 | 0;
    return (l === "x" ? e : e & 3 | 8).toString(16);
  });
}
function Oe(l, e) {
  try {
    return typeof l == "string" ? (e ?? document).querySelector(l) : l;
  } catch {
    return null;
  }
}
function de(l, e) {
  try {
    return typeof l == "string" ? (e ?? document).querySelectorAll(l) : l ?? Nl;
  } catch {
    return Nl;
  }
}
function me(l, e) {
  var t;
  return ((t = l == null ? void 0 : l.classList) == null ? void 0 : t.contains(e)) ?? !1;
}
function nl(l, e) {
  var t;
  return ((t = l == null ? void 0 : l.tagName) == null ? void 0 : t.toLowerCase()) === e;
}
function Ge(l, e) {
  var t;
  return ((t = l == null ? void 0 : l.type) == null ? void 0 : t.toLowerCase()) === e;
}
function Pe(l, e) {
  var t;
  (t = l == null ? void 0 : l.classList) == null || t.add(e);
}
function le(l, e) {
  var t;
  (t = l == null ? void 0 : l.classList) == null || t.remove(e);
}
function xe(l, e, t) {
  l == null || l.addEventListener(e, t, !0);
}
function es(l, e, t) {
  l == null || l.removeEventListener(e, t, !0);
}
function ls(l, e) {
  var t;
  (t = e == null ? void 0 : e.parentNode) == null || t.insertBefore(l, e);
}
function Ml(l) {
  return l == null ? void 0 : l.previousElementSibling;
}
function Ct(l) {
  return l == null ? void 0 : l.nextElementSibling;
}
function He(l) {
  return l == null ? void 0 : l.parentElement;
}
function ts(l) {
  const e = document.createElement("div");
  for (const t in l)
    e.setAttribute(t, l[t]);
  return e;
}
function Ye(l) {
  const e = l;
  Ge(e, "number") && !e.value && (e.value = ""), e.placeholder || (e.placeholder = " "), l.getAttribute("data-ui") && Tl(l, null);
}
function ss(l) {
  Tl(l.currentTarget, null, null, l);
}
function rs(l) {
  const e = l.currentTarget, t = He(e), s = Oe("input:not([type=file], [type=checkbox], [type=radio]), select, textarea", t);
  s && s.focus();
}
function ns(l) {
  const e = l.currentTarget;
  Ye(e);
}
function os(l) {
  const e = l.currentTarget;
  Ye(e);
}
function Mt(l) {
  es(document.body, "click", Mt);
  const e = l.target;
  de("menu.active").forEach((s) => Dl(e, s, l));
}
function vs(l) {
  const e = l.currentTarget;
  le(e, "active"), Ne && clearTimeout(Ne);
}
function as(l) {
  const e = l.currentTarget;
  Pl(e);
}
function is(l) {
  const e = l.currentTarget;
  Il(e);
}
function cs(l) {
  const e = l.currentTarget;
  Pl(e, l);
}
function ys(l) {
  const e = l.currentTarget;
  Il(e, l);
}
function ds(l) {
  const e = l.currentTarget;
  Pt(e);
}
function jl() {
  ul && clearTimeout(ul), ul = setTimeout(() => {
    al();
  }, 180);
}
function Pl(l, e) {
  if (e && e.key === "Enter") {
    const r = Ml(l);
    return Ge(r, "file") ? r.click() : void 0;
  }
  const t = l, s = Ct(l);
  Ge(s, "text") && (s.value = t.files ? Array.from(t.files).map((r) => r.name).join(", ") : "", s.readOnly = !0, s.addEventListener("keydown", cs), Ye(s));
}
function Il(l, e) {
  if (e && e.key === "Enter") {
    const r = Ml(l);
    return Ge(r, "color") ? r.click() : void 0;
  }
  const t = l, s = Ct(l);
  Ge(s, "text") && (s.readOnly = !0, s.value = t.value, s.addEventListener("keydown", ys), Ye(s));
}
function Pt(l) {
  const e = He(l), t = Oe("span", e), s = de("input", e);
  if (!s.length || !t)
    return;
  const n = 1.25 * (parseInt(getComputedStyle(document.documentElement).getPropertyValue("--size")) || 16) * 100 / s[0].offsetWidth, o = [], v = [];
  for (let i = 0; i < s.length; i++) {
    const w = parseFloat(s[i].min), f = parseFloat(s[i].max), z = parseFloat(s[i].value), k = w || 0, g = f || 100, b = z || 0, M = (b - k) * 100 / (g - k), h = n / 2 - n * M / 100;
    o.push(M + h), v.push(b), w !== k && (s[i].min = `${k}`), f !== g && (s[i].max = `${g}`), z !== b && (s[i].value = `${b}`);
  }
  let a = o[0], c = 0, y = 100 - c - a, d = v[0], u = v[1] || 0;
  s.length > 1 && (a = Math.abs(o[1] - o[0]), c = o[1] > o[0] ? o[0] : o[1], y = 100 - c - a, u > d && (d = v[1] || 0, u = v[0])), e.style.setProperty("---start", `${c}%`), e.style.setProperty("---end", `${y}%`), e.style.setProperty("---value1", `'${d}'`), e.style.setProperty("---value2", `'${u}'`);
}
async function Tl(l, e, t, s) {
  if (!(!e && (e = Oe(l.getAttribute("data-ui")), !e))) {
    if (nl(e, "dialog"))
      return await us(l, e);
    if (nl(e, "menu"))
      return Dl(l, e, s);
    if (me(e, "snackbar"))
      return ms(l, e, t);
    if (me(e, "page"))
      return ws(l, e);
    if (We(l), me(e, "active"))
      return le(e, "active");
    Pe(e, "active");
  }
}
function We(l) {
  const e = He(l);
  if (!me(e, "tabs"))
    return;
  de("a", e).forEach((s) => le(s, "active")), Pe(l, "active");
}
function ws(l, e) {
  We(l);
  const t = He(e);
  if (t)
    for (let s = 0; s < t.children.length; s++)
      me(t.children[s], "page") && le(t.children[s], "active");
  Pe(e, "active");
}
function Dl(l, e, t) {
  ml && clearTimeout(ml), ml = setTimeout(() => {
    if (xe(document.body, "click", Mt), We(l), me(e, "active")) {
      if (!t)
        return le(e, "active");
      const r = t.target, n = Oe(r.getAttribute("data-ui") ?? ""), o = r.closest("menu"), v = !Oe("menu", r.closest("[data-ui]") ?? void 0);
      return n && n !== o ? Dl(r, n) : !n && !v && o ? !1 : le(e, "active");
    }
    de("menu.active").forEach((r) => le(r, "active")), Pe(e, "active");
  }, 90);
}
async function us(l, e) {
  var a;
  (a = document.activeElement) == null || a.blur(), We(l);
  let t = Ml(e);
  const s = e, r = me(e, "active") || s.open, n = me(e, "modal"), o = He(e), v = nl(o, "nav");
  me(t, "overlay") || (t = ts({ class: "overlay" }), ls(t, e), await Qt(90)), t.onclick = () => {
    n || (le(l, "active"), le(e, "active"), le(t, "active"), s.close());
  }, v && de("dialog, a, .overlay", o).forEach((y) => {
    le(y, "active"), y.open && y.close();
  }), r ? (le(l, "active"), le(t, "active"), le(e, "active"), s.close()) : (!nl(l, "button") && !me(l, "button") && !me(l, "chip") && Pe(l, "active"), Pe(t, "active"), Pe(e, "active"), n ? s.showModal() : s.show());
}
function ms(l, e, t) {
  var r;
  (r = document.activeElement) == null || r.blur(), We(l), de(".snackbar.active").forEach((n) => le(n, "active")), Pe(e, "active"), xe(e, "click", vs), Ne && clearTimeout(Ne), t !== -1 && (Ne = setTimeout(() => {
    le(e, "active");
  }, t ?? 6e3));
}
function ps() {
  if (ve.light && ve.dark)
    return ve;
  const l = document.createElement("body");
  l.className = "light", document.body.appendChild(l);
  const e = document.createElement("body");
  e.className = "dark", document.body.appendChild(e);
  const t = getComputedStyle(l), s = getComputedStyle(e), r = ["--primary", "--on-primary", "--primary-container", "--on-primary-container", "--secondary", "--on-secondary", "--secondary-container", "--on-secondary-container", "--tertiary", "--on-tertiary", "--tertiary-container", "--on-tertiary-container", "--error", "--on-error", "--error-container", "--on-error-container", "--background", "--on-background", "--surface", "--on-surface", "--surface-variant", "--on-surface-variant", "--outline", "--outline-variant", "--shadow", "--scrim", "--inverse-surface", "--inverse-on-surface", "--inverse-primary", "--surface-dim", "--surface-bright", "--surface-container-lowest", "--surface-container-low", "--surface-container", "--surface-container-high", "--surface-container-highest"];
  for (let n = 0; n < r.length; n++)
    ve.light += r[n] + ":" + t.getPropertyValue(r[n]) + ";", ve.dark += r[n] + ":" + s.getPropertyValue(r[n]) + ";";
  return document.body.removeChild(l), document.body.removeChild(e), ve;
}
function fs(l) {
  if (!l || !globalThis.materialDynamicColors)
    return ps();
  const e = /dark/i.test(document.body.className) ? "dark" : "light";
  return l.light && l.dark ? (ve.light = l.light, ve.dark = l.dark, document.body.setAttribute("style", l[e]), l) : globalThis.materialDynamicColors(l).then((t) => {
    const s = (r) => {
      let n = "";
      for (const o in r) {
        const v = o.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase(), a = r[o];
        n += "--" + v + ":" + a + ";";
      }
      return n;
    };
    return ve.light = s(t.light), ve.dark = s(t.dark), document.body.setAttribute("style", ve[e]), ve;
  });
}
function bs(l) {
  if (!l)
    return /dark/i.test(document.body.className) ? "dark" : "light";
  document.body.classList.remove("light", "dark"), document.body.classList.add(l);
  const e = l === "light" ? ve.light : ve.dark;
  return globalThis.materialDynamicColors && document.body.setAttribute("style", e), l;
}
function gs() {
  pl || (pl = new MutationObserver(jl), pl.observe(document.body, { attributes: !0, attributeFilter: ["value", "max", "min"], childList: !0, subtree: !0 }), jl());
}
function al(l, e) {
  if (l) {
    if (l === "setup")
      return gs();
    if (l === "guid")
      return Zt();
    if (l === "mode")
      return bs(e);
    if (l === "theme")
      return fs(e);
    const a = Oe(l);
    if (!a)
      return;
    Tl(a, a, e);
  }
  de("[data-ui]").forEach((a) => xe(a, "click", ss)), de(".field > label").forEach((a) => xe(a, "click", rs)), de(".field > input:not([type=file], [type=color], [type=range]), .field > select, .field > textarea").forEach((a) => {
    xe(a, "focus", ns), xe(a, "blur", os), Ye(a);
  }), de(".field > input[type=file]").forEach((a) => {
    xe(a, "change", as), Pl(a);
  }), de(".field > input[type=color]").forEach((a) => {
    xe(a, "change", is), Il(a);
  }), de(".slider > input[type=range]").forEach((a) => {
    xe(a, "input", ds), Pt(a);
  });
}
globalThis.addEventListener && globalThis.addEventListener("load", async () => await al("setup"));
globalThis.beercss = al;
globalThis.ui = al;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oe(l) {
  return l < 0 ? -1 : l === 0 ? 0 : 1;
}
function je(l, e, t) {
  return (1 - t) * l + t * e;
}
function hs(l, e, t) {
  return t < l ? l : t > e ? e : t;
}
function ol(l, e, t) {
  return t < l ? l : t > e ? e : t;
}
function Vl(l) {
  return l = l % 360, l < 0 && (l = l + 360), l;
}
function Al(l) {
  return l = l % 360, l < 0 && (l = l + 360), l;
}
function ks(l, e) {
  return Al(e - l) <= 180 ? 1 : -1;
}
function It(l, e) {
  return 180 - Math.abs(Math.abs(l - e) - 180);
}
function hl(l, e) {
  const t = l[0] * e[0][0] + l[1] * e[0][1] + l[2] * e[0][2], s = l[0] * e[1][0] + l[1] * e[1][1] + l[2] * e[1][2], r = l[0] * e[2][0] + l[1] * e[2][1] + l[2] * e[2][2];
  return [t, s, r];
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt = [
  [0.41233895, 0.35762064, 0.18051042],
  [0.2126, 0.7152, 0.0722],
  [0.01932141, 0.11916382, 0.95034478]
], xs = [
  [
    3.2413774792388685,
    -1.5376652402851851,
    -0.49885366846268053
  ],
  [
    -0.9691452513005321,
    1.8758853451067872,
    0.04156585616912061
  ],
  [
    0.05562093689691305,
    -0.20395524564742123,
    1.0571799111220335
  ]
], El = [95.047, 100, 108.883];
function il(l, e, t) {
  return (255 << 24 | (l & 255) << 16 | (e & 255) << 8 | t & 255) >>> 0;
}
function Gl(l) {
  const e = De(l[0]), t = De(l[1]), s = De(l[2]);
  return il(e, t, s);
}
function zs(l) {
  return l >> 24 & 255;
}
function cl(l) {
  return l >> 16 & 255;
}
function yl(l) {
  return l >> 8 & 255;
}
function dl(l) {
  return l & 255;
}
function Dt(l, e, t) {
  const s = xs, r = s[0][0] * l + s[0][1] * e + s[0][2] * t, n = s[1][0] * l + s[1][1] * e + s[1][2] * t, o = s[2][0] * l + s[2][1] * e + s[2][2] * t, v = De(r), a = De(n), c = De(o);
  return il(v, a, c);
}
function _s(l) {
  const e = _e(cl(l)), t = _e(yl(l)), s = _e(dl(l));
  return hl([e, t, s], Tt);
}
function Cs(l, e, t) {
  const s = El, r = (l + 16) / 116, n = e / 500 + r, o = r - t / 200, v = Ze(n), a = Ze(r), c = Ze(o), y = v * s[0], d = a * s[1], u = c * s[2];
  return Dt(y, d, u);
}
function Ms(l) {
  const e = _e(cl(l)), t = _e(yl(l)), s = _e(dl(l)), r = Tt, n = r[0][0] * e + r[0][1] * t + r[0][2] * s, o = r[1][0] * e + r[1][1] * t + r[1][2] * s, v = r[2][0] * e + r[2][1] * t + r[2][2] * s, a = El, c = n / a[0], y = o / a[1], d = v / a[2], u = Ve(c), i = Ve(y), w = Ve(d), f = 116 * i - 16, z = 500 * (u - i), k = 200 * (i - w);
  return [f, z, k];
}
function Ps(l) {
  const e = Me(l), t = De(e);
  return il(t, t, t);
}
function kl(l) {
  const e = _s(l)[1];
  return 116 * Ve(e / 100) - 16;
}
function Me(l) {
  return 100 * Ze((l + 16) / 116);
}
function xl(l) {
  return Ve(l / 100) * 116 - 16;
}
function _e(l) {
  const e = l / 255;
  return e <= 0.040449936 ? e / 12.92 * 100 : Math.pow((e + 0.055) / 1.055, 2.4) * 100;
}
function De(l) {
  const e = l / 100;
  let t = 0;
  return e <= 31308e-7 ? t = e * 12.92 : t = 1.055 * Math.pow(e, 1 / 2.4) - 0.055, hs(0, 255, Math.round(t * 255));
}
function Is() {
  return El;
}
function Ve(l) {
  const e = 0.008856451679035631, t = 24389 / 27;
  return l > e ? Math.pow(l, 1 / 3) : (t * l + 16) / 116;
}
function Ze(l) {
  const e = 0.008856451679035631, t = 24389 / 27, s = l * l * l;
  return s > e ? s : (116 * l - 16) / t;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe {
  /**
   * Create ViewingConditions from a simple, physically relevant, set of
   * parameters.
   *
   * @param whitePoint White point, measured in the XYZ color space.
   *     default = D65, or sunny day afternoon
   * @param adaptingLuminance The luminance of the adapting field. Informally,
   *     how bright it is in the room where the color is viewed. Can be
   *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
   *     or 200 lux.
   * @param backgroundLstar The lightness of the area surrounding the color.
   *     measured by L* in L*a*b*. default = 50.0
   * @param surround A general description of the lighting surrounding the
   *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
   *     dimly light room, like watching TV at home at night. 2.0 means there
   *     is no difference between the lighting on the color and around it.
   *     default = 2.0
   * @param discountingIlluminant Whether the eye accounts for the tint of the
   *     ambient lighting, such as knowing an apple is still red in green light.
   *     default = false, the eye does not perform this process on
   *       self-luminous objects like displays.
   */
  static make(e = Is(), t = 200 / Math.PI * Me(50) / 100, s = 50, r = 2, n = !1) {
    const o = e, v = o[0] * 0.401288 + o[1] * 0.650173 + o[2] * -0.051461, a = o[0] * -0.250268 + o[1] * 1.204414 + o[2] * 0.045854, c = o[0] * -2079e-6 + o[1] * 0.048952 + o[2] * 0.953127, y = 0.8 + r / 10, d = y >= 0.9 ? je(0.59, 0.69, (y - 0.9) * 10) : je(0.525, 0.59, (y - 0.8) * 10);
    let u = n ? 1 : y * (1 - 1 / 3.6 * Math.exp((-t - 42) / 92));
    u = u > 1 ? 1 : u < 0 ? 0 : u;
    const i = y, w = [
      u * (100 / v) + 1 - u,
      u * (100 / a) + 1 - u,
      u * (100 / c) + 1 - u
    ], f = 1 / (5 * t + 1), z = f * f * f * f, k = 1 - z, g = z * t + 0.1 * k * k * Math.cbrt(5 * t), b = Me(s) / e[1], M = 1.48 + Math.sqrt(b), h = 0.725 / Math.pow(b, 0.2), P = h, p = [
      Math.pow(g * w[0] * v / 100, 0.42),
      Math.pow(g * w[1] * a / 100, 0.42),
      Math.pow(g * w[2] * c / 100, 0.42)
    ], I = [
      400 * p[0] / (p[0] + 27.13),
      400 * p[1] / (p[1] + 27.13),
      400 * p[2] / (p[2] + 27.13)
    ], L = (2 * I[0] + I[1] + 0.05 * I[2]) * h;
    return new pe(b, L, h, P, d, i, w, g, Math.pow(g, 0.25), M);
  }
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  constructor(e, t, s, r, n, o, v, a, c, y) {
    this.n = e, this.aw = t, this.nbb = s, this.ncb = r, this.c = n, this.nc = o, this.rgbD = v, this.fl = a, this.fLRoot = c, this.z = y;
  }
}
pe.DEFAULT = pe.make();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J {
  /**
   * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
   * the following combinations:
   *      -  {j or q} and {c, m, or s} and hue
   *      - jstar, astar, bstar
   * Prefer using a static method that constructs from 3 of those dimensions.
   * This constructor is intended for those methods to use to return all
   * possible dimensions.
   *
   * @param hue
   * @param chroma informally, colorfulness / color intensity. like saturation
   *     in HSL, except perceptually accurate.
   * @param j lightness
   * @param q brightness; ratio of lightness to white point's lightness
   * @param m colorfulness
   * @param s saturation; ratio of chroma to white point's chroma
   * @param jstar CAM16-UCS J coordinate
   * @param astar CAM16-UCS a coordinate
   * @param bstar CAM16-UCS b coordinate
   */
  constructor(e, t, s, r, n, o, v, a, c) {
    this.hue = e, this.chroma = t, this.j = s, this.q = r, this.m = n, this.s = o, this.jstar = v, this.astar = a, this.bstar = c;
  }
  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  distance(e) {
    const t = this.jstar - e.jstar, s = this.astar - e.astar, r = this.bstar - e.bstar, n = Math.sqrt(t * t + s * s + r * r);
    return 1.41 * Math.pow(n, 0.63);
  }
  /**
   * @param argb ARGB representation of a color.
   * @return CAM16 color, assuming the color was viewed in default viewing
   *     conditions.
   */
  static fromInt(e) {
    return J.fromIntInViewingConditions(e, pe.DEFAULT);
  }
  /**
   * @param argb ARGB representation of a color.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   * @return CAM16 color.
   */
  static fromIntInViewingConditions(e, t) {
    const s = (e & 16711680) >> 16, r = (e & 65280) >> 8, n = e & 255, o = _e(s), v = _e(r), a = _e(n), c = 0.41233895 * o + 0.35762064 * v + 0.18051042 * a, y = 0.2126 * o + 0.7152 * v + 0.0722 * a, d = 0.01932141 * o + 0.11916382 * v + 0.95034478 * a, u = 0.401288 * c + 0.650173 * y - 0.051461 * d, i = -0.250268 * c + 1.204414 * y + 0.045854 * d, w = -2079e-6 * c + 0.048952 * y + 0.953127 * d, f = t.rgbD[0] * u, z = t.rgbD[1] * i, k = t.rgbD[2] * w, g = Math.pow(t.fl * Math.abs(f) / 100, 0.42), b = Math.pow(t.fl * Math.abs(z) / 100, 0.42), M = Math.pow(t.fl * Math.abs(k) / 100, 0.42), h = oe(f) * 400 * g / (g + 27.13), P = oe(z) * 400 * b / (b + 27.13), p = oe(k) * 400 * M / (M + 27.13), I = (11 * h + -12 * P + p) / 11, L = (h + P - 2 * p) / 9, E = (20 * h + 20 * P + 21 * p) / 20, S = (40 * h + 20 * P + p) / 20, V = Math.atan2(L, I) * 180 / Math.PI, N = V < 0 ? V + 360 : V >= 360 ? V - 360 : V, U = N * Math.PI / 180, he = S * t.nbb, te = 100 * Math.pow(he / t.aw, t.c * t.z), se = 4 / t.c * Math.sqrt(te / 100) * (t.aw + 4) * t.fLRoot, Ae = N < 20.14 ? N + 360 : N, ce = 0.25 * (Math.cos(Ae * Math.PI / 180 + 2) + 3.8), R = 5e4 / 13 * ce * t.nc * t.ncb * Math.sqrt(I * I + L * L) / (E + 0.305), q = Math.pow(R, 0.9) * Math.pow(1.64 - Math.pow(0.29, t.n), 0.73), $e = q * Math.sqrt(te / 100), Ol = $e * t.fLRoot, $t = 50 * Math.sqrt(q * t.c / (t.aw + 4)), Rt = (1 + 100 * 7e-3) * te / (1 + 7e-3 * te), Ll = 1 / 0.0228 * Math.log(1 + 0.0228 * Ol), Bt = Ll * Math.cos(U), Ft = Ll * Math.sin(U);
    return new J(N, $e, te, se, Ol, $t, Rt, Bt, Ft);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   */
  static fromJch(e, t, s) {
    return J.fromJchInViewingConditions(e, t, s, pe.DEFAULT);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromJchInViewingConditions(e, t, s, r) {
    const n = 4 / r.c * Math.sqrt(e / 100) * (r.aw + 4) * r.fLRoot, o = t * r.fLRoot, v = t / Math.sqrt(e / 100), a = 50 * Math.sqrt(v * r.c / (r.aw + 4)), c = s * Math.PI / 180, y = (1 + 100 * 7e-3) * e / (1 + 7e-3 * e), d = 1 / 0.0228 * Math.log(1 + 0.0228 * o), u = d * Math.cos(c), i = d * Math.sin(c);
    return new J(s, t, e, n, o, a, y, u, i);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   */
  static fromUcs(e, t, s) {
    return J.fromUcsInViewingConditions(e, t, s, pe.DEFAULT);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromUcsInViewingConditions(e, t, s, r) {
    const n = t, o = s, v = Math.sqrt(n * n + o * o), c = (Math.exp(v * 0.0228) - 1) / 0.0228 / r.fLRoot;
    let y = Math.atan2(o, n) * (180 / Math.PI);
    y < 0 && (y += 360);
    const d = e / (1 - (e - 100) * 7e-3);
    return J.fromJchInViewingConditions(d, c, y, r);
  }
  /**
   *  @return ARGB representation of color, assuming the color was viewed in
   *     default viewing conditions, which are near-identical to the default
   *     viewing conditions for sRGB.
   */
  toInt() {
    return this.viewed(pe.DEFAULT);
  }
  /**
   * @param viewingConditions Information about the environment where the color
   *     will be viewed.
   * @return ARGB representation of color
   */
  viewed(e) {
    const t = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), s = Math.pow(t / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9), r = this.hue * Math.PI / 180, n = 0.25 * (Math.cos(r + 2) + 3.8), o = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), v = n * (5e4 / 13) * e.nc * e.ncb, a = o / e.nbb, c = Math.sin(r), y = Math.cos(r), d = 23 * (a + 0.305) * s / (23 * v + 11 * s * y + 108 * s * c), u = d * y, i = d * c, w = (460 * a + 451 * u + 288 * i) / 1403, f = (460 * a - 891 * u - 261 * i) / 1403, z = (460 * a - 220 * u - 6300 * i) / 1403, k = Math.max(0, 27.13 * Math.abs(w) / (400 - Math.abs(w))), g = oe(w) * (100 / e.fl) * Math.pow(k, 1 / 0.42), b = Math.max(0, 27.13 * Math.abs(f) / (400 - Math.abs(f))), M = oe(f) * (100 / e.fl) * Math.pow(b, 1 / 0.42), h = Math.max(0, 27.13 * Math.abs(z) / (400 - Math.abs(z))), P = oe(z) * (100 / e.fl) * Math.pow(h, 1 / 0.42), p = g / e.rgbD[0], I = M / e.rgbD[1], L = P / e.rgbD[2], E = 1.86206786 * p - 1.01125463 * I + 0.14918677 * L, S = 0.38752654 * p + 0.62144744 * I - 897398e-8 * L, T = -0.0158415 * p - 0.03412294 * I + 1.04996444 * L;
    return Dt(E, S, T);
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(e, t, s, r) {
    const n = 0.401288 * e + 0.650173 * t - 0.051461 * s, o = -0.250268 * e + 1.204414 * t + 0.045854 * s, v = -2079e-6 * e + 0.048952 * t + 0.953127 * s, a = r.rgbD[0] * n, c = r.rgbD[1] * o, y = r.rgbD[2] * v, d = Math.pow(r.fl * Math.abs(a) / 100, 0.42), u = Math.pow(r.fl * Math.abs(c) / 100, 0.42), i = Math.pow(r.fl * Math.abs(y) / 100, 0.42), w = oe(a) * 400 * d / (d + 27.13), f = oe(c) * 400 * u / (u + 27.13), z = oe(y) * 400 * i / (i + 27.13), k = (11 * w + -12 * f + z) / 11, g = (w + f - 2 * z) / 9, b = (20 * w + 20 * f + 21 * z) / 20, M = (40 * w + 20 * f + z) / 20, P = Math.atan2(g, k) * 180 / Math.PI, p = P < 0 ? P + 360 : P >= 360 ? P - 360 : P, I = p * Math.PI / 180, L = M * r.nbb, E = 100 * Math.pow(L / r.aw, r.c * r.z), S = 4 / r.c * Math.sqrt(E / 100) * (r.aw + 4) * r.fLRoot, T = p < 20.14 ? p + 360 : p, V = 1 / 4 * (Math.cos(T * Math.PI / 180 + 2) + 3.8), U = 5e4 / 13 * V * r.nc * r.ncb * Math.sqrt(k * k + g * g) / (b + 0.305), he = Math.pow(U, 0.9) * Math.pow(1.64 - Math.pow(0.29, r.n), 0.73), te = he * Math.sqrt(E / 100), se = te * r.fLRoot, Ae = 50 * Math.sqrt(he * r.c / (r.aw + 4)), ce = (1 + 100 * 7e-3) * E / (1 + 7e-3 * E), Ee = Math.log(1 + 0.0228 * se) / 0.0228, R = Ee * Math.cos(I), q = Ee * Math.sin(I);
    return new J(p, te, E, S, se, Ae, ce, R, q);
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(e) {
    const t = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), s = Math.pow(t / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9), r = this.hue * Math.PI / 180, n = 0.25 * (Math.cos(r + 2) + 3.8), o = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), v = n * (5e4 / 13) * e.nc * e.ncb, a = o / e.nbb, c = Math.sin(r), y = Math.cos(r), d = 23 * (a + 0.305) * s / (23 * v + 11 * s * y + 108 * s * c), u = d * y, i = d * c, w = (460 * a + 451 * u + 288 * i) / 1403, f = (460 * a - 891 * u - 261 * i) / 1403, z = (460 * a - 220 * u - 6300 * i) / 1403, k = Math.max(0, 27.13 * Math.abs(w) / (400 - Math.abs(w))), g = oe(w) * (100 / e.fl) * Math.pow(k, 1 / 0.42), b = Math.max(0, 27.13 * Math.abs(f) / (400 - Math.abs(f))), M = oe(f) * (100 / e.fl) * Math.pow(b, 1 / 0.42), h = Math.max(0, 27.13 * Math.abs(z) / (400 - Math.abs(z))), P = oe(z) * (100 / e.fl) * Math.pow(h, 1 / 0.42), p = g / e.rgbD[0], I = M / e.rgbD[1], L = P / e.rgbD[2], E = 1.86206786 * p - 1.01125463 * I + 0.14918677 * L, S = 0.38752654 * p + 0.62144744 * I - 897398e-8 * L, T = -0.0158415 * p - 0.03412294 * I + 1.04996444 * L;
    return [E, S, T];
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A {
  /**
   * Sanitizes a small enough angle in radians.
   *
   * @param angle An angle in radians; must not deviate too much
   * from 0.
   * @return A coterminal angle between 0 and 2pi.
   */
  static sanitizeRadians(e) {
    return (e + Math.PI * 8) % (Math.PI * 2);
  }
  /**
   * Delinearizes an RGB component, returning a floating-point
   * number.
   *
   * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
   * linear R/G/B channel
   * @return 0.0 <= output <= 255.0, color channel converted to
   * regular RGB space
   */
  static trueDelinearized(e) {
    const t = e / 100;
    let s = 0;
    return t <= 31308e-7 ? s = t * 12.92 : s = 1.055 * Math.pow(t, 1 / 2.4) - 0.055, s * 255;
  }
  static chromaticAdaptation(e) {
    const t = Math.pow(Math.abs(e), 0.42);
    return oe(e) * 400 * t / (t + 27.13);
  }
  /**
   * Returns the hue of a linear RGB color in CAM16.
   *
   * @param linrgb The linear RGB coordinates of a color.
   * @return The hue of the color in CAM16, in radians.
   */
  static hueOf(e) {
    const t = hl(e, A.SCALED_DISCOUNT_FROM_LINRGB), s = A.chromaticAdaptation(t[0]), r = A.chromaticAdaptation(t[1]), n = A.chromaticAdaptation(t[2]), o = (11 * s + -12 * r + n) / 11, v = (s + r - 2 * n) / 9;
    return Math.atan2(v, o);
  }
  static areInCyclicOrder(e, t, s) {
    const r = A.sanitizeRadians(t - e), n = A.sanitizeRadians(s - e);
    return r < n;
  }
  /**
   * Solves the lerp equation.
   *
   * @param source The starting number.
   * @param mid The number in the middle.
   * @param target The ending number.
   * @return A number t such that lerp(source, target, t) = mid.
   */
  static intercept(e, t, s) {
    return (t - e) / (s - e);
  }
  static lerpPoint(e, t, s) {
    return [
      e[0] + (s[0] - e[0]) * t,
      e[1] + (s[1] - e[1]) * t,
      e[2] + (s[2] - e[2]) * t
    ];
  }
  /**
   * Intersects a segment with a plane.
   *
   * @param source The coordinates of point A.
   * @param coordinate The R-, G-, or B-coordinate of the plane.
   * @param target The coordinates of point B.
   * @param axis The axis the plane is perpendicular with. (0: R, 1:
   * G, 2: B)
   * @return The intersection point of the segment AB with the plane
   * R=coordinate, G=coordinate, or B=coordinate
   */
  static setCoordinate(e, t, s, r) {
    const n = A.intercept(e[r], t, s[r]);
    return A.lerpPoint(e, n, s);
  }
  static isBounded(e) {
    return 0 <= e && e <= 100;
  }
  /**
   * Returns the nth possible vertex of the polygonal intersection.
   *
   * @param y The Y value of the plane.
   * @param n The zero-based index of the point. 0 <= n <= 11.
   * @return The nth possible vertex of the polygonal intersection
   * of the y plane and the RGB cube, in linear RGB coordinates, if
   * it exists. If this possible vertex lies outside of the cube,
   * [-1.0, -1.0, -1.0] is returned.
   */
  static nthVertex(e, t) {
    const s = A.Y_FROM_LINRGB[0], r = A.Y_FROM_LINRGB[1], n = A.Y_FROM_LINRGB[2], o = t % 4 <= 1 ? 0 : 100, v = t % 2 === 0 ? 0 : 100;
    if (t < 4) {
      const a = o, c = v, y = (e - a * r - c * n) / s;
      return A.isBounded(y) ? [y, a, c] : [-1, -1, -1];
    } else if (t < 8) {
      const a = o, c = v, y = (e - c * s - a * n) / r;
      return A.isBounded(y) ? [c, y, a] : [-1, -1, -1];
    } else {
      const a = o, c = v, y = (e - a * s - c * r) / n;
      return A.isBounded(y) ? [a, c, y] : [-1, -1, -1];
    }
  }
  /**
   * Finds the segment containing the desired color.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return A list of two sets of linear RGB coordinates, each
   * corresponding to an endpoint of the segment containing the
   * desired color.
   */
  static bisectToSegment(e, t) {
    let s = [-1, -1, -1], r = s, n = 0, o = 0, v = !1, a = !0;
    for (let c = 0; c < 12; c++) {
      const y = A.nthVertex(e, c);
      if (y[0] < 0)
        continue;
      const d = A.hueOf(y);
      if (!v) {
        s = y, r = y, n = d, o = d, v = !0;
        continue;
      }
      (a || A.areInCyclicOrder(n, d, o)) && (a = !1, A.areInCyclicOrder(n, t, d) ? (r = y, o = d) : (s = y, n = d));
    }
    return [s, r];
  }
  static midpoint(e, t) {
    return [
      (e[0] + t[0]) / 2,
      (e[1] + t[1]) / 2,
      (e[2] + t[2]) / 2
    ];
  }
  static criticalPlaneBelow(e) {
    return Math.floor(e - 0.5);
  }
  static criticalPlaneAbove(e) {
    return Math.ceil(e - 0.5);
  }
  /**
   * Finds a color with the given Y and hue on the boundary of the
   * cube.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return The desired color, in linear RGB coordinates.
   */
  static bisectToLimit(e, t) {
    const s = A.bisectToSegment(e, t);
    let r = s[0], n = A.hueOf(r), o = s[1];
    for (let v = 0; v < 3; v++)
      if (r[v] !== o[v]) {
        let a = -1, c = 255;
        r[v] < o[v] ? (a = A.criticalPlaneBelow(A.trueDelinearized(r[v])), c = A.criticalPlaneAbove(A.trueDelinearized(o[v]))) : (a = A.criticalPlaneAbove(A.trueDelinearized(r[v])), c = A.criticalPlaneBelow(A.trueDelinearized(o[v])));
        for (let y = 0; y < 8 && !(Math.abs(c - a) <= 1); y++) {
          const d = Math.floor((a + c) / 2), u = A.CRITICAL_PLANES[d], i = A.setCoordinate(r, u, o, v), w = A.hueOf(i);
          A.areInCyclicOrder(n, t, w) ? (o = i, c = d) : (r = i, n = w, a = d);
        }
      }
    return A.midpoint(r, o);
  }
  static inverseChromaticAdaptation(e) {
    const t = Math.abs(e), s = Math.max(0, 27.13 * t / (400 - t));
    return oe(e) * Math.pow(s, 1 / 0.42);
  }
  /**
   * Finds a color with the given hue, chroma, and Y.
   *
   * @param hueRadians The desired hue in radians.
   * @param chroma The desired chroma.
   * @param y The desired Y.
   * @return The desired color as a hexadecimal integer, if found; 0
   * otherwise.
   */
  static findResultByJ(e, t, s) {
    let r = Math.sqrt(s) * 11;
    const n = pe.DEFAULT, o = 1 / Math.pow(1.64 - Math.pow(0.29, n.n), 0.73), a = 0.25 * (Math.cos(e + 2) + 3.8) * (5e4 / 13) * n.nc * n.ncb, c = Math.sin(e), y = Math.cos(e);
    for (let d = 0; d < 5; d++) {
      const u = r / 100, i = t === 0 || r === 0 ? 0 : t / Math.sqrt(u), w = Math.pow(i * o, 1 / 0.9), z = n.aw * Math.pow(u, 1 / n.c / n.z) / n.nbb, k = 23 * (z + 0.305) * w / (23 * a + 11 * w * y + 108 * w * c), g = k * y, b = k * c, M = (460 * z + 451 * g + 288 * b) / 1403, h = (460 * z - 891 * g - 261 * b) / 1403, P = (460 * z - 220 * g - 6300 * b) / 1403, p = A.inverseChromaticAdaptation(M), I = A.inverseChromaticAdaptation(h), L = A.inverseChromaticAdaptation(P), E = hl([p, I, L], A.LINRGB_FROM_SCALED_DISCOUNT);
      if (E[0] < 0 || E[1] < 0 || E[2] < 0)
        return 0;
      const S = A.Y_FROM_LINRGB[0], T = A.Y_FROM_LINRGB[1], V = A.Y_FROM_LINRGB[2], N = S * E[0] + T * E[1] + V * E[2];
      if (N <= 0)
        return 0;
      if (d === 4 || Math.abs(N - s) < 2e-3)
        return E[0] > 100.01 || E[1] > 100.01 || E[2] > 100.01 ? 0 : Gl(E);
      r = r - (N - s) * r / (2 * N);
    }
    return 0;
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return A hexadecimal representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToInt(e, t, s) {
    if (t < 1e-4 || s < 1e-4 || s > 99.9999)
      return Ps(s);
    e = Al(e);
    const r = e / 180 * Math.PI, n = Me(s), o = A.findResultByJ(r, t, n);
    if (o !== 0)
      return o;
    const v = A.bisectToLimit(n, r);
    return Gl(v);
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return An CAM16 object representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToCam(e, t, s) {
    return J.fromInt(A.solveToInt(e, t, s));
  }
}
A.SCALED_DISCOUNT_FROM_LINRGB = [
  [
    0.001200833568784504,
    0.002389694492170889,
    2795742885861124e-19
  ],
  [
    5891086651375999e-19,
    0.0029785502573438758,
    3270666104008398e-19
  ],
  [
    10146692491640572e-20,
    5364214359186694e-19,
    0.0032979401770712076
  ]
];
A.LINRGB_FROM_SCALED_DISCOUNT = [
  [
    1373.2198709594231,
    -1100.4251190754821,
    -7.278681089101213
  ],
  [
    -271.815969077903,
    559.6580465940733,
    -32.46047482791194
  ],
  [
    1.9622899599665666,
    -57.173814538844006,
    308.7233197812385
  ]
];
A.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
A.CRITICAL_PLANES = [
  0.015176349177441876,
  0.045529047532325624,
  0.07588174588720938,
  0.10623444424209313,
  0.13658714259697685,
  0.16693984095186062,
  0.19729253930674434,
  0.2276452376616281,
  0.2579979360165119,
  0.28835063437139563,
  0.3188300904430532,
  0.350925934958123,
  0.3848314933096426,
  0.42057480301049466,
  0.458183274052838,
  0.4976837250274023,
  0.5391024159806381,
  0.5824650784040898,
  0.6277969426914107,
  0.6751227633498623,
  0.7244668422128921,
  0.775853049866786,
  0.829304845476233,
  0.8848452951698498,
  0.942497089126609,
  1.0022825574869039,
  1.0642236851973577,
  1.1283421258858297,
  1.1946592148522128,
  1.2631959812511864,
  1.3339731595349034,
  1.407011200216447,
  1.4823302800086415,
  1.5599503113873272,
  1.6398909516233677,
  1.7221716113234105,
  1.8068114625156377,
  1.8938294463134073,
  1.9832442801866852,
  2.075074464868551,
  2.1693382909216234,
  2.2660538449872063,
  2.36523901573795,
  2.4669114995532007,
  2.5710888059345764,
  2.6777882626779785,
  2.7870270208169257,
  2.898822059350997,
  3.0131901897720907,
  3.1301480604002863,
  3.2497121605402226,
  3.3718988244681087,
  3.4967242352587946,
  3.624204428461639,
  3.754355295633311,
  3.887192587735158,
  4.022731918402185,
  4.160988767090289,
  4.301978482107941,
  4.445716283538092,
  4.592217266055746,
  4.741496401646282,
  4.893568542229298,
  5.048448422192488,
  5.20615066083972,
  5.3666897647573375,
  5.5300801301023865,
  5.696336044816294,
  5.865471690767354,
  6.037501145825082,
  6.212438385869475,
  6.390297286737924,
  6.571091626112461,
  6.7548350853498045,
  6.941541251256611,
  7.131223617812143,
  7.323895587840543,
  7.5195704746346665,
  7.7182615035334345,
  7.919981813454504,
  8.124744458384042,
  8.332562408825165,
  8.543448553206703,
  8.757415699253682,
  8.974476575321063,
  9.194643831691977,
  9.417930041841839,
  9.644347703669503,
  9.873909240696694,
  10.106627003236781,
  10.342513269534024,
  10.58158024687427,
  10.8238400726681,
  11.069304815507364,
  11.317986476196008,
  11.569896988756009,
  11.825048221409341,
  12.083451977536606,
  12.345119996613247,
  12.610063955123938,
  12.878295467455942,
  13.149826086772048,
  13.42466730586372,
  13.702830557985108,
  13.984327217668513,
  14.269168601521828,
  14.55736596900856,
  14.848930523210871,
  15.143873411576273,
  15.44220572664832,
  15.743938506781891,
  16.04908273684337,
  16.35764934889634,
  16.66964922287304,
  16.985093187232053,
  17.30399201960269,
  17.62635644741625,
  17.95219714852476,
  18.281524751807332,
  18.614349837764564,
  18.95068293910138,
  19.290534541298456,
  19.633915083172692,
  19.98083495742689,
  20.331304511189067,
  20.685334046541502,
  21.042933821039977,
  21.404114048223256,
  21.76888489811322,
  22.137256497705877,
  22.50923893145328,
  22.884842241736916,
  23.264076429332462,
  23.6469514538663,
  24.033477234264016,
  24.42366364919083,
  24.817520537484558,
  25.21505769858089,
  25.61628489293138,
  26.021211842414342,
  26.429848230738664,
  26.842203703840827,
  27.258287870275353,
  27.678110301598522,
  28.10168053274597,
  28.529008062403893,
  28.96010235337422,
  29.39497283293396,
  29.83362889318845,
  30.276079891419332,
  30.722335150426627,
  31.172403958865512,
  31.62629557157785,
  32.08401920991837,
  32.54558406207592,
  33.010999283389665,
  33.4802739966603,
  33.953417292456834,
  34.430438229418264,
  34.911345834551085,
  35.39614910352207,
  35.88485700094671,
  36.37747846067349,
  36.87402238606382,
  37.37449765026789,
  37.87891309649659,
  38.38727753828926,
  38.89959975977785,
  39.41588851594697,
  39.93615253289054,
  40.460400508064545,
  40.98864111053629,
  41.520882981230194,
  42.05713473317016,
  42.597404951718396,
  43.141702194811224,
  43.6900349931913,
  44.24241185063697,
  44.798841244188324,
  45.35933162437017,
  45.92389141541209,
  46.49252901546552,
  47.065252796817916,
  47.64207110610409,
  48.22299226451468,
  48.808024568002054,
  49.3971762874833,
  49.9904556690408,
  50.587870934119984,
  51.189430279724725,
  51.79514187861014,
  52.40501387947288,
  53.0190544071392,
  53.637271562750364,
  54.259673423945976,
  54.88626804504493,
  55.517063457223934,
  56.15206766869424,
  56.79128866487574,
  57.43473440856916,
  58.08241284012621,
  58.734331877617365,
  59.39049941699807,
  60.05092333227251,
  60.715611475655585,
  61.38457167773311,
  62.057811747619894,
  62.7353394731159,
  63.417162620860914,
  64.10328893648692,
  64.79372614476921,
  65.48848194977529,
  66.18756403501224,
  66.89098006357258,
  67.59873767827808,
  68.31084450182222,
  69.02730813691093,
  69.74813616640164,
  70.47333615344107,
  71.20291564160104,
  71.93688215501312,
  72.67524319850172,
  73.41800625771542,
  74.16517879925733,
  74.9167682708136,
  75.67278210128072,
  76.43322770089146,
  77.1981124613393,
  77.96744375590167,
  78.74122893956174,
  79.51947534912904,
  80.30219030335869,
  81.08938110306934,
  81.88105503125999,
  82.67721935322541,
  83.4778813166706,
  84.28304815182372,
  85.09272707154808,
  85.90692527145302,
  86.72564993000343,
  87.54890820862819,
  88.3767072518277,
  89.2090541872801,
  90.04595612594655,
  90.88742016217518,
  91.73345337380438,
  92.58406282226491,
  93.43925555268066,
  94.29903859396902,
  95.16341895893969,
  96.03240364439274,
  96.9059996312159,
  97.78421388448044,
  98.6670533535366,
  99.55452497210776
];
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H {
  static from(e, t, s) {
    return new H(A.solveToInt(e, t, s));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return HCT representation of a color in default viewing conditions
   */
  static fromInt(e) {
    return new H(e);
  }
  toInt() {
    return this.argb;
  }
  /**
   * A number, in degrees, representing ex. red, orange, yellow, etc.
   * Ranges from 0 <= hue < 360.
   */
  get hue() {
    return this.internalHue;
  }
  /**
   * @param newHue 0 <= newHue < 360; invalid values are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set hue(e) {
    this.setInternalState(A.solveToInt(e, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  /**
   * @param newChroma 0 <= newChroma < ?
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set chroma(e) {
    this.setInternalState(A.solveToInt(this.internalHue, e, this.internalTone));
  }
  /** Lightness. Ranges from 0 to 100. */
  get tone() {
    return this.internalTone;
  }
  /**
   * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set tone(e) {
    this.setInternalState(A.solveToInt(this.internalHue, this.internalChroma, e));
  }
  constructor(e) {
    this.argb = e;
    const t = J.fromInt(e);
    this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = kl(e), this.argb = e;
  }
  setInternalState(e) {
    const t = J.fromInt(e);
    this.internalHue = t.hue, this.internalChroma = t.chroma, this.internalTone = kl(e), this.argb = e;
  }
  /**
   * Translates a color into different [ViewingConditions].
   *
   * Colors change appearance. They look different with lights on versus off,
   * the same color, as in hex code, on white looks different when on black.
   * This is called color relativity, most famously explicated by Josef Albers
   * in Interaction of Color.
   *
   * In color science, color appearance models can account for this and
   * calculate the appearance of a color in different settings. HCT is based on
   * CAM16, a color appearance model, and uses it to make these calculations.
   *
   * See [ViewingConditions.make] for parameters affecting color appearance.
   */
  inViewingConditions(e) {
    const s = J.fromInt(this.toInt()).xyzInViewingConditions(e), r = J.fromXyzInViewingConditions(s[0], s[1], s[2], pe.make());
    return H.from(r.hue, r.chroma, xl(s[1]));
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $l {
  /**
   * Blend the design color's HCT hue towards the key color's HCT
   * hue, in a way that leaves the original color recognizable and
   * recognizably shifted towards the key color.
   *
   * @param designColor ARGB representation of an arbitrary color.
   * @param sourceColor ARGB representation of the main theme color.
   * @return The design color with a hue shifted towards the
   * system's color, a slightly warmer/cooler variant of the design
   * color's hue.
   */
  static harmonize(e, t) {
    const s = H.fromInt(e), r = H.fromInt(t), n = It(s.hue, r.hue), o = Math.min(n * 0.5, 15), v = Al(s.hue + o * ks(s.hue, r.hue));
    return H.from(v, s.chroma, s.tone).toInt();
  }
  /**
   * Blends hue from one color into another. The chroma and tone of
   * the original color are maintained.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, with a hue blended towards to. Chroma and tone
   * are constant.
   */
  static hctHue(e, t, s) {
    const r = $l.cam16Ucs(e, t, s), n = J.fromInt(r), o = J.fromInt(e);
    return H.from(n.hue, o.chroma, kl(e)).toInt();
  }
  /**
   * Blend in CAM16-UCS space.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, blended towards to. Hue, chroma, and tone will
   * change.
   */
  static cam16Ucs(e, t, s) {
    const r = J.fromInt(e), n = J.fromInt(t), o = r.jstar, v = r.astar, a = r.bstar, c = n.jstar, y = n.astar, d = n.bstar, u = o + (c - o) * s, i = v + (y - v) * s, w = a + (d - a) * s;
    return J.fromUcs(u, i, w).toInt();
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W {
  /**
   * Returns a contrast ratio, which ranges from 1 to 21.
   *
   * @param toneA Tone between 0 and 100. Values outside will be clamped.
   * @param toneB Tone between 0 and 100. Values outside will be clamped.
   */
  static ratioOfTones(e, t) {
    return e = ol(0, 100, e), t = ol(0, 100, t), W.ratioOfYs(Me(e), Me(t));
  }
  static ratioOfYs(e, t) {
    const s = e > t ? e : t, r = s === t ? e : t;
    return (s + 5) / (r + 5);
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighter(e, t) {
    if (e < 0 || e > 100)
      return -1;
    const s = Me(e), r = t * (s + 5) - 5, n = W.ratioOfYs(r, s), o = Math.abs(n - t);
    if (n < t && o > 0.04)
      return -1;
    const v = xl(r) + 0.4;
    return v < 0 || v > 100 ? -1 : v;
  }
  /**
   * Returns a tone <= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darker(e, t) {
    if (e < 0 || e > 100)
      return -1;
    const s = Me(e), r = (s + 5) / t - 5, n = W.ratioOfYs(s, r), o = Math.abs(n - t);
    if (n < t && o > 0.04)
      return -1;
    const v = xl(r) - 0.4;
    return v < 0 || v > 100 ? -1 : v;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the ratio with tone. For example, there is no color lighter than T100.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 100 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighterUnsafe(e, t) {
    const s = W.lighter(e, t);
    return s < 0 ? 100 : s;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the [ratio with [tone]. For example, there is no color darker than T0.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 0 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darkerUnsafe(e, t) {
    const s = W.darker(e, t);
    return s < 0 ? 0 : s;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rl {
  /**
   * Returns true if a color is disliked.
   *
   * @param hct A color to be judged.
   * @return Whether the color is disliked.
   *
   * Disliked is defined as a dark yellow-green that is not neutral.
   */
  static isDisliked(e) {
    const t = Math.round(e.hue) >= 90 && Math.round(e.hue) <= 111, s = Math.round(e.chroma) > 16, r = Math.round(e.tone) < 65;
    return t && s && r;
  }
  /**
   * If a color is disliked, lighten it to make it likable.
   *
   * @param hct A color to be judged.
   * @return A new color if the original color is disliked, or the original
   *   color if it is acceptable.
   */
  static fixIfDisliked(e) {
    return Rl.isDisliked(e) ? H.from(e.hue, e.chroma, 70) : e;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C {
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  static fromPalette(e) {
    return new C(e.name ?? "", e.palette, e.tone, e.isBackground ?? !1, e.background, e.secondBackground, e.contrastCurve, e.toneDeltaPair);
  }
  /**
   * The base constructor for DynamicColor.
   *
   * _Strongly_ prefer using one of the convenience constructors. This class is
   * arguably too flexible to ensure it can support any scenario. Functional
   * arguments allow  overriding without risks that come with subclasses.
   *
   * For example, the default behavior of adjust tone at max contrast
   * to be at a 7.0 ratio with its background is principled and
   * matches accessibility guidance. That does not mean it's the desired
   * approach for _every_ design system, and every color pairing,
   * always, in every case.
   *
   * @param name The name of the dynamic color. Defaults to empty.
   * @param palette Function that provides a TonalPalette given
   * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
   * replaces the need to specify hue/chroma. By providing a tonal palette, when
   * contrast adjustments are made, intended chroma can be preserved.
   * @param tone Function that provides a tone, given a DynamicScheme.
   * @param isBackground Whether this dynamic color is a background, with
   * some other color as the foreground. Defaults to false.
   * @param background The background of the dynamic color (as a function of a
   *     `DynamicScheme`), if it exists.
   * @param secondBackground A second background of the dynamic color (as a
   *     function of a `DynamicScheme`), if it
   * exists.
   * @param contrastCurve A `ContrastCurve` object specifying how its contrast
   * against its background should behave in various contrast levels options.
   * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
   * constraint between two colors. One of them must be the color being
   * constructed.
   */
  constructor(e, t, s, r, n, o, v, a) {
    if (this.name = e, this.palette = t, this.tone = s, this.isBackground = r, this.background = n, this.secondBackground = o, this.contrastCurve = v, this.toneDeltaPair = a, this.hctCache = /* @__PURE__ */ new Map(), !n && o)
      throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
    if (!n && v)
      throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
    if (n && !v)
      throw new Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`);
  }
  /**
   * Return a ARGB integer (i.e. a hex code).
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getArgb(e) {
    return this.getHct(e).toInt();
  }
  /**
   * Return a color, expressed in the HCT color space, that this
   * DynamicColor is under the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getHct(e) {
    const t = this.hctCache.get(e);
    if (t != null)
      return t;
    const s = this.getTone(e), r = this.palette(e).getHct(s);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, r), r;
  }
  /**
   * Return a tone, T in the HCT color space, that this DynamicColor is under
   * the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getTone(e) {
    const t = e.contrastLevel < 0;
    if (this.toneDeltaPair) {
      const s = this.toneDeltaPair(e), r = s.roleA, n = s.roleB, o = s.delta, v = s.polarity, a = s.stayTogether, y = this.background(e).getTone(e), d = v === "nearer" || v === "lighter" && !e.isDark || v === "darker" && e.isDark, u = d ? r : n, i = d ? n : r, w = this.name === u.name, f = e.isDark ? 1 : -1, z = u.contrastCurve.getContrast(e.contrastLevel), k = i.contrastCurve.getContrast(e.contrastLevel), g = u.tone(e);
      let b = W.ratioOfTones(y, g) >= z ? g : C.foregroundTone(y, z);
      const M = i.tone(e);
      let h = W.ratioOfTones(y, M) >= k ? M : C.foregroundTone(y, k);
      return t && (b = C.foregroundTone(y, z), h = C.foregroundTone(y, k)), (h - b) * f >= o || (h = ol(0, 100, b + o * f), (h - b) * f >= o || (b = ol(0, 100, h - o * f))), 50 <= b && b < 60 ? f > 0 ? (b = 60, h = Math.max(h, b + o * f)) : (b = 49, h = Math.min(h, b + o * f)) : 50 <= h && h < 60 && (a ? f > 0 ? (b = 60, h = Math.max(h, b + o * f)) : (b = 49, h = Math.min(h, b + o * f)) : f > 0 ? h = 60 : h = 49), w ? b : h;
    } else {
      let s = this.tone(e);
      if (this.background == null)
        return s;
      const r = this.background(e).getTone(e), n = this.contrastCurve.getContrast(e.contrastLevel);
      if (W.ratioOfTones(r, s) >= n || (s = C.foregroundTone(r, n)), t && (s = C.foregroundTone(r, n)), this.isBackground && 50 <= s && s < 60 && (W.ratioOfTones(49, r) >= n ? s = 49 : s = 60), this.secondBackground) {
        const [o, v] = [this.background, this.secondBackground], [a, c] = [o(e).getTone(e), v(e).getTone(e)], [y, d] = [Math.max(a, c), Math.min(a, c)];
        if (W.ratioOfTones(y, s) >= n && W.ratioOfTones(d, s) >= n)
          return s;
        const u = W.lighter(y, n), i = W.darker(d, n), w = [];
        return u !== -1 && w.push(u), i !== -1 && w.push(i), C.tonePrefersLightForeground(a) || C.tonePrefersLightForeground(c) ? u < 0 ? 100 : u : w.length === 1 ? w[0] : i < 0 ? 0 : i;
      }
      return s;
    }
  }
  /**
   * Given a background tone, find a foreground tone, while ensuring they reach
   * a contrast ratio that is as close to [ratio] as possible.
   *
   * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
   *     falls outside that range.
   * @param ratio The contrast ratio desired between bgTone and the return
   *     value.
   */
  static foregroundTone(e, t) {
    const s = W.lighterUnsafe(e, t), r = W.darkerUnsafe(e, t), n = W.ratioOfTones(s, e), o = W.ratioOfTones(r, e);
    if (C.tonePrefersLightForeground(e)) {
      const a = Math.abs(n - o) < 0.1 && n < t && o < t;
      return n >= t || n >= o || a ? s : r;
    } else
      return o >= t || o >= n ? r : s;
  }
  /**
   * Returns whether [tone] prefers a light foreground.
   *
   * People prefer white foregrounds on ~T60-70. Observed over time, and also
   * by Andrew Somers during research for APCA.
   *
   * T60 used as to create the smallest discontinuity possible when skipping
   * down to T49 in order to ensure light foregrounds.
   * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
   * 60, it should not be adjusted. Therefore, 60 is excluded here.
   */
  static tonePrefersLightForeground(e) {
    return Math.round(e) < 60;
  }
  /**
   * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
   * color.
   */
  static toneAllowsLightForeground(e) {
    return Math.round(e) <= 49;
  }
  /**
   * Adjust a tone such that white has 4.5 contrast, if the tone is
   * reasonably close to supporting it.
   */
  static enableLightForeground(e) {
    return C.tonePrefersLightForeground(e) && !C.toneAllowsLightForeground(e) ? 49 : e;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ue;
(function(l) {
  l[l.MONOCHROME = 0] = "MONOCHROME", l[l.NEUTRAL = 1] = "NEUTRAL", l[l.TONAL_SPOT = 2] = "TONAL_SPOT", l[l.VIBRANT = 3] = "VIBRANT", l[l.EXPRESSIVE = 4] = "EXPRESSIVE", l[l.FIDELITY = 5] = "FIDELITY", l[l.CONTENT = 6] = "CONTENT", l[l.RAINBOW = 7] = "RAINBOW", l[l.FRUIT_SALAD = 8] = "FRUIT_SALAD";
})(Ue || (Ue = {}));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Contrast requirement for contrast level -1.0
   * @param normal Contrast requirement for contrast level 0.0
   * @param medium Contrast requirement for contrast level 0.5
   * @param high Contrast requirement for contrast level 1.0
   */
  constructor(e, t, s, r) {
    this.low = e, this.normal = t, this.medium = s, this.high = r;
  }
  /**
   * Returns the contrast ratio at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal);
   * -1.0 is the lowest; 1.0 is the highest.
   * @return The contrast ratio, a number between 1.0 and 21.0.
   */
  getContrast(e) {
    return e <= -1 ? this.low : e < 0 ? je(this.low, this.normal, (e - -1) / 1) : e < 0.5 ? je(this.normal, this.medium, (e - 0) / 0.5) : e < 1 ? je(this.medium, this.high, (e - 0.5) / 0.5) : this.high;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie {
  /**
   * Documents a constraint in tone distance between two DynamicColors.
   *
   * The polarity is an adjective that describes "A", compared to "B".
   *
   * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
   * A's tone should be at least 15 darker than B's.
   *
   * 'nearer' and 'farther' describes closeness to the surface roles. For
   * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
   * should be 10 lighter than B in light mode, and 10 darker than B in dark
   * mode.
   *
   * @param roleA The first role in a pair.
   * @param roleB The second role in a pair.
   * @param delta Required difference between tones. Absolute value, negative
   * values have undefined behavior.
   * @param polarity The relative relation between tones of roleA and roleB,
   * as described above.
   * @param stayTogether Whether these two roles should stay on the same side of
   * the "awkward zone" (T50-59). This is necessary for certain cases where
   * one role has two backgrounds.
   */
  constructor(e, t, s, r, n) {
    this.roleA = e, this.roleB = t, this.delta = s, this.polarity = r, this.stayTogether = n;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(l) {
  return l.variant === Ue.FIDELITY || l.variant === Ue.CONTENT;
}
function G(l) {
  return l.variant === Ue.MONOCHROME;
}
function Ts(l, e, t, s) {
  let r = t, n = H.from(l, e, t);
  if (n.chroma < e) {
    let o = n.chroma;
    for (; n.chroma < e; ) {
      r += s ? -1 : 1;
      const v = H.from(l, e, r);
      if (o > v.chroma || Math.abs(v.chroma - e) < 0.4)
        break;
      const a = Math.abs(v.chroma - e), c = Math.abs(n.chroma - e);
      a < c && (n = v), o = Math.max(o, v.chroma);
    }
  }
  return r;
}
function Ds(l) {
  return pe.make(
    /*whitePoint=*/
    void 0,
    /*adaptingLuminance=*/
    void 0,
    /*backgroundLstar=*/
    l.isDark ? 30 : 80,
    /*surround=*/
    void 0,
    /*discountingIlluminant=*/
    void 0
  );
}
function Bl(l, e) {
  const t = l.inViewingConditions(Ds(e));
  return C.tonePrefersLightForeground(l.tone) && !C.toneAllowsLightForeground(t.tone) ? C.enableLightForeground(l.tone) : C.enableLightForeground(t.tone);
}
class m {
  static highestSurface(e) {
    return e.isDark ? m.surfaceBright : m.surfaceDim;
  }
}
m.contentAccentToneDelta = 15;
m.primaryPaletteKeyColor = C.fromPalette({
  name: "primary_palette_key_color",
  palette: (l) => l.primaryPalette,
  tone: (l) => l.primaryPalette.keyColor.tone
});
m.secondaryPaletteKeyColor = C.fromPalette({
  name: "secondary_palette_key_color",
  palette: (l) => l.secondaryPalette,
  tone: (l) => l.secondaryPalette.keyColor.tone
});
m.tertiaryPaletteKeyColor = C.fromPalette({
  name: "tertiary_palette_key_color",
  palette: (l) => l.tertiaryPalette,
  tone: (l) => l.tertiaryPalette.keyColor.tone
});
m.neutralPaletteKeyColor = C.fromPalette({
  name: "neutral_palette_key_color",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.neutralPalette.keyColor.tone
});
m.neutralVariantPaletteKeyColor = C.fromPalette({
  name: "neutral_variant_palette_key_color",
  palette: (l) => l.neutralVariantPalette,
  tone: (l) => l.neutralVariantPalette.keyColor.tone
});
m.background = C.fromPalette({
  name: "background",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 6 : 98,
  isBackground: !0
});
m.onBackground = C.fromPalette({
  name: "on_background",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 90 : 10,
  background: (l) => m.background,
  contrastCurve: new O(3, 3, 4.5, 7)
});
m.surface = C.fromPalette({
  name: "surface",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 6 : 98,
  isBackground: !0
});
m.surfaceDim = C.fromPalette({
  name: "surface_dim",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 6 : 87,
  isBackground: !0
});
m.surfaceBright = C.fromPalette({
  name: "surface_bright",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 24 : 98,
  isBackground: !0
});
m.surfaceContainerLowest = C.fromPalette({
  name: "surface_container_lowest",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 4 : 100,
  isBackground: !0
});
m.surfaceContainerLow = C.fromPalette({
  name: "surface_container_low",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 10 : 96,
  isBackground: !0
});
m.surfaceContainer = C.fromPalette({
  name: "surface_container",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 12 : 94,
  isBackground: !0
});
m.surfaceContainerHigh = C.fromPalette({
  name: "surface_container_high",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 17 : 92,
  isBackground: !0
});
m.surfaceContainerHighest = C.fromPalette({
  name: "surface_container_highest",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 22 : 90,
  isBackground: !0
});
m.onSurface = C.fromPalette({
  name: "on_surface",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 90 : 10,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.surfaceVariant = C.fromPalette({
  name: "surface_variant",
  palette: (l) => l.neutralVariantPalette,
  tone: (l) => l.isDark ? 30 : 90,
  isBackground: !0
});
m.onSurfaceVariant = C.fromPalette({
  name: "on_surface_variant",
  palette: (l) => l.neutralVariantPalette,
  tone: (l) => l.isDark ? 80 : 30,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(3, 4.5, 7, 11)
});
m.inverseSurface = C.fromPalette({
  name: "inverse_surface",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 90 : 20
});
m.inverseOnSurface = C.fromPalette({
  name: "inverse_on_surface",
  palette: (l) => l.neutralPalette,
  tone: (l) => l.isDark ? 20 : 95,
  background: (l) => m.inverseSurface,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.outline = C.fromPalette({
  name: "outline",
  palette: (l) => l.neutralVariantPalette,
  tone: (l) => l.isDark ? 60 : 50,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1.5, 3, 4.5, 7)
});
m.outlineVariant = C.fromPalette({
  name: "outline_variant",
  palette: (l) => l.neutralVariantPalette,
  tone: (l) => l.isDark ? 30 : 80,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1, 1, 3, 7)
});
m.shadow = C.fromPalette({
  name: "shadow",
  palette: (l) => l.neutralPalette,
  tone: (l) => 0
});
m.scrim = C.fromPalette({
  name: "scrim",
  palette: (l) => l.neutralPalette,
  tone: (l) => 0
});
m.surfaceTint = C.fromPalette({
  name: "surface_tint",
  palette: (l) => l.primaryPalette,
  tone: (l) => l.isDark ? 80 : 40,
  isBackground: !0
});
m.primary = C.fromPalette({
  name: "primary",
  palette: (l) => l.primaryPalette,
  tone: (l) => G(l) ? l.isDark ? 100 : 0 : l.isDark ? 80 : 40,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(3, 4.5, 7, 11),
  toneDeltaPair: (l) => new ie(m.primaryContainer, m.primary, 15, "nearer", !1)
});
m.onPrimary = C.fromPalette({
  name: "on_primary",
  palette: (l) => l.primaryPalette,
  tone: (l) => G(l) ? l.isDark ? 10 : 90 : l.isDark ? 20 : 100,
  background: (l) => m.primary,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.primaryContainer = C.fromPalette({
  name: "primary_container",
  palette: (l) => l.primaryPalette,
  tone: (l) => Le(l) ? Bl(l.sourceColorHct, l) : G(l) ? l.isDark ? 85 : 25 : l.isDark ? 30 : 90,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1, 1, 3, 7),
  toneDeltaPair: (l) => new ie(m.primaryContainer, m.primary, 15, "nearer", !1)
});
m.onPrimaryContainer = C.fromPalette({
  name: "on_primary_container",
  palette: (l) => l.primaryPalette,
  tone: (l) => Le(l) ? C.foregroundTone(m.primaryContainer.tone(l), 4.5) : G(l) ? l.isDark ? 0 : 100 : l.isDark ? 90 : 10,
  background: (l) => m.primaryContainer,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.inversePrimary = C.fromPalette({
  name: "inverse_primary",
  palette: (l) => l.primaryPalette,
  tone: (l) => l.isDark ? 40 : 80,
  background: (l) => m.inverseSurface,
  contrastCurve: new O(3, 4.5, 7, 11)
});
m.secondary = C.fromPalette({
  name: "secondary",
  palette: (l) => l.secondaryPalette,
  tone: (l) => l.isDark ? 80 : 40,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(3, 4.5, 7, 11),
  toneDeltaPair: (l) => new ie(m.secondaryContainer, m.secondary, 15, "nearer", !1)
});
m.onSecondary = C.fromPalette({
  name: "on_secondary",
  palette: (l) => l.secondaryPalette,
  tone: (l) => G(l) ? l.isDark ? 10 : 100 : l.isDark ? 20 : 100,
  background: (l) => m.secondary,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.secondaryContainer = C.fromPalette({
  name: "secondary_container",
  palette: (l) => l.secondaryPalette,
  tone: (l) => {
    const e = l.isDark ? 30 : 90;
    if (G(l))
      return l.isDark ? 30 : 85;
    if (!Le(l))
      return e;
    let t = Ts(l.secondaryPalette.hue, l.secondaryPalette.chroma, e, !l.isDark);
    return t = Bl(l.secondaryPalette.getHct(t), l), t;
  },
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1, 1, 3, 7),
  toneDeltaPair: (l) => new ie(m.secondaryContainer, m.secondary, 15, "nearer", !1)
});
m.onSecondaryContainer = C.fromPalette({
  name: "on_secondary_container",
  palette: (l) => l.secondaryPalette,
  tone: (l) => Le(l) ? C.foregroundTone(m.secondaryContainer.tone(l), 4.5) : l.isDark ? 90 : 10,
  background: (l) => m.secondaryContainer,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.tertiary = C.fromPalette({
  name: "tertiary",
  palette: (l) => l.tertiaryPalette,
  tone: (l) => G(l) ? l.isDark ? 90 : 25 : l.isDark ? 80 : 40,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(3, 4.5, 7, 11),
  toneDeltaPair: (l) => new ie(m.tertiaryContainer, m.tertiary, 15, "nearer", !1)
});
m.onTertiary = C.fromPalette({
  name: "on_tertiary",
  palette: (l) => l.tertiaryPalette,
  tone: (l) => G(l) ? l.isDark ? 10 : 90 : l.isDark ? 20 : 100,
  background: (l) => m.tertiary,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.tertiaryContainer = C.fromPalette({
  name: "tertiary_container",
  palette: (l) => l.tertiaryPalette,
  tone: (l) => {
    if (G(l))
      return l.isDark ? 60 : 49;
    if (!Le(l))
      return l.isDark ? 30 : 90;
    const e = Bl(l.tertiaryPalette.getHct(l.sourceColorHct.tone), l), t = l.tertiaryPalette.getHct(e);
    return Rl.fixIfDisliked(t).tone;
  },
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1, 1, 3, 7),
  toneDeltaPair: (l) => new ie(m.tertiaryContainer, m.tertiary, 15, "nearer", !1)
});
m.onTertiaryContainer = C.fromPalette({
  name: "on_tertiary_container",
  palette: (l) => l.tertiaryPalette,
  tone: (l) => G(l) ? l.isDark ? 0 : 100 : Le(l) ? C.foregroundTone(m.tertiaryContainer.tone(l), 4.5) : l.isDark ? 90 : 10,
  background: (l) => m.tertiaryContainer,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.error = C.fromPalette({
  name: "error",
  palette: (l) => l.errorPalette,
  tone: (l) => l.isDark ? 80 : 40,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(3, 4.5, 7, 11),
  toneDeltaPair: (l) => new ie(m.errorContainer, m.error, 15, "nearer", !1)
});
m.onError = C.fromPalette({
  name: "on_error",
  palette: (l) => l.errorPalette,
  tone: (l) => l.isDark ? 20 : 100,
  background: (l) => m.error,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.errorContainer = C.fromPalette({
  name: "error_container",
  palette: (l) => l.errorPalette,
  tone: (l) => l.isDark ? 30 : 90,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1, 1, 3, 7),
  toneDeltaPair: (l) => new ie(m.errorContainer, m.error, 15, "nearer", !1)
});
m.onErrorContainer = C.fromPalette({
  name: "on_error_container",
  palette: (l) => l.errorPalette,
  tone: (l) => l.isDark ? 90 : 10,
  background: (l) => m.errorContainer,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.primaryFixed = C.fromPalette({
  name: "primary_fixed",
  palette: (l) => l.primaryPalette,
  tone: (l) => G(l) ? 40 : 90,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1, 1, 3, 7),
  toneDeltaPair: (l) => new ie(m.primaryFixed, m.primaryFixedDim, 10, "lighter", !0)
});
m.primaryFixedDim = C.fromPalette({
  name: "primary_fixed_dim",
  palette: (l) => l.primaryPalette,
  tone: (l) => G(l) ? 30 : 80,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1, 1, 3, 7),
  toneDeltaPair: (l) => new ie(m.primaryFixed, m.primaryFixedDim, 10, "lighter", !0)
});
m.onPrimaryFixed = C.fromPalette({
  name: "on_primary_fixed",
  palette: (l) => l.primaryPalette,
  tone: (l) => G(l) ? 100 : 10,
  background: (l) => m.primaryFixedDim,
  secondBackground: (l) => m.primaryFixed,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.onPrimaryFixedVariant = C.fromPalette({
  name: "on_primary_fixed_variant",
  palette: (l) => l.primaryPalette,
  tone: (l) => G(l) ? 90 : 30,
  background: (l) => m.primaryFixedDim,
  secondBackground: (l) => m.primaryFixed,
  contrastCurve: new O(3, 4.5, 7, 11)
});
m.secondaryFixed = C.fromPalette({
  name: "secondary_fixed",
  palette: (l) => l.secondaryPalette,
  tone: (l) => G(l) ? 80 : 90,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1, 1, 3, 7),
  toneDeltaPair: (l) => new ie(m.secondaryFixed, m.secondaryFixedDim, 10, "lighter", !0)
});
m.secondaryFixedDim = C.fromPalette({
  name: "secondary_fixed_dim",
  palette: (l) => l.secondaryPalette,
  tone: (l) => G(l) ? 70 : 80,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1, 1, 3, 7),
  toneDeltaPair: (l) => new ie(m.secondaryFixed, m.secondaryFixedDim, 10, "lighter", !0)
});
m.onSecondaryFixed = C.fromPalette({
  name: "on_secondary_fixed",
  palette: (l) => l.secondaryPalette,
  tone: (l) => 10,
  background: (l) => m.secondaryFixedDim,
  secondBackground: (l) => m.secondaryFixed,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.onSecondaryFixedVariant = C.fromPalette({
  name: "on_secondary_fixed_variant",
  palette: (l) => l.secondaryPalette,
  tone: (l) => G(l) ? 25 : 30,
  background: (l) => m.secondaryFixedDim,
  secondBackground: (l) => m.secondaryFixed,
  contrastCurve: new O(3, 4.5, 7, 11)
});
m.tertiaryFixed = C.fromPalette({
  name: "tertiary_fixed",
  palette: (l) => l.tertiaryPalette,
  tone: (l) => G(l) ? 40 : 90,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1, 1, 3, 7),
  toneDeltaPair: (l) => new ie(m.tertiaryFixed, m.tertiaryFixedDim, 10, "lighter", !0)
});
m.tertiaryFixedDim = C.fromPalette({
  name: "tertiary_fixed_dim",
  palette: (l) => l.tertiaryPalette,
  tone: (l) => G(l) ? 30 : 80,
  isBackground: !0,
  background: (l) => m.highestSurface(l),
  contrastCurve: new O(1, 1, 3, 7),
  toneDeltaPair: (l) => new ie(m.tertiaryFixed, m.tertiaryFixedDim, 10, "lighter", !0)
});
m.onTertiaryFixed = C.fromPalette({
  name: "on_tertiary_fixed",
  palette: (l) => l.tertiaryPalette,
  tone: (l) => G(l) ? 100 : 10,
  background: (l) => m.tertiaryFixedDim,
  secondBackground: (l) => m.tertiaryFixed,
  contrastCurve: new O(4.5, 7, 11, 21)
});
m.onTertiaryFixedVariant = C.fromPalette({
  name: "on_tertiary_fixed_variant",
  palette: (l) => l.tertiaryPalette,
  tone: (l) => G(l) ? 90 : 30,
  background: (l) => m.tertiaryFixedDim,
  secondBackground: (l) => m.tertiaryFixed,
  contrastCurve: new O(3, 4.5, 7, 11)
});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee {
  /**
   * @param argb ARGB representation of a color
   * @return Tones matching that color's hue and chroma.
   */
  static fromInt(e) {
    const t = H.fromInt(e);
    return ee.fromHct(t);
  }
  /**
   * @param hct Hct
   * @return Tones matching that color's hue and chroma.
   */
  static fromHct(e) {
    return new ee(e.hue, e.chroma, e);
  }
  /**
   * @param hue HCT hue
   * @param chroma HCT chroma
   * @return Tones matching hue and chroma.
   */
  static fromHueAndChroma(e, t) {
    return new ee(e, t, ee.createKeyColor(e, t));
  }
  constructor(e, t, s) {
    this.hue = e, this.chroma = t, this.keyColor = s, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e, t) {
    let r = H.from(e, t, 50), n = Math.abs(r.chroma - t);
    for (let o = 1; o < 50; o += 1) {
      if (Math.round(t) === Math.round(r.chroma))
        return r;
      const v = H.from(e, t, 50 + o), a = Math.abs(v.chroma - t);
      a < n && (n = a, r = v);
      const c = H.from(e, t, 50 - o), y = Math.abs(c.chroma - t);
      y < n && (n = y, r = c);
    }
    return r;
  }
  /**
   * @param tone HCT tone, measured from 0 to 100.
   * @return ARGB representation of a color with that tone.
   */
  tone(e) {
    let t = this.cache.get(e);
    return t === void 0 && (t = H.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, t)), t;
  }
  /**
   * @param tone HCT tone.
   * @return HCT representation of a color with that tone.
   */
  getHct(e) {
    return H.fromInt(this.tone(e));
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q {
  /**
   * @param argb ARGB representation of a color
   */
  static of(e) {
    return new Q(e, !1);
  }
  /**
   * @param argb ARGB representation of a color
   */
  static contentOf(e) {
    return new Q(e, !0);
  }
  /**
   * Create a [CorePalette] from a set of colors
   */
  static fromColors(e) {
    return Q.createPaletteFromColors(!1, e);
  }
  /**
   * Create a content [CorePalette] from a set of colors
   */
  static contentFromColors(e) {
    return Q.createPaletteFromColors(!0, e);
  }
  static createPaletteFromColors(e, t) {
    const s = new Q(t.primary, e);
    if (t.secondary) {
      const r = new Q(t.secondary, e);
      s.a2 = r.a1;
    }
    if (t.tertiary) {
      const r = new Q(t.tertiary, e);
      s.a3 = r.a1;
    }
    if (t.error) {
      const r = new Q(t.error, e);
      s.error = r.a1;
    }
    if (t.neutral) {
      const r = new Q(t.neutral, e);
      s.n1 = r.n1;
    }
    if (t.neutralVariant) {
      const r = new Q(t.neutralVariant, e);
      s.n2 = r.n2;
    }
    return s;
  }
  constructor(e, t) {
    const s = H.fromInt(e), r = s.hue, n = s.chroma;
    t ? (this.a1 = ee.fromHueAndChroma(r, n), this.a2 = ee.fromHueAndChroma(r, n / 3), this.a3 = ee.fromHueAndChroma(r + 60, n / 2), this.n1 = ee.fromHueAndChroma(r, Math.min(n / 12, 4)), this.n2 = ee.fromHueAndChroma(r, Math.min(n / 6, 8))) : (this.a1 = ee.fromHueAndChroma(r, Math.max(48, n)), this.a2 = ee.fromHueAndChroma(r, 16), this.a3 = ee.fromHueAndChroma(r + 60, 24), this.n1 = ee.fromHueAndChroma(r, 4), this.n2 = ee.fromHueAndChroma(r, 8)), this.error = ee.fromHueAndChroma(25, 84);
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As {
  /**
   * Convert a color represented in ARGB to a 3-element array of L*a*b*
   * coordinates of the color.
   */
  fromInt(e) {
    return Ms(e);
  }
  /**
   * Convert a 3-element array to a color represented in ARGB.
   */
  toInt(e) {
    return Cs(e[0], e[1], e[2]);
  }
  /**
   * Standard CIE 1976 delta E formula also takes the square root, unneeded
   * here. This method is used by quantization algorithms to compare distance,
   * and the relative ordering is the same, with or without a square root.
   *
   * This relatively minor optimization is helpful because this method is
   * called at least once for each pixel in an image.
   */
  distance(e, t) {
    const s = e[0] - t[0], r = e[1] - t[1], n = e[2] - t[2];
    return s * s + r * r + n * n;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Es = 10, $s = 3;
class Rs {
  /**
   * @param inputPixels Colors in ARGB format.
   * @param startingClusters Defines the initial state of the quantizer. Passing
   *     an empty array is fine, the implementation will create its own initial
   *     state that leads to reproducible results for the same inputs.
   *     Passing an array that is the result of Wu quantization leads to higher
   *     quality results.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Colors in ARGB format.
   */
  static quantize(e, t, s) {
    const r = /* @__PURE__ */ new Map(), n = new Array(), o = new Array(), v = new As();
    let a = 0;
    for (let g = 0; g < e.length; g++) {
      const b = e[g], M = r.get(b);
      M === void 0 ? (a++, n.push(v.fromInt(b)), o.push(b), r.set(b, 1)) : r.set(b, M + 1);
    }
    const c = new Array();
    for (let g = 0; g < a; g++) {
      const b = o[g], M = r.get(b);
      M !== void 0 && (c[g] = M);
    }
    let y = Math.min(s, a);
    t.length > 0 && (y = Math.min(y, t.length));
    const d = new Array();
    for (let g = 0; g < t.length; g++)
      d.push(v.fromInt(t[g]));
    const u = y - d.length;
    if (t.length === 0 && u > 0)
      for (let g = 0; g < u; g++) {
        const b = Math.random() * 100, M = Math.random() * (100 - -100 + 1) + -100, h = Math.random() * (100 - -100 + 1) + -100;
        d.push(new Array(b, M, h));
      }
    const i = new Array();
    for (let g = 0; g < a; g++)
      i.push(Math.floor(Math.random() * y));
    const w = new Array();
    for (let g = 0; g < y; g++) {
      w.push(new Array());
      for (let b = 0; b < y; b++)
        w[g].push(0);
    }
    const f = new Array();
    for (let g = 0; g < y; g++) {
      f.push(new Array());
      for (let b = 0; b < y; b++)
        f[g].push(new Bs());
    }
    const z = new Array();
    for (let g = 0; g < y; g++)
      z.push(0);
    for (let g = 0; g < Es; g++) {
      for (let p = 0; p < y; p++) {
        for (let I = p + 1; I < y; I++) {
          const L = v.distance(d[p], d[I]);
          f[I][p].distance = L, f[I][p].index = p, f[p][I].distance = L, f[p][I].index = I;
        }
        f[p].sort();
        for (let I = 0; I < y; I++)
          w[p][I] = f[p][I].index;
      }
      let b = 0;
      for (let p = 0; p < a; p++) {
        const I = n[p], L = i[p], E = d[L], S = v.distance(I, E);
        let T = S, V = -1;
        for (let N = 0; N < y; N++) {
          if (f[L][N].distance >= 4 * S)
            continue;
          const U = v.distance(I, d[N]);
          U < T && (T = U, V = N);
        }
        V !== -1 && Math.abs(Math.sqrt(T) - Math.sqrt(S)) > $s && (b++, i[p] = V);
      }
      if (b === 0 && g !== 0)
        break;
      const M = new Array(y).fill(0), h = new Array(y).fill(0), P = new Array(y).fill(0);
      for (let p = 0; p < y; p++)
        z[p] = 0;
      for (let p = 0; p < a; p++) {
        const I = i[p], L = n[p], E = c[p];
        z[I] += E, M[I] += L[0] * E, h[I] += L[1] * E, P[I] += L[2] * E;
      }
      for (let p = 0; p < y; p++) {
        const I = z[p];
        if (I === 0) {
          d[p] = [0, 0, 0];
          continue;
        }
        const L = M[p] / I, E = h[p] / I, S = P[p] / I;
        d[p] = [L, E, S];
      }
    }
    const k = /* @__PURE__ */ new Map();
    for (let g = 0; g < y; g++) {
      const b = z[g];
      if (b === 0)
        continue;
      const M = v.toInt(d[g]);
      k.has(M) || k.set(M, b);
    }
    return k;
  }
}
class Bs {
  constructor() {
    this.distance = -1, this.index = -1;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs {
  /**
   * @param pixels Colors in ARGB format.
   * @return A Map with keys of ARGB colors, and values of the number of times
   *     the color appears in the image.
   */
  static quantize(e) {
    const t = /* @__PURE__ */ new Map();
    for (let s = 0; s < e.length; s++) {
      const r = e[s];
      zs(r) < 255 || t.set(r, (t.get(r) ?? 0) + 1);
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je = 5, ue = 33, Se = 35937, re = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue"
};
class Os {
  constructor(e = [], t = [], s = [], r = [], n = [], o = []) {
    this.weights = e, this.momentsR = t, this.momentsG = s, this.momentsB = r, this.moments = n, this.cubes = o;
  }
  /**
   * @param pixels Colors in ARGB format.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Colors in ARGB format.
   */
  quantize(e, t) {
    this.constructHistogram(e), this.computeMoments();
    const s = this.createBoxes(t);
    return this.createResult(s.resultCount);
  }
  constructHistogram(e) {
    this.weights = Array.from({ length: Se }).fill(0), this.momentsR = Array.from({ length: Se }).fill(0), this.momentsG = Array.from({ length: Se }).fill(0), this.momentsB = Array.from({ length: Se }).fill(0), this.moments = Array.from({ length: Se }).fill(0);
    const t = Fs.quantize(e);
    for (const [s, r] of t.entries()) {
      const n = cl(s), o = yl(s), v = dl(s), a = 8 - Je, c = (n >> a) + 1, y = (o >> a) + 1, d = (v >> a) + 1, u = this.getIndex(c, y, d);
      this.weights[u] = (this.weights[u] ?? 0) + r, this.momentsR[u] += r * n, this.momentsG[u] += r * o, this.momentsB[u] += r * v, this.moments[u] += r * (n * n + o * o + v * v);
    }
  }
  computeMoments() {
    for (let e = 1; e < ue; e++) {
      const t = Array.from({ length: ue }).fill(0), s = Array.from({ length: ue }).fill(0), r = Array.from({ length: ue }).fill(0), n = Array.from({ length: ue }).fill(0), o = Array.from({ length: ue }).fill(0);
      for (let v = 1; v < ue; v++) {
        let a = 0, c = 0, y = 0, d = 0, u = 0;
        for (let i = 1; i < ue; i++) {
          const w = this.getIndex(e, v, i);
          a += this.weights[w], c += this.momentsR[w], y += this.momentsG[w], d += this.momentsB[w], u += this.moments[w], t[i] += a, s[i] += c, r[i] += y, n[i] += d, o[i] += u;
          const f = this.getIndex(e - 1, v, i);
          this.weights[w] = this.weights[f] + t[i], this.momentsR[w] = this.momentsR[f] + s[i], this.momentsG[w] = this.momentsG[f] + r[i], this.momentsB[w] = this.momentsB[f] + n[i], this.moments[w] = this.moments[f] + o[i];
        }
      }
    }
  }
  createBoxes(e) {
    this.cubes = Array.from({ length: e }).fill(0).map(() => new Ls());
    const t = Array.from({ length: e }).fill(0);
    this.cubes[0].r0 = 0, this.cubes[0].g0 = 0, this.cubes[0].b0 = 0, this.cubes[0].r1 = ue - 1, this.cubes[0].g1 = ue - 1, this.cubes[0].b1 = ue - 1;
    let s = e, r = 0;
    for (let n = 1; n < e; n++) {
      this.cut(this.cubes[r], this.cubes[n]) ? (t[r] = this.cubes[r].vol > 1 ? this.variance(this.cubes[r]) : 0, t[n] = this.cubes[n].vol > 1 ? this.variance(this.cubes[n]) : 0) : (t[r] = 0, n--), r = 0;
      let o = t[0];
      for (let v = 1; v <= n; v++)
        t[v] > o && (o = t[v], r = v);
      if (o <= 0) {
        s = n + 1;
        break;
      }
    }
    return new Ss(e, s);
  }
  createResult(e) {
    const t = [];
    for (let s = 0; s < e; ++s) {
      const r = this.cubes[s], n = this.volume(r, this.weights);
      if (n > 0) {
        const o = Math.round(this.volume(r, this.momentsR) / n), v = Math.round(this.volume(r, this.momentsG) / n), a = Math.round(this.volume(r, this.momentsB) / n), c = 255 << 24 | (o & 255) << 16 | (v & 255) << 8 | a & 255;
        t.push(c);
      }
    }
    return t;
  }
  variance(e) {
    const t = this.volume(e, this.momentsR), s = this.volume(e, this.momentsG), r = this.volume(e, this.momentsB), n = this.moments[this.getIndex(e.r1, e.g1, e.b1)] - this.moments[this.getIndex(e.r1, e.g1, e.b0)] - this.moments[this.getIndex(e.r1, e.g0, e.b1)] + this.moments[this.getIndex(e.r1, e.g0, e.b0)] - this.moments[this.getIndex(e.r0, e.g1, e.b1)] + this.moments[this.getIndex(e.r0, e.g1, e.b0)] + this.moments[this.getIndex(e.r0, e.g0, e.b1)] - this.moments[this.getIndex(e.r0, e.g0, e.b0)], o = t * t + s * s + r * r, v = this.volume(e, this.weights);
    return n - o / v;
  }
  cut(e, t) {
    const s = this.volume(e, this.momentsR), r = this.volume(e, this.momentsG), n = this.volume(e, this.momentsB), o = this.volume(e, this.weights), v = this.maximize(e, re.RED, e.r0 + 1, e.r1, s, r, n, o), a = this.maximize(e, re.GREEN, e.g0 + 1, e.g1, s, r, n, o), c = this.maximize(e, re.BLUE, e.b0 + 1, e.b1, s, r, n, o);
    let y;
    const d = v.maximum, u = a.maximum, i = c.maximum;
    if (d >= u && d >= i) {
      if (v.cutLocation < 0)
        return !1;
      y = re.RED;
    } else
      u >= d && u >= i ? y = re.GREEN : y = re.BLUE;
    switch (t.r1 = e.r1, t.g1 = e.g1, t.b1 = e.b1, y) {
      case re.RED:
        e.r1 = v.cutLocation, t.r0 = e.r1, t.g0 = e.g0, t.b0 = e.b0;
        break;
      case re.GREEN:
        e.g1 = a.cutLocation, t.r0 = e.r0, t.g0 = e.g1, t.b0 = e.b0;
        break;
      case re.BLUE:
        e.b1 = c.cutLocation, t.r0 = e.r0, t.g0 = e.g0, t.b0 = e.b1;
        break;
      default:
        throw new Error("unexpected direction " + y);
    }
    return e.vol = (e.r1 - e.r0) * (e.g1 - e.g0) * (e.b1 - e.b0), t.vol = (t.r1 - t.r0) * (t.g1 - t.g0) * (t.b1 - t.b0), !0;
  }
  maximize(e, t, s, r, n, o, v, a) {
    const c = this.bottom(e, t, this.momentsR), y = this.bottom(e, t, this.momentsG), d = this.bottom(e, t, this.momentsB), u = this.bottom(e, t, this.weights);
    let i = 0, w = -1, f = 0, z = 0, k = 0, g = 0;
    for (let b = s; b < r; b++) {
      if (f = c + this.top(e, t, b, this.momentsR), z = y + this.top(e, t, b, this.momentsG), k = d + this.top(e, t, b, this.momentsB), g = u + this.top(e, t, b, this.weights), g === 0)
        continue;
      let M = (f * f + z * z + k * k) * 1, h = g * 1, P = M / h;
      f = n - f, z = o - z, k = v - k, g = a - g, g !== 0 && (M = (f * f + z * z + k * k) * 1, h = g * 1, P += M / h, P > i && (i = P, w = b));
    }
    return new qs(w, i);
  }
  volume(e, t) {
    return t[this.getIndex(e.r1, e.g1, e.b1)] - t[this.getIndex(e.r1, e.g1, e.b0)] - t[this.getIndex(e.r1, e.g0, e.b1)] + t[this.getIndex(e.r1, e.g0, e.b0)] - t[this.getIndex(e.r0, e.g1, e.b1)] + t[this.getIndex(e.r0, e.g1, e.b0)] + t[this.getIndex(e.r0, e.g0, e.b1)] - t[this.getIndex(e.r0, e.g0, e.b0)];
  }
  bottom(e, t, s) {
    switch (t) {
      case re.RED:
        return -s[this.getIndex(e.r0, e.g1, e.b1)] + s[this.getIndex(e.r0, e.g1, e.b0)] + s[this.getIndex(e.r0, e.g0, e.b1)] - s[this.getIndex(e.r0, e.g0, e.b0)];
      case re.GREEN:
        return -s[this.getIndex(e.r1, e.g0, e.b1)] + s[this.getIndex(e.r1, e.g0, e.b0)] + s[this.getIndex(e.r0, e.g0, e.b1)] - s[this.getIndex(e.r0, e.g0, e.b0)];
      case re.BLUE:
        return -s[this.getIndex(e.r1, e.g1, e.b0)] + s[this.getIndex(e.r1, e.g0, e.b0)] + s[this.getIndex(e.r0, e.g1, e.b0)] - s[this.getIndex(e.r0, e.g0, e.b0)];
      default:
        throw new Error("unexpected direction $direction");
    }
  }
  top(e, t, s, r) {
    switch (t) {
      case re.RED:
        return r[this.getIndex(s, e.g1, e.b1)] - r[this.getIndex(s, e.g1, e.b0)] - r[this.getIndex(s, e.g0, e.b1)] + r[this.getIndex(s, e.g0, e.b0)];
      case re.GREEN:
        return r[this.getIndex(e.r1, s, e.b1)] - r[this.getIndex(e.r1, s, e.b0)] - r[this.getIndex(e.r0, s, e.b1)] + r[this.getIndex(e.r0, s, e.b0)];
      case re.BLUE:
        return r[this.getIndex(e.r1, e.g1, s)] - r[this.getIndex(e.r1, e.g0, s)] - r[this.getIndex(e.r0, e.g1, s)] + r[this.getIndex(e.r0, e.g0, s)];
      default:
        throw new Error("unexpected direction $direction");
    }
  }
  getIndex(e, t, s) {
    return (e << Je * 2) + (e << Je + 1) + e + (t << Je) + t + s;
  }
}
class Ls {
  constructor(e = 0, t = 0, s = 0, r = 0, n = 0, o = 0, v = 0) {
    this.r0 = e, this.r1 = t, this.g0 = s, this.g1 = r, this.b0 = n, this.b1 = o, this.vol = v;
  }
}
class Ss {
  /**
   * @param requestedCount how many colors the caller asked to be returned from
   *     quantization.
   * @param resultCount the actual number of colors achieved from quantization.
   *     May be lower than the requested count.
   */
  constructor(e, t) {
    this.requestedCount = e, this.resultCount = t;
  }
}
class qs {
  constructor(e, t) {
    this.cutLocation = e, this.maximum = t;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns {
  /**
   * @param pixels Colors in ARGB format.
   * @param maxColors The number of colors to divide the image into. A lower
   *     number of colors may be returned.
   * @return Map with keys of colors in ARGB format, and values of number of
   *     pixels in the original image that correspond to the color in the
   *     quantized image.
   */
  static quantize(e, t) {
    const r = new Os().quantize(e, t);
    return Rs.quantize(e, r, t);
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze {
  get primary() {
    return this.props.primary;
  }
  get onPrimary() {
    return this.props.onPrimary;
  }
  get primaryContainer() {
    return this.props.primaryContainer;
  }
  get onPrimaryContainer() {
    return this.props.onPrimaryContainer;
  }
  get secondary() {
    return this.props.secondary;
  }
  get onSecondary() {
    return this.props.onSecondary;
  }
  get secondaryContainer() {
    return this.props.secondaryContainer;
  }
  get onSecondaryContainer() {
    return this.props.onSecondaryContainer;
  }
  get tertiary() {
    return this.props.tertiary;
  }
  get onTertiary() {
    return this.props.onTertiary;
  }
  get tertiaryContainer() {
    return this.props.tertiaryContainer;
  }
  get onTertiaryContainer() {
    return this.props.onTertiaryContainer;
  }
  get error() {
    return this.props.error;
  }
  get onError() {
    return this.props.onError;
  }
  get errorContainer() {
    return this.props.errorContainer;
  }
  get onErrorContainer() {
    return this.props.onErrorContainer;
  }
  get background() {
    return this.props.background;
  }
  get onBackground() {
    return this.props.onBackground;
  }
  get surface() {
    return this.props.surface;
  }
  get onSurface() {
    return this.props.onSurface;
  }
  get surfaceVariant() {
    return this.props.surfaceVariant;
  }
  get onSurfaceVariant() {
    return this.props.onSurfaceVariant;
  }
  get outline() {
    return this.props.outline;
  }
  get outlineVariant() {
    return this.props.outlineVariant;
  }
  get shadow() {
    return this.props.shadow;
  }
  get scrim() {
    return this.props.scrim;
  }
  get inverseSurface() {
    return this.props.inverseSurface;
  }
  get inverseOnSurface() {
    return this.props.inverseOnSurface;
  }
  get inversePrimary() {
    return this.props.inversePrimary;
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material color scheme, based on the color's hue.
   */
  static light(e) {
    return ze.lightFromCorePalette(Q.of(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material color scheme, based on the color's hue.
   */
  static dark(e) {
    return ze.darkFromCorePalette(Q.of(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Light Material content color scheme, based on the color's hue.
   */
  static lightContent(e) {
    return ze.lightFromCorePalette(Q.contentOf(e));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return Dark Material content color scheme, based on the color's hue.
   */
  static darkContent(e) {
    return ze.darkFromCorePalette(Q.contentOf(e));
  }
  /**
   * Light scheme from core palette
   */
  static lightFromCorePalette(e) {
    return new ze({
      primary: e.a1.tone(40),
      onPrimary: e.a1.tone(100),
      primaryContainer: e.a1.tone(90),
      onPrimaryContainer: e.a1.tone(10),
      secondary: e.a2.tone(40),
      onSecondary: e.a2.tone(100),
      secondaryContainer: e.a2.tone(90),
      onSecondaryContainer: e.a2.tone(10),
      tertiary: e.a3.tone(40),
      onTertiary: e.a3.tone(100),
      tertiaryContainer: e.a3.tone(90),
      onTertiaryContainer: e.a3.tone(10),
      error: e.error.tone(40),
      onError: e.error.tone(100),
      errorContainer: e.error.tone(90),
      onErrorContainer: e.error.tone(10),
      background: e.n1.tone(99),
      onBackground: e.n1.tone(10),
      surface: e.n1.tone(99),
      onSurface: e.n1.tone(10),
      surfaceVariant: e.n2.tone(90),
      onSurfaceVariant: e.n2.tone(30),
      outline: e.n2.tone(50),
      outlineVariant: e.n2.tone(80),
      shadow: e.n1.tone(0),
      scrim: e.n1.tone(0),
      inverseSurface: e.n1.tone(20),
      inverseOnSurface: e.n1.tone(95),
      inversePrimary: e.a1.tone(80)
    });
  }
  /**
   * Dark scheme from core palette
   */
  static darkFromCorePalette(e) {
    return new ze({
      primary: e.a1.tone(80),
      onPrimary: e.a1.tone(20),
      primaryContainer: e.a1.tone(30),
      onPrimaryContainer: e.a1.tone(90),
      secondary: e.a2.tone(80),
      onSecondary: e.a2.tone(20),
      secondaryContainer: e.a2.tone(30),
      onSecondaryContainer: e.a2.tone(90),
      tertiary: e.a3.tone(80),
      onTertiary: e.a3.tone(20),
      tertiaryContainer: e.a3.tone(30),
      onTertiaryContainer: e.a3.tone(90),
      error: e.error.tone(80),
      onError: e.error.tone(20),
      errorContainer: e.error.tone(30),
      onErrorContainer: e.error.tone(80),
      background: e.n1.tone(10),
      onBackground: e.n1.tone(90),
      surface: e.n1.tone(10),
      onSurface: e.n1.tone(90),
      surfaceVariant: e.n2.tone(30),
      onSurfaceVariant: e.n2.tone(80),
      outline: e.n2.tone(60),
      outlineVariant: e.n2.tone(30),
      shadow: e.n1.tone(0),
      scrim: e.n1.tone(0),
      inverseSurface: e.n1.tone(90),
      inverseOnSurface: e.n1.tone(20),
      inversePrimary: e.a1.tone(40)
    });
  }
  constructor(e) {
    this.props = e;
  }
  toJSON() {
    return {
      ...this.props
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const js = {
  desired: 4,
  fallbackColorARGB: 4282549748,
  filter: !0
  // Avoid unsuitable colors.
};
function Vs(l, e) {
  return l.score > e.score ? -1 : l.score < e.score ? 1 : 0;
}
class ne {
  constructor() {
  }
  /**
   * Given a map with keys of colors and values of how often the color appears,
   * rank the colors based on suitability for being used for a UI theme.
   *
   * @param colorsToPopulation map with keys of colors and values of how often
   *     the color appears, usually from a source image.
   * @param {ScoreOptions} options optional parameters.
   * @return Colors sorted by suitability for a UI theme. The most suitable
   *     color is the first item, the least suitable is the last. There will
   *     always be at least one color returned. If all the input colors
   *     were not suitable for a theme, a default fallback color will be
   *     provided, Google Blue.
   */
  static score(e, t) {
    const { desired: s, fallbackColorARGB: r, filter: n } = { ...js, ...t }, o = [], v = new Array(360).fill(0);
    let a = 0;
    for (const [i, w] of e.entries()) {
      const f = H.fromInt(i);
      o.push(f);
      const z = Math.floor(f.hue);
      v[z] += w, a += w;
    }
    const c = new Array(360).fill(0);
    for (let i = 0; i < 360; i++) {
      const w = v[i] / a;
      for (let f = i - 14; f < i + 16; f++) {
        const z = Vl(f);
        c[z] += w;
      }
    }
    const y = new Array();
    for (const i of o) {
      const w = Vl(Math.round(i.hue)), f = c[w];
      if (n && (i.chroma < ne.CUTOFF_CHROMA || f <= ne.CUTOFF_EXCITED_PROPORTION))
        continue;
      const z = f * 100 * ne.WEIGHT_PROPORTION, k = i.chroma < ne.TARGET_CHROMA ? ne.WEIGHT_CHROMA_BELOW : ne.WEIGHT_CHROMA_ABOVE, g = (i.chroma - ne.TARGET_CHROMA) * k, b = z + g;
      y.push({ hct: i, score: b });
    }
    y.sort(Vs);
    const d = [];
    for (let i = 90; i >= 15; i--) {
      d.length = 0;
      for (const { hct: w } of y)
        if (d.find((z) => It(w.hue, z.hue) < i) || d.push(w), d.length >= s)
          break;
      if (d.length >= s)
        break;
    }
    const u = [];
    d.length === 0 && u.push(r);
    for (const i of d)
      u.push(i.toInt());
    return u;
  }
}
ne.TARGET_CHROMA = 48;
ne.WEIGHT_PROPORTION = 0.7;
ne.WEIGHT_CHROMA_ABOVE = 0.3;
ne.WEIGHT_CHROMA_BELOW = 0.1;
ne.CUTOFF_CHROMA = 5;
ne.CUTOFF_EXCITED_PROPORTION = 0.01;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(l) {
  const e = cl(l), t = yl(l), s = dl(l), r = [e.toString(16), t.toString(16), s.toString(16)];
  for (const [n, o] of r.entries())
    o.length === 1 && (r[n] = "0" + o);
  return "#" + r.join("");
}
function Gs(l) {
  l = l.replace("#", "");
  const e = l.length === 3, t = l.length === 6, s = l.length === 8;
  if (!e && !t && !s)
    throw new Error("unexpected hex " + l);
  let r = 0, n = 0, o = 0;
  return e ? (r = ke(l.slice(0, 1).repeat(2)), n = ke(l.slice(1, 2).repeat(2)), o = ke(l.slice(2, 3).repeat(2))) : t ? (r = ke(l.slice(0, 2)), n = ke(l.slice(2, 4)), o = ke(l.slice(4, 6))) : s && (r = ke(l.slice(2, 4)), n = ke(l.slice(4, 6)), o = ke(l.slice(6, 8))), (255 << 24 | (r & 255) << 16 | (n & 255) << 8 | o & 255) >>> 0;
}
function ke(l) {
  return parseInt(l, 16);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Us(l) {
  const e = await new Promise((o, v) => {
    const a = document.createElement("canvas"), c = a.getContext("2d");
    if (!c) {
      v(new Error("Could not get canvas context"));
      return;
    }
    const y = () => {
      a.width = l.width, a.height = l.height, c.drawImage(l, 0, 0);
      let d = [0, 0, l.width, l.height];
      const u = l.dataset.area;
      u && /^\d+(\s*,\s*\d+){3}$/.test(u) && (d = u.split(/\s*,\s*/).map((k) => parseInt(k, 10)));
      const [i, w, f, z] = d;
      o(c.getImageData(i, w, f, z).data);
    };
    l.complete ? y() : l.onload = y;
  }), t = [];
  for (let o = 0; o < e.length; o += 4) {
    const v = e[o], a = e[o + 1], c = e[o + 2];
    if (e[o + 3] < 255)
      continue;
    const d = il(v, a, c);
    t.push(d);
  }
  const s = Ns.quantize(t, 128);
  return ne.score(s)[0];
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function At(l, e = []) {
  const t = Q.of(l);
  return {
    source: l,
    schemes: {
      light: ze.light(l),
      dark: ze.dark(l)
    },
    palettes: {
      primary: t.a1,
      secondary: t.a2,
      tertiary: t.a3,
      neutral: t.n1,
      neutralVariant: t.n2,
      error: t.error
    },
    customColors: e.map((s) => Hs(l, s))
  };
}
async function Ul(l, e = []) {
  const t = await Us(l);
  return At(t, e);
}
function Hs(l, e) {
  let t = e.value;
  const s = t, r = l;
  e.blend && (t = $l.harmonize(s, r));
  const o = Q.of(t).a1;
  return {
    color: e,
    value: t,
    light: {
      color: o.tone(40),
      onColor: o.tone(100),
      colorContainer: o.tone(90),
      onColorContainer: o.tone(10)
    },
    dark: {
      color: o.tone(80),
      onColor: o.tone(20),
      colorContainer: o.tone(30),
      onColorContainer: o.tone(90)
    }
  };
}
function fl(l) {
  let e = JSON.parse(JSON.stringify(l.schemes));
  for (let t in e)
    for (let s in e[t])
      e[t][s] = j(e[t][s]);
  return e.dark.surfaceDim = j(l.palettes.neutral.tone(6)), e.dark.surface = j(l.palettes.neutral.tone(6)), e.dark.surfaceBright = j(l.palettes.neutral.tone(24)), e.dark.surfaceContainerLowest = j(l.palettes.neutral.tone(4)), e.dark.surfaceContainerLow = j(l.palettes.neutral.tone(10)), e.dark.surfaceContainer = j(l.palettes.neutral.tone(12)), e.dark.surfaceContainerHigh = j(l.palettes.neutral.tone(17)), e.dark.surfaceContainerHighest = j(l.palettes.neutral.tone(22)), e.dark.onSurface = j(l.palettes.neutral.tone(90)), e.dark.onSurfaceVariant = j(l.palettes.neutralVariant.tone(80)), e.dark.outline = j(l.palettes.neutralVariant.tone(60)), e.dark.outlineVariant = j(l.palettes.neutralVariant.tone(30)), e.light.surfaceDim = j(l.palettes.neutral.tone(87)), e.light.surface = j(l.palettes.neutral.tone(98)), e.light.surfaceBright = j(l.palettes.neutral.tone(98)), e.light.surfaceContainerLowest = j(l.palettes.neutral.tone(100)), e.light.surfaceContainerLow = j(l.palettes.neutral.tone(96)), e.light.surfaceContainer = j(l.palettes.neutral.tone(94)), e.light.surfaceContainerHigh = j(l.palettes.neutral.tone(92)), e.light.surfaceContainerHighest = j(l.palettes.neutral.tone(90)), e.light.onSurface = j(l.palettes.neutral.tone(10)), e.light.onSurfaceVariant = j(l.palettes.neutralVariant.tone(30)), e.light.outline = j(l.palettes.neutralVariant.tone(50)), e.light.outlineVariant = j(l.palettes.neutralVariant.tone(80)), e;
}
async function Ys(l) {
  const e = l, t = {
    light: {},
    dark: {}
  };
  try {
    if (typeof e == "string" && /^\#[0-9a-f]+$/i.test(e)) {
      let o = At(Gs(e));
      return fl(o);
    }
    if (e.src) {
      let o = await Ul(e);
      return fl(o);
    }
    let s = new Blob();
    if (typeof e == "string" && (s = await fetch(e).then((o) => o.blob())), e.size && (s = e), e.files && e.files[0] && (s = e.files[0]), e.target && e.target.files && e.target.files[0] && (s = e.target.files[0]), !s.size)
      return t;
    let r = new Image(64);
    r.src = URL.createObjectURL(s);
    let n = await Ul(r);
    return fl(n);
  } catch {
    return t;
  }
}
globalThis.materialDynamicColors = Ys;
const Ws = globalThis.materialDynamicColors;
function Js(l, e, t) {
  if (e == "short_answer") {
    if (t.includes(":"))
      return l.length >= parseInt(t.split(":")[0]) && l.length <= parseInt(t.split(":")[1]);
  } else if (e == "paragraph") {
    if (t.includes(":"))
      return l.length >= parseInt(t.split(":")[0]) && l.length <= parseInt(t.split(":")[1]);
  } else if (e == "info") {
    if (t == "disabled" && l)
      return !1;
    if (!t)
      return !1;
  } else {
    if (e == "multiple" || e == "dropdown")
      return !(typeof l != "number" || l >= t);
    if (e == "checkboxes") {
      if (l.length > t)
        return !1;
      for (const s in l)
        if (l[s] !== !1 && l[s] !== !0)
          return !1;
      return !0;
    } else {
      if (e == "date")
        return typeof l != "number" ? !1 : l >= t[0] && l <= t[1];
      if (e == "file") {
        const s = new URL(l);
        if (s.hostname == "transfer.sh" && l.length <= 2048) {
          const r = {
            images: ["png", "jpg", "jpeg", "gif", "webp", "svg", "ico", "bmp", "tiff", "tif"],
            docs: ["docs", "doc", "docx", "odt", "rtf", "tex", "txt", "wpd"],
            pdf: ["pdf"],
            sheets: ["sheets", "xls", "xlsx", "ods", "csv"],
            slides: ["slides", "ppt", "pptx", "odp"],
            audios: ["mp3", "wav", "wma", "m4a", "aac", "oga", "flac", "webma"],
            videos: ["mp4", "webm", "mov", "mkv", "flv", "ogv", "avi", "wmv", "m4v"],
            archives: ["zip", "tar.gz", "tar.xz", "tar.lz", "tar.bz2", "tar"]
          };
          if (t.length == 0)
            return !0;
          for (const n in t)
            if (r[t[n]].includes(s.pathname.split(".").pop()))
              return !0;
        } else
          return !1;
      } else
        return !1;
    }
  }
}
function Xs(l) {
  ft(l, "svelte-89v8l3", ':root{--size:16px;--font:Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;--font-icon:"Material Symbols Outlined";--speed1:.1s;--speed2:.2s;--speed3:.3s;--speed4:.4s}:root{--primary:#6750a4;--on-primary:#ffffff;--primary-container:#e9ddff;--on-primary-container:#22005d;--secondary:#625b71;--on-secondary:#ffffff;--secondary-container:#e8def8;--on-secondary-container:#1e192b;--tertiary:#7e5260;--on-tertiary:#ffffff;--tertiary-container:#ffd9e3;--on-tertiary-container:#31101d;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#1c1b1e;--surface:#fdf8fd;--on-surface:#1c1b1e;--surface-variant:#e7e0eb;--on-surface-variant:#49454e;--outline:#7a757f;--outline-variant:#cac4cf;--shadow:#000000;--scrim:#000000;--inverse-surface:#313033;--inverse-on-surface:#f4eff4;--inverse-primary:#cfbcff;--surface-dim:#ddd8dd;--surface-bright:#fdf8fd;--surface-container-lowest:#ffffff;--surface-container-low:#f7f2f7;--surface-container:#f2ecf1;--surface-container-high:#ece7eb;--surface-container-highest:#e6e1e6;--overlay:rgb(0 0 0 / .5);--active:rgb(0 0 0 / .1);--elevate1:0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2:0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3:0 .375rem .75rem 0 rgb(0 0 0 / .48)}@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-outlined.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-outlined.woff2) format("woff2")}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-rounded.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-rounded.woff2) format("woff2")}@font-face{font-family:Material Symbols Sharp;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-sharp.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-sharp.woff2) format("woff2")}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{-webkit-tap-highlight-color:transparent;position:relative;vertical-align:middle;color:inherit;margin:0;padding:0;border-radius:inherit;box-sizing:border-box}label.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:.75rem;vertical-align:baseline}i.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,span.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{vertical-align:bottom}button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;border:none;font-family:inherit;outline:inherit;justify-content:center}button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,i.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,label.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{user-select:none}.primary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--primary)!important;color:var(--on-primary)!important}.primary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--primary)!important}.primary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--primary)!important}.primary-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}.secondary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary)!important;color:var(--on-secondary)!important}.secondary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--secondary)!important}.secondary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--secondary)!important}.secondary-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}.tertiary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}.tertiary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--tertiary)!important}.tertiary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--tertiary)!important}.tertiary-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}.error.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--error)!important;color:var(--on-error)!important}.error-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--error)!important}.error-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--error)!important}.error-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--error-container)!important;color:var(--on-error-container)!important}.background.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--background)!important;color:var(--on-background)!important}.surface.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-dim.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-bright.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-lowest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-low.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-high.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.surface-container-highest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface)!important;color:var(--on-surface)!important}.surface-variant.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.inverse-surface.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--inverse-surface);color:var(--inverse-on-surface)}.inverse-primary.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--inverse-primary);color:var(--primary)}.inverse-primary-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--inverse-primary)!important}.inverse-primary-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--inverse-primary)!important}.surface-dim.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-dim)!important}.surface-bright.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-bright)!important}.surface-container-lowest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-lowest)!important}.surface-container-low.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-low)!important}.surface-container.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container)!important}.surface-container-high.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-high)!important}.surface-container-highest.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-highest)!important}.surface-container-low.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--surface-container-low)!important}.black.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#000!important}.black-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#000!important}.black-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#000!important}.white.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff!important}.white-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#fff!important}.white-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#fff!important}.transparent.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:transparent!important;box-shadow:none!important;color:inherit!important}.transparent-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:transparent!important}.transparent-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:transparent!important}.fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i){background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.middle-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:center!important}.bottom-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:end!important}.top-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:start!important}.left-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:start;justify-content:start!important}.right-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:end;justify-content:end!important}.center-align.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:center;justify-content:center!important}.red.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.red6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f44336!important}.red-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#f44336!important}.red-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#f44336!important}.red1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffebee!important}.red2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffcdd2!important}.red3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ef9a9a!important}.red4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e57373!important}.red5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ef5350!important}.red7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e53935!important}.red8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d32f2f!important}.red9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c62828!important}.red10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b71c1c!important}.pink.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.pink6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e91e63!important}.pink-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#e91e63!important}.pink-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#e91e63!important}.pink1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fce4ec!important}.pink2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f8bbd0!important}.pink3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f48fb1!important}.pink4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f06292!important}.pink5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ec407a!important}.pink7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d81b60!important}.pink8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c2185b!important}.pink9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ad1457!important}.pink10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#880e4f!important}.purple.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.purple6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9c27b0!important}.purple-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#9c27b0!important}.purple-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#9c27b0!important}.purple1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f3e5f5!important}.purple2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e1bee7!important}.purple3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ce93d8!important}.purple4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ba68c8!important}.purple5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ab47bc!important}.purple7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#8e24aa!important}.purple8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7b1fa2!important}.purple9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#6a1b9a!important}.purple10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4a148c!important}.deep-purple.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.deep-purple6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#673ab7!important}.deep-purple-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#673ab7!important}.deep-purple-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#673ab7!important}.deep-purple1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ede7f6!important}.deep-purple2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d1c4e9!important}.deep-purple3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b39ddb!important}.deep-purple4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9575cd!important}.deep-purple5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7e57c2!important}.deep-purple7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#5e35b1!important}.deep-purple8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#512da8!important}.deep-purple9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4527a0!important}.deep-purple10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#311b92!important}.indigo.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.indigo6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#3f51b5!important}.indigo-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#3f51b5!important}.indigo-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#3f51b5!important}.indigo1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e8eaf6!important}.indigo2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c5cae9!important}.indigo3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9fa8da!important}.indigo4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7986cb!important}.indigo5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#5c6bc0!important}.indigo7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#3949ab!important}.indigo8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#303f9f!important}.indigo9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#283593!important}.indigo10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1a237e!important}.blue.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.blue6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#2196f3!important}.blue-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#2196f3!important}.blue-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#2196f3!important}.blue1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e3f2fd!important}.blue2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bbdefb!important}.blue3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#90caf9!important}.blue4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#64b5f6!important}.blue5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#42a5f5!important}.blue7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1e88e5!important}.blue8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1976d2!important}.blue9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1565c0!important}.blue10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0d47a1!important}.light-blue.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.light-blue6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#03a9f4!important}.light-blue-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#03a9f4!important}.light-blue-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#03a9f4!important}.light-blue1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e1f5fe!important}.light-blue2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b3e5fc!important}.light-blue3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#81d4fa!important}.light-blue4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4fc3f7!important}.light-blue5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#29b6f6!important}.light-blue7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#039be5!important}.light-blue8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0288d1!important}.light-blue9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0277bd!important}.light-blue10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#01579b!important}.cyan.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.cyan6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00bcd4!important}.cyan-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#00bcd4!important}.cyan-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#00bcd4!important}.cyan1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e0f7fa!important}.cyan2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b2ebf2!important}.cyan3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#80deea!important}.cyan4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4dd0e1!important}.cyan5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#26c6da!important}.cyan7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00acc1!important}.cyan8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#0097a7!important}.cyan9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00838f!important}.cyan10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#006064!important}.teal.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.teal6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#009688!important}.teal-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#009688!important}.teal-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#009688!important}.teal1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e0f2f1!important}.teal2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b2dfdb!important}.teal3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#80cbc4!important}.teal4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4db6ac!important}.teal5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#26a69a!important}.teal7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00897b!important}.teal8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00796b!important}.teal9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00695c!important}.teal10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#004d40!important}.green.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.green6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4caf50!important}.green-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#4caf50!important}.green-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#4caf50!important}.green1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e8f5e9!important}.green2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c8e6c9!important}.green3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#a5d6a7!important}.green4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#81c784!important}.green5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#66bb6a!important}.green7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#43a047!important}.green8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#388e3c!important}.green9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#2e7d32!important}.green10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#1b5e20!important}.light-green.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.light-green6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#8bc34a!important}.light-green-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#8bc34a!important}.light-green-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#8bc34a!important}.light-green1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f1f8e9!important}.light-green2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#dcedc8!important}.light-green3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c5e1a5!important}.light-green4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#aed581!important}.light-green5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9ccc65!important}.light-green7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#7cb342!important}.light-green8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#689f38!important}.light-green9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#558b2f!important}.light-green10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#33691e!important}.lime.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.lime6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#cddc39!important}.lime-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#cddc39!important}.lime-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#cddc39!important}.lime1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f9fbe7!important}.lime2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f0f4c3!important}.lime3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e6ee9c!important}.lime4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#dce775!important}.lime5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d4e157!important}.lime7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#c0ca33!important}.lime8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#afb42b!important}.lime9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9e9d24!important}.lime10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#827717!important}.yellow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.yellow6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffeb3b!important}.yellow-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ffeb3b!important}.yellow-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ffeb3b!important}.yellow1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fffde7!important}.yellow2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff9c4!important}.yellow3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff59d!important}.yellow4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff176!important}.yellow5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffee58!important}.yellow7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fdd835!important}.yellow8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fbc02d!important}.yellow9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f9a825!important}.yellow10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f57f17!important}.amber.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.amber6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffc107!important}.amber-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ffc107!important}.amber-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ffc107!important}.amber1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff8e1!important}.amber2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffecb3!important}.amber3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffe082!important}.amber4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffd54f!important}.amber5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffca28!important}.amber7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffb300!important}.amber8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffa000!important}.amber9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff8f00!important}.amber10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff6f00!important}.orange.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.orange6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff9800!important}.orange-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ff9800!important}.orange-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ff9800!important}.orange1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fff3e0!important}.orange2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffe0b2!important}.orange3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffcc80!important}.orange4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffb74d!important}.orange5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffa726!important}.orange7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fb8c00!important}.orange8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f57c00!important}.orange9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ef6c00!important}.orange10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e65100!important}.deep-orange.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.deep-orange6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff5722!important}.deep-orange-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#ff5722!important}.deep-orange-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#ff5722!important}.deep-orange1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fbe9e7!important}.deep-orange2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffccbc!important}.deep-orange3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ffab91!important}.deep-orange4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff8a65!important}.deep-orange5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#ff7043!important}.deep-orange7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f4511e!important}.deep-orange8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e64a19!important}.deep-orange9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d84315!important}.deep-orange10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bf360c!important}.brown.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.brown6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#795548!important}.brown-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#795548!important}.brown-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#795548!important}.brown1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#efebe9!important}.brown2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#d7ccc8!important}.brown3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bcaaa4!important}.brown4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#a1887f!important}.brown5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#8d6e63!important}.brown7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#6d4c41!important}.brown8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#5d4037!important}.brown9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#4e342e!important}.brown10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#3e2723!important}.blue-grey.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.blue-grey6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#607d8b!important}.blue-grey-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#607d8b!important}.blue-grey-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#607d8b!important}.blue-grey1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#eceff1!important}.blue-grey2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#cfd8dc!important}.blue-grey3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#b0bec5!important}.blue-grey4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#90a4ae!important}.blue-grey5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#78909c!important}.blue-grey7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#546e7a!important}.blue-grey8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#455a64!important}.blue-grey9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#37474f!important}.blue-grey10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#263238!important}.grey.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.grey6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#9e9e9e!important}.grey-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:#9e9e9e!important}.grey-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:#9e9e9e!important}.grey1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#fafafa!important}.grey2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#f5f5f5!important}.grey3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#eee!important}.grey4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#e0e0e0!important}.grey5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#bdbdbd!important}.grey7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#757575!important}.grey8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#616161!important}.grey9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#424242!important}.grey10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#212121!important}.horizontal.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:inline-flex;flex-direction:row!important;gap:1rem;inline-size:auto!important;max-inline-size:none!important}.horizontal.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{margin-block-start:0!important;margin-block-end:0!important}.vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;flex-direction:column!important}:is(a,button,.button,.chip).vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:inline-flex;gap:.25rem;block-size:auto!important;max-block-size:none!important;padding-block-start:.5rem;padding-block-end:.5rem}.vertical.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{margin-inline-start:0!important;margin-inline-end:0!important}.divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.small-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{min-inline-size:1.5rem;min-block-size:auto;block-size:.0625rem;background-color:var(--outline-variant);display:block;margin:0!important}.medium-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:1rem 0!important}.large-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:1.5rem 0!important}.small-divider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:.5rem 0!important}.divider.vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{min-inline-size:auto;min-block-size:1.5rem;inline-size:.0625rem}.no-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:none!important}.small-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate1)!important}.medium-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate2)!important}.large-elevate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate3)!important}.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:var(---round)}.small-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:var(---round)!important}.top-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---round:2rem}.small-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---round:.5rem}.large-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---round:3.5rem}.no-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.square.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.top-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:0!important}.top-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-start-start-radius:var(---round)!important;border-start-end-radius:var(---round)!important}.bottom-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-end-end-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.left-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-start-start-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.right-round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-start-end-radius:var(---round)!important;border-end-end-radius:var(---round)!important}.circle.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:50%}:is(button,.button,.chip).circle.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.circle,.square):not(i,img,video,svg),:is(.circle,.square).chip.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem;inline-size:2.5rem;padding:0}.svelte-89v8l3:is(.circle,.square)>span.svelte-89v8l3.svelte-89v8l3{display:none}:is(.circle,.square).small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i,img,video,svg),:is(.circle,.square).chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2rem;inline-size:2rem}:is(.circle,.square).large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i,img,video,svg){block-size:3rem;inline-size:3rem}:is(.circle,.square).extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(i,img,video,svg){block-size:3.5rem;inline-size:3.5rem}:is(.circle,.square).round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1rem!important}.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(table,.field){box-sizing:border-box;border:.0625rem solid var(--outline);background-color:transparent;box-shadow:none}.no-border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:transparent!important}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(nav,.row,dialog.max,header.fixed,footer.fixed,menu > a,menu.max,table,.tabs):not(.round){border-radius:0}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.no-margin,.auto-margin,.tiny-margin,.small-margin,.medium-margin,.margin,.large-margin):not(.left-margin,.right-margin,.top-margin,.bottom-margin,.horizontal-margin,.vertical-margin){margin:var(---margin)!important}.no-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.auto-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.tiny-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.small-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.top-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:1rem}.no-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:0}.auto-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:auto}.tiny-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:.25rem}.small-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:.5rem}.large-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---margin:1.5rem}.left-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-start:var(---margin)!important}.right-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-end:var(---margin)!important}.top-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-block-start:var(---margin)!important}.bottom-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-margin.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-block-end:var(---margin)!important}.no-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:1!important}.opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:0!important}.small-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.75!important}.medium-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.5!important}.large-opacity.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.25!important}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.no-padding,.auto-padding,.tiny-padding,.small-padding,.medium-padding,.padding,.large-padding):not(.left-padding,.right-padding,.top-padding,.bottom-padding,.horizontal-padding,.vertical-padding){padding:var(---padding)!important}.no-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.auto-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.tiny-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.small-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.medium-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.large-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.left-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.right-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.top-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.bottom-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:1rem}.no-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:0}.auto-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:auto}.tiny-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:.25rem}.small-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:.5rem}.large-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:1.5rem}.left-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-inline-start:var(---padding)!important}.right-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.horizontal-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-inline-end:var(---padding)!important}.top-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-block-start:var(---padding)!important}.bottom-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.vertical-padding.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding-block-end:var(---padding)!important}.front.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{z-index:10!important}.back.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{z-index:-10!important}.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-start:0}.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-end:0}.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0}.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-end:0}.center.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-start:50%;transform:translate(-50%)}.middle.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:50%;transform:translateY(-50%)}.middle.center.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{transform:translate(-50%,-50%)}.scroll.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{overflow:auto}.no-scroll.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{overflow:hidden}.small-width.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:12rem!important;max-inline-size:100%}.medium-width.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:24rem!important;max-inline-size:100%}.large-width.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:36rem!important;max-inline-size:100%}.small-height.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:12rem!important}.medium-height.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:24rem!important}.large-height.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:36rem!important}.wrap.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:block;white-space:normal}.no-wrap.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(menu){display:flex;white-space:nowrap}.tiny-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(nav,.row,.grid,table,.tooltip){block-size:.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.space,.small-space):not(nav,.row,.grid,table,.tooltip){block-size:1rem}.medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(nav,.row,.grid,table,.tooltip){block-size:2rem}.large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(nav,.row,.grid,table,.tooltip){block-size:3rem}.responsive.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:-webkit-fill-available;inline-size:-moz-available}@media only screen and (max-width: 600px){.m.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.s),.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.s),.m.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.s){display:none}}@media only screen and (min-width: 601px) and (max-width: 992px){.s.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.m),.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.m),.s.l.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.m){display:none}}@media only screen and (min-width: 993px){.m.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.l),.s.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.l),.m.s.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.l){display:none}}h6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-weight:400;display:flex;align-items:center;margin-block-end:.5rem;line-height:normal}h6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:1.5rem}.link.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--primary)!important}.inverse-link.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{color:var(--inverse-primary)!important}.truncate.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{overflow:hidden;white-space:nowrap!important;text-overflow:ellipsis;flex:inherit}.truncate.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{white-space:nowrap!important}.small-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:.75rem}.medium-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:.875rem}.large-text.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-size:1rem}.upper.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-transform:uppercase}.lower.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-transform:lowercase}.capitalize.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-transform:capitalize}.bold.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-weight:700}.overline.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-decoration:line-through}.underline.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-decoration:underline}.italic.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{font-style:italic}p.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:.5rem 0}.no-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:normal}.tiny-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:1.25}.small-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:1.5}.medium-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:1.75}.large-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:2}.extra-line.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{line-height:2.25}.wave.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.wave.light.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;z-index:1;border-radius:inherit;inline-size:100%;block-size:100%;background-position:center;background-image:radial-gradient(circle,rgb(255 255 255 / .4) 1%,transparent 1%);opacity:0;transition:none}.wave.dark.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.wave.row.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).transparent.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after{background-image:radial-gradient(circle,rgb(150 150 150 / .2) 1%,transparent 1%)}.wave.none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,:is(.button,button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after{inset-block-start:0;inset-inline-start:-.25rem;padding:0 .25rem}.wave.none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.small,.medium,.large,.extra):after,:is(.button,button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.small,.medium,.large,.extra):after{inset-block-start:-.25rem;inset-inline-start:-.25rem;padding:.25rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.wave,.chip,.button,button):is(:focus,:hover):after{background-size:15000%;opacity:1;transition:var(--speed2) background-size linear}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.wave,.chip,.button,button):active:after{background-size:5000%;opacity:0;transition:none}.no-wave.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:after,.no-wave.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(:hover,:active):after{display:none}.badge.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:inline-flex;align-items:center;justify-content:center;position:absolute;font-size:.75rem;text-transform:none;z-index:1;padding:0 .375rem;background-color:var(--error);color:var(--on-error);inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;block-size:1.25rem;line-height:normal;transform:translate(50%,-100%)}.badge.none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:auto;transform:none;position:relative;margin:0 .125rem}.badge.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:50%;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:50%;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%)}.badge.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:50%;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(100%,-50%)}.badge.top.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:0;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.top.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(50%,-100%)}.badge.bottom.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:auto;inset-inline-start:auto;inset-block-end:0;inset-inline-end:0;transform:translate(50%,100%)}.badge.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--error);color:var(--error)}.badge.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.circle,.square){padding:0;text-align:center;inline-size:1.25rem;block-size:1.25rem}.button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,button.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2.5rem;min-inline-size:2.5rem;font-size:.875rem;font-weight:500;color:var(--on-primary);padding:0 1.5rem;background-color:var(--primary);margin:0 .5rem;border-radius:1.25rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}:is(button,.button).none.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:auto;block-size:auto;color:var(--primary);padding:0;background-color:transparent;min-inline-size:auto;min-block-size:1.5rem}:is(button,.button).small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2rem;min-inline-size:2rem;font-size:.875rem;border-radius:1rem}:is(button,.button).large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3rem;min-inline-size:3rem;border-radius:1.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is(.extra,.extend){block-size:3.5rem;min-inline-size:3.5rem;font-size:1rem;border-radius:1.75rem}:is(button,.button).border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--outline);color:var(--primary)}.extend.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3{display:none}.extend.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(:hover,.active){inline-size:auto;padding:0 1.5rem}.extend.svelte-89v8l3:is(:hover,.active)>.svelte-89v8l3:is(img,svg)+span.svelte-89v8l3{display:inherit;margin-inline-start:2.5rem}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is([disabled]){opacity:.5;cursor:not-allowed}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button):is([disabled]){pointer-events:none}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is([disabled]):before,.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.button,button):is([disabled]):after{display:none}:is(.button,button).fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}:is(.button,button).vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2rem}article.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-shadow:var(--elevate1);background-color:var(--surface-container-low);color:var(--on-surface);padding:1rem;border-radius:.75rem;display:block;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding}.chip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;min-inline-size:2rem;font-size:.875rem;font-weight:500;background-color:transparent;border:.0625rem solid var(--outline);color:var(--on-surface-variant);padding:0 1rem;margin:0 .5rem;text-transform:none;border-radius:.5rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}.chip.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem;min-inline-size:2.5rem}.chip.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3rem;min-inline-size:3rem}.chip.fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:var(--secondary-container)!important;border-color:transparent}.chip.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-color:var(--outline)}.chip.round.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1rem}.chip.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.25rem}.chip.round.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.5rem}:is(main,header,footer).responsive.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---padding:6rem}@media only screen and (max-width: 600px){}@media only screen and (min-width: 601px) and (max-width: 992px){}@media only screen and (min-width: 993px){}@media only screen and (max-width: 600px){}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3rem;margin-block-end:2rem}.svelte-89v8l3+.field.svelte-89v8l3.svelte-89v8l3{margin-block-start:1rem}.field.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem}.field.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3.5rem}.field.extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:4rem}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:.25rem .25rem 0 0}.field.border.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:.25rem}.field.round.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.25rem}.field.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.5rem}.field.round.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:1.75rem}.field.round.extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2rem}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;border-radius:inherit;background-color:inherit}.field.fill.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{background-color:var(--surface-container-highest);color:var(--on-surface-variant)}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg,progress,a:not(.helper,.error)){position:absolute;inset-block-start:50%;transform:translateY(-50%);cursor:pointer;z-index:0;inline-size:1.5rem;block-size:1.5rem}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg,progress,a:not(.helper,.error)){inset-inline-start:auto;inset-inline-end:1rem}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg,progress,a:not(.helper,.error)):first-child{inset-inline-start:1rem;inset-inline-end:auto}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){appearance:none;border:.0625rem solid transparent;padding-inline:.9375rem;padding-block:0;font-family:inherit;font-size:1rem;inline-size:100%;block-size:100%;outline:none;z-index:1;background:none;resize:none}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border:.125rem solid transparent;padding-block:0;padding-inline:.875rem}.svelte-89v8l3:not(.field)>input[type^=date].svelte-89v8l3.svelte-89v8l3,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-inner-spin-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-outer-spin-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-calendar-picker-indicator{opacity:0;position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;margin:0;padding:0;border:0;outline:0;z-index:2!important}input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-decoration,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-cancel-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-results-button,input.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3::-webkit-search-results-decoration{display:none}.field.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){border-color:var(--outline)}.field.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-color:var(--primary)}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){padding-inline-start:1.4376rem;padding-inline-end:1.4376rem}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{padding-inline-start:1.375rem;padding-inline-end:1.375rem}.field.prefix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){padding-inline-start:2.9375rem}.field.prefix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{padding-inline-start:2.875rem}.field.suffix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){padding-inline-end:2.9375rem}.field.suffix.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{padding-inline-end:2.875rem}.field.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select){border-block-end-color:var(--outline)}.field.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-block-end-color:var(--primary)}.field.round.svelte-89v8l3:not(.border,.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select),.field.round.svelte-89v8l3:not(.border)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{box-shadow:var(--elevate1)}.field.round.svelte-89v8l3:not(.border,.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{box-shadow:var(--elevate2)}.field.invalid.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select),.field.invalid.svelte-89v8l3:not(.border,.round)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-block-end-color:var(--error)}.field.invalid.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select),.field.invalid.border.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,textarea,select):focus{border-color:var(--error)}.field.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:has(> :disabled){opacity:.5;cursor:not-allowed}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:disabled{cursor:not-allowed}.field.small.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:4.5rem}.field.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:5.5rem}.field.large.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:6.5rem}.field.extra.textarea.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:7.5rem}.field.svelte-89v8l3>select.svelte-89v8l3>option.svelte-89v8l3{background-color:var(--surface-container);color:var(--on-surface)}.field.label.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(input,select){padding-block-start:1rem}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,select){padding-block-start:0}.field.label.small.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.125rem}.field.label.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.375rem}.field.label.large.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.625rem}.field.label.extra.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.875rem}.field.small.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.small.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.small.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:.625rem}.field.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:.875rem}.field.large.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.large.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.large.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.125rem}.field.extra.svelte-89v8l3>textarea.svelte-89v8l3.svelte-89v8l3,.field.extra.svelte-89v8l3:not(.label)>textarea.svelte-89v8l3.svelte-89v8l3:focus,.field.extra.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3{padding-block-start:1.375rem}.field.small.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:.5625rem!important}.field.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:.8125rem!important}.field.large.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:1.0625rem!important}.field.extra.border.svelte-89v8l3:not(.fill)>textarea.svelte-89v8l3.svelte-89v8l3:focus{padding-block-start:1.3125rem!important}.field.label.svelte-89v8l3>label.svelte-89v8l3.svelte-89v8l3{position:absolute;inset-block-start:-.5rem;inset-inline-start:1rem;display:flex;inline-size:calc(100% - 5rem);block-size:4rem;line-height:4rem;font-size:1rem;transition:all .2s;gap:.25rem;white-space:nowrap}.field.label.border.prefix.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1rem}.field.label.border.prefix.round.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1.5rem}.field.label.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:2.5rem;line-height:2.5rem;font-size:.75rem}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:1rem;line-height:1rem}.field.label.border.svelte-89v8l3:not(.fill)>label.svelte-89v8l3.svelte-89v8l3:after{content:"";display:block;margin-block-start:.5rem;border-block-start:.0625rem solid var(--outline);block-size:1rem;transition:none;flex:auto}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3:focus+label.svelte-89v8l3:after{border-block-start:.125rem solid var(--primary)}.field.label.border.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),.field.label.border.svelte-89v8l3:not(.fill)>select.svelte-89v8l3.svelte-89v8l3{clip-path:polygon(-2% -2%,.75rem -2%,.75rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.border.round.svelte-89v8l3:not(.fill)>.svelte-89v8l3.svelte-89v8l3:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active){clip-path:polygon(-2% -2%,1.25rem -2%,1.25rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.svelte-89v8l3>.svelte-89v8l3:focus+label.svelte-89v8l3{color:var(--primary)}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(.helper,.error){position:absolute;inset-inline-start:1rem;inset-block-end:0;transform:translateY(100%);font-size:.75rem;background:none!important;padding-block-start:.125rem}.field.svelte-89v8l3>.error.svelte-89v8l3.svelte-89v8l3{color:var(--error)!important}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(.helper,.error){inset-inline-start:1.5rem}.field.invalid.svelte-89v8l3>.helper.svelte-89v8l3.svelte-89v8l3{display:none}.grid.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:1rem;display:grid;grid-template-columns:repeat(12,calc(8.33% - var(---gap) + (var(---gap) / 12)));gap:var(---gap)}.svelte-89v8l3+.grid.svelte-89v8l3.svelte-89v8l3{margin-block-start:1rem}.grid.no-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:0rem}.grid.medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:1.5rem}.grid.large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---gap:2rem}.s1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 1}.s2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 2}.s3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 3}.s4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 4}.s5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 5}.s6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 6}.s7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 7}.s8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 8}.s9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 9}.s10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 10}.s11.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 11}.s12.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 12}@media only screen and (min-width: 601px){.m1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 1}.m2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 2}.m3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 3}.m4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 4}.m5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 5}.m6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 6}.m7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 7}.m8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 8}.m9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 9}.m10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 10}.m11.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 11}.m12.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 12}}@media only screen and (min-width: 993px){.l1.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 1}.l2.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 2}.l3.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 3}.l4.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 4}.l5.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 5}.l6.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 6}.l7.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 7}.l8.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 8}.l9.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 9}.l10.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 10}.l11.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 11}.l12.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{grid-area:auto/span 12}}i.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---size:1.5rem;font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:var(---size);letter-spacing:normal;text-transform:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:var(---size);min-inline-size:var(---size);block-size:var(---size);min-block-size:var(---size);box-sizing:content-box;line-height:normal}.absolute.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{position:absolute}.fixed.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{position:fixed}:is(.absolute,.fixed).left.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:auto}:is(.absolute,.fixed).left.right.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:20rem}:is(.absolute,.fixed).left.right.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:28rem}:is(.absolute,.fixed).left.right.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:44rem}:is(.absolute,.fixed).top.bottom.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:20rem}:is(.absolute,.fixed).top.bottom.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:28rem}:is(.absolute,.fixed).top.bottom.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:44rem}:is(header,footer,menu > *).fixed.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{position:sticky;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;z-index:12;background-color:inherit}:is(header,footer).fixed.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;margin:0 -.5rem;max-inline-size:100%;background-color:inherit}.svelte-89v8l3:is(dialog,menu)>.svelte-89v8l3.svelte-89v8l3:is(header,footer){padding:0;background-color:inherit}article.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(header,footer){padding:inherit;padding-inline-start:0;padding-inline-end:0;z-index:11!important}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(img,svg,video):is(.small,.medium,.large,.tiny,.extra,.round,.circle,.responsive){object-fit:cover;object-position:center;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;block-size:3rem;inline-size:3rem}:is(img,svg,video).round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:.5rem}:is(img,svg,video).tiny.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2rem;inline-size:2rem}:is(img,svg,video).small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:2.5rem;inline-size:2.5rem}:is(img,svg,video).large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:3.5rem;inline-size:3.5rem}:is(img,svg,video).extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{block-size:4rem;inline-size:4rem}:is(img,svg,video).responsive.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:100%;margin:0 auto}.svelte-89v8l3:is(button,.button,.chip):not(.transparent)>.responsive.svelte-89v8l3.svelte-89v8l3{border:.25rem solid transparent}.svelte-89v8l3:is(button.small,.button.small,.chip)>.responsive.svelte-89v8l3.svelte-89v8l3{inline-size:2rem}.svelte-89v8l3:is(button,.button,.chip.medium)>.responsive.svelte-89v8l3.svelte-89v8l3{inline-size:2.5rem}:is(img,svg,video).responsive.tiny.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:4rem}:is(img,svg,video).responsive.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:8rem}:is(img,svg,video).responsive.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:12rem}:is(img,svg,video).responsive.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:16rem}:is(img,svg,video).responsive.extra.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:100%;block-size:20rem}:is(img,svg,video).responsive.round.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{border-radius:2rem}:is(img,svg,video).empty-state.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{max-inline-size:100%;inline-size:24rem}.svelte-89v8l3:is(button,.button,.chip,.field)>.svelte-89v8l3.svelte-89v8l3:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra),.svelte-89v8l3:is(.tabs) .svelte-89v8l3.svelte-89v8l3:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra){min-inline-size:1.5rem;max-inline-size:1.5rem;min-block-size:1.5rem;max-block-size:1.5rem}.svelte-89v8l3:is(button,.button,.chip)>.svelte-89v8l3.svelte-89v8l3:is(i,img,svg),.svelte-89v8l3:is(button,.button,.chip)>.responsive.svelte-89v8l3.svelte-89v8l3{margin:0 -.5rem}.svelte-89v8l3:is(button,.button)>.responsive.svelte-89v8l3.svelte-89v8l3{margin-inline-start:-1.5rem}.svelte-89v8l3:is(.circle,.square)>.responsive.svelte-89v8l3.svelte-89v8l3{margin:0}.extend.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(.responsive,i){margin:0;position:absolute;inset-inline:1rem;z-index:1}.row.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;align-items:center;align-self:normal;text-align:start;justify-content:start;white-space:nowrap;gap:1rem}.svelte-89v8l3:not(.divider,.small-divider,.medium-divider,.large-divider)+.row.svelte-89v8l3.svelte-89v8l3:not(a){margin-block-start:1rem}.svelte-89v8l3:is(nav,.row)>.svelte-89v8l3.svelte-89v8l3,.svelte-89v8l3:is(nav,.row)>.svelte-89v8l3:not(.tooltip,menu)>.svelte-89v8l3{margin-block-start:0;margin-block-end:0}.row.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3{margin:0!important;white-space:normal;flex:none}:is(nav,.row).no-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{gap:0}:is(nav,.row).medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{gap:1.5rem}:is(nav,.row).large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{gap:2rem}.row.wrap.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;flex-wrap:wrap}.svelte-89v8l3:is(nav,.row)>.border.no-margin.svelte-89v8l3+.border.no-margin.svelte-89v8l3{border-inline-start:0}@media only screen and (max-width: 600px){}.overlay.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:0;visibility:hidden;position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;color:var(--on-surface);background-color:var(--overlay);z-index:100;transition:var(--speed3) all,0s background-color}.overlay.active.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:1;visibility:visible}.page.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.svelte-89v8l3:is(.page,dialog):not(.active) .page.active.svelte-89v8l3.svelte-89v8l3{---transform:translate(0, 0);opacity:0;position:absolute;display:none}.page.active.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:1;position:inherit;display:inherit;animation:var(--speed4) svelte-89v8l3-to-page ease}.page.active.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(0, -4rem)}.page.active.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(0, 4rem)}.page.active.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(-4rem, 0)}.page.active.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform:translate(4rem, 0)}@keyframes svelte-89v8l3-to-page{0%{opacity:0;transform:var(---transform)}to{opacity:1;transform:translate(0)}}@keyframes svelte-89v8l3-to-linear{0%{margin-inline-start:0%;inline-size:0%}50%{margin-inline-start:10%;inline-size:80%}to{margin-inline-start:100%;inline-size:0%}}@keyframes svelte-89v8l3-to-circular{0%{transform:rotate(0);clip-path:polygon(50% 50%,0% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)}20%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%)}30%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 50%,100% 50%,100% 50%,100% 50%)}40%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,100% 100%,100% 100%,100% 100%)}50%{clip-path:polygon(50% 50%,50% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,50% 100%,50% 100%)}60%{clip-path:polygon(50% 50%,100% 50%,100% 50%,100% 50%,100% 50%,100% 100%,50% 100%,0% 100%,0% 100%)}70%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%,0% 50%)}80%{clip-path:polygon(50% 50%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 50%)}90%{transform:rotate(360deg);clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}to{clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}}.checkbox.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.radio.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3,.switch.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{direction:ltr;inline-size:auto;block-size:auto;line-height:normal;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}.svelte-89v8l3:is(.checkbox,.radio)>input.svelte-89v8l3.svelte-89v8l3{inline-size:1.5rem;block-size:1.5rem;opacity:0}.switch.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3{inline-size:3.25rem;block-size:2rem;opacity:0}.svelte-89v8l3:is(.checkbox,.radio,.switch)>span.svelte-89v8l3.svelte-89v8l3{display:inline-flex;align-items:center;color:var(--on-surface);font-size:.875rem}.svelte-89v8l3:is(.checkbox,.radio)>span.svelte-89v8l3.svelte-89v8l3:not(:empty){padding-inline-start:.25rem}.svelte-89v8l3:is(.checkbox,.radio,.switch)>span.svelte-89v8l3.svelte-89v8l3:before{font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:1.5rem;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:1.5rem;block-size:1.5rem;box-sizing:border-box;margin:0 auto;outline:none;color:var(--primary);position:absolute;inset-inline-start:-1.5rem;background-color:transparent;border-radius:50%;user-select:none;z-index:1;box-shadow:0 0 0 0 var(--active);transition:var(--speed1) all}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{position:absolute;inset-inline-start:0;inset-block-start:50%;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;transition:var(--speed2) all;font-size:1rem;user-select:none;min-inline-size:auto;content:"";color:var(--surface-variant);background-color:var(--outline)}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{transform:translate(-3rem,-50%) scale(.6)}.checkbox.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{content:"check_box_outline_blank"}.radio.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{content:"radio_button_unchecked"}.checkbox.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{content:"check_box";font-variation-settings:"FILL" 1}.radio.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{content:"radio_button_checked"}:is(.radio,.checkbox,.switch).icon.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:before{content:""!important;font-variation-settings:unset!important}.svelte-89v8l3:is(.checkbox,.radio)>input.svelte-89v8l3:not(:disabled):is(:focus,:hover)+span.svelte-89v8l3:before{background-color:var(--active);box-shadow:0 0 0 .5rem var(--active)}.switch.svelte-89v8l3>input.svelte-89v8l3:not(:disabled):is(:focus,:hover)+span.svelte-89v8l3:before{box-shadow:0 0 0 .5rem var(--active)}.svelte-89v8l3:is(.checkbox,.radio)>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{color:var(--primary)}.switch.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:after{border:none;background-color:var(--primary)}.switch.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{content:"check";color:var(--primary);background-color:var(--on-primary)}.switch.svelte-89v8l3>input.svelte-89v8l3:checked+span.svelte-89v8l3:before{transform:translate(-1.75rem,-50%) scale(1)}.svelte-89v8l3:is(.checkbox,.radio,.switch)>input.svelte-89v8l3:disabled+span.svelte-89v8l3{opacity:.5;cursor:not-allowed}.checkbox.svelte-89v8l3+.checkbox.svelte-89v8l3.svelte-89v8l3,.radio.svelte-89v8l3+.radio.svelte-89v8l3.svelte-89v8l3,.switch.svelte-89v8l3+.switch.svelte-89v8l3.svelte-89v8l3{margin-inline-start:.5rem}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:after{content:"";position:absolute;inset-inline-start:0;inset-block-start:50%;background-color:var(--active);border:.125rem solid var(--outline);box-sizing:border-box;inline-size:3.25rem;block-size:2rem;border-radius:2rem}.switch.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3:after{transform:translate(-3.25rem,-50%)}.field.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(nav,.row){flex-grow:1;padding:0 1rem}.field.round.svelte-89v8l3>.svelte-89v8l3.svelte-89v8l3:is(nav,.row){flex-grow:1;padding:0 1.5rem}.slider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---start:0%;---end:0%;---value1:"";---value2:"";display:flex;align-items:center!important;inline-size:auto;block-size:1.25rem;margin:1.125rem;flex:none}.slider.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:4rem}.slider.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:8rem}.slider.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:12rem}.slider.vertical.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{flex-direction:row!important;margin:.5rem auto!important;padding:50% 0;transform:rotate(-90deg)}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:none;inline-size:100%;block-size:.25rem;background:none;z-index:1;padding:0;margin:0}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:only-of-type{cursor:pointer;pointer-events:all}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3::-webkit-slider-thumb{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:1.25rem;inline-size:1.25rem;border-radius:50%;background:var(--primary);transition:var(--speed1) all ease-out;cursor:pointer}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3::-moz-range-thumb{appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:1.25rem;inline-size:1.25rem;border-radius:50%;background:var(--primary);transition:var(--speed1) all ease-out;cursor:pointer}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:not(:disabled):is(:focus,:hover)::-webkit-slider-thumb{box-shadow:0 0 0 .625rem var(--active)}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:not(:disabled):is(:focus,:hover)::-moz-range-thumb{box-shadow:0 0 0 .625rem var(--active)}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:disabled{cursor:not-allowed;opacity:1}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:disabled::-webkit-slider-thumb{background:#9E9E9E;cursor:not-allowed}.slider.svelte-89v8l3>input.svelte-89v8l3.svelte-89v8l3:disabled::-moz-range-thumb{background:#9E9E9E;cursor:not-allowed}.slider.svelte-89v8l3>input.svelte-89v8l3:disabled~.svelte-89v8l3:is(span,.tooltip){background:#9E9E9E}.slider.svelte-89v8l3>span.svelte-89v8l3.svelte-89v8l3{position:absolute;inset-block-start:calc(50% - .1875rem);block-size:.375rem;border-radius:1rem;background:var(--primary);z-index:0;inset-inline-start:var(---start);inset-inline-end:var(---end)}.slider.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:before{content:"";position:absolute;inline-size:100%;block-size:.25rem;border-radius:1rem;background:var(--active)}.svelte-89v8l3:is(nav,.row,.field)>.slider.svelte-89v8l3.svelte-89v8l3:not(.circle,.small,.medium,.large){flex:auto}.snackbar.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform-start:translate(-50%, 1rem);---transform-end:translate(-50%, 0);position:fixed;inset-block-start:auto;inset-block-end:6rem;inset-inline-start:50%;inset-inline-end:auto;inline-size:80%;block-size:auto;z-index:200;visibility:hidden;display:flex;box-shadow:var(--elevate2);color:var(--inverse-on-surface);background-color:var(--inverse-surface);padding:1rem;opacity:1;cursor:pointer;text-align:start;align-items:center;border-radius:.25rem;gap:.5rem;transform:var(---transform-end)}.snackbar.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-start:6rem;inset-block-end:auto}.snackbar.active.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{visibility:visible;animation:var(--speed2) svelte-89v8l3-to-snackbar}.snackbar.active.top.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---transform-end:translate(-50%, -1rem)}@keyframes svelte-89v8l3-to-snackbar{0%{opacity:0;transform:var(---transform-start)}to{opacity:1;transform:var(---transform-end)}}@media only screen and (min-width: 993px){.snackbar.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:40%}}.tabs.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:flex;white-space:nowrap;border-block-end:.0625rem solid var(--surface-variant)}.tabs.min.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{padding:0 1rem;gap:2rem}.tabs.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.left-align,.right-align,.center-align){justify-content:space-around}.svelte-89v8l3+.tabs.svelte-89v8l3.svelte-89v8l3{margin-block-start:1rem}.tooltip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:-.5rem;visibility:hidden;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--inverse-surface);color:var(--inverse-on-surface);font-size:.75rem;text-align:center;border-radius:.25rem;padding:.5rem;position:absolute;z-index:3;inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;inline-size:auto;white-space:nowrap;font-weight:500;opacity:0;transition:var(--speed2) all;line-height:normal;transform:translate(-50%,-100%) scale(.9)}.tooltip.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-start:0;inset-block-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%) scale(.9)}.tooltip.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-inline-end:0;inset-block-start:50%;inset-block-end:auto;inset-inline-start:auto;transform:translate(100%,-50%) scale(.9)}.tooltip.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inset-block-end:0;inset-inline-start:50%;inset-block-start:auto;inset-inline-end:auto;transform:translate(-50%,100%) scale(.9)}.tooltip.small.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:8rem;white-space:normal}.tooltip.medium.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:12rem;white-space:normal}.tooltip.large.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{inline-size:16rem;white-space:normal}.svelte-89v8l3:hover>.tooltip.svelte-89v8l3.svelte-89v8l3{visibility:visible;opacity:1;transform:translate(-50%,-100%) scale(1)}.svelte-89v8l3:hover>.tooltip.left.svelte-89v8l3.svelte-89v8l3{transform:translate(-100%,-50%) scale(1)}.svelte-89v8l3:hover>.tooltip.right.svelte-89v8l3.svelte-89v8l3{transform:translate(100%,-50%) scale(1)}.svelte-89v8l3:hover>.tooltip.bottom.svelte-89v8l3.svelte-89v8l3{transform:translate(-50%,100%) scale(1)}.tooltip.no-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:0}.tooltip.medium-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:-1rem}.tooltip.large-space.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---space:-1.5rem}.tooltip.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:not(.left,.right,.bottom){margin-block-start:var(---space)!important}.tooltip.left.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-start:var(---space)!important}.tooltip.right.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-inline-end:var(---space)!important}.tooltip.bottom.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-block-end:var(---space)!important}.tooltip.max.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{display:block;font-size:inherit;white-space:normal;text-align:start;inline-size:20rem;border-radius:.5rem;padding:1rem;box-shadow:var(--elevate2)}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).light.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---blur:1rem;-webkit-backdrop-filter:blur(var(---blur));backdrop-filter:blur(var(---blur));color:var(--on-surface);background-color:#ffffff80}.dark.svelte-89v8l3 .svelte-89v8l3.svelte-89v8l3:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).dark.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00000080}.small-blur.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---blur:.5rem}.large-blur.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{---blur:1.5rem}.shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-color:#00000050}.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3:is(.left-shadow,.right-shadow,.top-shadow,.bottom-shadow){background-color:transparent!important}.left-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to right,black,transparent)}.right-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to left,black,transparent)}.bottom-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to top,black,transparent)}.top-shadow.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{background-image:linear-gradient(to bottom,black,transparent)}.description.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{opacity:.8}.question-box.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin:1rem 0}.helper.answerLength.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{text-align:right;width:90%;padding-top:0.65rem}.multiple-choice.svelte-89v8l3.svelte-89v8l3.svelte-89v8l3{margin-top:1rem}');
}
function Hl(l, e, t) {
  const s = l.slice();
  return s[14] = e[t], s[15] = e, s[16] = t, s;
}
function Yl(l, e, t) {
  const s = l.slice();
  return s[14] = e[t], s[16] = t, s;
}
function Wl(l, e, t) {
  const s = l.slice();
  return s[14] = e[t], s[18] = e, s[16] = t, s;
}
function Jl(l) {
  let e;
  return {
    c() {
      e = D("span"), e.textContent = "*", x(e, "class", "svelte-89v8l3");
    },
    m(t, s) {
      B(t, e, s);
    },
    d(t) {
      t && $(e);
    }
  };
}
function Xl(l) {
  let e, t, s, r, n, o, v, a, c = (
    /*answer*/
    l[0].answer.length + ""
  ), y, d, u, i;
  return {
    c() {
      e = D("div"), t = D("input"), r = F(), n = D("span"), o = Y(
        /*errorText*/
        l[3]
      ), v = F(), a = D("p"), y = Y(c), x(t, "type", "text"), x(t, "placeholder", s = /*question*/
      l[1].placeholder || ""), x(t, "class", "svelte-89v8l3"), x(n, "class", "error svelte-89v8l3"), x(a, "class", "answerLength helper svelte-89v8l3"), x(e, "class", d = "field border " + /*error*/
      l[2] + " svelte-89v8l3");
    },
    m(w, f) {
      B(w, e, f), _(e, t), Ce(
        t,
        /*answer*/
        l[0].answer
      ), _(e, r), _(e, n), _(n, o), _(e, v), _(e, a), _(a, y), u || (i = [
        X(
          t,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        X(
          t,
          "input",
          /*check*/
          l[4]
        )
      ], u = !0);
    },
    p(w, f) {
      f & /*question*/
      2 && s !== (s = /*question*/
      w[1].placeholder || "") && x(t, "placeholder", s), f & /*answer*/
      1 && t.value !== /*answer*/
      w[0].answer && Ce(
        t,
        /*answer*/
        w[0].answer
      ), f & /*errorText*/
      8 && Z(
        o,
        /*errorText*/
        w[3]
      ), f & /*answer*/
      1 && c !== (c = /*answer*/
      w[0].answer.length + "") && Z(y, c), f & /*error*/
      4 && d !== (d = "field border " + /*error*/
      w[2] + " svelte-89v8l3") && x(e, "class", d);
    },
    d(w) {
      w && $(e), u = !1, ge(i);
    }
  };
}
function Kl(l) {
  let e, t, s, r, n, o, v, a = (
    /*answer*/
    l[0].answer.length + ""
  ), c, y, d, u;
  return {
    c() {
      e = D("div"), t = D("textarea"), s = F(), r = D("span"), n = Y(
        /*errorText*/
        l[3]
      ), o = F(), v = D("p"), c = Y(a), x(t, "spellcheck", "false"), x(t, "class", "svelte-89v8l3"), x(r, "class", "error svelte-89v8l3"), x(v, "class", "answerLength helper svelte-89v8l3"), x(e, "class", y = "field textarea border " + /*error*/
      l[2] + " svelte-89v8l3");
    },
    m(i, w) {
      B(i, e, w), _(e, t), Ce(
        t,
        /*answer*/
        l[0].answer
      ), _(e, s), _(e, r), _(r, n), _(e, o), _(e, v), _(v, c), d || (u = [
        X(
          t,
          "input",
          /*textarea_input_handler*/
          l[9]
        ),
        X(
          t,
          "input",
          /*check*/
          l[4]
        )
      ], d = !0);
    },
    p(i, w) {
      w & /*answer*/
      1 && Ce(
        t,
        /*answer*/
        i[0].answer
      ), w & /*errorText*/
      8 && Z(
        n,
        /*errorText*/
        i[3]
      ), w & /*answer*/
      1 && a !== (a = /*answer*/
      i[0].answer.length + "") && Z(c, a), w & /*error*/
      4 && y !== (y = "field textarea border " + /*error*/
      i[2] + " svelte-89v8l3") && x(e, "class", y);
    },
    d(i) {
      i && $(e), d = !1, ge(u);
    }
  };
}
function Ql(l) {
  let e, t = Ie(
    /*question*/
    l[1].options.optionsData
  ), s = [];
  for (let r = 0; r < t.length; r += 1)
    s[r] = Zl(Wl(l, t, r));
  return {
    c() {
      e = D("div");
      for (let r = 0; r < s.length; r += 1)
        s[r].c();
      x(e, "class", "multiple-choice svelte-89v8l3");
    },
    m(r, n) {
      B(r, e, n);
      for (let o = 0; o < s.length; o += 1)
        s[o] && s[o].m(e, null);
    },
    p(r, n) {
      if (n & /*question, log*/
      34) {
        t = Ie(
          /*question*/
          r[1].options.optionsData
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const v = Wl(r, t, o);
          s[o] ? s[o].p(v, n) : (s[o] = Zl(v), s[o].c(), s[o].m(e, null));
        }
        for (; o < s.length; o += 1)
          s[o].d(1);
        s.length = t.length;
      }
    },
    d(r) {
      r && $(e), vl(s, r);
    }
  };
}
function Zl(l) {
  let e, t, s, r, n, o = (
    /*opt*/
    l[14] + ""
  ), v, a, c, y, d;
  function u() {
    l[10].call(
      t,
      /*index*/
      l[16]
    );
  }
  return {
    c() {
      e = D("label"), t = D("input"), r = F(), n = D("span"), v = Y(o), a = F(), c = D("br"), x(t, "type", "radio"), x(t, "name", s = "radio_group_" + /*question*/
      l[1].id), x(t, "class", "svelte-89v8l3"), x(n, "class", "svelte-89v8l3"), x(e, "class", "radio svelte-89v8l3"), x(c, "class", "svelte-89v8l3");
    },
    m(i, w) {
      B(i, e, w), _(e, t), Ce(
        t,
        /*index*/
        l[16]
      ), _(e, r), _(e, n), _(n, v), _(e, a), B(i, c, w), y || (d = [
        X(
          t,
          "change",
          /*log*/
          l[5]
        ),
        X(t, "change", u)
      ], y = !0);
    },
    p(i, w) {
      l = i, w & /*question*/
      2 && s !== (s = "radio_group_" + /*question*/
      l[1].id) && x(t, "name", s), Ce(
        t,
        /*index*/
        l[16]
      ), w & /*question*/
      2 && o !== (o = /*opt*/
      l[14] + "") && Z(v, o);
    },
    d(i) {
      i && ($(e), $(c)), y = !1, ge(d);
    }
  };
}
function et(l) {
  let e, t, s, r, n, o, v, a, c = Ie(
    /*question*/
    l[1].options.optionsData
  ), y = [];
  for (let d = 0; d < c.length; d += 1)
    y[d] = lt(Yl(l, c, d));
  return {
    c() {
      e = D("div"), t = D("select");
      for (let d = 0; d < y.length; d += 1)
        y[d].c();
      s = F(), r = D("label"), r.textContent = "Select", n = F(), o = D("i"), o.textContent = "arrow_drop_down", x(t, "class", "svelte-89v8l3"), /*answer*/
      l[0].answer === void 0 && tl(() => (
        /*select_change_handler*/
        l[11].call(t)
      )), x(r, "class", "svelte-89v8l3"), x(o, "class", "svelte-89v8l3"), x(e, "class", "field label suffix border svelte-89v8l3");
    },
    m(d, u) {
      B(d, e, u), _(e, t);
      for (let i = 0; i < y.length; i += 1)
        y[i] && y[i].m(t, null);
      ql(
        t,
        /*answer*/
        l[0].answer,
        !0
      ), _(e, s), _(e, r), _(e, n), _(e, o), v || (a = X(
        t,
        "change",
        /*select_change_handler*/
        l[11]
      ), v = !0);
    },
    p(d, u) {
      if (u & /*question*/
      2) {
        c = Ie(
          /*question*/
          d[1].options.optionsData
        );
        let i;
        for (i = 0; i < c.length; i += 1) {
          const w = Yl(d, c, i);
          y[i] ? y[i].p(w, u) : (y[i] = lt(w), y[i].c(), y[i].m(t, null));
        }
        for (; i < y.length; i += 1)
          y[i].d(1);
        y.length = c.length;
      }
      u & /*answer*/
      1 && ql(
        t,
        /*answer*/
        d[0].answer
      );
    },
    d(d) {
      d && $(e), vl(y, d), v = !1, a();
    }
  };
}
function lt(l) {
  let e, t = (
    /*opt*/
    l[14] + ""
  ), s;
  return {
    c() {
      e = D("option"), s = Y(t), e.__value = /*index*/
      l[16], Ce(e, e.__value), x(e, "class", "svelte-89v8l3");
    },
    m(r, n) {
      B(r, e, n), _(e, s);
    },
    p(r, n) {
      n & /*question*/
      2 && t !== (t = /*opt*/
      r[14] + "") && Z(s, t);
    },
    d(r) {
      r && $(e);
    }
  };
}
function tt(l) {
  let e, t = Ie(
    /*question*/
    l[1].options.optionsData
  ), s = [];
  for (let r = 0; r < t.length; r += 1)
    s[r] = st(Hl(l, t, r));
  return {
    c() {
      e = D("div");
      for (let r = 0; r < s.length; r += 1)
        s[r].c();
      x(e, "class", "multiple-choice svelte-89v8l3");
    },
    m(r, n) {
      B(r, e, n);
      for (let o = 0; o < s.length; o += 1)
        s[o] && s[o].m(e, null);
    },
    p(r, n) {
      if (n & /*question, checkbox*/
      66) {
        t = Ie(
          /*question*/
          r[1].options.optionsData
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const v = Hl(r, t, o);
          s[o] ? s[o].p(v, n) : (s[o] = st(v), s[o].c(), s[o].m(e, null));
        }
        for (; o < s.length; o += 1)
          s[o].d(1);
        s.length = t.length;
      }
    },
    d(r) {
      r && $(e), vl(s, r);
    }
  };
}
function st(l) {
  let e, t, s, r, n, o = (
    /*opt*/
    l[14] + ""
  ), v, a, c, y, d;
  function u() {
    l[12].call(
      t,
      /*index*/
      l[16]
    );
  }
  return {
    c() {
      e = D("label"), t = D("input"), r = F(), n = D("span"), v = Y(o), a = F(), c = D("br"), x(t, "type", "checkbox"), x(t, "name", s = "checkboxes_" + /*question*/
      l[1].id), x(t, "class", "svelte-89v8l3"), x(n, "class", "svelte-89v8l3"), x(e, "class", "checkbox svelte-89v8l3"), x(c, "class", "svelte-89v8l3");
    },
    m(i, w) {
      B(i, e, w), _(e, t), Ce(
        t,
        /*index*/
        l[16]
      ), _(e, r), _(e, n), _(n, v), _(e, a), B(i, c, w), y || (d = [
        X(
          t,
          "change",
          /*checkbox*/
          l[6]
        ),
        X(t, "change", u)
      ], y = !0);
    },
    p(i, w) {
      l = i, w & /*question*/
      2 && s !== (s = "checkboxes_" + /*question*/
      l[1].id) && x(t, "name", s), Ce(
        t,
        /*index*/
        l[16]
      ), w & /*question*/
      2 && o !== (o = /*opt*/
      l[14] + "") && Z(v, o);
    },
    d(i) {
      i && ($(e), $(c)), y = !1, ge(d);
    }
  };
}
function rt(l) {
  let e, t, s, r, n, o, v, a, c, y, d, u, i = (
    /*answer*/
    l[0].answer && nt(l)
  );
  return {
    c() {
      e = D("div"), t = D("button"), s = D("i"), s.textContent = "today", r = F(), n = D("span"), n.textContent = "Date", o = F(), v = D("input"), y = F(), i && i.c(), x(s, "class", "svelte-89v8l3"), x(n, "class", "svelte-89v8l3"), x(v, "type", "date"), x(v, "min", a = new Date(
        /*question*/
        l[1].options.optionsData[0]
      ).toISOString().split("T")[0]), x(v, "max", c = new Date(
        /*question*/
        l[1].options.optionsData[1]
      ).toISOString().split("T")[0]), x(v, "class", "svelte-89v8l3"), x(t, "class", "svelte-89v8l3"), x(e, "class", "date svelte-89v8l3");
    },
    m(w, f) {
      B(w, e, f), _(e, t), _(t, s), _(t, r), _(t, n), _(t, o), _(t, v), _(e, y), i && i.m(e, null), d || (u = X(
        v,
        "change",
        /*date*/
        l[7]
      ), d = !0);
    },
    p(w, f) {
      f & /*question*/
      2 && a !== (a = new Date(
        /*question*/
        w[1].options.optionsData[0]
      ).toISOString().split("T")[0]) && x(v, "min", a), f & /*question*/
      2 && c !== (c = new Date(
        /*question*/
        w[1].options.optionsData[1]
      ).toISOString().split("T")[0]) && x(v, "max", c), /*answer*/
      w[0].answer ? i ? i.p(w, f) : (i = nt(w), i.c(), i.m(e, null)) : i && (i.d(1), i = null);
    },
    d(w) {
      w && $(e), i && i.d(), d = !1, u();
    }
  };
}
function nt(l) {
  let e = new Date(
    /*answer*/
    l[0].answer
  ).toDateString() + "", t;
  return {
    c() {
      t = Y(e);
    },
    m(s, r) {
      B(s, t, r);
    },
    p(s, r) {
      r & /*answer*/
      1 && e !== (e = new Date(
        /*answer*/
        s[0].answer
      ).toDateString() + "") && Z(t, e);
    },
    d(s) {
      s && $(t);
    }
  };
}
function Ks(l) {
  let e, t, s = (
    /*question*/
    l[1].question + ""
  ), r, n, o, v, a = (
    /*question*/
    (l[1].prompt || "") + ""
  ), c, y, d, u, i, w, f, z = (
    /*question*/
    l[1].required && Jl()
  ), k = (
    /*question*/
    l[1].type == "short_answer" && Xl(l)
  ), g = (
    /*question*/
    l[1].type == "paragraph" && Kl(l)
  ), b = (
    /*question*/
    l[1].type == "multiple" && Ql(l)
  ), M = (
    /*question*/
    l[1].type == "dropdown" && et(l)
  ), h = (
    /*question*/
    l[1].type == "checkboxes" && tt(l)
  ), P = (
    /*question*/
    l[1].type == "date" && rt(l)
  );
  return {
    c() {
      e = D("article"), t = D("h6"), r = Y(s), n = F(), z && z.c(), o = F(), v = D("p"), c = Y(a), y = F(), k && k.c(), d = F(), g && g.c(), u = F(), b && b.c(), i = F(), M && M.c(), w = F(), h && h.c(), f = F(), P && P.c(), x(t, "class", "svelte-89v8l3"), x(v, "class", "description svelte-89v8l3"), x(e, "class", "border question-box svelte-89v8l3");
    },
    m(p, I) {
      B(p, e, I), _(e, t), _(t, r), _(t, n), z && z.m(t, null), _(e, o), _(e, v), _(v, c), _(e, y), k && k.m(e, null), _(e, d), g && g.m(e, null), _(e, u), b && b.m(e, null), _(e, i), M && M.m(e, null), _(e, w), h && h.m(e, null), _(e, f), P && P.m(e, null);
    },
    p(p, [I]) {
      I & /*question*/
      2 && s !== (s = /*question*/
      p[1].question + "") && Z(r, s), /*question*/
      p[1].required ? z || (z = Jl(), z.c(), z.m(t, null)) : z && (z.d(1), z = null), I & /*question*/
      2 && a !== (a = /*question*/
      (p[1].prompt || "") + "") && Z(c, a), /*question*/
      p[1].type == "short_answer" ? k ? k.p(p, I) : (k = Xl(p), k.c(), k.m(e, d)) : k && (k.d(1), k = null), /*question*/
      p[1].type == "paragraph" ? g ? g.p(p, I) : (g = Kl(p), g.c(), g.m(e, u)) : g && (g.d(1), g = null), /*question*/
      p[1].type == "multiple" ? b ? b.p(p, I) : (b = Ql(p), b.c(), b.m(e, i)) : b && (b.d(1), b = null), /*question*/
      p[1].type == "dropdown" ? M ? M.p(p, I) : (M = et(p), M.c(), M.m(e, w)) : M && (M.d(1), M = null), /*question*/
      p[1].type == "checkboxes" ? h ? h.p(p, I) : (h = tt(p), h.c(), h.m(e, f)) : h && (h.d(1), h = null), /*question*/
      p[1].type == "date" ? P ? P.p(p, I) : (P = rt(p), P.c(), P.m(e, null)) : P && (P.d(1), P = null);
    },
    i: we,
    o: we,
    d(p) {
      p && $(e), z && z.d(), k && k.d(), g && g.d(), b && b.d(), M && M.d(), h && h.d(), P && P.d();
    }
  };
}
function Qs(l, e, t) {
  let { question: s = void 0 } = e, { answer: r = { id: String(s.id), answer: "" } } = e, n, o = "", v = [];
  function a(k) {
    Js(k.target.value, s.type, s.validate) ? (t(2, n = ""), t(3, o = "")) : (t(2, n = "invalid"), t(3, o = `The answer doesn't meet the requirements. (${s.validate.replace(":", "-")})`));
  }
  function c(k) {
    t(0, r.answer = Number(k.target.value), r);
  }
  function y(k) {
    if (v.length == 0)
      for (let g in s.options.optionsData)
        v.push(!1);
    v[Number(k.target.value)] ? v[Number(k.target.value)] = !1 : v[Number(k.target.value)] = !0, t(0, r.answer = v, r);
  }
  function d(k) {
    t(0, r.answer = new Date(k.target.value).getTime(), r);
  }
  function u() {
    r.answer = this.value, t(0, r);
  }
  function i() {
    r.answer = this.value, t(0, r);
  }
  function w(k) {
    this.value;
  }
  function f() {
    r.answer = Gt(this), t(0, r);
  }
  function z(k) {
    this.value;
  }
  return l.$$set = (k) => {
    "question" in k && t(1, s = k.question), "answer" in k && t(0, r = k.answer);
  }, [
    r,
    s,
    n,
    o,
    a,
    c,
    y,
    d,
    u,
    i,
    w,
    f,
    z
  ];
}
class Fl extends _t {
  constructor(e) {
    super(), kt(this, e, Qs, Ks, pt, { question: 1, answer: 0 }, Xs);
  }
  get question() {
    return this.$$.ctx[1];
  }
  set question(e) {
    this.$$set({ question: e }), fe();
  }
  get answer() {
    return this.$$.ctx[0];
  }
  set answer(e) {
    this.$$set({ answer: e }), fe();
  }
}
zt(Fl, { question: {}, answer: {} }, [], [], !0);
let Xe;
const Zs = new Uint8Array(16);
function er() {
  if (!Xe && (Xe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Xe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Xe(Zs);
}
const K = [];
for (let l = 0; l < 256; ++l)
  K.push((l + 256).toString(16).slice(1));
function lr(l, e = 0) {
  return K[l[e + 0]] + K[l[e + 1]] + K[l[e + 2]] + K[l[e + 3]] + "-" + K[l[e + 4]] + K[l[e + 5]] + "-" + K[l[e + 6]] + K[l[e + 7]] + "-" + K[l[e + 8]] + K[l[e + 9]] + "-" + K[l[e + 10]] + K[l[e + 11]] + K[l[e + 12]] + K[l[e + 13]] + K[l[e + 14]] + K[l[e + 15]];
}
const tr = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ot = {
  randomUUID: tr
};
function sr(l, e, t) {
  if (ot.randomUUID && !e && !l)
    return ot.randomUUID();
  l = l || {};
  const s = l.random || (l.rng || er)();
  if (s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, e) {
    t = t || 0;
    for (let r = 0; r < 16; ++r)
      e[t + r] = s[r];
    return e;
  }
  return lr(s);
}
function rr(l) {
  ft(l, "svelte-17ley6w", ':root{--size:16px;--font:Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;--font-icon:"Material Symbols Outlined";--speed1:.1s;--speed2:.2s;--speed3:.3s;--speed4:.4s}:root{--primary:#6750a4;--on-primary:#ffffff;--primary-container:#e9ddff;--on-primary-container:#22005d;--secondary:#625b71;--on-secondary:#ffffff;--secondary-container:#e8def8;--on-secondary-container:#1e192b;--tertiary:#7e5260;--on-tertiary:#ffffff;--tertiary-container:#ffd9e3;--on-tertiary-container:#31101d;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#1c1b1e;--surface:#fdf8fd;--on-surface:#1c1b1e;--surface-variant:#e7e0eb;--on-surface-variant:#49454e;--outline:#7a757f;--outline-variant:#cac4cf;--shadow:#000000;--scrim:#000000;--inverse-surface:#313033;--inverse-on-surface:#f4eff4;--inverse-primary:#cfbcff;--surface-dim:#ddd8dd;--surface-bright:#fdf8fd;--surface-container-lowest:#ffffff;--surface-container-low:#f7f2f7;--surface-container:#f2ecf1;--surface-container-high:#ece7eb;--surface-container-highest:#e6e1e6;--overlay:rgb(0 0 0 / .5);--active:rgb(0 0 0 / .1);--elevate1:0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2:0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3:0 .375rem .75rem 0 rgb(0 0 0 / .48)}@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-outlined.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-outlined.woff2) format("woff2")}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-rounded.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-rounded.woff2) format("woff2")}@font-face{font-family:Material Symbols Sharp;font-style:normal;font-weight:400;font-display:swap;src:url(material-symbols-sharp.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.4.7/dist/cdn/material-symbols-sharp.woff2) format("woff2")}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{-webkit-tap-highlight-color:transparent;position:relative;vertical-align:middle;color:inherit;margin:0;padding:0;border-radius:inherit;box-sizing:border-box}body.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--on-surface);background-color:var(--surface);overflow-x:hidden}label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-size:.75rem;vertical-align:baseline}a.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,i.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{vertical-align:bottom}a.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;border:none;font-family:inherit;outline:inherit;justify-content:center}a.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,i.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{user-select:none}body.svelte-17ley6w .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-scrollbar,body.svelte-17ley6w .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-scrollbar-thumb,body.svelte-17ley6w .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-scrollbar-button{background:none;inline-size:.4rem;block-size:.4rem}body.svelte-17ley6w .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(:hover,:focus)::-webkit-scrollbar-thumb{background:var(--outline);border-radius:1rem}.primary.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--primary)!important;color:var(--on-primary)!important}.primary-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--primary)!important}.primary-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--primary)!important}.primary-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}.secondary.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--secondary)!important;color:var(--on-secondary)!important}.secondary-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--secondary)!important}.secondary-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--secondary)!important}.secondary-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}.tertiary.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}.tertiary-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--tertiary)!important}.tertiary-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--tertiary)!important}.tertiary-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}.error.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--error)!important;color:var(--on-error)!important}.error-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--error)!important}.error-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--error)!important}.error-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--error-container)!important;color:var(--on-error-container)!important}.background.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--background)!important;color:var(--on-background)!important}.surface.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-dim.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-bright.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-container-lowest.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-container-low.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-container-high.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.surface-container-highest.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface)!important;color:var(--on-surface)!important}.surface-variant.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.inverse-surface.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--inverse-surface);color:var(--inverse-on-surface)}.inverse-primary.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--inverse-primary);color:var(--primary)}.inverse-primary-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--inverse-primary)!important}.inverse-primary-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--inverse-primary)!important}.surface-dim.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-dim)!important}.surface-bright.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-bright)!important}.surface-container-lowest.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container-lowest)!important}.surface-container-low.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container-low)!important}.surface-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container)!important}.surface-container-high.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container-high)!important}.surface-container-highest.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container-highest)!important}.surface-container-low.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--surface-container-low)!important}.black.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#000!important}.black-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#000!important}.black-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#000!important}.white.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff!important}.white-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#fff!important}.white-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#fff!important}.transparent.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:transparent!important;box-shadow:none!important;color:inherit!important}.transparent-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:transparent!important}.transparent-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:transparent!important}.fill.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(i){background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.middle-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;align-items:center!important}.bottom-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;align-items:end!important}.top-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;align-items:start!important}.left-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-align:start;justify-content:start!important}.right-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-align:end;justify-content:end!important}.center-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-align:center;justify-content:center!important}.red.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.red6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f44336!important}.red-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#f44336!important}.red-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#f44336!important}.red1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffebee!important}.red2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffcdd2!important}.red3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ef9a9a!important}.red4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e57373!important}.red5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ef5350!important}.red7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e53935!important}.red8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d32f2f!important}.red9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c62828!important}.red10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b71c1c!important}.pink.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.pink6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e91e63!important}.pink-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#e91e63!important}.pink-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#e91e63!important}.pink1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fce4ec!important}.pink2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f8bbd0!important}.pink3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f48fb1!important}.pink4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f06292!important}.pink5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ec407a!important}.pink7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d81b60!important}.pink8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c2185b!important}.pink9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ad1457!important}.pink10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#880e4f!important}.purple.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.purple6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9c27b0!important}.purple-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#9c27b0!important}.purple-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#9c27b0!important}.purple1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f3e5f5!important}.purple2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e1bee7!important}.purple3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ce93d8!important}.purple4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ba68c8!important}.purple5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ab47bc!important}.purple7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#8e24aa!important}.purple8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#7b1fa2!important}.purple9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#6a1b9a!important}.purple10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4a148c!important}.deep-purple.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.deep-purple6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#673ab7!important}.deep-purple-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#673ab7!important}.deep-purple-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#673ab7!important}.deep-purple1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ede7f6!important}.deep-purple2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d1c4e9!important}.deep-purple3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b39ddb!important}.deep-purple4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9575cd!important}.deep-purple5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#7e57c2!important}.deep-purple7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#5e35b1!important}.deep-purple8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#512da8!important}.deep-purple9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4527a0!important}.deep-purple10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#311b92!important}.indigo.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.indigo6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#3f51b5!important}.indigo-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#3f51b5!important}.indigo-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#3f51b5!important}.indigo1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e8eaf6!important}.indigo2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c5cae9!important}.indigo3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9fa8da!important}.indigo4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#7986cb!important}.indigo5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#5c6bc0!important}.indigo7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#3949ab!important}.indigo8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#303f9f!important}.indigo9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#283593!important}.indigo10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#1a237e!important}.blue.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.blue6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#2196f3!important}.blue-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#2196f3!important}.blue-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#2196f3!important}.blue1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e3f2fd!important}.blue2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#bbdefb!important}.blue3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#90caf9!important}.blue4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#64b5f6!important}.blue5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#42a5f5!important}.blue7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#1e88e5!important}.blue8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#1976d2!important}.blue9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#1565c0!important}.blue10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#0d47a1!important}.light-blue.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.light-blue6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#03a9f4!important}.light-blue-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#03a9f4!important}.light-blue-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#03a9f4!important}.light-blue1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e1f5fe!important}.light-blue2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b3e5fc!important}.light-blue3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#81d4fa!important}.light-blue4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4fc3f7!important}.light-blue5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#29b6f6!important}.light-blue7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#039be5!important}.light-blue8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#0288d1!important}.light-blue9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#0277bd!important}.light-blue10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#01579b!important}.cyan.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.cyan6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00bcd4!important}.cyan-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#00bcd4!important}.cyan-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#00bcd4!important}.cyan1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e0f7fa!important}.cyan2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b2ebf2!important}.cyan3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#80deea!important}.cyan4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4dd0e1!important}.cyan5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#26c6da!important}.cyan7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00acc1!important}.cyan8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#0097a7!important}.cyan9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00838f!important}.cyan10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#006064!important}.teal.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.teal6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#009688!important}.teal-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#009688!important}.teal-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#009688!important}.teal1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e0f2f1!important}.teal2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b2dfdb!important}.teal3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#80cbc4!important}.teal4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4db6ac!important}.teal5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#26a69a!important}.teal7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00897b!important}.teal8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00796b!important}.teal9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00695c!important}.teal10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#004d40!important}.green.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.green6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4caf50!important}.green-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#4caf50!important}.green-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#4caf50!important}.green1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e8f5e9!important}.green2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c8e6c9!important}.green3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#a5d6a7!important}.green4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#81c784!important}.green5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#66bb6a!important}.green7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#43a047!important}.green8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#388e3c!important}.green9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#2e7d32!important}.green10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#1b5e20!important}.light-green.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.light-green6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#8bc34a!important}.light-green-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#8bc34a!important}.light-green-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#8bc34a!important}.light-green1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f1f8e9!important}.light-green2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#dcedc8!important}.light-green3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c5e1a5!important}.light-green4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#aed581!important}.light-green5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9ccc65!important}.light-green7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#7cb342!important}.light-green8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#689f38!important}.light-green9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#558b2f!important}.light-green10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#33691e!important}.lime.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.lime6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#cddc39!important}.lime-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#cddc39!important}.lime-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#cddc39!important}.lime1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f9fbe7!important}.lime2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f0f4c3!important}.lime3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e6ee9c!important}.lime4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#dce775!important}.lime5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d4e157!important}.lime7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#c0ca33!important}.lime8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#afb42b!important}.lime9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9e9d24!important}.lime10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#827717!important}.yellow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.yellow6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffeb3b!important}.yellow-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#ffeb3b!important}.yellow-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#ffeb3b!important}.yellow1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fffde7!important}.yellow2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff9c4!important}.yellow3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff59d!important}.yellow4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff176!important}.yellow5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffee58!important}.yellow7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fdd835!important}.yellow8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fbc02d!important}.yellow9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f9a825!important}.yellow10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f57f17!important}.amber.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.amber6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffc107!important}.amber-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#ffc107!important}.amber-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#ffc107!important}.amber1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff8e1!important}.amber2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffecb3!important}.amber3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffe082!important}.amber4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffd54f!important}.amber5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffca28!important}.amber7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffb300!important}.amber8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffa000!important}.amber9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff8f00!important}.amber10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff6f00!important}.orange.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.orange6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff9800!important}.orange-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#ff9800!important}.orange-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#ff9800!important}.orange1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fff3e0!important}.orange2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffe0b2!important}.orange3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffcc80!important}.orange4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffb74d!important}.orange5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffa726!important}.orange7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fb8c00!important}.orange8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f57c00!important}.orange9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ef6c00!important}.orange10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e65100!important}.deep-orange.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.deep-orange6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff5722!important}.deep-orange-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#ff5722!important}.deep-orange-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#ff5722!important}.deep-orange1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fbe9e7!important}.deep-orange2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffccbc!important}.deep-orange3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ffab91!important}.deep-orange4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff8a65!important}.deep-orange5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#ff7043!important}.deep-orange7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f4511e!important}.deep-orange8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e64a19!important}.deep-orange9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d84315!important}.deep-orange10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#bf360c!important}.brown.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.brown6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#795548!important}.brown-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#795548!important}.brown-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#795548!important}.brown1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#efebe9!important}.brown2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#d7ccc8!important}.brown3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#bcaaa4!important}.brown4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#a1887f!important}.brown5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#8d6e63!important}.brown7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#6d4c41!important}.brown8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#5d4037!important}.brown9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#4e342e!important}.brown10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#3e2723!important}.blue-grey.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.blue-grey6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#607d8b!important}.blue-grey-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#607d8b!important}.blue-grey-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#607d8b!important}.blue-grey1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#eceff1!important}.blue-grey2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#cfd8dc!important}.blue-grey3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#b0bec5!important}.blue-grey4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#90a4ae!important}.blue-grey5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#78909c!important}.blue-grey7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#546e7a!important}.blue-grey8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#455a64!important}.blue-grey9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#37474f!important}.blue-grey10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#263238!important}.grey.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.grey6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#9e9e9e!important}.grey-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:#9e9e9e!important}.grey-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:#9e9e9e!important}.grey1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#fafafa!important}.grey2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#f5f5f5!important}.grey3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#eee!important}.grey4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#e0e0e0!important}.grey5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#bdbdbd!important}.grey7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#757575!important}.grey8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#616161!important}.grey9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#424242!important}.grey10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#212121!important}.horizontal.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:inline-flex;flex-direction:row!important;gap:1rem;inline-size:auto!important;max-inline-size:none!important}.horizontal.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:0!important;margin-block-end:0!important}.vertical.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;flex-direction:column!important}:is(a,button,.button,.chip).vertical.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:inline-flex;gap:.25rem;block-size:auto!important;max-block-size:none!important;padding-block-start:.5rem;padding-block-end:.5rem}.vertical.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-start:0!important;margin-inline-end:0!important}.divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.small-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.medium-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.large-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{min-inline-size:1.5rem;min-block-size:auto;block-size:.0625rem;background-color:var(--outline-variant);display:block;margin:0!important}.medium-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:1rem 0!important}.large-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:1.5rem 0!important}.small-divider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:.5rem 0!important}.divider.vertical.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{min-inline-size:auto;min-block-size:1.5rem;inline-size:.0625rem}.no-elevate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:none!important}.small-elevate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.elevate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:var(--elevate1)!important}.medium-elevate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:var(--elevate2)!important}.large-elevate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:var(--elevate3)!important}.round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:var(---round)}.small-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.medium-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.large-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:var(---round)!important}.top-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.bottom-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.left-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.right-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.medium-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---round:2rem}.small-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---round:.5rem}.large-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---round:3.5rem}.no-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.square.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.top-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.bottom-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.left-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.right-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:0!important}.top-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-start-start-radius:var(---round)!important;border-start-end-radius:var(---round)!important}.bottom-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-end-end-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.left-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-start-start-radius:var(---round)!important;border-end-start-radius:var(---round)!important}.right-round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-start-end-radius:var(---round)!important;border-end-end-radius:var(---round)!important}.circle.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:50%}:is(button,.button,.chip).circle.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:2.5rem}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.circle,.square):not(i,img,video,svg),:is(.circle,.square).chip.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2.5rem;inline-size:2.5rem;padding:0}.svelte-17ley6w:is(.circle,.square)>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:none}:is(.circle,.square).small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(i,img,video,svg),:is(.circle,.square).chip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2rem;inline-size:2rem}:is(.circle,.square).large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(i,img,video,svg){block-size:3rem;inline-size:3rem}:is(.circle,.square).extra.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(i,img,video,svg){block-size:3.5rem;inline-size:3.5rem}:is(.circle,.square).round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1rem!important}.border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(table,.field){box-sizing:border-box;border:.0625rem solid var(--outline);background-color:transparent;box-shadow:none}.no-border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:transparent!important}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(nav,.row,dialog.max,header.fixed,footer.fixed,menu > a,menu.max,table,.tabs):not(.round){border-radius:0}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.no-margin,.auto-margin,.tiny-margin,.small-margin,.medium-margin,.margin,.large-margin):not(.left-margin,.right-margin,.top-margin,.bottom-margin,.horizontal-margin,.vertical-margin){margin:var(---margin)!important}.no-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.auto-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.tiny-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.small-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.medium-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.large-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.left-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.right-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.top-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.bottom-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:1rem}.no-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:0}.auto-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:auto}.tiny-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:.25rem}.small-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:.5rem}.large-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---margin:1.5rem}.left-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-start:var(---margin)!important}.right-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-end:var(---margin)!important}.top-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:var(---margin)!important}.bottom-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-margin.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-end:var(---margin)!important}.no-opacity.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1!important}.opacity.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:0!important}.small-opacity.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:.75!important}.medium-opacity.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:.5!important}.large-opacity.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:.25!important}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.no-padding,.auto-padding,.tiny-padding,.small-padding,.medium-padding,.padding,.large-padding):not(.left-padding,.right-padding,.top-padding,.bottom-padding,.horizontal-padding,.vertical-padding){padding:var(---padding)!important}.no-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.auto-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.tiny-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.small-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.medium-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.large-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.left-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.right-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.top-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.bottom-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:1rem}.no-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:0}.auto-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:auto}.tiny-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:.25rem}.small-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:.5rem}.large-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:1.5rem}.left-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding-inline-start:var(---padding)!important}.right-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.horizontal-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding-inline-end:var(---padding)!important}.top-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding-block-start:var(---padding)!important}.bottom-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.vertical-padding.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding-block-end:var(---padding)!important}.front.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{z-index:10!important}.back.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{z-index:-10!important}.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-start:0}.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-end:0}.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:0}.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-end:0}.center.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-start:50%;transform:translate(-50%)}.middle.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:50%;transform:translateY(-50%)}.middle.center.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{transform:translate(-50%,-50%)}.scroll.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{overflow:auto}.no-scroll.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{overflow:hidden}.small-width.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:12rem!important;max-inline-size:100%}.medium-width.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:24rem!important;max-inline-size:100%}.large-width.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:36rem!important;max-inline-size:100%}.small-height.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:12rem!important}.medium-height.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:24rem!important}.large-height.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:36rem!important}.wrap.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:block;white-space:normal}.no-wrap.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(menu){display:flex;white-space:nowrap}.tiny-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(nav,.row,.grid,table,.tooltip){block-size:.5rem}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.space,.small-space):not(nav,.row,.grid,table,.tooltip){block-size:1rem}.medium-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(nav,.row,.grid,table,.tooltip){block-size:2rem}.large-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(nav,.row,.grid,table,.tooltip){block-size:3rem}.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:-webkit-fill-available;inline-size:-moz-available}@media only screen and (max-width: 600px){.m.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.s),.l.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.s),.m.l.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.s){display:none}}@media only screen and (min-width: 601px) and (max-width: 992px){.s.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.m),.l.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.m),.s.l.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.m){display:none}}@media only screen and (min-width: 993px){.m.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.l),.s.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.l),.m.s.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.l){display:none}}body.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-family:var(--font);font-size:.875rem;line-height:1.25}h5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-weight:400;display:flex;align-items:center;margin-block-end:.5rem;line-height:normal}.svelte-17ley6w+h5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:1rem}h5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-size:1.75rem}.link.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--primary)!important}.inverse-link.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{color:var(--inverse-primary)!important}.truncate.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{overflow:hidden;white-space:nowrap!important;text-overflow:ellipsis;flex:inherit}.truncate.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{white-space:nowrap!important}.small-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-size:.75rem}.medium-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-size:.875rem}.large-text.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-size:1rem}.upper.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-transform:uppercase}.lower.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-transform:lowercase}.capitalize.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-transform:capitalize}.bold.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-weight:700}.overline.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-decoration:line-through}.underline.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-decoration:underline}.italic.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{font-style:italic}p.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:.5rem 0}.no-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:normal}.tiny-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:1.25}.small-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:1.5}.medium-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:1.75}.large-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:2}.extra-line.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{line-height:2.25}.wave.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.chip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.wave.light.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button,button):after{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;z-index:1;border-radius:inherit;inline-size:100%;block-size:100%;background-position:center;background-image:radial-gradient(circle,rgb(255 255 255 / .4) 1%,transparent 1%);opacity:0;transition:none}.wave.dark.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.wave.row.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.chip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,:is(.button,button).none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,:is(.button,button).border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,:is(.button,button).transparent.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after{background-image:radial-gradient(circle,rgb(150 150 150 / .2) 1%,transparent 1%)}.wave.none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,:is(.button,button).none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after{inset-block-start:0;inset-inline-start:-.25rem;padding:0 .25rem}.wave.none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.small,.medium,.large,.extra):after,:is(.button,button).none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.small,.medium,.large,.extra):after{inset-block-start:-.25rem;inset-inline-start:-.25rem;padding:.25rem}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.wave,.chip,.button,button):is(:focus,:hover):after{background-size:15000%;opacity:1;transition:var(--speed2) background-size linear}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.wave,.chip,.button,button):active:after{background-size:5000%;opacity:0;transition:none}.no-wave.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after,.no-wave.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(:hover,:active):after{display:none}.badge.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:inline-flex;align-items:center;justify-content:center;position:absolute;font-size:.75rem;text-transform:none;z-index:1;padding:0 .375rem;background-color:var(--error);color:var(--on-error);inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;block-size:1.25rem;line-height:normal;transform:translate(50%,-100%)}.badge.none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:auto;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:auto;transform:none;position:relative;margin:0 .125rem}.badge.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:auto;inset-inline-start:50%;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:50%;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%)}.badge.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:50%;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(100%,-50%)}.badge.top.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:0;inset-inline-start:0;inset-block-end:auto;inset-inline-end:auto;transform:translate(-50%,-100%)}.badge.bottom.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:auto;inset-inline-start:0;inset-block-end:0;inset-inline-end:auto;transform:translate(-50%,100%)}.badge.top.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:0;inset-inline-start:auto;inset-block-end:auto;inset-inline-end:0;transform:translate(50%,-100%)}.badge.bottom.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:auto;inset-inline-start:auto;inset-block-end:0;inset-inline-end:0;transform:translate(50%,100%)}.badge.border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--error);color:var(--error)}.badge.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.circle,.square){padding:0;text-align:center;inline-size:1.25rem;block-size:1.25rem}.button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,button.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2.5rem;min-inline-size:2.5rem;font-size:.875rem;font-weight:500;color:var(--on-primary);padding:0 1.5rem;background-color:var(--primary);margin:0 .5rem;border-radius:1.25rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}:is(button,.button).none.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:auto;block-size:auto;color:var(--primary);padding:0;background-color:transparent;min-inline-size:auto;min-block-size:1.5rem}:is(button,.button).small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2rem;min-inline-size:2rem;font-size:.875rem;border-radius:1rem}:is(button,.button).large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3rem;min-inline-size:3rem;border-radius:1.5rem}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button,button):is(.extra,.extend){block-size:3.5rem;min-inline-size:3.5rem;font-size:1rem;border-radius:1.75rem}:is(button,.button).border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--outline);color:var(--primary)}.extend.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(:hover,.active){inline-size:auto;padding:0 1.5rem}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button,button):is([disabled]){opacity:.5;cursor:not-allowed}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button):is([disabled]){pointer-events:none}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button,button):is([disabled]):before,.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.button,button):is([disabled]):after{display:none}:is(.button,button).fill.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}:is(.button,button).vertical.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:2rem}article.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:var(--elevate1);background-color:var(--surface-container-low);color:var(--on-surface);padding:1rem;border-radius:.75rem;display:block;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding}.svelte-17ley6w+article.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:1rem}article.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:12rem}article.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:20rem}article.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:32rem}.chip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:2rem;min-inline-size:2rem;font-size:.875rem;font-weight:500;background-color:transparent;border:.0625rem solid var(--outline);color:var(--on-surface-variant);padding:0 1rem;margin:0 .5rem;text-transform:none;border-radius:.5rem;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;user-select:none;gap:1rem;line-height:normal}.chip.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2.5rem;min-inline-size:2.5rem}.chip.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3rem;min-inline-size:3rem}.chip.fill.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:var(--secondary-container)!important;border-color:transparent}.chip.border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-color:var(--outline)}.chip.round.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1rem}.chip.round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1.25rem}.chip.round.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1.5rem}:is(main,header,footer).responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---padding:6rem}@media only screen and (max-width: 600px){}@media only screen and (min-width: 601px) and (max-width: 992px){}@media only screen and (min-width: 993px){}@media only screen and (max-width: 600px){}dialog.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:block;border:none;opacity:0;visibility:hidden;position:fixed;box-shadow:var(--elevate2);color:var(--on-surface);background-color:var(--surface-container-high);padding:1rem;z-index:100;inset-inline-start:50%;inset-block-start:10%;min-inline-size:20rem;max-inline-size:100%;max-block-size:80%;overflow-x:hidden;overflow-y:auto;transition:var(--speed3) all,0s background-color;border-radius:1rem;transform:translate(-50%,-4rem)}dialog.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::backdrop{display:none}dialog.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:25%;block-size:25%}dialog.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:50%;block-size:50%}dialog.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:75%;block-size:75%}dialog.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.active,[open]){opacity:1;visibility:visible;transform:translate(-50%)}dialog.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.active,[open]):is(.left,.right,.top,.bottom,.max){transform:translate(0)}dialog.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;inset-block-start:0;inset-inline-start:0;inset-inline-end:auto;inset-block-end:auto;block-size:auto;inline-size:100%;min-inline-size:auto;max-block-size:100%;transform:translateY(-100%);border-radius:unset;border-end-start-radius:1rem;border-end-end-radius:1rem}dialog.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;inset-block-start:0;inset-inline-start:0;inset-inline-end:auto;inset-block-end:auto;inline-size:auto;block-size:100%;max-block-size:100%;border-radius:unset;border-start-end-radius:1rem;border-end-end-radius:1rem;background-color:var(--surface);transform:translate(-100%)}dialog.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;inset-block-start:0;inset-inline-start:auto;inset-inline-end:0;inset-block-end:auto;inline-size:auto;block-size:100%;max-block-size:100%;border-radius:unset;border-start-start-radius:1rem;border-end-start-radius:1rem;background-color:var(--surface);transform:translate(100%)}dialog.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;inset-block-start:auto;inset-inline-start:0;inset-inline-end:auto;inset-block-end:0;block-size:auto;inline-size:100%;min-inline-size:auto;max-block-size:100%;transform:translateY(100%);border-radius:unset;border-start-start-radius:1rem;border-start-end-radius:1rem}dialog.max.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:0;inset-inline-start:0;inset-inline-end:auto;inset-block-end:auto;inline-size:100%;block-size:100%;max-inline-size:100%;max-block-size:100%;transform:translateY(4rem);background-color:var(--surface)}dialog.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left,.right){inline-size:20rem}dialog.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left,.right){inline-size:32rem}dialog.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left,.right){inline-size:44rem}dialog.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.top,.bottom){block-size:16rem}dialog.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.top,.bottom){block-size:24rem}dialog.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.top,.bottom){block-size:32rem}.field.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3rem;margin-block-end:2rem}.svelte-17ley6w+.field.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:1rem}.field.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2.5rem}.field.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3.5rem}.field.extra.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:4rem}.field.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:.25rem .25rem 0 0}.field.border.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:.25rem}.field.round.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1.25rem}.field.round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1.5rem}.field.round.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:1.75rem}.field.round.extra.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:2rem}.field.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;border-radius:inherit;background-color:inherit}.field.fill.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{background-color:var(--surface-container-highest);color:var(--on-surface-variant)}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(i,img,svg,progress,a:not(.helper,.error)){position:absolute;inset-block-start:50%;transform:translateY(-50%);cursor:pointer;z-index:0;inline-size:1.5rem;block-size:1.5rem}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(i,img,svg,progress,a:not(.helper,.error)){inset-inline-start:auto;inset-inline-end:1rem}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(i,img,svg,progress,a:not(.helper,.error)):first-child{inset-inline-start:1rem;inset-inline-end:auto}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){appearance:none;border:.0625rem solid transparent;padding-inline:.9375rem;padding-block:0;font-family:inherit;font-size:1rem;inline-size:100%;block-size:100%;outline:none;z-index:1;background:none;resize:none}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{border:.125rem solid transparent;padding-block:0;padding-inline:.875rem}input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-inner-spin-button,input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-outer-spin-button,input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-calendar-picker-indicator{opacity:0;position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;margin:0;padding:0;border:0;outline:0;z-index:2!important}input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-search-decoration,input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-search-cancel-button,input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-search-results-button,input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-search-results-decoration{display:none}.field.border.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){border-color:var(--outline)}.field.border.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{border-color:var(--primary)}.field.round.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){padding-inline-start:1.4376rem;padding-inline-end:1.4376rem}.field.round.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{padding-inline-start:1.375rem;padding-inline-end:1.375rem}.field.prefix.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){padding-inline-start:2.9375rem}.field.prefix.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{padding-inline-start:2.875rem}.field.suffix.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){padding-inline-end:2.9375rem}.field.suffix.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{padding-inline-end:2.875rem}.field.svelte-17ley6w:not(.border,.round)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select){border-block-end-color:var(--outline)}.field.svelte-17ley6w:not(.border,.round)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{border-block-end-color:var(--primary)}.field.round.svelte-17ley6w:not(.border,.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select),.field.round.svelte-17ley6w:not(.border)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{box-shadow:var(--elevate1)}.field.round.svelte-17ley6w:not(.border,.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{box-shadow:var(--elevate2)}.field.invalid.svelte-17ley6w:not(.border,.round)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select),.field.invalid.svelte-17ley6w:not(.border,.round)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{border-block-end-color:var(--error)}.field.invalid.border.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select),.field.invalid.border.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea,select):focus{border-color:var(--error)}.field.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:has(> :disabled){opacity:.5;cursor:not-allowed}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:disabled{cursor:not-allowed}.field.small.textarea.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:4.5rem}.field.textarea.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:5.5rem}.field.large.textarea.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:6.5rem}.field.extra.textarea.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:7.5rem}.field.label.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,select){padding-block-start:1rem}.field.label.border.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,select){padding-block-start:0}.field.label.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:absolute;inset-block-start:-.5rem;inset-inline-start:1rem;display:flex;inline-size:calc(100% - 5rem);block-size:4rem;line-height:4rem;font-size:1rem;transition:all .2s;gap:.25rem;white-space:nowrap}.field.label.small.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3.5rem;line-height:3.5rem}.field.label.large.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:4.5rem;line-height:4.5rem}.field.label.extra.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:5rem;line-height:5rem}.field.label.border.prefix.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1rem}.field.label.round.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.field.label.border.prefix.round.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){inset-inline-start:1.5rem}.field.label.prefix.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-start:3rem}.field.label.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:2.5rem;line-height:2.5rem;font-size:.75rem}.field.label.border.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(label.active,:focus + label,[placeholder]:not(:placeholder-shown) + label,select + label){block-size:1rem;line-height:1rem}.field.label.border.svelte-17ley6w:not(.fill)>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after{content:"";display:block;margin-block-start:.5rem;border-block-start:.0625rem solid var(--outline);block-size:1rem;transition:none;flex:auto}.field.label.border.svelte-17ley6w:not(.fill)>.svelte-17ley6w:focus+label.svelte-17ley6w.svelte-17ley6w:after{border-block-start:.125rem solid var(--primary)}.field.label.border.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active){clip-path:polygon(-2% -2%,.75rem -2%,.75rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.border.round.svelte-17ley6w:not(.fill)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active){clip-path:polygon(-2% -2%,1.25rem -2%,1.25rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.svelte-17ley6w>.svelte-17ley6w:focus+label.svelte-17ley6w.svelte-17ley6w{color:var(--primary)}.field.label.invalid.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.field.label.invalid.svelte-17ley6w>label.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:after{color:var(--error)!important;border-color:var(--error)!important}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.helper,.error){position:absolute;inset-inline-start:1rem;inset-block-end:0;transform:translateY(100%);font-size:.75rem;background:none!important;padding-block-start:.125rem}.field.round.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.helper,.error){inset-inline-start:1.5rem}.grid.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---gap:1rem;display:grid;grid-template-columns:repeat(12,calc(8.33% - var(---gap) + (var(---gap) / 12)));gap:var(---gap)}.svelte-17ley6w+.grid.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:1rem}.grid.no-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---gap:0rem}.grid.medium-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---gap:1.5rem}.grid.large-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---gap:2rem}.s1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 1}.s2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 2}.s3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 3}.s4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 4}.s5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 5}.s6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 6}.s7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 7}.s8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 8}.s9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 9}.s10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 10}.s11.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 11}.s12.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 12}@media only screen and (min-width: 601px){.m1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 1}.m2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 2}.m3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 3}.m4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 4}.m5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 5}.m6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 6}.m7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 7}.m8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 8}.m9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 9}.m10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 10}.m11.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 11}.m12.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 12}}@media only screen and (min-width: 993px){.l1.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 1}.l2.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 2}.l3.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 3}.l4.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 4}.l5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 5}.l6.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 6}.l7.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 7}.l8.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 8}.l9.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 9}.l10.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 10}.l11.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 11}.l12.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{grid-area:auto/span 12}}i.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---size:1.5rem;font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:var(---size);letter-spacing:normal;text-transform:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:var(---size);min-inline-size:var(---size);block-size:var(---size);min-block-size:var(---size);box-sizing:content-box;line-height:normal}.absolute.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:absolute}.fixed.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:fixed}:is(.absolute,.fixed).left.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:auto}:is(.absolute,.fixed).left.right.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:20rem}:is(.absolute,.fixed).left.right.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:28rem}:is(.absolute,.fixed).left.right.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:44rem}:is(.absolute,.fixed).top.bottom.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:20rem}:is(.absolute,.fixed).top.bottom.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:28rem}:is(.absolute,.fixed).top.bottom.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:44rem}:is(header,footer,menu > *).fixed.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:sticky;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;z-index:12;background-color:inherit}:is(header,footer).fixed.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{content:"";position:absolute;inset-block-start:0;inset-inline-start:0;inset-inline-end:0;inset-block-end:0;margin:0 -.5rem;max-inline-size:100%;background-color:inherit}.svelte-17ley6w:is(dialog,menu)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(header,footer){padding:0;background-color:inherit}article.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(header,footer){padding:inherit;padding-inline-start:0;padding-inline-end:0;z-index:11!important}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(img,svg,video):is(.small,.medium,.large,.tiny,.extra,.round,.circle,.responsive){object-fit:cover;object-position:center;transition:var(--speed3) transform,var(--speed3) border-radius,var(--speed3) padding;block-size:3rem;inline-size:3rem}:is(img,svg,video).round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:.5rem}:is(img,svg,video).tiny.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2rem;inline-size:2rem}:is(img,svg,video).small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:2.5rem;inline-size:2.5rem}:is(img,svg,video).large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:3.5rem;inline-size:3.5rem}:is(img,svg,video).extra.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{block-size:4rem;inline-size:4rem}:is(img,svg,video).responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:100%;margin:0 auto}.svelte-17ley6w:is(button,.button,.chip):not(.transparent)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border:.25rem solid transparent}.svelte-17ley6w:is(button.small,.button.small,.chip)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:2rem}.svelte-17ley6w:is(button,.button,.chip.medium)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:2.5rem}:is(img,svg,video).responsive.tiny.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:4rem}:is(img,svg,video).responsive.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:8rem}:is(img,svg,video).responsive.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:12rem}:is(img,svg,video).responsive.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:16rem}:is(img,svg,video).responsive.extra.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:100%;block-size:20rem}:is(img,svg,video).responsive.round.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{border-radius:2rem}:is(img,svg,video).empty-state.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{max-inline-size:100%;inline-size:24rem}.svelte-17ley6w:is(button,.button,.chip,.field)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra),.svelte-17ley6w:is(.tabs) .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(img,svg):not(.responsive,.tiny,.small,.medium,.large,.extra){min-inline-size:1.5rem;max-inline-size:1.5rem;min-block-size:1.5rem;max-block-size:1.5rem}.svelte-17ley6w:is(button,.button,.chip)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(i,img,svg),.svelte-17ley6w:is(button,.button,.chip)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:0 -.5rem}.svelte-17ley6w:is(button,.button)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-start:-1.5rem}.svelte-17ley6w:is(.circle,.square)>.responsive.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:0}.extend.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.responsive,i){margin:0;position:absolute;inset-inline:1rem;z-index:1}nav.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.row.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;align-items:center;align-self:normal;text-align:start;justify-content:start;white-space:nowrap;gap:1rem}.svelte-17ley6w:not(.divider,.small-divider,.medium-divider,.large-divider)+nav.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.left,.right,.top,.bottom),.svelte-17ley6w:not(.divider,.small-divider,.medium-divider,.large-divider)+.row.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(a){margin-block-start:1rem}.svelte-17ley6w:is(nav,.row)>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.svelte-17ley6w:is(nav,.row)>.svelte-17ley6w:not(.tooltip,menu)>.svelte-17ley6w.svelte-17ley6w{margin-block-start:0;margin-block-end:0}nav.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.row.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin:0!important;white-space:normal;flex:none}:is(nav,.row).no-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{gap:0}:is(nav,.row).medium-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{gap:1.5rem}:is(nav,.row).large-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{gap:2rem}.row.wrap.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;flex-wrap:wrap}.svelte-17ley6w:is(nav,.row)>.border.no-margin.svelte-17ley6w+.border.no-margin.svelte-17ley6w.svelte-17ley6w{border-inline-start:0}nav.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left,.right,.top,.bottom){border:0;position:fixed;color:var(--on-surface);transform:none;z-index:100;inset-inline-start:0;inset-block-start:0;inset-block-end:0;inset-inline-end:0;block-size:auto;inline-size:auto;text-align:center;padding:.5rem}nav.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left,.right){inline-size:5rem;justify-content:start;flex-direction:column;background-color:var(--surface)}nav.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.top,.bottom){block-size:5rem;justify-content:center;flex-direction:row;background-color:var(--surface-container)}nav.right-align.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{justify-content:end}@media only screen and (max-width: 600px){}.overlay.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:0;visibility:hidden;position:fixed;inset-block-start:0;inset-inline-start:0;inline-size:100%;block-size:100%;color:var(--on-surface);background-color:var(--overlay);z-index:100;transition:var(--speed3) all,0s background-color}.overlay.active.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;visibility:visible}.page.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.svelte-17ley6w:is(.page,dialog):not(.active) .page.active.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform:translate(0, 0);opacity:0;position:absolute;display:none}.page.active.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:1;position:inherit;display:inherit;animation:var(--speed4) svelte-17ley6w-to-page ease}.page.active.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform:translate(0, -4rem)}.page.active.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform:translate(0, 4rem)}.page.active.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform:translate(-4rem, 0)}.page.active.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform:translate(4rem, 0)}@keyframes svelte-17ley6w-to-page{0%{opacity:0;transform:var(---transform)}to{opacity:1;transform:translate(0)}}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:relative;inline-size:100%;block-size:.5rem;color:var(--primary);background:var(--surface-container-highest);border-radius:0;flex:none;border:none}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.circle,[value]):after{content:"";position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%;block-size:100%;clip-path:none;background:currentColor;animation:1.6s svelte-17ley6w-to-linear ease infinite}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.circle,[value])::-moz-progress-bar{animation:1.6s svelte-17ley6w-to-linear ease infinite}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.circle,[value])::-webkit-progress-value{animation:1.6s svelte-17ley6w-to-linear ease infinite}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-progress-bar{background:none}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-webkit-progress-value{background:currentColor}progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w::-moz-progress-bar{background:currentColor}.svelte-17ley6w:is(nav,.row,.field)>progress.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.circle,.small,.medium,.large){flex:auto}@keyframes svelte-17ley6w-to-linear{0%{margin-inline-start:0%;inline-size:0%}50%{margin-inline-start:10%;inline-size:80%}to{margin-inline-start:100%;inline-size:0%}}@keyframes svelte-17ley6w-to-circular{0%{transform:rotate(0);clip-path:polygon(50% 50%,0% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)}20%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%)}30%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 50%,100% 50%,100% 50%,100% 50%)}40%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,100% 100%,100% 100%,100% 100%)}50%{clip-path:polygon(50% 50%,50% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,50% 100%,50% 100%)}60%{clip-path:polygon(50% 50%,100% 50%,100% 50%,100% 50%,100% 50%,100% 100%,50% 100%,0% 100%,0% 100%)}70%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%,0% 50%)}80%{clip-path:polygon(50% 50%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 50%)}90%{transform:rotate(360deg);clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}to{clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}}.checkbox.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.radio.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.switch.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{direction:ltr;inline-size:auto;block-size:auto;line-height:normal;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}.svelte-17ley6w:is(.checkbox,.radio)>input.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:1.5rem;block-size:1.5rem;opacity:0}.svelte-17ley6w:is(.checkbox,.radio,.switch)>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:inline-flex;align-items:center;color:var(--on-surface);font-size:.875rem}.svelte-17ley6w:is(.checkbox,.radio)>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(:empty){padding-inline-start:.25rem}.svelte-17ley6w:is(.checkbox,.radio,.switch)>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before,.icon.svelte-17ley6w>span.svelte-17ley6w>i.svelte-17ley6w.svelte-17ley6w{font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:1.5rem;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:1.5rem;block-size:1.5rem;box-sizing:border-box;margin:0 auto;outline:none;color:var(--primary);position:absolute;inset-inline-start:-1.5rem;background-color:transparent;border-radius:50%;user-select:none;z-index:1;box-shadow:0 0 0 0 var(--active);transition:var(--speed1) all}.radio.svelte-17ley6w>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{content:"radio_button_unchecked"}.radio.svelte-17ley6w>input.svelte-17ley6w:checked+span.svelte-17ley6w.svelte-17ley6w:before{content:"radio_button_checked"}:is(.radio,.checkbox,.switch).icon.svelte-17ley6w>span.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{content:""!important;font-variation-settings:unset!important}.svelte-17ley6w:is(.checkbox,.radio)>input.svelte-17ley6w:not(:disabled):is(:focus,:hover)+span.svelte-17ley6w.svelte-17ley6w:before{background-color:var(--active);box-shadow:0 0 0 .5rem var(--active)}.svelte-17ley6w:is(.checkbox,.radio)>input.svelte-17ley6w:checked+span.svelte-17ley6w.svelte-17ley6w:before,:is(.checkbox,.radio).icon.svelte-17ley6w>input.svelte-17ley6w:checked+span.svelte-17ley6w>i.svelte-17ley6w{color:var(--primary)}.icon.svelte-17ley6w>input.svelte-17ley6w:checked+span.svelte-17ley6w>i.svelte-17ley6w:first-child,.icon.svelte-17ley6w>span.svelte-17ley6w>i.svelte-17ley6w.svelte-17ley6w:last-child{opacity:0}.icon.svelte-17ley6w>input.svelte-17ley6w:checked+span.svelte-17ley6w>i.svelte-17ley6w:last-child,.icon.svelte-17ley6w>span.svelte-17ley6w>i.svelte-17ley6w.svelte-17ley6w:first-child{opacity:1}.svelte-17ley6w:is(.checkbox,.radio,.switch)>input.svelte-17ley6w:disabled+span.svelte-17ley6w.svelte-17ley6w{opacity:.5;cursor:not-allowed}.checkbox.svelte-17ley6w+.checkbox.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.radio.svelte-17ley6w+.radio.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w,.switch.svelte-17ley6w+.switch.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-start:.5rem}.field.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(nav,.row){flex-grow:1;padding:0 1rem}.field.round.svelte-17ley6w>.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(nav,.row){flex-grow:1;padding:0 1.5rem}.slider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---start:0%;---end:0%;---value1:"";---value2:"";display:flex;align-items:center!important;inline-size:auto;block-size:1.25rem;margin:1.125rem;flex:none}.slider.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:4rem}.slider.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:8rem}.slider.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:12rem}.slider.vertical.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{flex-direction:row!important;margin:.5rem auto!important;padding:50% 0;transform:rotate(-90deg)}.slider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:before{content:"";position:absolute;inline-size:100%;block-size:.25rem;border-radius:1rem;background:var(--active)}.svelte-17ley6w:is(nav,.row,.field)>.slider.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.circle,.small,.medium,.large){flex:auto}.snackbar.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform-start:translate(-50%, 1rem);---transform-end:translate(-50%, 0);position:fixed;inset-block-start:auto;inset-block-end:6rem;inset-inline-start:50%;inset-inline-end:auto;inline-size:80%;block-size:auto;z-index:200;visibility:hidden;display:flex;box-shadow:var(--elevate2);color:var(--inverse-on-surface);background-color:var(--inverse-surface);padding:1rem;opacity:1;cursor:pointer;text-align:start;align-items:center;border-radius:.25rem;gap:.5rem;transform:var(---transform-end)}.snackbar.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-start:6rem;inset-block-end:auto}.snackbar.active.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{visibility:visible;animation:var(--speed2) svelte-17ley6w-to-snackbar}.snackbar.active.top.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---transform-end:translate(-50%, -1rem)}@keyframes svelte-17ley6w-to-snackbar{0%{opacity:0;transform:var(---transform-start)}to{opacity:1;transform:var(---transform-end)}}@media only screen and (min-width: 993px){.snackbar.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:40%}}.tabs.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;white-space:nowrap;border-block-end:.0625rem solid var(--surface-variant)}.tabs.min.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding:0 1rem;gap:2rem}.tabs.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.left-align,.right-align,.center-align){justify-content:space-around}.svelte-17ley6w+.tabs.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-start:1rem}.tooltip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---space:-.5rem;visibility:hidden;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--inverse-surface);color:var(--inverse-on-surface);font-size:.75rem;text-align:center;border-radius:.25rem;padding:.5rem;position:absolute;z-index:3;inset-block-start:0;inset-inline-start:50%;inset-block-end:auto;inset-inline-end:auto;inline-size:auto;white-space:nowrap;font-weight:500;opacity:0;transition:var(--speed2) all;line-height:normal;transform:translate(-50%,-100%) scale(.9)}.tooltip.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-start:0;inset-block-start:50%;inset-block-end:auto;inset-inline-end:auto;transform:translate(-100%,-50%) scale(.9)}.tooltip.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-inline-end:0;inset-block-start:50%;inset-block-end:auto;inset-inline-start:auto;transform:translate(100%,-50%) scale(.9)}.tooltip.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inset-block-end:0;inset-inline-start:50%;inset-block-start:auto;inset-inline-end:auto;transform:translate(-50%,100%) scale(.9)}.tooltip.small.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:8rem;white-space:normal}.tooltip.medium.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:12rem;white-space:normal}.tooltip.large.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{inline-size:16rem;white-space:normal}.svelte-17ley6w:hover>.tooltip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{visibility:visible;opacity:1;transform:translate(-50%,-100%) scale(1)}.svelte-17ley6w:hover>.tooltip.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{transform:translate(-100%,-50%) scale(1)}.svelte-17ley6w:hover>.tooltip.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{transform:translate(100%,-50%) scale(1)}.svelte-17ley6w:hover>.tooltip.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{transform:translate(-50%,100%) scale(1)}.tooltip.no-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---space:0}.tooltip.medium-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---space:-1rem}.tooltip.large-space.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---space:-1.5rem}.tooltip.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:not(.left,.right,.bottom){margin-block-start:var(---space)!important}.tooltip.left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-start:var(---space)!important}.tooltip.right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-inline-end:var(---space)!important}.tooltip.bottom.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-block-end:var(---space)!important}.tooltip.max.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:block;font-size:inherit;white-space:normal;text-align:start;inline-size:20rem;border-radius:.5rem;padding:1rem;box-shadow:var(--elevate2)}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).light.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---blur:1rem;-webkit-backdrop-filter:blur(var(---blur));backdrop-filter:blur(var(---blur));color:var(--on-surface);background-color:#ffffff80}.dark.svelte-17ley6w .svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.blur,.small-blur,.medium-blur,.large-blur),:is(.blur,.small-blur,.medium-blur,.large-blur).dark.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00000080}.small-blur.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---blur:.5rem}.large-blur.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{---blur:1.5rem}.shadow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-color:#00000050}.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w:is(.left-shadow,.right-shadow,.top-shadow,.bottom-shadow){background-color:transparent!important}.left-shadow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-image:linear-gradient(to right,black,transparent)}.right-shadow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-image:linear-gradient(to left,black,transparent)}.bottom-shadow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-image:linear-gradient(to top,black,transparent)}.top-shadow.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{background-image:linear-gradient(to bottom,black,transparent)}.csur-container.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{box-shadow:none!important;position:fixed;opacity:0;transition:opacity .4s;z-index:99;word-break:break-all;overflow:hidden}.bottom_right.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{right:1rem;bottom:1rem;width:450px;max-width:calc(100% - 2rem)}.bottom_left.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{left:1rem;bottom:1rem;width:450px;max-width:calc(100% - 2rem)}.bottom_banner.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{bottom:0;left:0;width:100%}.bottom_banner.simple.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{padding-top:0;padding-bottom:0}.bottom_banner.simple.svelte-17ley6w .banner_content.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{max-width:960px}.bottom_banner.svelte-17ley6w .banner_content.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{display:flex;max-height:20rem;margin:0 auto}.bottom_banner.svelte-17ley6w .banner_content .item_q.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{width:70%;margin-right:15px}.bottom_banner.svelte-17ley6w .banner_content .item.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{justify-content:right;align-items:center;display:flex;width:25%}article.csur-container.svelte-17ley6w .description.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{opacity:.8}.close-btn.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:absolute;top:0rem;right:0;margin-top:1.5rem;margin-right:1rem;cursor:pointer}.csur-container.svelte-17ley6w h5.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{margin-top:0}.app-progress-bar.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{position:absolute;width:100%;top:0;left:0;margin-top:1px;border-radius:24px;height:5px}.questions-tab.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{width:480px}.copyright.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w.svelte-17ley6w{text-align:right;margin-top:.5rem;margin-bottom:0}');
}
function vt(l, e, t) {
  const s = l.slice();
  return s[25] = e[t], s[26] = e, s[27] = t, s;
}
function at(l) {
  let e, t, s, r, n, o, v, a, c, y, d, u, i, w, f, z, k, g, b, M, h, P, p, I, L, E = (
    /*loading*/
    l[7] && it()
  ), S = !/*data*/
  (l[1][0].site.promptWindowPosition == "bottom_banner" && /*data*/
  l[1][0].type == "simple") && ct(l), T = (
    /*data*/
    l[1][0].type == "simple" && !/*submitted*/
    l[6] && dt(l)
  );
  function V(R, q) {
    return (
      /*submitted*/
      R[6] ? nr : or
    );
  }
  let N = V(l), U = N(l);
  function he(R, q) {
    return q & /*tabActive*/
    8 && (g = null), g == null && (g = !!/*tabActive*/
    R[3].includes("max")), g ? cr : ir;
  }
  let te = he(l, -1), se = te(l);
  const Ae = [dr, yr], ce = [];
  function Ee(R, q) {
    return (
      /*data*/
      R[1][0].type == "advanced" ? 0 : 1
    );
  }
  return M = Ee(l), h = ce[M] = Ae[M](l), {
    c() {
      e = D("article"), E && E.c(), t = F(), s = D("label"), s.innerHTML = '<input type="radio" name="radio3_" class="svelte-17ley6w"/> <span class="svelte-17ley6w"><i class="svelte-17ley6w">close</i> <i class="svelte-17ley6w">done</i></span>', r = F(), S && S.c(), n = F(), o = D("div"), v = D("div"), T && T.c(), a = F(), c = D("div"), U.c(), y = F(), d = D("p"), d.innerHTML = 'Powered by <a href="https://github.com/ocoke/CranSurvey" class="svelte-17ley6w">CranSurvey</a>', i = F(), w = D("div"), z = F(), k = D("dialog"), se.c(), b = F(), h.c(), x(s, "class", "radio icon close-btn svelte-17ley6w"), x(v, "class", "item_q svelte-17ley6w"), x(c, "class", "item svelte-17ley6w"), x(o, "class", "banner_content svelte-17ley6w"), x(d, "class", "description copyright svelte-17ley6w"), x(e, "class", u = "secondary-container csur-container " + /*data*/
      l[1][0].site.promptWindowPosition + " " + /*data*/
      l[1][0].type + " svelte-17ley6w"), x(
        e,
        "style",
        /*opacity*/
        l[2]
      ), x(w, "class", f = "overlay " + /*tabActive*/
      l[3] + " svelte-17ley6w"), x(k, "class", P = /*tabActive*/
      l[3] + " questions-tab svelte-17ley6w");
    },
    m(R, q) {
      B(R, e, q), E && E.m(e, null), _(e, t), _(e, s), _(e, r), S && S.m(e, null), _(e, n), _(e, o), _(o, v), T && T.m(v, null), _(o, a), _(o, c), U.m(c, null), _(e, y), _(e, d), B(R, i, q), B(R, w, q), B(R, z, q), B(R, k, q), se.m(k, null), _(k, b), ce[M].m(k, null), p = !0, I || (L = X(
        s,
        "click",
        /*click_handler*/
        l[17]
      ), I = !0);
    },
    p(R, q) {
      /*loading*/
      R[7] ? E || (E = it(), E.c(), E.m(e, t)) : E && (E.d(1), E = null), /*data*/
      R[1][0].site.promptWindowPosition == "bottom_banner" && /*data*/
      R[1][0].type == "simple" ? S && (S.d(1), S = null) : S ? S.p(R, q) : (S = ct(R), S.c(), S.m(e, n)), /*data*/
      R[1][0].type == "simple" && !/*submitted*/
      R[6] ? T ? (T.p(R, q), q & /*data, submitted*/
      66 && ae(T, 1)) : (T = dt(R), T.c(), ae(T, 1), T.m(v, null)) : T && (sl(), be(T, 1, 1, () => {
        T = null;
      }), rl()), N === (N = V(R)) && U ? U.p(R, q) : (U.d(1), U = N(R), U && (U.c(), U.m(c, null))), (!p || q & /*data*/
      2 && u !== (u = "secondary-container csur-container " + /*data*/
      R[1][0].site.promptWindowPosition + " " + /*data*/
      R[1][0].type + " svelte-17ley6w")) && x(e, "class", u), (!p || q & /*opacity*/
      4) && x(
        e,
        "style",
        /*opacity*/
        R[2]
      ), (!p || q & /*tabActive*/
      8 && f !== (f = "overlay " + /*tabActive*/
      R[3] + " svelte-17ley6w")) && x(w, "class", f), te === (te = he(R, q)) && se ? se.p(R, q) : (se.d(1), se = te(R), se && (se.c(), se.m(k, b)));
      let $e = M;
      M = Ee(R), M === $e ? ce[M].p(R, q) : (sl(), be(ce[$e], 1, 1, () => {
        ce[$e] = null;
      }), rl(), h = ce[M], h ? h.p(R, q) : (h = ce[M] = Ae[M](R), h.c()), ae(h, 1), h.m(k, null)), (!p || q & /*tabActive*/
      8 && P !== (P = /*tabActive*/
      R[3] + " questions-tab svelte-17ley6w")) && x(k, "class", P);
    },
    i(R) {
      p || (ae(T), ae(h), p = !0);
    },
    o(R) {
      be(T), be(h), p = !1;
    },
    d(R) {
      R && ($(e), $(i), $(w), $(z), $(k)), E && E.d(), S && S.d(), T && T.d(), U.d(), se.d(), ce[M].d(), I = !1, L();
    }
  };
}
function it(l) {
  let e;
  return {
    c() {
      e = D("progress"), x(e, "class", "app-progress-bar svelte-17ley6w");
    },
    m(t, s) {
      B(t, e, s);
    },
    d(t) {
      t && $(e);
    }
  };
}
function ct(l) {
  let e, t, s = (
    /*data*/
    l[1][0].title + ""
  ), r, n, o, v = (
    /*data*/
    l[1][0].description + ""
  ), a, c, y, d = (
    /*response*/
    l[8] && yt(l)
  );
  return {
    c() {
      e = D("div"), t = D("h5"), r = Y(s), n = F(), o = D("p"), a = Y(v), c = F(), d && d.c(), y = jt(), x(t, "class", "svelte-17ley6w"), x(o, "class", "description svelte-17ley6w"), x(e, "class", "svelte-17ley6w");
    },
    m(u, i) {
      B(u, e, i), _(e, t), _(t, r), _(e, n), _(e, o), _(o, a), B(u, c, i), d && d.m(u, i), B(u, y, i);
    },
    p(u, i) {
      i & /*data*/
      2 && s !== (s = /*data*/
      u[1][0].title + "") && Z(r, s), i & /*data*/
      2 && v !== (v = /*data*/
      u[1][0].description + "") && Z(a, v), /*response*/
      u[8] ? d ? d.p(u, i) : (d = yt(u), d.c(), d.m(y.parentNode, y)) : d && (d.d(1), d = null);
    },
    d(u) {
      u && ($(e), $(c), $(y)), d && d.d(u);
    }
  };
}
function yt(l) {
  let e, t, s;
  return {
    c() {
      e = D("article"), t = D("p"), s = Y(
        /*response*/
        l[8]
      ), el(t, "color", "var(--error)"), x(t, "class", "svelte-17ley6w"), x(e, "class", "border question-box svelte-17ley6w"), el(e, "margin-bottom", "1rem");
    },
    m(r, n) {
      B(r, e, n), _(e, t), _(t, s);
    },
    p(r, n) {
      n & /*response*/
      256 && Z(
        s,
        /*response*/
        r[8]
      );
    },
    d(r) {
      r && $(e);
    }
  };
}
function dt(l) {
  let e, t, s;
  function r(o) {
    l[18](o);
  }
  let n = {
    question: (
      /*data*/
      l[1][0].questions[0]
    )
  };
  return (
    /*ans*/
    l[5][0] !== void 0 && (n.answer = /*ans*/
    l[5][0]), e = new Fl({ props: n }), ll.push(() => gt(e, "answer", r)), {
      c() {
        ht(e.$$.fragment);
      },
      m(o, v) {
        _l(e, o, v), s = !0;
      },
      p(o, v) {
        const a = {};
        v & /*data*/
        2 && (a.question = /*data*/
        o[1][0].questions[0]), !t && v & /*ans*/
        32 && (t = !0, a.answer = /*ans*/
        o[5][0], bt(() => t = !1)), e.$set(a);
      },
      i(o) {
        s || (ae(e.$$.fragment, o), s = !0);
      },
      o(o) {
        be(e.$$.fragment, o), s = !1;
      },
      d(o) {
        Cl(e, o);
      }
    }
  );
}
function nr(l) {
  let e;
  return {
    c() {
      e = D("article"), e.innerHTML = '<p class=" svelte-17ley6w">Your response has been recorded.</p>', x(e, "class", "border question-box svelte-17ley6w");
    },
    m(t, s) {
      B(t, e, s);
    },
    p: we,
    d(t) {
      t && $(e);
    }
  };
}
function or(l) {
  let e;
  function t(n, o) {
    if (
      /*data*/
      n[1][0].type == "advanced" || /*data*/
      n[1][0].type == "prompt"
    )
      return ar;
    if (
      /*data*/
      n[1][0].type == "simple"
    )
      return vr;
  }
  let s = t(l), r = s && s(l);
  return {
    c() {
      e = D("nav"), r && r.c(), x(e, "class", "right-align svelte-17ley6w");
    },
    m(n, o) {
      B(n, e, o), r && r.m(e, null);
    },
    p(n, o) {
      s === (s = t(n)) && r ? r.p(n, o) : (r && r.d(1), r = s && s(n), r && (r.c(), r.m(e, null)));
    },
    d(n) {
      n && $(e), r && r.d();
    }
  };
}
function vr(l) {
  let e, t, s;
  return {
    c() {
      e = D("button"), e.textContent = "Submit", x(e, "class", "border round svelte-17ley6w");
    },
    m(r, n) {
      B(r, e, n), t || (s = X(
        e,
        "click",
        /*submitQuestion*/
        l[10]
      ), t = !0);
    },
    p: we,
    d(r) {
      r && $(e), t = !1, s();
    }
  };
}
function ar(l) {
  let e, t, s;
  return {
    c() {
      e = D("button"), e.textContent = "View", x(e, "class", "border round svelte-17ley6w");
    },
    m(r, n) {
      B(r, e, n), t || (s = X(
        e,
        "click",
        /*openQuestionsTab*/
        l[11]
      ), t = !0);
    },
    p: we,
    d(r) {
      r && $(e), t = !1, s();
    }
  };
}
function ir(l) {
  let e, t, s;
  return {
    c() {
      e = D("label"), e.innerHTML = '<input type="radio" name="radio3_" class="svelte-17ley6w"/> <span class="svelte-17ley6w"><i class="svelte-17ley6w">fullscreen</i></span>', x(e, "class", "radio icon close-btn svelte-17ley6w");
    },
    m(r, n) {
      B(r, e, n), t || (s = X(
        e,
        "click",
        /*click_handler_2*/
        l[20]
      ), t = !0);
    },
    p: we,
    d(r) {
      r && $(e), t = !1, s();
    }
  };
}
function cr(l) {
  let e, t, s;
  return {
    c() {
      e = D("label"), e.innerHTML = '<input type="radio" name="radio3_" class="svelte-17ley6w"/> <span class="svelte-17ley6w"><i class="svelte-17ley6w">close_fullscreen</i></span>', x(e, "class", "radio icon close-btn svelte-17ley6w");
    },
    m(r, n) {
      B(r, e, n), t || (s = X(
        e,
        "click",
        /*click_handler_1*/
        l[19]
      ), t = !0);
    },
    p: we,
    d(r) {
      r && $(e), t = !1, s();
    }
  };
}
function yr(l) {
  let e, t = (
    /*data*/
    l[1][0].questions[0].question + ""
  ), s, r, n, o = (
    /*data*/
    l[1][0].questions[0].prompt + ""
  ), v, a, c, y, d, u;
  return {
    c() {
      e = D("h5"), s = Y(t), r = F(), n = D("p"), v = Y(o), a = F(), c = D("nav"), y = D("button"), y.textContent = "Cancel", el(e, "margin-top", "0"), x(e, "class", "svelte-17ley6w"), x(n, "class", "svelte-17ley6w"), x(y, "class", "border svelte-17ley6w"), x(c, "class", "right-align svelte-17ley6w");
    },
    m(i, w) {
      B(i, e, w), _(e, s), B(i, r, w), B(i, n, w), _(n, v), B(i, a, w), B(i, c, w), _(c, y), d || (u = X(
        y,
        "click",
        /*click_handler_4*/
        l[23]
      ), d = !0);
    },
    p(i, w) {
      w & /*data*/
      2 && t !== (t = /*data*/
      i[1][0].questions[0].question + "") && Z(s, t), w & /*data*/
      2 && o !== (o = /*data*/
      i[1][0].questions[0].prompt + "") && Z(v, o);
    },
    i: we,
    o: we,
    d(i) {
      i && ($(e), $(r), $(n), $(a), $(c)), d = !1, u();
    }
  };
}
function dr(l) {
  let e, t = (
    /*data*/
    l[1][0].title + ""
  ), s, r, n, o = (
    /*data*/
    l[1][0].description + ""
  ), v, a, c, y, d, u, i, w, f, z, k, g = Ie(
    /*data*/
    l[1][0].questions
  ), b = [];
  for (let h = 0; h < g.length; h += 1)
    b[h] = wt(vt(l, g, h));
  const M = (h) => be(b[h], 1, 1, () => {
    b[h] = null;
  });
  return {
    c() {
      e = D("h5"), s = Y(t), r = F(), n = D("p"), v = Y(o), a = F(), c = D("div");
      for (let h = 0; h < b.length; h += 1)
        b[h].c();
      y = F(), d = D("nav"), u = D("button"), u.textContent = "Cancel", i = F(), w = D("button"), w.textContent = "Submit", el(e, "margin-top", "0"), x(e, "class", "svelte-17ley6w"), x(n, "class", "description svelte-17ley6w"), x(c, "class", "svelte-17ley6w"), x(u, "class", "border svelte-17ley6w"), x(w, "class", "round svelte-17ley6w"), x(d, "class", "right-align svelte-17ley6w");
    },
    m(h, P) {
      B(h, e, P), _(e, s), B(h, r, P), B(h, n, P), _(n, v), B(h, a, P), B(h, c, P);
      for (let p = 0; p < b.length; p += 1)
        b[p] && b[p].m(c, null);
      B(h, y, P), B(h, d, P), _(d, u), _(d, i), _(d, w), f = !0, z || (k = [
        X(
          u,
          "click",
          /*click_handler_3*/
          l[22]
        ),
        X(
          w,
          "click",
          /*submitQuestion*/
          l[10]
        )
      ], z = !0);
    },
    p(h, P) {
      if ((!f || P & /*data*/
      2) && t !== (t = /*data*/
      h[1][0].title + "") && Z(s, t), (!f || P & /*data*/
      2) && o !== (o = /*data*/
      h[1][0].description + "") && Z(v, o), P & /*data, ans*/
      34) {
        g = Ie(
          /*data*/
          h[1][0].questions
        );
        let p;
        for (p = 0; p < g.length; p += 1) {
          const I = vt(h, g, p);
          b[p] ? (b[p].p(I, P), ae(b[p], 1)) : (b[p] = wt(I), b[p].c(), ae(b[p], 1), b[p].m(c, null));
        }
        for (sl(), p = g.length; p < b.length; p += 1)
          M(p);
        rl();
      }
    },
    i(h) {
      if (!f) {
        for (let P = 0; P < g.length; P += 1)
          ae(b[P]);
        f = !0;
      }
    },
    o(h) {
      b = b.filter(Boolean);
      for (let P = 0; P < b.length; P += 1)
        be(b[P]);
      f = !1;
    },
    d(h) {
      h && ($(e), $(r), $(n), $(a), $(c), $(y), $(d)), vl(b, h), z = !1, ge(k);
    }
  };
}
function wt(l) {
  let e, t, s;
  function r(o) {
    l[21](
      o,
      /*index*/
      l[27]
    );
  }
  let n = { question: (
    /*question*/
    l[25]
  ) };
  return (
    /*ans*/
    l[5][
      /*index*/
      l[27]
    ] !== void 0 && (n.answer = /*ans*/
    l[5][
      /*index*/
      l[27]
    ]), e = new Fl({ props: n }), ll.push(() => gt(e, "answer", r)), {
      c() {
        ht(e.$$.fragment);
      },
      m(o, v) {
        _l(e, o, v), s = !0;
      },
      p(o, v) {
        l = o;
        const a = {};
        v & /*data*/
        2 && (a.question = /*question*/
        l[25]), !t && v & /*ans*/
        32 && (t = !0, a.answer = /*ans*/
        l[5][
          /*index*/
          l[27]
        ], bt(() => t = !1)), e.$set(a);
      },
      i(o) {
        s || (ae(e.$$.fragment, o), s = !0);
      },
      o(o) {
        be(e.$$.fragment, o), s = !1;
      },
      d(o) {
        Cl(e, o);
      }
    }
  );
}
function wr(l) {
  let e, t, s, r = (
    /*data*/
    l[1].length > 0 && at(l)
  );
  return {
    c() {
      e = D("body"), r && r.c(), x(e, "style", t = /*theme*/
      l[4][
        /*mode*/
        l[0]
      ]), x(e, "class", "svelte-17ley6w");
    },
    m(n, o) {
      B(n, e, o), r && r.m(e, null), s = !0;
    },
    p(n, [o]) {
      /*data*/
      n[1].length > 0 ? r ? (r.p(n, o), o & /*data*/
      2 && ae(r, 1)) : (r = at(n), r.c(), ae(r, 1), r.m(e, null)) : r && (sl(), be(r, 1, 1, () => {
        r = null;
      }), rl()), (!s || o & /*theme, mode*/
      17 && t !== (t = /*theme*/
      n[4][
        /*mode*/
        n[0]
      ])) && x(e, "style", t);
    },
    i(n) {
      s || (ae(r), s = !0);
    },
    o(n) {
      be(r), s = !1;
    },
    d(n) {
      n && $(e), r && r.d();
    }
  };
}
function ur(l, e, t) {
  let { server: s = void 0 } = e, { id: r = void 0 } = e, { domain: n = void 0 } = e, { themeColor: o = void 0 } = e, { mode: v = void 0 } = e, { timeout: a = void 0 } = e;
  (!s || !r && !n) && console.warn("[csur-client]: Please check the required params.");
  let c = [], y = "opacity: 0;", d = "", u = "";
  localStorage.getItem("cransurvey-usrid") ? d = localStorage.getItem("cransurvey-usrid") : (d = sr(), localStorage.setItem("cransurvey-usrid", d)), fetch(`${s}/api/client/get?sid=${r || ""}&domain=${n || ""}`, { method: "GET" }).then((T) => T.json()).then((T) => {
    t(1, c = T.data), setTimeout(
      () => {
        t(2, y = "opacity: 1;");
      },
      100
    );
  });
  let i = { light: "", dark: "" };
  Ws(o).then((T) => {
    Object.entries(T).forEach(([V, N]) => {
      Object.entries(N).forEach(([U, he]) => {
        const te = U.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        t(4, i[V] += `--${te}: ${he.toUpperCase()}; `, i);
      });
    });
  });
  function w() {
    t(2, y = "opacity: 0;"), setTimeout(
      () => {
        t(1, c = []);
      },
      400
    );
  }
  let f = [], z, k = !1, g = "";
  function b() {
    if (c[0]) {
      u && t(3, u = "");
      for (let T in c[0].questions)
        if (c[0].questions[T].required && !f[T]) {
          t(8, g = "Please answer all the required questions.");
          return;
        }
      t(7, k = !0), fetch(`${s}/api/survey/collect`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uniqueId: c[0].id,
          userId: d,
          answers: f
        })
      }).then((T) => T.json()).then((T) => {
        if (T.code == 0)
          t(6, z = !0), t(7, k = !1), t(8, g = ""), setTimeout(
            () => {
              w();
            },
            2500
          );
        else if (T.code == 3003) {
          t(8, g = "Please answer all the required questions."), t(7, k = !1);
          return;
        } else if (T.code == 3002) {
          t(8, g = "The answer doesn't meet the requirements."), t(7, k = !1);
          return;
        } else {
          t(8, g = "Something went wrong. Please try again later."), t(7, k = !1);
          return;
        }
      });
    }
  }
  function M() {
    t(3, u = "active"), window.innerWidth < 550 && t(3, u += " max");
  }
  a && !f && setTimeout(
    () => {
      w();
    },
    a
  );
  const h = () => {
    w();
  };
  function P(T) {
    l.$$.not_equal(f[0], T) && (f[0] = T, t(5, f));
  }
  const p = () => {
    t(3, u = "active");
  }, I = () => {
    t(3, u += " max");
  };
  function L(T, V) {
    l.$$.not_equal(f[V], T) && (f[V] = T, t(5, f));
  }
  const E = () => {
    t(3, u = "");
  }, S = () => {
    t(3, u = "");
  };
  return l.$$set = (T) => {
    "server" in T && t(12, s = T.server), "id" in T && t(13, r = T.id), "domain" in T && t(14, n = T.domain), "themeColor" in T && t(15, o = T.themeColor), "mode" in T && t(0, v = T.mode), "timeout" in T && t(16, a = T.timeout);
  }, [
    v,
    c,
    y,
    u,
    i,
    f,
    z,
    k,
    g,
    w,
    b,
    M,
    s,
    r,
    n,
    o,
    a,
    h,
    P,
    p,
    I,
    L,
    E,
    S
  ];
}
class Et extends _t {
  constructor(e) {
    super(), kt(
      this,
      e,
      ur,
      wr,
      pt,
      {
        server: 12,
        id: 13,
        domain: 14,
        themeColor: 15,
        mode: 0,
        timeout: 16
      },
      rr
    );
  }
  get server() {
    return this.$$.ctx[12];
  }
  set server(e) {
    this.$$set({ server: e }), fe();
  }
  get id() {
    return this.$$.ctx[13];
  }
  set id(e) {
    this.$$set({ id: e }), fe();
  }
  get domain() {
    return this.$$.ctx[14];
  }
  set domain(e) {
    this.$$set({ domain: e }), fe();
  }
  get themeColor() {
    return this.$$.ctx[15];
  }
  set themeColor(e) {
    this.$$set({ themeColor: e }), fe();
  }
  get mode() {
    return this.$$.ctx[0];
  }
  set mode(e) {
    this.$$set({ mode: e }), fe();
  }
  get timeout() {
    return this.$$.ctx[16];
  }
  set timeout(e) {
    this.$$set({ timeout: e }), fe();
  }
}
customElements.define("csur-client", zt(Et, { server: {}, id: {}, domain: {}, themeColor: {}, mode: {}, timeout: {} }, [], [], !0));
const pr = new Et({
  target: document.getElementsByTagName("csur-client")[0]
});
export {
  pr as default
};
