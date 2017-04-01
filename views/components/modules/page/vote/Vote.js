export default class Vote extends React.Component {
    componentDidMount() {
        const { getData } = this.props.pageActions;
        getData();
    }

    componentDidUpdate() {
        let render = this.props.data.render;
        const { getData } = this.props.pageActions;

        if (!render) {
            getData();
        }
    }

    render() {
        const { selectData } = this.props.pageActions;
        const { data, render } = this.props.data;
        let result;
        if (data.length !== 0) {
            result = data.splice(-2, 2).map((item, index) => {
                return (
                    <div key={index} onClick={() => {selectData(item)}} className={index % 2 === 0 ? 'vote__item vote__item_left' : 'vote__item vote__item_right'}>
                        {item.language}
                    </div>
                )
            });
        }
        return (
            <div className='main'>
                <div className='vote'>
                    {result}
                </div>
            </div>
        );
    }
}

Vote.propTypes = {
    pageActions: React.PropTypes.object,
    getData: React.PropTypes.func,
    data: React.PropTypes.object
};
