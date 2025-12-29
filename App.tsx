

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq("track", "PageView");
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 font-inter antialiased">
      {/* seus componentes */}
    </main>
  );
}
