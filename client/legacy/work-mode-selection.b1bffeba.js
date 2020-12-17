import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as element, g as space, t as text, h as claim_element, j as children, l as detach_dev, m as claim_space, k as claim_text, o as attr_dev, n as add_location, p as insert_dev, q as append_dev, r as noop, v as validate_slots } from './client.d6d014ca.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/work-mode-selection.svelte";

function create_fragment(ctx) {
  var div4;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var div3;
  var div1;
  var t1;
  var div2;
  var a0;
  var t2;
  var t3;
  var a1;
  var t4;
  var block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div3 = element("div");
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      a0 = element("a");
      t2 = text("Standing");
      t3 = space();
      a1 = element("a");
      t4 = text("Sitting");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {
        id: true,
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        id: true,
        class: true
      });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", {
        id: true,
        class: true
      });
      children(div1).forEach(detach_dev);
      t1 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        id: true,
        class: true
      });
      var div2_nodes = children(div2);
      a0 = claim_element(div2_nodes, "A", {
        href: true,
        class: true,
        id: true
      });
      var a0_nodes = children(a0);
      t2 = claim_text(a0_nodes, "Standing");
      a0_nodes.forEach(detach_dev);
      t3 = claim_space(div2_nodes);
      a1 = claim_element(div2_nodes, "A", {
        href: true,
        class: true,
        id: true
      });
      var a1_nodes = children(a1);
      t4 = claim_text(a1_nodes, "Sitting");
      a1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "background1.jpg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "background");
      attr_dev(img, "class", "svelte-1eantla");
      add_location(img, file, 85, 23, 1377);
      attr_dev(div0, "id", "background");
      attr_dev(div0, "class", "svelte-1eantla");
      add_location(div0, file, 85, 2, 1356);
      attr_dev(div1, "id", "card");
      attr_dev(div1, "class", "svelte-1eantla");
      add_location(div1, file, 87, 4, 1461);
      attr_dev(a0, "href", "static-standing");
      attr_dev(a0, "class", "button svelte-1eantla");
      attr_dev(a0, "id", "standing");
      add_location(a0, file, 89, 6, 1505);
      attr_dev(a1, "href", "static-sitting");
      attr_dev(a1, "class", "button svelte-1eantla");
      attr_dev(a1, "id", "sitting");
      add_location(a1, file, 90, 6, 1579);
      attr_dev(div2, "id", "flex");
      attr_dev(div2, "class", "svelte-1eantla");
      add_location(div2, file, 88, 4, 1483);
      attr_dev(div3, "id", "inner-container");
      attr_dev(div3, "class", "svelte-1eantla");
      add_location(div3, file, 86, 2, 1430);
      attr_dev(div4, "id", "container");
      attr_dev(div4, "class", "svelte-1eantla");
      add_location(div4, file, 84, 0, 1333);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div0);
      append_dev(div0, img);
      append_dev(div4, t0);
      append_dev(div4, div3);
      append_dev(div3, div1);
      append_dev(div3, t1);
      append_dev(div3, div2);
      append_dev(div2, a0);
      append_dev(a0, t2);
      append_dev(div2, t3);
      append_dev(div2, a1);
      append_dev(a1, t4);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
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
  validate_slots("Work_mode_selection", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Work_mode_selection> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Work_mode_selection = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Work_mode_selection, _SvelteComponentDev);

  var _super = _createSuper(Work_mode_selection);

  function Work_mode_selection(options) {
    var _this;

    _classCallCheck(this, Work_mode_selection);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Work_mode_selection",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Work_mode_selection;
}(SvelteComponentDev);

export default Work_mode_selection;
