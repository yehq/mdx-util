const is = require('unist-util-is');

const playgroundName = 'Playground';
const isPlayground = (name) => name === playgroundName;


module.exports = () => (tree) => {
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
        node.value = node.value.replace(
            tagOpen,
            `<${name} code={"${content}"}`
        )
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
    const regExp = new RegExp(`<${playgroundName}[^>]*>([\\s\\S]*)<\\/${playgroundName}[^>]*>`);
    const match = value.match(regExp);
    return match && match[1];
}