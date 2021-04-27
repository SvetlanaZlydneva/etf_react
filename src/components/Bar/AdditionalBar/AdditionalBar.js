import React from 'react';
import T from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './AdditionalBar.module.css';

const AdditionalBar = ({ links }) => {
  return (
    <nav>
      <ul className={styles.List}>
        {links.map(({ key, title, path, image }) => (
          <li key={key} className={styles.Item}>
            <NavLink
              exact
              to={path}
              className={styles.Link}
              activeClassName={styles.Active}
              title={title}
            >
              {image}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

AdditionalBar.propTypes = {
  links: T.arrayOf(String).isRequired,
};

export default AdditionalBar;
