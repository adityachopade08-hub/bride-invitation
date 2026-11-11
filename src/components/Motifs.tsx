import React from 'react';

/**
 * Authentic Luxury Traditional Indian Wedding SVG Illustrations & Motifs
 * Includes: Refined Royal Elephants with Anatomically Natural Graceful Upcurled Trunks,
 * Auspicious Kalash with Mango Leaves & Nariyal, Traditional Hindu Swastik, Toran Arch,
 * Shehnai & Dhol, Sacred Agni Mandap, Varmala, Diyas, and Ornamental Jharokha Arches.
 */

// Uploaded Golden Lord Ganesha Image Component
export const GoldenGaneshaImage: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = "", size = 64 }) => (
  <img
    src="/assets/aistudio/image_686676ec.png"
    alt="Lord Ganesha Golden Illustration"
    width={size}
    height={size}
    className={`object-contain inline-block drop-shadow-sm ${className}`}
    style={{ height: 'auto', maxHeight: size }}
  />
);

// 1. Refined Traditional Decorated Indian Elephant
// Features an anatomically smooth, natural trunk curling upward gracefully with sacred lotus & gold ornaments
export const ElephantMotif: React.FC<{
  className?: string;
  size?: number;
  mirrored?: boolean;
}> = ({ className = "text-[#8B0000]", size = 80, mirrored = false }) => (
  <svg
    width={size}
    height={size * 0.78}
    viewBox="0 0 130 100"
    fill="currentColor"
    className={className}
    style={{ transform: mirrored ? 'scaleX(-1)' : 'none' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Elephant Massive Stately Body Silhouette */}
    <path
      d="M24 74C23 64 21 52 26 42C33 30 46 24 60 22C74 20 86 24 93 31C98 35 101 40 103 46C105 50 108 51 110 52C112 53 113 56 112 59C110 63 106 65 103 64C100 64 97 61 95 56C93 52 91 48 88 47L87 72C87 74 86 86 85 86L76 86C74 86 73 84 73 80L72 68C72 66 70 65 68 65C66 65 64 66 64 68L64 86C64 87 62 88 60 88L52 88C50 88 49 86 49 84L49 69C46 69 42 69 38 71L38 86C38 87 36 88 34 88L26 88C24 88 23 86 23 84L23 74Z"
      opacity="0.95"
    />

    {/* Anatomically Natural Graceful Upcurled Trunk */}
    {/* Trunk flows naturally from brow bridge down, narrowing smoothly, and sweeping upward in an auspicious curve */}
    <path
      d="M101 44C104 48 107 55 108 63C109 72 108 81 112 85C115 88 120 88 123 84C126 80 126 73 124 67C122 62 118 57 117 52C116 48 118 46 120 46C122 46 123 48 124 51C127 58 129 66 128 73C127 82 121 91 113 90C106 89 104 80 103 72C102 64 100 55 97 49Z"
      fill="currentColor"
    />

    {/* Auspicious Golden Lotus / Bell at trunk tip */}
    <circle cx="121" cy="46" r="3" fill="#D4AF37" />
    <path d="M119 46C121 41 125 41 127 46C125 48 121 48 119 46Z" fill="#FFA000" />

    {/* Smooth Regal Ivory Tusk curving upward */}
    <path
      d="M97 54C103 56 109 54 113 48C109 49 104 49 98 51Z"
      fill="#FFFDF9"
      stroke="#E8DFC8"
      strokeWidth="0.5"
    />

    {/* Royal Ear with Traditional Golden Trim */}
    <path
      d="M87 34C89 31 93 32 94 36C95 44 91 53 84 56C82 56 81 53 82 48C83 42 84 36 87 34Z"
      fill="#7B0000"
      opacity="0.8"
    />
    <circle cx="85" cy="54" r="2" fill="#D4AF37" />

    {/* Forehead Golden Mathapatti / Tilak Ornament */}
    <path
      d="M93 32C95 28 100 29 101 34C98 38 94 37 93 32Z"
      fill="#D4AF37"
    />
    <circle cx="97" cy="33" r="1.5" fill="#8B0000" />
    <path d="M97 35L98 42" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" />

    {/* Royal Jhool (Embroidered Velvet Saddle Cloth) */}
    <path
      d="M44 36C44 32 50 30 63 30C76 30 81 32 81 36L83 58C83 61 78 64 63 64C47 64 42 61 42 58L44 36Z"
      fill="#8B0000"
    />
    <path
      d="M47 34H78V56C78 58 73 60 63 60C52 60 47 58 47 56V34Z"
      fill="#D4AF37"
      opacity="0.88"
    />
    {/* Gold ornamental bells & fringe along bottom of Jhool */}
    <circle cx="47" cy="59" r="1.5" fill="#FFD700" />
    <circle cx="53" cy="62" r="1.5" fill="#FFD700" />
    <circle cx="60" cy="63" r="1.5" fill="#FFD700" />
    <circle cx="67" cy="62" r="1.5" fill="#FFD700" />
    <circle cx="74" cy="60" r="1.5" fill="#FFD700" />
    <circle cx="79" cy="58" r="1.5" fill="#FFD700" />

    {/* Traditional Girdle & Tail */}
    <path d="M24 45C20 52 19 60 19 68" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <circle cx="19" cy="69" r="1.5" fill="currentColor" />
  </svg>
);

export const RoyalElephantMotif = ElephantMotif;

// 2. Traditional Auspicious Kalash with Mango Leaves & Nariyal (Coconut)
export const KalashMotif: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#B38728]",
  size = 56
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Coconut (Nariyal) on top */}
    <path
      d="M32 6C28 10 27 16 32 20C37 16 36 10 32 6Z"
      fill="#6D4C41"
    />
    <circle cx="32" cy="8" r="1.5" fill="#D4AF37" />

    {/* Auspicious Mango Leaves (Amra Pallav) radiating out */}
    <path d="M32 20C26 14 20 15 17 21C22 23 27 22 32 20Z" fill="#2E7D32" />
    <path d="M32 20C38 14 44 15 47 21C42 23 37 22 32 20Z" fill="#2E7D32" />
    <path d="M32 20C28 12 24 10 23 8C27 12 30 16 32 20Z" fill="#388E3C" />
    <path d="M32 20C36 12 40 10 41 8C37 12 34 16 32 20Z" fill="#388E3C" />

    {/* Sacred Pot Neck & Mauli Thread */}
    <path d="M25 22H39V26H25V22Z" fill="#D4AF37" />
    <path d="M23 25H41V28H23V25Z" fill="#8B0000" />

    {/* Kalash Kumbha (Brass/Copper Vessel Body) */}
    <path
      d="M23 28C16 33 15 45 22 52C26 56 38 56 42 52C49 45 48 33 41 28H23Z"
      fill="#D4AF37"
    />

    {/* Sacred Swastik motif engraved on Kalash vessel */}
    <g transform="translate(27, 34) scale(0.18)" fill="#8B0000">
      <path d="M28 6V26H8V32H28V52H34V32H54V26H34V6H28Z" />
      <path d="M8 26V12H14V26H8Z" />
      <path d="M54 32V46H48V32H54Z" />
      <path d="M34 6H48V12H34V6Z" />
      <path d="M28 52H14V46H28V52Z" />
    </g>

    {/* Pedestal Base */}
    <path d="M25 53H39V56H25V53Z" fill="#AA771C" />
  </svg>
);

