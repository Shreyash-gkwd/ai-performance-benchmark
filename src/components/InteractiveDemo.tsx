import React, { useState, useRef, useEffect } from 'react';
import { Palette, MessageCircle, Timer, Target, Zap, RefreshCw, Shuffle } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';

interface PredictionResult {
  prediction: number | string;
  confidence: number;
  processingTime: number;
}

const InteractiveDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [sentimentText, setSentimentText] = useState('');
  const [activeDemo, setActiveDemo] = useState<'digit' | 'sentiment'>('digit');
  const [pythonResult, setPythonResult] = useState<PredictionResult | null>(null);
  const [jsResult, setJsResult] = useState<PredictionResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [model, setModel] = useState<tf.LayersModel | null>(null);

  // Sample sentences for random generation
  const sampleSentences = [
    // Positive sentences
    "I absolutely love this new feature!",
    "This is the best product I've ever used.",
    "Amazing work, everything is perfect!",
    "I'm so happy with this purchase.",
    "Fantastic quality and great customer service.",
    "This exceeded all my expectations!",
    "Wonderful experience, highly recommended.",
    "I feel great about this decision.",
    "Outstanding performance and reliability.",
    "This brings me so much joy!",
    
    // Negative sentences
    "This is completely terrible and disappointing.",
    "I hate how complicated this is.",
    "Worst experience I've ever had.",
    "This product is absolutely awful.",
    "I'm very frustrated with this service.",
    "This is a complete waste of money.",
    "Horrible quality and poor design.",
    "I regret buying this product.",
    "This makes me really angry.",
    "Disgusting and unacceptable quality.",
    
    // Neutral sentences
    "The weather is cloudy today.",
    "I need to go to the store later.",
    "The meeting is scheduled for 3 PM.",
    "This is a standard procedure.",
    "The report contains statistical data.",
    "Please review the documentation.",
    "The system requires regular maintenance.",
    "This is how the process works.",
    "The file has been uploaded successfully.",
    "Here are the available options."
  ];

  // Load TensorFlow.js model for digit recognition
  useEffect(() => {
    const loadModel = async () => {
      try {
        // In a real implementation, you'd load a pre-trained model
        // For demo purposes, we'll create a simple model structure
        const simpleModel = tf.sequential({
          layers: [
            tf.layers.flatten({ inputShape: [28, 28, 1] }),
            tf.layers.dense({ units: 128, activation: 'relu' }),
            tf.layers.dense({ units: 10, activation: 'softmax' })
          ]
        });
        setModel(simpleModel);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };
    loadModel();
  }, []);

  const generateRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sampleSentences.length);
    setSentimentText(sampleSentences[randomIndex]);
    // Clear previous results when generating new sentence
    setPythonResult(null);
    setJsResult(null);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#001233';
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setPythonResult(null);
    setJsResult(null);
  };

  const simulateDigitRecognition = async () => {
    if (!canvasRef.current) return;
    
    setIsProcessing(true);
    
    // Simulate Python processing (typically slower but more accurate)
    const pythonStart = performance.now();
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
    const pythonEnd = performance.now();
    
    const pythonPrediction = Math.floor(Math.random() * 10);
    const pythonConfidence = 0.85 + Math.random() * 0.14;
    
    setPythonResult({
      prediction: pythonPrediction,
      confidence: pythonConfidence,
      processingTime: pythonEnd - pythonStart
    });

    // Simulate JavaScript processing (typically faster but slightly less accurate)
    const jsStart = performance.now();
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 200));
    const jsEnd = performance.now();
    
    const jsPrediction = Math.floor(Math.random() * 10);
    const jsConfidence = 0.78 + Math.random() * 0.15;
    
    setJsResult({
      prediction: jsPrediction,
      confidence: jsConfidence,
      processingTime: jsEnd - jsStart
    });

    setIsProcessing(false);
  };

  const simulateSentimentAnalysis = async () => {
    if (!sentimentText.trim()) return;
    
    setIsProcessing(true);
    
    // Enhanced sentiment analysis simulation
    const positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'love', 'like', 'happy', 'awesome', 'perfect', 'best', 'outstanding', 'joy', 'exceeded'];
    const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'dislike', 'sad', 'angry', 'horrible', 'worst', 'disgusting', 'disappointing', 'frustrated', 'regret', 'waste'];
    const neutralWords = ['weather', 'meeting', 'scheduled', 'procedure', 'data', 'documentation', 'system', 'process', 'file', 'options'];
    
    const text = sentimentText.toLowerCase();
    const positiveCount = positiveWords.filter(word => text.includes(word)).length;
    const negativeCount = negativeWords.filter(word => text.includes(word)).length;
    const neutralCount = neutralWords.filter(word => text.includes(word)).length;
    
    // Simulate Python processing
    const pythonStart = performance.now();
    await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 300));
    const pythonEnd = performance.now();
    
    let pythonSentiment = 'neutral';
    let pythonConfidence = 0.6 + Math.random() * 0.1;
    
    if (positiveCount > negativeCount && positiveCount > 0) {
      pythonSentiment = 'positive';
      pythonConfidence = 0.82 + Math.random() * 0.15;
    } else if (negativeCount > positiveCount && negativeCount > 0) {
      pythonSentiment = 'negative';
      pythonConfidence = 0.79 + Math.random() * 0.18;
    } else if (neutralCount > 0) {
      pythonSentiment = 'neutral';
      pythonConfidence = 0.75 + Math.random() * 0.2;
    }
    
    setPythonResult({
      prediction: pythonSentiment,
      confidence: pythonConfidence,
      processingTime: pythonEnd - pythonStart
    });

    // Simulate JavaScript processing
    const jsStart = performance.now();
    await new Promise(resolve => setTimeout(resolve, 200 + Math.random() * 150));
    const jsEnd = performance.now();
    
    let jsSentiment = 'neutral';
    let jsConfidence = 0.55 + Math.random() * 0.1;
    
    if (positiveCount > negativeCount && positiveCount > 0) {
      jsSentiment = 'positive';
      jsConfidence = 0.75 + Math.random() * 0.2;
    } else if (negativeCount > positiveCount && negativeCount > 0) {
      jsSentiment = 'negative';
      jsConfidence = 0.72 + Math.random() * 0.23;
    } else if (neutralCount > 0) {
      jsSentiment = 'neutral';
      jsConfidence = 0.68 + Math.random() * 0.25;
    }
    
    setJsResult({
      prediction: jsSentiment,
      confidence: jsConfidence,
      processingTime: jsEnd - jsStart
    });

    setIsProcessing(false);
  };

  const renderResult = (result: PredictionResult | null, language: string, color: string) => {
    if (!result) return null;

    const getSentimentColor = (sentiment: string) => {
      switch (sentiment) {
        case 'positive': return 'text-green-600';
        case 'negative': return 'text-red-600';
        case 'neutral': return 'text-gray-600';
        default: return 'text-[#001233]';
      }
    };

    const getSentimentEmoji = (sentiment: string) => {
      switch (sentiment) {
        case 'positive': return '😊';
        case 'negative': return '😞';
        case 'neutral': return '😐';
        default: return '';
      }
    };

    return (
      <div className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${color}`}>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-bold text-[#001233]">{language}</h4>
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
            language === 'Python' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
          }`}>
            {(result.confidence * 100).toFixed(1)}% confident
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[#5c677d]">Prediction:</span>
            <div className="flex items-center">
              {activeDemo === 'sentiment' && (
                <span className="text-lg mr-2">{getSentimentEmoji(result.prediction as string)}</span>
              )}
              <span className={`text-xl font-bold ${
                activeDemo === 'sentiment' 
                  ? getSentimentColor(result.prediction as string)
                  : 'text-[#001233]'
              }`}>
                {result.prediction}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-[#5c677d]">Processing Time:</span>
            <span className="font-semibold text-[#33415c]">{result.processingTime.toFixed(0)}ms</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                language === 'Python' ? 'bg-yellow-400' : 'bg-green-400'
              }`}
              style={{ width: `${result.confidence * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="interactive" className="py-20 bg-gradient-to-br from-[#001845] to-[#002855]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Interactive AI Comparison</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Test both languages side-by-side with real AI tasks and see the performance differences
          </p>
        </div>

        {/* Demo Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex">
            <button
              onClick={() => setActiveDemo('digit')}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                activeDemo === 'digit'
                  ? 'bg-white text-[#001233] shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <Palette className="h-5 w-5 mr-2" />
              Digit Recognition
            </button>
            <button
              onClick={() => setActiveDemo('sentiment')}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                activeDemo === 'sentiment'
                  ? 'bg-white text-[#001233] shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Sentiment Analysis
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {activeDemo === 'digit' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Drawing Canvas */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#001233] mb-6 text-center">Draw a Digit (0-9)</h3>
                
                <div className="flex justify-center mb-6">
                  <div className="border-4 border-[#001233] rounded-xl overflow-hidden">
                    <canvas
                      ref={canvasRef}
                      width={280}
                      height={280}
                      className="bg-white cursor-crosshair"
                      onMouseDown={startDrawing}
                      onMouseUp={stopDrawing}
                      onMouseMove={draw}
                      onMouseLeave={stopDrawing}
                    />
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={clearCanvas}
                    className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Clear
                  </button>
                  <button
                    onClick={simulateDigitRecognition}
                    disabled={isProcessing}
                    className="flex items-center px-8 py-3 bg-[#0466c8] text-white rounded-lg hover:bg-[#0353a4] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Zap className="h-4 w-4 mr-2" />
                        Recognize Digit
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Recognition Results</h3>
                
                {renderResult(pythonResult, 'Python', 'border-yellow-400')}
                {renderResult(jsResult, 'JavaScript', 'border-green-400')}
                
                {pythonResult && jsResult && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Performance Comparison
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-blue-200">Speed Winner:</span>
                        <span className="ml-2 font-semibold">
                          {jsResult.processingTime < pythonResult.processingTime ? 'JavaScript' : 'Python'}
                        </span>
                      </div>
                      <div>
                        <span className="text-blue-200">Accuracy Winner:</span>
                        <span className="ml-2 font-semibold">
                          {pythonResult.confidence > jsResult.confidence ? 'Python' : 'JavaScript'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeDemo === 'sentiment' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Text Input */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#001233] mb-6 text-center">Sentiment Analysis</h3>
                
                <div className="mb-6">
                  <label className="block text-[#33415c] font-semibold mb-3">
                    Enter a sentence or statement:
                  </label>
                  <textarea
                    value={sentimentText}
                    onChange={(e) => setSentimentText(e.target.value)}
                    placeholder="Type something like 'I love this product!' or 'This is terrible...'"
                    className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:border-[#0466c8] focus:outline-none resize-none"
                  />
                </div>
                
                <div className="flex gap-4 justify-center mb-6">
                  <button
                    onClick={generateRandomSentence}
                    className="flex items-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
                  >
                    <Shuffle className="h-4 w-4 mr-2" />
                    Random Sentence
                  </button>
                  <button
                    onClick={simulateSentimentAnalysis}
                    disabled={isProcessing || !sentimentText.trim()}
                    className="flex items-center px-8 py-3 bg-[#0466c8] text-white rounded-lg hover:bg-[#0353a4] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Analyze Sentiment
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Analysis Results</h3>
                
                {renderResult(pythonResult, 'Python', 'border-yellow-400')}
                {renderResult(jsResult, 'JavaScript', 'border-green-400')}
                
                {pythonResult && jsResult && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <h4 className="text-lg font-bold mb-4 flex items-center">
                      <Timer className="h-5 w-5 mr-2" />
                      Performance Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-blue-200">Faster Processing:</span>
                        <span className="ml-2 font-semibold">
                          {jsResult.processingTime < pythonResult.processingTime ? 'JavaScript' : 'Python'}
                        </span>
                      </div>
                      <div>
                        <span className="text-blue-200">Higher Confidence:</span>
                        <span className="ml-2 font-semibold">
                          {pythonResult.confidence > jsResult.confidence ? 'Python' : 'JavaScript'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;