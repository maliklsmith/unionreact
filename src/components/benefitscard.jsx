import { Card } from './Card';
import { Badge } from './Badge';

export function BenefitsCard({ benefit }) {
  return (
    <Card>
      <h3>{benefit.title}</h3>
      <p>Coverage: {benefit.coverage}</p>
      <Badge label={benefit.status} />
    </Card>
  );
}