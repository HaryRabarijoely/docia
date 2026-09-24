export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
              D
            </div>

            <div>
              <h1 className="text-xl font-semibold text-slate-900">
                DocIA
              </h1>
              <p className="text-xs text-slate-500">
                Analyse intelligente de documents
              </p>
            </div>
          </div>
        </header>

        <section className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Assistant IA pour documents
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Transformez vos documents
              <span className="block text-blue-600">
                en actions intelligentes.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              DocIA analyse vos documents, extrait les informations importantes,
              applique vos règles métier et prépare une réponse à valider.
            </p>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                + Analyser un document
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}