// 3. Traditional Hindu Auspicious Swastik (Correct Orientation with 4 Sacred Bindus)
export const SwastikMotif: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "text-[#8B0000]", size = 40, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill={color || "currentColor"}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Correct auspicious clockwise Hindu Swastika */}
    <path d="M30 8H34V29H55V33H34V54H30V33H9V29H30V8Z" />
    {/* Top Right Hook going right & down */}
    <path d="M34 8H50V13H34V8Z" />
    {/* Right Hook going down & left */}
    <path d="M55 33V49H50V33H55Z" />
    {/* Bottom Left Hook going left & up */}
    <path d="M30 54H14V49H30V54Z" />
    {/* Left Hook going up & right */}
    <path d="M9 29V13H14V29H9Z" />

    {/* 4 Sacred Bindus */}
    <circle cx="21" cy="21" r="2.8" />
    <circle cx="43" cy="21" r="2.8" />
    <circle cx="43" cy="43" r="2.8" />
    <circle cx="21" cy="43" r="2.8" />
  </svg>
);

// 4. Traditional Indian Marigold & Mango Leaf Toran (Floral Archway Banner)
export const ToranArchMotif: React.FC<{ className?: string }> = ({ className = "w-full" }) => (
  <div className={`relative overflow-hidden pointer-events-none select-none ${className}`}>
    <svg
      viewBox="0 0 800 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      {/* Golden Thread / Rope */}
      <path d="M0 8 Q 200 24, 400 8 T 800 8" stroke="#D4AF37" strokeWidth="2.5" />

      {/* Hanging Mango Leaves and Marigold Flowers in Repeating Toran Pattern */}
      {[50, 150, 250, 350, 450, 550, 650, 750].map((x, i) => (
        <g key={i} transform={`translate(${x}, 10)`}>
          {/* Mango Leaf */}
          <path
            d="M0 0 C-10 15, -6 32, 0 42 C6 32, 10 15, 0 0 Z"
            fill={i % 2 === 0 ? "#2E7D32" : "#388E3C"}
          />
          {/* Marigold Bloom attached to tip */}
          <circle cx="0" cy="45" r="7" fill={i % 2 === 0 ? "#FF8F00" : "#FFB300"} />
          <circle cx="0" cy="45" r="4.5" fill={i % 2 === 0 ? "#FF6F00" : "#FFA000"} />
          <circle cx="0" cy="45" r="2" fill="#D84315" />
        </g>
      ))}

      {/* Interspersed Jasmine Garland Swags */}
      <path d="M0 12 Q 100 26, 200 12" stroke="#FFFDF9" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M200 12 Q 300 26, 400 12" stroke="#FFFDF9" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M400 12 Q 500 26, 600 12" stroke="#FFFDF9" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M600 12 Q 700 26, 800 12" stroke="#FFFDF9" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  </div>
);

