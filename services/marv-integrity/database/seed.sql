-- Datos de prueba para el Dashboard
INSERT INTO organizations (name, slug, plan) 
VALUES ('MARV Test Corp', 'marv-test', 'enterprise');

INSERT INTO folios (org_id, folio, sku, product_name, hash_sha256, status)
SELECT id, 'KR-001', 'SKU-99', 'Certificado de Prueba', '41a3683b', 0 FROM organizations LIMIT 1;
