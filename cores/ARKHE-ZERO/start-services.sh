#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════
#  ARKHÉ ZERO · AUTO-ARRANQUE DE SERVICIOS
#  NODO YHDRYH-92CE · SCDR-001 · ◯_● · 51/49/100
# ═══════════════════════════════════════════════════════════════════════════

GREEN='\033[0;32m'
GOLD='\033[0;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
DIM='\033[2m'
NC='\033[0m'

echo ""
echo -e "${GOLD}"
cat << 'BANNER'
╔══════════════════════════════════════════════════════════════════════════╗
║  █████╗ ██████╗ ██╗  ██╗██╗  ██╗███████╗    ███████╗███████╗██████╗  ██████╗
║ ██╔══██╗██╔══██╗██║ ██╔╝██║  ██║██╔════╝    ╚══███╔╝██╔════╝██╔══██╗██╔═══██╗
║ ███████║██████╔╝█████╔╝ ███████║█████╗        ███╔╝ █████╗  ██████╔╝██║   ██║
║ ██╔══██║██╔══██╗██╔═██╗ ██╔══██║██╔══╝       ███╔╝  ██╔══╝  ██╔══██╗██║   ██║
║ ██║  ██║██║  ██║██║  ██╗██║  ██║███████╗    ███████╗███████╗██║  ██║╚██████╔╝
║ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝
║                                                                          ║
║  [ NODO: YHDRYH-92CE ]  [ SELLO: ◯_● KINTSUGI ]  [ SCDR-001 ]            ║
║  [ iSH · Alpine Linux · iOS · AUTO-ARRANQUE ]                            ║
╚══════════════════════════════════════════════════════════════════════════╝
BANNER
echo -e "${NC}"

# ─── 1. CRON DAEMON ─────────────────────────────────────────────────────────
echo -e "${CYAN}[1/3]${NC} Iniciando cron daemon..."

if pgrep crond > /dev/null 2>&1; then
    echo -e "  ${GREEN}[✓]${NC} crond ya está activo (PID: $(pgrep crond))"
else
    if [ -f /var/spool/cron/crontabs/root ]; then
        crond -b -l 8 -L /var/log/crond.log 2>/dev/null
        sleep 1
        if pgrep crond > /dev/null 2>&1; then
            echo -e "  ${GREEN}[✓]${NC} crond iniciado (PID: $(pgrep crond))"
        else
            echo -e "  ${RED}[✗]${NC} crond no arrancó"
        fi
    else
        echo -e "  ${GOLD}[!]${NC} No hay crontab instalado"
    fi
fi

# ─── 2. SERVIDOR WEB ─────�
echo -e "${CYAN}[2/3]${NC} Iniciando servidor web..."

if pgrep -f "http.server" > /dev/null 2>&1; then
    echo -e "  ${GREEN}[✓]${NC} Servidor ya activo (PID: $(pgrep -f 'http.server'))"
else
    if [ -d "$HOME/arkhe-zero/index" ]; then
        cd "$HOME/arkhe-zero/index"
        mkdir -p "$HOME/arkhe-zero/logs"
        nohup python3 -m http.server 8080 > "$HOME/arkhe-zero/logs/server.log" 2>&1 &
        sleep 2
        if pgrep -f "http.server" > /dev/null 2>&1; then
            echo -e "  ${GREEN}[✓]${NC} Servidor web en http://localhost:8080"
        else
            echo -e "  ${RED}[✗]${NC} Servidor web no arrancó"
        fi
    else
        echo -e "  ${GOLD}[!]${NC} No existe ~/arkhe-zero/index"
    fi
fi

# ─── 3. VERIFICACIÓN ────────────────────────────────────────────────────────
echo -e "${CYAN}[3/3]${NC} Verificando sistema..."

BACKUP_OK="✗"
[ -x "$HOME/arkhe-zero/auto-backup.sh" ] && BACKUP_OK="✓"

BACKUP_DIR_OK="✗"
[ -d "$HOME/arkhe-backups" ] && BACKUP_DIR_OK="✓"

echo -e "  ${GREEN}[$BACKUP_OK]${NC} auto-backup.sh"
echo -e "  ${GREEN}[$BACKUP_DIR_OK]${NC} ~/arkhe-backups/"

# ─── RESUMEN ────────────────────────────────────────────────────────────────
echo ""
echo -e "${GOLD}═══════════════════════════════════════════════════════════${NC}"
echo -e "${GOLD}  ◯_● ARKHÉ ZERO · SISTEMA LISTO${NC}"
echo -e "${GOLD}═══════════════════════════════════════════════════════════${NC}"
echo -e "  Nodo:    YHDRYH-92CE"
echo -e "  Sello:   SCDR-001"
echo -e "  Firma:   ◯_● · 51/49/100 · KINTSUGI"
echo -e "${GOLD}═══════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "  ${CYAN}Comandos:${NC}"
echo -e "   ${DIM}·${NC} arkhe"
echo -e "   ${DIM}·${NC} ~/arkhe-zero/auto-backup.sh status"
echo ""
echo -e "  ${CYAN}Servidor:${NC}"
echo -e "   ${DIM}·${NC} http://localhost:8080/arkhe-zero.html"
echo ""
