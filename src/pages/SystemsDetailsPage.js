import React, {useState} from 'react';

function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function SystemsDetailsPage() {
    const [isEditing, setIsEditing] = useState(false);

    const systemId = getIdNumber();
    if (isNaN(systemId)) {
        return (
            <h1>Invalid Page</h1>
        );
    }

    let system = {name: "a name", description: "a description", host: "a host", createdBy: "a createdby value"}; //TODO: get this from a backend API call

    const displayDetails = () => {
        return <>
            <div>{"Description: "+ system.description}</div>
            <div>{"Host: " + system.host}</div>
            <div>{"CreatedBy: " + system.createdBy}</div>

            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button>Delete</button>
        </>;
    };

    const editingForm = () => {
        return <>
            <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
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
        </>;
    };

    return (
        <>
            <h1>{system.name}</h1>

            {isEditing ? editingForm() : displayDetails()}

        </>
    );
};

export default SystemsDetailsPage;
