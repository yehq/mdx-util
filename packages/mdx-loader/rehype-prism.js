/*
Used under license from Mapbox
https://github.com/mapbox/rehype-prism/blob/master/LICENSE
*/

const visit = require('unist-util-visit');
const nodeToString = require('hast-util-to-string');
const nodeToHTML = require('hast-util-to-html');
const refractor = require('refractor');
const getLanguage = require('./utils/getLanguage');

module.exports = options => {
  options = options || {};

  return tree => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return;
    }

    const lang = getLanguage(node.properties.className, options.aliases);

    if (lang === null) {
      return;
    }

    let result = node;
    try {
      parent.properties.className = (parent.properties.className || [])
        .concat('language-' + lang);
      result = refractor.highlight(nodeToString(node), lang);
    } catch (err) {
      if (/Unknown language/.test(err.message)) {
        return;
      }
      throw err;
    }

    node.children = []
    node.properties.dangerouslySetInnerHTML = {
      __html: nodeToHTML({
        type: "root",
        children: result
      })
    };
  }
};

