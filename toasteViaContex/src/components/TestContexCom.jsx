// src/components/TestContexCom.jsx
import { useContext } from 'react';
import { ToastContext } from '../context/ToasteContext';

function TestButton() {
  const { notify, toasts } = useContext(ToastContext);

  return (
    <>
      <button
        className="bg-slate-600 m-4 p-3 rounded-2xl"
        onClick={() => notify('Clicked', 'success')}
      >
        clickMe!
      </button>

      <div className="flex h-10 w-50  flex-col gap-2 px-4">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="rounded-xl bg-slate-800 text-white px-4 py-2 text-sm"
          >
            {t.message}
          </div>
        ))}
      </div>
    </>
  );
}

export default TestButton;