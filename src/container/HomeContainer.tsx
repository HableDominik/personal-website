import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Accordion, Card, Button } from 'react-bootstrap';
import TableComponent from '../components/TableComponent';

function HomeContainer() {

  const [activeKey, setActiveKey] = useState(null);
  const items = [
    { title: 'Gruppe A', content: 'A' },
    { title: 'Gruppe B', content: 'B' },
    { title: 'Gruppe C', content: 'C' },
    { title: 'Gruppe D', content: 'D' },
    { title: 'Gruppe E', content: 'E' },
    { title: 'Gruppe F', content: 'F' },
    { title: 'Gruppe G', content: 'G' },
    { title: 'Gruppe H', content: 'H' }
  ];

  return (
    <Tabs
    defaultActiveKey="tables"
    id="justify-tabs"
    className="mb-1 px-1"
    variant="pills"
    justify
  >
    <Tab eventKey="tables" title="Tabellen" className="px-1">
    <Accordion defaultActiveKey="0" flush>
      {items.map((item, index) => (
        <Accordion.Item eventKey={index.toString()}> 
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
            <TableComponent />
          </Accordion.Body>
        </Accordion.Item>        
      ))}
    </Accordion>
    </Tab>
    <Tab eventKey="encounters" title="Begegnungen">
      <h2>Begegnungen</h2>
    </Tab>
  </Tabs>
  );
}
  
export default HomeContainer;