import PropTypes from 'prop-types';
import ModuleUploadForm from '../components/ModuleUploadForm';

function StorageModuleForm({ isAdd, token }) {
    return (<ModuleUploadForm isAdd={isAdd} token={token} apiPathSection={"storage-modules"}/>);
}

StorageModuleForm.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  token: PropTypes.string
}

export default StorageModuleForm;
