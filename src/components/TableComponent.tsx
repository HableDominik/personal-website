import Table from 'react-bootstrap/Table';

function TableComponent() {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th></th>
          <th>Mannschaft</th>
          <th>Sp</th>
          <th>S</th>
          <th>N</th>
          <th>+</th>
          <th>-</th>
          <th>P</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>Schönau 1</td>
          <td>5</td>
          <td>5</td>
          <td>0</td>
          <td>35</td>
          <td>10</td>
          <td>14</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Schweinbach 1</td>
          <td>5</td>
          <td>4</td>
          <td>1</td>
          <td>36</td>
          <td>9</td>
          <td>13</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Hagenberg 1</td>
          <td>5</td>
          <td>3</td>
          <td>2</td>
          <td>26</td>
          <td>19</td>
          <td>8</td>
        </tr>
        <tr>
          <td>4.</td>
          <td>Unterweißenbach 1</td>
          <td>5</td>
          <td>2</td>
          <td>3</td>
          <td>16</td>
          <td>29</td>
          <td>6</td>
        </tr>
        <tr>
          <td>5.</td>
          <td>Sandl 1</td>
          <td>5</td>
          <td>1</td>
          <td>4</td>
          <td>8</td>
          <td>37</td>
          <td>2</td>
        </tr>
        <tr>
          <td>6.</td>
          <td>Bad Zell 1</td>
          <td>5</td>
          <td>0</td>
          <td>5</td>
          <td>14</td>
          <td>31</td>
          <td>2</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComponent;