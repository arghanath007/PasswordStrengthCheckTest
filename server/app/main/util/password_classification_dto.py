from flask_restx import Namespace, fields


class PasswordClassificationDto:

    api = Namespace('Password Strength Prediction', description='Type your password')
    
    password_pred = api.model('password_pred',{
        'password' : fields.String(required = True, description="Password")
    })