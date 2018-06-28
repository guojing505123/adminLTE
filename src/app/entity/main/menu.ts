
export interface Menu {
  menucode: string;
  menuname: string;
  menupage: string;
  menuicon: string;
  isleaf: boolean;
  children: Array<Menu>;
}
