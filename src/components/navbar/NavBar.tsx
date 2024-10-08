import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { Menubar } from 'primereact/menubar';
import {MenuItem} from 'primereact/menuitem/menuitem';
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate: any = useNavigate();
    const items: MenuItem[] = [
        {
            label: 'Home Page',
            icon: 'pi pi-home',
            
            command: () => {
                navigate('/');
            },
        },
        {
            label: 'Edit Page',
            icon: 'pi pi-file-check',
            
        },
        {
            label: 'Overview Page',
            icon: 'pi pi-pen-to-square',
            command: () => {
                      navigate('/overview');
                  },
            
        },
        // {
        //     label: 'Finish Page',
        //     icon: 'pi pi-check',
        //     command: () => {
        //         navigate('/finished');
        //     },
        // },
]
  return (
    <>
      
      <Menubar model={items} className={styles.customMenubar}/>
      
    </>
  );
};

export default NavBar;