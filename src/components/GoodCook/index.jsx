import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// 引入样式
import { Title, Item, Dl, Dd } from './style';
// 引入请求需要的信息
import Req from '@/http/request';
import { GOODCOOK } from '@/config/uri';

class Index extends Component {
    state = {
        list: [],
    };

    render() {
        return (
            <>
                <Title>精品好菜</Title>
                <Item>
                    {this.state.list.map((item, index) => {
                        return (
                            <Dl
                                key={item.id}
                                onClick={this.goDetail.bind(
                                    this,
                                    item.id,
                                    item.name,
                                    item.all_click,
                                    item.favorites,
                                    item.img
                                )}>
                                <dt>
                                    <img src={item.img} />
                                </dt>
                                <Dd>
                                    <h3>{item.name}</h3>
                                    <p>
                                        {item.all_click}浏览&emsp;
                                        {item.favorites}收藏
                                    </p>
                                </Dd>
                            </Dl>
                        );
                    })}
                </Item>
            </>
        );
    }
    goDetail(id, name, all_click, favorites, img) {
        // 跳转到对应的详情页面
        this.props.history.push({
            pathname: '/cb_detail/' + id,
            state: {
                name: name,
                all_click: all_click,
                favorites: favorites,
                img: img,
            },
        });
    }

    async componentDidMount() {
        try {
            let ret = await Req.get(GOODCOOK);
            if (ret.data.code === 0) {
                this.setState(() => {
                    return {
                        list: ret.data.data,
                    };
                });
            }
        } catch (error) {}
    }
}

export default withRouter(Index);
