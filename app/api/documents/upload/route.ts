export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return Response.json(
        { error: "Aucun fichier PDF fourni." },
        { status: 400 },
      );
    }

    if (file.type !== "application/pdf") {
      return Response.json(
        { error: "Le fichier doit être au format PDF." },
        { status: 400 },
      );
    }

    const MAX_FILE_SIZE = 20 * 1024 * 1024;

    if (file.size > MAX_FILE_SIZE) {
      return Response.json(
        { error: "Le fichier ne doit pas dépasser 20 Mo." },
        { status: 400 },
      );
    }

    return Response.json({
      success: true,
      fileName: file.name,
      fileSize: file.size,
      message: "Document reçu avec succès.",
    });
  } catch {
    return Response.json(
      { error: "Une erreur est survenue lors de la réception du document." },
      { status: 500 },
    );
  }
}