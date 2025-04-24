import { twMerge } from "tailwind-merge";
import React from "react";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

/**
 * Renders child elements orbiting around a central point in a circular path with configurable animation and styling.
 *
 * Each child is positioned evenly along the orbit and animated to revolve around the center. The orbit path can be optionally displayed as a background SVG circle.
 *
 * @param children - Elements to be rendered as orbiting items.
 * @param reverse - If true, reverses the orbit animation direction.
 * @param duration - Base duration (in seconds) for a full orbit; defaults to 20.
 * @param radius - Radius (in pixels) of the orbit path; defaults to 160.
 * @param path - Whether to display the orbit path as a background circle; defaults to true.
 * @param iconSize - Size (in pixels) of each orbiting child; defaults to 30.
 * @param speed - Multiplier to scale the animation speed; defaults to 1.
 *
 * @returns React elements rendering the orbiting children and optional orbit path.
 */
export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={twMerge(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,
              reverse ? "[animation-direction:reverse]" : "",
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
