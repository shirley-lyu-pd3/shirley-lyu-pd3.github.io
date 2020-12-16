import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as element, g as space, t as text, h as claim_element, j as children, l as detach_dev, m as claim_space, k as claim_text, o as attr_dev, n as add_location, p as insert_dev, q as append_dev, r as noop, v as validate_slots } from './client.e6cce552.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/exercise-end.svelte";

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
      t1 = text("Continue");
      t2 = space();
      a1 = element("a");
      t3 = text("Work");
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
      t1 = claim_text(a0_nodes, "Continue");
      a0_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      a1 = claim_element(div1_nodes, "A", {
        href: true,
        class: true,
        id: true
      });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "Work");
      a1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "id", "card");
      attr_dev(div0, "class", "svelte-1uiwb4z");
      add_location(div0, file, 65, 4, 1112);
      attr_dev(a0, "href", "exercise");
      attr_dev(a0, "class", "button svelte-1uiwb4z");
      attr_dev(a0, "id", "continue");
      add_location(a0, file, 67, 6, 1156);
      attr_dev(a1, "href", "work-mode-selection");
      attr_dev(a1, "class", "button svelte-1uiwb4z");
      attr_dev(a1, "id", "work");
      add_location(a1, file, 68, 6, 1223);
      attr_dev(div1, "id", "flex");
      attr_dev(div1, "class", "svelte-1uiwb4z");
      add_location(div1, file, 66, 4, 1134);
      attr_dev(div2, "id", "inner-container");
      attr_dev(div2, "class", "svelte-1uiwb4z");
      add_location(div2, file, 64, 2, 1081);
      attr_dev(div3, "id", "container");
      attr_dev(div3, "class", "svelte-1uiwb4z");
      add_location(div3, file, 63, 0, 1058);
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
  validate_slots("Exercise_end", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Exercise_end> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Exercise_end = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Exercise_end, _SvelteComponentDev);

  var _super = _createSuper(Exercise_end);

  function Exercise_end(options) {
    var _this;

    _classCallCheck(this, Exercise_end);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Exercise_end",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Exercise_end;
}(SvelteComponentDev);

export default Exercise_end;
