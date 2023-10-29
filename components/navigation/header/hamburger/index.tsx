import styles from "./header.module.scss";

const Hamburger: React.FC = () => {
  return (
    <div
      className={styles.brand_mobile_menu}
      data-testid="navigation.header.switch"
    >
      <i className="material-icons hamburger">menu</i>
    </div>
  );
};

export default Hamburger;
