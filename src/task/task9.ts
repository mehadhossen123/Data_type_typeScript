
type DataType<T>=T extends any[]?"Large":"Small"
type A=DataType<string[]>