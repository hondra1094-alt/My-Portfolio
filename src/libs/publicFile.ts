import fs from "fs";
import path from "path";

export function publicFileExists(fileUrl: string) {
  const filePath = path.join(process.cwd(), "public", fileUrl);
  return fs.existsSync(filePath);
}
