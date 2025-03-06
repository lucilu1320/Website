/*
  # Initial Schema Setup

  1. Tables
    - applications
      - Stores student admission applications
      - Includes personal info, academic details, and contact info
    - files
      - Stores file metadata and references
      - Used for student photos and documents

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Applications Table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_name text NOT NULL,
  student_name_aadhar text NOT NULL,
  gender text NOT NULL,
  dob date NOT NULL,
  aadhar_no text NOT NULL,
  blood_group text NOT NULL,
  religion text NOT NULL,
  mother_tongue text NOT NULL,
  social_category text NOT NULL,
  ews_status text NOT NULL,
  cwsn_status text NOT NULL,
  father_name text NOT NULL,
  mother_name text NOT NULL,
  guardian_name text,
  relation_with_guardian text,
  father_qualification text NOT NULL,
  mother_qualification text NOT NULL,
  father_occupation text NOT NULL,
  mother_occupation text NOT NULL,
  annual_income text NOT NULL,
  session text NOT NULL,
  class text NOT NULL,
  section text NOT NULL,
  roll_no text,
  house text NOT NULL,
  second_language text,
  third_language text,
  skill_subject text,
  subjects jsonb,
  previous_status text NOT NULL,
  previous_class text,
  previous_section text,
  previous_roll_no text,
  academic_year text,
  medium text,
  admission_type text NOT NULL,
  email text NOT NULL,
  mobile_number text NOT NULL,
  country text NOT NULL,
  state text NOT NULL,
  district text NOT NULL,
  block text NOT NULL,
  panchayat text,
  locality text NOT NULL,
  post_office text NOT NULL,
  police_station text NOT NULL,
  pin_code text NOT NULL,
  guardian_country text,
  guardian_state text,
  guardian_district text,
  guardian_block text,
  guardian_panchayat text,
  guardian_locality text,
  guardian_post_office text,
  guardian_police_station text,
  guardian_pin_code text,
  guardian_mobile text,
  guardian_email text,
  transport_facility text NOT NULL,
  hostel_facility text NOT NULL,
  free_shoes text NOT NULL,
  free_uniform text NOT NULL,
  free_books text NOT NULL,
  free_exercise_book text NOT NULL,
  rte_education text NOT NULL,
  ncc_participation text NOT NULL,
  bus_route text,
  pickup_point text,
  transport_month text,
  status text NOT NULL DEFAULT 'PENDING',
  photo_url text,
  submission_date timestamptz NOT NULL DEFAULT now(),
  last_updated timestamptz NOT NULL DEFAULT now()
);

-- Files Table
CREATE TABLE IF NOT EXISTS files (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  application_id uuid REFERENCES applications(id),
  file_name text NOT NULL,
  file_type text NOT NULL,
  file_size integer NOT NULL,
  file_url text NOT NULL,
  uploaded_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE files ENABLE ROW LEVEL SECURITY;

-- Policies for applications table
CREATE POLICY "Applications are viewable by admin"
  ON applications
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');

CREATE POLICY "Applications can be inserted by anyone"
  ON applications
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Applications can be updated by admin"
  ON applications
  FOR UPDATE
  TO authenticated
  USING (auth.role() = 'admin');

-- Policies for files table
CREATE POLICY "Files are viewable by admin"
  ON files
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');

CREATE POLICY "Files can be inserted by anyone"
  ON files
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_submission_date ON applications(submission_date);
CREATE INDEX IF NOT EXISTS idx_applications_class ON applications(class);
CREATE INDEX IF NOT EXISTS idx_files_application_id ON files(application_id);