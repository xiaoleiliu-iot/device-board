import { devices } from "./data";

// 数据源：内存里的数组（临时方案，避免 dev 模式下的重编译循环）
//
// 等 Supabase 网络可用后，把下面整段换成：
//   import { createClient } from "@supabase/supabase-js";
//   const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SECRET_KEY!);
//
//   export async function GET() {
//     const { data, error } = await supabase.from("devices").select("*").order("id");
//     if (error) return Response.json({ error: error.message }, { status: 500 });
//     return Response.json(data.map((r) => ({ id: r.code, temp: r.temp, pressure: r.pressure, rpm: r.rpm })));
//   }
//
// 前端一行都不用改。

export async function GET() {
  return Response.json(devices);
}
