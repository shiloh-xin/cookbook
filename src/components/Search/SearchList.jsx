import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '@/store/actions/action_search';
import { withRouter } from 'react-router-dom';
// 引入请求需要的信息
import Req from '@/http/request';
import { GOODCOOK } from '@/config/uri';
// 样式组件
import { Content } from './style';
import back from '@/assets/icon/left.png';
import { SearchBar, NavBar, Icon } from 'antd-mobile';

class SearchList extends Component {
    state = {
        list: [],
    };

    constructor(props) {
        super(props);
        this.child = createRef();
    }

    render() {
        return (
            <>
                <div style={{ height: '100vh', overflowX: 'hidden' }}>
                    <NavBar
                        mode="light"
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[]}
                        style={{
                            background: '#ff6c0c',
                            position: 'fixed',
                            width: '100%',
                        }}>
                        <SearchBar
                            defaultValue={this.props.search}
                            placeholder="想吃什么搜这里"
                            maxLength={20}
                            onSubmit={this.submit.bind(this)}
                            ref={this.child}
                            style={{
                                width: 270,
                                height: 30,
                                borderRadius: 5,
                                marginRight: 7,
                                background: '#ff6c0c',
                            }}
                        />
                        <button
                            style={{
                                background: '#ff6c0c',
                                border: 0,
                                outline: 'none',
                                color: '#fff',
                                fontSize: 16,
                            }}
                            onClick={this.clickHandler.bind(this)}>
                            搜索
                        </button>
                    </NavBar>

                    <img
                        src={back}
                        alt=""
                        style={{
                            width: 25,
                            height: 23,
                            position: 'absolute',
                            left: 2,
                            top: 10,
                        }}
                        onClick={this.goBack.bind(this)}
                    />

                    <Content>
                        {this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={item.img} alt="" />
                                    <div>
                                        <h1>{item.name}</h1>
                                        <h2>{item.burdens}</h2>
                                        <section>
                                            {item.all_click}浏览&emsp;
                                            {item.favorites}收藏
                                        </section>
                                    </div>
                                </li>
                            );
                        })}
                    </Content>
                </div>
            </>
        );
    }
    async componentDidMount() {
        try {
            let ret = await Req.get(GOODCOOK + '?keyword=' + this.props.search);
            if (ret.data.code === 0) {
                this.setState(() => {
                    return {
                        list: ret.data.data,
                    };
                });
            }
        } catch (error) {}
    }
    goBack() {
        this.props.history.go(-1);
    }
    async submit(val) {
        let ret = await Req.get(GOODCOOK + '?keyword=' + val);
        if (ret.data.code === 0) {
            this.setState(() => {
                return {
                    list: ret.data.data,
                };
            });
        }
    }
    async clickHandler() {
        let value = this.child.current.state.value;
        let ret = await Req.get(GOODCOOK + '?keyword=' + value);
        if (ret.data.code === 0) {
            this.setState(() => {
                return {
                    list: ret.data.data,
                };
            });
        }
    }
}

const mapStateToProps = state => {
    return {
        search: state.get('reducer_search').get('search'),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitHandler(keyword) {
            dispatch(actions.actionCreator(keyword));
        },
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchList)
);
