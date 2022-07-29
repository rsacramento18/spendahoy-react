import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
};

const CategoryCreate = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div className="category-create card">
      <h3>{t('categoryCreate.title')}</h3>
      <div className="category-create-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name">
            <label>{t('categoryCreate.form.name.label')}</label>
            <input 
              type="text" 
              {...register("name", { required: true })}
              placeholder={t('categoryCreate.form.name.placeholder')}
            />
            {errors.name &&
              <span className="input-error">This field is required</span>
            }
          </div>
          <div className="submit-bt">
            <input type="submit" value={t('categoryCreate.form.submit')} />
          </div>
        </form>
      </div>
    </div>
  )

}

export default CategoryCreate;
