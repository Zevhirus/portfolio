create table projects (
  id uuid primary key default gen_random_uuid(),
  title text not null, description text, image_url text,
  tags text[] default '{}', demo_link text, github_link text,
  created_at timestamptz default now()
);
create table certificates (
  id uuid primary key default gen_random_uuid(),
  title text not null, issuer text, date date, image_url text, certificate_link text,
  created_at timestamptz default now()
);
create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null, email text not null, message text not null,
  created_at timestamptz default now()
);

alter table projects enable row level security;
alter table certificates enable row level security;
alter table contact_messages enable row level security;

-- public read for content, insert-only for the contact form
create policy "public read projects" on projects for select using (true);
create policy "public read certificates" on certificates for select using (true);
create policy "public insert messages" on contact_messages for insert with check (true);
