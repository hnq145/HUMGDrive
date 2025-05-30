type CreateFolderIconType = React.SVGAttributes<SVGSVGElement>;

const CreateFolderIcon: React.FC<CreateFolderIconType> = (props) => {
  return (
    <svg
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Combined Shape"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.63107 0C7.83994 0 8.03661 0.0983374 8.16193 0.265429L9.95357 2.65429H17.9164C18.2829 2.65429 18.58 2.95138 18.58 3.31786V15.2621C18.58 15.6286 18.2829 15.9257 17.9164 15.9257H0.663571C0.297091 15.9257 0 15.6286 0 15.2621V0.663571C0 0.297091 0.297091 0 0.663571 0H7.63107ZM7.212 1.5H1.5V14.425H17.08V4.154L9.20357 4.15429L7.212 1.5ZM8 7.999V6H6V7.999L4 8V10L6 9.999V12H8V9.999L10 10V8L8 7.999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CreateFolderIcon;
