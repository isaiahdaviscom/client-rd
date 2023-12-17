// components/Layout.js

import Modal from './Modal';

const Layout = ({ children }) => (
  <>
    {children}
    {/* Add your Modal component here */}
    <Modal />
  </>
);

export default Layout;
