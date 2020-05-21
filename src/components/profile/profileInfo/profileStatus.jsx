import React from 'react';
import s from './profileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })                                      // в setState передали объект 

    }

    deactivateEditMode = () => {
        this.setState(state => state.editMode = false) // в setState передали функцию
        this.props.updateStatus({ status: this.state.status });
    }

    onStatusChange = (e) => {
        this.setState({
            ...this.state,
            status: e.target.value
        })
        
        
    }

    render() {
        return (

            <div className={s.status}>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode} > {this.props.status || '---'}</span>
                    </div>
                    : <div>
                        <input
                            autoFocus
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                            onChange={this.onStatusChange}
                        />
                    </div>
                }


            </div>

        )
    }
}

export default ProfileStatus;