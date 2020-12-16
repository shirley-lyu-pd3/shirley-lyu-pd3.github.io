import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as element, t as text, g as space, h as claim_element, j as children, k as claim_text, l as detach_dev, m as claim_space, n as add_location, o as attr_dev, p as insert_dev, q as append_dev, r as noop, v as validate_slots } from './client.be2afd0b.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/index.svelte";

function create_fragment(ctx) {
  var h1;
  var t0;
  var t1;
  var h20;
  var t2;
  var t3;
  var ul;
  var li0;
  var a0;
  var t4;
  var t5;
  var li1;
  var a1;
  var t6;
  var t7;
  var li2;
  var a2;
  var t8;
  var t9;
  var li3;
  var a3;
  var t10;
  var t11;
  var li4;
  var a4;
  var t12;
  var t13;
  var li5;
  var a5;
  var t14;
  var t15;
  var li6;
  var a6;
  var t16;
  var t17;
  var h21;
  var t18;
  var t19;
  var dl;
  var dt;
  var t20;
  var dd;
  var div;
  var t21;
  var a7;
  var t22;
  var t23;
  var block = {
    c: function create() {
      h1 = element("h1");
      t0 = text("Shirley Lyu PD3");
      t1 = space();
      h20 = element("h2");
      t2 = text("Scenes");
      t3 = space();
      ul = element("ul");
      li0 = element("li");
      a0 = element("a");
      t4 = text("Scene 1: Setting");
      t5 = space();
      li1 = element("li");
      a1 = element("a");
      t6 = text("Scene 2: Layout demo");
      t7 = space();
      li2 = element("li");
      a2 = element("a");
      t8 = text("Scene 3: Layout shift");
      t9 = space();
      li3 = element("li");
      a3 = element("a");
      t10 = text("Scene 4: Exercise warning");
      t11 = space();
      li4 = element("li");
      a4 = element("a");
      t12 = text("Scene 5: Excersie end");
      t13 = space();
      li5 = element("li");
      a5 = element("a");
      t14 = text("Scene 6: Work mode selection");
      t15 = space();
      li6 = element("li");
      a6 = element("a");
      t16 = text("Scene 7: Exercise demo");
      t17 = space();
      h21 = element("h2");
      t18 = text("Copyright notice");
      t19 = space();
      dl = element("dl");
      dt = element("dt");
      t20 = text("Houschka Rounded Medium");
      dd = element("dd");
      div = element("div");
      t21 = text("Font made from\n      ");
      a7 = element("a");
      t22 = text("oNline Web Fonts");
      t23 = text("is licensed by\n      CC BY 3.0");
      this.h();
    },
    l: function claim(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Shirley Lyu PD3");
      h1_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", {});
      var h20_nodes = children(h20);
      t2 = claim_text(h20_nodes, "Scenes");
      h20_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", {
        href: true
      });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "Scene 1: Setting");
      a0_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t5 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", {
        href: true
      });
      var a1_nodes = children(a1);
      t6 = claim_text(a1_nodes, "Scene 2: Layout demo");
      a1_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      t7 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      a2 = claim_element(li2_nodes, "A", {
        href: true
      });
      var a2_nodes = children(a2);
      t8 = claim_text(a2_nodes, "Scene 3: Layout shift");
      a2_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      t9 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      a3 = claim_element(li3_nodes, "A", {
        href: true
      });
      var a3_nodes = children(a3);
      t10 = claim_text(a3_nodes, "Scene 4: Exercise warning");
      a3_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      t11 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      a4 = claim_element(li4_nodes, "A", {
        href: true
      });
      var a4_nodes = children(a4);
      t12 = claim_text(a4_nodes, "Scene 5: Excersie end");
      a4_nodes.forEach(detach_dev);
      li4_nodes.forEach(detach_dev);
      t13 = claim_space(ul_nodes);
      li5 = claim_element(ul_nodes, "LI", {});
      var li5_nodes = children(li5);
      a5 = claim_element(li5_nodes, "A", {
        href: true
      });
      var a5_nodes = children(a5);
      t14 = claim_text(a5_nodes, "Scene 6: Work mode selection");
      a5_nodes.forEach(detach_dev);
      li5_nodes.forEach(detach_dev);
      t15 = claim_space(ul_nodes);
      li6 = claim_element(ul_nodes, "LI", {});
      var li6_nodes = children(li6);
      a6 = claim_element(li6_nodes, "A", {
        href: true
      });
      var a6_nodes = children(a6);
      t16 = claim_text(a6_nodes, "Scene 7: Exercise demo");
      a6_nodes.forEach(detach_dev);
      li6_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      t17 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", {});
      var h21_nodes = children(h21);
      t18 = claim_text(h21_nodes, "Copyright notice");
      h21_nodes.forEach(detach_dev);
      t19 = claim_space(nodes);
      dl = claim_element(nodes, "DL", {});
      var dl_nodes = children(dl);
      dt = claim_element(dl_nodes, "DT", {});
      var dt_nodes = children(dt);
      t20 = claim_text(dt_nodes, "Houschka Rounded Medium");
      dt_nodes.forEach(detach_dev);
      dd = claim_element(dl_nodes, "DD", {});
      var dd_nodes = children(dd);
      div = claim_element(dd_nodes, "DIV", {});
      var div_nodes = children(div);
      t21 = claim_text(div_nodes, "Font made from\n      ");
      a7 = claim_element(div_nodes, "A", {
        href: true
      });
      var a7_nodes = children(a7);
      t22 = claim_text(a7_nodes, "oNline Web Fonts");
      a7_nodes.forEach(detach_dev);
      t23 = claim_text(div_nodes, "is licensed by\n      CC BY 3.0");
      div_nodes.forEach(detach_dev);
      dd_nodes.forEach(detach_dev);
      dl_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h1, file, 0, 0, 0);
      add_location(h20, file, 1, 0, 25);
      attr_dev(a0, "href", "setting");
      add_location(a0, file, 3, 6, 52);
      add_location(li0, file, 3, 2, 48);
      attr_dev(a1, "href", "static-standing");
      add_location(a1, file, 4, 6, 102);
      add_location(li1, file, 4, 2, 98);
      attr_dev(a2, "href", "movement");
      add_location(a2, file, 5, 6, 164);
      add_location(li2, file, 5, 2, 160);
      attr_dev(a3, "href", "warning");
      add_location(a3, file, 6, 6, 220);
      add_location(li3, file, 6, 2, 216);
      attr_dev(a4, "href", "exercise-end");
      add_location(a4, file, 7, 6, 279);
      add_location(li4, file, 7, 2, 275);
      attr_dev(a5, "href", "work-mode-selection");
      add_location(a5, file, 8, 6, 339);
      add_location(li5, file, 8, 2, 335);
      attr_dev(a6, "href", "exercise");
      add_location(a6, file, 9, 6, 413);
      add_location(li6, file, 9, 2, 409);
      add_location(ul, file, 2, 0, 41);
      add_location(h21, file, 12, 0, 471);
      add_location(dt, file, 14, 2, 504);
      attr_dev(a7, "href", "http://www.onlinewebfonts.com");
      add_location(a7, file, 18, 6, 581);
      add_location(div, file, 16, 4, 548);
      add_location(dd, file, 15, 2, 539);
      add_location(dl, file, 13, 0, 497);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h1, anchor);
      append_dev(h1, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, h20, anchor);
      append_dev(h20, t2);
      insert_dev(target, t3, anchor);
      insert_dev(target, ul, anchor);
      append_dev(ul, li0);
      append_dev(li0, a0);
      append_dev(a0, t4);
      append_dev(ul, t5);
      append_dev(ul, li1);
      append_dev(li1, a1);
      append_dev(a1, t6);
      append_dev(ul, t7);
      append_dev(ul, li2);
      append_dev(li2, a2);
      append_dev(a2, t8);
      append_dev(ul, t9);
      append_dev(ul, li3);
      append_dev(li3, a3);
      append_dev(a3, t10);
      append_dev(ul, t11);
      append_dev(ul, li4);
      append_dev(li4, a4);
      append_dev(a4, t12);
      append_dev(ul, t13);
      append_dev(ul, li5);
      append_dev(li5, a5);
      append_dev(a5, t14);
      append_dev(ul, t15);
      append_dev(ul, li6);
      append_dev(li6, a6);
      append_dev(a6, t16);
      insert_dev(target, t17, anchor);
      insert_dev(target, h21, anchor);
      append_dev(h21, t18);
      insert_dev(target, t19, anchor);
      insert_dev(target, dl, anchor);
      append_dev(dl, dt);
      append_dev(dt, t20);
      append_dev(dl, dd);
      append_dev(dd, div);
      append_dev(div, t21);
      append_dev(div, a7);
      append_dev(a7, t22);
      append_dev(div, t23);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(h20);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(ul);
      if (detaching) detach_dev(t17);
      if (detaching) detach_dev(h21);
      if (detaching) detach_dev(t19);
      if (detaching) detach_dev(dl);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
