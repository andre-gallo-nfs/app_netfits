const fs = require('fs');

const pub = fs.readFileSync('C:/Users/aacga/OneDrive/netfits/Rock/homolog/rsa-generated.public.pem', 'utf8');

const prodPublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmwcVSdrZNby6NTk+L5By
xEcOOcs2yANm/IkpwxbisPHdS6ezwl2eKULYQ5cECG8JZhk5R1JwCOjyJzndOYeT
TjcVsVgPm12AQ9HISjn/hpaMqiwDHfL85Nwt9DZPee1cDbS73jelZOpwBomcMND3
hfv2cZpjcWPy3Wh3jlDcNp1pRUl0dKFqd9oHn0n8bw1vgczCrt6Cn7kDslQeAYvR
dblspNChtGYWvUxzT1fdy3sPw3sA+nQ42VQqS6A+yCttkUo4FNhifaHhLhYkGIUv
HmAWesE/4ucr63KmJa/9IgNiQ8VrC7vZr42SEFm9Kw+UtcSq/B8TY2aF5sn4rLh8
PwIDAQAB
-----END PUBLIC KEY-----`;

const cleanA = pub.replace(/\r?\n|\s/g, '');
const cleanB = prodPublicKey.replace(/\r?\n|\s/g, '');
console.log('Matches Prod Key:', cleanA === cleanB);
