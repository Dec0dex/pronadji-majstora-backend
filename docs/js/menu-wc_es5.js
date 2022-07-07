'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">backend documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' : 'data-target="#xs-controllers-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' : 'id="xs-controllers-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' : 'data-target="#xs-injectables-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' : 'id="xs-injectables-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/CaslAbilityFactory.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CaslAbilityFactory</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/JwtStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JwtStrategy</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HealthModule.html\" data-type=\"entity-link\" >HealthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-HealthModule-f22e9278d88a3085a732156d7fdd6534f58d4944d9824b928dbc56d6f76b7a5e7ced2df8a797adf12ac40954d5d6ed2db234dc4b09130537cf8530c540ce2c08"' : 'data-target="#xs-controllers-links-module-HealthModule-f22e9278d88a3085a732156d7fdd6534f58d4944d9824b928dbc56d6f76b7a5e7ced2df8a797adf12ac40954d5d6ed2db234dc4b09130537cf8530c540ce2c08"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-HealthModule-f22e9278d88a3085a732156d7fdd6534f58d4944d9824b928dbc56d6f76b7a5e7ced2df8a797adf12ac40954d5d6ed2db234dc4b09130537cf8530c540ce2c08"' : 'id="xs-controllers-links-module-HealthModule-f22e9278d88a3085a732156d7fdd6534f58d4944d9824b928dbc56d6f76b7a5e7ced2df8a797adf12ac40954d5d6ed2db234dc4b09130537cf8530c540ce2c08"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/HealthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HealthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PermissionModule.html\" data-type=\"entity-link\" >PermissionModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-PermissionModule-e4eb66320ed2ef25ec63629f2ef60f1e482f6ba92ebcd4195b3e991c4ea3addda02b1063fa875d6bf3c4b6e596cc77673fb5ea66c78897524c8af9c24d73cfad"' : 'data-target="#xs-controllers-links-module-PermissionModule-e4eb66320ed2ef25ec63629f2ef60f1e482f6ba92ebcd4195b3e991c4ea3addda02b1063fa875d6bf3c4b6e596cc77673fb5ea66c78897524c8af9c24d73cfad"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-PermissionModule-e4eb66320ed2ef25ec63629f2ef60f1e482f6ba92ebcd4195b3e991c4ea3addda02b1063fa875d6bf3c4b6e596cc77673fb5ea66c78897524c8af9c24d73cfad"' : 'id="xs-controllers-links-module-PermissionModule-e4eb66320ed2ef25ec63629f2ef60f1e482f6ba92ebcd4195b3e991c4ea3addda02b1063fa875d6bf3c4b6e596cc77673fb5ea66c78897524c8af9c24d73cfad"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/PermissionController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PermissionController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-PermissionModule-e4eb66320ed2ef25ec63629f2ef60f1e482f6ba92ebcd4195b3e991c4ea3addda02b1063fa875d6bf3c4b6e596cc77673fb5ea66c78897524c8af9c24d73cfad"' : 'data-target="#xs-injectables-links-module-PermissionModule-e4eb66320ed2ef25ec63629f2ef60f1e482f6ba92ebcd4195b3e991c4ea3addda02b1063fa875d6bf3c4b6e596cc77673fb5ea66c78897524c8af9c24d73cfad"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-PermissionModule-e4eb66320ed2ef25ec63629f2ef60f1e482f6ba92ebcd4195b3e991c4ea3addda02b1063fa875d6bf3c4b6e596cc77673fb5ea66c78897524c8af9c24d73cfad"' : 'id="xs-injectables-links-module-PermissionModule-e4eb66320ed2ef25ec63629f2ef60f1e482f6ba92ebcd4195b3e991c4ea3addda02b1063fa875d6bf3c4b6e596cc77673fb5ea66c78897524c8af9c24d73cfad"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PermissionService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PermissionService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RoleModule.html\" data-type=\"entity-link\" >RoleModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-RoleModule-99884f252cf9c87d625a7a6a052cac2ac2d57d5884127cdef7b58a33cce13461d7a129a07213a4790d56b5d4c8c682cc56f1116742e9d712b5d8f96bb6c0368d"' : 'data-target="#xs-controllers-links-module-RoleModule-99884f252cf9c87d625a7a6a052cac2ac2d57d5884127cdef7b58a33cce13461d7a129a07213a4790d56b5d4c8c682cc56f1116742e9d712b5d8f96bb6c0368d"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-RoleModule-99884f252cf9c87d625a7a6a052cac2ac2d57d5884127cdef7b58a33cce13461d7a129a07213a4790d56b5d4c8c682cc56f1116742e9d712b5d8f96bb6c0368d"' : 'id="xs-controllers-links-module-RoleModule-99884f252cf9c87d625a7a6a052cac2ac2d57d5884127cdef7b58a33cce13461d7a129a07213a4790d56b5d4c8c682cc56f1116742e9d712b5d8f96bb6c0368d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/RoleController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RoleController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-RoleModule-99884f252cf9c87d625a7a6a052cac2ac2d57d5884127cdef7b58a33cce13461d7a129a07213a4790d56b5d4c8c682cc56f1116742e9d712b5d8f96bb6c0368d"' : 'data-target="#xs-injectables-links-module-RoleModule-99884f252cf9c87d625a7a6a052cac2ac2d57d5884127cdef7b58a33cce13461d7a129a07213a4790d56b5d4c8c682cc56f1116742e9d712b5d8f96bb6c0368d"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-RoleModule-99884f252cf9c87d625a7a6a052cac2ac2d57d5884127cdef7b58a33cce13461d7a129a07213a4790d56b5d4c8c682cc56f1116742e9d712b5d8f96bb6c0368d"' : 'id="xs-injectables-links-module-RoleModule-99884f252cf9c87d625a7a6a052cac2ac2d57d5884127cdef7b58a33cce13461d7a129a07213a4790d56b5d4c8c682cc56f1116742e9d712b5d8f96bb6c0368d"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/RoleService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RoleService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UserModule.html\" data-type=\"entity-link\" >UserModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-UserModule-8be8c76e3669dee05e47329261ad11d5e85f4a3db4b2f77d722ce83ec0aee4efe35187a2be3721f1b054c43eedc8594bce841ed9fa668911ac770fce32d34375"' : 'data-target="#xs-injectables-links-module-UserModule-8be8c76e3669dee05e47329261ad11d5e85f4a3db4b2f77d722ce83ec0aee4efe35187a2be3721f1b054c43eedc8594bce841ed9fa668911ac770fce32d34375"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UserModule-8be8c76e3669dee05e47329261ad11d5e85f4a3db4b2f77d722ce83ec0aee4efe35187a2be3721f1b054c43eedc8594bce841ed9fa668911ac770fce32d34375"' : 'id="xs-injectables-links-module-UserModule-8be8c76e3669dee05e47329261ad11d5e85f4a3db4b2f77d722ce83ec0aee4efe35187a2be3721f1b054c43eedc8594bce841ed9fa668911ac770fce32d34375"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UserService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#entities-links"' : 'data-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/Address.html\" data-type=\"entity-link\" >Address</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Permission.html\" data-type=\"entity-link\" >Permission</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Role.html\" data-type=\"entity-link\" >Role</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/User.html\" data-type=\"entity-link\" >User</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AssignRolePermissionsQuery.html\" data-type=\"entity-link\" >AssignRolePermissionsQuery</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AssignRoleUsersQuery.html\" data-type=\"entity-link\" >AssignRoleUsersQuery</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePermissionPolicyHandler.html\" data-type=\"entity-link\" >CreatePermissionPolicyHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateRolePolicyHandler.html\" data-type=\"entity-link\" >CreateRolePolicyHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserDto.html\" data-type=\"entity-link\" >CreateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeletePermissionPolicyHandler.html\" data-type=\"entity-link\" >DeletePermissionPolicyHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeleteRolePolicyHandler.html\" data-type=\"entity-link\" >DeleteRolePolicyHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LoginDto.html\" data-type=\"entity-link\" >LoginDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PageDto.html\" data-type=\"entity-link\" >PageDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PageMetaDto.html\" data-type=\"entity-link\" >PageMetaDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PageOptionsDto.html\" data-type=\"entity-link\" >PageOptionsDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Permission.html\" data-type=\"entity-link\" >Permission</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PermissionDto.html\" data-type=\"entity-link\" >PermissionDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ReadPermissionPolicyHandler.html\" data-type=\"entity-link\" >ReadPermissionPolicyHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ReadRolePolicyHandler.html\" data-type=\"entity-link\" >ReadRolePolicyHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RefreshTokenDto.html\" data-type=\"entity-link\" >RefreshTokenDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RoleDto.html\" data-type=\"entity-link\" >RoleDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TokenDto.html\" data-type=\"entity-link\" >TokenDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdatePermissionPolicyHandler.html\" data-type=\"entity-link\" >UpdatePermissionPolicyHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateRolePolicyHandler.html\" data-type=\"entity-link\" >UpdateRolePolicyHandler</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/JwtAuthGuard.html\" data-type=\"entity-link\" >JwtAuthGuard</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/PoliciesGuard.html\" data-type=\"entity-link\" >PoliciesGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/CaslPermission.html\" data-type=\"entity-link\" >CaslPermission</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IPolicyHandler.html\" data-type=\"entity-link\" >IPolicyHandler</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PageMetaDtoParameters.html\" data-type=\"entity-link\" >PageMetaDtoParameters</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));