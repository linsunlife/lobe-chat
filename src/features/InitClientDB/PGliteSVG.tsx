import { LucideIcon, LucideProps } from 'lucide-react';
import { forwardRef } from 'react';

// @ts-expect-error 类型感觉不对，未来修正
export const PGliteSVG: LucideIcon = forwardRef<SVGElement, Partial<Omit<LucideProps, 'ref'>>>(
  ({ size }, ref) => (
    <svg
      fill="currentColor"
      height={size}
      ref={ref as any}
      viewBox={'0 0 1024 1024'}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M941.581 335.737v460.806c0 15.926-12.913 28.836-28.832 28.818l-115.283-.137c-15.243-.018-27.706-11.88-28.703-26.877.011-.569.018-1.138.018-1.711l-.004-172.904c0-47.745-38.736-86.451-86.454-86.451-46.245 0-84.052-36.359-86.342-82.068V191.496l201.708.149c79.484.058 143.892 64.553 143.892 144.092Zm-576-144.281v201.818c0 47.746 38.682 86.456 86.4 86.456h86.4v-5.796c0 66.816 54.13 120.98 120.902 120.98 28.617 0 51.815 23.213 51.815 51.848v149.644c0 .688.011 1.372.025 2.057-.943 15.065-13.453 26.992-28.746 26.992l-144.982-.007.986-201.586c.079-15.915-12.755-28.88-28.66-28.959-15.904-.079-28.861 12.763-28.94 28.678l-.986 201.741v.118l-172.174-.01V623.722c0-15.915-12.895-28.819-28.8-28.819-15.906 0-28.8 12.904-28.8 28.819v201.704l-143.642-.007c-15.905-.004-28.798-12.904-28.798-28.819V335.547c0-79.58 64.471-144.093 144.001-144.092l143.999.001Zm446.544 173.693c0-23.874-19.343-43.228-43.2-43.228-23.861 0-43.2 19.354-43.2 43.228 0 23.875 19.339 43.226 43.2 43.226 23.857 0 43.2-19.351 43.2-43.226Z"
        fill-rule="evenodd"
      />
    </svg>
  ),
);
