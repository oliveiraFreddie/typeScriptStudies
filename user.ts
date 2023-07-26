// accountInfo
// charInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string; //? faz com que o parametro seja opcional
};

const account: AccountInfo = {
  id: 123,
  name: "William",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "mario",
  level: 100,
};
