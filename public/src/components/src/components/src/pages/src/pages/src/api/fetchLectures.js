// src/api/fetchLectures.js

export async function fetchLectures() {
  try {
    const response = await fetch('https://edu-vibe-nt.vercel.app/api/lectures'); // Update if needed
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const lectures = await response.json();
    return lectures;
  } catch (error) {
    console.error('Error fetching lectures:', error);
    throw error;
  }
}
