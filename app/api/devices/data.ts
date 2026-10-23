export type Device = {
  id: string;
  temp: number | null;
  pressure: number | null;
  rpm: number | null;
};

export const devices: Device[] = [
  { id: "CNC-01", temp: 62, pressure: 1.2, rpm: 1200 },
  { id: "CNC-02", temp: 60, pressure: 1.2, rpm: 1200 },
  { id: "CNC-03", temp: 70, pressure: 1.3, rpm: 1230 },
  { id: "CNC-04", temp: 71, pressure: 1.3, rpm: 1250 },
  { id: "CNC-05", temp: 86, pressure: 1.8, rpm: 1800 },
  { id: "CNC-06", temp: null, pressure: null, rpm: null },
];
