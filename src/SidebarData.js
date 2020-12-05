import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as SiIcons from 'react-icons/si';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiOutlineSmile />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <AiIcons.AiOutlineLaptop />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <AiIcons.AiOutlineContacts />,
    cName: 'nav-text'
  },
]