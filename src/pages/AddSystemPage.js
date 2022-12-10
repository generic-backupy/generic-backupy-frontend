import React from 'react';

function AddSystemPage() {
    return (
        <>
            <h1>Add New System</h1>
            <form>
                <label>
                    Name:
                    <input type="text" />
                </label>
                <label>
                    Description:
                    <textarea />
                </label>
                <label>
                    Host:
                    <input type="text" />
                </label>
                <label>
                    Created By:
                    <input type="text" />
                </label>
                <input type="submit" value="Submit" />
            </form>

        </>
    );
};

export default AddSystemPage;
