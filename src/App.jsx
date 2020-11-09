import React, { Component } from 'react';

// 导入布局文件(底部导航)
import Layout from '@/components/Layout';
// 引入全局样式
import GlobalStyle from './style';
// 引入路由组件
import { Route, Switch } from 'react-router-dom';
import Detail from '@/components/GoodCook/Detail';
import SearchList from '@/components/Search/SearchList';

class App extends Component {
    render() {
        return (
            <>
                {/* 全局样式使用 */}
                <GlobalStyle />
                <Switch>
                    {/* 布局文件使用 */}
                    {/* <Layout></Layout> */}
                    {/* react路由默认是模糊匹配，只要匹配上前面的一部分就认为是匹配上了,exact:精确匹配 */}
                    <Route path="/" exact component={Layout}></Route>
                    {/* 路由规则 */}
                    <Route path="/cb_detail/:id" component={Detail}></Route>
                    {/* 搜索列表 */}
                    <Route path="/searchList" component={SearchList}></Route>
                </Switch>
            </>
        );
    }
}

export default App;
