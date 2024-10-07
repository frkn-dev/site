const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 22 22"
    className={className}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9"
    />
  </svg>
)
export default MoonIcon
