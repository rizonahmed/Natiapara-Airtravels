import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const HelicopterIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Clean, high-fidelity engineering vector representation of a helicopter */}
    <path d="M21 21H3" /> {/* Landing skids */}
    <path d="M12 21v-4" /> {/* Center skid mast */}
    <path d="M7 17v4" /> {/* Front skid mast */}
    <path d="M17 17v4" /> {/* Rear skid mast */}
    <path d="M12 11V6" /> {/* Main rotor mast */}
    <path d="M3 6h18" /> {/* Main rotor blade */}
    <path d="M2 13h17a3 3 0 0 1 3 3v1H2v-4z" /> {/* Cabin capsule core */}
    <path d="M12 11H8v4h4v-4z" /> {/* Cockpit forward window */}
    <path d="M12 11h3v4h-3v-4z" /> {/* Passenger side glass */}
    <path d="M5 13H2" /> {/* Tail boom joint */}
    <path d="M2 13V8" /> {/* Tail rotor blade */}
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    {/* Official WhatsApp high-contrast SVG representation */}
    <path d="M12.012 2a9.97 9.97 0 0 0-8.666 14.926L2 22l5.233-1.372A9.975 9.975 0 0 0 12.012 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.835 14.12c-.244.688-1.42 1.254-1.95 1.343-.48.08-1.114.125-3.085-.688-2.52-1.038-4.14-3.602-4.266-3.77-.127-.167-1.023-1.353-1.023-2.58 0-1.226.643-1.83.87-2.072.227-.243.5-.302.667-.302.167 0 .334.004.48.01.147.009.345-.056.542.42.203.49.694 1.693.754 1.818.06.126.1.272.016.44-.084.167-.184.272-.294.402l-.37.402c-.114.126-.234.264-.1.498.134.234.6 1.002 1.29 1.62.884.793 1.63 1.04 1.864 1.157.234.116.37.098.506-.06.137-.156.58-.68.736-.91.156-.23.313-.19.526-.11.213.08.137.08 1.37.69.122.06.2.292.054.542z" />
  </svg>
);
