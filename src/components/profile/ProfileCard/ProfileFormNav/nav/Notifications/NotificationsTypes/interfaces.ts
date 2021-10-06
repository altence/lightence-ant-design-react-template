export type Type = 'checkbox' | 'text';

export interface Option {
  id: number;
  header: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headerRender?: (text: string, props: any) => React.ReactNode;
  data: string[];
  dataRender?: (text: string) => React.ReactNode;
}
