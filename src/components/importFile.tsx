import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import OrganizationType from '../models/organizationType.model';
import { fetchOrganizations } from '../requests/import.request';
import FileUploader from './fileUploader';

const ImportFile = () => {


  const { t } = useTranslation();

  const [filePath, setFilePath] = useState<HTMLInputElement>();

  const { isLoading, isError, data, error } = useQuery<any[], Error>('fetchOrganizations', fetchOrganizations);

  useEffect(() => {
    console.log('pathUpdated', filePath)
  }, [filePath]);

  if (isLoading ) {
    return <span>loading</span>
  }

  if ( isError ) {
     return <span>Error { error.message }</span>
  }

  const organizations: OrganizationType[] = data ?? [];

  const handleFile = (fileUploaded: HTMLInputElement) => {
    setFilePath(fileUploaded);
  }


  return (
    <div className="card">
      <div className="subtitle">
        <h3>{t('importFile.title')}</h3>
        <form>
          <FileUploader handleFile={handleFile} />
          <select>
            {organizations.map((organization: OrganizationType, index: number) => (
              <option key={index} value={organization.id}>{organization.name}</option>
            ))}
          </select>

        </form>
      </div>
    </div>
  )
}

export default ImportFile;
