import React from 'react';

// props expected contents
// function: handleSubmit

function SystemForm(props) {
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
                    Host:
                    <input type="text" />
                </label>
            </div>

            <input type="submit" value="Submit" />
            </form>

        </>
    );
}

export default SystemForm;
