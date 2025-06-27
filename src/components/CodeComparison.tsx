import React, { useState } from 'react';
import { Code, Copy, Check } from 'lucide-react';

const CodeComparison: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const codeExamples = [
    {
      title: 'Neural Network Training',
      python: `import tensorflow as tf
from tensorflow import keras

# Create a simple neural network
model = keras.Sequential([
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')
])

# Compile and train
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(x_train, y_train, epochs=10)`,
      javascript: `import * as tf from '@tensorflow/tfjs';

// Create a simple neural network
const model = tf.sequential({
  layers: [
    tf.layers.dense({units: 128, activation: 'relu'}),
    tf.layers.dropout({rate: 0.2}),
    tf.layers.dense({units: 10, activation: 'softmax'})
  ]
});

// Compile and train
model.compile({
  optimizer: 'adam',
  loss: 'sparseCategoricalCrossentropy',
  metrics: ['accuracy']
});

await model.fit(xTrain, yTrain, {epochs: 10});`
    },
    {
      title: 'Image Classification',
      python: `import cv2
import numpy as np
from tensorflow.keras.applications import ResNet50

# Load pre-trained model
model = ResNet50(weights='imagenet')

# Process image
image = cv2.imread('image.jpg')
image = cv2.resize(image, (224, 224))
image = np.expand_dims(image, axis=0)

# Make prediction
predictions = model.predict(image)
class_idx = np.argmax(predictions[0])`,
      javascript: `import * as tf from '@tensorflow/tfjs';

// Load pre-trained model
const model = await tf.loadLayersModel('/models/resnet50/model.json');

// Process image
const img = document.getElementById('image');
const tensor = tf.browser.fromPixels(img)
  .resizeNearestNeighbor([224, 224])
  .expandDims(0)
  .div(255.0);

// Make prediction
const predictions = await model.predict(tensor);
const classIdx = predictions.argMax(-1);`
    }
  ];

  const copyToClipboard = (code: string, lang: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(`${lang}-${code.substring(0, 20)}`);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="examples" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001233] mb-4">Code Comparison</h2>
          <p className="text-xl text-[#5c677d] max-w-3xl mx-auto">
            Side-by-side implementation examples showing how the same AI tasks are accomplished
          </p>
        </div>

        <div className="space-y-16">
          {codeExamples.map((example, index) => (
            <div key={index} className="max-w-7xl mx-auto">
              <h3 className="text-2xl font-bold text-[#001233] mb-8 text-center">{example.title}</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Python Code */}
                <div className="bg-[#001233] rounded-2xl overflow-hidden shadow-xl">
                  <div className="bg-yellow-400 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-[#001233] mr-3" />
                      <span className="font-bold text-[#001233]">Python</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(example.python, 'python')}
                      className="p-2 hover:bg-yellow-300 rounded-lg transition-colors duration-200"
                    >
                      {copiedCode === `python-${example.python.substring(0, 20)}` ? (
                        <Check className="h-4 w-4 text-[#001233]" />
                      ) : (
                        <Copy className="h-4 w-4 text-[#001233]" />
                      )}
                    </button>
                  </div>
                  <pre className="p-6 text-sm text-green-400 overflow-x-auto">
                    <code>{example.python}</code>
                  </pre>
                </div>

                {/* JavaScript Code */}
                <div className="bg-[#001233] rounded-2xl overflow-hidden shadow-xl">
                  <div className="bg-green-400 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-[#001233] mr-3" />
                      <span className="font-bold text-[#001233]">JavaScript</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(example.javascript, 'javascript')}
                      className="p-2 hover:bg-green-300 rounded-lg transition-colors duration-200"
                    >
                      {copiedCode === `javascript-${example.javascript.substring(0, 20)}` ? (
                        <Check className="h-4 w-4 text-[#001233]" />
                      ) : (
                        <Copy className="h-4 w-4 text-[#001233]" />
                      )}
                    </button>
                  </div>
                  <pre className="p-6 text-sm text-yellow-400 overflow-x-auto">
                    <code>{example.javascript}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeComparison;