const playSound = (soundUrl: string): void => {
  if (typeof window === "undefined" || typeof Audio === "undefined") return;

  try {
    const audio = new Audio(soundUrl);
    audio.volume = 0.5;

    audio.play().catch((error: unknown) => {
      console.error(
        "Audio play failed, user interaction may be required:",
        error
      );
    });
  } catch (error) {
    console.error("Error initializing audio:", error);
  }
};

export default playSound;
