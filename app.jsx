import React, { useState, useEffect } from 'react';
import { designSystemApi } from './services/designSystemApi';
import { BenefitsCard } from './components/BenefitsCard';
import { AgentPanel } from './agent/AgentPanel';
import employeeData from '../../Union Benefits-b/data/employee.json'; //[cite: 1]

export default function App() {
  const [benefits, setBenefits] = useState([]);
  const [customPatterns, setCustomPatterns] = useState([]);

  useEffect(() => {
    designSystemApi.fetchBenefits().then((data) => setBenefits(data));
  }, []);

  const handlePatternGenerated = (newPattern) => {
    setCustomPatterns((prev) => [...prev, newPattern]);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', background: '#f8fafc' }}>
      <main style={{ padding: '32px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h1 style={{ margin: '0 0 8px 0', fontSize: '24px', color: '#0f172a' }}>Union Benefits Portal</h1>
          <p style={{ margin: 0, color: '#64748b' }}>Welcome back, {employeeData.name || 'Member'}[cite: 1]</p>
        </header>

        <section aria-label="Benefits List" style={{ display: 'grid', gap: '16px' }}>
          <h2 style={{ fontSize: '18px', color: '#334155' }}>Enrolled Benefits</h2>
          {benefits.map((benefit) => (
            <BenefitsCard key={benefit.id} benefit={benefit} />
          ))}

          {customPatterns.map((pattern) => (
            <div key={pattern.id} style={{ border: '2px dashed #2563eb', padding: '16px', borderRadius: '8px', background: '#eff6ff' }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#1e40af' }}>{pattern.title}</h3>
              <span style={{ fontSize: '12px', background: '#dbeafe', padding: '2px 8px', borderRadius: '4px', color: '#1e3a8a' }}>
                {pattern.type}
              </span>
            </div>
          ))}
        </section>
      </main>

      <aside aria-label="Sidebar Control Center" style={{ background: '#ffffff', borderLeft: '1px solid #e2e8f0' }}>
        <AgentPanel onPatternGenerated={handlePatternGenerated} />
      </aside>
    </div>
  );
}
