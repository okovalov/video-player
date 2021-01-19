import React from 'react';
import MainHeader from '../../layout/headers/MainHeader';
import MainFooter from '../../layout/footers/MainFooter';

interface ChildProps {
  children: JSX.Element | JSX.Element[];
  sectionClass: string;
  containerClass: string;
}

const WithLayout: React.FC<ChildProps> = (props: ChildProps) => {
  const { children, sectionClass, containerClass } = props;
  return (
    <>
      <MainHeader />
      <section className={`section ${sectionClass}`}>
        <div className={`container ${containerClass}`}>{children}</div>
      </section>
      <MainFooter />
    </>
  );
};

export default WithLayout;
