import NameEditModal from '@widgets/name-edit-modal/name-edit-modal';
import { useState } from 'react';

function App() {
  // 1. 모달 열림/닫힘 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. 현재 닉네임 상태 (서버 데이터라고 가정)
  const [nickname, setNickname] = useState('용인대장');

  // 3. 모달에서 '수정하기' 완료 시 실행될 함수
  const handleNameSubmit = (newName: string) => {
    console.log(`[Parent] 이름 변경 요청됨: ${newName}`);
    setNickname(newName); // 화면의 이름 업데이트
    // 모달 닫기는 NameEditModal 내부에서 onClose를 호출하며 처리됩니다.
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
        gap: '2rem',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ margin: 0, color: '#333' }}>마이페이지</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          현재 닉네임:{' '}
          <strong style={{ color: '#0055ff', fontSize: '1.5rem' }}>
            {nickname}
          </strong>
        </p>
      </div>

      {/* 모달 여는 버튼 */}
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          padding: '1rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        닉네임 수정하기
      </button>

      {/* 우리가 만든 위젯 */}
      <NameEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNameSubmit}
      />
    </div>
  );
}

export default App;
