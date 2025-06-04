-- Tafeed Technologies Full Database Schema
-- This file contains the complete database structure and sample data

-- Drop tables if they exist (for clean setup)
DROP TABLE IF EXISTS user_sessions CASCADE;
DROP TABLE IF EXISTS password_resets CASCADE;
DROP TABLE IF EXISTS contact_submissions CASCADE;
DROP TABLE IF EXISTS newsletter_subscribers CASCADE;
DROP TABLE IF EXISTS project_categories CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS blog_categories CASCADE;
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS testimonials CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS service_features CASCADE;
DROP TABLE IF EXISTS team_members CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS settings CASCADE;
DROP TABLE IF EXISTS stats CASCADE;

-- Create roles table
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INTEGER REFERENCES roles(id),
    department VARCHAR(100),
    position VARCHAR(100),
    is_active BOOLEAN DEFAULT false,
    approval_status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
    approval_reason TEXT,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create user_sessions table
CREATE TABLE user_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    token VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create password_resets table
CREATE TABLE password_resets (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    token VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create services table
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    icon VARCHAR(50),
    short_description TEXT NOT NULL,
    full_description TEXT,
    base_price DECIMAL(10, 2),
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create service_features table
CREATE TABLE service_features (
    id SERIAL PRIMARY KEY,
    service_id INTEGER REFERENCES services(id) ON DELETE CASCADE,
    feature VARCHAR(255) NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create team_members table
CREATE TABLE team_members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    role VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    image_url VARCHAR(255),
    bio TEXT,
    email VARCHAR(255),
    linkedin_url VARCHAR(255),
    twitter_url VARCHAR(255),
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create project_categories table
CREATE TABLE project_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create projects table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    category_id INTEGER REFERENCES project_categories(id),
    client VARCHAR(100),
    year VARCHAR(4),
    image_url VARCHAR(255),
    description TEXT,
    technologies TEXT[],
    link VARCHAR(255),
    is_featured BOOLEAN DEFAULT false,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create blog_categories table
CREATE TABLE blog_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create blog_posts table
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    image_url VARCHAR(255),
    author_id INTEGER REFERENCES users(id),
    category_id INTEGER REFERENCES blog_categories(id),
    tags TEXT[],
    read_time VARCHAR(20),
    is_published BOOLEAN DEFAULT false,
    published_at TIMESTAMP,
    is_featured BOOLEAN DEFAULT false,
    views INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create testimonials table
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100),
    company VARCHAR(100),
    image_url VARCHAR(255),
    content TEXT NOT NULL,
    rating INTEGER DEFAULT 5,
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contact_submissions table
CREATE TABLE contact_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    company VARCHAR(100),
    service VARCHAR(100),
    budget VARCHAR(50),
    status VARCHAR(20) DEFAULT 'new', -- new, read, responded, archived
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    is_active BOOLEAN DEFAULT true,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    unsubscribed_at TIMESTAMP
);

-- Create settings table
CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    setting_key VARCHAR(100) NOT NULL UNIQUE,
    setting_value TEXT,
    setting_group VARCHAR(100),
    is_public BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create stats table