// 5. Traditional Shehnai & Dhol (Mangal Vadya for Sangeet)
export const ShehnaiDholMotif: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#B38728]",
  size = 56
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <ellipse cx="28" cy="34" rx="18" ry="12" fill="#8B4513" transform="rotate(-15 28 34)" />
    <ellipse cx="14" cy="28" rx="4" ry="10" fill="#F5DEB3" transform="rotate(-15 14 28)" />
    <ellipse cx="42" cy="40" rx="4" ry="10" fill="#F5DEB3" transform="rotate(-15 42 40)" />
    <path d="M20 22L36 44" stroke="#D4AF37" strokeWidth="1.5" />
    <path d="M24 20L40 42" stroke="#D4AF37" strokeWidth="1.5" />
    <path d="M18 36L34 16" stroke="#D4AF37" strokeWidth="1.5" />

    <path
      d="M48 10L18 48L14 54L18 56L24 52L54 22L58 14Z"
      fill="#D4AF37"
    />
    <circle cx="56" cy="12" r="3" fill="#B38728" />
    <circle cx="50" cy="18" r="1.5" fill="#8B0000" />
    <circle cx="42" cy="26" r="1.5" fill="#8B0000" />
    <circle cx="34" cy="34" r="1.5" fill="#8B0000" />
  </svg>
);

// 6. Sacred Mandap & Agni Kund (Holy Fire for Vivah / Pheras)
export const SacredAgniMotif: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#E65100]",
  size = 56
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 4C32 4 40 14 40 22C40 28 36 32 32 32C28 32 24 28 24 22C24 14 32 4 32 4Z"
      fill="#FFA000"
    />
    <path
      d="M32 10C32 10 37 17 37 23C37 27 34 30 32 30C30 30 27 27 27 23C27 17 32 10 32 10Z"
      fill="#FFD54F"
    />
    <path
      d="M26 18C26 18 20 23 20 28C20 32 24 34 26 34C24 31 23 26 26 18Z"
      fill="#FF5722"
    />
    <path
      d="M38 18C38 18 44 23 44 28C44 32 40 34 38 34C40 31 41 26 38 18Z"
      fill="#FF5722"
    />

    <polygon points="12,38 52,38 46,46 18,46" fill="#8D6E63" />
    <polygon points="16,46 48,46 42,54 22,54" fill="#6D4C41" />
    <polygon points="10,54 54,54 54,58 10,58" fill="#4E342E" />
    <circle cx="32" cy="42" r="2" fill="#D32F2F" />
  </svg>
);

