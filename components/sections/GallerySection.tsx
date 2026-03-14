import Image from "next/image";
import { SectionHeading } from "@/components/common/SectionHeading";
import { galleryImages } from "@/config/site";
import styles from "@/styles/gallery-section.module.scss";

export function GallerySection() {
  return (
    <section id="gallery" className={styles.section} aria-label="Gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual look at professional deployment and support environments"
          centered
        />

        <div className={styles.grid} role="list">
          {galleryImages.map((image) => (
            <div key={image.src} className={styles.imageCard} role="listitem">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}