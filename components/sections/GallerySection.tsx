import Image from "next/image";
import { SectionHeading } from "@/components/common/SectionHeading";
import { galleryImages } from "@/config/site";
import styles from "@/styles/gallery-section.module.scss";

export function GallerySection() {
  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual look at professional deployment and support environments"
          centered
        />

        <div className={styles.grid}>
          {galleryImages.map((image) => (
            <div key={image.src} className={styles.imageCard}>
              <Image src={image.src} alt={image.alt} fill className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}