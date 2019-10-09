import React, {Component} from 'react';

class NameComponent extends Component {
    componentDidMount() {
        console.log('Name Component Mounted from Component Library');
    }

    render() {
        
        return(
            <div>
                <p>Victor</p>
            </div>
        )
    }
}

export default NameComponent