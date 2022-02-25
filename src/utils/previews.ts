import showdown from "showdown";
import slugify from "slugify";
import fs from "fs/promises";

const basepath = "./projects";

interface Metadata {
  title: string;
  date: string;
  stack: string;
  featured: string;
  description: string;
  slug: string;
}

interface Html {
  html: string;
}

export interface Previews {
  html: string;
  metadata: Metadata;
}

export async function previews():Promise<Previews[]> {
  const converter = new showdown.Converter({ metadata: true });
  const folderContent = await fs.readdir(basepath);

  const data : Previews[]= [];

  for await (const project of folderContent) {
    const path = basepath + "/" + project;
    const file = await fs.readFile(path, "utf8");
    const html = converter.makeHtml(file);
    const metadata = converter.getMetadata(false) as unknown as Metadata;
    data.push({
      html,
      metadata,
    });
  }
  return data;
}
