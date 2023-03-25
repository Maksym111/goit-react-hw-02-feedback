import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  console.log(children);
  return <>{children}</>;
};

Section.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
