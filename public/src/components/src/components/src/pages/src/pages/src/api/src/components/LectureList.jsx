// src/components/LectureList.jsx

import LectureCard from './LectureCard';

export default function LectureList({ items }) {
  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500">No lectures available right now.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((lecture, index) => (
        <LectureCard key={index} lecture={lecture} />
      ))}
    </div>
  );
}
