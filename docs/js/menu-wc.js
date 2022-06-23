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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
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
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' : 'data-target="#xs-controllers-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' :
                                            'id="xs-controllers-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' : 'data-target="#xs-injectables-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' :
                                        'id="xs-injectables-links-module-AuthModule-dcf280f4cb568374a2146dfa4df9617f47cbb67758ca133432a899aeadfaad5bab837c911d211ac219b0a01ee9dc10acd7dfa1af1d881831a17a0b8de771e372"' }>
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
                                <a href="modules/PermissionModule.html" data-type="entity-link" >PermissionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PermissionModule-30555018ee42e44fc7320b85e6b267e8da027b044cc2e37c14df5fb014727e240e4f221a191f93ba1ba2c2c3633b99cfb5f0cf75c189de27aa08ec847aee3d37"' : 'data-target="#xs-controllers-links-module-PermissionModule-30555018ee42e44fc7320b85e6b267e8da027b044cc2e37c14df5fb014727e240e4f221a191f93ba1ba2c2c3633b99cfb5f0cf75c189de27aa08ec847aee3d37"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionModule-30555018ee42e44fc7320b85e6b267e8da027b044cc2e37c14df5fb014727e240e4f221a191f93ba1ba2c2c3633b99cfb5f0cf75c189de27aa08ec847aee3d37"' :
                                            'id="xs-controllers-links-module-PermissionModule-30555018ee42e44fc7320b85e6b267e8da027b044cc2e37c14df5fb014727e240e4f221a191f93ba1ba2c2c3633b99cfb5f0cf75c189de27aa08ec847aee3d37"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PermissionModule-30555018ee42e44fc7320b85e6b267e8da027b044cc2e37c14df5fb014727e240e4f221a191f93ba1ba2c2c3633b99cfb5f0cf75c189de27aa08ec847aee3d37"' : 'data-target="#xs-injectables-links-module-PermissionModule-30555018ee42e44fc7320b85e6b267e8da027b044cc2e37c14df5fb014727e240e4f221a191f93ba1ba2c2c3633b99cfb5f0cf75c189de27aa08ec847aee3d37"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionModule-30555018ee42e44fc7320b85e6b267e8da027b044cc2e37c14df5fb014727e240e4f221a191f93ba1ba2c2c3633b99cfb5f0cf75c189de27aa08ec847aee3d37"' :
                                        'id="xs-injectables-links-module-PermissionModule-30555018ee42e44fc7320b85e6b267e8da027b044cc2e37c14df5fb014727e240e4f221a191f93ba1ba2c2c3633b99cfb5f0cf75c189de27aa08ec847aee3d37"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleModule.html" data-type="entity-link" >RoleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RoleModule-2a8d761e90825c4f9c4fce761ca708154b6e0bc3a33564354c38977c19c1c6616ae7d760decb1899d431fa5532f16bd140104a1f8d9632898bedc2653996141a"' : 'data-target="#xs-controllers-links-module-RoleModule-2a8d761e90825c4f9c4fce761ca708154b6e0bc3a33564354c38977c19c1c6616ae7d760decb1899d431fa5532f16bd140104a1f8d9632898bedc2653996141a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoleModule-2a8d761e90825c4f9c4fce761ca708154b6e0bc3a33564354c38977c19c1c6616ae7d760decb1899d431fa5532f16bd140104a1f8d9632898bedc2653996141a"' :
                                            'id="xs-controllers-links-module-RoleModule-2a8d761e90825c4f9c4fce761ca708154b6e0bc3a33564354c38977c19c1c6616ae7d760decb1899d431fa5532f16bd140104a1f8d9632898bedc2653996141a"' }>
                                            <li class="link">
                                                <a href="controllers/RoleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RoleModule-2a8d761e90825c4f9c4fce761ca708154b6e0bc3a33564354c38977c19c1c6616ae7d760decb1899d431fa5532f16bd140104a1f8d9632898bedc2653996141a"' : 'data-target="#xs-injectables-links-module-RoleModule-2a8d761e90825c4f9c4fce761ca708154b6e0bc3a33564354c38977c19c1c6616ae7d760decb1899d431fa5532f16bd140104a1f8d9632898bedc2653996141a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoleModule-2a8d761e90825c4f9c4fce761ca708154b6e0bc3a33564354c38977c19c1c6616ae7d760decb1899d431fa5532f16bd140104a1f8d9632898bedc2653996141a"' :
                                        'id="xs-injectables-links-module-RoleModule-2a8d761e90825c4f9c4fce761ca708154b6e0bc3a33564354c38977c19c1c6616ae7d760decb1899d431fa5532f16bd140104a1f8d9632898bedc2653996141a"' }>
                                        <li class="link">
                                            <a href="injectables/RoleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-97cd75f641b00ef8014f0a6db8b0208054b13df3ee7c157630ac5ac478fb2df96a6245bc3f29c046f9ae7bfdbe7fceb27ef2748fe6d33091ec943b9a901a3b04"' : 'data-target="#xs-injectables-links-module-UserModule-97cd75f641b00ef8014f0a6db8b0208054b13df3ee7c157630ac5ac478fb2df96a6245bc3f29c046f9ae7bfdbe7fceb27ef2748fe6d33091ec943b9a901a3b04"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-97cd75f641b00ef8014f0a6db8b0208054b13df3ee7c157630ac5ac478fb2df96a6245bc3f29c046f9ae7bfdbe7fceb27ef2748fe6d33091ec943b9a901a3b04"' :
                                        'id="xs-injectables-links-module-UserModule-97cd75f641b00ef8014f0a6db8b0208054b13df3ee7c157630ac5ac478fb2df96a6245bc3f29c046f9ae7bfdbe7fceb27ef2748fe6d33091ec943b9a901a3b04"' }>
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
                                <a href="classes/AdminUserSeeds1655586994482.html" data-type="entity-link" >AdminUserSeeds1655586994482</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssignRolePermissionsQuery.html" data-type="entity-link" >AssignRolePermissionsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssignRoleUsersQuery.html" data-type="entity-link" >AssignRoleUsersQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionPolicyHandler.html" data-type="entity-link" >CreatePermissionPolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRolePolicyHandler.html" data-type="entity-link" >CreateRolePolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeletePermissionPolicyHandler.html" data-type="entity-link" >DeletePermissionPolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteRolePolicyHandler.html" data-type="entity-link" >DeleteRolePolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ManyToManyUserRoles1655586944086.html" data-type="entity-link" >ManyToManyUserRoles1655586944086</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageDto.html" data-type="entity-link" >PageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageMetaDto.html" data-type="entity-link" >PageMetaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageOptionsDto.html" data-type="entity-link" >PageOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/PermissionDto.html" data-type="entity-link" >PermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PermissionPermissionsSeed1655765422849.html" data-type="entity-link" >PermissionPermissionsSeed1655765422849</a>
                            </li>
                            <li class="link">
                                <a href="classes/PermissionTimestamps1655765304532.html" data-type="entity-link" >PermissionTimestamps1655765304532</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReadPermissionPolicyHandler.html" data-type="entity-link" >ReadPermissionPolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReadRolePolicyHandler.html" data-type="entity-link" >ReadRolePolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleDto.html" data-type="entity-link" >RoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleMigration165550928088.html" data-type="entity-link" >RoleMigration165550928088</a>
                            </li>
                            <li class="link">
                                <a href="classes/RolePermissionsSeed1655595255331.html" data-type="entity-link" >RolePermissionsSeed1655595255331</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleSeed1655509280886.html" data-type="entity-link" >RoleSeed1655509280886</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenDto.html" data-type="entity-link" >TokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionPolicyHandler.html" data-type="entity-link" >UpdatePermissionPolicyHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRolePolicyHandler.html" data-type="entity-link" >UpdateRolePolicyHandler</a>
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
                            <li class="link">
                                <a href="interfaces/PageMetaDtoParameters.html" data-type="entity-link" >PageMetaDtoParameters</a>
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