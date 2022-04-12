import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)

    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    // const componentDidUpdate = (prevProps, prevState, snapshot) => {
    //     if (prevProps.status !== status) {
    //         setStatus(status);
    //     }
    // }

        return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode} >
                            {status || "999"}
                        </span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode}/>
                    </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks;
