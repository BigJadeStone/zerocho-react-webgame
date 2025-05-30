import React, {Component} from 'react';

class ResponseCheckClass extends Component {
    state = {
        state: 'waithing',
        message: '클릭해서 시작하세요.',
        result: [],
    }

    renderAverage = () => {
        return this.state.result.length > 0 &&
            <div>평균 시간 : {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>
    }

    render() {
        const { state, message } = this.state;
        return (
            <>
                <div
                    id="screen"
                    className={state}
                    onClick={this.onClickScreen}
                >
                    {message}
                </div>
                {this.renderAverage()}
            </>
        )
    }

}

export default ResponseCheckClass;