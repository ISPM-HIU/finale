import os
import mediapipe as mp
from flask import Flask, request, jsonify
import matplotlib.pyplot as plt
import pickle
from PIL import Image
import cv2
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import numpy as np
app = Flask(__name__)
DATA_DIR = './data'
if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

@app.route('/create-model', methods=['POST'])
def createModel():
    if 'img' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    if 'number_model' not in request.form:
        return jsonify({'error': 'No model selected'}), 400
    img = request.files['img']
    model = request.form['number_model']
    if img.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    return collect_imgs(img, model, img.filename)

def collect_imgs(img, model, filename):
    if not os.path.exists(os.path.join(DATA_DIR, str(model))):
        os.makedirs(os.path.join(DATA_DIR, str(model)))
    print('Collecting data for class {}'.format(model))
    image = Image.open(img)
    image.save(os.path.join(DATA_DIR, str(model),filename))
    return filename

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)
DATA_DIR = './data'

@app.route('/create-dataset', methods=['GET'])
def dataset():
    data = []
    labels = []
    for dir_ in os.listdir(DATA_DIR):
        for img_path in os.listdir(os.path.join(DATA_DIR, dir_)):
            data_aux = []
            x_ = []
            y_ = []
            img = cv2.imread(os.path.join(DATA_DIR, dir_, img_path))
            img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            results = hands.process(img_rgb)
            if results.multi_hand_landmarks:
                for hand_landmarks in results.multi_hand_landmarks:
                    for i in range(len(hand_landmarks.landmark)):
                        x = hand_landmarks.landmark[i].x
                        y = hand_landmarks.landmark[i].y
                        x_.append(x)
                        y_.append(y)
                    for i in range(len(hand_landmarks.landmark)):
                        x = hand_landmarks.landmark[i].x
                        y = hand_landmarks.landmark[i].y
                        data_aux.append(x - min(x_))
                        data_aux.append(y - min(y_))
                data.append(data_aux)
                labels.append(dir_)
    f = open('data.pickle', 'wb')
    pickle.dump({'data': data, 'labels': labels}, f)
    f.close()
    return "Success create dataset"

@app.route('/train-classifier', methods=['GET'])
def train_classifier():
    if not os.path.exists('./data.pickle'):
        return jsonify({'error': 'No dataset created'}), 400
    data_dict = pickle.load(open('./data.pickle', 'rb'))
    data = np.asarray(data_dict['data'])
    labels = np.asarray(data_dict['labels'])
    x_train, x_test, y_train, y_test = train_test_split(data, labels, test_size=0.2, shuffle=True, stratify=labels)
    model = RandomForestClassifier()
    model.fit(x_train, y_train)
    y_predict = model.predict(x_test)
    score = accuracy_score(y_predict, y_test)
    print('{}% of samples were classified correctly !'.format(score * 100))
    f = open('model.p', 'wb')
    pickle.dump({'model': model}, f)
    f.close()
    return "Success training classifier"

@app.route('/inference-classifier', methods=['GET'])
def inference_classifier():
    if not os.path.exists('./model.p'):
        return jsonify({'error': 'No model created'}), 400
    model_dict = pickle.load(open('./model.p', 'rb'))
    model = model_dict['model'] 
    labels_dict = {0: 'Tape', 1: 'Bien', 2: 'Peace'} #Vous pouvez changer les labels
    data_aux = []
    x_ = []
    y_ = []
    if 'img' not in request.files:
        return jsonify({'error': 'No image part'}), 400
    img_data = request.files['img']
    if img_data.filename == '':
        return jsonify({'error': 'No selected image'}), 400
    input_dir = os.path.join(DATA_DIR, 'input')
    if not os.path.exists(input_dir):
        os.makedirs(input_dir)
    image = Image.open(img_data)
    image.save(os.path.join(input_dir, img_data.filename))
    img = cv2.imread(os.path.join(DATA_DIR, 'input','{}'.format(img_data.filename)))
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    results = hands.process(img_rgb)
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            mp_drawing.draw_landmarks(
            img,  # image to draw
            hand_landmarks,  # model output
            mp_hands.HAND_CONNECTIONS,  # hand connections
            mp_drawing_styles.get_default_hand_landmarks_style(),
            mp_drawing_styles.get_default_hand_connections_style())
        for hand_landmarks in results.multi_hand_landmarks:
            for i in range(len(hand_landmarks.landmark)):
                x = hand_landmarks.landmark[i].x
                y = hand_landmarks.landmark[i].y

                x_.append(x)
                y_.append(y)

            for i in range(len(hand_landmarks.landmark)):
                x = hand_landmarks.landmark[i].x
                y = hand_landmarks.landmark[i].y
                data_aux.append(x - min(x_))
                data_aux.append(y - min(y_))

        prediction = model.predict([np.asarray(data_aux)])

        predicted_character = labels_dict[int(prediction[0])]
        return predicted_character
    
if __name__ == '__main__':
    app.run(debug=True, port=5000)