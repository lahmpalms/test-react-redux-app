import React from 'react'
import { useTranslation } from 'react-i18next';
import {
  Typography, Card, Row, Col, Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';

export default function ManageForm() {
  const { Title } = Typography;
  const { t } = useTranslation();

  return (
    <div>
      <Title level={3}>{t('form.title')}</Title>
      <Row justify="space-around" align="middle">
        <Col>
          <Card>
            <Form
              wrapperCol={{ span: 24 }}
              layout="horizontal"

            >
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label={<span> {t('form.prefix')} <span style={{ color: 'red' }}>*</span> </span>}>
                    <Select
                      value={'mr'}
                      options={[
                        { value: 'mr', label: t('form.prefixmr') },
                        { value: 'ms', label: t('form.prefixms') },
                        { value: 'mrs', label: t('form.prefixmrs') },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label={<span> ชื่อจริง <span style={{ color: 'red' }}>*</span> </span>}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label={<span> นามสกุล <span style={{ color: 'red' }}>*</span> </span>}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              {/* <Form.Item label="Form Size" name="size">
                <Radio.Group>
                  <Radio.Button value="small">Small</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Input">
                <Input />
              </Form.Item>
              <Form.Item label="Select">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="TreeSelect">
                <TreeSelect
                  treeData={[
                    { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Cascader">
                <Cascader
                  options={[
                    {
                      value: 'zhejiang',
                      label: 'Zhejiang',
                      children: [{ value: 'hangzhou', label: 'Hangzhou' }],
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="DatePicker">
                <DatePicker />
              </Form.Item>
              <Form.Item label="InputNumber">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Switch" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Form.Item label="Button">
                <Button>Button</Button>
              </Form.Item> */}
            </Form>
          </Card>
        </Col>
      </Row>

    </div>
  )
}
