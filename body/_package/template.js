var oc=oc||{};oc.components=oc.components||{};oc.components['2f9126b243a946d1454c3926bed99cf4e488a0bb']=function(model) {
    var __toOcStaticPathUrl = function(args) {
      return model.component.props._staticPath + 'public/' + args;
    } 
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = model.component.props;
    var __$$oc_initialData__ = rest;
    var __$$oc_Settings__ = {id: model.id, staticPath: _staticPath, baseUrl: _baseUrl, name: _componentName, version: _componentVersion};
    var innerFn = function(model){
  oc.es6Components = oc.es6Components || {};
  oc.es6Components['6a30cb4ce9f67ec58416e6305cd770aeaa89d431'] = oc.es6Components['6a30cb4ce9f67ec58416e6305cd770aeaa89d431'] || ((function() {
    var clientBundle = function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
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
        const componentName = "body";
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
    var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
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
  const onRender = (cb) => {
    const {
      id
    } = dist.getSettings();
    window.oc.events.on("oc:rendered", (e, data) => {
      if (data.id === id) {
        cb(document.querySelector(`[id="${id}"]`));
      }
    });
  };
  const View = ({
    firstName,
    lastName,
    hobbies,
    born
  }) => {
    onRender((element) => {
      var _a;
      (_a = element.querySelector(`.${styles.button}`)) == null ? void 0 : _a.addEventListener("click", async () => {
        const {
          funFact
        } = await dist.serverClient.funFact({
          year: born
        });
        element.querySelector("#fun-year-fact").innerHTML = funFact;
      });
    });
    return (
      /* html */
      `
    <div class="${styles.container}">
      <img width="50" height="50" src="${logo}" alt="Logo" />
      <h1 style="margin: 0 0 20px 0;">
        Hello, <span style="text-decoration: underline;">${firstName}</span> ${lastName}
      </h1>
      <div class=${styles.info}>
        <div class=${styles.block}>Born: ${born}</div>
        <div class=${styles.block}>
          <div>Hobbies: ${hobbies.map((x) => x.toLowerCase()).join(", ")}</div>
        </div>
      </div>
      <div id="fun-year-fact"></div>
      <button class=${styles.button}>
        Fun year fact
      </button>
    </div>
  `
    );
  };
  function renderer(props, element) {
    element.innerHTML = View(props);
  }
  return renderer;
}();

    return clientBundle;
  })());
  if (!model) return;
  var modelHTML =  model.__html ? model.__html : '';
  var ssr = !!modelHTML;
  var externals = [];
  var staticPath = model.component.props._staticPath;
  if (ssr) {
    externals.push({
      global: ['oc', 'components', '2f9126b243a946d1454c3926bed99cf4e488a0bb'],
      url: staticPath + 'template.js',
      name: "template"
    });
  }
  var props = JSON.stringify(model.component.props);
  oc = oc || {};
  oc.__es6Template = oc.__es6Template || { count: 0 };
  var count = oc.__es6Template.count;
  var templateId = "oc-es6Root-body-" + count;
  oc.__es6Template.count++;
  var ssrCall = 'oc.components["2f9126b243a946d1454c3926bed99cf4e488a0bb"]({ component: { props:' + props + ' } });';

  return '<div id="' + templateId + '" class="oc-es6Root-body">' + modelHTML + '</div>' +
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
        'oc.components["2f9126b243a946d1454c3926bed99cf4e488a0bb"]({ component: { props:' + props + ' } });' +
        'oc.es6Components["6a30cb4ce9f67ec58416e6305cd770aeaa89d431"](' + props + ', targetNode, ' + !!modelHTML  + ');' +
      '});' +
    '});' +
  '</script>'
};
    return innerFn(model);
  }
  