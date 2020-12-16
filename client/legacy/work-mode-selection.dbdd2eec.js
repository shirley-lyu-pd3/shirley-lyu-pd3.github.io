import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as element, g as space, t as text, h as claim_element, j as children, l as detach_dev, m as claim_space, k as claim_text, o as attr_dev, n as add_location, p as insert_dev, q as append_dev, r as noop, v as validate_slots } from './client.e6cce552.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/work-mode-selection.svelte";

function create_fragment(ctx) {
  var div3;
  var div2;
  var div0;
  var t0;
  var div1;
  var a0;
  var t1;
  var t2;
  var a1;
  var t3;
  var block = {
    c: function create() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      a0 = element("a");
      t1 = text("Standing");
      t2 = space();
      a1 = element("a");
      t3 = text("Sitting");
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        id: true,
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        id: true,
        class: true
      });
      children(div0).forEach(detach_dev);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        id: true,
        class: true
      });
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", {
        href: true,
        class: true,
        id: true
      });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, "Standing");
      a0_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      a1 = claim_element(div1_nodes, "A", {
        href: true,
        class: true,
        id: true
      });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "Sitting");
      a1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "id", "card");
      attr_dev(div0, "class", "svelte-9k9jcz");
      add_location(div0, file, 65, 4, 1122);
      attr_dev(a0, "href", "static-standing");
      attr_dev(a0, "class", "button svelte-9k9jcz");
      attr_dev(a0, "id", "standing");
      add_location(a0, file, 67, 6, 1166);
      attr_dev(a1, "href", "static-sitting");
      attr_dev(a1, "class", "button svelte-9k9jcz");
      attr_dev(a1, "id", "sitting");
      add_location(a1, file, 68, 6, 1240);
      attr_dev(div1, "id", "flex");
      attr_dev(div1, "class", "svelte-9k9jcz");
      add_location(div1, file, 66, 4, 1144);
      attr_dev(div2, "id", "inner-container");
      attr_dev(div2, "class", "svelte-9k9jcz");
      add_location(div2, file, 64, 2, 1091);
      attr_dev(div3, "id", "container");
      attr_dev(div3, "class", "svelte-9k9jcz");
      add_location(div3, file, 63, 0, 1068);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, div2);
      append_dev(div2, div0);
      append_dev(div2, t0);
      append_dev(div2, div1);
      append_dev(div1, a0);
      append_dev(a0, t1);
      append_dev(div1, t2);
      append_dev(div1, a1);
      append_dev(a1, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div3);
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
