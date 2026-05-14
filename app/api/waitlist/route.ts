import { NextResponse } from "next/server";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";

const schema = z.object({
  email: z.string().email().max(254),
});

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");

type Entry = { email: string; at: string };

async function readAll(): Promise<Entry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw) as Entry[];
  } catch {
    return [];
  }
}

async function writeAll(entries: Entry[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf8");
}

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  const email = parsed.data.email.toLowerCase().trim();

  const entries = await readAll();
  if (!entries.find((e) => e.email === email)) {
    entries.push({ email, at: new Date().toISOString() });
    await writeAll(entries);
  }

  return NextResponse.json({ ok: true });
}
