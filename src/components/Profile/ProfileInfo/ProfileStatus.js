import React from "react";
import {Field, reduxForm} from "redux-form";

class ProfileStatus extends React.Component{

    onSubmit = (values) => {

    }

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (

            <div>

                {/*<ProfileReduxForm onSubmit={this.onSubmit} />*/}

                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.state.status || "999"} </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>

                </div>
                }
            </div>
        )}
}

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.state.status || "999"} </span>
            </div>
            }
            {this.state.editMode &&
            <div>
                {/*<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}*/}
                {/*       value={this.state.status}/>*/}
                {/*<Field component={"input"} name={"newStatus"} placeholder={props.state.status}/>*/}
            </div>
            }
        </form>
    )
}

const ProfileReduxForm = reduxForm ({
    form: 'profileForm'
})(ProfileForm);

export default ProfileStatus;

// <Field onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>

// <div>
//
//     {/*<ProfileReduxForm onSubmit={this.onSubmit} />*/}
//
//     {!this.state.editMode &&
//     <div>
//         <span onDoubleClick={this.activateEditMode}>{this.state.status || "999"} </span>
//     </div>
//     }
//     {this.state.editMode &&
//     <div>
//         <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
//                value={this.state.status}/>
//
//     </div>
//     }
// </div>