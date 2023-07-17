import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import uuid from 'react-uuid';
import {
  Typography, Card, Row, Col, Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  RadioChangeEvent,
  Table,
} from 'antd';
import {
  EditOutlined
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setPrefixName, setFirstname, setLastname, setBirthdate, setNationality, setIdCard, setGender, setTel, setPassport, setSalary, resetForm } from '../Redux/formSlice';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';


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

  const [personData, setpersonData] = useState<Person[]>([])
  const [selectedRowKeys, setSelectedRowKeys] = useState<Person[]>([]);
  const [idEdit, setidEdit] = useState('')
  const [editButtom, seteditButtom] = useState(false)

  interface Person {
    id: string
    prefixName: string;
    firstname: string;
    lastname: string;
    birthdate: string;
    nationality: string;
    idCard: string;
    gender: string;
    tel: string;
    passport: string;
    salary: number | null;
  }

  useEffect(() => {
    const data = localStorage.getItem('personData')
    console.log(!!data);
    if (!!data) {
      const x = JSON.parse(data)
      setpersonData(x)
    } else {
      setpersonData([])
    }
    return () => {
    }
  }, [])


  console.log('personData', personData);

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

    if (editButtom === false) {
      const payload: Person = {
        id: `${uuid()}`, prefixName, firstname, lastname, birthdate, nationality, idCard, gender, tel, passport, salary
      }
      const array = [...personData, payload]
      console.log(array);
      localStorage.setItem('personData', JSON.stringify(array))
      window.location.reload()
    } else {
      console.log('idEdit', idEdit);
      const objectIndexToReplace = personData.findIndex(item => item.id === idEdit);
      if (objectIndexToReplace !== -1) {
        console.log('objectIndexToReplace', objectIndexToReplace);

        const payload: Person = {
          id: `${idEdit}`, prefixName, firstname, lastname, birthdate, nationality, idCard, gender, tel, passport, salary
        }

        const arr = [...personData]
        const elementPos = personData.map(function (x) { return x.id; }).indexOf(idEdit);
        arr[elementPos] = payload
        localStorage.setItem('personData', JSON.stringify(arr));
        window.location.reload()
      }
    }




  };
  const onReset = (values: any) => {
    dispatch(resetForm());
  }
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Person[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedRowKeys(selectedRows);
    }
  };




  const dispatch = useDispatch();
  const { Title } = Typography;
  const { t } = useTranslation();

  const handleEdit = (value: Person) => {
    seteditButtom(true)
    dispatch(setPrefixName(value?.prefixName));
    dispatch(setFirstname(value?.firstname));
    dispatch(setLastname(value?.lastname));
    dispatch(setBirthdate(value?.birthdate));
    dispatch(setNationality(value?.nationality));
    dispatch(setIdCard(value?.idCard));
    dispatch(setGender(value?.gender));
    dispatch(setTel(value?.tel));
    dispatch(setPassport(value?.passport));
    dispatch(setSalary(value?.salary));
    setidEdit(value?.id)
  }

  const columns = [
    {
      title: `${t('form.prefix')}`,
      dataIndex: 'prefixName',
      key: 'id',
      render: (prefixName: string) => <span>{prefixName === 'mr' ? `${t('form.prefixmr')}` : prefixName === 'ms' ? `${t('form.prefixms')}` : `${t('form.prefixmrs')}`}</span>,
      // render: (prefixName: string, record: any) => (<input
      //   value={prefixName}
      //   onChange={(e) => handleEditPerson(record.id, 'name', e.target.value)}
      // />),
      sorter: (a: Person, b: Person) => a.prefixName.localeCompare(b.prefixName),
      defaultSortOrder: undefined
    },
    {
      title: `${t('form.firstname')}`, dataIndex: 'firstname', key: 'id',
      sorter: (a: Person, b: Person) => a.firstname.localeCompare(b.firstname),
      defaultSortOrder: undefined
    },
    {
      title: `${t('form.lastname')}`, dataIndex: 'lastname', key: 'id', sorter: (a: Person, b: Person) => a.lastname.localeCompare(b.lastname),
      defaultSortOrder: undefined
    },
    {
      title: `${t('form.birthdate')}`, dataIndex: 'birthdate', key: 'id',
      sorter: (a: Person, b: Person) => {
        const dateA = dayjs(a.birthdate);
        const dateB = dayjs(b.birthdate);
        return dateA.isBefore(dateB) ? -1 : dateA.isAfter(dateB) ? 1 : 0;
      },
      defaultSortOrder: undefined
    },
    {
      title: `${t('form.nationality')}`, dataIndex: 'nationality', key: 'id', render: (nationality: string) => <span>{nationality === 'other' ? `${t('form.nationalityOther')}` : `${t('form.nationalityThai')}`}</span>,
      sorter: (a: Person, b: Person) => a.nationality.localeCompare(b.nationality),
      defaultSortOrder: undefined
    },
    {
      title: `${t('form.idCard')}`, dataIndex: 'idCard', key: 'id', sorter: (a: Person, b: Person) => a.idCard.localeCompare(b.idCard),
      defaultSortOrder: undefined
    },
    {
      title: `${t('form.gender')}`, dataIndex: 'gender', key: 'id', render: (gender: string) => <span> {gender === 'female' ? `${t('form.female')}` : gender === 'male' ? `${t('form.male')}` : `${t('form.none')}`}</span>,
      sorter: (a: Person, b: Person) => a.gender.localeCompare(b.gender),
      defaultSortOrder: undefined
    },
    {
      title: `${t('form.tel')}`, dataIndex: 'tel', key: 'id',
      sorter: (a: Person, b: Person) => a.tel.localeCompare(b.tel),
      defaultSortOrder: undefined
    },
    {
      title: `${t('form.passport')}`, dataIndex: 'passport', key: 'id',
      sorter: (a: Person, b: Person) => a.passport.localeCompare(b.passport),
      defaultSortOrder: undefined
    },
    {
      title: `${t('form.salary')}`, dataIndex: 'salary', key: 'id', render: (salary: number | null) => <span> {Number(salary).toLocaleString()} </span>,
      sorter: (a: Person, b: Person) => {
        const salaryA = a.salary ?? 0;
        const salaryB = b.salary ?? 0;
        return salaryA - salaryB;
      },
      defaultSortOrder: undefined
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'id',
      render: (value: Person) => <Button onClick={() => handleEdit(value)}>Edit</Button>,
    },
  ];

  const paginationConfig = {
    pageSize: 5,
    total: personData.length,
  };


  const onDeletedSelect = () => {
    for (const item of selectedRowKeys) {
      console.log('selectedRowKeys', item.id);
      const filteredPersonData = personData.filter((person) => person.id !== item.id);
      setpersonData(filteredPersonData);
      localStorage.setItem('personData', JSON.stringify(filteredPersonData))
    }
    setSelectedRowKeys([]);

    window.location.reload()
  }
  const onDeletedAll = () => {
    localStorage.setItem('personData', JSON.stringify([]))
    window.location.reload()
  }

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
                    <DatePicker value={birthdate ? dayjs(birthdate) : dayjs()} onChange={handleBirthdateChange} />
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

      <div>
        <Row gutter={16} style={{ margin: "10px 0px 10px 0px" }}>
          <Col>
            <Table dataSource={personData} columns={columns} rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }} pagination={paginationConfig} rowKey="id" scroll={{ x: 1500, y: 300 }} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col>
            <Button type="primary" htmlType="button" onClick={onDeletedSelect} danger disabled={selectedRowKeys.length === 0}>
              Delete Selected
            </Button>
          </Col>
          <Col>
            <Button type="primary" htmlType="button" onClick={onDeletedAll} danger>
              Delete All
            </Button>
          </Col>
        </Row>


      </div>
    </div>
  )
}
