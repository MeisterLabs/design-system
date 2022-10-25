const StyleDictionary = require('style-dictionary').extend('platforms/config.js');

StyleDictionary.registerTransform({
  name: 'lineHeight/px',
  type: 'value',
  matcher: function(prop) {
    // You can be more specific here if you only want 'em' units for font sizes    
    return prop.attributes.type === 'lineHeight';
  },
  transformer: function(prop) {
    // You can also modify the value here if you want to convert pixels to ems
    return parseFloat(prop.original.value) + 'px';
  }
});

StyleDictionary.registerTransform({
  name: 'fontSize/px',
  type: 'value',
  matcher: function(prop) {
    // You can be more specific here if you only want 'em' units for font sizes    
    return prop.attributes.type === 'fontSize';
  },
  transformer: function(prop) {
    // You can also modify the value here if you want to convert pixels to ems
    return parseFloat(prop.original.value) + 'px';
  }
});

StyleDictionary.buildAllPlatforms();

