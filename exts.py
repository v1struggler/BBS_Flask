# 装载第三方库的实例对象

from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail


db = SQLAlchemy()
mail = Mail()