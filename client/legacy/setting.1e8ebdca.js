import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, w as _createClass, S as SvelteComponentDev, v as validate_slots, f as element, h as claim_element, j as children, l as detach_dev, o as attr_dev, x as set_style, n as add_location, p as insert_dev, q as append_dev, y as listen_dev, z as _slicedToArray, r as noop, g as space, t as text, A as create_component, m as claim_space, k as claim_text, B as claim_component, C as mount_component, D as transition_in, E as transition_out, F as destroy_component } from './client.be2afd0b.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Button.svelte";

function create_fragment(ctx) {
  var div1;
  var div0;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        id: true,
        style: true,
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        id: true,
        style: true,
        class: true
      });
      children(div0).forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "id", "circle");
      set_style(div0, "transform",
      /*activated*/
      ctx[0] ? "translateX(50px)" : "");
      attr_dev(div0, "class", "svelte-p6zlaz");
      add_location(div0, file, 33, 2, 687);
      attr_dev(div1, "id", "button");
      set_style(div1, "background-color", "rgb" + (
      /*activated*/
      ctx[0] ? "(124, 166, 154)" : "(194, 125, 120)"));
      attr_dev(div1, "class", "svelte-p6zlaz");
      add_location(div1, file, 29, 0, 563);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);

      if (!mounted) {
        dispose = listen_dev(div1, "click",
        /*click*/
        ctx[1], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*activated*/
      1) {
        set_style(div0, "transform",
        /*activated*/
        ctx[0] ? "translateX(50px)" : "");
      }

      if (dirty &
      /*activated*/
      1) {
        set_style(div1, "background-color", "rgb" + (
        /*activated*/
        ctx[0] ? "(124, 166, 154)" : "(194, 125, 120)"));
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      mounted = false;
      dispose();
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

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Button", slots, []);
  var _$$props$activated = $$props.activated,
      activated = _$$props$activated === void 0 ? false : _$$props$activated;

  function click() {
    $$invalidate(0, activated = !activated);
  }

  var writable_props = ["activated"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Button> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("activated" in $$props) $$invalidate(0, activated = $$props.activated);
  };

  $$self.$capture_state = function () {
    return {
      activated: activated,
      click: click
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("activated" in $$props) $$invalidate(0, activated = $$props.activated);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [activated, click];
}

var Button = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Button, _SvelteComponentDev);

  var _super = _createSuper(Button);

  function Button(options) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      activated: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Button",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Button, [{
    key: "activated",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Button;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/setting.svelte";

function create_fragment$1(ctx) {
  var div9;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var div8;
  var div1;
  var t1;
  var div2;
  var t2;
  var t3;
  var div7;
  var div4;
  var div3;
  var t4;
  var t5;
  var button0;
  var t6;
  var div6;
  var div5;
  var t7;
  var t8;
  var button1;
  var current;
  button0 = new Button({
    $$inline: true
  });
  button1 = new Button({
    $$inline: true
  });
  var block = {
    c: function create() {
      div9 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div8 = element("div");
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      t2 = text("Setting");
      t3 = space();
      div7 = element("div");
      div4 = element("div");
      div3 = element("div");
      t4 = text("Message Mode");
      t5 = space();
      create_component(button0.$$.fragment);
      t6 = space();
      div6 = element("div");
      div5 = element("div");
      t7 = text("Long-time Working Mode");
      t8 = space();
      create_component(button1.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div9 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div9_nodes = children(div9);
      div0 = claim_element(div9_nodes, "DIV", {
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
      t0 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", {
        id: true,
        class: true
      });
      var div8_nodes = children(div8);
      div1 = claim_element(div8_nodes, "DIV", {
        id: true,
        class: true
      });
      children(div1).forEach(detach_dev);
      t1 = claim_space(div8_nodes);
      div2 = claim_element(div8_nodes, "DIV", {
        id: true,
        class: true
      });
      var div2_nodes = children(div2);
      t2 = claim_text(div2_nodes, "Setting");
      div2_nodes.forEach(detach_dev);
      t3 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        id: true,
        class: true
      });
      var div7_nodes = children(div7);
      div4 = claim_element(div7_nodes, "DIV", {
        id: true,
        class: true
      });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t4 = claim_text(div3_nodes, "Message Mode");
      div3_nodes.forEach(detach_dev);
      t5 = claim_space(div4_nodes);
      claim_component(button0.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t6 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        id: true,
        class: true
      });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t7 = claim_text(div5_nodes, "Long-time Working Mode");
      div5_nodes.forEach(detach_dev);
      t8 = claim_space(div6_nodes);
      claim_component(button1.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "background1.jpg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "background");
      attr_dev(img, "class", "svelte-tsbjfx");
      add_location(img, file$1, 89, 2, 1422);
      attr_dev(div0, "id", "background");
      attr_dev(div0, "class", "svelte-tsbjfx");
      add_location(div0, file$1, 88, 2, 1398);
      attr_dev(div1, "id", "card");
      attr_dev(div1, "class", "svelte-tsbjfx");
      add_location(div1, file$1, 91, 4, 1507);
      attr_dev(div2, "id", "title");
      attr_dev(div2, "class", "svelte-tsbjfx");
      add_location(div2, file$1, 92, 4, 1529);
      attr_dev(div3, "class", "setting-text svelte-tsbjfx");
      add_location(div3, file$1, 95, 8, 1634);
      attr_dev(div4, "id", "first");
      attr_dev(div4, "class", "setting-item svelte-tsbjfx");
      add_location(div4, file$1, 94, 6, 1588);
      attr_dev(div5, "class", "setting-text svelte-tsbjfx");
      add_location(div5, file$1, 99, 8, 1764);
      attr_dev(div6, "id", "second");
      attr_dev(div6, "class", "setting-item svelte-tsbjfx");
      add_location(div6, file$1, 98, 6, 1717);
      attr_dev(div7, "id", "setting");
      attr_dev(div7, "class", "svelte-tsbjfx");
      add_location(div7, file$1, 93, 4, 1563);
      attr_dev(div8, "id", "inner-container");
      attr_dev(div8, "class", "svelte-tsbjfx");
      add_location(div8, file$1, 90, 2, 1476);
      attr_dev(div9, "id", "container");
      attr_dev(div9, "class", "svelte-tsbjfx");
      add_location(div9, file$1, 87, 0, 1375);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div9, anchor);
      append_dev(div9, div0);
      append_dev(div0, img);
      append_dev(div9, t0);
      append_dev(div9, div8);
      append_dev(div8, div1);
      append_dev(div8, t1);
      append_dev(div8, div2);
      append_dev(div2, t2);
      append_dev(div8, t3);
      append_dev(div8, div7);
      append_dev(div7, div4);
      append_dev(div4, div3);
      append_dev(div3, t4);
      append_dev(div4, t5);
      mount_component(button0, div4, null);
      append_dev(div7, t6);
      append_dev(div7, div6);
      append_dev(div6, div5);
      append_dev(div5, t7);
      append_dev(div6, t8);
      mount_component(button1, div6, null);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div9);
      destroy_component(button0);
      destroy_component(button1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Setting", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Setting> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Button: Button
    };
  };

  return [];
}

var Setting = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Setting, _SvelteComponentDev);

  var _super = _createSuper$1(Setting);

  function Setting(options) {
    var _this;

    _classCallCheck(this, Setting);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Setting",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Setting;
}(SvelteComponentDev);

export default Setting;
