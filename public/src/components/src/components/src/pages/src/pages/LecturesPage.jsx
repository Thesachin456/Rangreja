// src/pages/LecturesPage.jsx

import { useEffect, useState } from 'react';
import { fetchLectures } from '../api/fetchLectures';
import LectureList from '../components/LectureList';

export default function LecturesPage() {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLectures()
      .then((data) => {
        setLectures(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load lectures');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Loading lectures...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Today’s Lectures</h2>
      <LectureList items={lectures} />
    </section>
  );
}
