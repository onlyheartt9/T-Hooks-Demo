import { Provider, useStore } from 'reto';
import { XXXStore } from '@/stores/XXXstore';
import {
  Layout,
  Row,
  Col,
  Card,
  Button,
  Input,
  Select,
  Radio,
  Cascader,
  DatePicker,
  TreeSelect,
  Switch,
  Menu,
  Checkbox,
} from 'antd';
import moment from 'moment';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useCallback } from 'react';

const { Header, Footer, Sider, Content } = Layout;

function A() {
  const { getList } = useStore(XXXStore);
  const onClick = () => {
    getList({ A: Math.random() * 10 });
  };
  return (
    <div>
      <div>区域A</div>
      <Button onClick={onClick}>设置随机A参数</Button>
    </div>
  );
}

function B() {
  const { getList, params } = useStore(XXXStore);
  const onChange = (e) => {
    getList({ B: e.target.value });
  };
  return (
    <div>
      <div>区域B</div>
      <Input value={params.B} onChange={onChange} />
    </div>
  );
}

function C() {
  const { getList, params } = useStore(XXXStore);
  const onChange = (val) => {
    getList({ C: val });
  };
  return (
    <div>
      <div>区域C</div>
      <Select value={params.C} onChange={onChange}>
        <Select.Option value="C1">C1</Select.Option>
        <Select.Option value="C2">C2</Select.Option>
        <Select.Option value="C3">C3</Select.Option>
      </Select>
    </div>
  );
}

function D() {
  const { getList, params } = useStore(XXXStore);
  const onChange = (e) => {
    getList({ D: e.target.value });
  };
  return (
    <div>
      <div>区域D</div>
      <Radio.Group value={params.D} onChange={onChange}>
        <Radio.Button value="D1">D1-samll</Radio.Button>
        <Radio.Button value="D2">D2-default</Radio.Button>
        <Radio.Button value="D3">D3-large</Radio.Button>
      </Radio.Group>
    </div>
  );
}

function E() {
  const { getList, params } = useStore(XXXStore);
  const onChange = (e) => {
    getList({ E: e });
  };
  return (
    <div>
      <div>区域E</div>
      <TreeSelect
        style={{ width: '200px' }}
        value={params.E}
        onChange={onChange}
        treeData={[
          {
            title: 'light',
            value: 'light',
            children: [
              {
                title: 'bamboo',
                value: 'bamboo',
              },
            ],
          },
        ]}
      />
    </div>
  );
}
function F() {
  const { getList, params } = useStore(XXXStore);
  const onChange = (e) => {
    getList({ F: e.format('YYYY-MM-DD') });
  };
  return (
    <div>
      <div>区域F</div>
      <DatePicker value={moment(params.F, 'YYYY-MM-DD')} onChange={onChange} />
    </div>
  );
}

function G() {
  const { getList, params } = useStore(XXXStore);
  const onChange = (val) => {
    getList({ G: val });
  };
  const setHVal = () => {
    getList({ H: 'One' });
  };
  return (
    <div>
      <div>区域G</div>
      <Switch checked={params.G} onChange={onChange}></Switch>
      <Button onClick={setHVal}>设置区域H的值为One</Button>
    </div>
  );
}

function H() {
  const { getList, params } = useStore(XXXStore);
  const onClick = (val) => {
    getList({ H: val.key });
  };
  const setGVal = () => {
    getList({ G: false });
  };
  return (
    <div>
      <div>区域H</div>
      <Menu onClick={onClick} selectedKeys={[params.H]} mode="horizontal">
        <Menu.Item key="One" icon={<MailOutlined />}>
          One
        </Menu.Item>
        <Menu.Item key="Two" icon={<MailOutlined />}>
          Two
        </Menu.Item>
      </Menu>
      <Button onClick={setGVal}>设置区域G的值为false</Button>
    </div>
  );
}

function I() {
  const { getList, params } = useStore(XXXStore);
  const onChange = (val) => {
    getList({ I: val });
  };
  return (
    <div>
      <div>区域I</div>
      <Checkbox.Group
        value={params.I}
        style={{ width: '100%' }}
        onChange={onChange}
      >
        <Checkbox value="I1">I1</Checkbox>
        <Checkbox value="I2">I2</Checkbox>
        <Checkbox value="I3">I3</Checkbox>
      </Checkbox.Group>
    </div>
  );
}

function J() {
  const { getList, params, reset } = useStore(XXXStore);
  return (
    <div>
      <div>区域J</div>
      <Button
        onClick={() => {
          reset();
        }}
      >
        重置所有数据为初始值
      </Button>
    </div>
  );
}

function K() {
  return (
    <div>
      <div>区域K</div>
      <div></div>
    </div>
  );
}
function L() {
  return (
    <div>
      <div>区域L</div>
      <div></div>
    </div>
  );
}

// export default () => {
//   return (
//     <Layout>
//       <Header style={{ background: '#fff' }}>
//         <A></A>
//       </Header>
//       <Layout>
//         <Content>
//           <B></B>
//         </Content>
//         <Sider theme="light">
//           <C></C>
//         </Sider>
//       </Layout>
//       <Footer>
//         <D></D>
//       </Footer>
//     </Layout>
//   );
// };
const Demo = () => {
  const options = [A, B, C, D];
  const options1 = [G, H, I, J];
  const { getList, params } = useStore(XXXStore);
  console.log(params, 666);
  return (
    <div style={{ background: '#ececec', height: '100%', padding: '30px' }}>
      <Row style={{ marginBottom: '30px' }} gutter={16}>
        {options.map((Opt, index) => (
          <Col key={index} className="gutter-row" span={6}>
            <Card style={{ width: 300 }}>
              <Opt></Opt>
            </Card>
          </Col>
        ))}
      </Row>
      <Row style={{ marginBottom: '30px' }} gutter={16}>
        <Col className="gutter-row">
          <Card style={{ width: 300 }}>
            <E></E>
          </Card>
        </Col>
        <Col style={{ flex: 1 }} className="gutter-row" span={24}>
          <Card>
            {Object.keys(params).map((key) => (
              <div key={key}>
                <span>{key}:</span>
                <span>
                  {key !== 'G' ? params[key] : params[key] ? 'true' : 'false'}
                </span>
              </div>
            ))}
          </Card>
        </Col>
        <Col className="gutter-row">
          <Card style={{ width: 300 }}>
            <F></F>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginBottom: '30px' }} gutter={16}>
        {options1.map((Opt, index) => (
          <Col key={index} className="gutter-row" span={6}>
            <Card style={{ width: 300 }}>
              <Opt></Opt>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default () => {
  return (
    <Provider of={XXXStore}>
      <Demo></Demo>
    </Provider>
  );
};
