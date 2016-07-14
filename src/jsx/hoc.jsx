define((require, exports, module) => {
    const React = require('react'),
          Reflux = require('reflux');
    const TableStore = require('stores/tableStore');

    return (Wraper) => class Hoc extends React.Component {
        constructor(props) {
            super(props);

            // this.state = {data: [{"id": 1, "name": "xuwb"}, 
            //                    {"id": 2, "name": "jack"}, 
            //                    {"id": 3, "name": "tom"}, 
            //                    {"id": 4, "name": "bean"}]};
            this.store = Reflux.connect(TableStore, 'data');
        }
        componentDidMount() {
            // return this.store.componentDidMount
        }
        render() {
            return <Wraper {...this.props} {...this.state} />
        }
    }
})