import PropTypes from 'prop-types';
import ModuleUploadForm from '../components/ModuleUploadForm';

function BackupModuleForm({ isAdd, token }) {
    return (<ModuleUploadForm isAdd={isAdd} token={token} apiPathSection={"backup-modules"}/>);
}

BackupModuleForm.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  token: PropTypes.string
}

export default BackupModuleForm;
