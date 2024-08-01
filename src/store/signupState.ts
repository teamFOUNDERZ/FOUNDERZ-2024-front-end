import { create } from 'zustand';

type UserInfoType = {
  account_id: string;
  password: string;
};

type UserType = 'PERSONAL' | 'COMPANY';

type SignupStoreType = UserInfoType & {
  name: string;
  phone_number: string;
  tag_name: string[];
  user_type: UserType;
  updatePhone: (newPhone: string) => void;
  updateInfo: (newInfo: UserInfoType) => void;
  updateUserType: (newType: UserType) => void;
  updateTag: (newTag: string[]) => void;
};

export const signupStore = create<SignupStoreType>((set) => ({
  account_id: '',
  password: '',
  name: '',
  phone_number: '',
  user_type: 'PERSONAL',
  tag_name: [],
  updatePhone: (newPhone: string) => set(() => ({ phone_number: newPhone })),
  updateInfo: (newInfo: UserInfoType) =>
    set(() => ({ account_id: newInfo.account_id, password: newInfo.password })),
  updateUserType: (newType: UserType) => set(() => ({ user_type: newType })),
  updateTag: (newTag: string[]) => set(() => ({ tag_name: newTag })),
}));
