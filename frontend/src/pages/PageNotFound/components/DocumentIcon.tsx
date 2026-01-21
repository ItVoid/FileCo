export default function DocumentIcon() {
  return (
    <div className="mb-8 relative">
      <svg
        className="w-64 h-64 mx-auto"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 40C60 35.5817 63.5817 32 68 32H112L148 68V160C148 164.418 144.418 168 140 168H68C63.5817 168 60 164.418 60 160V40Z"
          fill="#E5E7EB"
          className="animate-pulse"
        />
        <path
          d="M112 32L148 68H120C115.582 68 112 64.4183 112 60V32Z"
          fill="#D1D5DB"
        />
        <circle cx="104" cy="110" r="45" fill="#10B981" opacity="0.1" />
        <text
          x="104"
          y="130"
          fontSize="48"
          fontWeight="bold"
          fill="#10B981"
          textAnchor="middle"
        >
          ?
        </text>
      </svg>
    </div>
  );
}
