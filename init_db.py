from app import app, db

with app.app_context():  # Create an application context
    db.create_all()
    print("Database tables created!")
