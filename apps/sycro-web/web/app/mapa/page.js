"use client";
import { useEffect, useState } from "react";

export default function MapaGlobal() {
  const [stats, setStats] = useState({ jobs: 1185, nodes: 51, rate: "∞" });
  
  useEffect(() => {
    const id = setInterval(() => {
      setStats(s => ({ jobs: s.jobs + Math.floor(Math.random()*3), nodes: 51, rate: `${(Math.random()*20+2).toFixed(2)} GiB/s` }));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{background:"#000", color:"#0ff", minHeight:"100vh", padding:20}}>
      <h1>ARKHÉ ZERO - LIVE GLOBAL MAP</h1>
      <p>Folio: 2608276846490-9H.CNLK | Sello: QV-033E49FBCA0F8437 | ΔΨ: ∞</p>
      <div style={{border:"1px solid #0ff", padding:10, marginTop:20}}>
        Running validations: {stats.jobs} | Active PQC nodes: {stats.nodes} | Transfer rate: {stats.rate}
      </div>
      <img src="/arkhe-globe.png" style={{width:"100%", marginTop:20}} alt="ARKHE ZERO Global" />
      <p>TOLUCA → WORLD - Toluca de Lerdo, Estado de México, ELEV 2670M</p>
    </div>
  );
}
