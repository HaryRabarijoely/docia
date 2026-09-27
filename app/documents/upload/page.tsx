"use client";

import { ChangeEvent, useRef, useState } from "react";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

export default function DocumentUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    setError(null);

    if (!selectedFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      setFile(null);
      setError("Veuillez sélectionner uniquement un fichier PDF.");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setFile(null);
      setError("Le fichier ne doit pas dépasser 20 Mo.");
      return;
    }

    setFile(selectedFile);
  }

  function formatFileSize(size: number) {
    return `${(size / 1024 / 1024).toFixed(2)} Mo`;
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Analyser un document
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Importez un document PDF pour lancer son analyse avec DocIA.
        </p>
      </div>

      {/* UPLOAD CARD */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 px-6 py-16 text-center transition hover:border-blue-400 hover:bg-blue-50/30">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
            📄
          </div>

          <h2 className="mt-6 text-lg font-semibold text-slate-900">
            Déposez votre document ici
          </h2>

          <p className="mt-2 max-w-md text-sm text-slate-500">
            Glissez-déposez votre fichier PDF dans cette zone ou sélectionnez
            un fichier depuis votre ordinateur.
          </p>

          <input
            ref={inputRef}
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="mt-6 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Sélectionner un fichier
          </button>

          <p className="mt-4 text-xs text-slate-400">
            PDF uniquement · Taille maximale : 20 Mo
          </p>

          {/* ERROR */}
          {error && (
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          {/* SELECTED FILE */}
          {file && (
            <div className="mt-6 w-full max-w-md rounded-xl border border-green-200 bg-green-50 p-4 text-left">
              <p className="text-sm font-semibold text-green-800">
                Document sélectionné
              </p>

              <p className="mt-1 truncate text-sm text-green-700">
                📄 {file.name}
              </p>

              <p className="mt-1 text-xs text-green-600">
                {formatFileSize(file.size)}
              </p>
            </div>
          )}
        </div>

        {/* ANALYZE BUTTON */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            disabled={!file}
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Lancer l'analyse
          </button>
        </div>
      </div>

      {/* PROCESS */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="font-semibold text-slate-900">
          Comment fonctionne DocIA ?
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <div className="text-2xl">📄</div>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              1. Import
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Votre document est sécurisé et préparé pour l'analyse.
            </p>
          </div>

          <div>
            <div className="text-2xl">🧠</div>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              2. Analyse IA
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              DocIA comprend le document et extrait les informations utiles.
            </p>
          </div>

          <div>
            <div className="text-2xl">✅</div>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              3. Validation
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Vous vérifiez les résultats avant toute décision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}