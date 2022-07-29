import CreateCategory from '../components/categoryCreate';
import ListCategories from '../components/listCategories';

const Categories = () => {
  return (
    <div className="wrapper width-50">
      <CreateCategory />
      <ListCategories />
    </div>
  )
}

export default Categories;
