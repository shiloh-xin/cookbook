// commonJS模块化
// json-server配置文件
const swiper = require('./cb-swiper.json');
const hotcat = require('./cb-hotcat.json');
const detail = require('./cb-detail.json');

// 导入
module.exports = () => ({
    swiper,
    hotcat,
    detail,
});
