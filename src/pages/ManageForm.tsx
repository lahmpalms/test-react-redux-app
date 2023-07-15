import React from 'react'
import { useTranslation } from 'react-i18next';
import {
  Typography, Card, Row, Col, Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  RadioChangeEvent
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setPrefixName, setFirstname, setLastname, setBirthdate, setNationality, setIdCard, setGender, setTel, setPassport, setSalary, resetForm } from '../Redux/formSlice';
import { Dayjs } from 'dayjs';


export default function ManageForm() {

  const prefixName = useSelector((state: RootState) => state.form.prefixName);
  const firstname = useSelector((state: RootState) => state.form.firstname);
  const lastname = useSelector((state: RootState) => state.form.lastname);
  const birthdate = useSelector((state: RootState) => state.form.birthdate)
  const nationality = useSelector((state: RootState) => state.form.nationality)
  const idCard = useSelector((state: RootState) => state.form.idCard)
  const gender = useSelector((state: RootState) => state.form.gender)
  const tel = useSelector((state: RootState) => state.form.tel)
  const passport = useSelector((state: RootState) => state.form.passport)
  const salary = useSelector((state: RootState) => state.form.salary)



  const handlePrefixNameChange = (value: string) => {
    dispatch(setPrefixName(value));
  };
  const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFirstname(event.target.value));
  };
  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLastname(event.target.value));
  };
  const handleBirthdateChange = (value: Dayjs | null, dateString: string) => {
    dispatch(setBirthdate(dateString));
  };
  const handleNationalityChange = (value: string) => {
    dispatch(setNationality(value));
  };
  const handleIdCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIdCard(event.target.value));
  };
  const handleGenderChange = (e: RadioChangeEvent) => {
    dispatch(setGender(e.target.value));
  };
  const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTel(event.target.value));
  };
  const handlePassportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassport(event.target.value));
  };
  const handleSalaryChange = (value: number | null) => {
    dispatch(setSalary(value));
  };
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    const payload = {
      prefixName, firstname, lastname, birthdate, nationality, idCard, gender, tel, passport, salary
    }
    console.log('object', payload);
  };
  const onReset = (values: any) => {
    dispatch(resetForm());
  }


  const dispatch = useDispatch();
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
              onFinish={onFinish}
            >
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label={<span> {t('form.prefix')} <span style={{ color: 'red' }}>*</span> </span>}>
                    <Select
                      onChange={handlePrefixNameChange}
                      value={prefixName}
                      options={[
                        { value: 'mr', label: t('form.prefixmr') },
                        { value: 'ms', label: t('form.prefixms') },
                        { value: 'mrs', label: t('form.prefixmrs') },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label={<span> {t('form.firstname')} <span style={{ color: 'red' }}>*</span> </span>}>
                    <Input value={firstname} onChange={handleFirstnameChange} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label={<span> {t('form.lastname')} <span style={{ color: 'red' }}>*</span> </span>}>
                    <Input value={lastname} onChange={handleLastnameChange} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label={<span> {t('form.birthdate')} <span style={{ color: 'red' }}>*</span> </span>}>
                    <DatePicker onChange={handleBirthdateChange} />
                  </Form.Item>
                </Col>
                <Col span={16}>
                  <Form.Item label={<span> {t('form.nationality')} <span style={{ color: 'red' }}>*</span> </span>}>
                    <Select
                      placeholder={t('form.placeholderNationality')}
                      style={{ width: '100%' }}
                      options={[
                        { value: 'thai', label: t('form.nationalityThai') },
                        { value: 'other', label: t('form.nationalityOther') },
                      ]}
                      onChange={handleNationalityChange}
                      value={nationality}

                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={16}>
                  <Form.Item label={<span> {t('form.idCard')} <span style={{ color: 'red' }}>*</span> </span>}>
                    <Input onChange={handleIdCardChange} value={idCard} maxLength={13} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={16}>
                  <Form.Item label={<span> {t('form.gender')} <span style={{ color: 'red' }}>*</span> </span>}>
                    <Radio.Group onChange={handleGenderChange} value={gender}>
                      <Radio value="male">{t('form.male')}</Radio>
                      <Radio value="female">{t('form.female')}</Radio>
                      <Radio value="none">{t('form.none')}</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={16}>
                  <Form.Item label={<span> {t('form.tel')} <span style={{ color: 'red' }}>*</span> </span>}>
                    <Input value={tel} onChange={handleTelChange} addonBefore="+66" maxLength={9} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={16}>
                  <Form.Item label={<span> {t('form.passport')}</span>}>
                    <Input onChange={handlePassportChange} value={passport} maxLength={13} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={16}>
                  <Form.Item label={<span> {t('form.salary')} <span style={{ color: 'red' }}>*</span> </span>}>
                    <InputNumber value={salary} type='number' onChange={handleSalaryChange} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Button htmlType="button" onClick={onReset}>
                      Reset
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>

          </Card>
        </Col>
      </Row>

    </div>
  )
}
