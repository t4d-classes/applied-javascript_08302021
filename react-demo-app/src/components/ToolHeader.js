
export const ToolHeader = ({ headerText }) => {

  return (
    <header>
      <h1>{headerText}</h1>
    </header>
  );

};

ToolHeader.defaultProps = {
  headerText: 'The Tool',
};