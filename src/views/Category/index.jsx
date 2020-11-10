import React, { Component } from 'react';

import Cate1 from './Cate1';
import Cate2 from './Cate2';
import { HeaderContainer } from './style';

import { SearchBar } from 'antd-mobile';

class Index extends Component {
    state = {
        // 滑块的控制，slider表示选第一个分类，slider right表示选第二个分类
        slider: 'slider',
        // 用户控制选中元素的样式
        classList: ['active', ''],
        // 控制子组件显示哪一个
        flag: true,
    };

    clickHandler(index) {
        // 修改滑块的位置 slider
        let slider = index === 0 ? 'slider' : 'slider right';
        // 修改默认选中的效果 classList
        let classList = index === 0 ? ['active', ''] : ['', 'active'];
        // 默认展示的子组件 flag  true=cate1 false=cate2
        let flag = index === 0 ? true : false;
        this.setState(() => {
            return {
                slider,
                classList,
                flag,
            };
        });
    }

    render() {
        return (
            <>
                <HeaderContainer>
                    <ul>
                        <li
                            className={this.state.classList[0]}
                            onClick={this.clickHandler.bind(this, 0)}>
                            分类
                        </li>
                        <li
                            className={this.state.classList[1]}
                            onClick={this.clickHandler.bind(this, 1)}>
                            食材
                        </li>
                        <li className={this.state.slider}></li>
                    </ul>
                </HeaderContainer>
                <SearchBar
                    placeholder="想吃什么搜这里，如：排骨"
                    maxLength={20}
                    style={{ top: 45 }}
                />
                {/* 具体的显示内容 */}
                {this.state.flag && <Cate1></Cate1>}
                {!this.state.flag && <Cate2></Cate2>}
            </>
        );
    }
}

export default Index;
