import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import List from './subpage/List'
import SearchHeader from '../../components/SearchHeader'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <List keyword={params.keyword} category={params.category} />
            </div>
        )
    }
}

module.exports = Search