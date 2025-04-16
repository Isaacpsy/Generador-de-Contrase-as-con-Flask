from flask import Flask, render_template, request, jsonify
import random
import string

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generar', methods=['POST'])
def generar():
    data = request.get_json()
    longitud = data.get('longitud', 12)
    incluir_mayusculas = data.get('incluirMayusculas', True)
    incluir_minusculas = data.get('incluirMinusculas', True)
    incluir_numeros = data.get('incluirNumeros', True)
    incluir_simbolos = data.get('incluirSimbolos', False)

    caracteres = ''
    if incluir_mayusculas:
        caracteres += string.ascii_uppercase
    if incluir_minusculas:
        caracteres += string.ascii_lowercase
    if incluir_numeros:
        caracteres += string.digits
    if incluir_simbolos:
        caracteres += string.punctuation

    if not caracteres:
        return jsonify({'error': 'Debes seleccionar al menos un tipo de carácter'}), 400

    contrasena = ''.join(random.choice(caracteres) for _ in range(longitud))
    return jsonify({'contrasena': contrasena})

if __name__ == '__main__':
    app.run(debug=True)