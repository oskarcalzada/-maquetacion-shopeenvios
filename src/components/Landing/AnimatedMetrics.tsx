import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import '../../assets/css/animated-metrics.css';

interface MetricProps {
  value: number;
  suffix?: string;
  prefix?: string;
  title: string;
  subtitle: string;
  duration?: number;
}

const MetricCard = ({ value, suffix = '', prefix = '', title, subtitle, duration = 2 }: MetricProps) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`metric-${title.replace(/\s+/g, '-')}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [title]);

  return (
    <div id={`metric-${title.replace(/\s+/g, '-')}`} className="metric-card">
      <div className="metric-number">
        {prefix}
        {startAnimation ? (
          <CountUp
            start={0}
            end={value}
            duration={duration}
            separator=","
            useEasing={true}
            easingFn={(t, b, c, d) => {
              // easeOutQuart
              t /= d;
              t--;
              return -c * (t * t * t * t - 1) + b;
            }}
          />
        ) : (
          '0'
        )}
        {suffix}
      </div>
      <div className="metric-title">{title}</div>
      <div className="metric-subtitle">{subtitle}</div>
    </div>
  );
};

export default function AnimatedMetrics() {
  const metrics = [
    {
      value: 5,
      prefix: '+ ',
      suffix: ' MILLONES',
      title: 'de envíos',
      subtitle: 'Procesados exitosamente',
      duration: 2.5
    },
    {
      value: 100000,
      prefix: '+ ',
      suffix: '',
      title: 'Clientes satisfechos',
      subtitle: 'Confían en nosotros',
      duration: 3
    },
    {
      value: 98.7,
      suffix: '%',
      title: 'Entregas',
      subtitle: 'a tiempo',
      duration: 2
    },
    {
      value: 1000,
      prefix: '+ ',
      suffix: '',
      title: 'Tiendas online conectadas',
      subtitle: 'Integradas con nuestra plataforma',
      duration: 2.8
    },
    {
      value: 16,
      suffix: '',
      title: 'Líneas',
      subtitle: 'transportistas',
      duration: 1.5
    }
  ];

  return (
    <section className="animated-metrics-section">
      <div className="metrics-container">
        <h2 className="metrics-title">Números que nos respaldan</h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              title={metric.title}
              subtitle={metric.subtitle}
              duration={metric.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
