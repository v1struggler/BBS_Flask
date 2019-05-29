# 配置文件
import os


# 开启调试模式
DEBUG = True


# 数据库配置信息
DB_USERNAME = 'root'
DB_PASSWORD = '123456'
DB_HOST = '127.0.0.1'
DB_PORT = '3306'
DB_NAME = 'zlbbs'
DB_URI = 'mysql+pymysql://%s:%s@%s:%s/%s?charset=utf8' % (DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME)
SQLALCHEMY_DATABASE_URI = DB_URI
SQLALCHEMY_TRACK_MODIFICATIONS = False          # 与跟踪相关，True：一旦模型被改变都会给你发送信号；


# 使用session就需要设置SECRET_KEY
SECRET_KEY = os.urandom(24)
# session中key的标识
CMS_USER_ID = 'ASDFASDFSA'


# 邮箱服务器配置
MAIL_SERVER = "smtp.qq.com"                     # 发送者邮箱的服务器地址
MAIL_PORT = '587'                               # SSL协议端口号
MAIL_USE_TLS = True                             # MAIL_USE_TLS：端口号587；MAIL_USE_SSL：端口号465；QQ邮箱不支持非加密方式发送邮件；
# MAIL_USE_SSL
MAIL_USERNAME = "714464655@qq.com"
MAIL_PASSWORD = "xoexfxiqmddrbdhf"
MAIL_DEFAULT_SENDER = "714464655@qq.com"