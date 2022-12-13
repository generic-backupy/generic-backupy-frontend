import React from 'react';

// props expected contents
// function: handleSubmit

function StorageModuleForm(props) {

    return (
        <>
            <form onSubmit={props.handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea />
                </label>
            </div>
            <div>
                <label>
                    Additional Info:
                    <input type="text" />
                </label>
            </div>

            <input type="submit" value="Submit" />
            </form>

        </>
    );
}

export default StorageModuleForm;
