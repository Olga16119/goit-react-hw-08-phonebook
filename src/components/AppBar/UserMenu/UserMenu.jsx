import css from '../AppBar.module.css';

const UserMenu = () => {
  return (
    <div className={css.userMenu}>
      <p>email</p>
      <button type="button" className={css.userBtn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
