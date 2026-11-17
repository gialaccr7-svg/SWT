import type { ImgHTMLAttributes } from 'react';
import manifest from '@/lib/image-manifest.json';

type ImageEntry = { width: number; height: number; variants: { width: number; src: string }[] };
type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  src: string;
  alt: string;
  sizes: string;
};

/** Static picture markup, with original JPEG fallback and no client-side loader. */
export function ResponsiveImage({ src, alt, sizes, width, height, ...props }: Props) {
  const image = (manifest as Record<string, ImageEntry>)[src];
  if (!image)
    return <img src={src} alt={alt} sizes={sizes} width={width} height={height} {...props} />;
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={image.variants.map((variant) => `${variant.src} ${variant.width}w`).join(', ')}
        sizes={sizes}
      />
      <img
        src={src}
        alt={alt}
        width={width ?? image.width}
        height={height ?? image.height}
        {...props}
      />
    </picture>
  );
}
