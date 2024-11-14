import { create } from 'zustand';

type UserInfoType = {
  account_id: string;
  password: string;
};

type UserType = 'PERSONAL' | 'COMPANY';

type SignupStoreType = UserInfoType & {
  account_id: string;
  password: string;
  name: string;
  type: UserType;
  phone_number: string;
  tag_ids: string[];
  updatePhone: (newPhone: string) => void;
  updateInfo: (newInfo: UserInfoType) => void;
  updateUserType: (newType: UserType) => void;
  updateTag: (newTag: string[]) => void;
  updateName: (newName: string) => void;
  updateId: (newId: string) => void;
  updatePassword: (newPassword: string) => void;
};

export const signupStore = create<SignupStoreType>((set) => ({
  account_id: '',
  password: '',
  name: '',
  phone_number: '',
  type: 'PERSONAL',
  tag_ids: [],
  updatePhone: (newPhone: string) => set(() => ({ phone_number: newPhone })),
  updateInfo: (newInfo: UserInfoType) =>
    set(() => ({ account_id: newInfo.account_id, password: newInfo.password })),
  updateUserType: (newType: UserType) => set(() => ({ type: newType })),
  updateTag: (newTag: string[]) => set(() => ({ tag_ids: newTag })),
  updateName: (newName: string) => set(() => ({ name: newName })),
  updateId: (newId: string) => set(() => ({ account_id: newId })),
  updatePassword: (newPassword: string) => set(() => ({ password: newPassword })),
}));
