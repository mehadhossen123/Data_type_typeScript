interface UserAccount {
  id: number;
  username: string;
  password: string;
}

type OmitPass= Omit<UserAccount,'password'>
type ex=Exclude <UserAccount,"password">