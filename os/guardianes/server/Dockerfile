FROM python:3.11-slim
WORKDIR /app
COPY . /app
RUN pip install fastapi uvicorn requests --no-cache-dir
EXPOSE 8000
CMD ["uvicorn", "os.guardianes.server.app:app", "--host", "0.0.0.0", "--port", "8000"]
