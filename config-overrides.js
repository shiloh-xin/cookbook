const {
    override,
    disableEsLint,
    addWebpackAlias,
    fixBabelImports,
} = require('customize-cra');
const path = require('path');

module.exports = override(
    // 在webpack中禁用eslint
    disableEsLint(),

    // 添加webpack别名
    addWebpackAlias({
        ['@']: path.resolve('./src'),
    }),

    // 添加针对antd-mobile的按需导入
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    })
);
