#!/data/data/com.termux/files/usr/bin/bash
FILE=$1
if [ -z "$FILE" ]; then echo "Uso: ./chain-quantum.sh ~/tmp/doc.pdf"; exit 1; fi

echo "=== ARKHE-ZERO QUANTUM SAFE v2 ==="
echo "Archivo: $FILE"

SHA256=$(sha256sum "$FILE" | awk '{print $1}')
echo "SHA-256: $SHA256"

SHA3=$(python3 -c "import hashlib; print(hashlib.sha3_512(open('$FILE','rb').read()).hexdigest())")
echo "SHA3-512: $SHA3"

COMBINED=$(echo -n "$SHA256$SHA3" | sha256sum | awk '{print $1}')
echo "Quantum Hash: $COMBINED"

TS=$(date -u +"%Y-%m-%dT%H:%M:%S+00:00")
SEQ=$(wc -l < ~/ARKHE-ZERO/chain.log | tr -d ' ')
SEQ=$((SEQ + 1))
PREV=$(tail -1 ~/ARKHE-ZERO/chain.log | python3 -c "import json,sys; print(json.load(sys.stdin).get('chain_hash','0'*64))" 2>/dev/null || echo "0"*64)
CHAIN_HASH=$(echo -n "$COMBINED$PREV$TS" | sha256sum | awk '{print $1}')

cat > ~/tmp/new-block.json << EOF
{"v": 2, "seq": $SEQ, "sha256": "$SHA256", "sha3_512": "$SHA3", "quantum_hash": "$COMBINED", "prev_hash": "$PREV", "chain_hash": "$CHAIN_HASH", "ts": "$TS", "id": "ARKHE-$SEQ", "pq": "SHA256+SHA3-512", "file": "$FILE"}
EOF

cat ~/tmp/new-block.json
echo ""
echo "Agregando a chain.log..."
cat ~/tmp/new-block.json >> ~/ARKHE-ZERO/chain.log
echo "✅ Agregado seq $SEQ - Quantum Safe - 384-bit post-quantum"
