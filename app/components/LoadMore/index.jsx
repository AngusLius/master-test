import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    loadMoreHandle() {
        this.props.loadMoreFn()
    }
    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn,
            wrapper = this.refs.wrapper
        let timeoutId
        function callback() {
            let top = wrapper.getBoundingClientRect().top,
                windowHeight = window.screen.height
            if(top && top < windowHeight - 10) {
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function () {
            if(this.props.isLoadingMore) {
                return
            }
            if(timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), true)
    }
}

export default LoadMore
