import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="card">
      <p className="eyebrow">REACT + TYPESCRIPT + VITE</p>
      <h1>Frenoa</h1>
      <p>새로운 프로젝트를 시작할 준비가 되었습니다.</p>
      <button onClick={() => setCount((value) => value + 1)}>
        클릭 횟수: {count}
      </button>
      <p className="hint">
        <code>src/App.tsx</code>를 수정해 첫 화면을 만들어 보세요.
      </p>
    </main>
  )
}
