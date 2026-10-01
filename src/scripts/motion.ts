// GSAP nur auf Desktop (≥ 1024 px) und ohne reduzierte Bewegung.
// Dynamischer Import → Mobile lädt GSAP gar nicht. Nur transform/opacity.

const DESKTOP = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';

export async function initMotion(): Promise<void> {
  if (!window.matchMedia(DESKTOP).matches) return;

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add(DESKTOP, () => {
    // Script-Headlines zeilenversetzt von unten
    gsap.utils.toArray<HTMLElement>('[aria-hidden="true"]:has(> [data-reveal-line])').forEach((group) => {
      gsap.from(group.querySelectorAll('[data-reveal-line]'), {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.14,
        scrollTrigger: { trigger: group, start: 'top 85%', once: true },
      });
    });

    // Allgemeine Einblendungen
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    // Gruppen mit gestaffelten Kindern (Karten, Galerie)
    gsap.utils.toArray<HTMLElement>('[data-reveal-stagger]').forEach((el) => {
      gsap.from(el.children, {
        y: 36,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    // Hero-Hintergrund: leichter Parallax
    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      gsap.fromTo(
        el,
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: 'none',
          scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      );
    });

    // Seitliche Kreise (Story): hereinrollen
    gsap.utils.toArray<HTMLElement>('[data-roll]').forEach((el) => {
      const fromLeft = el.dataset.roll === 'left';
      gsap.from(el, {
        xPercent: fromLeft ? -40 : 40,
        rotate: fromLeft ? -50 : 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });
  });
}
