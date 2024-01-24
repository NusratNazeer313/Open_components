var oc=oc||{};oc.components=oc.components||{};oc.components['83aff8f74567bbd171aabfbcb3f2f7190a59e296']=function(model) {
    var __toOcStaticPathUrl = function(args) {
      return model.component.props._staticPath + 'public/' + args;
    } 
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = model.component.props;
    var __$$oc_initialData__ = rest;
    var __$$oc_Settings__ = {id: model.id, staticPath: _staticPath, baseUrl: _baseUrl, name: _componentName, version: _componentVersion};
    var innerFn = function(model){
  oc.reactComponents = oc.reactComponents || {};
  oc.reactComponents['51c5469d1a2d71538f0d2279e5292a323b58c4dd'] = oc.reactComponents['51c5469d1a2d71538f0d2279e5292a323b58c4dd'] || ((function() {
    var clientBundle = function(require$$0) {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var dist = {};
  var Server$1 = {};
  Object.defineProperty(Server$1, "__esModule", { value: true });
  Server$1.getSettings = Server$1.getInitialData = Server$1.Server = void 0;
  class Server {
    constructor(initial) {
      __publicField(this, "initial");
      __publicField(this, "actions", {});
      this.initial = initial;
    }
    action(name, action) {
      this.actions[name] = action;
      return this;
    }
    getData() {
      return async ({ action: actionName, params, setEmptyResponse, ...context }, cb) => {
        let res;
        try {
          if (actionName && this.actions[actionName]) {
            const data = (params == null ? void 0 : params.data) ?? params;
            res = await this.actions[actionName](data, context);
          } else {
            res = await this.initial(params, context);
          }
        } catch (err) {
          cb(err);
          return;
        }
        cb(null, res);
      };
    }
  }
  Server$1.Server = Server;
  const getInitialData = () => typeof __$$oc_initialData__ !== "undefined" ? __$$oc_initialData__ : {};
  Server$1.getInitialData = getInitialData;
  const getSettings = () => typeof __$$oc_Settings__ !== "undefined" ? __$$oc_Settings__ : {};
  Server$1.getSettings = getSettings;
  var serverClient = {};
  Object.defineProperty(serverClient, "__esModule", { value: true });
  serverClient.serverClient = void 0;
  const Server_1 = Server$1;
  serverClient.serverClient = new Proxy({}, {
    get(_target, prop) {
      return (data) => {
        var _a, _b, _c;
        const componentName = "header";
        const componentVersion = "1.0.0";
        const baseUrl = (0, Server_1.getSettings)().baseUrl ?? ((_c = (_b = (_a = window.oc) == null ? void 0 : _a.renderedComponents) == null ? void 0 : _b[componentName]) == null ? void 0 : _c.baseUrl);
        return window.oc.getAction({
          action: prop,
          baseUrl,
          component: componentName,
          version: componentVersion,
          parameters: data
        });
      };
    }
  });
  var types = {};
  Object.defineProperty(types, "__esModule", { value: true });
  (function(exports) {
    var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m2, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m2, k2);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k2];
        } };
      }
      Object.defineProperty(o, k22, desc);
    } : function(o, m2, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o[k22] = m2[k2];
    });
    var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m2, exports2) {
      for (var p2 in m2)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(Server$1, exports);
    __exportStar(serverClient, exports);
    __exportStar(types, exports);
  })(dist);
  const container = "_container_eh50l_1";
  const button = "_button_eh50l_8";
  const info = "_info_eh50l_20";
  const block = "_block_eh50l_24";
  const styles = {
    container,
    button,
    info,
    block
  };
  const logo = "" + __toOcStaticPathUrl("logo.png");
  const App = (props) => {
    const {
      firstName,
      lastName,
      born,
      hobbies
    } = props;
    const [additionalData, setAdditionalData] = require$$0.useState(null);
    const [error, setError] = require$$0.useState("");
    if (error) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        children: "Something wrong happened!"
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: styles.container,
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("img", {
        width: "50",
        height: "50",
        src: logo,
        alt: "Logo"
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", {
        style: {
          margin: "0 0 20px 0"
        },
        children: ["Hello, ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          style: {
            textDecoration: "underline"
          },
          children: firstName
        }), " ", lastName]
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: styles.info,
        children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: styles.block,
          children: ["Born: ", born]
        }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: styles.block,
          children: ["Hobbies: ", hobbies.map((x) => x.toLowerCase()).join(", ")]
        })]
      }), additionalData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        children: additionalData.funFact
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
        href: "http://localhost:3040/footer/1.0.0/~preview/?__ocAcceptLanguage=*&",
        className: styles.button,
        children: "Go to Footer"
      })]
    });
  };
  var useData$1 = {};
  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(useData$1, "__esModule", { value: true });
  useData$1.useData = DataProvider_1 = useData$1.DataProvider = void 0;
  const jsx_runtime_1 = jsxRuntimeExports;
  const react_1 = __importDefault(require$$0);
  const DataContext = react_1.default.createContext({});
  const DataProvider = ({ children, ...props }) => {
    return (0, jsx_runtime_1.jsx)(DataContext.Provider, { value: props, children });
  };
  var DataProvider_1 = useData$1.DataProvider = DataProvider;
  function useData() {
    const { value: { getData, ...rest } } = react_1.default.useContext(DataContext);
    const asyncGetData = react_1.default.useCallback((data) => {
      return new Promise((resolve, reject) => {
        getData({ ...rest, ...data }, (err, newData) => {
          if (err) {
            reject(err);
          } else {
            resolve(newData);
          }
        });
      });
    }, []);
    return { getData: asyncGetData, ...rest };
  }
  useData$1.useData = useData;
  function OCProvider(props) {
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = props;
    require$$0.useEffect(() => {
      window.oc.events.fire("oc:componentDidMount", rest);
    }, []);
    function _getData(providerProps, parameters, cb) {
      return window.oc.getData(
        {
          name: providerProps._componentName,
          version: providerProps._componentVersion,
          baseUrl: providerProps._baseUrl,
          parameters
        },
        (err, data) => {
          if (err) {
            return cb(err);
          }
          const { _staticPath: _staticPath2, _baseUrl: _baseUrl2, _componentName: _componentName2, _componentVersion: _componentVersion2, ...rest2 } = data.component.props;
          cb(null, rest2, data.component.props);
        }
      );
    }
    function _getSetting(providerProps, setting) {
      const settingHash = {
        name: providerProps._componentName,
        version: providerProps._componentVersion,
        baseUrl: providerProps._baseUrl,
        staticPath: providerProps._staticPath
      };
      return settingHash[setting];
    }
    const getData = (parameters, cb) => {
      if (!cb || typeof cb !== "function") {
        return new Promise((resolve, reject) => {
          _getData(props, parameters, (err, data) => {
            if (err) {
              return reject(err);
            }
            resolve(data);
          });
        });
      }
      _getData(props, parameters, cb);
    };
    const getSetting = (setting) => _getSetting(props, setting);
    rest.getData = getData;
    rest.getSetting = getSetting;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DataProvider_1, { value: { ...rest }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, { ...rest }) });
  }
  function renderer(props, element, ssr) {
    if (window.ReactDOM.createRoot) {
      if (ssr) {
        window.ReactDOM.hydrateRoot(element, /* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }));
      } else {
        window.ReactDOM.createRoot(element).render(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }));
      }
    } else {
      if (ssr) {
        window.ReactDOM.hydrate(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }), element);
      } else {
        window.ReactDOM.render(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }), element);
      }
    }
  }
  renderer.component = OCProvider;
  return renderer;
}(React);

    return clientBundle;
  })());
  if (!model) return;
  var modelHTML =  model.__html ? model.__html : '';
  var ssr = !!modelHTML;
  var externals = [{"global":"React","url":"https://unpkg.com/react@18.2.0/umd/react.production.min.js","devUrl":"https://unpkg.com/react@18.2.0/umd/react.development.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js","devUrl":"https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js","name":"react-dom"}];
  var staticPath = model.component.props._staticPath;
  if (ssr) {
    externals.push({
      global: ['oc', 'components', '83aff8f74567bbd171aabfbcb3f2f7190a59e296'],
      url: staticPath + 'template.js',
      name: "template"
    });
  }
  var props = JSON.stringify(model.component.props);
  oc = oc || {};
  oc.__reactTemplate = oc.__reactTemplate || { count: 0 };
  var count = oc.__reactTemplate.count;
  var templateId = "oc-reactRoot-header-" + count;
  oc.__reactTemplate.count++;
  var ssrCall = 'oc.components["83aff8f74567bbd171aabfbcb3f2f7190a59e296"]({ component: { props:' + props + ' } });';

  return '<div id="' + templateId + '" class="oc-reactRoot-header">' + modelHTML + '</div>' +
    '<style>._container_eh50l_1 {  background-color: #3b246c;  color: #fff;  font-family: sans-serif;  padding: 40px;}._button_eh50l_8 {  background-color: #a97613;  border: none;  padding: 15px 32px;  text-align: center;  font-size: 16px;  text-decoration: none;  display: inline-block;  color: inherit;  cursor: pointer;}._info_eh50l_20 {  margin-bottom: 20px;}._block_eh50l_24 {  margin: 6px 0;}._button_eh50l_8:hover {  background-color: #c79535;}</style>' +
    '<script>' +
    'oc = oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'._container_eh50l_1 {  background-color: #3b246c;  color: #fff;  font-family: sans-serif;  padding: 40px;}._button_eh50l_8 {  background-color: #a97613;  border: none;  padding: 15px 32px;  text-align: center;  font-size: 16px;  text-decoration: none;  display: inline-block;  color: inherit;  cursor: pointer;}._info_eh50l_20 {  margin-bottom: 20px;}._block_eh50l_24 {  margin: 6px 0;}._button_eh50l_8:hover {  background-color: #c79535;}\');' +
      'oc.requireSeries(' + JSON.stringify(externals) + ', function(){' +
        'var targetNode = document.getElementById("' + templateId + '");' +
        'targetNode.setAttribute("id","");' +
        (ssr ? ssrCall : '') +
        'oc.components["83aff8f74567bbd171aabfbcb3f2f7190a59e296"]({ component: { props:' + props + ' } });' +
        'oc.reactComponents["51c5469d1a2d71538f0d2279e5292a323b58c4dd"](' + props + ', targetNode, ' + !!modelHTML  + ');' +
      '});' +
    '});' +
  '</script>'
};
    return innerFn(model);
  }
  