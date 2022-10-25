module.exports={
    "source": ['./platforms/tokens.json'],

    "platforms": {
      "css": {
        "transforms": ["attribute/cti", "name/cti/kebab", "time/seconds", "content/icon", "lineHeight/px","fontSize/px", "color/hex"],
        // "prefix": "sd",
        "buildPath": "platforms/css/",
        "files": [
          {
            "destination": "colors.css",
            "format": "css/variables",
            "filter": {
              "attributes": { category: 'colors'},
            },
            "options": {
              "outputReferences": true
            }
          },
          {
            "destination": "font.css",
            "format": "css/variables",
            "options": {
              "outputReferences": true
            },
            "filter": {
              "attributes": { category: 'typography'},
            },
          },
        ]
      },
      "js": {
        "transformGroup": "js",
        "buildPath": "platforms/js/",
        "files": [
          {
            "destination": "colors.js",
            "format": "javascript/es6",
            "filter": {
            "attributes": { category: 'colors' },
          },
          "options": {
            "outputReferences": true
          }
          },
          {
            "destination": "font.js",
            "format": "javascript/module",
            "filter": {
            "attributes": { category: 'typography' },
          },
          "options": {
            "outputReferences": true
          }
          },
          {
            "destination": "fontStyle.js",
            "format": "javascript/module",
            "filter": {
            "attributes": { category: 'fontStyle' },
          },
          "options": {
            "outputReferences": true
          }
          },
        ]
      },
    }
  }