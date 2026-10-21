type Device = {
  id: string;
 
  
  temp: number | null;
  pressure: number | null;
  rpm: number | null;
};

const devices: Device[] = [
  { id: "CNC-01",temp: 62, pressure: 1.2, rpm: 1200 },
  { id: "CNC-02", temp: 60, pressure: 1.2, rpm: 1200 },
  { id: "CNC-03",  temp: 70, pressure: 1.3, rpm: 1230 },
  { id: "CNC-04",  temp: 71, pressure: 1.3, rpm: 1250 },
  { id: "CNC-05",   temp: 86, pressure: 1.8, rpm: 1800 },
  { id: "CNC-06",   temp: null, pressure: null, rpm: null },
];

const toneStyles = {
  ok: { border: "border-green-500", text: "text-green-400" },
  alarm: { border: "border-red-500", text: "text-red-400" },
  offline: { border: "border-gray-500", text: "text-gray-400" },
  unknown: { border: "border-yellow-500", text: "text-yellow-400" },
};
const toneLabels = {
  ok: "运行中",
  alarm: "告警",
  offline: "离线",
  unknown: "数据异常",
};
function getTone(temp: number | null): "ok" | "alarm" | "offline" | "unknown" {
  if (temp === null) return "offline";
  if (temp >= 70) return "alarm";
  if (temp >= 0 && temp < 70) return "ok";
  if (temp < 0) return "unknown";
  return "offline";
}
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 p-8">
      <h1 className="text-white text-2xl font-bold mb-6">
        1号车间 · 设备状态
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {devices.map((d) => {
          const s = toneStyles[getTone(d.temp)];
          return (
            <div
              key={d.id}
              className={`bg-slate-800 rounded-lg p-4 border-l-4 ${s.border}`}
            >
              <div className="text-white font-semibold">{d.id}</div>
              <div className={`text-sm mt-1 ${s.text}`}>{toneLabels[getTone(d.temp)]}</div>
              <div className="text-slate-400 text-sm mt-2">温度 {d.temp ?? "--"}°C</div>
              <div className="text-slate-400 text-sm">压力 {d.pressure ?? "--"}MPa</div>
              <div className="text-slate-400 text-sm">转速 {d.rpm ?? "--"}rpm</div>
            </div>
          );
        })}
      </div>
    </main>
  );
}