ARG PYTHON_VERSION=3.6

FROM python:${PYTHON_VERSION}

WORKDIR /app

COPY myapp/requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY myapp .

CMD ["python3", "app.py"]