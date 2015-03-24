/* jshint ignore:start */
import ComponentRegistry from '../component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from SoyComponent.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.SoyComponent.
 * @hassoydeltemplate {Component}
 * @hassoydeltemplate {ComponentChildren}
 * @hassoydelcall {ComponentTemplate}
 */

if (typeof Templates.SoyComponent == 'undefined') { Templates.SoyComponent = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.SoyComponent.component = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('ComponentTemplate'), opt_data.componentName, true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.SoyComponent.component.soyTemplateName = 'Templates.SoyComponent.component';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.SoyComponent.__deltemplate_s4_0084916f = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Templates.SoyComponent.component(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.SoyComponent.__deltemplate_s4_0084916f.soyTemplateName = 'Templates.SoyComponent.__deltemplate_s4_0084916f';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('Component'), '', 0, Templates.SoyComponent.__deltemplate_s4_0084916f);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.SoyComponent.__deltemplate_s6_26860e4b = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-children-placeholder" data-component-children="">' + soy.$$escapeHtml(opt_data.children) + '</div>');
};
if (goog.DEBUG) {
  Templates.SoyComponent.__deltemplate_s6_26860e4b.soyTemplateName = 'Templates.SoyComponent.__deltemplate_s6_26860e4b';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentChildren'), '', 0, Templates.SoyComponent.__deltemplate_s6_26860e4b);

/* jshint ignore:end */
