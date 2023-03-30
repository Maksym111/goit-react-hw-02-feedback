import PropTypes from 'prop-types';
import { MainSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <MainSection>
      {title && <Title>{title}</Title>}
      {children}
    </MainSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
