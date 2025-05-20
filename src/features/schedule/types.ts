export interface TimeCell {
  date: string; // (ex. 'yyyy-mm-dd')
  time: string; // (ex. 'hh:mm')
  available: boolean;
}

export interface UserRespond {
  userId: string;
  name: string;
  selectedTimes: TimeCell[];
}

export interface Schedule {
  id: string; // 고유 약속 ID (uuid)
  title: string; // 약속 제목
  dateRange: string[]; // 선택 가능한 날짜 목록 (ex. ['yyyy-mm-dd'])
  timeRange: string[]; // 하루 시간대 목록 (ex.['hh:mm'])
  createdAt: string; // ISO 문자열  (ex: "yyyy-mm-ddThh:mm:ssZ")
  timeCells: TimeCell[];
}
