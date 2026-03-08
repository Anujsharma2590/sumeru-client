# Image assets for Sumeru Securities website

Add the following files to this folder (or to `public/` for root-level assets). The app references these paths; use the recommended sizes and formats for best quality and performance.

## Root-level (in `public/`)

| Path | Recommended size | Aspect | Format | Description | Where used |
|------|------------------|--------|--------|-------------|------------|
| `logo.png` | (provided) | — | PNG | Sumeru logo (orange on transparent or white) | Header, Footer |
| `favicon.ico` | 32×32 | — | ICO | Favicon from logo mark | Browser tab |
| `apple-touch-icon.png` | 180×180 | 1:1 | PNG | Apple touch icon | iOS home screen |
| `android-chrome-192x192.png` | 192×192 | 1:1 | PNG | PWA icon | Manifest |
| `android-chrome-512x512.png` | 512×512 | 1:1 | PNG | PWA icon | Manifest |

## In `public/images/`

| Path | Recommended size | Aspect | Format | Description | Where used |
|------|------------------|--------|--------|-------------|------------|
| `hero-security.jpg` | 1400×900 or 1920×1080 | ~16:10 or 16:9 | JPG | Professional security team or guard at commercial premises; space on one side for text | Hero main image |
| `hero-bg.jpg` (optional) | 1920×1080 | 16:9 | JPG | Same scene or wider shot for parallax background | Hero parallax layer |
| `poster-services.jpg` (optional) | 1920×800 | ~12:5 | JPG | Security + housekeeping + manpower in one frame; Indian commercial setting | Parallax/poster section |
| `gallery-1.jpg` | 800×600 | 4:3 | JPG | Security personnel at commercial entrance | Gallery |
| `gallery-2.jpg` | 800×600 | 4:3 | JPG | Professional guard on patrol | Gallery |
| `gallery-3.jpg` | 800×600 | 4:3 | JPG | CCTV / surveillance monitoring | Gallery |
| `gallery-4.jpg` | 800×600 | 4:3 | JPG | Housekeeping / facility support | Gallery |
| `gallery-bodyguard-1.jpg` | 800×600 | 4:3 | JPG | PSO / bodyguard or executive protection context | Gallery |
| `gallery-bodyguard-2.jpg` (optional) | 800×600 | 4:3 | JPG | Second bodyguard/PSO shot | Gallery |
| `og-image.jpg` | 1200×630 | 1.91:1 | JPG | Branded share image (logo + tagline or hero crop) | Open Graph / social |

## Notes

- **Hero:** If you only have PNG, name it `hero-security.png` and update the reference in `components/sections/HeroSection.tsx` and `app/layout.tsx` (OG image) accordingly.
- **Parallax:** If `poster-services.jpg` is missing, the parallax section still renders with a dark background and text.
- **Gallery:** The config in `config/site.ts` points to `gallery-bodyguard-1.jpg` and `gallery-bodyguard-2.jpg`. If your bodyguard assets use different filenames, update those paths in the config.
