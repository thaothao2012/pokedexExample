import React, {Component} from 'react';

class Star extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    handleOnclick = (n) => {
        document.getElementById("MyElement").className = 'rate';
        for(let i=1; i<= n; i++){
            document.getElementById("MyElement").className += ` star-${i}`;
        }
    }
    render() {
        return (
            <div id='MyElement' className='rate'>
                <i onClick={() => this.handleOnclick(1)}/>
                <i onClick={() => this.handleOnclick(2)}/>
                <i onClick={() => this.handleOnclick(3)}/>
                <i onClick={() => this.handleOnclick(4)}/>
                <i onClick={() => this.handleOnclick(5)}/>
            </div>
        );
    }
}

export default Star;