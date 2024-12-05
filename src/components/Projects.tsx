import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Self Improving Agent for Stock Price Prediction",
      description:
        "Trained neural networks to predict stock prices, optimizing the models through iterative hyperparameter tuning. Leveraged large language models (LLMs) to intelligently suggest optimized hyperparameters after each training iteration, improving model accuracy and performance.",
      technologies: [
        "Python",
        "Neural Networks",
        "LLMS",
        "Groq",
        "Optimization",
      ],
      image: "/images/sp.jpg",
      github:
        "https://github.com/axzhir/self-improving-agent-for-stock-price-prediction",
      live: "https://www.youtube.com/@fttahir4",
    },
    {
      title: "Brain Tumor Classification with Neural Networks",
      description:
        "Developed a neural network-based model to classify tumors in brain MRI scans, utilizing transfer learning and custom convolutional layers. Employed the Gemini 1.5 Flash model to generate explainable predictions, enhancing model transparency and interpretability.",
      technologies: [
        "Python",
        "Computer Vision",
        "Neural Networks",
        "Gemini 1.5 Flash",
        "Transfer Learning",
      ],
      image: "/images/btcproject.jpg",
      github: "https://github.com/axzhir/brain-tumor-classification",
      live: "https://www.youtube.com/@fttahir4",
    },
    {
      title: "Customer Churn Prediction with Machine Learning",
      description:
        "Developed an end-to-end machine learning pipeline for customer churn prediction, including data preprocessing, model training with five different algorithms, hyperparameter tuning, and deployment through a web application for real-time inference.",
      technologies: [
        "Python",
        "Groq",
        "Machine Learning",
        "Model Inference",
        "Feature Engineering",
        "Data Visualization",
      ],
      image: "/images/ccproject.jpg",
      github: "https://github.com/axzhir/customer-churn-prediction",
      live: "https://www.youtube.com/@fttahir4",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1F1F1F] rounded-lg overflow-hidden border border-[#333333] group hover:border-[#A855F7] transition-colors"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-[#D3D3D3] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#A855F7]/10 text-[#A855F7] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-[#D3D3D3] hover:text-[#A855F7]"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-[#D3D3D3] hover:text-[#A855F7]"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
