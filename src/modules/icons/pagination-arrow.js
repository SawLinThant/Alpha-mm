const PaginationArrowIcon = ({ width, height,color='#FAFAFA' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5828 4L8.99577 10.587C8.62458 10.9636 8.4165 11.4712 8.4165 12C8.4165 12.5288 8.62458 13.0364 8.99577 13.413L15.5828 20"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default PaginationArrowIcon;
