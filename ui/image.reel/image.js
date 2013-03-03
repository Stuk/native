/**
    @module "montage/ui/native/image.reel"
    @requires montage/ui/component
    @requires montage/ui/native-control
*/
var Montage = require("montage").Montage,
    Component = require("ui/component").Component,
    NativeControl = require("ui/native-control").NativeControl;

/**
 * Wraps the a &lt;img> element with binding support for its standard attributes.
   @class module:"montage/ui/native/image.reel".Image
   @extends module:montage/ui/native-control.NativeControl
 */
var Image = exports.Image = Montage.create(NativeControl, {

});

Image.addAttributes(/** @lends module:"montage/ui/native/image.reel".Image */{

/**
    A text description to display in place of the image.
    @type {string}
    @default null
*/
        alt: null,

/**
    The height of the image in CSS pixels.
    @type {number}
    @default null
*/
        height: null,

/**
    The URL where the image is located.
    @type {string}
    @default null
*/
        src: null,

/**
    The width of the image in CSS pixels.
    @type {number}
    @default null
*/
        width: null
});
