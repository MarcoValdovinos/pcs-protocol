-- ============================================
-- KRONOS SUPERIOR · ESQUEMA MAESTRO (v1.0)
-- ============================================

-- 1. Tabla de Empresas (Multi-Tenant)
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  plan TEXT DEFAULT 'starter', -- starter | pro | enterprise
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabla de Folios (La joya de la corona)
CREATE TABLE folios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  folio TEXT NOT NULL,
  sku TEXT,
  product_name TEXT,
  hash_sha256 TEXT NOT NULL,
  status INT DEFAULT 0, -- 0=VERDE (Auténtico), 1=ROJO (Clonado/Revocado)
  safe_creative_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  revoked_at TIMESTAMPTZ,
  revoked_reason TEXT,
  UNIQUE(org_id, folio)
);

-- 3. Tabla de Auditoría (Inmutable)
CREATE TABLE audit_log (
  id BIGSERIAL PRIMARY KEY,
  org_id UUID REFERENCES organizations(id),
  action TEXT NOT NULL, -- emitted | verified | revoked | login
  entity_id TEXT,
  ip_address INET,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
