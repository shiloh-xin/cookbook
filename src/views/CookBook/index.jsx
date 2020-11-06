// 作用：包裹当前菜谱菜单中显示页面中的所有的子组件或内容
import React, { Component } from 'react';
// 引入当前组件中需要的子组件
import HeaderNav from '@/components/HeaderNav';
import Swiper from '@/components/Swiper';

class Index extends Component {
    render() {
        return (
            <>
                {/* 顶部导航 */}
                <HeaderNav></HeaderNav>
                {/* 轮播图 */}
                <Swiper />
            </>
        );
    }
}

export default Index;
