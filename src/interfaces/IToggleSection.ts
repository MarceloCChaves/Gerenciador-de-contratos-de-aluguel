export interface IToggleSection {
  icon: React.ReactNode
  label: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
