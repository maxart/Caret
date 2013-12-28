/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

ace.define('ace/theme/spacegrey_light', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-spacegrey-light";
exports.cssText = ".ace-spacegrey-light .ace_gutter{background:#EFF1F5;color:#9FA6AD}.ace-spacegrey-light .ace_print-margin{width:1px;background:#e8e8e8}.ace-spacegrey-light{background-color:#eff1f5;color:#4f5b66}.ace-spacegrey-light .ace_cursor{color:#4f5b66}.ace-spacegrey-light .ace_marker-layer .ace_selection{background:#c3c6cb}.ace-spacegrey-light.ace_multiselect .ace_selection.ace_start{box-shadow:0 0 3px 0 #eff1f5;border-radius:2px}.ace-spacegrey-light .ace_marker-layer .ace_step{background:#c6dbae}.ace-spacegrey-light .ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px;border:1px solid #dfe1e8}.ace-spacegrey-light .ace_marker-layer .ace_active-line{background:#dfe1e8}.ace-spacegrey-light .ace_gutter-active-line{background-color:#dfe1e8}.ace-spacegrey-light .ace_marker-layer .ace_selected-word{border:1px solid #dfe1e8}.ace-spacegrey-light .ace_fold{background-color:#8fa1b3;border-color:#4f5b66}.ace-spacegrey-light .ace_indent-guide{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHjy8NJ/AAjgA5fzQUmBAAAAAElFTkSuQmCC) right repeat-y}.ace-spacegrey-light .ace_keyword{color:#b48ead}.ace-spacegrey-light .ace_keyword.ace_operator{color:#4f5b66}.ace-spacegrey-light .ace_constant,.ace-spacegrey-light .ace_constant.ace_numeric,.ace-spacegrey-light .ace_keyword.ace_other.ace_unit{color:#d08770}.ace-spacegrey-light .ace_constant.ace_character.ace_escape,.ace-spacegrey-light .ace_support.ace_function{color:#96b5b4}.ace-spacegrey-light .ace_support.ace_class{color:#d08770}.ace-spacegrey-light .ace_storage{color:#b48ead}.ace-spacegrey-light .ace_invalid.ace_illegal{color:#eff1f5;background-color:#bf616a}.ace-spacegrey-light .ace_string{color:#a3be8c}.ace-spacegrey-light .ace_string.ace_regexp{color:#96b5b4}.ace-spacegrey-light .ace_comment{color:#a7adba}.ace-spacegrey-light .ace_variable{color:#bf616a}.ace-spacegrey-light .ace_meta.ace_selector{color:#b48ead}.ace-spacegrey-light .ace_entity.ace_other.ace_attribute-name{color:#d08770}.ace-spacegrey-light .ace_entity.ace_name.ace_function{color:#8fa1b3}.ace-spacegrey-light .ace_entity.ace_name.ace_tag,.ace-spacegrey-light .ace_markup.ace_list{color:#bf616a}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});