CREATE TABLE stats (
    id SERIAL PRIMARY KEY,
    stat_key VARCHAR(100) NOT NULL UNIQUE,
    stat_value INTEGER NOT NULL,
    stat_label VARCHAR(100) NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data

-- Roles
INSERT INTO roles (name, description) VALUES
('admin', 'Administrator with full access'),
('staff', 'Staff member with limited access'),
('editor', 'Content editor with access to blog and content'),
('manager', 'Department manager with access to team and projects');

-- Users (password is hashed - these are examples)
INSERT INTO users (first_name, last_name, email, password, role_id, department, position, is_active, approval_status) VALUES
('Admin', 'User', 'admin@tafeedtech.com', '$2a$12$1InE3Tg5JFhw3YZGjgUwZ.T8Kkf5zRnWEE9oKUVYXMk9iRjUdsjKK', 1, 'Management', 'Administrator', true, 'approved'),
('Staff', 'User', 'staff@tafeedtech.com', '$2a$12$1InE3Tg5JFhw3YZGjgUwZ.T8Kkf5zRnWEE9oKUVYXMk9iRjUdsjKK', 2, 'Development', 'Developer', true, 'approved'),
('Ahmed', 'Hassan', 'ahmed@tafeedtech.com', '$2a$12$1InE3Tg5JFhw3YZGjgUwZ.T8Kkf5zRnWEE9oKUVYXMk9iRjUdsjKK', 1, 'Management', 'CEO', true, 'approved'),
('Sarah', 'Mwangi', 'sarah@tafeedtech.com', '$2a$12$1InE3Tg5JFhw3YZGjgUwZ.T8Kkf5zRnWEE9oKUVYXMk9iRjUdsjKK', 4, 'Technology', 'CTO', true, 'approved'),
('David', 'Kimani', 'david@tafeedtech.com', '$2a$12$1InE3Tg5JFhw3YZGjgUwZ.T8Kkf5zRnWEE9oKUVYXMk9iRjUdsjKK', 2, 'Development', 'Lead Developer', true, 'approved'),
('Fatima', 'Ali', 'fatima@tafeedtech.com', '$2a$12$1InE3Tg5JFhw3YZGjgUwZ.T8Kkf5zRnWEE9oKUVYXMk9iRjUdsjKK', 2, 'Security', 'Security Specialist', true, 'approved'),
('John', 'Doe', 'john.doe@tafeedtech.com', '$2a$12$1InE3Tg5JFhw3YZGjgUwZ.T8Kkf5zRnWEE9oKUVYXMk9iRjUdsjKK', 2, 'Development', 'Frontend Developer', false, 'pending');

-- Services
INSERT INTO services (title, slug, icon, short_description, full_description, base_price, display_order) VALUES
('Web Design & Development', 'web-design', 'Globe', 'Custom website design and development services that create stunning, responsive, and user-friendly websites.', 'Our web design and development services focus on creating beautiful, functional websites that drive results. We use the latest technologies and best practices to ensure your website is fast, secure, and optimized for search engines. From simple landing pages to complex e-commerce platforms, we have the expertise to bring your vision to life.', 500.00, 1),
('Mobile App Development', 'mobile-apps', 'Smartphone', 'Native and cross-platform mobile application development for iOS and Android devices.', 'Our mobile app development team creates powerful, intuitive applications for iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for broader reach, we deliver high-quality mobile experiences that users love. Our process includes thorough planning, elegant UI/UX design, robust development, and comprehensive testing.', 800.00, 2),
('Hosting Solutions', 'hosting', 'Server', 'Reliable and secure hosting services with 99.9% uptime guarantee, optimized for performance and scalability.', 'Our hosting solutions provide the reliability, security, and performance your business needs. With a 99.9% uptime guarantee, daily backups, and 24/7 monitoring, you can trust that your website or application will always be available to your users. We offer shared hosting, VPS, dedicated servers, and cloud hosting options to meet your specific requirements.', 100.00, 3),
('Cybersecurity Services', 'cybersecurity', 'Lock', 'Comprehensive security solutions to protect your business from threats and ensure data integrity.', 'Our cybersecurity services help protect your business from evolving digital threats. We offer security audits, penetration testing, firewall configuration, and data encryption services to safeguard your sensitive information. Our team of security experts stays up-to-date with the latest threats and countermeasures to keep your systems secure.', 300.00, 4),
('Custom Software Development', 'custom-software', 'Code', 'Tailored software solutions designed to meet your specific business requirements and challenges.', 'Our custom software development services deliver tailored solutions that address your unique business challenges. We follow a collaborative approach, working closely with you to understand your requirements and develop software that streamlines your operations, improves efficiency, and drives growth. From requirements analysis to deployment and maintenance, we handle every aspect of the development process.', 1000.00, 5),
('Database Solutions', 'database', 'Database', 'Custom database design, implementation, and management services for efficient data handling.', 'Our database solutions help you efficiently store, manage, and analyze your data. We design optimized database structures, implement robust data management systems, and provide ongoing support to ensure your data remains secure, accessible, and reliable. Whether you need a simple database for a small application or a complex data warehouse for analytics, we have the expertise to deliver.', 400.00, 6);

-- Service Features
INSERT INTO service_features (service_id, feature, display_order) VALUES
(1, 'Responsive Design', 1),
(1, 'E-commerce Solutions', 2),
(1, 'CMS Integration', 3),
(1, 'SEO Optimization', 4),
(1, 'Progressive Web Apps', 5),
(1, 'Website Maintenance', 6),
(2, 'iOS App Development', 1),
(2, 'Android App Development', 2),
(2, 'Cross-Platform Apps', 3),
(2, 'App Store Optimization', 4),
(2, 'App Maintenance & Updates', 5),
(2, 'UI/UX Design', 6),
(3, 'Shared Hosting', 1),
(3, 'VPS Hosting', 2),
(3, 'Dedicated Servers', 3),
(3, 'Cloud Hosting', 4),
(3, 'Domain Registration', 5),
(3, 'SSL Certificates', 6),
(4, 'Security Audits', 1),
(4, 'Penetration Testing', 2),
(4, 'Firewall Configuration', 3),
(4, 'Data Encryption', 4),
(4, 'Security Training', 5),
(4, 'Incident Response', 6),
(5, 'Requirements Analysis', 1),
(5, 'Custom Development', 2),
(5, 'System Integration', 3),
(5, 'API Development', 4),
(5, 'Software Testing', 5),
(5, 'Maintenance & Support', 6),
(6, 'Database Design', 1),
(6, 'Data Migration', 2),
(6, 'Performance Optimization', 3),
(6, 'Backup Solutions', 4),
(6, 'Data Analytics', 5),
(6, 'Database Security', 6);

-- Team Members
INSERT INTO team_members (name, slug, role, department, image_url, bio, email, linkedin_url, twitter_url, display_order) VALUES
('Ahmed Hassan', 'ahmed-hassan', 'CEO & Founder', 'Management', '/placeholder.svg?height=400&width=400', '15+ years of experience in technology leadership and business development.', 'ahmed@tafeedtech.com', '#', '#', 1),
('Sarah Mwangi', 'sarah-mwangi', 'Chief Technology Officer', 'Technology', '/placeholder.svg?height=400&width=400', 'Expert in software architecture and emerging technologies with 12+ years experience.', 'sarah@tafeedtech.com', '#', '#', 2),
('David Kimani', 'david-kimani', 'Lead Developer', 'Development', '/placeholder.svg?height=400&width=400', 'Full-stack developer with expertise in modern web technologies and mobile development.', 'david@tafeedtech.com', '#', '#', 3),
('Fatima Ali', 'fatima-ali', 'Security Specialist', 'Security', '/placeholder.svg?height=400&width=400', 'Cybersecurity expert with certifications in ethical hacking and security auditing.', 'fatima@tafeedtech.com', '#', '#', 4),
('James Mwangi', 'james-mwangi', 'UI/UX Designer', 'Design', '/placeholder.svg?height=400&width=400', 'Creative designer focused on user experience and interface design.', 'james@tafeedtech.com', '#', '#', 5),
('Grace Ochieng', 'grace-ochieng', 'Project Manager', 'Management', '/placeholder.svg?height=400&width=400', 'Experienced project manager ensuring timely delivery and client satisfaction.', 'grace@tafeedtech.com', '#', '#', 6);

-- Project Categories
INSERT INTO project_categories (name, slug) VALUES
('Web Development', 'web-development'),
('Mobile App', 'mobile-app'),
('Custom Software', 'custom-software'),
('Cloud Solutions', 'cloud-solutions'),
('E-commerce', 'e-commerce');

-- Projects
INSERT INTO projects (title, slug, category_id, client, year, image_url, description, technologies, link, is_featured) VALUES
('E-Commerce Platform', 'ecommerce-platform', 1, 'RetailCorp Tanzania', '2024', '/placeholder.svg?height=300&width=400', 'A comprehensive e-commerce solution with inventory management, payment processing, and analytics dashboard.', ARRAY['React', 'Node.js', 'MongoDB', 'Stripe'], '#', true),
('Banking Mobile App', 'banking-app', 2, 'Community Bank', '2024', '/placeholder.svg?height=300&width=400', 'Secure mobile banking application with biometric authentication and real-time transaction processing.', ARRAY['React Native', 'Firebase', 'Biometric Auth'], '#', true),
('Hospital Management System', 'hospital-system', 3, 'Muhimbili Hospital', '2023', '/placeholder.svg?height=300&width=400', 'Complete hospital management solution with patient records, appointment scheduling, and billing.', ARRAY['Vue.js', 'Laravel', 'MySQL', 'WebRTC'], '#', true),
('Cloud Infrastructure Setup', 'cloud-infrastructure', 4, 'TechStart Ltd', '2023', '/placeholder.svg?height=300&width=400', 'Scalable cloud infrastructure with load balancing, auto-scaling, and disaster recovery.', ARRAY['AWS', 'Docker', 'Kubernetes', 'Terraform'], '#', false),
('Educational Platform', 'educational-platform', 1, 'EduTech Africa', '2023', '/placeholder.svg?height=300&width=400', 'Online learning platform with video streaming, interactive quizzes, and progress tracking.', ARRAY['Next.js', 'PostgreSQL', 'Redis', 'WebRTC'], '#', false),
('Logistics Mobile App', 'logistics-app', 2, 'Swift Logistics', '2022', '/placeholder.svg?height=300&width=400', 'Real-time package tracking and delivery management system with GPS integration.', ARRAY['Flutter', 'Google Maps', 'Firebase', 'Push Notifications'], '#', false);

-- Blog Categories
INSERT INTO blog_categories (name, slug) VALUES
('Web Development', 'web-development'),
('Mobile Development', 'mobile-development'),
('Cybersecurity', 'cybersecurity'),
('Cloud Computing', 'cloud-computing'),
('E-commerce', 'e-commerce'),
('Database', 'database');

-- Blog Posts
INSERT INTO blog_posts (title, slug, excerpt, content, image_url, author_id, category_id, tags, read_time, is_published, published_at, is_featured) VALUES
('The Future of Web Development in 2024', 'future-of-web-development-2024', 'Explore the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/placeholder.svg?height=200&width=400', 3, 1, ARRAY['React', 'AI', 'PWA', 'Trends'], '5 min read', true, '2024-01-15 10:00:00', true),
('Cybersecurity Best Practices for Small Businesses', 'cybersecurity-best-practices-small-businesses', 'Essential cybersecurity measures every small business should implement to protect against cyber threats and data breaches.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/placeholder.svg?height=200&width=400', 6, 3, ARRAY['Security', 'Business', 'Protection', 'Best Practices'], '7 min read', true, '2024-01-10 10:00:00', false),
('Mobile App Development: Native vs Cross-Platform', 'native-vs-cross-platform-mobile-development', 'A comprehensive comparison of native and cross-platform mobile app development approaches to help you make the right choice.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/placeholder.svg?height=200&width=400', 5, 2, ARRAY['Mobile', 'React Native', 'Flutter', 'iOS', 'Android'], '6 min read', true, '2024-01-05 10:00:00', false),
('Cloud Migration: A Complete Guide for Businesses', 'cloud-migration-complete-guide', 'Everything you need to know about migrating your business to the cloud, including benefits, challenges, and best practices.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/placeholder.svg?height=200&width=400', 4, 4, ARRAY['Cloud', 'Migration', 'AWS', 'Business'], '8 min read', true, '2023-12-28 10:00:00', false),
('E-commerce Trends That Will Dominate 2024', 'ecommerce-trends-2024', 'Discover the emerging e-commerce trends that will shape online retail in 2024 and how businesses can adapt.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/placeholder.svg?height=200&width=400', 3, 5, ARRAY['E-commerce', 'Trends', 'Online Retail', 'Business'], '4 min read', true, '2023-12-20 10:00:00', false),
('Database Optimization Techniques for Better Performance', 'database-optimization-techniques', 'Learn advanced database optimization techniques to improve your application''s performance and reduce query execution time.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '/placeholder.svg?height=200&width=400', 5, 6, ARRAY['Database', 'Optimization', 'Performance', 'SQL'], '9 min read', true, '2023-12-15 10:00:00', false);

-- Testimonials
INSERT INTO testimonials (name, position, company, image_url, content, rating) VALUES
('John Makamba', 'CEO', 'TechStart Ltd', '/placeholder.svg?height=100&width=100', 'Tafeed Technologies transformed our business with their innovative web solutions. Their team was professional, responsive, and delivered beyond our expectations. Highly recommended!', 5),
('Sarah Kimani', 'Marketing Director', 'Retail Solutions', '/placeholder.svg?height=100&width=100', 'Working with Tafeed was a game-changer for our e-commerce platform. Their attention to detail and technical expertise helped us increase our online sales by 200% in just six months.', 5),
('Michael Ochieng', 'IT Manager', 'Community Bank', '/placeholder.svg?height=100&width=100', 'The mobile banking app developed by Tafeed Technologies has received outstanding feedback from our customers. Their team''s security expertise and user-focused design approach made all the difference.', 5),
('Fatima Hassan', 'Operations Director', 'Logistics Pro', '/placeholder.svg?height=100&width=100', 'Tafeed''s custom logistics software streamlined our operations and reduced costs by 30%. Their ongoing support and maintenance have been exceptional. A truly reliable technology partner.', 5);

-- Contact Submissions
INSERT INTO contact_submissions (name, email, phone, subject, message, company, service, budget, status) VALUES
('John Smith', 'john@example.com', '+255 123 456 789', 'Website Development Inquiry', 'I need a new website for my business. Can you provide a quote?', 'ABC Company', 'Web Design & Development', '1000-5000', 'new'),
('Mary Johnson', 'mary@example.com', '+255 987 654 321', 'Mobile App Development', 'I''m interested in developing a mobile app for my e-commerce store.', 'XYZ Store', 'Mobile App Development', '5000-10000', 'read'),
('Robert Brown', 'robert@example.com', '+255 456 789 123', 'Hosting Services', 'I need information about your hosting packages.', 'Brown Enterprises', 'Hosting Solutions', 'under-1000', 'responded');

-- Newsletter Subscribers
INSERT INTO newsletter_subscribers (email) VALUES
('subscriber1@example.com'),
('subscriber2@example.com'),
('subscriber3@example.com'),
('subscriber4@example.com'),
('subscriber5@example.com');

-- Settings
INSERT INTO settings (setting_key, setting_value, setting_group) VALUES
('site_name', 'Tafeed Technologies', 'general'),
('site_description', 'Leading Technology Solutions Provider in East Africa', 'general'),
('contact_email', 'info@tafeedtech.com', 'contact'),
('contact_phone', '+255 742 710 054', 'contact'),
('contact_address', 'Dar es Salaam, Tanzania', 'contact'),
('social_facebook', '#', 'social'),
('social_twitter', '#', 'social'),
('social_instagram', '#', 'social'),
('social_linkedin', '#', 'social'),
('whatsapp_number', '255742710054', 'contact');

-- Stats
INSERT INTO stats (stat_key, stat_value, stat_label) VALUES
('projects_completed', 750, 'Projects Completed'),
('client_satisfaction', 99, 'Client Satisfaction'),
('years_experience', 15, 'Years Experience'),
('support_hours', 24, 'Support Available');
