import React, {useState, useEffect} from 'react';
import BackupJobForm from "./BackupJobForm";
import { Button, Container, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function getIdNumber() {
    let idPosition = 1 + window.location.pathname.lastIndexOf("/");
    return Number(window.location.pathname.substring(idPosition));
}

function BackupJobDetailsPage({ token }) {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const backupJobId = getIdNumber();

    const onSuccess = (json) => {
        setItem(json);
        setIsLoading(false);
    };

    useEffect(() => {
        fetch('http://localhost:8005/api/v1/backup-jobs/' + backupJobId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            setIsInvalid(true);
        })
        .then(json => onSuccess(json))
        .catch(error => {
            console.error(error);
            setIsLoading(false);
        });
    }, [token, backupJobId]);

    if (isNaN(backupJobId) || isInvalid) {
        return (
            <h1>Invalid Page</h1>
        );
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleDeleteButton = () => {
        //TODO: call backend (waiting on backend to implement)
        alert("Implement API call to delete this System")
    }
    let showDelete = false; // Remove this when implementing Deleting
    let showEdit = false // Remove this when implementing Editing

    const handleCreateBackup = () => {
        fetch('http://localhost:8005/api/v1/backup-jobs/' + backupJobId + '/execute/backup/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        })
        .then(response => {
            console.log(response);
            if (response.ok) {
                alert("Successfully started new Backup");
                return response.json();
            }
            return response.body;
        })
        .then(data => console.log(data))
        .catch( error => console.error(error));
    };

    const displayDetails = () => {
        return <>
        <Container className='row my-3'>
            <Button className='my-2' onClick={handleCreateBackup}>Run this Backup Job</Button>

            <Label>Description: {item.description}</Label>
            <Label>Additional Info: {item.additional_information}</Label>
            <Label>System: <Link to={`/systems/${item.system}`}>{item.system}</Link></Label>
            <Label>Backup Module: <Link to={`/backup-modules/${item.backup_module}`}>{item.backup_module}</Link></Label>
            <div>
                Storage Modules:
                <ul>
                    {item.storage_modules.map((storageModule, i) =>
                        <li key={i}>
                            <Label>{"Storage Module: "}</Label> <Link to={`/storage-modules/${storageModule}`}>{storageModule}</Link>
                        </li>
                    )}
                </ul>

            </div>

            {showEdit && <Button className='my-2' onClick={() => setIsEditing(true)}>Edit</Button>}
            {showDelete && <Button className='my-2' onClick={handleDeleteButton}>Delete</Button>}
            </Container>
        </>;
    };

    const editingForm = () => {
        return <>
            <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
            <BackupJobForm isAdd={false} token={token} />
        </>;
    };

    return (
        <>
            <h1>{item.name}</h1>

            {isEditing ? editingForm() : displayDetails()}

        </>
    );
};

BackupJobDetailsPage.propTypes = {
  token: PropTypes.string
}

export default BackupJobDetailsPage;
