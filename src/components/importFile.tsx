import { useState, useContext } from 'react';
import { SpendahoyContext } from '../context/spendahoyContextProvider';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import OrganizationType from '../models/organizationType.model';
import { fetchOrganizations } from '../requests/import.request';
import FileUploader from './fileUploader';

const ImportFile = () => {

  const { t } = useTranslation();
  const { dispatch } = useContext(SpendahoyContext);
  const [organizationId, setOrganizationId]  = useState<number>();

  const { isLoading, isError, data, error } = useQuery<any[], Error>('fetchOrganizations', fetchOrganizations);

  if (isLoading ) {
    return <span>loading</span>
  }

  if ( isError ) {
     return <span>Error { error.message }</span>
  }

  const organizations: OrganizationType[] = data ?? [];

  const handleSelectChange = (event: any) => {
    setOrganizationId(event.target.value)
  }

  const handleFile = (fileToUpload: HTMLInputElement) => {
    dispatch({
      type: 'ADD_FILE_UPLOAD',
      payload: { 
        id: organizationId,
        file: fileToUpload,
      }
    });
  }

  return (
    <div className="card">
      <div className="subtitle">
        <h3>{t('importFile.title')}</h3>
        <form>
          <select onChange={handleSelectChange}>
            {organizations.map((organization: OrganizationType, index: number) => (
              <option key={index} value={organization.id}>{organization.name}</option>
            ))}
          </select>
          <FileUploader handleFile={handleFile} />
        </form>
      </div>
    </div>
  )
}

export default ImportFile;
