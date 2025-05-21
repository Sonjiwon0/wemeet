'use client';

import { addSchedule } from '@/features/schedule/slice';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useRouter } from 'next/navigation';

import { useDispatch } from 'react-redux';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const testValue = useAppSelector((state) => state.schedule.schedules);

  const handleClick = () => {
    router.push('./create');
  };

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
      <span>We Meet !</span>
      <span>시간 조율 앱</span>
      <div>
        <button onClick={handleClick}>시간 정하기</button>
        <button>참여 코드 입력</button>
      </div>
    </div>
  );
}
