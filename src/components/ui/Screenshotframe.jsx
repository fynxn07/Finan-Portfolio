import React from 'react';

// A "browser window" frame for real UI screenshots. No forced aspect
// ratio here on purpose — the box's shape now comes entirely from the
// image's own natural dimensions (chrome bar height + image at its real
// ratio, scaled to fit the column width). That's what guarantees BOTH
// no cropping AND no empty letterbox space: the frame is never a
// different shape than the screenshot itself.
const ScreenshotFrame = ({ src, alt, className = '' }) => (
  <div className={`w-full rounded-2xl overflow-hidden bg-white border border-gray-200 ${className}`}>
    {/* Fake browser chrome */}
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
    </div>

    {/* No height constraint, no object-fit needed — the image just
        renders at its natural ratio, full width, nothing cropped and
        nothing left empty. */}
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="block w-full h-auto"
    />
  </div>
);

export default ScreenshotFrame;