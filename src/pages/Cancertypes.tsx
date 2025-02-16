import React from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Target, Clock, Activity, Shield, Stethoscope } from 'lucide-react';
import { useState, useRef } from "react";


interface CancerType {
    name: string;
    description: string;
    symptoms: string[];
    riskFactors: string[];
    prevention: string[];
    diagnosis: string[];
    treatment: string[];
    statistics: string[];
    earlyDetection: string[];
    image: string;
    stagingInfo: {
      stage: string;
      description: string;
    }[];
  }

  const skinCancerTypes: CancerType[] = [
    {
      name: "Melanoma",
      description: "The most dangerous form of skin cancer, melanoma develops in melanocytes, the cells that produce melanin. While it accounts for only about 1% of skin cancers, it causes a large majority of skin cancer deaths. Melanoma can develop anywhere on the body, in otherwise normal skin or in an existing mole that becomes cancerous.",
      symptoms: [
        "Asymmetrical moles or new spots",
        "Borders that are irregular, scalloped, or poorly defined",
        "Multiple colors within one mole (tan, brown, black, red, white, or blue)",
        "Diameter larger than 6mm (about the size of a pencil eraser)",
        "Evolution or changes in size, shape, color, or elevation",
        "Itching, tenderness, or pain in the affected area",
        "Bleeding, oozing, or crusting of the mole",
        "Dark lesions under fingernails or toenails",
        "Dark lesions on mucous membranes"
      ],
      riskFactors: [
        "Excessive UV exposure from sun or tanning beds",
        "Fair skin, light hair, and light eyes",
        "Family history of melanoma",
        "Multiple moles (more than 50)",
        "Previous sunburns, especially during childhood",
        "Weakened immune system",
        "Age (risk increases with age)",
        "Personal history of skin cancer",
        "Xeroderma pigmentosum (rare genetic condition)",
        "Living closer to the equator or at a higher elevation"
      ],
      prevention: [
        "Use broad-spectrum sunscreen (SPF 30 or higher) daily",
        "Avoid sun exposure during peak hours (10 am to 4 pm)",
        "Wear protective clothing, including wide-brimmed hats",
        "Use UV-protective sunglasses",
        "Perform regular skin self-examinations",
        "Get professional skin checks annually",
        "Avoid tanning beds completely",
        "Seek shade when outdoors",
        "Use UV-protective clothing and gear",
        "Teach children sun-safe behaviors early"
      ],
      diagnosis: [
        "Visual examination using the ABCDE rule",
        "Dermoscopy (examination with special magnifying tool)",
        "Skin biopsy (punch, excisional, or incisional)",
        "Lymph node biopsy if spread is suspected",
        "Imaging tests (CT, MRI, PET scan) for staging",
        "Genetic testing for certain mutations",
        "Blood tests for monitoring treatment response"
      ],
      treatment: [
        "Surgery (wide local excision)",
        "Sentinel lymph node biopsy",
        "Immunotherapy (checkpoint inhibitors)",
        "Targeted therapy for specific gene mutations",
        "Radiation therapy",
        "Chemotherapy",
        "Clinical trials",
        "Lymph node dissection if needed",
        "Palliative care for advanced cases"
      ],
      statistics: [
        "5-year survival rate for localized melanoma: 99%",
        "5-year survival rate for regional spread: 68%",
        "5-year survival rate for distant spread: 30%",
        "Accounts for about 1% of skin cancers but causes majority of skin cancer deaths",
        "Rates have been rising over the past few decades",
        "More common in men than women",
        "Median age at diagnosis is 65"
      ],
      earlyDetection: [
        "Monthly self-examination of skin",
        "Documentation of existing moles",
        "Photography of suspicious lesions",
        "Regular dermatologist visits",
        "Use of body mapping for multiple moles",
        "Special attention to high-risk areas",
        "Partner assistance for hard-to-see areas"
      ],
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&auto=format&fit=crop",
      stagingInfo: [
        {
          stage: "Stage 0 (In Situ)",
          description: "Cancer cells are only in the outer layer of skin (epidermis)"
        },
        {
          stage: "Stage I",
          description: "Tumor is ≤2mm thick, no ulceration or lymph node involvement"
        },
        {
          stage: "Stage II",
          description: "Tumor is >2mm thick, may have ulceration, no lymph node involvement"
        },
        {
          stage: "Stage III",
          description: "Any thickness with lymph node involvement or in-transit metastases"
        },
        {
          stage: "Stage IV",
          description: "Cancer has spread to distant organs or lymph nodes"
        }
      ]
    },
    {
      name: "Basal Cell Carcinoma",
      description: "Basal cell carcinoma (BCC) is the most common form of skin cancer and the most frequently occurring form of all cancers. It develops in the basal cells, which line the deepest layer of the epidermis. While BCC rarely spreads beyond the original tumor site, it can be disfiguring if not treated promptly. The disease typically develops on sun-exposed areas, particularly the face, ears, neck, scalp, shoulders, and back.",
      symptoms: [
        "Pearly, waxy bumps with visible blood vessels",
        "Flat, flesh-colored or brown lesions",
        "Bleeding or scabbing sores that heal and return",
        "Sores that don't heal",
        "Raised reddish patches that might be itchy",
        "Pink growths with rolled edges and crusted indentations",
        "Scar-like areas that are white, yellow or waxy",
        "Changes in size, shape, or color of existing growths",
        "Lesions with irregular borders and pigmentation"
      ],
      riskFactors: [
        "Chronic sun exposure",
        "Age over 50",
        "Fair skin, light hair, and light eyes",
        "Male gender",
        "Use of immunosuppressive drugs",
        "Exposure to arsenic",
        "Previous radiation therapy",
        "Personal history of skin cancer",
        "Chronic skin inflammation or injury",
        "Inherited syndromes (e.g., Gorlin syndrome)"
      ],
      prevention: [
        "Daily sunscreen use (SPF 30 or higher)",
        "Protective clothing with UPF rating",
        "Regular skin examinations",
        "Avoid tanning beds",
        "Wear wide-brimmed hats",
        "Use UV-protective sunglasses",
        "Seek shade during peak sun hours",
        "Regular dermatologist visits",
        "Protective measures in high-altitude areas",
        "Education about sun safety"
      ],
      diagnosis: [
        "Physical examination",
        "Skin biopsy (shave, punch, or excisional)",
        "Dermoscopy examination",
        "Imaging tests for rare cases of deep tissue involvement",
        "Careful examination of lymph nodes",
        "Photography for monitoring",
        "Mapping of multiple lesions"
      ],
      treatment: [
        "Surgical excision",
        "Mohs micrographic surgery",
        "Curettage and electrodesiccation",
        "Radiation therapy",
        "Photodynamic therapy",
        "Topical medications (5-FU, imiquimod)",
        "Cryosurgery",
        "Laser surgery",
        "Oral medications for advanced cases"
      ],
      statistics: [
        "Most common form of skin cancer",
        "Over 4 million cases diagnosed annually in the US",
        "Cure rate of 95% or higher if detected early",
        "Less than 0.1% risk of metastasis",
        "More common in men than women",
        "Increasing incidence in younger people",
        "Higher prevalence in sunny climates"
      ],
      earlyDetection: [
        "Regular self-examination",
        "Annual professional skin checks",
        "Awareness of personal risk factors",
        "Monitoring of existing lesions",
        "Documentation of skin changes",
        "Partner assistance for hard-to-see areas",
        "Use of skin mapping technology"
      ],
      image: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=800&auto=format&fit=crop",
      stagingInfo: [
        {
          stage: "Low Risk",
          description: "Small, well-defined primary tumor in low-risk area"
        },
        {
          stage: "High Risk",
          description: "Larger tumors, high-risk locations, or aggressive growth patterns"
        },
        {
          stage: "Locally Advanced",
          description: "Significant local invasion or nerve involvement"
        },
        {
          stage: "Metastatic",
          description: "Rare cases where cancer has spread to other parts of body"
        }
      ]
    },
    {
      name: "Squamous Cell Carcinoma",
      description: "Squamous cell carcinoma (SCC) is the second most common form of skin cancer, developing in the squamous cells that make up the middle and outer layers of the skin. While not as dangerous as melanoma, it can be aggressive in certain cases and has a higher risk of spreading compared to basal cell carcinoma. SCC often appears on sun-exposed areas and can develop from precancerous lesions called actinic keratoses.",
      symptoms: [
        "Firm, red nodules",
        "Flat lesions with scaly, crusted surfaces",
        "Sores that heal and reopen",
        "Rough, scaly patches",
        "Raised growths with a central depression",
        "Persistent open sores that bleed easily",
        "Growths that look like warts",
        "Changes in existing scars or ulcers",
        "Rough patches or red spots on lip"
      ],
      riskFactors: [
        "Excessive UV exposure (sun and tanning beds)",
        "Fair skin and light features",
        "Age over 50",
        "History of sunburns",
        "Weakened immune system",
        "Human papillomavirus (HPV) infection",
        "Chronic skin inflammation",
        "Exposure to radiation or chemicals",
        "Smoking",
        "Previous skin cancer"
      ],
      prevention: [
        "Sun protection year-round",
        "Regular skin checks",
        "Avoid tanning",
        "Protective clothing",
        "Use of broad-spectrum sunscreen",
        "Hat and sunglasses use",
        "Avoiding peak sun hours",
        "Treatment of precancerous lesions",
        "Smoking cessation",
        "Regular medical check-ups"
      ],
      diagnosis: [
        "Physical examination",
        "Skin biopsy",
        "Imaging tests for advanced cases",
        "Lymph node examination",
        "Dermoscopy",
        "CT or PET scans if metastasis suspected",
        "Blood tests for monitoring"
      ],
      treatment: [
        "Surgical excision",
        "Mohs surgery for high-risk areas",
        "Radiation therapy",
        "Curettage and electrodesiccation",
        "Cryosurgery",
        "Photodynamic therapy",
        "Topical medications",
        "Systemic chemotherapy for advanced cases",
        "Immunotherapy"
      ],
      statistics: [
        "Second most common skin cancer",
        "Over 1 million cases diagnosed annually in the US",
        "98% cure rate when caught early",
        "2-5% risk of metastasis",
        "Higher incidence in immunosuppressed patients",
        "15,000 deaths annually in the US",
        "Increasing incidence in younger populations"
      ],
      earlyDetection: [
        "Monthly self-examinations",
        "Professional skin checks",
        "Monitoring of actinic keratoses",
        "Regular lip examination",
        "Documentation of skin changes",
        "Awareness of high-risk areas",
        "Partner assistance for thorough checks"
      ],
      image: "https://images.ctfassets.net/1ny4yoiyrqia/0RNTNvh0OsE6vFxhoKXm/665168d4e1b144e50d3a6ca521b94f21/squamous-cell-carcinoma-symtoms-rough-reddish-patch.png?w=450&h=300",
      stagingInfo: [
        {
          stage: "Stage 0",
          description: "Cancer is only in the epidermis (in situ)"
        },
        {
          stage: "Stage I",
          description: "Small tumor with no high-risk features"
        },
        {
          stage: "Stage II",
          description: "Larger tumor with high-risk features"
        },
        {
          stage: "Stage III",
          description: "Cancer has spread to lymph nodes"
        },
        {
          stage: "Stage IV",
          description: "Cancer has spread to distant organs"
        }
      ]
    }
  ];


