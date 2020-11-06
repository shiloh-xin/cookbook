import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import Request from '@/http/request';
import { LIST } from '@/config/uri';

class Index extends Component {
    state = {
        data: [],
    };

    async componentDidMount() {
        try {
            let ret = await Request.get(LIST);
            if (ret.data.ret === true) {
                this.setState(() => {
                    return {
                        data: ret.data.data,
                    };
                });
            }
        } catch (error) {}
    }

    render() {
        return (
            <>
                <div
                    style={{
                        color: '#AAAAAA',
                        marginLeft: 15,
                        marginTop: 10,
                        marginBottom: 10,
                        fontSize: 16,
                    }}>
                    精品好菜
                </div>
                <Grid
                    data={this.state.data}
                    columnNum={2}
                    onClick={this.clickHandler.bind(this)}
                    renderItem={dataItem => (
                        <div>
                            <img
                                src={dataItem.img}
                                style={{ width: '160px', height: '120px' }}
                                alt=""
                            />
                            <div
                                style={{
                                    color: '#000',
                                    fontSize: '15px',
                                    marginTop: '5px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                }}>
                                <span>{dataItem.name}</span>
                                <p style={{ fontSize: 1, color: '#888' }}>
                                    <span>{dataItem.all_click}浏览</span>
                                    &nbsp;&nbsp;&nbsp;
                                    <span>{dataItem.favorites}收藏</span>
                                </p>
                            </div>
                        </div>
                    )}
                />
            </>
        );
    }
    clickHandler(el) {
        console.log(el);
    }
}

export default Index;
