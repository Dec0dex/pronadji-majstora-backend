'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-5dbc57ecdc4a2e08e3a4cdf63bfa4b7781de08de2a1c397274fb21791dd0219591c4a13ddb89c949e196b7ec94d7039e53279daed6d05d61874940ba7c01b5be"' : 'data-target="#xs-controllers-links-module-AppModule-5dbc57ecdc4a2e08e3a4cdf63bfa4b7781de08de2a1c397274fb21791dd0219591c4a13ddb89c949e196b7ec94d7039e53279daed6d05d61874940ba7c01b5be"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5dbc57ecdc4a2e08e3a4cdf63bfa4b7781de08de2a1c397274fb21791dd0219591c4a13ddb89c949e196b7ec94d7039e53279daed6d05d61874940ba7c01b5be"' :
                                            'id="xs-controllers-links-module-AppModule-5dbc57ecdc4a2e08e3a4cdf63bfa4b7781de08de2a1c397274fb21791dd0219591c4a13ddb89c949e196b7ec94d7039e53279daed6d05d61874940ba7c01b5be"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-5dbc57ecdc4a2e08e3a4cdf63bfa4b7781de08de2a1c397274fb21791dd0219591c4a13ddb89c949e196b7ec94d7039e53279daed6d05d61874940ba7c01b5be"' : 'data-target="#xs-injectables-links-module-AppModule-5dbc57ecdc4a2e08e3a4cdf63bfa4b7781de08de2a1c397274fb21791dd0219591c4a13ddb89c949e196b7ec94d7039e53279daed6d05d61874940ba7c01b5be"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5dbc57ecdc4a2e08e3a4cdf63bfa4b7781de08de2a1c397274fb21791dd0219591c4a13ddb89c949e196b7ec94d7039e53279daed6d05d61874940ba7c01b5be"' :
                                        'id="xs-injectables-links-module-AppModule-5dbc57ecdc4a2e08e3a4cdf63bfa4b7781de08de2a1c397274fb21791dd0219591c4a13ddb89c949e196b7ec94d7039e53279daed6d05d61874940ba7c01b5be"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostgresConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostgresConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-5b9bcf66c74fc0a685fe41e553e954f4665c01a712a8cf1f35e6cbb78a6fc2a5a3a8d7647cb91a91247b248c2fb8c3c9bf58e07f28ed7b21bdd2d6ea125d2b8f"' : 'data-target="#xs-controllers-links-module-AuthModule-5b9bcf66c74fc0a685fe41e553e954f4665c01a712a8cf1f35e6cbb78a6fc2a5a3a8d7647cb91a91247b248c2fb8c3c9bf58e07f28ed7b21bdd2d6ea125d2b8f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-5b9bcf66c74fc0a685fe41e553e954f4665c01a712a8cf1f35e6cbb78a6fc2a5a3a8d7647cb91a91247b248c2fb8c3c9bf58e07f28ed7b21bdd2d6ea125d2b8f"' :
                                            'id="xs-controllers-links-module-AuthModule-5b9bcf66c74fc0a685fe41e553e954f4665c01a712a8cf1f35e6cbb78a6fc2a5a3a8d7647cb91a91247b248c2fb8c3c9bf58e07f28ed7b21bdd2d6ea125d2b8f"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-5b9bcf66c74fc0a685fe41e553e954f4665c01a712a8cf1f35e6cbb78a6fc2a5a3a8d7647cb91a91247b248c2fb8c3c9bf58e07f28ed7b21bdd2d6ea125d2b8f"' : 'data-target="#xs-injectables-links-module-AuthModule-5b9bcf66c74fc0a685fe41e553e954f4665c01a712a8cf1f35e6cbb78a6fc2a5a3a8d7647cb91a91247b248c2fb8c3c9bf58e07f28ed7b21bdd2d6ea125d2b8f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5b9bcf66c74fc0a685fe41e553e954f4665c01a712a8cf1f35e6cbb78a6fc2a5a3a8d7647cb91a91247b248c2fb8c3c9bf58e07f28ed7b21bdd2d6ea125d2b8f"' :
                                        'id="xs-injectables-links-module-AuthModule-5b9bcf66c74fc0a685fe41e553e954f4665c01a712a8cf1f35e6cbb78a6fc2a5a3a8d7647cb91a91247b248c2fb8c3c9bf58e07f28ed7b21bdd2d6ea125d2b8f"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CaslAbilityFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslAbilityFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-f22e9278d88a3085a732156d7fdd6534f58d4944d9824b928dbc56d6f76b7a5e7ced2df8a797adf12ac40954d5d6ed2db234dc4b09130537cf8530c540ce2c08"' : 'data-target="#xs-controllers-links-module-HealthModule-f22e9278d88a3085a732156d7fdd6534f58d4944d9824b928dbc56d6f76b7a5e7ced2df8a797adf12ac40954d5d6ed2db234dc4b09130537cf8530c540ce2c08"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-f22e9278d88a3085a732156d7fdd6534f58d4944d9824b928dbc56d6f76b7a5e7ced2df8a797adf12ac40954d5d6ed2db234dc4b09130537cf8530c540ce2c08"' :
                                            'id="xs-controllers-links-module-HealthModule-f22e9278d88a3085a732156d7fdd6534f58d4944d9824b928dbc56d6f76b7a5e7ced2df8a797adf12ac40954d5d6ed2db234dc4b09130537cf8530c540ce2c08"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-273b1406a86181eb4e14538a4d9a9ff4420d002e345e9efce299c873b86e832d17e8c44b090fa0904e3c9acdbc6d0b227caca3bb2cb658edfaaa035b24e88f22"' : 'data-target="#xs-injectables-links-module-UserModule-273b1406a86181eb4e14538a4d9a9ff4420d002e345e9efce299c873b86e832d17e8c44b090fa0904e3c9acdbc6d0b227caca3bb2cb658edfaaa035b24e88f22"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-273b1406a86181eb4e14538a4d9a9ff4420d002e345e9efce299c873b86e832d17e8c44b090fa0904e3c9acdbc6d0b227caca3bb2cb658edfaaa035b24e88f22"' :
                                        'id="xs-injectables-links-module-UserModule-273b1406a86181eb4e14538a4d9a9ff4420d002e345e9efce299c873b86e832d17e8c44b090fa0904e3c9acdbc6d0b227caca3bb2cb658edfaaa035b24e88f22"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Address.html" data-type="entity-link" >Address</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Permission.html" data-type="entity-link" >Permission</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Role.html" data-type="entity-link" >Role</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenDto.html" data-type="entity-link" >TokenDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/PoliciesGuard.html" data-type="entity-link" >PoliciesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CaslPermission.html" data-type="entity-link" >CaslPermission</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPolicyHandler.html" data-type="entity-link" >IPolicyHandler</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});