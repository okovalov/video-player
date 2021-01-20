import React from 'react';

const format = (seconds: number): string => {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds().toString());

  if (hh) {
    return `${hh}:${pad(mm.toString())}:${ss}`;
  }
  return `${mm}:${ss}`;
};

const pad = (stringMessage: string): string => {
  return ('0' + stringMessage).slice(-2);
};

interface DurationProps {
  className?: string;
  seconds: number;
}

const Duration: React.FC<DurationProps> = ({
  className,
  seconds,
}: DurationProps) => {
  return (
    <time dateTime={`P${Math.round(seconds)}S`} className={className}>
      {format(seconds)}
    </time>
  );
};

export default Duration;
