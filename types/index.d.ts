interface ProfileProps {
  nickname: string;
  age: number;
  isMale: boolean;
  birthOfYear: number;
  birthOfMonth: number;
  birthOfDate: number;
  contact: `${string}-${string}-${string}`;
  uid: string;
  imageSrc?: string;
}

interface MeetingProps {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  title: string;
  fileFormat: string;
  fileSize: string;
}
