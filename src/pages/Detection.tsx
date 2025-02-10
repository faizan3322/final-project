import React, { useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Detection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
      setResult(null);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const analyzeImage = () => {
    setAnalyzing(true);
    // Simulate AI analysis with a more detailed response
    setTimeout(() => {
      setAnalyzing(false);
      setResult(`Based on our AI analysis:

1. Primary Assessment: The image shows characteristics that may indicate a benign skin lesion.
2. Confidence Level: 85% confidence in this assessment
3. Key Observations:
   - Regular border pattern
   - Consistent coloration
   - Symmetrical shape
4. Recommendation: While initial analysis suggests benign characteristics, we strongly recommend consulting a healthcare professional for a comprehensive evaluation.`);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center transform transition-all duration-500 hover:scale-105">
        Skin Cancer Detection
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-8">
          <div className="max-w-xl mx-auto">
            <label
              className={`flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 ${
                dragActive ? 'border-blue-500 bg-blue-50' : 'border-blue-600'
              } border-dashed cursor-pointer transition-all duration-300 hover:bg-blue-50`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className={`w-8 h-8 ${dragActive ? 'text-blue-500' : 'text-blue-600'} transition-colors duration-300`} />
              <span className="mt-2 text-base">Drag and drop an image or click to upload</span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>

        {selectedImage && (
          <div className="space-y-6 animate-fade-in">
            <div className="max-w-md mx-auto transform transition-all duration-500 hover:scale-105">
              <img
                src={selectedImage}
                alt="Selected skin"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="text-center">
              <button
                onClick={analyzeImage}
                disabled={analyzing}
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                {analyzing ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  'Analyze Image'
                )}
              </button>
            </div>

            {result && (
              <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105">
                <div className="flex items-start space-x-2 mb-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-lg">Analysis Result</h3>
                </div>
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap text-gray-700 font-sans">{result}</pre>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Important:</strong> This is a preliminary analysis only. Please consult with a healthcare professional for proper diagnosis. Early detection and professional medical advice are crucial for skin cancer prevention and treatment.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}