import { Topic } from "./types";

export const aiTopics: Topic[] = [
  {
    "id": 68,
    "title": "Introduction to Artificial Intelligence",
    "domain": "AI & ML",
    "definition": "Artificial Intelligence (AI) is the branch of computer science that aims to create machines and software that can perform tasks that typically require human intelligence.",
    "keyConcepts": [
      "Intelligent agents",
      "Search and optimization",
      "Knowledge representation",
      "Reasoning",
      "Narrow AI vs General AI",
      "Turing Test"
    ],
    "examples": [
      "Chess-playing programs",
      "Voice assistants",
      "Recommendation systems"
    ],
    "realWorldApplications": [
      "Healthcare",
      "Autonomous vehicles",
      "Customer service"
    ],
    "advantages": [
      "Automates tasks",
      "Processes data fast",
      "Personalization",
      "Decision-making"
    ],
    "limitations": [
      "Lacks common sense",
      "Requires data",
      "Explainability",
      "Ethics"
    ],
    "vivaQuestions": [
      {
        "question": "AI vs ML vs DL?",
        "hint": "AI broad; ML subset; DL neural nets"
      },
      {
        "question": "Turing Test?",
        "hint": "Judge cannot tell machine from human"
      },
      {
        "question": "Intelligent agent?",
        "hint": "Perceives and acts"
      },
      {
        "question": "Types of AI?",
        "hint": "Narrow vs General"
      }
    ],
    "defenceAnswer": {
      "intro": "AI builds systems that exhibit intelligent behaviour.",
      "coreExplanation": [
        "Agents perceive and act.",
        "Search and reasoning.",
        "ML learns from data.",
        "Narrow vs General.",
        "Ethics matter."
      ],
      "exampleApplication": "Spam filter is an agent.",
      "conclusion": "AI combines search, reasoning, and learning."
    },
    "keyTerms": [
      "Agent",
      "Turing Test",
      "Narrow AI",
      "Search",
      "Knowledge Representation",
      "ML",
      "General AI"
    ],
    "speakingTips": [
      "Define AI first",
      "Give examples",
      "Mention limitations"
    ]
  },
  {
    "id": 69,
    "title": "Machine Learning (Supervised, Unsupervised, Reinforcement)",
    "domain": "AI & ML",
    "definition": "ML is a subset of AI where systems learn from data. Classified into Supervised (labelled), Unsupervised (no labels), and Reinforcement (rewards).",
    "keyConcepts": [
      "Supervised: classification, regression",
      "Unsupervised: clustering, dimensionality reduction",
      "Reinforcement: policy, rewards",
      "Training vs test",
      "Overfitting",
      "Bias-variance tradeoff"
    ],
    "examples": [
      "Spam detection",
      "Customer clustering",
      "Robot learning to walk"
    ],
    "realWorldApplications": [
      "Fraud detection",
      "Market segmentation",
      "Game AI"
    ],
    "advantages": [
      "Discovers patterns",
      "Scales with data",
      "Different paradigms",
      "Reusable models"
    ],
    "limitations": [
      "Needs labels for supervised",
      "Unsupervised hard to validate",
      "RL sample-inefficient",
      "Overfitting and bias"
    ],
    "vivaQuestions": [
      {
        "question": "Supervised vs unsupervised?",
        "hint": "Labels vs no labels"
      },
      {
        "question": "Classification vs regression?",
        "hint": "Discrete vs continuous"
      },
      {
        "question": "Reward and policy in RL?",
        "hint": "Feedback and strategy"
      },
      {
        "question": "What is overfitting?",
        "hint": "Memorizes training, poor on new data"
      }
    ],
    "defenceAnswer": {
      "intro": "ML learns from experience.",
      "coreExplanation": [
        "Supervised uses input-output pairs.",
        "Unsupervised finds structure.",
        "RL uses rewards.",
        "Overfitting and underfitting.",
        "Choose paradigm by problem."
      ],
      "exampleApplication": "E-commerce: supervised for prediction, unsupervised for segments, RL for recommendations.",
      "conclusion": "Three paradigms cover prediction, discovery, and sequential decisions."
    },
    "keyTerms": [
      "Supervised",
      "Unsupervised",
      "Reinforcement",
      "Classification",
      "Regression",
      "Overfitting",
      "Policy"
    ],
    "speakingTips": [
      "Define ML then three types",
      "Compare data and goal",
      "Mention overfitting"
    ]
  },
  {
    "id": 70,
    "title": "Neural Networks and Deep Learning",
    "domain": "AI & ML",
    "definition": "Neural networks are layers of neurons with weights and activation functions; deep learning uses many layers to learn hierarchical representations.",
    "keyConcepts": [
      "Neuron",
      "Layers",
      "Activation (ReLU, sigmoid)",
      "Forward/backprop",
      "Gradient descent",
      "Overfitting"
    ],
    "examples": [
      "Image classification",
      "Speech recognition",
      "MLP for tabular"
    ],
    "realWorldApplications": [
      "Computer vision",
      "NLP",
      "Speech"
    ],
    "advantages": [
      "Complex patterns",
      "Feature learning",
      "Scales with data"
    ],
    "limitations": [
      "Needs data and compute",
      "Black-box",
      "Sensitive to distribution"
    ],
    "vivaQuestions": [
      {
        "question": "Why activation functions?",
        "hint": "Non-linearity"
      },
      {
        "question": "Backpropagation?",
        "hint": "Gradients via chain rule"
      },
      {
        "question": "Vanishing gradient?",
        "hint": "Gradients shrink in depth"
      },
      {
        "question": "Loss function role?",
        "hint": "Measure error"
      }
    ],
    "defenceAnswer": {
      "intro": "Neural nets are function approximators with layers of neurons.",
      "coreExplanation": [
        "Neuron: weights, bias, activation.",
        "Layers: input, hidden, output.",
        "Backprop and gradient descent.",
        "Overfitting and regularization.",
        "Architectures: MLP, CNN, RNN."
      ],
      "exampleApplication": "Digit recognition: pixels to edges to parts to digit class.",
      "conclusion": "Deep learning excels at perception and prediction."
    },
    "keyTerms": [
      "Neuron",
      "Activation",
      "Backpropagation",
      "Gradient Descent",
      "Hidden Layer",
      "Loss"
    ],
    "speakingTips": [
      "Forward and backward pass",
      "Early vs late layers",
      "Limitations"
    ]
  },

  {
    "id": 71,
    "title": "Natural Language Processing (NLP)",
    "domain": "AI & ML",
    "definition": "NLP enables machines to understand, generate, and manipulate human language—translation, sentiment, summarization, chatbots.",
    "keyConcepts": [
      "Tokenization",
      "Word embeddings",
      "Language models",
      "Sequence-to-sequence",
      "Attention",
      "NER, POS"
    ],
    "examples": [
      "Sentiment analysis",
      "Machine translation",
      "Chatbot"
    ],
    "realWorldApplications": [
      "Search",
      "Customer support",
      "Content moderation"
    ],
    "advantages": [
      "Human-machine communication",
      "Scale",
      "Accessibility"
    ],
    "limitations": [
      "Ambiguity",
      "Bias",
      "Low-resource languages"
    ],
    "vivaQuestions": [
      {
        "question": "Stemming vs lemmatization?",
        "hint": "Chop vs dictionary"
      },
      {
        "question": "Word embeddings?",
        "hint": "Dense vectors, meaning"
      },
      {
        "question": "Attention?",
        "hint": "Focus on relevant input"
      },
      {
        "question": "Three NLP tasks?",
        "hint": "Sentiment, NER, translation"
      }
    ],
    "defenceAnswer": {
      "intro": "NLP works with text and speech.",
      "coreExplanation": [
        "Tokenization and vocab.",
        "Embeddings and language models.",
        "Tasks: classification, NER, seq2seq.",
        "Pre-training and fine-tuning.",
        "Challenges: bias, harm."
      ],
      "exampleApplication": "Support: intent, sentiment, chatbot.",
      "conclusion": "NLP from rules to LLMs."
    },
    "keyTerms": [
      "Tokenization",
      "Embedding",
      "Language Model",
      "Attention",
      "NER",
      "BERT"
    ],
    "speakingTips": [
      "Define NLP and tasks",
      "Embeddings and attention",
      "One example"
    ]
  },

  {
    "id": 72,
    "title": "Computer Vision",
    "domain": "AI & ML",
    "definition": "Computer vision lets machines interpret images and video—classification, detection, segmentation, face recognition.",
    "keyConcepts": [
      "Pixels, channels",
      "Convolution",
      "CNN",
      "Object detection",
      "Segmentation",
      "Transfer learning"
    ],
    "examples": [
      "Image classification",
      "Object detection",
      "Face recognition"
    ],
    "realWorldApplications": [
      "Autonomous driving",
      "Medical imaging",
      "Retail and security"
    ],
    "advantages": [
      "Automation",
      "Assistive tech",
      "Safety"
    ],
    "limitations": [
      "Lighting, occlusion",
      "Adversarial",
      "Privacy"
    ],
    "vivaQuestions": [
      {
        "question": "Purpose of pooling?",
        "hint": "Reduce size, invariance"
      },
      {
        "question": "Classification vs detection?",
        "hint": "One label vs boxes"
      },
      {
        "question": "Data augmentation?",
        "hint": "Rotate, flip, crop"
      },
      {
        "question": "Transfer learning?",
        "hint": "Pre-trained, fine-tune"
      }
    ],
    "defenceAnswer": {
      "intro": "CV gives machines the ability to see.",
      "coreExplanation": [
        "Images as arrays.",
        "Convolution and pooling.",
        "Detection and segmentation.",
        "Transfer learning.",
        "Ethics and robustness."
      ],
      "exampleApplication": "Self-driving: lanes, signs, pedestrians, vehicles.",
      "conclusion": "CNNs dominate vision."
    },
    "keyTerms": [
      "Convolution",
      "CNN",
      "Pooling",
      "Detection",
      "Segmentation",
      "Transfer Learning"
    ],
    "speakingTips": [
      "Convolution as sliding filter",
      "Hierarchy of features",
      "One app"
    ]
  },
  {
    "id": 73,
    "title": "Decision Trees and Random Forests",
    "domain": "AI & ML",
    "definition": "Decision trees split data by feature values; Random Forest ensembles many trees with bootstrap and random features.",
    "keyConcepts": [
      "Node, root, leaf",
      "Gini, entropy",
      "Pruning",
      "Bootstrap",
      "Random features"
    ],
    "examples": [
      "Loan default",
      "Medical diagnosis",
      "RF vote"
    ],
    "realWorldApplications": [
      "Credit scoring",
      "Medical diagnosis",
      "Churn"
    ],
    "advantages": [
      "Interpretable",
      "Mixed features",
      "No linearity",
      "RF robust"
    ],
    "limitations": [
      "Tree overfit",
      "Smooth boundaries",
      "RF less interpretable"
    ],
    "vivaQuestions": [
      {
        "question": "Gini impurity?",
        "hint": "Disorder"
      },
      {
        "question": "Bootstrap in RF?",
        "hint": "Diversity"
      },
      {
        "question": "Pruning?",
        "hint": "Overfitting"
      },
      {
        "question": "Tree vs RF?",
        "hint": "Interpretable vs accurate"
      }
    ],
    "defenceAnswer": {
      "intro": "Trees partition by rules; RF ensembles many trees.",
      "coreExplanation": [
        "Tree structure.",
        "Gini and entropy.",
        "Pruning.",
        "Bootstrap and random features.",
        "When to use."
      ],
      "exampleApplication": "Bank RF for loan default.",
      "conclusion": "Trees interpretable, RF accurate."
    },
    "keyTerms": [
      "Decision Tree",
      "Gini",
      "Pruning",
      "Random Forest",
      "Bootstrap"
    ],
    "speakingTips": [
      "Tree as flowchart",
      "Compare tree vs RF",
      "Splitting criterion"
    ]
  },

  {
    "id": 74,
    "title": "Support Vector Machines (SVM)",
    "domain": "AI & ML",
    "definition": "SVM finds the optimal hyperplane maximizing margin; kernel trick for non-linear boundaries.",
    "keyConcepts": [
      "Hyperplane",
      "Margin",
      "Support vectors",
      "Kernel trick",
      "RBF",
      "C"
    ],
    "examples": [
      "Linear SVM: a line separating two classes with maximum margin",
      "RBF kernel: a curve or circle separating classes in 2D",
      "SVR (Support Vector Regression): find a tube that fits the data with minimum error"
    ],
    "realWorldApplications": [
      "Text and document classification (e.g., spam, topic)",
      "Image classification and object recognition",
      "Bioinformatics: protein classification, gene expression analysis"
    ],
    "advantages": [
      "Effective in high-dimensional spaces; works well when features exceed samples",
      "Memory efficient: only support vectors needed for prediction",
      "Kernel trick allows flexible non-linear decision boundaries",
      "Strong theoretical foundation (max margin supports good generalization)"
    ],
    "limitations": [
      "Does not scale well to very large datasets (training can be slow)",
      "Sensitive to kernel and hyperparameter choice (e.g., C, gamma in RBF)",
      "No direct probability output; need extra step (e.g., Platt scaling) for probabilities",
      "Multi-class requires one-vs-one or one-vs-rest; can be cumbersome"
    ],
    "vivaQuestions": [
      {
        "question": "Support vectors?",
        "hint": "Define hyperplane"
      },
      {
        "question": "Kernel trick?",
        "hint": "Implicit high dim"
      },
      {
        "question": "Role of C?",
        "hint": "Margin vs errors"
      },
      {
        "question": "RBF vs linear?",
        "hint": "Non-linear"
      }
    ],
    "defenceAnswer": {
      "intro": "SVM maximizes margin.",
      "coreExplanation": [
        "Margin and support vectors.",
        "Kernel trick.",
        "Soft margin and C.",
        "When to use."
      ],
      "exampleApplication": "Spam with high-dim features.",
      "conclusion": "SVM for structured problems."
    },
    "keyTerms": [
      "Hyperplane",
      "Margin",
      "Support Vector",
      "Kernel",
      "C"
    ],
    "speakingTips": [
      "Maximize margin",
      "Support vectors",
      "Kernel"
    ]
  },

  {
    "id": 75,
    "title": "Clustering (K-Means, DBSCAN)",
    "domain": "AI & ML",
    "definition": "Clustering groups similar data without labels. K-Means: K clusters; DBSCAN: density-based, noise.",
    "keyConcepts": [
      "K-Means",
      "Centroid",
      "DBSCAN",
      "eps, minPts",
      "Core, border, noise"
    ],
    "examples": [
      "Customer segments",
      "GPS hotspots"
    ],
    "realWorldApplications": [
      "Segmentation",
      "Anomaly",
      "Grouping"
    ],
    "advantages": [
      "No labels",
      "K-Means fast",
      "DBSCAN shape"
    ],
    "limitations": [
      "Choose K",
      "Spherical",
      "DBSCAN params"
    ],
    "vivaQuestions": [
      {
        "question": "Choose K?",
        "hint": "Elbow"
      },
      {
        "question": "Core, border, noise?",
        "hint": "DBSCAN"
      },
      {
        "question": "K-Means local?",
        "hint": "Init"
      },
      {
        "question": "DBSCAN vs K-Means?",
        "hint": "Shape, outliers"
      }
    ],
    "defenceAnswer": {
      "intro": "Clustering is unsupervised learning that groups data by similarity without labels. K-Means and DBSCAN are two widely used algorithms: K-Means partitions into K spherical clusters; DBSCAN finds density-based clusters of arbitrary shape and identifies outliers.",
      "coreExplanation": [
        "K-Means starts by choosing K initial centroids, then alternates: assign each point to the nearest centroid, and update each centroid to the mean of its assigned points. This minimizes within-cluster sum of squared distances. We repeat until convergence. The result is K convex clusters; choice of K is critical (elbow method, silhouette score).",
        "K-Means is fast and works when clusters are roughly spherical and similar in size. It is sensitive to outliers and initialization, so we often run it multiple times. Feature scaling matters because the algorithm uses Euclidean distance.",
        "DBSCAN does not require K. We fix eps (radius) and minPts (minimum neighbors). A point is core if it has at least minPts points within distance eps. We form clusters by connecting core points within eps; border points join a neighboring cluster; the rest are noise (outliers). So we get arbitrary-shaped clusters and explicit outlier detection.",
        "DBSCAN is good when we do not know the number of clusters, when clusters are non-spherical, or when we care about noise. It can struggle when clusters have very different densities.",
        "We use clustering for exploration, segmentation (customers, documents), and preprocessing (e.g., cluster labels as features). Evaluation uses internal metrics like silhouette or Davies-Bouldin, or external metrics if labels are available."
      ],
      "exampleApplication": "A retailer segments customers with K-Means (e.g., K=5) by purchase behaviour. With location data, DBSCAN finds dense regions (hotspots) and flags isolated points as anomalies or errors to investigate.",
      "conclusion": "K-Means gives simple, fast, spherical clusters when K is known; DBSCAN finds density-based clusters of any shape and identifies outliers without fixing K."
    },
    "keyTerms": [
      "Clustering",
      "K-Means",
      "Centroid",
      "DBSCAN",
      "Density",
      "Noise",
      "Silhouette"
    ],
    "speakingTips": [
      "Define clustering",
      "K-Means vs DBSCAN",
      "One app"
    ]
  },

  {
    "id": 76,
    "title": "Genetic Algorithms",
    "domain": "AI & ML",
    "definition": "GAs optimize using evolution: population, fitness, selection, crossover, mutation over generations.",
    "keyConcepts": [
      "Population",
      "Chromosome",
      "Fitness",
      "Selection",
      "Crossover",
      "Mutation"
    ],
    "examples": [
      "Function opt",
      "Scheduling"
    ],
    "realWorldApplications": [
      "Design",
      "Scheduling",
      "Feature selection"
    ],
    "advantages": [
      "Non-differentiable",
      "Large search",
      "Discrete"
    ],
    "limitations": [
      "No guarantee",
      "Expensive",
      "Tuning"
    ],
    "vivaQuestions": [
      {
        "question": "Three operators?",
        "hint": "Selection, crossover, mutation"
      },
      {
        "question": "Why mutation?",
        "hint": "Diversity"
      },
      {
        "question": "Fitness?",
        "hint": "Evaluate"
      },
      {
        "question": "GA vs gradient?",
        "hint": "No gradient"
      }
    ],
    "defenceAnswer": {
      "intro": "GAs evolve solutions.",
      "coreExplanation": [
        "Fitness.",
        "Selection.",
        "Crossover.",
        "Mutation.",
        "When to use."
      ],
      "exampleApplication": "Exam schedule.",
      "conclusion": "GAs for hard optimization."
    },
    "keyTerms": [
      "Population",
      "Fitness",
      "Selection",
      "Crossover",
      "Mutation"
    ],
    "speakingTips": [
      "Evolution",
      "Three operators",
      "When"
    ]
  },

  {
    "id": 77,
    "title": "Expert Systems",
    "domain": "AI & ML",
    "definition": "Expert systems use rules and inference engine to emulate expertise; explainable conclusions.",
    "keyConcepts": [
      "Knowledge base",
      "Inference engine",
      "Forward chaining",
      "Backward chaining",
      "Explainability"
    ],
    "examples": [
      "Medical diagnosis",
      "Fault diagnosis"
    ],
    "realWorldApplications": [
      "Healthcare",
      "Manufacturing",
      "Finance"
    ],
    "advantages": [
      "Capture expertise",
      "Explainable",
      "Symbolic"
    ],
    "limitations": [
      "Bottleneck",
      "Brittle",
      "Maintenance"
    ],
    "vivaQuestions": [
      {
        "question": "Forward vs backward?",
        "hint": "Facts to conclusions"
      },
      {
        "question": "Bottleneck?",
        "hint": "Getting rules"
      },
      {
        "question": "Explainable?",
        "hint": "Trace rules"
      },
      {
        "question": "Expert vs ML?",
        "hint": "Rules vs data"
      }
    ],
    "defenceAnswer": {
      "intro": "Expert systems: rules and inference.",
      "coreExplanation": [
        "Knowledge base.",
        "Forward and backward.",
        "Explainability.",
        "Hybrid with ML."
      ],
      "exampleApplication": "Car faults.",
      "conclusion": "Explainable reasoning."
    },
    "keyTerms": [
      "Knowledge Base",
      "Inference Engine",
      "Forward Chaining",
      "Backward Chaining"
    ],
    "speakingTips": [
      "Rules and inference",
      "Forward vs backward",
      "Explainable"
    ]
  },

  {
    "id": 78,
    "title": "Convolutional Neural Networks (CNN)",
    "domain": "AI & ML",
    "definition": "CNNs for images: convolution, pooling, hierarchical features; classification, detection, segmentation.",
    "keyConcepts": [
      "Convolution",
      "Feature map",
      "Pooling",
      "Receptive field",
      "Parameter sharing"
    ],
    "examples": [
      "Image classification",
      "Detection",
      "Segmentation"
    ],
    "realWorldApplications": [
      "Medical imaging",
      "Autonomous driving",
      "Face recognition"
    ],
    "advantages": [
      "Spatial",
      "Hierarchical",
      "Invariance",
      "Transfer"
    ],
    "limitations": [
      "Grid",
      "Compute",
      "Data",
      "Adversarial"
    ],
    "vivaQuestions": [
      {
        "question": "Why conv for images?",
        "hint": "Local, sharing"
      },
      {
        "question": "Max pooling?",
        "hint": "Reduce, invariance"
      },
      {
        "question": "Receptive field?",
        "hint": "Input region"
      },
      {
        "question": "Famous CNN?",
        "hint": "ResNet"
      }
    ],
    "defenceAnswer": {
      "intro": "CNNs for images.",
      "coreExplanation": [
        "Convolution.",
        "Pooling.",
        "Detection and segmentation.",
        "Transfer learning."
      ],
      "exampleApplication": "Medical X-ray.",
      "conclusion": "CNNs dominate vision."
    },
    "keyTerms": [
      "Convolution",
      "Pooling",
      "Feature Map",
      "Receptive Field"
    ],
    "speakingTips": [
      "Convolution",
      "Hierarchy",
      "One arch"
    ]
  },

  {
    "id": 79,
    "title": "RNN and LSTMs",
    "domain": "AI & ML",
    "definition": "RNNs process sequences with hidden state; LSTMs use gated cells for long-range dependencies.",
    "keyConcepts": [
      "Recurrence",
      "Hidden state",
      "Vanishing gradient",
      "LSTM gates",
      "Cell state",
      "Bidirectional"
    ],
    "examples": [
      "Language model",
      "Sequence labelling",
      "Time series"
    ],
    "realWorldApplications": [
      "Speech",
      "Translation",
      "Forecasting"
    ],
    "advantages": [
      "Variable length",
      "Sharing",
      "LSTM long",
      "Bidirectional"
    ],
    "limitations": [
      "Sequential",
      "Long deps",
      "Transformers"
    ],
    "vivaQuestions": [
      {
        "question": "Vanishing gradient?",
        "hint": "Shrink over time"
      },
      {
        "question": "Forget gate?",
        "hint": "Keep in cell"
      },
      {
        "question": "Bidirectional?",
        "hint": "Future context"
      },
      {
        "question": "RNN vs feedforward?",
        "hint": "Sequence"
      }
    ],
    "defenceAnswer": {
      "intro": "RNNs for sequences; LSTMs add memory.",
      "coreExplanation": [
        "Hidden state.",
        "Vanishing gradient.",
        "LSTM gates.",
        "Bidirectional.",
        "When to use."
      ],
      "exampleApplication": "Sentiment with LSTM.",
      "conclusion": "RNNs and LSTMs for sequences."
    },
    "keyTerms": [
      "RNN",
      "Hidden State",
      "LSTM",
      "Forget Gate",
      "Cell State"
    ],
    "speakingTips": [
      "Hidden state",
      "LSTM gates",
      "One use"
    ]
  },


];