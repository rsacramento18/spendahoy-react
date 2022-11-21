import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const FileUploader = (props: any) => {
  const { t } = useTranslation();

  const hiddenFileInput = useRef<any>(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  }

  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        {t('fileUploader.button')}
      </button>
      <input 
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display:'none'}} />
    </>
  )
}

export default FileUploader;
