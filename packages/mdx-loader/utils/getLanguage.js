const alias = {
    'js': 'jsx',
    'html': 'markup',
}

function getLanguage(className = [], aliases = alias) {
    for (const classListItem of className) {
        if (classListItem.slice(0, 9) === 'language-') {
            let language = classListItem.slice(9).replace(/{.*/, '');
            let alias = aliases[language]
            return alias || language
        }
    }

    return null;
}

module.exports = getLanguage;
