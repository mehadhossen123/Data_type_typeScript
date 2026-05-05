const Colors = {
  Primary: "RED",
  Secondary: "BLUE",
} as const;

type ValidColor=typeof Colors [keyof typeof Colors]
const setColor=(c:ValidColor)=>{
    return c;
}

const result =setColor('BLUE')