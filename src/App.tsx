import { Col, Row } from 'antd';

import './index.css';

function App() {
  return (
    <div>
      <Row gutter={8} justify={'center'} align={'middle'}>
        <Col xs={24} sm={16} md={12} lg={8} xl={4} xxl={2}>
          <div className='Column'>Coluna 1</div>
        </Col>
        {/*         
        <Col span={4}>
          <div className='Column'>Coluna 2</div>
        </Col>
        <Col span={8}>
          <div className='Column'>Coluna 3</div>
        </Col>
        <Col span={4}>
          <div className='Column'>Coluna 4</div>
        </Col>
        <Col span={6}>
          <div className='Column'>Coluna 5</div>
        </Col>
        */}
      </Row>
    </div>
  );
}

export default App;
