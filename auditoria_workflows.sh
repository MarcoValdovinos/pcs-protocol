#!/bin/bash
echo "🔍 Iniciando auditoría de workflows..."
echo "======================================"
gh repo list --limit 1000 --json name --jq '.[].name' | while read -r repo; do
    estado=$(gh run list --repo "MarcoValdovinos/$repo" --limit 1 --json conclusion --jq '.[0].conclusion' 2>/dev/null)
    if [ -z "$estado" ] || [ "$estado" == "null" ]; then
        echo "⏭️  $repo: Sin workflows"
    elif [ "$estado" == "success" ]; then
        echo "✅ $repo: ÉXITO (Verde)"
    elif [ "$estado" == "failure" ]; then
        echo "❌ $repo: FALLO (Rojo)"
    elif [ "$estado" == "in_progress" ]; then
        echo "⏳ $repo: EN PROGRESO"
    else
        echo "❓ $repo: Estado: $estado"
    fi
done
echo "======================================"
echo "🏁 Auditoría finalizada."
