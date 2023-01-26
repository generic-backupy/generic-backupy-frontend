import { render, screen } from '@testing-library/react';

import SystemsListPage from '../systems/SystemsListPage';
import SystemsDetailsPage from '../systems/SystemsDetailsPage';
import AddSystemPage from '../systems/AddSystemPage';

import BackupsListPage from '../backups/BackupsListPage';
import BackupsDetailsPage from '../backups/BackupDetailsPage';

import BackupJobsListPage from '../backupjobs/BackupJobsListPage';
import BackupJobDetailsPage from '../backupjobs/BackupJobDetailsPage';
import AddBackupJobPage from '../backupjobs/AddBackupJobPage';

import BackupModulesListPage from '../backupmodules/BackupModulesListPage';
import BackupModuleDetailsPage from '../backupmodules/BackupModuleDetailsPage';
import AddBackupModulePage from '../backupmodules/AddBackupModulePage';

import StorageModulesListPage from '../storagemodules/StorageModulesListPage';
import StorageModuleDetailsPage from '../storagemodules/StorageModuleDetailsPage';
import AddStorageModulePage from '../storagemodules/AddStorageModulePage';

import BackupExecutionsDetailsPage from '../backupexecutions/BackupExecutionDetailsPage';
import BackupExecutionsListPage from '../backupexecutions/BackupExecutionsListPage';

import StorageExecutionsDetailsPage from '../storageexecutions/StorageExecutionDetailsPage';
import StorageExecutionsListPage from '../storageexecutions/StorageExecutionsListPage';

import UsersListPage from '../users/UsersListPage';
import UserDetailsPage from '../users/UserDetailsPage';

import SecretsListPage from '../secrets/SecretsListPage';
import SecretsDetailsPage from '../secrets/SecretDetailsPage';

import ParametersListPage from '../parameters/ParametersListPage';
import ParameterDetailsPage from '../parameters/ParameterDetailsPage';

import CategoriesListPage from '../categories/CategoriesListPage';
import CategoriesDetailsPage from '../categories/CategoriesDetailsPage';

import { MemoryRouter } from 'react-router-dom';




describe('System', () => {
  
  test('renders System list page', () => {
    render(<SystemsListPage /> , {wrapper: MemoryRouter});

    const systemPageHeaderElement = screen.getByText(/System List/i);
    expect(systemPageHeaderElement).toBeInTheDocument();
  });

  test('renders System details page', () => {
    render(<SystemsDetailsPage /> , {wrapper: MemoryRouter});
  });

  test('renders Add System page', () => {
    render(<AddSystemPage /> , {wrapper: MemoryRouter});
  });
});


describe('Backup Job', () => {
  
    test('renders Backup list page', () => {
      render(<BackupsListPage /> , {wrapper: MemoryRouter});
  
      const systemPageHeaderElement = screen.getByText(/Backup List/i);
      expect(systemPageHeaderElement).toBeInTheDocument();
    });
  
    test('renders Backup details page', () => {
      render(<BackupsDetailsPage /> , {wrapper: MemoryRouter});
    });
  });

  

describe('Backup Job', () => {
  
    test('renders Backup Job list page', () => {
      render(<BackupJobsListPage /> , {wrapper: MemoryRouter});
  
      const systemPageHeaderElement = screen.getByText(/Backup Job List/i);
      expect(systemPageHeaderElement).toBeInTheDocument();
    });
  
    test('renders Backup Job details page', () => {
      render(<BackupJobDetailsPage /> , {wrapper: MemoryRouter});
    });
  
    test('renders Add Backup Job page', () => {
      render(<AddBackupJobPage /> , {wrapper: MemoryRouter});
    });
});

describe('Backup Modules', () => {
  
    test('renders Backup Modules list page', () => {
      render(<BackupModulesListPage /> , {wrapper: MemoryRouter});
  
      const systemPageHeaderElement = screen.getByText(/Backup Module List/i);
      expect(systemPageHeaderElement).toBeInTheDocument();
    });
  
    test('renders Backup Module details page', () => {
      render(<BackupModuleDetailsPage /> , {wrapper: MemoryRouter});
    });
  
    test('renders Add Backup Module page', () => {
      render(<AddBackupModulePage /> , {wrapper: MemoryRouter});
    });
});


describe('Storage Modules', () => {
  
    test('renders Storage Modules list page', () => {
      render(<StorageModulesListPage /> , {wrapper: MemoryRouter});
  
      const systemPageHeaderElement = screen.getByText(/Storage Module List/i);
      expect(systemPageHeaderElement).toBeInTheDocument();
    });
  
    test('renders Storage Module details page', () => {
      render(<StorageModuleDetailsPage /> , {wrapper: MemoryRouter});
    });
  
    test('renders Add Storage Module page', () => {
      render(<AddStorageModulePage /> , {wrapper: MemoryRouter});
    });
});

describe('Backup Execution Modules', () => {
  
    test('renders Backup Execution list page', () => {
      render(<BackupExecutionsListPage /> , {wrapper: MemoryRouter});
    });
  
    test('renders Backup Execution details page', () => {
      render(<BackupExecutionsDetailsPage /> , {wrapper: MemoryRouter});
    });
});


describe('Storage Execution', () => {
  
    test('renders Storage Execution list page', () => {
      render(<StorageExecutionsListPage /> , {wrapper: MemoryRouter});
    });
  
    test('renders Storage Module details page', () => {
      render(<StorageExecutionsDetailsPage /> , {wrapper: MemoryRouter});
    });
});


describe('User', () => {
  
    test('renders User list page', () => {
      render(<UsersListPage /> , {wrapper: MemoryRouter});
    });
  
    test('renders User details page', () => {
      render(<UserDetailsPage /> , {wrapper: MemoryRouter});
    });
});

describe('Secret', () => {
  
    test('renders Secret list page', () => {
      render(<SecretsListPage /> , {wrapper: MemoryRouter});
    });
  
    test('renders Secret details page', () => {
      render(<SecretsDetailsPage /> , {wrapper: MemoryRouter});
    });
});

describe('Parameter', () => {
  
    test('renders Parameter  list page', () => {
      render(<ParametersListPage /> , {wrapper: MemoryRouter});
    });
  
    test('renders Parameter  details page', () => {
      render(<ParameterDetailsPage /> , {wrapper: MemoryRouter});
    });
});


describe('Categories', () => {
  
    test('renders Categories  list page', () => {
      render(<CategoriesListPage /> , {wrapper: MemoryRouter});
    });
  
    test('renders Categories  details page', () => {
      render(<CategoriesDetailsPage /> , {wrapper: MemoryRouter});
    });
});

