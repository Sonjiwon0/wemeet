export interface Schedule {
  id: string; // 고유 약속 ID (uuid)
  title: string; // 약속 제목
  dateRange: string[]; // 선택 가능한 날짜 목록 (ex. ['yyyy-mm-dd'])
  timeRange: string[]; // 하루 시간대 목록 (ex.['hh:mm'])
  createdAt: string; // ISO 문자열  (ex: "yyyy-mm-ddThh:mm:ssZ")
}

export type TimeCellId = string;

export interface TimeCell {
  id: TimeCellId;
  date: string; // (ex. 'yyyy-mm-dd')
  time: string; // (ex. 'hh:mm')
}

export interface UserRespond {
  userId: string;
  nicknamd: string;
  selected: TimeCellId[]; // 사용자가 선택한 시간 칸 ID 목록
  sumittedAt: string;
}
