// 作用：菜谱详情组件，依据动态参数id展示对应菜谱的详情信息
import React, { Component } from 'react';
import { DetailNav, Content, Taste } from './style';
// 引入路由
import Req from '@/http/request';
import { DETAIL } from '@/config/uri';
import { withRouter } from 'react-router-dom';

import back from '@/assets/icon/left.png';
import { Button } from 'antd-mobile';

class Detail extends Component {
    state = {
        data: [],
    };

    render() {
        return (
            <>
                {this.state.data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            style={{ height: '100vh', overflowX: 'hidden' }}>
                            <DetailNav>
                                <img
                                    src={back}
                                    alt=""
                                    style={{
                                        width: 25,
                                        height: 23,
                                        position: 'absolute',
                                        left: 7,
                                        top: 9,
                                    }}
                                    onClick={this.goBack.bind(this)}
                                />
                                {this.props.location.state.name}
                            </DetailNav>
                            <img
                                src={this.props.location.state.img}
                                alt=""
                                style={{
                                    width: '100%',
                                    height: 230,
                                    marginTop: 40,
                                }}
                            />
                            <Content>
                                <h1>{this.props.location.state.name}</h1>
                                <p>
                                    {this.props.location.state.all_click}
                                    浏览 &emsp;
                                    {this.props.location.state.favorites}
                                    收藏
                                </p>
                                <Button
                                    type="primary"
                                    inline
                                    style={{
                                        width: 150,
                                        background: '#ff6c0c',
                                    }}>
                                    收藏
                                </Button>
                            </Content>
                            <Taste>
                                <h2>心得：</h2>
                                <p>{item.info}</p>
                            </Taste>
                            <Taste>
                                <h2>做法：</h2>
                                {item.makes.map((v, k) => {
                                    return (
                                        <p key={k}>
                                            <em
                                                style={{
                                                    display: 'block',
                                                    marginBottom: 10,
                                                    marginTop: 10,
                                                }}>
                                                {v.num}. {v.info}
                                            </em>

                                            <img src={v.img} alt="" />
                                        </p>
                                    );
                                })}
                            </Taste>
                            <Taste>
                                <h2>养生必读：</h2>
                                <p>{item.health_str}</p>
                            </Taste>
                            <Taste>
                                <h2>用料：</h2>
                                {item.burden.map((vv, kk) => {
                                    return (
                                        <span key={kk}>
                                            <i>{vv.name}</i>
                                            {vv.content}
                                        </span>
                                    );
                                })}
                            </Taste>
                        </div>
                    );
                })}
            </>
        );
    }

    goBack() {
        this.props.history.go(-1);
    }

    async componentDidMount() {
        try {
            let ret = await Req.get(DETAIL);
            if (ret.data.ret === true) {
                this.setState(() => {
                    return {
                        data: [ret.data.data],
                    };
                });
            }
        } catch (error) {}
    }
}

export default withRouter(Detail);
