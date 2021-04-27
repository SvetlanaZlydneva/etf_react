import React from 'react';
import T from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserSelectors } from '../../redux/user';
import styles from './Navigation.module.css';
import links from '../../helpers/links/navigation';

const Navigation = ({ onGetAccess }) => {
  return (
    <nav>
      <ul className={styles.List}>
        {links.map(
          ({ key, title, path, image, ...item }) =>
            item[onGetAccess] && (
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
            ),
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  onGetAccess: T.string.isRequired,
};

const mapStateToProps = state => ({
  onGetAccess: UserSelectors.getAccess(state),
});

export default connect(mapStateToProps)(Navigation);
