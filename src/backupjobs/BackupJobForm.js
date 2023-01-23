import React, { useState, useEffect } from 'react';
import SelectFromList from "../components/SelectFromList"
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function BackupJobForm( { isAdd, token } ) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [info, setInfo] = useState("");
    const [chosenSystemId, setChosenSystemId] = useState("1");
    const [chosenBackupModuleId, setChosenBackupModuleId] = useState("1");
    const [chosenStorageModuleIds, setChosenStorageModuleIds] = useState([]);

    const [systemSelect, setSystemSelect] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8005/api/v1/systems/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => response.json())
        .then(json => {setSystemSelect(<SelectFromList itemLabel="Select"
            items={json.results}
            selectedValueId={chosenSystemId}
            setSelectedValueId={setChosenSystemId}/>);
        })
        .catch(error => console.error(error));
    }, [token, chosenSystemId]);


    const [backupModuleSelect, setBackupModuleSelect] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8005/api/v1/backup-modules/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => response.json())
        .then(json => {setBackupModuleSelect(<SelectFromList itemLabel="Backup Modules"
            items={json.results}
            selectedValueId={chosenBackupModuleId}
            setSelectedValueId={setChosenBackupModuleId}/>);
        })
        .catch(error => console.error(error));
    }, [token, chosenBackupModuleId]);


    const [storageModulesSelect, setStorageModulesSelect] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8005/api/v1/storage-modules/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => response.json())
        .then(json => {setStorageModulesSelect(<SelectFromList itemLabel="Storage Modules"
            items={json.results}
            selectedValueId={chosenStorageModuleIds}
            setSelectedValueId={setChosenStorageModuleIds}
            allowMultiple={true}/>);
        })
        .catch(error => console.error(error));
    }, [token, chosenStorageModuleIds]);


    const handleAddSubmit = (event) => {
        event.preventDefault();

        const newBackupJob = {
            "name": name,
            "description": description,
            "additional_information": info,
            "system": chosenSystemId,
            "backup_module": chosenBackupModuleId,
            "storage_modules": chosenStorageModuleIds
        }

        fetch('http://localhost:8005/api/v1/backup-jobs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
            body: JSON.stringify(newBackupJob)
        })
        .then(response => {
            if (response.ok) {
                alert("Successfully added new Backup Job");
                return response.json()
            }
        })
        .then(json => console.log(json))
        .catch( error => console.error(error));
    };


    const handleUpdateSubmit = () => {
        //TODO: Call backend (waiting on backend to implement)
        alert("Implement API call to update this Backup Job");
    };

    function onNameChange(e) {setName(e.target.value)};
    function onDescriptionChange(e) {setDescription(e.target.value)};
    function onInfoChange(e) {setInfo(e.target.value)};

    return (
        <>
            <Form onSubmit={isAdd ? handleAddSubmit : handleUpdateSubmit}>
                <FormGroup>
                    <Label className='col-sm-2'>
                        Name:
                    </Label>
                    <Input className='col-sm-10' type="text" onChange={onNameChange} />
                </FormGroup>

                <FormGroup>
                    <Label className='col-sm-2'>
                        Description:
                    </Label>
                    <Input className='col-sm-10' type="textarea" onChange={onDescriptionChange} />
                </FormGroup>

                <FormGroup className='form-group'>
                    <Label>
                        Additional Information:
                    </Label>
                    <Input className='col-sm-10' type="textarea" onChange={onInfoChange} />
                </FormGroup>

                <FormGroup>
                    {systemSelect}
                </FormGroup>

                <FormGroup>
                    {backupModuleSelect}
                </FormGroup>

                <FormGroup>
                    {storageModulesSelect}
                </FormGroup>

                <Button type="submit">Submit</Button>
            </Form>

        </>
    );
}

BackupJobForm.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  token: PropTypes.string
}

export default BackupJobForm;
