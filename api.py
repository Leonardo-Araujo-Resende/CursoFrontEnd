import requests
from flask import Flask, jsonify

api = Flask("PrimeiraAPI")

@api.route("/pi", methods=['GET'])
def get_pi():
    return jsonify(3.14)

api.run()
