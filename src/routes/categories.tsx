import CreateCategory from '../components/categoryCreate';
import ListCategories from '../components/listCategories';
import CategoryDetail from '../components/categoryDetail';

const Categories = () => {
  return (
    <div className="wrapper">
      <div className="row height-40">
        <CreateCategory />
        <ListCategories />
      </div>
      <div className="row height-60">
        <CategoryDetail />
      </div>
    </div>
  )
}

export default Categories;
