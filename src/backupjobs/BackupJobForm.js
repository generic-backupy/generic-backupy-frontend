import React from 'react';
import SelectFromList from "../components/SelectFromList"

// props expected contents
// function: handleSubmit

function BackupJobForm(props) {

    //TODO: get the list of the available systems from the API
    let systems = ["System 1", "System 2"];

    //TODO: get the list of the available backupModules from the API
    let backupModules = ["Backup Module 1", "Backup Module 2"];

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
            <div>
                <SelectFromList itemType="System" items={systems} />
            </div>
            <div>
                <SelectFromList itemType="Backup Modules" items={backupModules} />
            </div>

            <input type="submit" value="Submit" />
            </form>

        </>
    );
}

export default BackupJobForm;
