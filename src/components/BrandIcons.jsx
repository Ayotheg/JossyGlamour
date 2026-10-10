// Lucide no longer ships brand logos, so these two are drawn here in the same
// 24px outline style and take the same props as a Lucide icon.
function BrandIcon({ children, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  )
}

export function Instagram(props) {
  return (
    <BrandIcon {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </BrandIcon>
  )
}

export function Tiktok(props) {
  return (
    <BrandIcon {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </BrandIcon>
  )
}
