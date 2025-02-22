# Use Python base image
FROM python:3.11

# Set the working directory
WORKDIR /app

# Copy requirements file
COPY requirements.txt .

# Create a virtual environment and install dependencies
RUN python -m venv /venv
RUN /venv/bin/pip install --no-cache-dir -r requirements.txt

# Copy the application
COPY . .

# Expose port
EXPOSE 8000

# Run migrations and start server
CMD ["/venv/bin/python", "manage.py", "migrate"]
CMD ["/venv/bin/python", "manage.py", "runserver", "0.0.0.0:8000"]
