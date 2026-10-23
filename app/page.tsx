"use client";

import { useEffect, useState } from "react";

type Device = {
  id: string;
  temp: number | null;
  pressure: number | null;
  rpm: number | null;
};

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
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const load = () =>
      fetch("/api/devices")
        .then((r) => r.json())
        .then((data) => {
          if (Array.isArray(data)) setDevices(data);
        })
        .catch(() => {});

    load();
    const timer = setInterval(load, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 p-8">
      <h1 className="text-white text-2xl font-bold mb-6">
        1号车间 · 设备状态
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {devices.map((d) => {
          const tone = getTone(d.temp);
          const s = toneStyles[tone];
          return (
            <div
              key={d.id}
              className={`bg-slate-800 rounded-lg p-4 border-l-4 ${s.border}`}
            >
              <div className="text-white font-semibold">{d.id}</div>
              <div className={`text-sm mt-1 ${s.text}`}>{toneLabels[tone]}</div>
              <div className="text-slate-400 text-sm mt-2">
                温度 {d.temp ?? "--"}°C
              </div>
              <div className="text-slate-400 text-sm">
                压力 {d.pressure ?? "--"}MPa
              </div>
              <div className="text-slate-400 text-sm">
                转速 {d.rpm ?? "--"}rpm
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
