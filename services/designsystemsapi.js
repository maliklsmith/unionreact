import { tokens } from '../tokens';

export const designSystemApi = {
  async fetchBenefits() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'Health Insurance', status: 'Active', coverage: '90%' },
          { id: 2, title: '401(k) Matching', status: 'Eligible', coverage: '5%' }
        ]);
      }, 300);
    });
  },

  async generatePatternFromPrompt(prompt) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Date.now(),
          title: `Generated: ${prompt}`,
          type: 'Custom Benefit Card',
          tokensUsed: [tokens.colors.primary]
        });
      }, 500);
    });
  }
};