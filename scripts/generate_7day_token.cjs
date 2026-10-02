const fs = require('fs');
const crypto = require('crypto');

const privateKey = fs.readFileSync('C:/Users/aacga/OneDrive/netfits/Rock/homolog/rsa-generated.private.pem', 'utf8');
const publicKey = fs.readFileSync('C:/Users/aacga/OneDrive/netfits/Rock/homolog/rsa-generated.public.pem', 'utf8');

function base64UrlEncode(str) {
  const buf = typeof str === 'string' ? Buffer.from(str, 'utf8') : str;
  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

const now = Math.floor(Date.now() / 1000);
const expiresInSeconds = 7 * 24 * 3600; // 604800 (7 dias)

const header = {
  alg: 'RS256',
  typ: 'JWT',
  kid: 'PUQ4cwt2n3Czt4aiW-DaXHttZIYebVUmhJVfZK1zgDw'
};

const payload = {
  exp: now + expiresInSeconds,
  iat: now,
  sub: 'usr_102',
  typ: 'Bearer',
  azp: 'customer-services',
  realm_access: {
    roles: [
      'profile:roles=STORE',
      'profile:accountId=RhOFkbZJIN',
      'profile:storeId=RhOFkbZJIN',
      'profile:customerId=usr_102'
    ]
  },
  scope: 'email openid profile',
  email_verified: true,
  clientId: 'customer-services',
  customerId: 'usr_102',
  name: 'André Gallo',
  preferred_username: 'andre.gallo@netfits.com.br',
  storeId: 'RhOFkbZJIN',
  email: 'andre.gallo@netfits.com.br'
};

const encodedHeader = base64UrlEncode(JSON.stringify(header));
const encodedPayload = base64UrlEncode(JSON.stringify(payload));
const dataToSign = `${encodedHeader}.${encodedPayload}`;

const signer = crypto.createSign('RSA-SHA256');
signer.update(dataToSign);
signer.end();
const signature = signer.sign(privateKey);
const encodedSignature = base64UrlEncode(signature);

const jwt = `${dataToSign}.${encodedSignature}`;

// Valida com a chave pública
const verifier = crypto.createVerify('RSA-SHA256');
verifier.update(dataToSign);
verifier.end();
const isValid = verifier.verify(publicKey, signature);

console.log('=== RESULTADO DA GERAÇÃO DO TOKEN (7 DIAS) ===');
console.log('Token Válido com Chave Pública Rock (kid PUQ4cwt2n3Czt4aiW-DaXHttZIYebVUmhJVfZK1zgDw):', isValid ? 'SIM (100% OK)' : 'NÃO');
console.log('Emitido em (IAT):', new Date(payload.iat * 1000).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }));
console.log('Expira em (EXP):', new Date(payload.exp * 1000).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }));
console.log('Duração:', (payload.exp - payload.iat) / 86400, 'dias (' + (payload.exp - payload.iat) + ' segundos)');
console.log('\nTOKEN:');
console.log(jwt);
