import React from 'react';

function AddSystemPage() {
    return (
        <>
            <h1>Add New System</h1>
            <form>
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
                <input type="submit" value="Submit" />
            </div>
            </form>

        </>
    );
};

export default AddSystemPage;
