import { Col, Row } from 'antd';

import './index.css';

function App() {
  return (
    <div>
      <Row>
        <Col className='Column' span={4}>
          Coluna 1
        </Col>
        <Col className='Column' span={4}>
          Coluna 2
        </Col>
        <Col className='Column' span={8}>
          Coluna 3
        </Col>
        <Col className='Column' span={4}>
          Coluna 4
        </Col>
        <Col className='Column' span={6}>
          Coluna 5
        </Col>
      </Row>
    </div>
  );
}

export default App;
