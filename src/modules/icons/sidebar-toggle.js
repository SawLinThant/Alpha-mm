const SidebarToggleIcon = ({width,height,color='#9394E0'}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 12.5H19.5M4.5 18.27H19.5M4.5 6.72998H19.5"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default SidebarToggleIcon;
