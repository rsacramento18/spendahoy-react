import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'

const NavigationLink = (props: any) => {
  const { t } = useTranslation();

  return (
    <NavLink 
      // margin="0 20px"
      // textDecoration="none"
      // fontWeight="300"
      to={props.to}
      // _hover={{
      //   margin: "0 19.7px",
      //   fontWeight: "400",
      // }}
    >
      {t(props.routerLink)}
    </NavLink>
  )

}

export default NavigationLink;
