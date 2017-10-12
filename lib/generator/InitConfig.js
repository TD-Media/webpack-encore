/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

class InitConfig {
    constructor(projectPath) {
        this._projectPath = projectPath;
        this._isSpa = null;
        this._jsType = null;
        this._cssType = null;
    }

    get projectPath() {
        return this._projectPath;
    }

    set projectPath(value) {
        this._projectPath = value;
    }

    get isSpa() {
        return this._isSpa;
    }

    set isSpa(value) {
        this._isSpa = value;
    }

    get jsType() {
        return this._jsType;
    }

    set jsType(value) {
        this._jsType = value;
    }

    get cssType() {
        return this._cssType;
    }

    set cssType(value) {
        this._cssType = value;
    }
}

InitConfig.jsTypeVanilla = 'JS_TYPE_VANILLA';
InitConfig.jsTypeReact = 'JS_TYPE_REACT';
InitConfig.jsTypeVue = 'JS_TYPE_VUE';

InitConfig.cssTypeCss = 'CSS_TYPE_CSS';
InitConfig.cssTypeSass = 'CSS_TYPE_SASS';
InitConfig.cssTypeLess = 'CSS_TYPE_LESS';

module.exports = InitConfig;