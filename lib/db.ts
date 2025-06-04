import { Pool } from "pg"

// Create a singleton database connection pool
let pool: Pool | null = null

export function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
    })
  }
  return pool
}

export async function query(text: string, params?: any[]) {
  const pool = getPool()
  try {
    const start = Date.now()
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log("Executed query", { text, duration, rows: res.rowCount })
    return res
  } catch (error) {
    console.error("Error executing query", { text, error })
    throw error
  }
}

export async function getUser(email: string) {
  const result = await query(
    `SELECT u.*, r.name as role_name 
     FROM users u 
     JOIN roles r ON u.role_id = r.id 
     WHERE u.email = $1`,
    [email],
  )
  return result.rows[0]
}

export async function getUserById(id: number) {
  const result = await query(
    `SELECT u.*, r.name as role_name 
     FROM users u 
     JOIN roles r ON u.role_id = r.id 
     WHERE u.id = $1`,
    [id],
  )
  return result.rows[0]
}

export async function createUser(userData: any) {
  const { first_name, last_name, email, password, department, position, role_id = 2 } = userData

  const result = await query(
    `INSERT INTO users (first_name, last_name, email, password, department, position, role_id) 
     VALUES ($1, $2, $3, $4, $5, $6, $7) 
     RETURNING id`,
    [first_name, last_name, email, password, department, position, role_id],
  )

  return result.rows[0]
}

export async function updateUserStatus(id: number, status: string) {
  const result = await query(
    `UPDATE users 
     SET approval_status = $1, 
         is_active = $2, 
         updated_at = CURRENT_TIMESTAMP 
     WHERE id = $3 
     RETURNING *`,
    [status, status === "approved", id],
  )

  return result.rows[0]
}

export async function getPendingUsers() {
  const result = await query(
    `SELECT u.*, r.name as role_name 
     FROM users u 
     JOIN roles r ON u.role_id = r.id 
     WHERE u.approval_status = 'pending' 
     ORDER BY u.created_at DESC`,
  )

  return result.rows
}

export async function getServices() {
  const result = await query(
    `SELECT s.*, 
            (SELECT array_agg(feature) FROM service_features WHERE service_id = s.id) as features 
     FROM services s 
     WHERE s.is_active = true 
     ORDER BY s.display_order`,
  )

  return result.rows
}

export async function getServiceBySlug(slug: string) {
  const result = await query(
    `SELECT s.*, 
            (SELECT array_agg(feature) FROM service_features WHERE service_id = s.id) as features 
     FROM services s 
     WHERE s.slug = $1`,
    [slug],
  )

  return result.rows[0]
}

export async function getTeamMembers() {
  const result = await query(
    `SELECT * FROM team_members 
     WHERE is_active = true 
     ORDER BY display_order`,
  )

  return result.rows
}

export async function getTeamMemberBySlug(slug: string) {
  const result = await query(
    `SELECT * FROM team_members 
     WHERE slug = $1`,
    [slug],
  )

  return result.rows[0]
}

export async function getProjects(limit?: number) {
  let query = `
    SELECT p.*, pc.name as category_name 
    FROM projects p 
    JOIN project_categories pc ON p.category_id = pc.id 
    WHERE p.is_active = true 
    ORDER BY p.is_featured DESC, p.display_order, p.created_at DESC
  `

  if (limit) {
    query += ` LIMIT ${limit}`
  }

  const result = await query(query)
  return result.rows
}

export async function getProjectBySlug(slug: string) {
  const result = await query(
    `SELECT p.*, pc.name as category_name 
     FROM projects p 
     JOIN project_categories pc ON p.category_id = pc.id 
     WHERE p.slug = $1`,
    [slug],
  )

  return result.rows[0]
}

export async function getBlogPosts(limit?: number) {
  let query = `
    SELECT bp.*, 
           bc.name as category_name, 
           u.first_name || ' ' || u.last_name as author_name 
    FROM blog_posts bp 
    JOIN blog_categories bc ON bp.category_id = bc.id 
    JOIN users u ON bp.author_id = u.id 
    WHERE bp.is_published = true 
    ORDER BY bp.is_featured DESC, bp.published_at DESC
  `

  if (limit) {
    query += ` LIMIT ${limit}`
  }

  const result = await query(query)
  return result.rows
}

export async function getBlogPostBySlug(slug: string) {
  const result = await query(
    `SELECT bp.*, 
            bc.name as category_name, 
            u.first_name || ' ' || u.last_name as author_name 
     FROM blog_posts bp 
     JOIN blog_categories bc ON bp.category_id = bc.id 
     JOIN users u ON bp.author_id = u.id 
     WHERE bp.slug = $1`,
    [slug],
  )

  return result.rows[0]
}

export async function getTestimonials(limit?: number) {
  let query = `
    SELECT * FROM testimonials 
    WHERE is_active = true 
    ORDER BY display_order, created_at DESC
  `

  if (limit) {
    query += ` LIMIT ${limit}`
  }

  const result = await query(query)
  return result.rows
}

export async function getStats() {
  const result = await query(
    `SELECT * FROM stats 
     WHERE is_active = true 
     ORDER BY display_order`,
  )

  return result.rows
}

export async function getSetting(key: string) {
  const result = await query(`SELECT setting_value FROM settings WHERE setting_key = $1`, [key])

  return result.rows[0]?.setting_value
}

export async function getSettings(group?: string) {
  let query = `SELECT * FROM settings`

  if (group) {
    query += ` WHERE setting_group = $1`
    const result = await query(query, [group])
    return result.rows
  }

  const result = await query(query)
  return result.rows
}

export async function updateSetting(key: string, value: string) {
  const result = await query(
    `UPDATE settings 
     SET setting_value = $1, 
         updated_at = CURRENT_TIMESTAMP 
     WHERE setting_key = $2 
     RETURNING *`,
    [value, key],
  )

  return result.rows[0]
}

export async function createContactSubmission(data: any) {
  const { name, email, phone, subject, message, company, service, budget } = data

  const result = await query(
    `INSERT INTO contact_submissions 
     (name, email, phone, subject, message, company, service, budget) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
     RETURNING id`,
    [name, email, phone, subject, message, company, service, budget],
  )

  return result.rows[0]
}

export async function addNewsletterSubscriber(email: string) {
  try {
    const result = await query(
      `INSERT INTO newsletter_subscribers (email) 
       VALUES ($1) 
       ON CONFLICT (email) 
       DO UPDATE SET is_active = true, unsubscribed_at = NULL 
       RETURNING id`,
      [email],
    )

    return result.rows[0]
  } catch (error) {
    console.error("Error adding newsletter subscriber", error)
    throw error
  }
}

export async function createPasswordReset(email: string, token: string) {
  // Expire after 1 hour
  const expiresAt = new Date(Date.now() + 3600000)

  await query(
    `INSERT INTO password_resets (email, token, expires_at) 
     VALUES ($1, $2, $3)`,
    [email, token, expiresAt],
  )
}

export async function getPasswordReset(token: string) {
  const result = await query(
    `SELECT * FROM password_resets 
     WHERE token = $1 AND expires_at > CURRENT_TIMESTAMP`,
    [token],
  )

  return result.rows[0]
}

export async function deletePasswordReset(token: string) {
  await query(`DELETE FROM password_resets WHERE token = $1`, [token])
}

export async function updateUserPassword(email: string, password: string) {
  await query(
    `UPDATE users 
     SET password = $1, 
         updated_at = CURRENT_TIMESTAMP 
     WHERE email = $2`,
    [password, email],
  )
}
