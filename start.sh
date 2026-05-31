#!/bin/bash
set -e
cd "$(dirname "$0")"

if [ ! -d ".venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv .venv
fi

if [ ! -f ".venv/lib/python*/site-packages/fastapi/__init__.py" ] 2>/dev/null || \
   ! .venv/bin/python -c "import fastapi" 2>/dev/null; then
    echo "Installing dependencies..."
    .venv/bin/pip install -q -r requirements.txt
fi

# Kill any stale process on port 8000 before starting
lsof -ti:8000 | xargs kill -9 2>/dev/null || true
sleep 0.5

echo "Starting Solar System Explorer at http://localhost:8000"
open "http://localhost:8000" 2>/dev/null || true
.venv/bin/uvicorn main:app --host 0.0.0.0 --port 8000 --reload
