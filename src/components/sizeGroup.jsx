
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SizeGroup() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" style={{marginRight:'2px'}}>Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
  );
}

export default SizeGroup;