// 7. Auspicious Varmala (Intertwined Rose & Marigold Garlands)
export const VarmalaMotif: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#C2185B]",
  size = 56
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 12 C10 26, 14 42, 32 54 C24 40, 22 24, 24 12 Z"
      fill="#C2185B"
      opacity="0.9"
    />
    <path
      d="M48 12 C54 26, 50 42, 32 54 C40 40, 42 24, 40 12 Z"
      fill="#C2185B"
      opacity="0.9"
    />

    {[
      [20, 16, '#E91E63'],
      [16, 26, '#FF9800'],
      [18, 36, '#E91E63'],
      [24, 45, '#FF9800'],
      [32, 54, '#D81B60'],
      [40, 45, '#FF9800'],
      [46, 36, '#E91E63'],
      [48, 26, '#FF9800'],
      [44, 16, '#E91E63']
    ].map(([x, y, col], idx) => (
      <circle key={idx} cx={Number(x)} cy={Number(y)} r="4.5" fill={col as string} />
    ))}

    <path d="M32 54V62" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="62" r="2.5" fill="#D4AF37" />
  </svg>
);

// 8. Sacred Lotus Motif
export const LotusMotif: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#B38728]",
  size = 48
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32 6C32 6 36 18 36 28C36 34 34 38 32 40C30 38 28 34 28 28C28 18 32 6 32 6Z" opacity="0.95" />
    <path d="M32 40C36 38 42 34 46 26C49 20 49 14 49 14C49 14 43 17 38 24C34 29 32 35 32 40Z" opacity="0.8" />
    <path d="M32 40C28 38 22 34 18 26C15 20 15 14 15 14C15 14 21 17 26 24C30 29 32 35 32 40Z" opacity="0.8" />
    <path d="M32 41C38 41 48 38 54 32C59 27 60 21 60 21C60 21 54 24 46 31C40 36 35 40 32 41Z" opacity="0.65" />
    <path d="M32 41C26 41 16 38 10 32C5 27 4 21 4 21C4 21 10 24 18 31C24 36 29 40 32 41Z" opacity="0.65" />
    <path d="M18 45C22 47 27 48 32 48C37 48 42 47 46 45C52 48 56 52 56 52C56 52 46 51 32 51C18 51 8 52 8 52C8 52 12 48 18 45Z" opacity="0.9" />
  </svg>
);

// 9. Traditional Diya Lamp Motif
export const DiyaMotif: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#D4AF37]",
  size = 32
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 4C24 4 29 11 29 16C29 19.5 26.5 22 24 22C21.5 22 19 19.5 19 16C19 11 24 4 24 4Z" fill="#FFA500" />
    <path d="M24 9C24 9 27 13 27 16C27 18 25.5 19.5 24 19.5C22.5 19.5 21 18 21 16C21 13 24 9 24 9Z" fill="#FFF275" />
    <path d="M7 25C10 37 38 37 41 25C37 32 11 32 7 25Z" fill="currentColor" />
    <path d="M18 36H30V40H18V36Z" fill="currentColor" opacity="0.8" />
  </svg>
);

// 10. Ornate Corner Flourish
export const CornerFlourish: React.FC<{
  className?: string;
  size?: number;
  rotation?: 0 | 90 | 180 | 270;
}> = ({ className = "text-[#C5A059]", size = 56, rotation = 0 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <path d="M4 76V24C4 12.9543 12.9543 4 24 4H76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 76V26C12 18.268 18.268 12 26 12H76" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="24" cy="24" r="4" fill="currentColor" />
    <path d="M8 8L20 20" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="4" cy="76" r="2.5" fill="currentColor" />
    <circle cx="76" cy="4" r="2.5" fill="currentColor" />
    <path d="M24 8C24 16.8366 16.8366 24 8 24" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// 11. Elegant Mandala Divider with Auspicious Symbols
export const MandalaDivider: React.FC<{
  className?: string;
  title?: string;
  showSwastik?: boolean;
}> = ({ className = "my-6", title, showSwastik = false }) => (
  <div className={`flex items-center justify-center gap-3 sm:gap-4 ${className}`}>
    <div className="h-[1px] flex-1 max-w-[90px] sm:max-w-[160px] bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]" />
    <div className="flex items-center gap-2 text-[#B38728]">
      {showSwastik && <SwastikMotif size={18} className="text-[#8B0000]" />}
      <LotusMotif size={22} className="text-[#C5A059]" />
      {title && (
        <span className="font-royal text-xs sm:text-sm tracking-[0.2em] uppercase text-[#8C6D2B] font-semibold text-center px-1">
          {title}
        </span>
      )}
      <LotusMotif size={22} className="text-[#C5A059]" />
      {showSwastik && <SwastikMotif size={18} className="text-[#8B0000]" />}
    </div>
    <div className="h-[1px] flex-1 max-w-[90px] sm:max-w-[160px] bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]" />
  </div>
);
