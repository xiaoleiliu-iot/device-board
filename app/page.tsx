export default function Home() {
  return (
  <main className="min-h-screen bg-slate-900 p-8">
    <h1 className="text-white text-2xl font-bold mb-6">
      1号车间 · 设备状态    
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-slate-800 rounded-lg p-4 border-1-4 border-green-500">
        <div className="text-white font-semibold">CNC-01</div>
        <div className="text-green-400 text-sm mt-1">运行中</div>
        <div className="text-slate-400 text-xs mt-2">温度 62℃</div>
        <div className="text-slate-400 text-sm ">压力 1.2MPa</div>
        <div className="text-slate-400 text-sm ">转速 1200rpm</div>
      </div>
      <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-green-500">
          <div className="text-white font-semibold">CNC-02</div>
          <div className="text-green-400 text-sm mt-1">运行中</div>
          <div className="text-slate-400 text-sm mt-2">温度 60°C</div>
          <div className="text-slate-400 text-sm">压力 1.2MPa</div>
          <div className="text-slate-400 text-sm">转速 1200rpm</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-red-500">
          <div className="text-white font-semibold">CNC-03</div>
          <div className="text-red-400 text-sm mt-1">警告</div>
          <div className="text-slate-400 text-sm mt-2">温度 70°C</div>
          <div className="text-slate-400 text-sm">压力 1.3MPa</div>
          <div className="text-slate-400 text-sm">转速 1230rpm</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-red-500">
          <div className="text-white font-semibold">CNC-04</div>
          <div className="text-red-400 text-sm mt-1">警告</div>
          <div className="text-slate-400 text-sm mt-2">温度 71°C</div>
          <div className="text-slate-400 text-sm">压力 1.3MPa</div>
          <div className="text-slate-400 text-sm">转速 1250rpm</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-red-500">
          <div className="text-white font-semibold">CNC-05</div>
          <div className="text-red-400 text-sm mt-1">警告</div>
          <div className="text-slate-400 text-sm mt-2">温度 86°C</div>
          <div className="text-slate-400 text-sm">压力 1.8MPa</div>
          <div className="text-slate-400 text-sm">转速 1800rpm</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border-l-4 border-gray-500">
          <div className="text-white font-semibold">CNC-06</div>
          <div className="text-gray-400 text-sm mt-1">离线</div>
          <div className="text-slate-400 text-sm mt-2">温度 --°C</div>
          <div className="text-slate-400 text-sm">压力 --MPa</div>
          <div className="text-slate-400 text-sm">转速 --rpm</div>
        </div>
    </div>
  </main>
  );
} 