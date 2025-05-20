'use client';

import { addSchedule } from '@/features/schedule/slice';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const testValue = useAppSelector((state) => state.schedule.schedules);

  const handleAdd = () => {
    dispatch(
      addSchedule({
        id: String(Date.now()),
        title: '테스트 일정',
        dateRange: ['2025-05-20'],
        timeRange: ['10:00', '11:00'],
        createdAt: new Date().toISOString(),
        timeCells: [
          { date: '2025-05-20', time: '10:00', available: true },
          { date: '2025-05-20', time: '11:00', available: false },
        ],
      })
    );
  };

  console.log('test Value :', testValue);
  return (
    <div>
      스케줄 추가 테스트
      <button onClick={handleAdd}>일정 추가 버튼</button>
      <ul>
        {testValue?.map((schedule) => (
          <li key={schedule.id}>
            <strong>
              {schedule.title} ㅡ {schedule.dateRange.join(', ')}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
