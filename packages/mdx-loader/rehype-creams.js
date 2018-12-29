const is = require('unist-util-is');
const refractor = require('refractor');
const nodeToHTML = require('hast-util-to-html');
const getLanguage = require('./utils/getLanguage');

const playgroundName = 'Playground';
const isPlayground = (name) => name === playgroundName;


module.exports = (options) => {
    options = options || {};
    return (tree) => {
        const nodes = tree.children
            .filter((node) => is('jsx', node))
            .map(addComponentsProps)

        return Promise.all(nodes).then(() => tree)

    }

    // 给 jsx 标签 添加 code 属性
    function addComponentsProps(node, index) {
        const componentName = getComponentName(node.value);
        if (isPlayground(componentName)) {
            const tagOpen = new RegExp(`^\\<${componentName}`);
            const content = getPlaygroundChildren(node.value);
            const lang = getLanguage(['language-js'], options.aliases);
            const highlightContent = refractor.highlight(content, lang);
            const result = nodeToHTML({
                type: "root",
                children: highlightContent
            })
            console.log('===', result, '===')
            node.value = node.value.replace(
                tagOpen,
                `<${componentName} code={\`${result}\`}`
            )
        }
    }
}


/**
 * 获得组件名称
 * @param {string} value 
 */
function getComponentName(value) {
    const match = value.match(/^\<\\?(\w+)/)
    return match && match[1];
}

/**
 * 获得 Playground 标签中的内容
 * <Playground>content</Playground> ==> content
 * @param {string} value 
 */
function getPlaygroundChildren(value) {
    const regExp = new RegExp(`<${playgroundName}[^>]*>\\s*\\n?([\\s\\S]*)\\n?<\\/${playgroundName}[^>]*>`);
    const match = value.match(regExp);
    return match && match[1];
}