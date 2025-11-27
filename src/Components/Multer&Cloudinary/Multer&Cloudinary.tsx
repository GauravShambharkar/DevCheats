import BreadCrumb from "../BreadCrumbs/BreadCrumb";
import CodeBlock from "../ui/CodeBlock";

type breadCrumbType = {
  breadCrumb: string;
};

type GuideStep = {
  title: string;
  description: string;
  fileName: string;
  code: string;
  language?: string;
};

const multerSteps: GuideStep[] = [
  {
    title: "Install backend dependencies",
    description:
      "We need Express to host the API, Multer for parsing multipart form-data, and Cloudinary SDK for uploads.",
    fileName: "terminal",
    language: "bash",
    code: [
      "npm install express multer cors dotenv cloudinary multer-storage-cloudinary",
      "npm install --save-dev @types/express @types/multer",
    ].join("\n"),
  },
  {
    title: "Configure Cloudinary once",
    description:
      "Keep secrets in .env and export a configured Cloudinary instance for the rest of the server to reuse.",
    fileName: "src/config/cloudinary.ts",
    language: "ts",
    code: [
      'import { v2 as cloudinary } from "cloudinary";',
      'import "dotenv/config";',
      "",
      "cloudinary.config({",
      "  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,",
      "  api_key: process.env.CLOUDINARY_API_KEY,",
      "  api_secret: process.env.CLOUDINARY_API_SECRET,",
      "});",
      "",
      "export { cloudinary };",
    ].join("\n"),
  },
  {
    title: "Wire Multer to upload directly to Cloudinary",
    description:
      "multer-storage-cloudinary streams the incoming file to Cloudinary and exposes the secure URL on req.file.",
    fileName: "src/config/upload.ts",
    language: "ts",
    code: [
      'import multer from "multer";',
      'import { CloudinaryStorage } from "multer-storage-cloudinary";',
      'import { cloudinary } from "./cloudinary";',
      "",
      "const storage = new CloudinaryStorage({",
      "  cloudinary,",
      "  params: {",
      '    folder: "dev-cheats",',
      '    allowed_formats: ["jpg", "png", "webp"],',
      "  },",
      "});",
      "",
      "export const upload = multer({ storage });",
    ].join("\n"),
  },
  {
    title: "Create the upload endpoint",
    description:
      "The route uses the upload.single middleware, saves meta-data, and returns the hosted image URL.",
    fileName: "src/routes/upload.ts",
    language: "ts",
    code: [
      'import { Router } from "express";',
      'import { upload } from "../config/upload";',
      "",
      "const router = Router();",
      "",
      'router.post("/upload", upload.single("file"), (req, res) => {',
      "  if (!req.file) {",
      '    return res.status(400).json({ message: "No file provided" });',
      "  }",
      "",
      "  const { path, filename } = req.file as Express.Multer.File & {",
      "    path: string;",
      "  };",
      "",
      "  return res.status(201).json({",
      "    url: path,",
      "    name: filename,",
      '    message: "Upload complete",',
      "  });",
      "});",
      "",
      "export default router;",
    ].join("\n"),
  },
  {
    title: "Bootstrap the server + consume from React",
    description:
      "Spin up Express with CORS enabled, then POST a FormData from the frontend and display the returned image.",
    fileName: "server.ts & src/components/ImageUploader.tsx",
    language: "tsx",
    code: [
      "// server.ts",
      'import express from "express";',
      'import cors from "cors";',
      'import uploadRouter from "./routes/upload";',
      "",
      "const app = express();",
      "app.use(cors());",
      'app.use("/api", uploadRouter);',
      "",
      'app.listen(4000, () => console.log("Server ready on http://localhost:4000"));',
      "",
      "// src/components/ImageUploader.tsx",
      'import { useState } from "react";',
      "",
      "const ImageUploader = () => {",
      "  const [preview, setPreview] = useState<string | null>(null);",
      "",
      "  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {",
      "    const file = event.target.files?.[0];",
      "    if (!file) return;",
      "",
      "    const body = new FormData();",
      '    body.append("file", file);',
      "",
      '    const res = await fetch("http://localhost:4000/api/upload", {',
      '      method: "POST",',
      "      body,",
      "    });",
      "",
      "    const data = await res.json();",
      "    setPreview(data.url);",
      "  };",
      "",
      "  return (",
      '    <div className="flex flex-col gap-3 rounded-2xl border border-sky-200 bg-white p-4 shadow-sm">',
      '      <input type="file" onChange={handleUpload} />',
      '      {preview && <img src={preview} alt="upload" className="h-48 w-full object-cover" />}',
      "    </div>",
      "  );",
      "};",
      "",
      "export default ImageUploader;",
    ].join("\n"),
  },
];

const Multer_Cloudinary: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <div className="flex h-full w-full flex-col gap-4 py-2 overflow-auto">
      <BreadCrumb breadCrumb={breadCrumb} />
      <p className="text-sm text-slate-600">
        Combine Multer + Cloudinary to give users instant media uploads without
        managing your own storage. The flow below streams files straight from
        the client to Cloudinary through a lightweight Express API.
      </p>
      <div className="flex flex-col gap-4">
        {multerSteps.map((step, index) => (
          <section
            key={step.title}
            className="rounded-2xl border border-sky-200 bg-white p-4 shadow-sm"
          >
            <div className="mb-3 flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                Step {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
            <CodeBlock
              code={step.code}
              fileName={step.fileName}
              language={step.language}
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Multer_Cloudinary;
