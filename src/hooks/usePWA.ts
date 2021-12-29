import { useEffect, useMemo, useState } from 'react';

interface UsePwaReturn {
  isPWASupported: boolean;
  promptInstall: Event | null;
  isStandalone: boolean;
}

export const usePWA = (): UsePwaReturn => {
  const [isPWASupported, setPWASupported] = useState(false);
  const [promptInstall, setPromptInstall] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setPWASupported(true);
      setPromptInstall(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);
  }, []);

  return useMemo(
    () => ({
      isPWASupported,
      promptInstall,
      isStandalone: window.matchMedia('(display-mode: standalone)').matches,
    }),
    [isPWASupported, promptInstall],
  );
};
