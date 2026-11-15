import fs from 'fs';

const files = [
  'apps/sycro-web/cli.js',
  'apps/sycro-web/app/api/verificar-firma/route.js'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Arreglar sign(secretKey, message) -> sign(message, secretKey)
  content = content.replace(
    /ml_dsa65\.sign\(keys\.secretKey,\s*messageBytes\)/g,
    'ml_dsa65.sign(messageBytes, keys.secretKey)'
  );
  // Variación con variables ligeramente distintas
  content = content.replace(
    /ml_dsa65\.sign\(([a-zA-Z]+),\s*([a-zA-Z]+)\)/g,
    'ml_dsa65.sign($2, $1)'
  );

  // 2. Arreglar verify(publicKey, message, signature) -> verify(signature, message, publicKey)
  content = content.replace(
    /ml_dsa65\.verify\(publicKeyBytes,\s*messageBytes,\s*signatureBytes\)/g,
    'ml_dsa65.verify(signatureBytes, messageBytes, publicKeyBytes)'
  );
  // Variación con variables ligeramente distintas
  content = content.replace(
    /ml_dsa65\.verify\(([a-zA-Z]+),\s*([a-zA-Z]+),\s*([a-zA-Z]+)\)/g,
    'ml_dsa65.verify($3, $2, $1)'
  );

  fs.writeFileSync(file, content);
  console.log(`✅ Argumentos reordenados en: ${file}`);
}
