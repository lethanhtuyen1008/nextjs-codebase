export function getListEmployee(): Promise<any> {
  return new Promise((res) => {
    res([
      {
        id: 1,
        name: 'name 1',
        chucdanh: 'chucdanh 1',
      },
      {
        id: 2,
        name: 'name 2',
        chucdanh: 'chucdanh 2',
      },
    ]);
  });
}
