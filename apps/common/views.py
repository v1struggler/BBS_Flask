# 定义视图

from flask import Blueprint, make_response, request
from utils import restful, zlcache, demo
from utils.captcha import Captcha
from io import BytesIO
from exts import alidayu

bp = Blueprint("common", __name__, url_prefix='/common')


@bp.route('/')
def index():
    return "common index"


# 图片验证码
@bp.route('/captcha/')
def graph_captcha():
    text, image = Captcha.gene_graph_captcha()              # 获取验证码
    zlcache.set(text.lower(), text.lower())
    out = BytesIO()                         # 创建字节流
    image.save(out, 'png')                  # 将图片存储到字节流当中，格式为png
    out.seek(0)                             # 将文件流的指针放在0的位置
    resp = make_response(out.read())        # 创建response对象
    resp.content_type = 'image/png'
    return resp


# 旧版本：使用get的方式发送短信验证码
@bp.route('/sms_captcha/')
def sms_captcha():
    # ?telephone=xxx
    # /c/sms_captcha/xxx
    telephone = request.args.get('telephone')
    if not telephone:
        return restful.params_error(message='请传入手机号码！')

    captcha = Captcha.gene_text(number=4)  # 随机生成一个4位数的验证码

    if demo.alidayu(telephone, captcha):
        return restful.success()
    else:
        #return restful.params_error(message='短信验证码发送失败！')
        return restful.success()
