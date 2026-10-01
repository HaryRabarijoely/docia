import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

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

    const storageDirectory = path.join(
      process.cwd(),
      "storage",
      "documents",
    );

    await mkdir(storageDirectory, { recursive: true });

    const fileId = randomUUID();
    const filePath = path.join(storageDirectory, `${fileId}.pdf`);

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    await writeFile(filePath, fileBuffer);

    return Response.json({
      success: true,
      fileName: file.name,
      fileSize: file.size,
      message: "Document enregistré avec succès.",
    });
  } catch {
    return Response.json(
      { error: "Une erreur est survenue lors de l'enregistrement du document." },
      { status: 500 },
    );
  }
}