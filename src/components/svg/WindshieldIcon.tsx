interface WindshieldIconProps {
  size?: number;
  className?: string;
}

const WindshieldIcon = ({
  size = 40,
  className = "",
}: WindshieldIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Windshield */}
      <path
        d="M10 18C10.8 14.8 13.7 12.5 17 12.5H47C50.3 12.5 53.2 14.8 54 18L58 36C58.8 39.8 55.9 43.5 52 43.5H12C8.1 43.5 5.2 39.8 6 36L10 18Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom windshield line */}
      <path
        d="M14 43.5L16 50"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M50 43.5L48 50"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Repair crack/star */}
      <path
        d="M32 23V31"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M28 27H36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M29.2 24.2L34.8 29.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M34.8 24.2L29.2 29.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default WindshieldIcon;