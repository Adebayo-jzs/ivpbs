export function Logo({ size = 64 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background rounded square */}
      <rect
        width="64"
        height="64"
        rx="12"
        // fill="#0F172A"
      />
      
      {/* Building/Factory structure */}
      <g transform="translate(16, 12)">
        {/* Main building body */}
        <rect
          x="4"
          y="8"
          width="24"
          height="32"
          rx="2"
          fill="none"
          stroke="#1cca5b"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Windows/floors - left column */}
        <rect x="9" y="13" width="4" height="4" rx="0.5" fill="#1cca5b" />
        <rect x="9" y="20" width="4" height="4" rx="0.5" fill="#1cca5b" />
        <rect x="9" y="27" width="4" height="4" rx="0.5" fill="#1cca5b" />
        
        {/* Windows/floors - right column */}
        <rect x="19" y="13" width="4" height="4" rx="0.5" fill="#1cca5b" />
        <rect x="19" y="20" width="4" height="4" rx="0.5" fill="#1cca5b" />
        <rect x="19" y="27" width="4" height="4" rx="0.5" fill="#1cca5b" />
        
        {/* Door/entrance */}
        <rect x="12" y="33" width="8" height="7" rx="1" fill="#1cca5b" />
        
        {/* Location pin accent - top */}
        <circle cx="16" cy="3" r="3" fill="none" stroke="#1cca5b" strokeWidth="2.5" />
        <circle cx="16" cy="3" r="1.2" fill="#1cca5b" />
        
        {/* Path indicator line from pin to building */}
        <line x1="16" y1="6" x2="16" y2="8" stroke="#1cca5b" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
// export function Logo({ size = 64 }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 64 64"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {/* Background rounded square */}
//       <rect
//         width="64"
//         height="64"
//         rx="14"
//         // fill="#000000"
//       />
      
//       {/* Industrial building icon with angular geometric design */}
//       <g transform="translate(12, 10)">
//         {/* Left building section - tallest */}
//         <path
//           d="M 0 34 L 0 8 L 8 8 L 8 34 Z"
//           fill="#1cca5b"
//         />
        
//         {/* Middle building section - medium */}
//         <path
//           d="M 10 34 L 10 14 L 18 14 L 18 34 Z"
//           fill="#1cca5b"
//         />
        
//         {/* Right building section - shortest */}
//         <path
//           d="M 20 34 L 20 20 L 28 20 L 28 34 Z"
//           fill="#1cca5b"
//         />
        
//         {/* Diagonal accent line across buildings */}
//         <path
//           d="M 1 10 L 27 22"
//           stroke="#34D399"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />
        
//         {/* Rooftop accent on left building */}
//         <rect
//           x="2"
//           y="4"
//           width="4"
//           height="3"
//           fill="#34D399"
//         />
        
//         {/* Windows on left building */}
//         <rect x="2.5" y="12" width="3" height="3" fill="#000000" />
//         <rect x="2.5" y="18" width="3" height="3" fill="#000000" />
//         <rect x="2.5" y="24" width="3" height="3" fill="#000000" />
        
//         {/* Windows on middle building */}
//         <rect x="12.5" y="18" width="3" height="3" fill="#000000" />
//         <rect x="12.5" y="24" width="3" height="3" fill="#000000" />
        
//         {/* Windows on right building */}
//         <rect x="22.5" y="24" width="3" height="3" fill="#000000" />
        
//         {/* Base/ground line */}
//         <line
//           x1="0"
//           y1="36"
//           x2="28"
//           y2="36"
//           stroke="#1cca5b"
//           strokeWidth="2"
//           strokeLinecap="round"
//         />
        
//         {/* Location pin marker */}
//         <g transform="translate(30, 8)">
//           <path
//             d="M 4 0 C 1.8 0 0 1.8 0 4 C 0 5.5 1 6.8 2.5 9 L 4 11 L 5.5 9 C 7 6.8 8 5.5 8 4 C 8 1.8 6.2 0 4 0 Z"
//             fill="#34D399"
//           />
//           <circle cx="4" cy="4" r="1.5" fill="#000000" />
//         </g>
//       </g>
//     </svg>
//   );
// }
