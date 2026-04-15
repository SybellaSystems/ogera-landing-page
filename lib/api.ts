const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface ApiWorker {
  user_id: string;
  full_name: string;
  title: string;
  description: string;
  location: string;
  profile_image_url: string | null;
  skills: string[];
  experience_years: number;
}

export interface ApiJob {
  job_id: string;
  job_title: string;
  category: string;
  budget: number;
  duration: string;
  location: string;
  status: string;
  description: string;
  employment_type: string;
  experience_level: string;
  created_at: string;
  applications: number;
  employer?: {
    full_name: string;
    email: string;
  };
}

export interface ApiCategory {
  id: string;
  name: string;
  job_count: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
}

// Refresh access token using the httpOnly refreshToken cookie set by the dashboard
export const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const res = await fetch(`${API_URL}/auth/refresh`, {
      method: 'GET',
      credentials: 'include',
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.data?.accessToken || null;
  } catch {
    return null;
  }
};

// Check if the logged-in student has already applied to a job
export const checkHasApplied = async (jobId: string): Promise<boolean> => {
  const token = await refreshAccessToken();
  if (!token) return false;
  try {
    const res = await fetch(`${API_URL}/jobs/${jobId}/check-application`, {
      credentials: 'include',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return false;
    const data = await res.json();
    return Boolean(data?.data?.hasApplied);
  } catch {
    return false;
  }
};

// Schedule an interview from the landing page worker profile (employer flow)
export const inviteStudentToInterview = async (
  studentId: string,
  scheduledAt: string,
  notes?: string,
): Promise<{ ok: true } | { ok: false; error: string }> => {
  const token = await refreshAccessToken();
  if (!token) return { ok: false, error: 'Please log in as an employer to invite students' };

  try {
    const res = await fetch(`${API_URL}/interviews`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        student_id: studentId,
        scheduled_at: scheduledAt,
        notes: notes || undefined,
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, error: data?.message || data?.error || 'Failed to schedule interview' };
    }
    return { ok: true };
  } catch (err: any) {
    return { ok: false, error: err?.message || 'Network error' };
  }
};

// Apply for a job from the landing page (uses refresh-then-apply flow)
export const applyForJobFromLanding = async (
  jobId: string,
  body: { cover_letter?: string }
): Promise<{ ok: true } | { ok: false; error: string }> => {
  const token = await refreshAccessToken();
  if (!token) return { ok: false, error: 'Please log in to apply' };

  try {
    const res = await fetch(`${API_URL}/jobs/${jobId}/apply`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, error: data?.message || data?.error || 'Failed to apply' };
    }
    return { ok: true };
  } catch (err: any) {
    return { ok: false, error: err?.message || 'Network error' };
  }
};

// Fetch active jobs for landing page
export const fetchActiveJobs = async (): Promise<ApiJob[]> => {
  try {
    const res = await fetch(`${API_URL}/jobs/active`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.data || [];
  } catch {
    return [];
  }
};

// Fetch job categories
export const fetchCategories = async (): Promise<ApiCategory[]> => {
  try {
    const res = await fetch(`${API_URL}/job-categories`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.data || [];
  } catch {
    return [];
  }
};

// Fetch single job by ID
export const fetchJobById = async (id: string): Promise<ApiJob | null> => {
  try {
    const res = await fetch(`${API_URL}/jobs/${id}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data?.data || null;
  } catch {
    return null;
  }
};

// Fetch public worker profiles for landing page
export const fetchWorkers = async (category?: string): Promise<{ workers: ApiWorker[]; filtered: boolean }> => {
  try {
    const url = category
      ? `${API_URL}/users/workers?category=${encodeURIComponent(category)}&limit=20`
      : `${API_URL}/users/workers?limit=20`;
    const res = await fetch(url, { next: { revalidate: 120 } });
    if (!res.ok) return { workers: [], filtered: false };
    const data = await res.json();
    return { workers: data?.data || [], filtered: data?.filtered ?? false };
  } catch {
    return { workers: [], filtered: false };
  }
};

// Fetch single worker by user_id
export const fetchWorkerById = async (id: string): Promise<ApiWorker | null> => {
  try {
    const res = await fetch(`${API_URL}/users/workers/${id}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data?.data || null;
  } catch {
    return null;
  }
};

// Submit contact form
export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok) {
      return { success: false, message: data?.message || 'Failed to send message' };
    }
    return { success: true, message: data?.message || 'Message sent successfully!' };
  } catch {
    return { success: false, message: 'Network error. Please try again.' };
  }
};
