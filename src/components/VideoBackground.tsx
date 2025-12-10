interface VideoBackgroundProps {
  children: React.ReactNode;
}

export default function VideoBackground({ children }: VideoBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/mLwlGsRhNIU?autoplay=1&mute=1&loop=1&playlist=mLwlGsRhNIU&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Background video"
          allow="autoplay; encrypted-media"
          style={{ pointerEvents: 'none' }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-slate-900/85 to-blue-950/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
