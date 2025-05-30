type ChevronSolidType = React.SVGAttributes<SVGSVGElement>;

const ChevronSolid: React.FC<ChevronSolidType> = (props) => {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Path Copy"
        d="M8.45786 0.805578C8.5044 0.748826 8.5131 0.671721 8.48042 0.606718C8.44783 0.541807 8.3794 0.500367 8.30419 0.5L0.69571 0.5C0.620596 0.500367 0.552172 0.541716 0.519584 0.606627C0.486901 0.67163 0.495598 0.748735 0.542138 0.805395L4.34638 5.42858C4.38346 5.47369 4.44003 5.5 4.49995 5.5C4.55987 5.5 4.61645 5.47369 4.65352 5.42858L8.45786 0.805578Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChevronSolid;
