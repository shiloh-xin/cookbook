import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '@/store/actions/action_search';

class Index extends Component {
    render() {
        return (
            <>
                <SearchBar
                    placeholder="想吃什么搜这里，如：小鸡炖蘑菇"
                    maxLength={20}
                    onSubmit={this.submit}
                />
            </>
        );
    }
    submit = val => {
        this.props.submitHandler(val);
        this.props.history.push({
            pathname: '/searchList',
        });
    };
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
