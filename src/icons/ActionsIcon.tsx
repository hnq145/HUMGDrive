type ActionsIconType = React.SVGAttributes<SVGSVGElement>;

const ActionsIcon: React.FC<ActionsIconType> = (props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="ellipsis-h"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      data-fa-i2svg=""
      {...props}
    >
      <path
        fill="currentColor"
        d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
      ></path>
    </svg>
  );
};

export default ActionsIcon;
