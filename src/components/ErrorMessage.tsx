import React from 'react';
import { useActions } from '../hooks/useActions';

interface ErrorProps {
  lastErrorMessage: string | null;
}

const ErrorMessage: React.FC<ErrorProps> = (props: ErrorProps) => {
  const { resetError } = useActions();

  const { lastErrorMessage } = props;
  return (
    <article className="message is-danger">
      <div className="message-header">
        <p>Danger</p>
        <button
          className="delete"
          aria-label="delete"
          onClick={() => resetError()}
        ></button>
      </div>
      <div className="message-body">{lastErrorMessage}</div>
    </article>
  );
};

export default ErrorMessage;
