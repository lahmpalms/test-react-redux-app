import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  prefixName: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  nationality: string
  idCard: string;
  gender: string
  tel: string
  passport: string
  salary: number | null
}

const initialState: FormState = {
  prefixName: 'mr',
  firstname: '',
  lastname: '',
  birthdate: '',
  nationality: '',
  idCard: '',
  gender: '',
  tel: '',
  passport: '',
  salary: 0
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPrefixName: (state, action: PayloadAction<string>) => {
      state.prefixName = action.payload
    },
    setFirstname: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload
    },
    setLastname: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload
    },
    setBirthdate: (state, action: PayloadAction<string>) => {
      state.birthdate = action.payload
    },
    setNationality: (state, action: PayloadAction<string>) => {
      state.nationality = action.payload
    },
    setIdCard: (state, action: PayloadAction<string>) => {
      state.idCard = action.payload
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload
    },
    setTel: (state, action: PayloadAction<string>) => {
      state.tel = action.payload
    },
    setPassport: (state, action: PayloadAction<string>) => {
      state.passport = action.payload
    },
    setSalary: (state, action: PayloadAction<number | null>) => {
      state.salary = action.payload
    },
    resetForm: () => initialState,
  },
});

export const { setPrefixName, setFirstname, setLastname, setBirthdate, setNationality, setIdCard, setGender, setTel, setPassport, setSalary, resetForm } = formSlice.actions;
export default formSlice.reducer;
