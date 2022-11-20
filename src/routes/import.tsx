import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import OrganizationType from '../models/organizationType.model';
import { fetchOrganizations } from '../requests/import.request';

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Import = () => {
  interface FormInput {
    organizationId: number,
    filePath: string
  }
  const { t } = useTranslation();
  const [formInputs, setFormInputs] = useState<FormInput[]>([
    {
      organizationId: 0,
      filePath: '',
    }
  ]);

  const addFormInputs = () => {
    setFormInputs([...formInputs, {
        organizationId: 0,
        filePath:'',
      } 
    ])
  }

  const removeFormInput = (index: number) => {
    const rows = [...formInputs];
    rows.splice(index, 1);
    setFormInputs(rows);
  }

  const handleChange = (index: number, event: any) => {
    const name: string = event.target.name;
    const list = [...formInputs];
    if(name === 'organizationId') {
      const value: number = event.target.value;
      list[index].organizationId = value;
    }
    else { 
      const value:  string = event.target.value;
      list[index].filePath = value;
    }

    setFormInputs(list);
  }

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
        {formInputs.map((formInput: FormInput, index: number) => (
          <div key={index} className="form-input">
            <button 
              className="delete"
              type="button"
              onClick={() => removeFormInput(index)}><FontAwesomeIcon icon={faMinus}/>
            </button>
            <select 
              name="organizationId" 
              onChange={(event) => (handleChange(index, event))}
              value={formInput.organizationId}
            >
              {organizations.map((organization: OrganizationType, index: number) => (
                <option key={index} value={organization.id}>{organization.name}</option>
              ))}
            </select>
            <input 
              type="file" 
              name="Upload Expense" 
              value={formInput.filePath}
              onChange={(event) => (handleChange(index, event))}
            />
          </div>
        ))} 
        <button 
          type="button"
          onClick={addFormInputs}><FontAwesomeIcon icon={faPlus}/>
        </button>
      </form>
    </div>
  );
}

export default Import;
