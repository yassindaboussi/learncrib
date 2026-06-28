export type Course = {
  slug: string;
  title: string;
  category: string;
  description: string;
  price: number;
  hasCertificate: boolean;
  lessons: number;
  durationHours: number;
  studentCount: number;
};

export const courses: Course[] = [
  {
    slug: "watercolor-foundations",
    title: "Watercolor Foundations",
    category: "Art",
    description:
      "Learn to mix color with confidence and paint your first finished pieces in six sittings.",
    price: 39,
    hasCertificate: true,
    lessons: 12,
    durationHours: 5,
    studentCount: 482,
  },
  {
    slug: "intro-to-sourdough",
    title: "Intro to Sourdough",
    category: "Cooking",
    description:
      "Grow a starter from scratch and bake your first loaf with a reliable, repeatable method.",
    price: 0,
    hasCertificate: false,
    lessons: 8,
    durationHours: 3,
    studentCount: 1204,
  },
  {
    slug: "typescript-for-beginners",
    title: "TypeScript for Beginners",
    category: "Code",
    description:
      "A calm, practical path from plain JavaScript to confident, typed code.",
    price: 59,
    hasCertificate: true,
    lessons: 18,
    durationHours: 7.5,
    studentCount: 901,
  },
  {
    slug: "freelance-writing-101",
    title: "Freelance Writing 101",
    category: "Business",
    description:
      "Find your first paying clients and price your work without guessing.",
    price: 29,
    hasCertificate: true,
    lessons: 10,
    durationHours: 4,
    studentCount: 366,
  },
  {
    slug: "houseplant-care-basics",
    title: "Houseplant Care Basics",
    category: "Lifestyle",
    description:
      "Keep your plants alive and thriving with a simple weekly rhythm.",
    price: 0,
    hasCertificate: false,
    lessons: 6,
    durationHours: 2,
    studentCount: 754,
  },
  {
    slug: "piano-for-busy-adults",
    title: "Piano for Busy Adults",
    category: "Music",
    description:
      "Twenty minutes a day, four weeks, one song you can actually play.",
    price: 45,
    hasCertificate: true,
    lessons: 14,
    durationHours: 6,
    studentCount: 219,
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export type Enrollment = {
  slug: string;
  lessonsCompleted: number;
  finished: boolean;
};

// Static demo data — simulates "my courses" for the UI, no backend yet.
export const myEnrollments: Enrollment[] = [
  { slug: "watercolor-foundations", lessonsCompleted: 12, finished: true },
  { slug: "typescript-for-beginners", lessonsCompleted: 7, finished: false },
  { slug: "intro-to-sourdough", lessonsCompleted: 2, finished: false },
];

export function getEnrolledCourses() {
  return myEnrollments
    .map((e) => {
      const course = getCourse(e.slug);
      return course ? { ...course, ...e } : null;
    })
    .filter((c): c is Course & Enrollment => c !== null);
}

// ---- Admin dashboard data (static demo, no backend yet) ----

export type ActivityEvent = {
  id: string;
  type: "purchase" | "enrollment" | "certificate";
  studentName: string;
  courseSlug: string;
  timestamp: string; // human-readable for now
};

export const recentActivity: ActivityEvent[] = [
  {
    id: "a1",
    type: "certificate",
    studentName: "Mehdi Ouali",
    courseSlug: "watercolor-foundations",
    timestamp: "12 minutes ago",
  },
  {
    id: "a2",
    type: "purchase",
    studentName: "Lina Cherif",
    courseSlug: "typescript-for-beginners",
    timestamp: "48 minutes ago",
  },
  {
    id: "a3",
    type: "enrollment",
    studentName: "Omar Trabelsi",
    courseSlug: "houseplant-care-basics",
    timestamp: "2 hours ago",
  },
  {
    id: "a4",
    type: "purchase",
    studentName: "Nour Saidi",
    courseSlug: "piano-for-busy-adults",
    timestamp: "5 hours ago",
  },
  {
    id: "a5",
    type: "purchase",
    studentName: "Aymen Belkadi",
    courseSlug: "freelance-writing-101",
    timestamp: "Yesterday",
  },
  {
    id: "a6",
    type: "enrollment",
    studentName: "Sami Hammami",
    courseSlug: "intro-to-sourdough",
    timestamp: "Yesterday",
  },
];

export function getTotalStudents() {
  return courses.reduce((sum, c) => sum + c.studentCount, 0);
}

export function getTotalRevenue() {
  // Rough estimate: price × students, paid courses only.
  return courses.reduce((sum, c) => sum + c.price * c.studentCount, 0);
}

export function getCertificatesIssuedEstimate() {
  // Rough demo estimate: ~14% of students on certificate-bearing courses finish.
  return Math.round(
    courses
      .filter((c) => c.hasCertificate)
      .reduce((sum, c) => sum + c.studentCount, 0) * 0.14
  );
}

export function getTopCoursesByRevenue(limit = 4) {
  return [...courses]
    .map((c) => ({ ...c, revenue: c.price * c.studentCount }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, limit);
}

export type Student = {
  id: string;
  name: string;
  email: string;
  enrolledSlug: string;
  progressPct: number;
  certificateEarned: boolean;
  joined: string;
};

export const students: Student[] = [
  {
    id: "s1",
    name: "Mehdi Ouali",
    email: "mehdi.ouali@example.com",
    enrolledSlug: "watercolor-foundations",
    progressPct: 100,
    certificateEarned: true,
    joined: "Mar 2026",
  },
  {
    id: "s2",
    name: "Lina Cherif",
    email: "lina.cherif@example.com",
    enrolledSlug: "typescript-for-beginners",
    progressPct: 39,
    certificateEarned: false,
    joined: "Apr 2026",
  },
  {
    id: "s3",
    name: "Omar Trabelsi",
    email: "omar.trabelsi@example.com",
    enrolledSlug: "houseplant-care-basics",
    progressPct: 17,
    certificateEarned: false,
    joined: "Jun 2026",
  },
  {
    id: "s4",
    name: "Nour Saidi",
    email: "nour.saidi@example.com",
    enrolledSlug: "piano-for-busy-adults",
    progressPct: 64,
    certificateEarned: false,
    joined: "May 2026",
  },
  {
    id: "s5",
    name: "Aymen Belkadi",
    email: "aymen.belkadi@example.com",
    enrolledSlug: "freelance-writing-101",
    progressPct: 100,
    certificateEarned: true,
    joined: "Feb 2026",
  },
  {
    id: "s6",
    name: "Sami Hammami",
    email: "sami.hammami@example.com",
    enrolledSlug: "intro-to-sourdough",
    progressPct: 25,
    certificateEarned: false,
    joined: "Jun 2026",
  },
];
