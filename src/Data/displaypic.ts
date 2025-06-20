// displaypic.ts

// Define a type for each display picture object
interface DisplayPic {
  id: number;
  url: string;
}

// Strongly type the dp array using the interface
export const dp: DisplayPic[] = [
  {
    id: 0,
    url: "https://api.dicebear.com/9.x/lorelei/svg?seed=Andrea",
  },
  {
    id: 1,
    url: "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Liam",
  },
  {
    id: 2,
    url: "https://avatars.githubusercontent.com/u/87109294?v=4",
  },
];
