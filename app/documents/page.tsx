const documents = [
  {
    name: "Demande de résiliation.pdf",
    type: "Résiliation",
    status: "À vérifier",
    date: "24 septembre 2026",
  },
  {
    name: "Bulletin d'adhésion.pdf",
    type: "Adhésion",
    status: "Analysé",
    date: "23 septembre 2026",
  },
  {
    name: "Réclamation client.pdf",
    type: "Réclamation",
    status: "Conforme",
    date: "22 septembre 2026",
  },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Documents
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Consultez et analysez vos documents entrants.
          </p>
        </div>

        <button
          type="button"
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          + Analyser un document
        </button>
      </div>

      {/* STATISTICS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Total documents</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">128</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">À vérifier</p>
          <p className="mt-2 text-2xl font-semibold text-orange-600">12</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Conformes</p>
          <p className="mt-2 text-2xl font-semibold text-green-600">104</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">En traitement</p>
          <p className="mt-2 text-2xl font-semibold text-blue-600">12</p>
        </div>
      </div>

      {/* DOCUMENTS TABLE */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="font-semibold text-slate-900">
            Documents récents
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-6 py-4 font-medium">Document</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Statut</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {documents.map((document) => (
                <tr
                  key={document.name}
                  className="transition hover:bg-slate-50"
                >
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {document.name}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {document.type}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        document.status === "Conforme"
                          ? "bg-green-50 text-green-700"
                          : document.status === "À vérifier"
                            ? "bg-orange-50 text-orange-700"
                            : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {document.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-slate-500">
                    {document.date}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="font-medium text-blue-600 hover:text-blue-700"
                    >
                      Voir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}