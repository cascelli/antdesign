import { Col, Row, Typography } from 'antd';
import { useState } from 'react';
import './index.css';

const { Title, Paragraph } = Typography;

function App() {
  const [str, setStr] = useState('Daniel Bonifacio');

  return (
    <div>
      <Row gutter={8} justify={'center'}>
        <Col span={12}>
          <Title>Título de nível 1</Title>
          <Title level={2}>Título de nível 2</Title>
          <Title level={3}>Título de nível 3</Title>
          <Title level={4}>Título de nível 4</Title>
          <Title level={5}>Título de nível 5</Title>
        </Col>

        <Col span={12}>
          <Paragraph editable={{ onChange: setStr }}>
            {str}
          </Paragraph>
          <Paragraph ellipsis={{ rows: 2 }}>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. In neque quas ratione.
            Suscipit repudiandae mollitia rem quae id?
            Voluptate pariatur quisquam eveniet debitis
            reprehenderit, doloribus assumenda laborum quas
            sapiente corporis!
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}

export default App;
