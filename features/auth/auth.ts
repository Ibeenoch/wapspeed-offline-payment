
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Merchant Name: Sunday Adelodun
// Account Number: 1300577762
// Store Name: Sunday Store
// Amount: 523.55

interface QrcodeDecoded {
  'Merchant Name': string;
  'Account Number': string;
  'Store Name': string;
  Amount: string;
}

interface authState {
  value: number;
  showmodal: boolean;
  selectionmodal: boolean;
  processPhoto: boolean;
  imageUrl: string;
  passcode: string;
  user: any;
  activeTabs: 'home' | 'card' | 'saving' | 'salary' | 'main',
  status: 'idle' | 'loading' | 'success' | 'error',
  mainModalActive: boolean;
  skeletonHome: boolean;
  skeletonCard: boolean;
  skeletonSaving: boolean;
  hasSentSms: boolean;
  qrCodedetails: QrcodeDecoded;
}

const initialState: authState = {
  value: 0,
  showmodal: false,
  selectionmodal: false,
  imageUrl: '',
  passcode: '',
  user: {},
  activeTabs: 'home',
  status: 'idle',
  processPhoto: false,
  mainModalActive: false,
  skeletonHome: false,
  skeletonCard: false,
  skeletonSaving: false,
  hasSentSms: false,
  qrCodedetails: {
    'Merchant Name': '',
    'Account Number': '',
    'Store Name': '',
    Amount: '',
  }
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    shouldShowModal: (state, action: PayloadAction<boolean>) => {
      state.showmodal = action.payload;
    },
    setSelectionModal: (state, action: PayloadAction<boolean>) => {
      state.selectionmodal = action.payload;
    },
    setMainModalActive: (state, action: PayloadAction<boolean>) => {
      state.mainModalActive = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<'home' | 'card' | 'saving' | 'salary' | 'main'>) => {
      state.activeTabs = action.payload;
    },
    saveImageCaptured: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    setPasscode: (state, action: PayloadAction<string>) => {
      state.passcode = action.payload;
    },
  
    setProcessPhoto: (state, action: PayloadAction<boolean>) => {
      state.processPhoto = action.payload;
    },
    setSkeletonHome: (state, action: PayloadAction<boolean>) => {
      state.skeletonHome = action.payload;
    },
    setSkeletonCard: (state, action: PayloadAction<boolean>) => {
      state.skeletonCard = action.payload;
    },
    setSkeletonSaving: (state, action: PayloadAction<boolean>) => {
      state.skeletonSaving = action.payload;
    },
    setHasSentSMS: (state, action: PayloadAction<boolean>) => {
      state.hasSentSms = action.payload;
    },
    setQRcodeDetails: (state, action: PayloadAction<QrcodeDecoded>) => {
      state.qrCodedetails = action.payload;
    }
  },


  
});

export const selectUser = (state: RootState) => state.auth;

export const {  setValue, shouldShowModal, setPasscode, setHasSentSMS, setQRcodeDetails, saveImageCaptured, setMainModalActive, setSkeletonCard, setSkeletonHome, setSkeletonSaving, setProcessPhoto, setSelectionModal, setActiveTab } = authSlice.actions;
export default authSlice.reducer;
