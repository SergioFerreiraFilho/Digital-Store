import Accordion from 'react-bootstrap/Accordion';
import "./styles.css"

export default function AllCollapse() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ordenar por: mais relevantes</Accordion.Header>
        <Accordion.Body>
          Mais barato.
        </Accordion.Body>
        <Accordion.Body>
          Mais caro.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}