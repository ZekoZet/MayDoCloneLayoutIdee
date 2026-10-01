// Hintergrundvideo nur auf Desktop: Quelle wird erst gesetzt, wenn das Video sichtbar ist.
// Mobil / reduzierte Bewegung → nur Posterbild.

const DESKTOP = '(min-width: 1024px) and (orientation: landscape) and (prefers-reduced-motion: no-preference)';

export function initVideos(): void {
  const videos = document.querySelectorAll<HTMLVideoElement>('video[data-src]');
  if (!videos.length || !window.matchMedia(DESKTOP).matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = video.dataset.src ?? '';
            video.addEventListener('playing', () => video.setAttribute('data-playing', 'true'), { once: true });
          }
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      }
    },
    { threshold: 0.15 },
  );

  videos.forEach((v) => observer.observe(v));
}
