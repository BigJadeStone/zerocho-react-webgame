import React, {PureComponent} from 'react';

class RenderTest extends PureComponent {
    state = {
        counter: 0,
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (this.state.counter !== nextState.counter) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    onClick = () => {
        this.setState({});
    }

    render() {
        console.log('렌더링', this.state);
        return (
            <button onClick={this.onClick}>클릭</button>
        )
    }

}

export default RenderTest;