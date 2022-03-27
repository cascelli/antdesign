import { Button, Col, Form, Input, Row } from 'antd';

import './index.css';

function App() {
  return (
    <div>
      <Form
        layout={'vertical'}
        autoComplete={'off'}
        onFinish={(form) => {
          // console.log('Envir formulário');
          console.log(form);
        }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label={'Primeiro nome'}
              name={'firstName'}
            >
              <Input placeholder={'Ex.: João'} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label={'Último nome'}
              name={'lastName'}
            >
              <Input placeholder={'Ex.: Batista'} />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label={'E-mail'}
              name={'email'}
              rules={[
                {
                  required: true,
                  message: 'E-mail é obrigatório',
                },
              ]}
            >
              <Input
                placeholder={'Ex.: joao.batista@gmail.com'}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button type={'primary'} htmlType={'submit'}>
              Enviar dados
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default App;
