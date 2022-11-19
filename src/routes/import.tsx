import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import OrganizationType from '../models/organizationType.model';
import { fetchOrganizations } from '../requests/import.request';

const Import = () => {
  const { t } = useTranslation();

  const { isLoading, isError, data, error } = useQuery<any[], Error>('fetchOrganizations', fetchOrganizations);

  if ( isLoading ) {
      return <span>loading</span>
  }

  if ( isError ) {
    return <span>Error { error.message }</span>
  }

  const organizations: OrganizationType[] = data ?? [];


  return (
    <div className="import">
      <h1>{t('router.import')}</h1>
      <form>
        <select>
          {organizations
            .map((organization: OrganizationType) => (
              <option key={organization.id} value={organization.id}>{organization.name}</option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Import;
