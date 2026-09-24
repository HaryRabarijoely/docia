import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DocIA",
  description: "Analyse intelligente de documents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full bg-slate-100 text-slate-900">
        <div className="flex h-full">
          
          {/* SIDEBAR */}
          <aside className="w-64 bg-white border-r border-slate-200 p-4 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
                D
              </div>
              <span className="text-lg font-semibold">DocIA</span>
            </div>

            <nav className="flex flex-col gap-2 text-sm">
              <a className="px-3 py-2 rounded-lg hover:bg-slate-100">
                📊 Dashboard
              </a>
              <a className="px-3 py-2 rounded-lg hover:bg-slate-100">
                📄 Documents
              </a>
              <a className="px-3 py-2 rounded-lg hover:bg-slate-100">
                ⚙️ Règles
              </a>
              <a className="px-3 py-2 rounded-lg hover:bg-slate-100">
                👥 Utilisateurs
              </a>
              <a className="px-3 py-2 rounded-lg hover:bg-slate-100">
                ⚙️ Paramètres
              </a>
            </nav>
          </aside>

          {/* MAIN */}
          <div className="flex flex-1 flex-col">
            
            {/* HEADER */}
            <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-end px-6">
              <div className="text-sm text-slate-600">
                👤 Mon compte
              </div>
            </header>

            {/* CONTENT */}
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}