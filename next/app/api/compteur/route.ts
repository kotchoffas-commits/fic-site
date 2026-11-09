import { NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { headers } from "next/headers";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "compteur.json");

async function readCount(): Promise<number> {
  try {
    const content = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(content).count ?? 0;
  } catch {
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify({ count: 0 }), "utf-8");
    return 0;
  }
}

async function writeCount(count: number): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify({ count }), "utf-8");
}

export async function GET() {
  await headers(); // force le dynamisme (opt-out du prerender)
  const count = await readCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const current = await readCount();
  const next = current + 1;
  await writeCount(next);
  return NextResponse.json({ count: next });
}
