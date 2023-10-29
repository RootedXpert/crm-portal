type styles = {
  readonly [key: string]: string;
};

type fc = {
  style: styles;
};

const Hamburger: React.FC<fc> = ({ style }) => {
  return (
    <div
      className={style.brand_mobile_menu}
      data-testid="navigation.header.switch"
    >
      <i className="material-icons hamburger">menu</i>
    </div>
  );
};

export default Hamburger;
