import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

class Index extends Component {
    render() {
        return (
            <>
                <SearchBar
                    placeholder="想吃什么搜这里，如：小鸡炖蘑菇"
                    maxLength={20}
                />
            </>
        );
    }
}

export default Index;
