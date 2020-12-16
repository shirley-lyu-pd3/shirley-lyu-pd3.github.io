import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as element, g as space, h as claim_element, j as children, l as detach_dev, m as claim_space, o as attr_dev, n as add_location, p as insert_dev, q as append_dev, r as noop, v as validate_slots } from './client.e6cce552.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/movement.svelte";

function create_fragment(ctx) {
  var div4;
  var div0;
  var t0;
  var div1;
  var t1;
  var div2;
  var t2;
  var div3;
  var block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      t2 = space();
      div3 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {
        class: true,
        id: true
      });
      children(div0).forEach(detach_dev);
      t0 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true,
        id: true
      });
      children(div1).forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true,
        id: true
      });
      children(div2).forEach(detach_dev);
      t2 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true,
        id: true
      });
      children(div3).forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "window svelte-1848mtm");
      attr_dev(div0, "id", "research");
      add_location(div0, file, 198, 2, 3072);
      attr_dev(div1, "class", "window svelte-1848mtm");
      attr_dev(div1, "id", "word");
      add_location(div1, file, 199, 2, 3111);
      attr_dev(div2, "class", "window svelte-1848mtm");
      attr_dev(div2, "id", "music");
      add_location(div2, file, 200, 2, 3146);
      attr_dev(div3, "class", "window svelte-1848mtm");
      attr_dev(div3, "id", "layout");
      add_location(div3, file, 201, 2, 3182);
      attr_dev(div4, "id", "container");
      attr_dev(div4, "class", "svelte-1848mtm");
      add_location(div4, file, 197, 0, 3049);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div0);
      append_dev(div4, t0);
      append_dev(div4, div1);
      append_dev(div4, t1);
      append_dev(div4, div2);
      append_dev(div4, t2);
      append_dev(div4, div3);
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
  validate_slots("Movement", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Movement> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Movement = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Movement, _SvelteComponentDev);

  var _super = _createSuper(Movement);

  function Movement(options) {
    var _this;

    _classCallCheck(this, Movement);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Movement",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Movement;
}(SvelteComponentDev);

export default Movement;
