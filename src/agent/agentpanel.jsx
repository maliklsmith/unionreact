import React, { useState } from 'react';
import { designSystemApi } from '../services/designSystemApi';
import { Button } from '../components/Button';

export function AgentPanel({ onPatternGenerated }) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const newPattern = await designSystemApi.generatePatternFromPrompt(prompt);
    onPatternGenerated(newPattern);
    setLoading(false);
    setPrompt('');
  };

  return (
    <div aria-label="AI Agent Panel" style={{ borderLeft: '1px solid #e2e8f0', padding: '16px' }}>
      <h2>AI Agents</h2>
      <input 
        type="text" 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="Describe a new benefit pattern..."
        aria-label="Prompt input for UI generation"
      />
      <Button onClick={handleGenerate} ariaLabel="Generate UI from prompt">
        {loading ? 'Generating...' : 'Prompt → Generate'}
      </Button>
    </div>
  );
}