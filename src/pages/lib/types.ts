export type BlogData = {
  id: string | number | undefined;
  title: string | undefined;
  date: string | undefined;
  desc: string | undefined;
};
export type Item = {
  items: BlogData[];
};
export type Id = string | number | undefined;