export default function Cancertypes() {
    const [expandedType, setExpandedType] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<string>("overview");
  
    const toggleExpand = (name: string) => {
      if (expandedType === name) {
        setExpandedType(null);
      } else {
        setExpandedType(name);
        setActiveTab("overview");
      }
    };

    const renderTabContent = (cancer: CancerType) => {
        switch (activeTab) {
          case "overview":
            return (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={cancer.image}
                    alt={cancer.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-700 mb-6">{cancer.description}</p>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Statistics</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      {cancer.statistics.map((stat, index) => (
                        <li key={index} className="mb-1">{stat}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          case "symptoms":
            return (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Symptoms & Signs</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {cancer.symptoms.map((symptom, index) => (
                      <li key={index} className="mb-1">{symptom}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Detection</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {cancer.earlyDetection.map((method, index) => (
                      <li key={index} className="mb-1">{method}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          case "risk":
            return (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Factors</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {cancer.riskFactors.map((factor, index) => (
                      <li key={index} className="mb-1">{factor}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Prevention Methods</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {cancer.prevention.map((method, index) => (
                      <li key={index} className="mb-1">{method}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          case "treatment":
            return (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Diagnosis Methods</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {cancer.diagnosis.map((method, index) => (
                      <li key={index} className="mb-1">{method}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Treatment Options</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {cancer.treatment.map((option, index) => (
                      <li key={index} className="mb-1">{option}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          case "staging":
            return (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cancer Staging Information</h3>
                  <div className="grid gap-4">
                    {cancer.stagingInfo.map((stage, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900">{stage.stage}</h4>
                        <p className="text-gray-700">{stage.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          default:
            return null;
        }
      };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Guide to Skin Cancer Types
          </h1>
          <p className="text-lg text-gray-600">
            Detailed information about different types of skin cancer, including symptoms, risk factors, prevention, and treatment options
          </p>
        </div>

        <div className="space-y-6">
          {skinCancerTypes.map((cancer) => (
            <div
              key={cancer.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(cancer.name)}
                className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    {cancer.name}
                  </h2>
                </div>
                {expandedType === cancer.name ? (
                  <ChevronUp className="w-6 h-6 text-gray-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </button>

              {expandedType === cancer.name && (
                <div className="border-t border-gray-100">
                  <div className="bg-gray-50 p-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                        activeTab === "overview"
                          ? "bg-[#3A7D44] text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Target className="w-4 h-4" />
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab("symptoms")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                        activeTab === "symptoms"
                          ? "bg-[#3A7D44] text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Activity className="w-4 h-4" />
                      Symptoms
                    </button>
                    <button
                      onClick={() => setActiveTab("risk")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                        activeTab === "risk"
                          ? "bg-[#3A7D44] text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Shield className="w-4 h-4" />
                      Risk & Prevention
                    </button>
                    <button
                      onClick={() => setActiveTab("treatment")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                        activeTab === "treatment"
                          ? "bg-[#3A7D44] text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Stethoscope className="w-4 h-4" />
                      Diagnosis & Treatment
                    </button>
                    <button
                      onClick={() => setActiveTab("staging")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                        activeTab === "staging"
                          ? "bg-[#3A7D44] text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      Staging
                    </button>
                  </div>
                  <div className="p-6">
                    {renderTabContent(cancer)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            Disclaimer: This information is for educational purposes only. Always consult healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </div>
  )
}
