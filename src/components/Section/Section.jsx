import PropTypes from 'prop-types';
import { MainSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <MainSection>
      <Title>{title}</Title>
      {children}
    </MainSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Section;
