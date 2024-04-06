import { SidebarProps } from './Sidebar.props';
import style from './Layout.module.css'
import cn from 'classnames';

export const Sidebar = ({
  ...props
}: SidebarProps): JSX.Element => {
  return (
      <div {...props}>
        Sidebar
      </div>
  );
}
